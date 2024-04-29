import React, {useEffect} from 'react';
import productStore from "../../Store/productStore.js";
import {useParams} from "react-router-dom";

const EditProductDetails = () => {

    const {readDivisionDetails,readDivision,productDescription,editProductForm,editProductFormOnchange}=productStore();
    const {productID}=useParams();
    console.log(productID)
    useEffect(() => {
        (async () => {

                await readDivision();
                await productDescription(productID);
        })();
    }, [productID]);
    console.log("editProductForm: ",editProductForm)
    return (
        <div className="mt-24">
            <div className="flex justify-center items-center">
                <div className="w-3/4 h-auto rounded-md bg-slate-50 ">
                    <div className="flex flex-col justify-center items-center p-4">

                        <div>
                            <p className="text-xl font-semibold">Edit Information</p>
                        </div>
                        <hr className=" border border-gray-200 w-full"/>
                        <div className="py-5 px-2 w-full">
                            <div className="flex flex-wrap -mx-2 space-y-3">
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="productName1" className="block text-sm font-medium text-gray-700">Product Name</label>
                                    <input
                                        type="text"
                                        value={editProductForm.productName}
                                        onChange={(e) =>{editProductFormOnchange("productName", e.target.value)}}
                                        id="productName1"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter product name"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="productName2" className="block text-sm font-medium text-gray-700">Brand Name</label> {/* Updated for clarity */}
                                    <input
                                        type="text"
                                        value={editProductForm.brandName}
                                        onChange={(e) =>{editProductFormOnchange("brandName", e.target.value)}}
                                        id="productName2"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter Brand Name:  "
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="productName1" className="block text-sm font-medium text-gray-700">Price</label>
                                    <input
                                        type="number"
                                        value={editProductForm.price}
                                        onChange={(e) =>{editProductFormOnchange("price", e.target.value)}}
                                        id="productName1"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Price"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700">Model</label> {/* Updated for clarity */}
                                    <input
                                        type="text"
                                        value={editProductForm.ProductDetails.model}
                                        onChange={(e) =>{editProductFormOnchange("ProductDetails.model", e.target.value)}}
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="Model  "
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
                                    <input
                                        type="text"
                                        value={editProductForm.ProductDetails.color}
                                        id="color"
                                        className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        placeholder="color"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2 pt-2'>
                                    <label className=" text-sm text-gray-700 font-medium">Condition</label><br/>
                                    <div className="flex items-center">
                                        <input type="radio"
                                               name="condition" id="new" className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                               value={editProductForm.ProductDetails.condition}
                                               checked={editProductForm.ProductDetails.condition==='New'}
                                               // onChange={(e)=>{productSellFormOnchange("condition",e.target.value)}}
                                        />
                                        <label htmlFor="new" className="ml-2 text-sm text-gray-700 font-medium">New</label>

                                        <input type="radio" name="condition" id="old" className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ml-3"
                                               value={editProductForm.ProductDetails.condition}
                                               checked={editProductForm.ProductDetails.condition==='Old'}
                                               // onChange={(e)=>{productSellFormOnchange("condition",e.target.value)}}
                                        />
                                        <label htmlFor="old" className="ml-2 text-sm text-gray-700 ">Old</label>
                                </div>

                            </div>

                                <div className='px-2 w-full md:w-1/2 pt-2'>
                                    <label className=" text-sm text-gray-700 font-medium">Authenticity</label><br/>
                                    <div className="flex items-center">
                                        <input type="radio"
                                               name="Authenticity" id="official" className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                               value={editProductForm.ProductDetails.authenticity}
                                            checked={editProductForm.ProductDetails.authenticity==='Official'}
                                            // onChange={(e)=>{productSellFormOnchange("condition",e.target.value)}}
                                        />
                                        <label htmlFor="official" className="ml-2 text-sm text-gray-700">Official</label>

                                        <input type="radio" name="Authenticity" id="Unofficial" className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ml-3"
                                               value={editProductForm.ProductDetails.authenticity}
                                               checked={editProductForm.ProductDetails.authenticity==='Unofficial'}
                                            // onChange={(e)=>{productSellFormOnchange("condition",e.target.value)}}
                                        />
                                        <label htmlFor="Unofficial" className="ml-2 text-sm text-gray-700">Unofficial</label>
                                    </div>
                                </div>

                                        <div className='px-2 w-full md:w-1/2'>
                                            <label className="ml-2 text-sm text-gray-700 font-medium">Division</label><br/>
                                            <select
                                                // onChange={(e) =>{ editProductFormOnChange("ProductLocation.division", e.target.value)}}
                                                type="text"
                                                className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                                {editProductForm.ProductLocation.division === null || editProductForm.ProductLocation.division === "" ?
                                                    (<option value="">Select Division</option>) :
                                                    (<option value="">{editProductForm.ProductLocation.division}</option>)
                                                }
                                                {readDivisionDetails && readDivisionDetails.map((item, i) => (
                                                    <option key={i} value={item.division}>{item.division}</option>
                                                ))}
                                            </select>
                                        </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="text-sm text-gray-700 font-medium">District</label><br/>
                                    <select type="text" className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                        <option value="">Select District</option>
                                    </select>
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="text-sm text-gray-700 font-medium">Area</label><br/>
                                    <input type="text" value={editProductForm.ProductLocation.area} className="w-full rounded-md border border-cyan-200 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Area:"/>
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="text-sm text-gray-700 font-medium">Features:</label><br/>
                                    <textarea
                                        value={editProductForm.ProductDetails.features}
                                        className="resize rounded-md w-full border border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-300 h-20"
                                        placeholder="Features:"
                                    ></textarea>
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label className="text-sm text-gray-700 font-medium">Short Description:</label><br/>
                                    <textarea value={editProductForm.ProductDetails.shortDes} className="resize rounded-md w-full border border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-300 h-20" placeholder="Short Description:"></textarea>
                                </div>


                            </div>

                    </div>

                </div>
                    <div className="mb-10 flex items-center justify-center">
                        <button className="bg-green-600 rounded-full px-5 py-1 text-white font-semibold focus:ring-2 focus: ring-orange-300 focus:outline-none hover:bg-red-600 hover:focus:outline-none hover:focus:ring-2 hover:focus:ring-green-500">Save</button>
                    </div>
            </div>


            
        </div>
        </div>
    );
};

export default EditProductDetails;