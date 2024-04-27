const userModel=require('../Model/user/userModel');
const productModel=require('../Model/products/ProductModel');
const {EncodeToken} = require("../utility/TokenHelper");
const {compare} = require("bcrypt");
const mongoose = require("mongoose");
const ObjectID=mongoose.Types.ObjectId;

const adminLoginService=async (req)=>{
    try{
        const reqBody=req.body;
        const pass=reqBody.pass;
        const user=await userModel.findOne({email:reqBody.email});
        if(user){
            if(user.role==='admin'){
                const isConfirmedPass=await compare(pass,user.pass);
                if(isConfirmedPass){
                    const token= await EncodeToken(reqBody.email,user._id);
                    return {status:"success",data:token};
                }
                else{
                    return {status:"fail",data:"Invalid Password"};
                }
            }
            else{
                return {status:'fail',data:"user is not authorised for admin"}
            }


        }
        else {
            return {status:'fail', data:'Invalid Email or Password'};
        }
    }catch (e) {
        return {status:"fail",data:e.toString()};

    }
}
const TotalUserService=async ()=>{
    try {
        const result = await userModel.countDocuments({ otp: 0});
        return { status: "success", data: result-1 };
    } catch (e) {
        return { status: "fail", data: "Something went wrong" };
    }
}

const seeUserAccountService=async ()=>{
    try{
        const result=await userModel.find({role:null});
        return {status:"success",data:result};
    }
    catch (e) {
        return {status:"fail",data:e.toString()}
    }
}
 // Adjust the path as necessary

const deleteUserAccountService = async (req) => {
    try {
        const userID = req.body;


        const result = await userModel.deleteOne({_id: userID});

        if (result.deletedCount === 0) {
            return { status: 'fail', data: 'No user found with the provided ID' };
        }
        return { status: 'success', data: result };
    } catch (e) {
        console.error(e);  // Log the error for debugging
        return { status: 'fail', data: e.toString() };
    }
}



const updateUserAccountService=async (req)=>{
   try{
       const {name,role}=req.body;
       const id=req.params.userID;
       const result=await userModel.updateOne({_id:id},{name,role});
       return{status:'success',data:result};
   }catch (e) {
       return {status:'fail',data:e.toString()};
   }

}



const readSingleUserProductService=async (req)=>{
    try{
        const id=req.params.userID;
        const result=await productModel.find({userID:id});
        return {status:"success",data:result}
    }catch (e) {
        return {status:"fail",data:e.toString()};
    }
}


const deleteUserProductService=async (req)=>{
   try{
       const productId=req.params.productID;
       const result=await productModel.deleteOne({_id:productId});
       return {status:"success",data:result}

   }catch (e) {
       return  {status:"fail",data:e.toString()};
   }
}

module.exports={
    adminLoginService,
    TotalUserService,
    seeUserAccountService,
    deleteUserAccountService,
    updateUserAccountService,
    readSingleUserProductService,
    deleteUserProductService
}