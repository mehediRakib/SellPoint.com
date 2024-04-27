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

}))
export default adminStore;