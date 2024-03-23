const express=require('express');
const router=express.Router();

const userController=require('../Controller/userController');
const productController=require('../Controller/productController');
const AuthVerification=require('../Middleware/AuthVerification');

//user API
router.post('/userOTP',userController.otpRequest);
router.get('/verifyOTP/:email/:otp',userController.VerifyOtp);
router.get('/Login',userController.loginRequest);
router.get('/logout',AuthVerification,userController.logoutRequest);
router.post('/profileUpdate',AuthVerification,userController.userInfoUpdateRequest);
router.get('/deleteAccount',AuthVerification,userController.DeleteAccount);
router.get('/readProfile',AuthVerification,userController.ReadProfile)


//ProductApi
router.get('/readCategory',productController.readCategory);
router.get('/subCategory/:categoryID',productController.readSubCategory);
router.get('/ProductByCategory/:categoryID',productController.readProductByCategory);
router.get('/ProductBySubCategory/:subCategoryID',productController.readProductBySubCategory);
router.post('/sellProduct/:categoryID/:subcategoryID',AuthVerification,productController.sellProduct);
router.get('/readProductDetails/:productID',productController.readProductDetails);









module.exports=router;