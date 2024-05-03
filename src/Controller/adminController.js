const {TotalUserService, adminLoginService, seeUserAccountService, deleteUserAccountService, updateUserAccountService,
    readSingleUserProductService, deleteUserProductService, createCategoryService, deleteCategoryService,
    categoryByIDService, updateCategoryService, createSubcategoryService, deleteSubcategoryService
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

exports.deleteUserProduct=async (req,res)=>{
    const result=await deleteUserProductService(req);
    res.status(200).json(result);
}

exports.createCategory=async (req,res)=>{
    const result=await createCategoryService(req);
    res.status(200).json(result);
}

exports.deleteCategory=async (req,res)=>{
    const result= await deleteCategoryService(req);
    res.status(200).json(result);
}

exports.categoryById=async (req,res)=>{
    const result= await categoryByIDService(req);
    res.status(200).json(result);
}

exports.updateCategory=async (req,res)=>{
    const result=await updateCategoryService(req);
    res.status(200).json(result);
}

exports.createSubcategory=async (req,res)=>{
    const result=await createSubcategoryService(req);
    res.status(200).json(result);
}

exports.deleteSubcategory=async (req,res)=>{
    const result= await deleteSubcategoryService(req);
    res.status(200).json(result);
}


