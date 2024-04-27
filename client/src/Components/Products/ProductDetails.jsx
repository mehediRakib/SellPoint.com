import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import productStore from "../../Store/productStore.js";
import userStore from "../../Store/userStore.js";

const ProductDetails = () => {

    const {productDescriptionDetails,productByCategoryDetails,productByCategory}=productStore();
    const {isLogin}=userStore();
    const countryCode = '+880';
    const message = encodeURIComponent('Hello! This is an automated message.');
    const handleWhatsAppClick = (number) => {
        const whatsappUrl = `https://wa.me/${countryCode}${number}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }

    const urlParam=new URLSearchParams(window.location.search);
    const categoryID=urlParam.get('categoryID')
    const {productID}=useParams();


    useEffect(() => {
        (async () => {
            await productByCategory(categoryID);
        })()
    }, [categoryID,productID]);

    return (
        <div className="mt-28 flex flex-col items-center justify-center h-full">
            {productDescriptionDetails && productDescriptionDetails.map((item, i) => (
            <div className="w-2/3 h-auto shadow-lg shadow-cyan-500/50">
                <div>
                    <div className="ml-10 pt-5">
                            <div key={i}>  {/* Added key for optimal rendering */}
                                <p className="text-2xl font-semibold">{item['productName']}</p>
                                <p className="text-gray-600">Posted on {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                    hour: 'numeric',
                                    minute: '2-digit',
                                    hour12: true
                                }).format(new Date(item['createdAt']))}</p>
                            </div>

                    </div>
                </div>
                <div className="flex">
                    <div>
                        <div className="w-48 h-48 ml-20 mt-10">
                            <img className="h-48 w-auto" src={item['productImg']} alt="productImg"/>
                        </div>
                        <div className="ml-10 mt-10">
                            <div>
                                <p className="font-semibold text-xl text-green-800">Price: {item["price"]}</p>
                            </div>
                            <div className="mt-10 flex flex-grow ">
                               <div className="">
                                   <p className="text-gray-600">Condition: <span className="text-black">{item['ProductDetails']['condition']}</span></p>
                                   <p className="text-gray-600">Model: <span className="text-black">{item['ProductDetails']['model']}</span></p>

                                   <p className="text-gray-600">Brand: <span className="text-black">{item['brandName']}</span></p>

                               </div>
                                <div className="ml-20">
                                    <p className="text-gray-600">Color: <span className="text-black">{item['ProductDetails']['color']}</span></p>

                                    <p className="text-gray-600">Authenticity: <span className="text-black">{item['ProductDetails']['authenticity']}</span></p>

                                </div>
                            </div>
                            <div className='w-2/3'>
                                <strong>Features </strong>
                                <p className="text-gray-700">{item['ProductDetails']['features']}</p>
                            </div>

                            <div className='w-2/3 mb-5'>
                                <strong>Description </strong>
                                <p className="text-gray-700">{item['ProductDetails']['shortDes']}</p>
                                <hr className="border border-gray-300 mt-2"/>
                            </div>
                           <Link to="/report-this-add">
                            <div className="mb-5 flex text-gray-600">
                                   <div>
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                           <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                                       </svg>
                                   </div>

                                   <div>
                                       <p>Report this add</p>
                                   </div>
                            </div>
                           </Link>

                        </div>
                    </div>
                    <div className="w-px min-h-full border border-gray-400">
                    </div>
                    <div className="w-full">
                        <hr className="mt-2 border border-gray-400"/>
                        <div className="pl-5">
                            <p className="text-lg">For sale by <strong>{item['userInfo']['name']}</strong> </p>
                        </div>
                        <hr className="mt-5 border border-gray-400"/>
                        <div className="pl-5 mt-5 flex space-x-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6 svg-green">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                            </div>
                            <div>
                                <p className="text-xl font-semibold">{item['userInfo']['contact']}</p>
                                <p className="text-gray-500">For any query contact with this number</p>

                            </div>
                        </div>
                        <hr className="mt-5 border border-gray-400"/>
                        {
                            isLogin()?(
                                <>
                                 <span onClick={()=>{handleWhatsAppClick(item['userInfo']['contact'])}}  className="cursor-pointer">
                            <div className="flex p-5 space-x-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="green" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                </svg>
                            </div>
                           <div>
                               <p>Chat</p>
                           </div>
                        </div>
                       </span>
                                </>

                            ):(
                                <Link to="/login">
                            <div className="flex p-5 space-x-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="green" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                </svg>
                            </div>
                           <div>
                               <p>Chat</p>
                           </div>
                        </div>
                                </Link>

                            )
                       }

                        <hr className="mt-5 border border-gray-400"/>
                        <div className="p-5 flex space-x-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>

                            </div>
                            <div>
                                <b>Safety tips</b>
                                <li className="text-gray-600">
                                    Never share card details or OTPs, and always verify items in person before payment. ikman does not offer a delivery service. Stay vigilant!
                                </li>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            ))}
            <div className="w-2/3 h-full mt-10 shadow-lg shadow-cyan-500/50 flex flex-wrap">
                <div className="p-5 w-full">
                  <p className="text-lg font-semibold">Similiar Ads</p>
                    <hr className="border border-gray-200 mt-1"/>
                </div>

                {
                    productByCategoryDetails && productByCategoryDetails.map((item, i) => (
                        <div className="flex w-1/2 p-2 mt-5"> {/* Ensure each item takes exactly half of the parent's width */}
                            <div className="flex w-full bg-white shadow overflow-hidden rounded-lg p-5"> {/* Optional styling */}
                               <Link to={`/productDetails/${item['productName']}/${item['_id']}?categoryID=${item['categoryID']}`}>
                                   <div className="flex">
                                       <div className="w-32 h-auto">
                                           <img src={item['productImg']} alt={item['productName']} />
                                       </div>
                                       <div className="flex-grow ml-2 mt-2">
                                           <p className="font-semibold">{item['productName']}</p>
                                           <p className="text-gray-600">
                                               Division: {item['location']['division']}, {item['subcategory']['subcategoryName']}
                                           </p>
                                           <p>Price: {item['price']}</p>
                                       </div>
                                   </div>
                               </Link>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div>

            </div>

        </div>
    );
};

export default ProductDetails;