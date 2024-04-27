import React, {useEffect} from 'react';
import adminStore from "../../Store/adminStore.js";
import {Link} from "react-router-dom";

import Swal from "sweetalert2";
import userStore from "../../Store/userStore.js";

const UserAccount = () => {
    const {userAccountDetails,userAccount,deleteAccount}=adminStore();


    useEffect(() => {
        (async () => {
            await userAccount();

        })()
    }, []);
    const DeleteUserAccount=async (id) => {
        const postBody={
            _id:id,
        }

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
                const res = await deleteAccount(postBody);
                if(res==='success'){
                    await swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    await userAccount();
                }
                else{
                   throw  new Error("Something went wrong!")

                }

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                await swalWithBootstrapButtons.fire({
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

            <div className="mt-10 max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-500 px-6 py-4">
                    <p className="text-xl font-semibold text-white text-center">Account Information</p>
                </div>

                <div className="bg-white p-5">
                    {userAccountDetails && (
                        <ol className="list-decimal pl-4">
                            {userAccountDetails.map((item, i) => (
                                <li key={i} className="flex justify-between items-center py-3 border-b last:border-b-0 hover:bg-gray-100 hover:rounded-md">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-sm font-medium text-gray-700">{i + 1}. {item.name}</span>
                                    </div>
                                   <div>
                                       <p className="text-sm text-gray-600">{item.email}</p>
                                   </div>
                                   <div className="space-x-3">
                                       <button className="px-3 py-1 text-white bg-red-500 hover:bg-red-700 rounded shadow shadow-cyan-500/50 transition hover:translate-y-1 duration-300 delay-200 hover:scale-100 ease-in-out" onClick={()=>{DeleteUserAccount(item['_id'])}}>Delete account</button>

                                       <Link to={`/admin/user-product/${item['_id']}`} className="px-3 py-1 text-white bg-lime-500 hover:bg-lime-700 rounded shadow shadow-cyan-500/50 ">
                                           view ad
                                       </Link>

                                   </div>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        </div>

    );
};

export default UserAccount;