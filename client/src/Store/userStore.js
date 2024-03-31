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

    profileFormData: { name: "", email: "", contact: "",pass: "",profile:{division: "", district: "", area: "",img:""} },
    profileFormDataChange: async (name, value) => {
        set((state) => {
            // If the property is within profile, update it separately
            if (name.startsWith("profile.")) {
                const profileProperty = name.split(".")[1]; // Get the property name after 'profile.'
                return {
                    profileFormData: {
                        ...state.profileFormData,
                        profile: {
                            ...state.profileFormData.profile,
                            [profileProperty]: value,
                        },
                    },
                };
            } else {
                return {
                    profileFormData: {
                        ...state.profileFormData,
                        [name]: value,
                    },
                };
            }
        });
    },

    profileDetails:null,

    readProfile:async ()=>{
     try{
         const res=await axios.get('/api/v1/readProfile');
         if(res.data['data'].length>0){
             set({profileFormData:res.data['data'][0]})
             set({profileDetails:res.data['data'][0]});
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
        console.log('res:',res);
        set({isFormSubmit:false});
        return res.data.status;
    }

}))

export default userStore;