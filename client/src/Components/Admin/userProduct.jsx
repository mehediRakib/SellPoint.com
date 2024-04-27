import React, {useEffect} from 'react';
import adminStore from "../../Store/adminStore.js";
import {Link, useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import userStore from "../../Store/userStore.js";

const UserProduct = () => {
    const navigate=useNavigate();
    const {singleUserProductDetails,singleUserProduct,deleteUserProduct}=adminStore();
    const {readProfile,profileDetails}=userStore();
    const {userID}=useParams();
    useEffect(() => {
        (async () => {
            await singleUserProduct(userID);
            await readProfile();
        })()
    }, []);

    const DeleteProduct=async (productId)=>{
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
                const res = await deleteUserProduct(productId);
                if(res==='success'){
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    await singleUserProduct(userID);
                }
                else {
                    result.dismiss === Swal.DismissReason.cancel

                }

            }

            else{
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });

    }
    return (
        <div className="mt-28">
            <div className="ml-10">
                <Link to="/admin/dashboard">
                    <h2 className="font-semibold text-2xl">Dashboard</h2>
                </Link>
            </div>
            <hr />
            <div className="flex items-center justify-center mt-10">
                <div className="w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
                    {
                        profileDetails && profileDetails.map((item,i)=>(
                            <div className="bg-gradient-to-r from-blue-500 to-blue-800 p-4">
                                <h1 className="text-white text-lg font-semibold text-center">{item['name']}'s ad</h1>
                            </div>
                        ))
                    }

                    <div className="grid grid-cols-2 gap-4 p-4">
                        {
                            singleUserProductDetails && singleUserProductDetails.map((item,i)=>(

                                    <div className="bg-slate-200 rounded-lg overflow-hidden shadow transition-shadow hover:shadow-xl">
                                        <Link to={`/productDetails/${item["productName"]}/${item['_id']}?categoryID=${item['categoryID']}`}>
                                          <div className="flex">
                                           <div className="h-full w-1/2 bg-slate-300 flex items-center justify-center rounded-md">
                                               <div className="w-48 h-full">
                                                   <img className="h-full w-full" src={item['productImg']}/>
                                               </div>
                                           </div>
                                           <div className="p-2 w-1/2">
                                               <h2 className="font-semibold">{item['productName']}</h2>
                                               <p>Price:{item['price']}</p>
                                               <p className="text-gray-700">Brand:{item['brandName']}</p>
                                           </div>
                                          </div>
                                        </Link>
                                        <hr className="border border-green-300"/>
                                        <div className="grid grid-cols-2">
                                            <div className="m-5 flex justify-center">
                                                <button className="w-32 bg-red-600 text-white py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-red-700 " onClick={()=>{DeleteProduct(item['_id'])}}>Delete product</button>
                                            </div>
                                            <div className="m-5 flex justify-center">
                                                <Link to={`/productDetails/${item["productName"]}/${item['_id']}?categoryID=${item['categoryID']}`} className="w-32 bg-gradient-to-r from-cyan-500 to-green-600  text-white py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-200 hover:bg-red-700 pl-4 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ">View Details</Link>
                                            </div>
                                        </div>
                                    </div>

                            ))
                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export default UserProduct;