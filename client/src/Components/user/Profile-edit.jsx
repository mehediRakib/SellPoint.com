import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import userStore from "../../Store/userStore.js";
import UserSubmitButton from "./UserSubmitButton.jsx";
import UserSidebar from "../Products/UserSidebar.jsx";

const ProfileEdit = () => {
    const [image,setImage]=useState(null);
    const convert64=(e)=>{
        const read=new FileReader();
        read.readAsDataURL((e.target.files[0]));
        read.onload=()=>{
            setImage(read.result);
        }
    }

    let {profileFormData,readProfile,profileUpdate,readProfileDetails,profileFormDataChange,profileDetails}=userStore();

    useEffect(() => {
        (async () => {
            await readProfile();
            await readProfileDetails()

        })()
    }, []);

    const postBody={
        name:profileFormData.name,
        pass:profileFormData.NewPass,
        contact:profileFormData.contact,
        area: profileFormData.area,
        img:image,
        division:profileFormData.division,
        district:profileFormData.district
    }

    const updateProfile=async ()=>{

                const res=await profileUpdate(postBody);
                console.log("postBody: ",postBody)
                if(res==='success'){
                    toast.success("Successfully profile Updated");
                }else {
                    toast.error("Something went wrong");
                }
    }

    return (
        <div className="mt-28">
            <div className="flex justify-center items-center">
                <div className="w-3/4 h-auto bg-slate-50 rounded-md ">
                    <div className="flex overflow-hidden">
                        <UserSidebar/>
                        <div className="flex justify-center w-3/4 mb-10">
                            <div className="mt-16 w-4/5">
                                <div className="flex items-center space-x-4 mb-2 justify-center">
                                    {
                                        image?(
                                            <img className='w-20 h-20 rounded-full' src={image} alt="img"/>
                                        ):(
                                            <img className='w-20 h-20 rounded-full' src="https://via.placeholder.com/150" alt="img"/>
                                        )
                                    }

                                    <p>Name</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <input
                                        type="file"
                                         className="sr-only"
                                        id="img-upload"
                                        accept="image/*"
                                        onChange={convert64}
                                    />
                                    <label htmlFor="img-upload" className="block cursor-pointer bg-gradient-to-r from-blue-400 via-green-400 to-green-600 rounded-full px-4 font-semibold transition-colors duration-300 ease-in-out">Change profile</label>
                                </div>
                                <div className="flex justify-center w-full">
                                    <div className='w-full px-4 ml-20'>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                            <input id="username" type="text" value={profileFormData.name} onChange={(e)=>{profileFormDataChange('name',e.target.value)}} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2" placeholder="Username: "/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Contact</label>
                                            <input id="username" type="number" value={profileFormData.contact} onChange={(e)=>{profileFormDataChange('contact',e.target.value)}} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2" placeholder="Contact Number: "/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Division</label>
                                            <input id="username" type="text" value={profileFormData.division} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2"placeholder="Division: "/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">District</label>
                                            <input id="username" type="text" value={profileFormData.district} onChange={(e)=>{profileFormDataChange('district',e.target.value)}}className="mt-1 w-3/4 rounded-md border border-blue-500 p-2"placeholder="District: "/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Area</label>
                                            <input id="username" type="text" value={profileFormData.area} onChange={(e)=>{profileFormDataChange('area',e.target.value)}} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2"placeholder="Area: "/>
                                        </div>
                                            <br/>
                                        <p className="text-gray-500">Change Password</p>
                                            <div className="mb-4">
                                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Old Password</label>
                                                <input id="username" type="text" value={profileFormData.OldPass} onChange={(e)=>{profileFormDataChange('OldPass',e.target.value)}} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2" placeholder="Old password: "/>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">New Password</label>
                                                <input id="username" type="text" value={profileFormData.NewPass} onChange={(e)=>{profileFormDataChange('NewPass',e.target.value)}} className="mt-1 w-3/4 rounded-md border border-blue-500 p-2" placeholder="New Password: "/>
                                            </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-10 mr-4">
                                {/*{*/}
                                {/*    profileDetails && profileDetails.map((item,i)=>(*/}
                                            <UserSubmitButton className=" bg-gradient-to-r from-orange-200 via-red-400 to-pink-500 rounded-full px-6 py-1 focus:ring-2 focus:ring-pink-700 focus:outline-none
                                    hover:bg-gradient-to-r hover:from-sky-400 hover:via-cyan-500 hover:to-green-500 font-semibold hover:focus:outline-none hover:focus:ring-2 hover:focus:ring-purple-500" onClick={updateProfile} text="Save"/>

                                {/*    ))*/}
                                {/*}*/}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Toaster position="top-center"/>
        </div>
    );
};

export default ProfileEdit;