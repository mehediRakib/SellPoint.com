import React, {useEffect} from 'react';
import Layout from "../Layout/Layout.jsx";
import productStore from "../../Store/productStore.js";
import {Link, useParams} from "react-router-dom";

const SubcategoryPage = () => {
    const {readSubCategoryDetails,readSubCategory}=productStore();
    const {categoryID}=useParams();
    useEffect(() => {
        (async () => {
            await readSubCategory(categoryID)
        })()
    }, []);
    return (
        <Layout>
            <div className=" w-full mt-28 ">
                <div className="flex items-center justify-center">
                    <div className=" h-full w-1/2 shadow-lg rounded-md bg-slate-200 shadow-cyan-500/50 ">
                        <div className="mt-4">
                            <div className="text-center">
                                <p className="font-semibold text-lg">Please Select a Subcategory</p>
                            </div>
                            <hr className="border border-green-700 mt-2"/>
                        </div>
                        <div>
                            <div className="space-x-1 ml-10 mb-5 pt-5">
                                {

                                    readSubCategoryDetails && readSubCategoryDetails.map((item,i)=>(
                                        <Link to={`/${item['subcategoryName']}/${categoryID}/${item['_id']}`} className=" h-8 w-32 ">
                                            <p>{item['subcategoryName']}</p>
                                        </Link>
                                    ))

                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SubcategoryPage;