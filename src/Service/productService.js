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
    const categoryId=new ObjectID(req.params.categoryID);
    const matchstage={$match:{categoryID:categoryId}};
    const joinWithSubcategoryModel={$lookup:{from:"subcategories",localField:"subcategoryID",foreignField:"_id",as:"subcategory"}};
    const unWindSubcategory={$unwind:"$subcategory"};
    const joinwithProductLocation={$lookup:{from:"productlocations",localField:"_id",foreignField:"productID",as:"location"}};
    const unwindProductLocation={$unwind:"$location"}
    const projectionStage={$project:{'subcategory.subcategoryImg':0,'subcategory.categoryID':0,'location._id':0,'location.area':0,'location.productID':0}}
    const data=await productModel.aggregate([
        matchstage,
        joinWithSubcategoryModel,
        unWindSubcategory,
        joinwithProductLocation,
        unwindProductLocation,
        projectionStage
    ]);
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
        const productId =new ObjectID(req.params.productID);
        const matchStage={$match:{_id:productId}};

        const joinWithProductDetails={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"ProductDetails"}};
        const joinWithProductLocation={$lookup:{from:"productlocations",localField:"_id",foreignField:"productID",as:"ProductLocation"}};
        const joinWithUsers={$lookup:{from:'users', localField:"userID",foreignField:"_id",as:"userInfo"}}
        const joinWithProfile={$lookup:{from:'profiles',localField:"userID",foreignField:"userID",as:"profile"}}
        const unwindProfile={$unwind:"$profile"}
        let unwindUser={$unwind:"$userInfo"}
        let unwindProductDetails = {$unwind: "$ProductDetails" };
        let unwindProductLocation={$unwind: "$ProductLocation"};
        let projectionStage={$project:{categoryID:0,subcategoryID:0,'ProductDetails._id':0,'ProductDetails.productID':0,'ProductDetails.createdAt':0,'ProductDetails.updatedAt':0,'ProductLocation._id':0,'ProductLocation.productID':0,'userInfo._id':0,'userInfo.email':0,'userInfo.otp':0,'userInfo.pass':0,
        'profile._id':0,'profile.userID':0,'profile.img':0 }};


        const data = await productModel.aggregate([
            matchStage,
            joinWithProductDetails,
            unwindProductDetails,
            joinWithProductLocation,
            unwindProductLocation,
            joinWithUsers,
            unwindUser,
            joinWithProfile,
            // unwindProfile,
            projectionStage
        ]);
        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", data: e.toString() };
    }
}


const listByKeywordService = async (req) => {
    try {
        let searchRegex = { "$regex": req.params.Keyword, "$options": "i" };
        let searchParam = [
            { productName: searchRegex },
            { brandName: searchRegex },
            { 'profileDetails.model': searchRegex }
        ];
        let searchQuery = { $or: searchParam };
        let matchStage = { $match: searchQuery };
        const jointWithproductdetails = { $lookup: { from: "productdetails", localField: "_id", foreignField: "productID", as: "ProductDetails" } };
        let unwindProductDetails = { $unwind: "$ProductDetails" };

        let projectionStage = {
            $project: {
                subcategoryID: 0,
                'ProductDetails._id': 0,
                // 'ProductDetails.productID': 0,
                'ProductDetails.img1': 0,
                'ProductDetails.features': 0,
                'ProductDetails.shortDes': 0,
                'ProductDetails.createdAt': 0,
                'ProductDetails.updatedAt': 0,
            }
        };

        const data = await productModel.aggregate([
            matchStage,
            jointWithproductdetails,
            unwindProductDetails,
            projectionStage
        ]);
        return { status: "success", data: data };
    }
    catch (e) {
        return { status: "fail", data: e.toString() };
    }
}

const listByLocationService = async (req) => {
    try {
        let searchRegex = { "$regex": req.params.Keyword, "$options": "i" };
        let searchParam = [
            { division: searchRegex },
            { district: searchRegex },
            {area: searchRegex }
        ];

        let searchQuery = { $or: searchParam };
        let matchStage = { $match: searchQuery };
        const joinWithProducts = { $lookup: { from: "products", localField: "productID", foreignField: "_id", as: "Products" } };
        let unwindProduct = { $unwind: "$Products" };

        let projectionStage = {
            $project: {
                'Products._id': 0,
                'Products.productImg': 0,
                'Products.createdAt': 0,
                'Products.updatedAt': 0
            }
        };

        const data = await productLocationModel.aggregate([
            matchStage,
            joinWithProducts,
            unwindProduct,
            projectionStage
        ]);

        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", data: e.toString() };
    }
}

const productListByLowPrice=async (req)=>{
   try{
       const subcategoryID=new ObjectID(req.params.subcategoryID);
       const matchStage = { $match: { subcategoryID: subcategoryID } };
       const sortStage={$sort:{price:1}};
       let projectionStage={$project:{categoryID:0,subcategoryID:0}};

       const data=await productModel.aggregate([
               matchStage,
               sortStage,
           projectionStage
       ])

       return {status:"success",data:data};
   } catch (e) {
       return {status:'fail',data:e.toString()};
   }
}

const productListByHighPrice=async (req)=>{
    try{
        const subcategoryID=new ObjectID(req.params.subcategoryID);
        const matchStage = { $match: { subcategoryID: subcategoryID } };
        const sortStage={$sort:{price:-1}};
        let projectionStage={$project:{categoryID:0,subcategoryID:0}};

        const data=await productModel.aggregate([
            matchStage,
            sortStage,
            projectionStage
        ])

        return {status:"success",data:data};
    } catch (e) {
        return {status:'fail',data:e.toString()};
    }
}



const sortProductByTimeService=async (req)=>{
    try{
        const subcategoryID=new ObjectID(req.params.subcategoryID);
        const matchStage = { $match: { subcategoryID: subcategoryID } };
        const sortStage={$sort:{createdAt:1}};
        let projectionStage={$project:{categoryID:0,subcategoryID:0}};

        const data=await productModel.aggregate([
            matchStage,
            sortStage,
            projectionStage
        ])

        return {status:"success",data:data};
    }catch (e) {
        return {status:"fail",data:"Something went wrong"};
    }
}


const filterProductByConditionService = async (req) => {
    try {
        const subcategoryID = new ObjectID(req.params.subcategoryID);
        const condition = req.params.condition;

        const result = await productModel.aggregate([
            {
                $match: {
                    subcategoryID: subcategoryID
                }
            },
            {
                $lookup: {
                    from: "productdetails",
                    localField: "_id",
                    foreignField: "productID",
                    as: "productDetails"
                }
            },
            {
                $addFields: {
                    matchedProductDetails: {
                        $filter: {
                            input: "$productDetails",
                            as: "productDetail",
                            cond: { $eq: ["$$productDetail.condition", condition] }
                        }
                    }
                }
            },
            {
                $match: {
                    matchedProductDetails: { $ne: [] } // Filter out documents with empty matchedProductDetails array
                }
            }
        ]);

        return { status: "success", data: result };
    } catch (e) {
        return { status: "fail", data: "Something went wrong" };
    }
}


const readClickCategoryService=async (req)=>{
   try{
       const categoryID=new ObjectID(req.params.categoryID);
       const result=await categoryModel.find({_id: categoryID})
       return {status:'success',data:result};
   }catch (e) {
       return {status:"fail",data:e.toString()};
   }
}


const readLocationService=async ()=>{
    try{
        const result=await productLocationModel.distinct('division');
        return {status:'success',data:result};
    }catch (e) {
        return {status:"fail",data:e.toString()};
    }
}


const deleteUserAdService=async (req)=>{
    try {
        const productID=new ObjectID(req.params.productID);
        const deleteProduct=await productModel.deleteOne({_id:productID});
        const delteProductDetails=await productDetailsModel.deleteOne({productID:productID});
        const delteProductLocation=await productLocationModel.deleteOne({productID:productID});

        return {status:"success",data:deleteProduct};
    }catch (e) {
        return {status:"fail",data:e.toString()}
    }
}


module.exports={
    readCategoryService,
    readSubCategoryService,
    productByCategoryService,
    productBySubCategoryService,
    productSellService,
    ReadProductDetailsService,
    listByKeywordService,
    listByLocationService,
    productListByLowPrice,
    productListByHighPrice,
    sortProductByTimeService,
    filterProductByConditionService,
    readClickCategoryService,
    readLocationService,
    deleteUserAdService
}
