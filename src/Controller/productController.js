const {readCategoryService, readSubCategoryService, productByCategoryService, productBySubCategoryService,
    productSellService, ReadProductDetailsService
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