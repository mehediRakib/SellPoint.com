import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import productStore from "../../Store/productStore.js";

const SideBarWithAllCategory = () => {
    const {categoryDetails,readCategory}=productStore();
    useEffect(() => {
        (async () => {
            await readCategory();
        })()
    }, []);
    return (
        <div>
            <div className="text-gray-400">
                <p>Category</p>
            </div>
            <div className="ml-5 mt-8">
                <Link to="/All-categories-products" className="font-semibold text-md ">All Categories</Link>
            </div>
            <div className="ml-10 mt-5 text-sky-700 space-y-1">
                {
                    categoryDetails && categoryDetails.map((item,i)=>(
                        <Link to={"/products/"+item['_id']} className="hover:underline flex space-x-1">
                            <img className="h-8 w-8" src={item['categoryImg']}/>
                            <p>{item['categoryName']}</p>
                        </Link>
                    ))
                }

            </div>
            
        </div>
    );
};

export default SideBarWithAllCategory;