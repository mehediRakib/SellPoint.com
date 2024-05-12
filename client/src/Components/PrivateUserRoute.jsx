import React from 'react';
import {Outlet,Navigate} from "react-router-dom";
import userStore from "../Store/userStore.js";

const PrivateUserRoute = () => {
    const {isLogin}=userStore();
    return (
       <>
           {
               isLogin()?<Outlet/>:<Navigate to="/login"/>
           }
       </>
    );
};

export default PrivateUserRoute;