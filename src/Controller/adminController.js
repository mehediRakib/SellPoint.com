const {TotalUserService, adminLoginService, seeUserAccountService, deleteUserAccountService, updateUserAccountService,
    readSingleUserProductService
} = require("../Service/adminService");


exports.adminLogin=async (req,res)=>{
    const result=await adminLoginService(req);
    if(result['status']==='success'){
        const CookieExpire={expire:new Date(Date.now()+24*60*60*1000),httpOnly:false}
        res.cookie('token',result['data'],CookieExpire);
    }
    res.status(200).json(result);
}

exports.totalUser=async (req,res)=>{
    const result=await TotalUserService();
    res.status(200).json(result);
}


exports.readUserAccount=async (req,res)=>{
    const result=await seeUserAccountService();
    res.status(200).json(result);
}

exports.deleteUserAccount=async (req,res)=>{
    const result=await deleteUserAccountService(req);
    res.status(200).json(result);
}

exports.updateAccount=async (req,res)=>{
    const result=await updateUserAccountService(req);
    res.status(200).json(result);
}

exports.readSingleUserProdcut=async (req,res)=>{
    const result=await readSingleUserProductService(req);
    res.status(200).json(result);
}
