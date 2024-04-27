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
            }
            else{
                set({productByCategoryDetails:[]});
            }
        }catch (e) {
            unauthorized(e.res.status);
        }
    },

    productDescriptionDetails:null,
    productDescription:async (productID)=>{
        try{
            const res=await axios.get(`/api/v1/readProductDetails/${productID}`);
            if(res.data.status==='success'){
                set({productDescriptionDetails:res.data['data']});
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
        }
        else {
            set({productByCategoryDetails:[]});
        }

    },

    deleteUserProduct:async (userID)=>{
        const res=await axios.get(`/api/v1/delete-user-ad/${userID}`);
        return res.data.status;
    }


}))

export default productStore;