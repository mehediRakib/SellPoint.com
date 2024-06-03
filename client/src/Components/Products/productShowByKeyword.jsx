import React, {useEffect} from 'react';
import productStore from "../../Store/productStore.js";
import {Link, useParams} from "react-router-dom";
import SideBarWithAllCategory from "./SideBar-with-allCategory.jsx";

const ProductShowByKeyword = () => {
    const {productByKeywordDetails,productByKeyWord,readCategory,categoryDetails,readDivision,readDivisionDetails}=productStore();

    const {Keyword}=useParams();
    useEffect(() => {
        (async () => {
            await productByKeyWord(Keyword);
            await readCategory();
            await readDivision();
        })()
    }, [Keyword]);
    return (
        <div className="mt-28">
            <div className="flex justify-center items-center">
                <div className="bg-slate-50 rounded-md w-3/4 mb-4 shadow-md">
                    <div className="flex justify-center mt-8 mb-2">
                        <div className="flex-grow px-10 flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <div>
                                <p><b>Select Location</b></p>
                            </div>
                        </div>
                        <div className="flex-grow">

                        </div>
                        <div className="flex-grow flex justify-end mr-10 relative">
                            <input className="w-96 h-10 border border-gray-300 rounded-full px-10"  placeholder="Search here!"/>
                            <button className="absolute inset-y-0 right-0 bg-blue-500 rounded-r-full px-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <hr className="border border-gray-200 mt-2"/>


                    <div className="flex">
                        <div className="w-1/3 h-auto rounded-md shadow-lg border-r-2 border-gray-300 p-4 space-y-4">
                            <div className="space-y-2 ml-5 mt-10">
                                <p>Sort result by</p>
                                <input className="w-2/3 rounded-md border border-cyan-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none py-1"/>
                            </div>
                            <div className=" ml-5 pt-20">
                                <p className="font-bold">Category</p>
                                    <SideBarWithAllCategory/>

                            </div>
                            <div className=" ml-5 pt-20">
                                <p className="font-bold">Location: </p>
                                <div className="space-y-2 ml-12 text-sky-700 mt-3 mb-5">
                                    {readDivisionDetails && readDivisionDetails.map((item,i)=>(
                                       <div>
                                           <Link to={`/Product-by-division/${item['division']}/${item['_id']}`}>{item['division']}</Link>
                                       </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-2/3 space-y-2 p-4">
                            {
                                productByKeywordDetails && productByKeywordDetails.map((item, i) => (
                                    <Link to={`/productDetails/${item['productName']}/${item['_id']}?categoryID=${item['categoryID']}`}>
                                      <div className="space-y-2 hover:shadow-md bg-white rounded-md p-2">
                                        <div className="flex pb-2">
                                                <div className="w-1/3">
                                                    <img className="w-full h-auto rounded-lg" src={item['productImg']} alt={item['productName']} />
                                                </div>
                                                <div className="w-2/3 pl-2 flex flex-col justify-between pt-10">
                                                    <div>
                                                        <p className="text-xl font-bold">{item['productName']}</p>
                                                        <p className="text-gray-500 text-sm">Division: {item['location']['division']}</p>
                                                        <p className="text-gray-500 text-sm">District: {item['location']['district']}</p>
                                                        <p className="text-green-800 text-lg font-semibold">Price: {item['price']}</p>
                                                    </div>

                                                </div>
                                            </div>
                                     </div>
                                    </Link>


                                ))
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductShowByKeyword;