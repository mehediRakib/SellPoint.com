import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import productStore from "../../Store/productStore.js";

const CategoryPage = () => {
    const {categoryDetails,readCategory}=productStore();
    useEffect(() => {
        (async () => {
            await readCategory();
        })()
    }, []);
    return (
        <div className=" w-full mt-28 ">
           <div className="flex items-center justify-center">
               <div className=" h-full w-1/2 shadow-lg rounded-md bg-slate-200 shadow-cyan-500/50 ">
                   <div className="mt-4">
                       <div className="text-center">
                           <p className="font-semibold text-lg">Please Select a category</p>
                       </div>
                       <hr className="border border-green-700 mt-2"/>
                   </div>
                   <div>
                     <div className="space-x-1 ml-10 mb-5 pt-5">
                         {

                             categoryDetails && categoryDetails.map((item,i)=>(
                                 <Link to={`/${item['categoryName']}/${item['_id']}`} className=" h-8 w-32 ">
                                    <p>{item['categoryName']}</p>
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

export default CategoryPage;