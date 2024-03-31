const {OtpService, VerifyOtpService, loginRequestService, userInfoUpdateService, accountDeleteService,
    sellProductService, readProfile
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
    res.status(200).json(result);
}


exports.ReadProfile=async (req,res)=>{
    const result=await readProfile(req);
    res.status(200).json(result);

}





