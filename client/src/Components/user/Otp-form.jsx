import React from 'react';
import UserSubmitButton from "./UserSubmitButton.jsx";
import {Link, useNavigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import userStore from "../../Store/userStore.js";

const OtpForm = () => {
    let {OtpVerify,otpFormData,otpFormDataChange}=userStore();
    const navigate=useNavigate();

    const onVerifyOTP=async ()=>{
        const result=await OtpVerify(otpFormData.otp);
        if(result==='success'){
            navigate('/');
        }
        else {
            toast.error("Invalid OTP");
        }

    }
    return (
        <div>
            <div className="container justify-center mt-20 flex h-80">
                <div className="h-auto bg-white shadow-lg w-1/2 mt-10 flex p-5 justify-center rounded-md  shadow-cyan-500/50">
                    <div className="px-4 flex-grow pt-20">
                        <p className="text-center text-xl"><strong>Welcome to SellPoint.com</strong></p>
                        <p className="text-center text-gray-600">Please Login For managing your account</p>
                    </div>
                    <div className="border-l h-full border-gray-300 px-4 flex-grow"></div>
                    <div className="flex-grow flex flex-col justify-center">
                        <div>
                            <label className="text-gray-800">Otp:</label><br/>
                            <input value={otpFormData.otp} onChange={(e)=>{otpFormDataChange('otp',e.target.value)}} type="text" className="w-80 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter OTP:"/><br/>

                        </div>
                        <div className="text-center mt-4 flex space-x-2">
                            <UserSubmitButton onClick={onVerifyOTP} className="rounded-md bg-green-600 w-1/2 p-2 hover:bg-green-800 hover:text-white " text="Verify OTP"/>
                        </div>

                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default OtpForm;