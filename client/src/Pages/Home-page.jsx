import React from 'react';
import Category from "../Components/Products/Category.jsx";
import MasterLayout from "../Components/Layout/MasterLayout.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
            <Category/>
        </MasterLayout>
    );
};

export default HomePage;