import React from 'react';
import Footer from "./Footer.jsx";
import AppNabvar from "./appNabvar.jsx";

const Layout = (props) => {
    return (
        <div>
            <Footer/>
            {props.children};
            <AppNabvar/>

        </div>
    );
};

export default Layout;