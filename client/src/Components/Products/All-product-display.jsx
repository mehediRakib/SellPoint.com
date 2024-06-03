import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import productStore from "../../Store/productStore.js";
import Location from "./location.jsx";
import SideBarWithAllCategory from "./SideBar-with-allCategory.jsx";
import TopBar from "./Top-Bar.jsx";


const AllProductDisplay = () => {

    const {readCategory,categoryDetails,readLocation,readLocationDetails,readAllProductDetails,readAllProduct}=productStore();

    useEffect(() => {
        (async () => {
            await readCategory();
            await readLocation();
            await readAllProduct();
        })()
    }, []);
    return (
        <div className=" mt-10 sm:mt-28 bg-gray-100">
            <div className="flex justify-center">
                <div className="w-full sm:w-5/6 shadow-lg h-full">
                   <TopBar/>
                    <hr className="border border-gray-200 mt-2"/>
                    <div className="flex flex-col sm:flex-row h-auto">
                        <div className="w-full sm:w-1/4 shadow-xl border-r border-gray-300">
                            <div className="ml-5 mt-10 space-y-3">
                                <p className="text-gray-600">Sort result by</p>
                                <input className="border border-gray-400 rounded-md"/>
                            </div>

                            <hr className="mt-10"/>
                            <div className="mt-10 px-5">

                                <SideBarWithAllCategory/>
                                <hr className="mt-10"/>
                                <Location/>

                            </div>
                        </div>
                        <div className="flex-grow">
                            <div>
                                {/*<Slider/>*/}

                            </div>

                            <div className="ml-4">

                                {
                                    readAllProductDetails && readAllProductDetails.map((item,i)=>(
                                        <Link to={`/productDetails/${item['productName']}/${item['_id']}?categoryID=${item['categoryID']}`}>

                                            <div tabIndex="0" className="w-full h-52 bg-white rounded-lg focus:outline-none hover:shadow-md focus:ring-2 focus:ring-cyan-100 mt-6">
                                                <div className="ml-10 pt-6 flex space-x-20">
                                                    <div className="flex flex-grow ml-16 w-1/4">
                                                        <img className="h-32" src={item['productImg']} alt="Product image"/>
                                                    </div>
                                                    <div className="pl-10 flex flex-grow w-2/3">
                                                        <div>
                                                            <p className="text-xl"><b>{item['productName']}</b></p>
                                                            <p className="text-gray-500">Division: {item['location']['division']}</p>
                                                            <p className="text-gray-500">District: {item['location']['district']}</p>
                                                            <p className="text-gray-500">Brand: {item['brandName']}</p>
                                                            <p className="text-gray-500">{item['subcategory']['subcategoryName']}</p>
                                                            <p className="text-green-800 text-lg"><strong>Price: {item['price']}</strong></p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                    ))
                                }
                            </div>

                            <hr/>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllProductDisplay;