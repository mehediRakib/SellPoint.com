import {create} from "zustand";
import axios from "axios";
import {getEmail, setEmail, unauthorized} from "../Utility/utility.js";
import Cookies from 'js-cookie'



const userStore=create((set)=>({

    isLogin:()=>{
        return !! Cookies.get('token');
    },

    isFormSubmit:false,

    loginFormData:{email:"",pass:""},
    loginFormOnChange:(name,value)=>{
    set((state)=>({
        loginFormData:{
            ...state.loginFormData,
            [name]:value
        }
    }))
    },

    doLogin:async (postBody) => {
        set({isFormSubmit:true})
        const result=await axios.post('/api/v1/Login',postBody);
        set({isFormSubmit:false})
        return result.data;

    },


    SingUpFormData:{name:"",email:"",contact:"",pass:"",confirmPass:""},
    SignUpFormOnChange:(name,value)=>{
    set((state)=>({
        SingUpFormData:{
            ...state.SingUpFormData,
            [name]:value
        }
    }))
    },

    OtpRequest:async (postBody)=>{
      set({isFormSubmit:true});
      const result=await axios.post('/api/v1/userOTP',postBody);
      setEmail(postBody.email);
      set({isFormSubmit:false});
      return result.data.status;
    },


    otpFormData:{otp:""},
    otpFormDataChange:async (name,value)=>{
        set((state)=>({
            otpFormData:{
                ...state.otpFormData,
                [name]:value
            }
        }))
    },

    OtpVerify:async (otp)=>{

        let email=getEmail();
        set({isFormSubmit:true})
        let result=await axios.get(`/api/v1/verifyOTP/${email}/${otp}`);
        set({isFormSubmit:false});
        return result.data['status'];
    },

    profileFormData: { name: null, contact: null,NewPass: null,area: null,img:null,division: null, district: null,OldPass:null},
    profileFormDataChange: async (name, value) => {
        set((state) => ({
            profileFormData:{
                ...state.profileFormData,
                    [name]:value
    }
        }));
    },

    profileDetails:null,

    readProfile:async ()=>{
     try{
         const res=await axios.get('/api/v1/readProfile');
         if(res.data['data'].length>0){
             set({profileFormData:res.data['data'][0]})
             set({profileDetails:res.data['data']});
         }
         else{
             set({profileDetails:[]});
         }
     }
       catch (e) {
           unauthorized(e.response.status)
       }
    },


    readProfileDetails :async ()=>{
        try{
            const res=await axios.get('/api/v1/readProfileDetails');
            if(res.data['data'].length>0){
                set({profileFormData:res.data['data'][0]})
                set({profileDetails:res.data['data']});
            }
            else{
                set({profileDetails:[]});
            }
        }
        catch (e) {
            unauthorized(e.response.status)
        }
    },

    doLogout:async ()=>{
        set({isFormSubmit:true});
        const res=await axios.get('/api/v1/logout');
        set({isFormSubmit:false});
        return res.data.status;
    },

    profileUpdate:async (postBody)=>{
        set({isFormSubmit:true});
        const res=await axios.post('/api/v1/profileUpdate',postBody);
        set({isFormSubmit:false});
        return res.data.status;
    },

    accountDelete:async ()=>{
        set({isFormSubmit:true});
        const res=await axios.get('/api/v1/deleteAccount');
        set({isFormSubmit:false});
        return res.data.status;

    },


    userDetails:async ()=>{
        const res=await axios.get('/api/v1/userIdentification');
        return res.data['data'];
    },

    readUserAdDetails:null,
    readUserAd:async (userID)=>{
       try {
           const res=await axios.get(`/api/v1/read-single-user-ad/${userID}`)
           if(res.data.status==='success'){
               set({readUserAdDetails:res.data['data']});
           }
           else {
               set({readUserAdDetails:[]});
           }
       }catch (e) {
           unauthorized(e.response.status)

       }
    }

}))

export default userStore;