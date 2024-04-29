import React, {useEffect} from 'react';
import ProductDetails from "../Components/Products/ProductDetails.jsx";
import Layout from "../Components/Layout/Layout.jsx";
import productStore from "../Store/productStore.js";
import {useParams} from "react-router-dom";

const ProductDetailsPage = () => {

    return (
        <Layout>
            <ProductDetails/>
        </Layout>
    );
};

export default ProductDetailsPage;