const {readCategoryService, readSubCategoryService, productByCategoryService, productBySubCategoryService,
    productSellService, ReadProductDetailsService, listByKeywordService, listByLocationService, productListByLowPrice,
    productListByHighPrice, sortProductByTimeService, filterProductByConditionService,readClickCategoryService,
    readLocationService, deleteUserAdService, readDivisionService, readDistrictService, readDivisionByIdService
} = require("../Service/productService");

exports.readCategory=async (req,res)=>{
    const result=await readCategoryService();
    res.status(200).json(result);
}

exports. readSubCategory=async (req,res)=>{
    const result=await readSubCategoryService(req);
    res.status(200).json(result);
}

exports.readProductByCategory=async (req,res)=>{
    const result=await productByCategoryService(req);
    res.status(200).json(result);
}

exports.readProductBySubCategory=async (req,res)=>{
    const result=await productBySubCategoryService(req);
    res.status(200).json(result);
}

exports.sellProduct=async (req,res)=>{
    const result=await productSellService(req);
    res.status(200).json(result);
}

exports.readProductDetails=async (req,res)=>{
    const result=await ReadProductDetailsService(req);
    res.status(200).json(result);
}

exports.listByKeyWord=async (req,res)=>{
    const result=await listByKeywordService(req)
    res.status(200).json(result);
}


exports.listByLocation=async (req,res)=>{
    const result=await listByLocationService(req);
    res.status(200).json(result);
}

exports.listByLowPrice=async (req,res)=>{
    const result=await productListByLowPrice(req);
    res.status(200).json(result);
}

exports.listByHighPrice=async (req,res)=>{
    const result=await productListByHighPrice(req);
    res.status(200).json(result);
}

exports. sortProductByTime=async (req,res)=>{
    const result=await sortProductByTimeService(req);
    res.status(200).json(result);
}

exports.sortByCondition=async (req,res)=>{
    const result=await filterProductByConditionService(req);
    res.status(200).json(result);
}

exports.readClickCategory=async(req,res)=>{
    const result=await readClickCategoryService(req);
    res.status(200).json(result);
}

exports.readLocation=async (req,res)=>{
    const result=await readLocationService();
    res.status(200).json(result);
}

exports.deleteUserAd=async (req,res)=>{
    const result=await deleteUserAdService(req);
    res.status(200).json(result);
}

exports.readDivision=async (req,res)=>{
    const result=await readDivisionService();
    res.status(200).json(result);
}

exports.readDistrict=async (req,res)=>{
    const result=await readDistrictService(req);
    res.status(200).json(result);
}

exports.readDivisionById=async (req,res)=>{
    const result=await readDivisionByIdService(req);
    res.status(200).json(result);
}
