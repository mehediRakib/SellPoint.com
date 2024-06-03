import React, {useEffect, useState} from 'react';
import userStore from "../../Store/userStore.js";
import { Link} from "react-router-dom";
import UserSidebar from "../Products/UserSidebar.jsx";


const ProfileForm = () => {
    let {profileFormData,readProfile,readProfileDetails,profileDetailsForm}=userStore();
    useEffect(() => {
        (async () => {
            await readProfileDetails();
            await readProfile();

        })()
    }, []);
    console.log(profileFormData.img);
    console.log(profileFormData)



    return (

        <div className="mt-28">
            <div className="flex justify-center items-center">
                <div className="w-3/4 h-screen bg-slate-50 rounded-md">
                    <div className="flex overflow-hidden">
                       <UserSidebar/>
                        <div className="flex justify-center w-3/4">
                            <div className="mt-16 w-4/5">
                                <div className="flex items-center space-x-4 mb-2 justify-center">
                                    {
                                        profileDetailsForm.img?  <img className='w-20 h-20 rounded-full object-cover' src={profileDetailsForm.img} alt="img"/>: <img className='w-20 h-20 rounded-full' src="https://via.placeholder.com/150" alt="img"/>
                                    }
                                    <p>{profileFormData.name}</p>
                                </div>
                                <div className="flex justify-center w-full">
                                    <div className='w-full px-4 ml-20'>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                            <input id="username" type="text" value={profileFormData.name} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2" placeholder="Username: "/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Contact</label>
                                            <input id="username" type="text" value={profileFormData.contact} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2" placeholder="Contact Number: "/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Division</label>
                                            <input id="username" type="text" value={profileDetailsForm.division} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2"placeholder="Division: "/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">District</label>
                                            <input id="username" type="text" value={profileDetailsForm.district} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2"placeholder="District: "/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Area</label>
                                            <input id="username" type="text" value={profileDetailsForm.area} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2"placeholder="Area: "/>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-10 mr-4">
                                    <Link to={"/profile-edit/userID"} className=" bg-gradient-to-r from-orange-200 via-red-400 to-pink-500 rounded-full px-6 py-1 focus:ring-2 focus:ring-pink-700 focus:outline-none
                                    hover:bg-gradient-to-r hover:from-sky-400 hover:via-cyan-500 hover:to-green-500 font-semibold hover:focus:outline-none hover:focus:ring-2 hover:focus:ring-purple-500">Edit Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default ProfileForm;