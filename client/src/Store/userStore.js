import {create} from "zustand";
import axios from "axios";
import {getEmail, setEmail} from "../Utility/utility.js";


const userStore=create((set)=>({
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


    SingUpFormData:{name:"",email:"",pass:"",confirmPass:""},
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
    }


}))

export default userStore;