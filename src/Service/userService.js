
const userModel=require('../Model/user/userModel');
const profileModel=require('../Model/user/profileModel');

const bcrypt=require('bcrypt');
const EmailSend = require("../utility/EmailHelper");
const {EncodeToken} = require("../utility/TokenHelper");
const {compare} = require("bcrypt");
const mongoose = require("mongoose");
const ObjectID=mongoose.Types.ObjectId;


const OtpService=async (req) => {
    let reqBody = req.body;
    let email=reqBody.email;
    let name=reqBody.name;
    let password=reqBody.pass;
    let conPass=reqBody.confirmPass;
    let userType=reqBody.role;
    const code= Math.floor(100000+Math.random()*100000)
    const text=`OTP code is ${code}`;
    const subject='Email Verification'
    const total= await userModel.find({email:email,otp:'0'}).count('total')

    if(total===1){
        return {status:"exist",data:"Already have an account"};
    }
    else if(password!==conPass){
        return {status:"fail",data:"Confirm Password Does not match"};
    }

    else{
        await EmailSend(email,text,subject);
        const hashPass=await bcrypt.hash(password,10);
        const data=await userModel.updateOne({email:email},{$set:{name:name,otp:code,pass:hashPass,role:reqBody.role}},{upsert:true});
        return {status:"success",data:"6 digit message sent",result:data}
    }
}

const VerifyOtpService=async (req) => {
    const email = req.params.email;
    const otp = req.params.otp;
    const user = await userModel.findOne({email:email,otp:otp})
    if(user){
        const id=user._id ;
       let token= await EncodeToken(email,id);
        await userModel.updateOne({email:email},{$set:{otp:'0'}});
        return {status:'success',data:token};
    }
    else{
        return {status:'fail',data:'Invalid token'};
    }
}

const loginRequestService=async (req) => {
    const reqBody = req.body;
    const password=reqBody.pass;

    try{
        const user = await userModel.findOne({email: reqBody.email})
      if(user){
            const isPasswordMatch=await compare(password,user.pass);
            if(isPasswordMatch){
                const id=user._id;
                const token=await EncodeToken(reqBody.email,id);
                if(user.role!=='admin'){
                    return {status: 'success',role:'user', data: "Login Success",token:token}
                }else {
                    return {status: 'success',role:'admin', data: "Login Success",token:token}
                }

            }
            else{
                return {status: 'fail', data: "Invalid email or password",}
            }
        }
      else{
          return {status:"fail",data:"invalid email or password"}
      }
    }
    catch (e) {
        return {status:'fail',data:"something went wrong"};
    }
}

const userInfoUpdateService=async (req) => {
   try{
       const reqBody = req.body;
       const email=req.headers.email;
       console.log(email);
       const id= req.headers.userID;
       console.log("id: ",id);
       await userModel.updateOne({email:email},{name:reqBody.name,contact:reqBody.contact,pass:await bcrypt.hash(reqBody.pass,10)});
       await profileModel.updateOne({userID:id},{img:reqBody.img, userID:id,location:reqBody.location,subLocation:reqBody.subLocation},{upsert:true});
        return {status:"success",data:"Profile successfully updated"}
   }catch (e) {
       return {status:"fail",data:e.toString()}
   }
}

const accountDeleteService=async (req)=>{
    try{
        const email=req.headers.email;
        const id=req.headers.userID;
        const result=await userModel.deleteOne({email:email});

        if(result){
            await profileModel.deleteOne({userID:id});
            return {status:"success",data:"delete successful"}
        }
        else{
            return {status:"fail",data:'something went wrong'};
        }
    }catch (e) {
        return {status:"fail",data:e.toString()};
    }
}


 const readProfile=async (req)=>{
    try{
        const email=req.headers.email;
        let matchStage={$match:{email:email}};
        const joinWithProfile={$lookup:{from:"profiles",localField:"_id",foreignField:"userID",as:"profile"}};
        let unWindProfile={$unwind:"$profile"};
        let projectionStage={$project:{_id:0,otp:0,userType:0,pass:0,'profile._id':0,'profile.userID':0}};
        const data=await userModel.aggregate([
            matchStage,
            joinWithProfile,
            unWindProfile,
            projectionStage
        ])
        return {status:"success",data:data};
    }catch (e) {
        return  {status:'fail',data:e}.toString();

    }
 }


module.exports={
    OtpService,
    VerifyOtpService,
    loginRequestService,
    userInfoUpdateService,
    accountDeleteService,
    readProfile
}