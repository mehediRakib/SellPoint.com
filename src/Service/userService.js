
const userModel=require('../Model/user/userModel');
const profileModel=require('../Model/user/profileModel');
const productDetailsModel=require('../Model/products/ProductDetailsModel');
const productLocationModel=require('../Model/products/ProductLocationModel');

const bcrypt=require('bcrypt');
const EmailSend = require("../utility/EmailHelper");
const {EncodeToken} = require("../utility/TokenHelper");
const {compare} = require("bcrypt");
const mongoose = require("mongoose");
const productModel = require("../Model/products/ProductModel");
const ObjectID=mongoose.Types.ObjectId;


const OtpService=async (req) => {
    let reqBody = req.body;
    let email=reqBody.email;
    let name=reqBody.name;
    let contact=reqBody.contact;
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
        const data=await userModel.updateOne({email:email},{$set:{name:name,otp:code,pass:hashPass,role:reqBody.role,contact:contact}},{upsert:true});
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

const userInfoUpdateService=async (req) => {
   try{
       const reqBody = req.body;
       const email=req.headers.email;
       const id= req.headers.userID;
       const password=reqBody.pass;

       if(password===undefined){
           await userModel.updateOne({email: email}, {$set: {name: reqBody.name, contact: reqBody.contact, pass: password}}, {upsert: true});
       }
       else {
           await userModel.updateOne({email: email}, {$set: {name: reqBody.name, contact: reqBody.contact, pass: await bcrypt.hash(reqBody.pass, 10)}}, {upsert: true});
       }

       await profileModel.updateOne({userID: id}, {$set: {img: reqBody.img, userID: id, division: reqBody.division, district: reqBody.district, area: reqBody.area}}, {upsert: true});

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


 const readUserProfile=async (req)=>{
    try{
        const email=req.headers.email;
        let matchStage={$match:{email:email}};
        let projectionStage={$project:{otp:0,pass:0}};

        const userData=await userModel.aggregate([
            matchStage,
            projectionStage
        ])
        return {status:"success",data:userData};
    }catch (e) {
        return  {status:'fail',data:e}.toString();

    }
 }


const readUserDetailsProfile=async (req)=>{
    try{
        const email=req.headers.email;
         const user=await userModel.findOne({email:email});
         const id=user._id;
        const matchStage={$match: {userID:id}};
        const result=await profileModel.aggregate([
            matchStage
        ])
        return {status:"success",data:result};
    }catch (e) {
        return  {status:'fail',data:e}.toString();

    }
}

const loginRequestService = async (req) => {
    try {
        const reqBody = req.body;
        const user = await userModel.findOne({ email: reqBody.email });

        if (user) {
            const isPasswordMatch = await bcrypt.compare(reqBody.pass, user.pass);

            if (isPasswordMatch) {
                const token = await EncodeToken(reqBody.email, user._id);
                return user.role === 'admin'
                    ? { status: "success", token, role: 'admin' }
                    : { status: "success", token, role: 'user' };
            } else {
                return { status: "fail", data: "Invalid Password" };
            }
        } else {
            return { status: "fail", data: "Invalid email or password" };
        }
    } catch (error) {
        console.error("Login service error:", error);
        return { status: "fail", data: "Login failed" }; // Generic error message for user
    }
};

//For show dashboard
const userIdentificationService=async (req)=>{
    const email=req.headers.email;
    const user=await userModel.findOne({email:email});
    return {status:'success',data:user.role};
}

const readSingleUserAdService=async (req)=>{
    try{
        const id=req.params.userID;
        const result=await productModel.find({userID:id});
        return {status:"success",data:result}
    }catch (e) {
        return {status:"fail",data:e.toString()};
    }

}

const updateUserProductDetailService=async (req)=>{
    try{
        const productID=new ObjectID(req.params.productID);
        const postBody=req.body;
        const productBody={
            productName:postBody.productName,
            productImg:postBody.img1,
            price:postBody.price,
            brandName:postBody.brandName
        }
        const DetailsBody={
            img1:postBody.img1,
            img2:postBody.img2,
            price:postBody.price,
            color:postBody.color,
            condition:postBody.condition,
            model:postBody.model,
            authenticity:postBody.authenticity,
            features:postBody.features,
            shortDes:postBody.shortDes
        }
                 const data=await productModel.updateOne({_id:productID},productBody);
                 await productDetailsModel.updateOne({productID:productID},DetailsBody);
                 await productLocationModel.updateOne({productID:productID},{division:postBody.division,district:postBody.district,area:postBody.district});
        return {status: "success", data: data}

    }catch (e) {

    }
}



module.exports={
    OtpService,
    VerifyOtpService,
    loginRequestService,
    userInfoUpdateService,
    accountDeleteService,
    readUserProfile,
    readUserDetailsProfile,
    userIdentificationService,
    readSingleUserAdService,
    updateUserProductDetailService

}