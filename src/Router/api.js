const express=require('express');
const router=express.Router();

const userController=require('../Controller/userController');
const productController=require('../Controller/productController');
const AuthVerification=require('../Middleware/AuthVerification');
const isAdmin=require('../Middleware/adminAuthVerification');
const adminController=require('../Controller/adminController');

//user API
router.post('/userOTP',userController.otpRequest);
router.get('/verifyOTP/:email/:otp',userController.VerifyOtp);
router.post('/Login',userController.loginRequest);
router.get('/logout',AuthVerification,userController.logoutRequest);
router.post('/profileUpdate',AuthVerification,userController.userInfoUpdateRequest);
router.get('/deleteAccount',AuthVerification,userController.DeleteAccount);
router.get('/readProfile',AuthVerification,userController.ReadUserProfile);
router.get('/readProfileDetails',AuthVerification,userController.ReadUserDetailsProfile);
router.get('/userIdentification',AuthVerification,userController.userIdentification);
router.get('/read-single-user-ad/:userID',AuthVerification,userController.readSingleUserAd);



//ProductApi
router.get('/readCategory',productController.readCategory);
router.get('/subCategory/:categoryID',productController.readSubCategory);
router.get('/ProductByCategory/:categoryID',productController.readProductByCategory);
router.get('/ProductBySubCategory/:subCategoryID',productController.readProductBySubCategory);
router.post('/sellProduct/:categoryID/:subcategoryID',AuthVerification,productController.sellProduct);
router.get('/readProductDetails/:productID',productController.readProductDetails);
router.get('/listByKeyword/:Keyword',productController.listByKeyWord);
router.get('/listBylocation/:Keyword',productController.listByLocation);
router.get('/listByLowPrice/:subcategoryID',productController.listByLowPrice);
router.get('/listByHighPrice/:subcategoryID',productController.listByHighPrice);
router.get('/sortByTime/:subcategoryID',productController.sortProductByTime);
router.get('/sortByCondition/:subcategoryID/:condition',productController.sortByCondition);
router.get('/clickCategory/:categoryID',productController.readClickCategory);
router.get('/readLocation',productController.readLocation);
router.get('/division-by-ID/:divisonID',productController.readDivisionById);
router.get('/delete-user-ad/:productID',AuthVerification,productController.deleteUserAd);
router.get('/allProduct',productController.readAllProduct);
router.get('/productByLocation/:divisionID',productController.readProductByLocation);


//Admin api endPoint
router.get('/admin/Login',adminController.adminLogin);
router.get('/admin/totalUser',AuthVerification,isAdmin,adminController.totalUser);
router.get('/admin/readUserAccount',AuthVerification,isAdmin,adminController.readUserAccount);
router.post('/admin/DeleteUserAccount',AuthVerification,isAdmin,adminController.deleteUserAccount);
router.get('/admin/updateAccount/:userID',AuthVerification,isAdmin,adminController.updateAccount);
router.get('/admin/readProduct/:userID',AuthVerification,isAdmin,adminController.readSingleUserProdcut);
router.get('/admin/deleteProduct/:productID',AuthVerification,isAdmin,adminController.deleteUserProduct);
router.post('/admin/createCategory',AuthVerification,isAdmin,adminController.createCategory);
router.get('/admin/deleteCategory/:categoryID',AuthVerification,isAdmin,adminController.deleteCategory);
router.get('/admin/categoryByID/:categoryID',AuthVerification,isAdmin,adminController.categoryById);
router.post('/admin/updateCategory/:categoryID',AuthVerification,isAdmin,adminController.updateCategory);
router.post('/admin/create-subcategory/:categoryID',AuthVerification,isAdmin,adminController.createSubcategory);
router.get('/admin/delete-subcategory/:subcategoryID',AuthVerification,isAdmin,adminController.deleteSubcategory);

//location

router.get('/division',productController.readDivision);
router.get('/district/:divisionID',productController.readDistrict);




module.exports=router;