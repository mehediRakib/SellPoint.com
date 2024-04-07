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

    }

}))

export default productStore;