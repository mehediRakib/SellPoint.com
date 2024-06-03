import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import userStore from "../../Store/userStore.js";
import toast from "react-hot-toast";
import UserSubmitButton from "./UserSubmitButton.jsx";
import Swal from "sweetalert2";
import UserSidebar from "../Products/UserSidebar.jsx";

const UserProfile = () => {
    const navigate = useNavigate();
    const {profileDetails, readProfile, doLogout, accountDelete,readProfileDetails} = userStore();
    useEffect(() => {
        (async () => {
            await readProfile();
            await readProfileDetails();
        })()
    }, []);

    const [img, setImg] = useState("")

    const logout = async () => {
        const res = await doLogout();
        if (res === 'success') {
            sessionStorage.clear();
            localStorage.clear();
            navigate('/');
        } else {
            toast.error("Something went wrong");
        }
    };
    const DeleteAccount = async () => {
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
                const res = await accountDelete();
                if (res === 'success') {
                    await swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    navigate('/');
                } else {
                    throw new Error("Something went wrong!")

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
    };
    return (
        <div className="mt-32 flex justify-center items-center px-4 lg:px-0">
            <div className="bg-slate-50 w-full lg:w-2/3 rounded-md shadow-lg flex flex-col lg:flex-row overflow-hidden">
                <UserSidebar/>
                {/* Main Content */}
                <div className="bg-white flex-auto p-4 lg:p-8">

                    <div className="flex items-center space-x-4 mb-6">
                        {profileDetails && profileDetails.map((item, i) => (
                            <>
                                {
                                    item['img'] ?
                                        <img className="w-20 h-20 rounded-full" src={item['img']} alt="Profile"/> :
                                        <img className="w-20 h-20 rounded-full" src="https://via.placeholder.com/150"
                                             alt="Profile"/>
                                }
                                <div>
                                    <p className="font-semibold text-lg text-gray-900">{item['name']}</p>
                                    <p className="text-gray-600">{item['email']}</p>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="space-x-3">
                        <UserSubmitButton
                            className="bg-green-600 text-white font-semibold px-5 rounded-full py-1 focus:ring-2 focus:ring-fuchsia-400 focus:outline-none hover:bg-green-700 transition-colors duration-500 ease-in-out"
                            onClick={logout}
                            text="Logout"
                        />
                        <button
                            className="bg-red-600 text-white font-semibold px-5 rounded-full py-1 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none hover:bg-red-700"
                            onClick={DeleteAccount}
                        >
                            Delete account
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;