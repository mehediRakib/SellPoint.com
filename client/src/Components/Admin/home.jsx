import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="mt-8 font-sans text-gray-800">
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
                            <Link to="/profile" className="block py-2 hover:bg-gray-700 rounded">My Account</Link>
                            <Link to="/create-ad" className="block py-2 hover:bg-gray-700 rounded">Create Ad</Link>
                            <Link to="/All-categories-products" className="block py-2 hover:bg-gray-700 rounded">View Product</Link>
                            <Link to="/admin/manage-categories" className="block py-2 hover:bg-gray-700 rounded">Manage Categories</Link>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4 p-8">
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