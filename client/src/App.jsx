import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/Login-Page.jsx";
import SignUpPage from "./Pages/SignUp-Page.jsx";
import OtpPages from "./Pages/Otp-pages.jsx";
import ProfilePage from "./Pages/Profile-page.jsx";
import HomePage from "./Pages/Home-page.jsx";
import ProductPage from "./Pages/Product-page.jsx";
import ProductDetailsPage from "./Pages/productDetails-page.jsx";
import CreateAdPage from "./Pages/Create-Ad-Page.jsx";
import SubcategoryPage from "./Components/Products/SubcategoryPage.jsx";
import CreateAd from "./Components/Products/create-ad.jsx";
import AdminHomePage from "./Pages/admin-Page/Admin-Home-page.jsx";
import UserAccountPage from "./Pages/admin-Page/User-account-page.jsx";
import UserProductPage from "./Pages/admin-Page/userProduct-page.jsx";
import UserProfilePage from "./Pages/User-profile-page.jsx";
import ProfileEditPage from "./Pages/Profile-edit-page.jsx";
import UserAdPage from "./Pages/User-ad-page.jsx";
import EditProductDetailsPage from "./Pages/EditProductDetails-page.jsx";
import ProductByKeyword from "./Pages/Product-By-Keyword.jsx";
import ProductShowBySubCategory from "./Components/Products/ProductShowBySubCategory.jsx";
import AllProductDisplayPage from "./Pages/All-product-display-page.jsx";
import ProductBySearchLocation from "./Components/Products/Product-By-SearchLocation.jsx";
import ManageCategory from "./Components/Admin/Manage-category.jsx";
import EditCategory from "./Components/Admin/Edit-category.jsx";
import CreateSubcategory from "./Components/Admin/create-subcategory.jsx";
import EditSubCategory from "./Components/Admin/Edit-subCategory.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/create-account" element={<SignUpPage/>}/>
                <Route path="/verifyOTP" element={<OtpPages/>}/>
                <Route path="/user-profile" element={<UserProfilePage/>}/>
                <Route path="/my-account/:userID" element={<ProfilePage/>}/>
                <Route path="/products/:categoryID" element={<ProductPage/>}/>
                <Route path="/productDetails/:productName/:productID" element={<ProductDetailsPage/>}/>
                <Route path="/create-ad" element={<CreateAdPage/>}/>
                <Route path="/:categoryName/:categoryID" element={<SubcategoryPage/>}/>
                <Route path="/:subcategoryName/:categoryID/:subcategoryID" element={<CreateAd/>}/>
                <Route path="/user-account" element={<UserAccountPage/>}/>
                <Route path="/profile-edit/:userID" element={<ProfileEditPage/>}/>
                <Route path="/my-ads/:userID" element={<UserAdPage/>}/>
                <Route path="/edit-product-details/:productID" element={<EditProductDetailsPage/>}/>
                <Route path="/by-keyword/:Keyword" element={<ProductByKeyword/>}/>
                <Route path="/Products/:ClickedSubcategoryName/:categoryID" element={<ProductShowBySubCategory/>}/>
                <Route path="/All-categories-products" element={<AllProductDisplayPage/>}/>
                <Route path="/Product-by-division/:DivisionName/:divisionID" element={<ProductBySearchLocation/>}/>


                //Admin Route
                <Route path="/admin/dashboard" element={<AdminHomePage/>}/>
                <Route path="/admin/user-product/:userID" element={<UserProductPage/>}/>
                <Route path="/admin/manage-categories" element={<ManageCategory/>}/>
                <Route path="/admin/edit-category/:categoryID" element={<EditCategory/>}/>
                <Route path="/admin/create-subcategory/:categoryID" element={<CreateSubcategory/>}/>
                <Route path="/admin/edit-subcategory/:subcategoryID" element={<EditSubCategory/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default App;