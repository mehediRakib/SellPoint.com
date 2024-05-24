import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Breadcrumbs = () => {
    const {pathname}=useLocation();
    const path=pathname.split('/').filter((x)=>x);
    console.log(path)
    return (
        <div>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Breadcrumbs;