import React, {useEffect, useState} from 'react';
import productStore from "../../Store/productStore.js";
import {useParams} from "react-router-dom";

const EditProductDetails = () => {

    const {
        readDivisionDetails, readDivision,readProductById,productForm,onChange,productDetailsForm,readProductDetailsById,readLocationById,productLocationForm,
        readDistrictDetails,readDistrict,DivisionName,ReadDivisionByID} = productStore();
    const {productID} = useParams();

    const [divisionId,setDivisionId]=useState();

    useEffect(() => {
        (async () => {
            await readDivision();
            await readProductById(productID);
            await readProductDetailsById(productID);
            await readLocationById(productID);
            await readDistrict(divisionId);
            await ReadDivisionByID(divisionId);
        })();
    }, [divisionId]);

    const [img1,setImg1]=useState("");

    const [img2,setImg2]=useState("");

    const handleProductFormChange=(name,value)=>{
        onChange('productForm',name,value)
    }
    const handleProductDetailsChange=(name,value)=>{
        onChange('productDetailsForm',name,value)
    }
    const handleLocationChange=(name,value)=>{
        onChange('productLocationForm',name,value);
    }

    const convert64Img1=(e)=>{
        const read=new FileReader();
        read.readAsDataURL((e.target.files[0]))
        read.onload=()=>{
            setImg1(read.result);
        }
    }

    const convert64Img2=(e)=>{
        const read=new FileReader();
        read.readAsDataURL((e.target.files[0]))
        read.onload=()=>{
            setImg2(read.result);
        }
    }


    const postBody={
        productName:productForm.productName,
        brandName:productForm.brandName,
        price:productForm.price,
        model:productDetailsForm.model,
        color:productDetailsForm.color,
        condition:productDetailsForm.condition,
        authenticity:productDetailsForm.authenticity,
        area:productLocationForm.area,
        features:productDetailsForm.features,
        shortDes:productDetailsForm.shortDes,
        district:productLocationForm.district,
        division:DivisionName.division,
        img1:img1,
        img2:img2

    }


    return (
        <div className="mt-24">
            <div className="flex justify-center items-center">
                <div className="w-3/4 h-auto rounded-md bg-slate-50 ">
                    <div className="flex flex-col justify-center items-center p-4">

                        <div className="mt-5">
                            <p className="text-xl font-semibold">Edit Information</p>
                        </div>
                        <hr className=" border border-gray-200 w-full"/>
                        <div className="py-5 px-2 w-full space-y-4">
                            <div className="flex flex-wrap -mx-2 space-y-3">
                                <div className='px-2 w-full md:w-1/2 pt-3'>
                                    <label htmlFor="productName1" className="block text-sm font-medium text-gray-700">Product
                                        Name</label>
                                    <input
                                        type="text"
                                        value={productForm.productName}
                                        onChange={(e)=>handleProductFormChange('productName',e.target.value)}
                                        id="productName1"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter product name"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="productName2" className="block text-sm font-medium text-gray-700">Brand
                                        Name</label> {/* Updated for clarity */}
                                    <input
                                        type="text"
                                        value={productForm.brandName}
                                        onChange={(e) => {
                                            handleProductFormChange("brandName", e.target.value)
                                        }}
                                        id="productName2"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter Brand Name:  "
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="productName1"
                                           className="block text-sm font-medium text-gray-700">Price</label>
                                    <input
                                        type="number"
                                        value={productForm.price}
                                        onChange={(e) => {
                                            handleProductFormChange("price", e.target.value)
                                        }}
                                        id="productName1"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Price"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label
                                        className="block text-sm font-medium text-gray-700">Model</label> {/* Updated for clarity */}
                                    <input
                                        type="text"
                                        value={productDetailsForm.model}
                                        onChange={(e) => {
                                            handleProductDetailsChange("model", e.target.value)
                                        }}
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Model  "
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="color"
                                           className="block text-sm font-medium text-gray-700">Color</label>
                                    <input
                                        type="text"
                                        value={productDetailsForm.color}
                                        onChange={(e)=>handleProductDetailsChange('color',e.target.value)}
                                        id="color"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="color"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2 pt-2'>
                                    <label className=" text-sm text-gray-700 font-medium">Condition</label><br/>
                                    <div className="flex items-center">
                                        <input type="radio"
                                               name="condition" id="new"
                                               className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                               value="New"
                                               checked={productDetailsForm.condition === 'New'}
                                            onChange={(e)=>{handleProductDetailsChange("condition",e.target.value)}}
                                        />
                                        <label htmlFor="new"
                                               className="ml-2 text-sm text-gray-700 font-medium">New</label>

                                        <input type="radio" name="condition" id="old"
                                               className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ml-3"
                                               value="Old"
                                               checked={productDetailsForm.condition === 'Old'}
                                            onChange={(e)=>{handleProductDetailsChange("condition",e.target.value)}}
                                        />
                                        <label htmlFor="old" className="ml-2 text-sm text-gray-700 ">Old</label>
                                    </div>

                                </div>

                                <div className='px-2 w-full md:w-1/2 pt-2'>
                                    <label className=" text-sm text-gray-700 font-medium">Authenticity</label><br/>
                                    <div className="flex items-center">
                                        <input type="radio"
                                               name="Authenticity" id="official"
                                               className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                               value="Official"
                                               checked={productDetailsForm.authenticity === 'Official'}
                                            onChange={(e)=>{handleProductDetailsChange("authenticity",e.target.value)}}
                                        />
                                        <label htmlFor="official"
                                               className="ml-2 text-sm text-gray-700">Official</label>

                                        <input type="radio" name="Authenticity" id="Unofficial"
                                               className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ml-3"
                                               value="Unofficial"
                                               checked={productDetailsForm.authenticity === 'Unofficial'}
                                            onChange={(e)=>{handleProductDetailsChange("authenticity",e.target.value)}}
                                        />
                                        <label htmlFor="Unofficial"
                                               className="ml-2 text-sm text-gray-700">Unofficial</label>
                                    </div>
                                </div>

                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="ml-2 text-sm text-gray-700 font-medium">Division</label><br/>
                                    <select
                                        onChange={(e) =>{setDivisionId(e.target.value)}}
                                        type="text"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                        {productLocationForm.division === null || productLocationForm.division === "" ?
                                            (<option value="">Select Division</option>) :
                                            (<option value={productLocationForm.division}>{productLocationForm.division}</option>)
                                        }
                                        {readDivisionDetails && readDivisionDetails.map((item, i) => (
                                            <option key={i} value={item._id}>{item.division}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="text-sm text-gray-700 font-medium">District</label><br/>
                                    <select type="text"
                                            className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            onChange={(e)=>handleLocationChange('district',e.target.value)}>

                                        {
                                            productLocationForm.district===""?
                                                <option value="">Select District</option>:
                                                <option value="">{productLocationForm.district}</option>
                                        }
                                        {
                                            readDistrictDetails && readDistrictDetails.map((item,i)=>(
                                                <option value={item.district}>{item['district']}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="text-sm text-gray-700 font-medium">Area</label><br/>
                                    <input type="text" value={productLocationForm.area}
                                           onChange={(e)=>handleLocationChange('area',e.target.value)}
                                           className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                           placeholder="Area:"/>
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="text-sm text-gray-700 font-medium">Features:</label><br/>
                                    <textarea
                                        value={productDetailsForm.features}
                                        onChange={(e)=>handleProductDetailsChange('features',e.target.value)}
                                        className="resize rounded-md w-full border border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-300 h-20"
                                        placeholder="Features:"
                                    ></textarea>
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="text-sm text-gray-700 font-medium">Short Description:</label><br/>
                                    <textarea value={productDetailsForm.shortDes}
                                              onChange={(e)=>handleProductDetailsChange('shortDes',e.target.value)}
                                              className="resize rounded-md w-full border border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-300 h-20"
                                              placeholder="Short Description:"></textarea>
                                </div>
                                <div className='px-2 w-full md:w-1/2 pt-6 flex space-x-6'>
                                    <div className="relative w-48 h-48 border border-cyan-200">
                                        <div className="absolute -top-6 left-2 flex items-center space-x-12 ">
                                            <label className="text-sm font-medium">Image1</label>
                                           <button className="w-7 h-6 hover:bg-red-500 rounded-md" onClick={()=>setImg1("")}>
                                               <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   fill="none"
                                                   viewBox="0 0 24 24"
                                                   strokeWidth={1.5}
                                                   stroke="black"
                                                   className="w-6 h-6 cursor-pointer"
                                               >
                                                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                               </svg>
                                           </button>
                                        </div>
                                        {
                                            img1?(<img src={img1} className="w-full h-full object-cover" alt="Product" />):  <img src={productDetailsForm.img1} className="w-full h-full object-cover" alt="Product" />
                                        }
                                        <input
                                            type="file"
                                            id="img1"
                                            className="sr-only"
                                            accept="image/*"
                                            onChange={convert64Img1}
                                        />

                                            <div className="mt-3">
                                                <label htmlFor="img1" className="cursor-pointer w-20 h-5 rounded-full px-2 py-1 pl-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-cyan-200 hover:text-white hover:font-semibold">Change</label>
                                            </div>
                                    </div>

                                    <div className="relative w-48 h-48 border border-cyan-200">
                                        <div className="absolute -top-6 left-2 flex items-center space-x-12 ">
                                            <label className="text-sm font-medium">Image2</label>
                                            <button className="w-7 h-6 hover:bg-red-500 rounded-md" >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="black"
                                                    className="w-6 h-6 cursor-pointer"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        {
                                            img2?(<img src={img2} className="w-full h-full object-cover" alt="Product" />):  <img src={productDetailsForm.img2} className="w-full h-full object-cover" alt="Product" />
                                        }
                                        <input
                                            type="file"
                                            id="img2"
                                            className="sr-only"
                                            accept="image/*"
                                            onChange={convert64Img2}
                                        />

                                        <div className="mt-3">
                                            <label htmlFor="img2" className="cursor-pointer w-20 h-5 rounded-full px-2 py-1 pl-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-cyan-200 hover:text-white hover:font-semibold">Change</label>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="mb-10 flex items-center justify-center">
                        <button
                            className="bg-green-600 rounded-full px-5 py-1 text-white font-semibold focus:ring-2 focus: ring-orange-300 focus:outline-none hover:bg-red-600 hover:focus:outline-none hover:focus:ring-2 hover:focus:ring-green-500">Save
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default EditProductDetails;