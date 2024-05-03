import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {Link, useParams} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import productStore from "../../Store/productStore.js";
import adminStore from "../../Store/adminStore.js";
import Swal from "sweetalert2";


const CreateSubcategory = () => {

    const {readSubCategory,readSubCategoryDetails}=productStore();
    const {categoryID}=useParams();
    const [subcategory,setsubCategory]=useState("");
    const [img,setImg]=useState(null);

    const {subcategoryForm,subcategoryFormDataChange,createsubCategory,deleteSubcategoryItem}=adminStore();

    useEffect(() => {
        (async ()=>{
            await readSubCategory(categoryID);
        })()
    }, []);


    const convert64=(e)=>{
        const read=new FileReader();
        read.readAsDataURL((e.target.files[0]));
        read.onload=()=>{
            setImg(read.result);
        }
    }

    const postBody={
        subcategoryName:subcategoryForm.subcategoryName,
        subcategoryImg:img,
        categoryID:categoryID,
    }


    const DeleteSubCategory=async (subcategoryID)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mx-2',
                cancelButton: 'bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteSubcategoryItem(subcategoryID);
                if(res==='success'){
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    await readSubCategory(categoryID);
                }

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    const SaveSubCategory=async ()=>{
        console.log(postBody)
        const res=await createsubCategory(categoryID,postBody);
        if(res==='success'){
            toast.success("Subcategory Added successfully");
            await readSubCategory(categoryID);
        }
        else {
            toast.error("Something went wrong!")
        }

    }
    return (
        <Layout>
            <div className=" mt-24">
                <div className="flex justify-center items-center">
                    <div className="bg-slate-50 rounded-md shadow mt-5 w-2/3">
                        <div className="items-center text-center mt-5  ">
                            <h3 className="font-semibold text-xl">All Subcategory</h3>
                            <hr/>
                        </div>
                        <div className="flex justify-center items-center">

                            <div className="mb-5 mt-5">
                                {
                                    readSubCategoryDetails && readSubCategoryDetails.map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-3">

                                                <div className="flex-grow hover:bg-gray-300 rounded-md">
                                                    <p>{i + 1}. <span>{item['subcategoryName']}</span></p>
                                                </div>
                                            <div className="flex w-1/4 items-center justify-end space-x-5 ml-16">
                                                <Link to={`/admin/edit-category/${item['_id']}`} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                                    </svg>
                                                </Link>

                                                <button onClick={() => DeleteSubCategory(item['_id'])} className="text-gray-500 hover:text-gray-900 focus:outline-none transition hover:translate-y-1 delay-100 ease-in-out duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                                        <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                                    </svg>
                                                </button>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        {subcategory === "" ? (
                            <div className="mb-5 flex justify-center">
                                <button onClick={() => setsubCategory("new")} className="bg-green-600 hover:bg-green-500 text-white font-semibold py-1 px-4 rounded-full border-2 border-green-700 hover:border-green-500 transition-all duration-200">
                                    Add Subcategory
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-4">
                                    <p className="font-semibold text-lg">Add Subcategory</p>
                                    <hr className="border-gray-200 mt-2"/>
                                </div>
                                <div className="flex justify-center items-center mb-5">
                                    <div className="w-full max-w-lg px-4 py-2">
                                        <input
                                            type="text"
                                            value={subcategoryForm.subcategoryName}
                                            onChange={(e)=>{subcategoryFormDataChange("subcategoryName",e.target.value)}}
                                            className="form-input w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-200"
                                            placeholder="Subategory Name"
                                        />
                                        <div className="flex justify-center mt-4">
                                            {
                                                img===null?(<img
                                                    src="https://dummyimage.com/hd1080"
                                                    alt="Category"
                                                    className="h-20 w-20 rounded-full object-cover"
                                                />):(
                                                    <img
                                                        src={img}
                                                        alt="Category"
                                                        className="h-20 w-20 rounded-full object-cover"
                                                    />
                                                )
                                            }

                                            <div className="mr-16 mt-5">
                                                <input type="file" accept="image/*" id="categoyImg" className="sr-only" onChange={convert64}/>
                                                <label htmlFor="categoyImg" className=" bg-slate-400 w-20 h-20 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                                </svg>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center mt-4 mr-3">
                                            <button onClick={()=>{SaveSubCategory()}} className="bg-green-600 px-5 py-1 rounded-full border-2 border-cyan-300 hover:bg-pink-500 hover:border-2 hover:border-pink-800 text-white font-semibold ">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </>

                        )}


                    </div>
                </div>

            </div>
            <Toaster position="top-center"/>
        </Layout>
    );
};

export default CreateSubcategory;