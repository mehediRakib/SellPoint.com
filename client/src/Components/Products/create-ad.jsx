import React, {useEffect, useState} from 'react';
import userStore from "../../Store/userStore.js";
import productStore from "../../Store/productStore.js";
import Layout from "../Layout/Layout.jsx";
import {useNavigate, useParams} from "react-router-dom";
import UserSubmitButton from "../user/UserSubmitButton.jsx";
import toast, {Toaster} from "react-hot-toast";


const CreateAd = () => {
    const navigate=useNavigate();

    const [img2,setImg2]=useState(null)
    const [img1, setImg1] = useState(null);

    const {profileDetails,readProfile}=userStore();

    const convertBase64=(e)=>{
        const read=new FileReader();
        read.readAsDataURL(e.target.files[0]);
        read.onload=()=>{
            setImg1(read.result)
        }
    }
    const convertBase64Img2=(e)=>{
        const read=new FileReader();
        read.readAsDataURL((e.target.files[0]));
        read.onload=()=>{
            setImg2(read.result);
        }
    }

    const {productSellForm,productSellFormOnchange,productSell,readDivisionDetails,readDivision,readDistrictDetails,readDistrict,DivisionName,ReadDivisionByID}=productStore();
    const postBody={
        productName:productSellForm.productName,
        brandName:productSellForm.brandName,
        price:productSellForm.price,
        condition:productSellForm.condition,
        color:productSellForm.color,
        model:productSellForm.model,
        authenticity:productSellForm.authenticity,
        features:productSellForm.features,
        shortDes:productSellForm.shortDes,
        division:DivisionName.division,
        district:productSellForm.district,
        area:productSellForm.area,
        img1:img1,
        img2:img2
    }

    const {categoryID,subcategoryID}=useParams();

    const divisionId=productSellForm.division;

    const postAd=async () => {
        if(productSellForm.productName===null || productSellForm.productName===""){
            toast.error("Product Name is Required")
        }
        else if(productSellForm.price===null || productSellForm.price===""){
            toast.error("Price Name is Required")
        }
        else if(productSellForm.model===null || productSellForm.model===""){
            toast.error("Model Name is Required")
        }
        else if(productSellForm.division===null || productSellForm.division===""){
            toast.error("Division Name is Required")
        }
        else if(productSellForm.district===null || productSellForm.district===""){
            toast.error("District Name is Required")
        }
        else if(productSellForm.area===null || productSellForm.area===""){
            toast.error("Area Name is Required")
        }
        else if(img1===null || img1===""){
            toast.error("Image1  is Required")
        }
        else{
            const result = await productSell(postBody,categoryID,subcategoryID);
            if(result==='success'){
                toast.success("Ad added successfully")
                navigate(`/products/${categoryID}`);

            }
            else{
                toast.error("Something went wrong")
            }
        }
    }

    useEffect(() => {
        (async () => {
            await readProfile();
            await readDivision();
            await readDistrict(divisionId);
            await ReadDivisionByID(divisionId)
        })()
    }, [divisionId]);

    const removeImg2=()=>{
        setImg2(null)
    }

    const removeImg1=()=>{
        setImg1(null)
    }

    return (
        <Layout>
            <div className="mt-28">
                <div className="flex items-center justify-center">
                    <div className="w-2/3 h-auto drop-shadow-md rounded-md py-5 bg-slate-200">

                        {
                            profileDetails && profileDetails.length > 0 ? (
                                profileDetails.map((item, i) => (
                                    <div className="text-center font-semibold text-lg">
                                        <p>Welcome {item['name']}. let's post an ad.</p>
                                    </div>
                                ))
                            ) : (
                                <div>No profile details available.</div>
                            )
                        }

                        <hr className=" mt-5 border border-green-500"/>
                        <div className="flex-grow flex flex-col justify-center w-full">
                            <div className="flex items-center justify-center w-full">
                                <div className="w-2/3">
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Product Name<span className="text-red-600">*</span>:</label><br/>
                                        <input  type="text" value={productSellForm.productName} onChange={(e)=>{productSellFormOnchange("productName",e.target.value)}} className="w-full rounded-md border border-cyan-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Product Name:"/><br/>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Brand:</label><br/>
                                        <input type="text" value={productSellForm.brandName} onChange={(e)=>{productSellFormOnchange("brandName",e.target.value)}} className="w-full rounded-md border border-cyan-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Brand Name:"/>
                                    </div>

                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Price<span className="text-red-600">*</span>:</label><br/>
                                        <input type="text" value={productSellForm.price} onChange={(e)=>{productSellFormOnchange("price",e.target.value)}} className="w-full rounded-md border border-cyan-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 " placeholder="Price:"/>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Condition<span className="text-red-600">*</span>:</label><br/>
                                        <div className="flex items-center">
                                            <input type="radio"
                                                   name="condition" id="new" className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                   value="New"
                                                   checked={productSellForm.condition==='New'}
                                                   onChange={(e)=>{productSellFormOnchange("condition",e.target.value)}}
                                            />
                                            <label htmlFor="new" className="ml-2 text-sm text-gray-700">New</label>

                                            <input type="radio" name="condition" id="old" className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ml-3"
                                                   value="Old"
                                                   checked={productSellForm.condition==='Old'}
                                                   onChange={(e)=>{productSellFormOnchange("condition",e.target.value)}}
                                            />
                                            <label htmlFor="old" className="ml-2 text-sm text-gray-700">Old</label>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Color:</label><br/>
                                        <input type="text" value={productSellForm.color} onChange={(e)=>{productSellFormOnchange("color",e.target.value)}} className="w-full rounded-md border border-cyan-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Color:"/>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Model<span className="text-red-600">*</span>:</label><br/>
                                        <input type="text" value={productSellForm.model} onChange={(e)=>{productSellFormOnchange("model",e.target.value)}} className="w-full rounded-md border border-cyan-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Model:"/>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Authenticity:</label><br/>
                                        <div className="flex items-center">
                                            <input type="radio"
                                                   name="authenticity"
                                                   id="officialRadio"
                                                   className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                   value="Official"
                                                   checked={productSellForm.authenticity==='Official'}
                                                   onChange={(e) => {
                                                       productSellFormOnchange("authenticity", e.target.value);
                                                   }}
                                            />
                                            <label htmlFor="officialRadio" className="ml-2 text-sm text-gray-700">Official</label>

                                            <input type="radio" name="authenticity" id="unofficialRadio"
                                                   className="accent-pink-500 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ml-3"
                                                   value="Unofficial"
                                                   checked={productSellForm.authenticity==='Unofficial'}
                                                   onChange={(e)=>{productSellFormOnchange("authenticity",e.target.value)}}
                                            />
                                            <label htmlFor="unofficialRadio" className="ml-2 text-sm text-gray-700">Unofficial</label>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Division<span className="text-red-600">*</span>:</label><br/>
                                        <select className="w-full rounded-md border border-cyan-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        onChange={(e)=>{productSellFormOnchange("division",e.target.value)}}>

                                            <option value="">select Division</option>
                                            {
                                                readDivisionDetails && readDivisionDetails.map((item,i)=>(
                                                    <option value={item._id}>{item['division']}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">District<span className="text-red-600">*</span>:</label><br/>
                                       <select onChange={(e)=>productSellFormOnchange("district",e.target.value)} className="w-full rounded-md border border-cyan-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                           <option>Select District</option>
                                           {
                                               readDistrictDetails && readDistrictDetails.map((item,i)=>(
                                                   <option>{item['district']}</option>
                                               ))
                                           }
                                       </select>
                                    </div>

                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Area<span className="text-red-600">*</span>:</label><br/>
                                        <input type="text" value={productSellForm.area} onChange={(e)=>{productSellFormOnchange("area",e.target.value)}} className="w-full rounded-md border border-cyan-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Area:"/>
                                    </div>
                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Features:</label><br/>
                                        <textarea value={productSellForm.features} onChange={(e)=>{productSellFormOnchange("features",e.target.value)}} className="resize rounded-md w-full border border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-300 h-20" placeholder="Features:"></textarea>
                                    </div>

                                    <div className="my-3">
                                        <label className="text-gray-500 text-sm">Short Description:</label><br/>
                                        <textarea value={productSellForm.shortDes} onChange={(e)=>{productSellFormOnchange("shortDes",e.target.value)}} className="resize rounded-md w-full border border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-300 h-20" placeholder="Short Description:"></textarea>
                                    </div>


                                    <div className="flex space-x-2">
                                        <div className="w-1/3">
                                            <div className="mb-4 ">
                                                <label className="form-label block text-sm font-medium text-gray-700">
                                                    <div className="flex justify-between items-center text-red-500">
                                                        Image 1:*
                                                        {
                                                            img1!==null?(
                                                                <div>
                                                                    <button onClick={removeImg1} className="bg-red-600 hover:bg-red-800 text-white font-semibold  px-1 rounded shadow focus:outline-none focus:shadow-outline">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            ):(
                                                                <></>
                                                            )
                                                        }
                                                    </div>
                                                </label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    {
                                                        img1!==null?(
                                                            <div>
                                                                <img src={img1}/>
                                                            </div>

                                                        ):(
                                                            <>
                                                                <div className="space-y-1 text-center">
                                                                    <input
                                                                        type="file"
                                                                        name="image_1"
                                                                        id="image_1"
                                                                        className="sr-only"
                                                                        accept="image/*"
                                                                        onChange={convertBase64}
                                                                    />
                                                                    <label htmlFor="image_1" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                                                        <span>Upload a file</span>
                                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                                    </label>
                                                                </div>
                                                            </>
                                                        )
                                                    }

                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-1/3">
                                            <div className="form-group mb-4">
                                                <div className="flex justify-between items-center">
                                                    <label className="form-label block text-sm font-medium text-gray-700">Image 2:</label>
                                                    {
                                                        img2!==null?(
                                                            <div>
                                                                <button onClick={removeImg2} className="bg-red-600 hover:bg-red-800 text-white font-semibold  px-1 rounded shadow focus:outline-none focus:shadow-outline">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        ):(
                                                            <></>
                                                        )
                                                    }
                                                </div>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    {
                                                        img2!==null?(
                                                                <>
                                                                    <im0g className="h-full w-full" src={img2}/>
                                                                </>
                                                            ):
                                                            (
                                                                <>
                                                                    <div className="space-y-1 text-center">
                                                                        <input type="file" name="image_2" id="image_2" className="custom-file-input sr-only "
                                                                               accept="image/*"
                                                                               onChange={convertBase64Img2}
                                                                        />
                                                                        <label htmlFor="image_2" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                                                            <span>Upload a file</span>
                                                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                                        </label>
                                                                    </div>
                                                                </>
                                                            )
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>








                                </div>
                            </div>

                        </div>

                        <div className="flex items-center justify-center mt-5">
                            <UserSubmitButton className=" bg-green-600 w-1/2 h-10 rounded-full text-white text-lg focus:outline-none focus:ring-2 focus:ring-red-400 hover:bg-red-600 hover:focus:ring-2 hover:focus:outline-none hover:focus:ring-green-600 " onClick={postAd} text="Post ad"/>
                        </div>


                    </div>
                </div>
                <Toaster position="bottom-center"/>

            </div>
        </Layout>
    );
};

export default CreateAd;