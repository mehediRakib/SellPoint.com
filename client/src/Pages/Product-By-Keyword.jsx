import React, {useEffect} from 'react';
import Layout from "../Components/Layout/Layout.jsx";
import ProductShowByKeyword from "../Components/Products/productShowByKeyword.jsx";

const ProductByKeyword = () => {
    return (
        <Layout>
            <ProductShowByKeyword/>
        </Layout>
    );
};

export default ProductByKeyword;