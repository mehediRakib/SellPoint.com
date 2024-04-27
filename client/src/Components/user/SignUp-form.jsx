import React from 'react';
import UserSubmitButton from "./UserSubmitButton.jsx";
import toast, {Toaster} from "react-hot-toast";
import userStore from "../../Store/userStore.js";
import {useNavigate} from "react-router-dom";
import validation from "../../Utility/validationHelper.js";

const SignUpForm = () => {
    const navigate=useNavigate()
    const {SingUpFormData,SignUpFormOnChange,OtpRequest}=userStore();

    const otpSend=async()=>{
        const postBody={
            name:SingUpFormData.name,
            email:SingUpFormData.email,
            contact:SingUpFormData.contact,
            pass:SingUpFormData.pass,
            confirmPass: SingUpFormData.confirmPass,

        }

        if(SingUpFormData.name===""){
            toast.error("Name required");
        }
        else if(SingUpFormData.email===""){
            toast.error("email required");
        }
        else if(SingUpFormData.contact===""){
            toast.error("Contact number required");
        }
        else if(postBody.pass===""){
            toast.error("password required");
        }
        else if(postBody.confirmPass===""){
            toast.error("confirm password required");
        }
        else if(!validation.isEmail(postBody.email)){
            toast.error("Valid email address required")
        }
        else {

            const result = await OtpRequest(postBody);
            if (result === 'success') {
                navigate('/verifyOTP');
            } else {
                toast.error("Something went wrong");
            }
        }

    }
    return (
        <div>
            <div className="container justify-center mt-20 flex h-auto">
                <div className="h-auto bg-white shadow-lg w-1/2 mt-10 flex p-5 justify-center rounded-md  shadow-cyan-500/45">
                    <div className="px-4 flex-grow pt-32">
                        <p className="text-center text-xl"><strong>Welcome to SellPoint.com</strong></p>
                        <p className="text-center text-gray-600">Please create your SellPoint account</p>
                    </div>
                    <div className="border-l h-full border-gray-300 px-4 flex-grow"></div>
                    <div className="flex-grow flex flex-col justify-center">
                        <div>
                            <h4 className="text-center mt-3 text-xl">Create account</h4>
                            <label className="text-gray-800">Name:</label><br/>
                            <input value={SingUpFormData.name} onChange={(e)=>{SignUpFormOnChange('name',e.target.value)}}  type="text" className="w-80 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Name:"/><br/>

                            <label className="text-gray-800">Email:</label><br/>
                            <input value={SingUpFormData.email} onChange={(e)=>{SignUpFormOnChange('email',e.target.value)}}  type="text" className="w-80 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Email:"/><br/>

                            <label className="text-gray-800">Contact:</label><br/>
                            <input value={SingUpFormData.contact} onChange={(e)=>{SignUpFormOnChange('contact',e.target.value)}}  type="text" className="w-80 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Contact:"/><br/>


                            <label className="text-gray-800">Password:</label><br/>
                            <input value={SingUpFormData.pass} onChange={(e)=>{SignUpFormOnChange('pass',e.target.value)}}  type="password" className="w-80 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Password:"/><br/>

                            <label className="text-gray-800">Confirm password:</label><br/>
                            <input value={SingUpFormData.confirmPass} onChange={(e)=>{SignUpFormOnChange('confirmPass',e.target.value)}} type="password" className="w-80 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Confirm Password:"/><br/>
                        </div>
                        <div className="text-center mt-4 flex space-x-2 justify-center">
                            <UserSubmitButton  className="rounded-md bg-green-600 w-1/2 p-2 hover:bg-green-800 hover:text-white" onClick={otpSend} text="Sign Up"/>
                        </div>

                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>

    );
};

export default SignUpForm;