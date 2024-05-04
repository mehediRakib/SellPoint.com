import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../Utility/utility.js";


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

     editProductForm:{productName:"",brandName:"",price:"",ProductDetails:{model:"",condition:"",authenticity:"",color:"",features:"",shortDes:""},ProductLocation:{division:"",district:"",area:""}},

    editProductFormOnChange: async (name, value) => {
        set((prevState) => ({
            ...prevState,
            editProductForm: {
                ...prevState.editProductForm,
                ProductDetails: {
                    ...prevState.editProductForm.ProductDetails,
                    [name]: value
                }
            }
        }));
    }

,
    productDescriptionDetails:null,
    productDescription:async (productID)=>{
        try{
            console.log("befor data fetch")
            const res=await axios.get(`/api/v1/readProductDetails/${productID}`);
            console.log("res: ",res)
            if(res.data.status==='success'){
                set({productDescriptionDetails:res.data['data']});
                set({editProductForm:res.data['data'][0]});
            }else{
                set({productDescriptionDetails:[]});
            }
        }catch (e) {
            unauthorized(e.response.status)
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
    }


}))

export default productStore;