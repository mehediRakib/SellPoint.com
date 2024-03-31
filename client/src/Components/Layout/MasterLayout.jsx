import React from 'react';
import MasterNavber from "./MasterNavber.jsx";
import Footer from "./Footer.jsx";

const MasterLayout = (props) => {
    return (
        <div>
            <MasterNavber/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;