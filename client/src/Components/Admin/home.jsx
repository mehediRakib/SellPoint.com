import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import adminStore from "../../Store/adminStore.js";

const Home = () => {
    const {totalAd,totalUser}=adminStore();
    const [totalad,setTotalad]=useState("");
    const [totaluser,setTotaluser]=useState('');
    useEffect(() => {
        (async ()=>{
            const res=await totalAd();
            if(res.status==='success'){
                setTotalad(res.data)

            }
            const result=await totalUser();
            if(result.status==='success'){
                setTotaluser(result.data)

            }
        })()
    }, []);
    return (
        <div className="mt-10 font-sans text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center py-12 mt-4">
                    <Link to="/admin/dashboard" className="text-3xl font-semibold text-indigo-600">
                        Dashboard
                    </Link>
                </div>
                <hr />
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    <div className="bg-gray-800 text-white w-full md:w-1/4 p-8 rounded-lg shadow-lg">
                        <p className="text-xl mb-4 font-semibold">Navigation</p>
                        <div className="space-y-3">
                            <Link to="/user-profile" className="block py-2 hover:bg-gray-700 rounded">My Account</Link>
                            <Link to="/create-ad" className="block py-2 hover:bg-gray-700 rounded">Create Ad</Link>
                            <Link to="/All-categories-products" className="block py-2 hover:bg-gray-700 rounded">View Product</Link>
                            <Link to="/admin/manage-categories" className="block py-2 hover:bg-gray-700 rounded">Manage Categories</Link>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4 p-8">
                        <div className="mb-20 grid grid-cols-2 gap-24">

                                    <div className="bg-gray-100 rounded-md shadow-md h-24 hover:shadow-lg">
                                        <p className="flex justify-center items-center pt-6 text-xl font-semibold">Total Ad</p>
                                        <p className="items-center justify-center flex text-2xl hover:text-3xl font-semibold border-t border-cyan-400">{totalad}</p>
                                    </div>



                            <div className="bg-gray-100 rounded-md shadow-md h-24 hover:shadow-lg pb-4">
                                <p className="flex justify-center items-center pt-6 text-xl font-semibold">Total User Account</p>
                                <p className="items-center justify-center flex text-2xl hover:text-3xl font-semibold border-t border-cyan-400 hover:delay-100 hover:duration-300">{totaluser}</p>
                            </div>


                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card link="/user-account" bgColor="bg-pink-500" title="User Account" />
                            <Card link="/All-categories-products" bgColor="bg-blue-500" title="View Products" />
                            <Card link="/create-ad" bgColor="bg-green-500" title="Create Ad" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function Card({ link, bgColor, title }) {
        return (
            <Link to={link} className={`rounded-lg p-10 text-center text-xl font-medium text-white transition-all duration-300 ease-in-out ${bgColor} hover:shadow-xl hover:scale-105`}>
                {title}
            </Link>
        );
    }


};

export default Home;