import React from 'react';
import Footer from "./Footer.jsx";
import AppNabvar from "./appNabvar.jsx";

const Layout = (props) => {
    return (
        <>
            <AppNabvar/>
            {props.children}
            <Footer/>

        </>
    );
};

export default Layout;