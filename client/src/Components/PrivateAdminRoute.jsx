import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import userStore from "../Store/userStore.js";

const PrivateAdminRoute = () => {
    const {readProfile,profileDetails}=userStore();
    const [role,setRole]=useState()
    useEffect(() => {
        (async () => {
            await readProfile()
            profileDetails && profileDetails.map((item,i)=>{
                setRole(item['role']);
            })
        })()
    }, [role,profileDetails]);
    return (
       <>
           {
               role==="admin"? <Outlet/> : <div className="m-10 flex justify-center text-2xl font-semibold"><p>Unauthorized access</p></div>
           }

       </>

    );
};

export default PrivateAdminRoute;