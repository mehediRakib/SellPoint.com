import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../Utility/utility.js";

const adminStore=create((set)=>({
    userAccountDetails:null,
    userAccount:async ()=>{
       try{
           const res=await axios.get('/api/v1/admin/readUserAccount');
           if(res.data.status==='success'){
               set({userAccountDetails:res.data['data']});
           }
           else{
               set({userAccountDetails:[]});
           }
       }catch (e) {
           unauthorized(e.response.status)
       }
    },

    deleteAccount: async (postBody) => {
        const res = await axios.post('/api/v1/admin/DeleteUserAccount',postBody);
        return res.data.status;
    }
    ,

    singleUserProductDetails:null,
    singleUserProduct:async (userID)=>{
        try{
            const res=await axios.get(`/api/v1/admin/readProduct/${userID}`)
            if(res.data.status==='success'){
                set({singleUserProductDetails:res.data['data']});
            }
            else {
                set({singleUserProductDetails:[]});
            }
        }catch (e) {
            unauthorized(e.response.status)
        }

    },

    deleteUserProduct:async (productID)=>{
        const res=await axios.get(`/api/v1/admin/deleteProduct/${productID}`);
        return res.data.status;

    }
    ,

    createCategory:async (postBody)=>{
        const res=await axios.post('/api/v1/admin/createCategory',postBody);
        return res.data.status;
    },

    deleteCategory:async (categoryID)=>{
        const res=await axios.get(`/api/v1/admin/deleteCategory/${categoryID}`);
        return res.data.status;
    },

    categoryForm:{categoryName:"",categoryImg:""},
    categoryFomrData:async (name,value)=>{
        set((state)=>({
            categoryForm:{
                ...state.categoryForm,
                [name]:value
            }
        }))
    },

    categoryByID:async (categoryID)=>{
        const res=await axios.get(`/api/v1/admin/categoryByID/${categoryID}`);
        if(res.data.status==='success'){
            set({categoryForm:res.data['data']})
        }
        else {
            set({categoryForm:[]});
        }
    },

    updateCategory:async (categoryID,postBody)=>{
        const res=await axios.post(`/api/v1/admin/updateCategory/${categoryID}`,postBody);
        return res.data.status;
    },

    subcategoryForm:{subcategoryName:"",subcategoryImg:""},
    subcategoryFormDataChange:async (name,value)=>{
        set((state)=>({
            subcategoryForm:{
                ...state.subcategoryForm,
                [name]:value
            }
        }))
    },

    createsubCategory:async (categoryId,postBody)=>{
        const res=await axios.post(`/api/v1/admin/create-subcategory/${categoryId}`,postBody)
        return res.data.status;
    },

    deleteSubcategoryItem:async (subcategoryID)=>{
        const res=await axios.get(`/api/v1/admin/delete-subcategory/${subcategoryID}`);
        return res.data.status;
    }


}))
export default adminStore;