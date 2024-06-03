import React, {useEffect} from 'react';
import userStore from "../../Store/userStore.js";
import {Link, useParams} from "react-router-dom";
import productStore from "../../Store/productStore.js";
import Swal from "sweetalert2";

const UserAd = () => {
    const {readUserAdDetails,readUserAd}=userStore();
    const {deleteUserProduct}=productStore();
    const{userID}=useParams();
    useEffect(() => {
        (async () => {
            window.scrollTo(0,0)
            await readUserAd(userID);
        })()

    }, []);

    const deleteProduct=(productID)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mx-2',
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
                const res = await deleteUserProduct(productID);
                if(res==='success'){
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    await readUserAd(userID);
                }
                else
                {
                    swalWithBootstrapButtons.fire({
                        title: "Failed!",
                        text: "Something went wrong",
                        icon: "Failed"
                    });

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
    if (!readUserAdDetails || readUserAdDetails.length === 0) {
        return <h2 className="mt-48 h-64 text-center text-3xl font-semibold">Loading....</h2>;
    }
    return (
        <div className="mt-28">
            <div className="flex justify-center items-center">
                <div className="w-4/5 bg-slate-50 rounded-md shadow-lg">
                    <div className="flex items-center justify-center py-5 border-b border-gray-200">
                        <p className="font-semibold text-2xl text-gray-800">My Ads</p>
                    </div>
                    <div className="space-y-4 p-4">
                        {readUserAdDetails && readUserAdDetails.map((item, i) => (
                            <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out h-56">
                                <div className="flex items-center">
                                    <div className="flex-none w-1/4 p-4 ml-12 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                                        <img src={item['productImg']} alt="Product" className="rounded h-44 w-auto object-cover"/>
                                    </div>
                                    <div className="flex-grow p-4 space-y-2">
                                        <p className="text-xl font-semibold text-gray-900">{item['productName']}</p>
                                        <p className="text-gray-500">Brand: {item['brandName']}</p>
                                        <p className="text-lg font-semibold text-gray-800">Price: {item['price']}</p>
                                    </div>
                                    <div className="flex-none w-1/4 flex flex-col items-center space-y-2 p-4">
                                        <Link to={`/edit-product-details/${item['_id']}?userID=${userID}`} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                            </svg>
                                        </Link>
                                        <button onClick={() => deleteProduct(item['_id'])} className="text-gray-500 hover:text-gray-900 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                                <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAd;