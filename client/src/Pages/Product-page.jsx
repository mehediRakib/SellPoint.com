import React, {useEffect} from 'react';
import Product from "../Components/Products/product.jsx";
import Layout from "../Components/Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import productStore from "../Store/productStore.js";

const ProductPage = () => {

    return (
        <Layout>
            <Product/>
        </Layout>
    );
};

export default ProductPage;