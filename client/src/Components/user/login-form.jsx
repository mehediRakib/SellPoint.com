import React from 'react';
import UserSubmitButton from "./UserSubmitButton.jsx";
import {Link, useNavigate} from "react-router-dom";
import userStore from "../../Store/userStore.js";
import validation from "../../Utility/validationHelper.js";
import toast, {Toaster} from "react-hot-toast";


const LoginForm = () => {
    const navigate=useNavigate();

    const {loginFormData,loginFormOnChange,doLogin}=userStore();


    const onLogin=async () => {
        if (loginFormData.email === "") {
            toast.error("Email is required")
        } else if (loginFormData.pass === "") {
            toast.error("Password is required");
        } else if (!validation.isEmail(loginFormData.email)) {
            toast.error("valid Email Address required");
        } else {

            const postBody={
                email:loginFormData.email,
                pass:loginFormData.pass,
            }
            let result = await doLogin(postBody);
            if(result['status']==='success' && result['role']==='admin'){
                navigate('/admin/dashboard')
            }
            else if(result['status']==='success' && result['role']==='user'){
                navigate('/')
            }
            else if(result['status']==='fail') {
                toast.error('Invalid email or password');
            }
        }

    }
    return (
        <div>
            <div className="container justify-center mt-20 flex h-80">
                <div className="h-auto bg-white shadow-lg w-1/2 mt-10 flex p-5 justify-center rounded-md  shadow-cyan-500/30">
                    <div className="px-4 flex-grow pt-20">
                        <p className="text-center text-xl"><strong>Welcome to SellPoint.com</strong></p>
                        <p className="text-center text-gray-600">Please Login For managing your account</p>
                    </div>
                    <div className="border-l h-full border-gray-300 px-4 flex-grow"></div>
                    <div className="flex-grow flex flex-col justify-center">
                        <div>
                            <h4 className="text-center text-xl">Sign In</h4>
                            <label className="text-gray-800">Email:</label><br/>
                            <input value={loginFormData.email} onChange={(e)=>{loginFormOnChange('email',e.target.value)}} type="email" className="w-80 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Email:"/><br/>

                            <label className="text-gray-800">Password:</label><br/>
                            <input value={loginFormData.pass} onChange={(e)=>{loginFormOnChange("pass",e.target.value)}} type="password" className="w-80 rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Password:"/>
                        </div>
                        <div className="text-center mt-4 flex space-x-2">
                            <UserSubmitButton onClick={onLogin} className="rounded-md bg-green-600 w-1/2 p-2 hover:bg-green-800 hover:text-white " text="Login"/>
                            <Link to="/create-account" className="rounded-md bg-red-500 w-1/2 p-2 hover:bg-red-800 hover:text-gray-300">Create account</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>

    );
};

export default LoginForm;