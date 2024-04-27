import React from 'react';

const EditProductDetails = () => {
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
                            <div className="flex flex-wrap -mx-2 space-y-3"> {/* Add negative margin to counteract the padding on child elements */}
                                <div className='px-2 w-full md:w-1/2'> {/* Add padding x-2 to match the negative margin on the parent and set to half width on medium screens */}
                                    <label htmlFor="productName1" className="block text-sm font-medium text-gray-700">Product Name</label>
                                    <input
                                        type="text"
                                        id="productName1"
                                        className="mt-1 w-full border-2 border-gray-300 rounded-md px-4 py-1"
                                        placeholder="Enter product name"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="productName2" className="block text-sm font-medium text-gray-700">Brand Name</label> {/* Updated for clarity */}
                                    <input
                                        type="text"
                                        id="productName2"
                                        className="mt-1 w-full border-2 border-gray-300 rounded-md px-4 py-1"
                                        placeholder="Enter Brand Name:  "
                                    />
                                </div> <div className='px-2 w-full md:w-1/2'> {/* Add padding x-2 to match the negative margin on the parent and set to half width on medium screens */}
                                    <label htmlFor="productName1" className="block text-sm font-medium text-gray-700">Price</label>
                                    <input
                                        type="number"
                                        id="productName1"
                                        className="mt-1 w-full border-2 border-gray-300 rounded-md px-4 py-1"
                                        placeholder="Price"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'>
                                    <label htmlFor="productName2" className="block text-sm font-medium text-gray-700">Model</label> {/* Updated for clarity */}
                                    <input
                                        type="text"
                                        id="productName2"
                                        className="mt-1 w-full border-2 border-gray-300 rounded-md px-4 py-1"
                                        placeholder="Model  "
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2'> {/* Add padding x-2 to match the negative margin on the parent and set to half width on medium screens */}
                                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
                                    <input
                                        type="text"
                                        id="color"
                                        className="mt-1 w-full border-2 border-gray-300 rounded-md px-4 py-1"
                                        placeholder="color"
                                    />
                                </div>
                                <div className='px-2 w-full md:w-1/2 pt-2'>
                                    <label className="text-gray-500 text-sm">Condition</label><br/>
                                    <div className="flex items-center">
                                        <input type="radio"
                                               name="condition" id="new" className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                               value="New"
                                               // checked={productSellForm.condition==='New'}
                                               // onChange={(e)=>{productSellFormOnchange("condition",e.target.value)}}
                                        />
                                        <label htmlFor="new" className="ml-2 text-sm text-gray-700">New</label>

                                        <input type="radio" name="condition" id="old" className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ml-3"
                                               value="Old"
                                               // checked={productSellForm.condition==='Old'}
                                               // onChange={(e)=>{productSellFormOnchange("condition",e.target.value)}}
                                        />
                                        <label htmlFor="old" className="ml-2 text-sm text-gray-700">Old</label>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
        </div>
    );
};

export default EditProductDetails;