import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import userStore from "../../Store/userStore.js";
import {data} from "autoprefixer";
import dashboard from "../../assets/images/dashboard.png"

const AppNabvar = () => {
    const navigate = useNavigate();

    const {isLogin, userDetails} = userStore();

    const countryCode = '+880';
    const phoneNumber = '01611650721';
    const message = encodeURIComponent('Hello! This is an automated message.');

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }
    const [role, setrole] = useState(null);
    useEffect(() => {
        (async () => {
            setrole(await userDetails());
        })()
    }, []);




    return (
        <>
            <div className="w-full h-20 bg-green-700 fixed top-0 z-10 ">
                <div className="flex pt-6">
                    <div className="text-white flex flex-grow ml-10">
                        <div className="flex pl-40 space-x-4">
                            <div>
                                <Link to="/" ><h4 className="text-2xl"><strong>SellPoint.com</strong></h4></Link>
                            </div>
                            <div className="pl-5">
                                <Link className="text-xl" to="/All-categories-products">All ads</Link>
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
                                    <div className="space-x-4 flex">
                                        {
                                            role==='admin'?(
                                                <div>
                                                    <Link to="/admin/dashboard" className="flex space-x-1">
                                                        <img className="h-5 w-5 " src={dashboard}/>
                                                        <p className="text-white">Dashboard</p>
                                                    </Link>
                                                </div>
                                            ):(<></>)
                                        }
                                        <div className="space-x-2">
                                            <Link to="/user-profile" className="w-32 rounded-full px-4 py-1 bg-red-400 text-center text-green-900 focus:ring-1 focus:ring-blue-400 hover:bg-red-600 font-sans hover:text-gray-100">My account</Link>
                                            <Link className="w-40 rounded-full px-4 py-1 hover:bg-purple-300 text-center text-green-900 focus:ring-1 focus:ring-red-400 bg-purple-100 font-sans " to="/create-ad">Post Your Ad</Link>

                                        </div>
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
                                        <Link className="text-white flex space-x-1" to="/login">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p>Login</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="w-40 rounded-full px-4 py-1 hover:bg-purple-300 text-center text-green-900 focus:ring-1 focus:ring-red-400 bg-purple-100 font-sans " to="/login">Post Your Ad</Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AppNabvar;