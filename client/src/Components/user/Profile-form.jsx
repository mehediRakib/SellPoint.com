import React, {useEffect, useState} from 'react';
import UserSubmitButton from "./UserSubmitButton.jsx";
import userStore from "../../Store/userStore.js";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const ProfileForm = () => {
    let {profileFormData,profileFormDataChange,readProfile,profileUpdate,doLogout,accountDelete,readProfileDetails}=userStore();
    useEffect(() => {
        (async () => {
            await readProfileDetails();
            await readProfile();

        })()
    }, []);

    const [img,setImg]=useState("");

    const UpdateProfile=async ()=>{
        const postBody={
            name:profileFormData.name,
            pass:profileFormData.pass,
            contact:profileFormData.contact,
            area: profileFormData.area,
            img:img,
            division:profileFormData.division,
            district:profileFormData.district
        }
        const res=await profileUpdate(postBody);
        if(res==='success'){
            toast.success("Successfully profile Updated");
        }else {
            toast.error("Something went wrong");
        }

    }

    const convert64=(e)=>{
        const read=new FileReader();
        read.readAsDataURL(e.target.files[0])
        read.onload=()=>{
            setImg(read.result);
        }
        read.onerror=(e)=>{
            toast("SomeThing went wrong!");
        }

    }

    const navigate=useNavigate();

    const logout = async () => {
        const res = await doLogout();
        if (res === 'success') {
            sessionStorage.clear();
            localStorage.clear();
            navigate('/');
        } else {
            toast.error("Something went wrong");
        }
    }

    const DeleteAccount = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            const res = await accountDelete();
            if (res === 'success') {
                sessionStorage.clear();
                localStorage.clear();
                Swal.fire('Deleted!', 'Your account has been deleted.', 'success').then(() => {
                    navigate('/');
                });
            } else {
                toast.error('Something went wrong');
            }
        }
    };
    return (
        <div className="flex justify-center">
            <div className="container w-2/3 mt-10">
                <div className="card shadow-lg rounded-md mt-10 flex flex-grow justify-center m-10 p-10 shadow-cyan-500/50">
                    <div className="image-container flex flex-grow h-48 w-48 mt-28 mx-5 relative">
                        {
                            img==="" || img===null?(
                                <>
                                    <img
                                        className="rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/425638420_358999996927772_351558573554653578_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGiuDDMSgS6Y6vQOId6CY63WB9cL-1R3ytYH1wv7VHfK_QRPaeShCQIHA8lpnxSlFxJQ0olssgtqu_FMFCyJ324&_nc_ohc=zu55I8GovZsAX-hK2bM&_nc_ht=scontent.fdac157-1.fna&oh=00_AfCZD4RkOE1vAoJJoPlu6LqZLCRd1_W0MufD2lfpMi3BdA&oe=660D1925"
                                        alt="Profile picture"
                                    />
                                </>

                            ):(
                                <>
                                    <img
                                        className="rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        src={img}
                                        alt="Profile picture"
                                    />
                                </>
                            )
                        }

                            <input
                                type="file"
                                accept="image/*"
                                className="absolute inset-52 inset-x-4  cursor-pointer  h-10  "
                                onChange={convert64}
                            />

                    </div>

                    <div className="form-container flex-grow justify-center">
                        <div>
                            <p className="pt-8 px-32"><strong>Update your profile</strong></p>
                            <hr className="w-96 mt-3" />
                            <div className="mt-3">
                                <label className="px-1">Name:</label>
                                <br />
                                <input
                                    value={profileFormData.name}
                                    onChange={(e)=>{profileFormDataChange("name",e.target.value)}}
                                    type="text"
                                    placeholder="Name:"
                                    className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-5/6"
                                />
                                <br />
                                <label className="px-1">Contact:</label>
                                <br />
                                <input
                                    value={profileFormData.contact}
                                    onChange={(e)=>{profileFormDataChange("contact",e.target.value)}}
                                    type="text"
                                    placeholder="Contact:"
                                    className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-5/6"
                                />
                                <br />
                                <label className="px-1">Change password:</label>
                                <br />
                                <input
                                    onChange={(e)=>{profileFormDataChange("pass",e.target.value)}}
                                    type="password"  placeholder="New password"
                                    className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-5/6"
                                />
                                <br />
                                <label className="px-1">Division:</label>
                                <br />
                                <input
                                    value={profileFormData.division}
                                    onChange={(e)=>{profileFormDataChange("division",e.target.value)}}
                                    type="text"
                                    placeholder="Divivsion:"
                                    className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-5/6"
                                />
                                <br />
                                <label className="px-1">District:</label>
                                <br />
                                <input
                                    value={profileFormData.district}
                                    onChange={(e)=>{profileFormDataChange("district",e.target.value)}}
                                    type="text"
                                    placeholder="District"
                                    className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-5/6"
                                />
                                <br />
                                <label className="px-1">Area:</label>
                                <br />
                                <input
                                    value={profileFormData.area}
                                    onChange={(e)=>{profileFormDataChange("area",e.target.value)}}
                                    type="text"
                                    placeholder="Area:"
                                    className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-5/6"/>

                            </div>
                            <div className="mt-4 space-x-2 flex">
                                <UserSubmitButton onClick={UpdateProfile}  className="rounded-md bg-green-600 w-1/3 p-2 hover:bg-green-800 hover:text-white" text="Update Profile"/>
                                <button className="rounded-md bg-red-500 w-1/3 p-2 hover:bg-red-800 hover:text-white" onClick={logout}>Log out</button>
                                <button className="rounded-md bg-red-600 w-40 p-2 hover:bg-red-800 hover:text-white" onClick={DeleteAccount}>Delete account</button>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
            <Toaster position="bottom-center"/>
        </div>
    );
};


export default ProfileForm;