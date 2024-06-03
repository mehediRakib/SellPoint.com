import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../Utility/utility.js";
import productDetails from "../Components/Products/ProductDetails.jsx";


const productStore=create((set)=>({
    categoryDetails:null,
    readCategory:async ()=>{
        try{
            const res=await axios.get('/api/v1/readCategory');
            if(res.data.status==='success'){
                set({categoryDetails:res.data['data']});
            }else {
                set({categoryDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }

    },
    ClickCategoryDetails:null,
    readClickCategory:async (categoryID)=>{
        try{
            const res=await axios.get(`/api/v1/clickCategory/${categoryID}`);
            if (res.data.status==='success'){
                set({ClickCategoryDetails:res.data['data']});
            }else {
                set({ClickCategoryDetails:[]});
            }
        }catch (e) {
             unauthorized(e.res.status);
        }
    },

    readSubCategoryDetails:null,
    readSubCategory:async(categoryID)=>{
        try{
            const res=await axios.get(`/api/v1/subCategory/${categoryID}`)
            if(res.data.status==='success'){
                set({readSubCategoryDetails:res.data['data']});
            }else {
                set({readSubCategoryDetails:[]});
            }
        }catch (e) {
            unauthorized(e.res.status);
        }
    },


    readLocationDetails:null,
    readLocation:async()=>{
       try{
           const res=await axios.get('/api/v1/readLocation');
           if(res.data.status==='success'){
               set({readLocationDetails: res.data['data']});
           }
           else{
               set({readLocationDetails:[]});
           }
       }catch (e) {
           unauthorized(e.res.status)
       }
    },

    productByCategoryDetails:null,
    productByCategory:async (categoryID)=>{
        try{
            const res=await axios.get(`/api/v1/ProductByCategory/${categoryID}`);
            if(res.data.status==='success'){
                set({productByCategoryDetails:res.data['data']});
                return res.data['data'];
            }
            else{
                set({productByCategoryDetails:[]});
            }
        }catch (e) {
            unauthorized(e.res.status);
        }
    },

     productForm:{productName:"",brandName:"",price:""},
     productDetailsForm:{img1:"",model:"",condition:"",authenticity:"",color:"",features:"",shortDes:""},
     productLocationForm:{division:"",district:"",area:""},

     onChange:(formName,name,value)=>{
        set((state)=>({
            [formName]:{
                ...state[formName],
                [name]:value
            }
        }))
     },

    readProductById:async (productId)=>{
        const res=await axios.get(`/api/v1/product-by-Id/${productId}`);
        if(res.data.status==='success'){
            set({productForm:res.data['data'][0]})
        }else {
            set({productForm:[]});
        }
    },

    readProductDetailsById:async (productId)=>{
        const res=await axios.get(`/api/v1/product-details-by-Id/${productId}`);
        if(res.data.status==='success'){
            set({productDetailsForm:res.data['data'][0]})
        }else {
            set({productDetailsForm:[]});
        }
    },

    readLocationById:async (productId)=>{
        const res=await axios.get(`/api/v1/product-location-by-Id/${productId}`);
        if(res.data.status==='success'){
            set({productLocationForm:res.data['data'][0]})
        }else {
            set({productLocationForm:[]});
        }
    },




    productSellForm:{productName:"",brandName:"",price:"",condition:"",color:"",model:"",authenticity:"",features:"",shortDes:"",division:"",district:"",area:""},
    productSellFormOnchange:async (name,value)=>{
        set((state)=>({
            productSellForm:{
                ...state.productSellForm,
                [name]:value
            }
        }))
    },
    isFormSubmit:false,
    productSell:async (postBody,categoryID,subcategoryID)=>{
        set({isFormSubmit:true})
        const res=await axios.post(`/api/v1/sellProduct/${categoryID}/${subcategoryID}`,postBody);
        set({isFormSubmit:false})
        return res.data.status;
    },
    productByKeywordDetails:null,
    productByKeyWord:async (keyword)=>{
        const res=await axios.get(`/api/v1/listByKeyword/${keyword}`);
        if(res.data.status==='success'){
            set({productByCategoryDetails:res.data['data']});
            set({productByKeywordDetails:res.data['data']});
        }
        else {
            set({productByCategoryDetails:[]});
        }

    },

    deleteUserProduct:async (userID)=>{
        const res=await axios.get(`/api/v1/delete-user-ad/${userID}`);
        return res.data.status;
    },
    readDivisionDetails:null,
    readDivision:async ()=>{
        try{
            const res=await axios.get('/api/v1/division');
            if(res.data.status==='success'){
                set({readDivisionDetails:res.data['data']});
            }
            else{
                set({readDivisionDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.state);
        }
    },

    readDistrictDetails:null,
    readDistrict:async (divisionID)=>{
        try{
            const res=await axios.get(`/api/v1/district/${divisionID}`);
            if(res.data.status==='success'){
                set({readDistrictDetails:res.data['data']});
            }
            else{
                set({readDistrictDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.state);
        }
    },

    listByKeywordDetails:null,
    listByKeyword:async (keyWord)=>{
        const res=await axios.get(`/api/v1/listByKeyword/${keyWord}`);
        if(res.data.status==='success'){
            set({listByKeywordDetails:res.data['data']});
        }
        else{
            set({listByKeywordDetails:[]});
        }
    },

    DivisionName:{division:""},
    ReadDivisionByID:async (divisionID)=>{
        const res=await axios.get(`/api/v1/division-by-ID/${divisionID}`);
        if(res.data.status==='success'){
            set({DivisionName:res.data['data'][0]})
        }else {
            set({DivisionName:[]});
        }
    },


    DistrictName:{division:""},
    ReadDistrictByID:async (districtID)=>{
        const res=await axios.get(`/api/v1/district-by-ID/${districtID}`);
        if(res.data.status==='success'){
            set({DistrictName:res.data['data'][0]})
        }else {
            set({DistrictName:[]});
        }
    }
    ,
    productBySubcategoryDetails:null,
    productBySubcategory:async (subcategoryId)=>{
        const res=await axios.get(`/api/v1/ProductBySubCategory/${subcategoryId}`);
        if(res.data.status==='success'){
            set({productBySubcategoryDetails:res.data['data']});
        }
        else {
            set({productBySubcategoryDetails:[]});
        }
    },

    readAllProductDetails:null,
    readAllProduct:async ()=>{
        const res=await axios.get('/api/v1/allProduct');
        if(res.data.status==='success'){
            set({readAllProductDetails:res.data['data']});
        }
        else {
            set({readAllProductDetails:[]});
        }
    },

    readProductByLocationDetails:null,
    readProductByLocation:async (divisionID)=>{
        const res=await axios.get(`/api/v1/productByLocation/${divisionID}`);
        if(res.data.status==='success'){
            set({readProductByLocationDetails:res.data['data']});
        }
        else {
            set({readProductByLocationDetails:[]});
        }
    },

    readProductByDistrictDetails:null,
    readProductByDistrict:async (categoryId,districtId)=>{

            let url=`/api/v1/product-by-district/${categoryId}/${districtId}`;
        console.log("url: ",url);

        const res=await axios.get(url);
        if(res.data.status==='success'){
            set({readProductByDistrictDetails:res.data['data']})
        }
        else {
            set({readProductByDistrictDetails:[]});
        }
    }


}))

export default productStore;