import React, {useEffect} from 'react';
import productStore from "../../Store/productStore.js";
import {Link, useParams} from "react-router-dom";
import Slider from "./slider.jsx";

const Product = () => {
    const {readClickCategory,readSubCategoryDetails,readSubCategory,ClickCategoryDetails,readLocationDetails,readLocation,productByCategoryDetails,productByCategory}=productStore();
    const {categoryID}=useParams();

    useEffect(() => {
        (async () => {
            await readClickCategory(categoryID);
            await  readSubCategory(categoryID);
            await readLocation();
            await productByCategory(categoryID)
        })()
    }, []);


    return (
        <div className="container mt-28 ">
           <div className="flex justify-center">
               <div className="w-5/6 shadow-lg h-full">
                   <div className="flex justify-center mt-8">
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
                   <div className="flex h-auto">
                       <div className="w-1/4 h-100 shadow-xl border-r border-gray-300">
                           <div className="ml-5 mt-10 space-y-3">
                               <p className="text-gray-600">Sort result by</p>
                               <input className="border border-gray-400 rounded-md"/>
                           </div>

                           <hr className=" mt-10"/>
                          <div className="mt-10 px-5">
                              <div className="text-gray-400">
                                  <p>category</p>
                              </div>
                              <div className="ml-10 mt-10">
                                  {
                                      ClickCategoryDetails && ClickCategoryDetails.map((item,i)=>(
                                          <p>
                                              {item['categoryName']}
                                          </p>
                                      ))
                                  }
                                  <div className="ml-8 text-sky-700">
                                      {
                                          readSubCategoryDetails && readSubCategoryDetails.map((item,i)=>(
                                              <Link to="subcategory">
                                                  <p>{item['subcategoryName']}</p>
                                              </Link>
                                          ))
                                      }
                                  </div>
                              </div>

                              <hr className=" mt-10"/>
                              <div className="mt-10">
                                  <div>
                                      <p className="text-gray-600">Location</p>
                                  </div>
                                  <div className="pt-2 ml-4"><strong>All of Bangladesh</strong></div>
                                  <div className="mt-6 ml-14 text-sky-700">
                                      {
                                          readLocationDetails && readLocationDetails.map((item,i)=>(
                                              <Link to="/">
                                                  <p>{item}</p>
                                              </Link>
                                          ))
                                      }
                                  </div>
                              </div>

                          </div>
                       </div>
                       <div className="flex-grow">
                           <div>
                               {/*<Slider/>*/}

                           </div>

                           <div className="ml-4">
                               {
                                   productByCategoryDetails && productByCategoryDetails.map((item,i)=>(
                                       <Link to="/detail">

                                           <div tabIndex="0" className="w-full h-52 bg-amber-50 rounded-lg focus:outline-none hover:bg-amber-100 focus:ring-2 focus:ring-cyan-100 mt-6 ">
                                               <div className="ml-10 pt-10 flex space-x-20">
                                                   <div className=" flex flex-grow ml-16">
                                                       <img className="h-32" src={item['productImg']} alt="Product image"/>
                                                   </div>
                                                   <div className="ml-5 flex flex-grow">
                                                       <div>
                                                           <p className="text-xl"><b>{item['productName']}</b></p>
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

export default Product;