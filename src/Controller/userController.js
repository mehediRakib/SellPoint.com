const {OtpService, VerifyOtpService, loginRequestService, userInfoUpdateService, accountDeleteService,
    readUserProfile, readUserDetailsProfile, userIdentificationService, readSingleUserAdService,
    updateUserProductDetailService
} = require("../Service/userService");


exports.otpRequest=async (req,res)=>{
    let result=await OtpService(req);
    res.status(200).json(result);
}

exports.VerifyOtp=async (req,res)=>{
   try{
       let result=await VerifyOtpService(req);
       if(result['status']==='success'){
           const cookieExpire={expires:new Date(Date.now()+24*60*60*1000),httponly:false}
           res.cookie('token',result['data'],cookieExpire)
       }
       res.status(200).json(result);
   }
    catch (e) {
        res.status(200).json(result);
    }
}

exports.loginRequest=async (req,res) => {
    const result = await loginRequestService(req);
    if(result.status==='success'){
        const CookieExpire={expires:new Date(Date.now()+24*60*60*1000),httpOnly: false}
        res.cookie("token",result['token'],CookieExpire);
        res.status(200).json(result);
    }
    else{
        res.status(200).json(result);
    }
}

exports.logoutRequest=async (req,res)=>{
    let cookieOption={expires:new Date(Date.now()-24*60*60*1000),httpOnly:false};
    // res.cookie('token',"",cookieOption);
    res.clearCookie('token',cookieOption)
    res.status(200).json({status:"success",data:"Logout Successful"});
}

exports.userInfoUpdateRequest=async (req,res)=>{
    const result=await userInfoUpdateService(req);
        res.status(200).json(result);
}

exports.DeleteAccount=async (req,res)=>{
    const result=await accountDeleteService(req);
    let cookieOption={expires:new Date(Date.now()-14*60*60*1000),httpOnly:false};
    res.clearCookie('token',cookieOption);
    res.status(200).json(result);
}


exports.ReadUserProfile=async (req,res)=>{
    const result=await readUserProfile(req);
    res.status(200).json(result);
}


exports.ReadUserDetailsProfile=async (req,res)=>{
    const result=await readUserDetailsProfile(req);
    res.status(200).json(result);

}

exports.userIdentification=async (req,res)=>{
    const result=await userIdentificationService(req);
    res.status(200).json(result);
}

exports.readSingleUserAd=async (req,res)=>{
    const result=await readSingleUserAdService(req);
    res.status(200).json(result);
}

exports.updateUserProductDetails=async (req,res)=>{
    const result=await updateUserProductDetailService(req);
    res.status(200).json(result);
}





