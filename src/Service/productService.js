const categoryModel=require('../Model/products/categoryModel');
const subcategoryModel=require('../Model/products/subCategoryModel');
const productModel=require('../Model/products/ProductModel');
const productDetailsModel=require('../Model/products/ProductDetailsModel');
const productLocationModel=require('../Model/products/ProductLocationModel');
const mongoose = require("mongoose");

const ObjectID=mongoose.Types.ObjectId










const readCategoryService=async ()=>{
    const data=await categoryModel.find();
    return {status:"success",data:data};
}

const readSubCategoryService=async (req)=>{
    let categoryID=req.params.categoryID;
    const data=await subcategoryModel.find({categoryID:categoryID});
    return {status:"success",data:data};
}

const productByCategoryService=async (req)=>{
    const categoryId=req.params.categoryID;
    const data=await productModel.find({categoryID:categoryId});
    return {status:'success',data:data};
}

const productBySubCategoryService=async (req)=>{
    const SubCategoryId=req.params.subCategoryID;
    const data=await productModel.find({subcategoryID:SubCategoryId});
    return {status:'success',data:data};
}


const productSellService=async (req)=>{
    try{
        const categoryID=req.params.categoryID;
        const subcategoryID=req.params.subcategoryID;
        const userID=req.headers.userID;
        const reqBody=req.body;
        const result=await productModel.create({productName:reqBody.productName,productImg:reqBody.img1,
            brandName:reqBody.brandName, userID:userID,price:reqBody.price,
            categoryID:categoryID,subcategoryID:subcategoryID});

        const productId = result._id;
        const detailsBody={
            img1:reqBody.img1,
            img2:reqBody.img2,
            img3:reqBody.img3,
            img4:reqBody.img4,
            img5:reqBody.img5,
            img6:reqBody.img6,
            price:reqBody.price,
            condition:reqBody.condition,
            color:reqBody.color,
            model:reqBody.model,
            authenticity:reqBody.authenticity,
            features:reqBody.features,
            shortDes:reqBody.shortDes,
            productID:productId

        }

   const LocationBody={
            division:reqBody.division,
            district:reqBody.district,
            area:reqBody.area,
            productID:productId
   }

        await productDetailsModel.create(detailsBody);
        await productLocationModel.create(LocationBody)

        return {status:"success",data:'Add created Successfully'};
    }
    catch (e) {
        return {status:"fail",data:e.toString()};
    }
}


const ReadProductDetailsService = async (req) => {
    try {
        const productId =req.params.productID;
        const matchStage={$match:{_id:productId}};

        const joinWithProductDetails={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}};
        // let unwindProductDetails = {$unwind: "$productdetails" };

        const data = await productModel.aggregate([
            matchStage,
            joinWithProductDetails,
            // unwindProductDetails
        ]);
        console.log(data)
        // const data=await productModel.find({_id:productId})

        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", data: e.toString() };
    }
}





module.exports={
    readCategoryService,
    readSubCategoryService,
    productByCategoryService,
    productBySubCategoryService,
    productSellService,
    ReadProductDetailsService
}
