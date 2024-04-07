import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import userStore from "../../Store/userStore.js";
import toast, {Toaster} from "react-hot-toast";

const MasterNavber = () => {
    const navigate = useNavigate();

    const { isLogin } = userStore();

    const countryCode = '+880';
    const phoneNumber = '01611650721'; // Your phone number
    const message = encodeURIComponent('Hello! This is an automated message.');

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }


    return (
        <>
            <div className="w-full h-64 bg-green-700">
                <div className="flex pt-10">
                    <div className="text-white flex flex-grow ml-10">
                        <div className="flex pl-40 space-x-4">
                            <div>
                                <Link to="/" ><h4 className="text-2xl"><strong>SellPoint.com</strong></h4></Link>
                            </div>
                            <div className="pl-5">
                                <Link className="text-xl" to="/all-ads">All ads</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mr-20">
                        <div className="flex space-x-5 px-10 flex-grow">
                            {isLogin() ? (
                                <>
                                    <div>
                                        <span className="flex" style={{ cursor: 'pointer' }} onClick={handleWhatsAppClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                            </svg>
                                            <p className="text-white text-md">chat</p>
                                        </span>
                                    </div>
                                    <div className="space-x-4">
                                        <Link to="/profile" className="w-32 rounded-full px-4 py-1 bg-red-400 text-center text-green-900 focus:ring-1 focus:ring-blue-400 hover:bg-red-600 font-sans hover:text-gray-100">My account</Link>
                                        <Link className="w-40 rounded-full px-4 py-1 hover:bg-purple-300 text-center text-green-900 focus:ring-1 focus:ring-red-400 bg-purple-100 font-sans " to="/create-ad">Post Your Ad</Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to='/login'>
                                        <div className="">
                                            <span className="flex" style={{ cursor: 'pointer' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                                </svg>
                                                <p className="text-white text-md">chat</p>

                                            </span>
                                        </div>
                                    </Link>
                                    <div>
                                        <Link className="w-40 rounded-full px-4 py-1 bg-red-400 text-center text-green-900 focus:ring-1 focus:ring-blue-400 hover:bg-red-600 font-sans hover:text-gray-100" to="/login">Login</Link>
                                    </div>
                                    <div>
                                        <Link className="w-40 rounded-full px-4 py-1 hover:bg-purple-300 text-center text-green-900 focus:ring-1 focus:ring-red-400 bg-purple-100 font-sans " to="/login">Post Your Ad</Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex justify-center pt-10">
                        <div className="relative">
                            <div className="flex w-96">
                                <input className="w-full h-10 rounded-l-3xl pl-5 focus:outline-none focus:ring-2 focus:ring-blue-700" placeholder="Search Here!" />
                                <button className="bg-blue-500 rounded-r-3xl px-3 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </>
    );
};


export default MasterNavber;