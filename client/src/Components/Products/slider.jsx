import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import productStore from "../../Store/productStore.js";

const Slider = () => {
    const { productByCategory } = productStore(); // Assuming this is a hook returning functions from a context or store
    const { categoryID } = useParams();

    // State to store the list of images and current index
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetching the products by category when the component mounts or categoryID changes
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await productByCategory(categoryID);
            setImages(data); // Assuming data is the array of product images
        };

        fetchProducts();
    }, [categoryID]);

    // Function to navigate to the previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : images.length - 1);
    };

    // Function to navigate to the next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex < images.length - 1 ? prevIndex + 1 : 0);
    };

    return (
        <div>
            <div className="relative overflow-hidden rounded-lg">
                <div className="carousel-inner h-full w-full relative">
                    {images.map((image, index) => (
                        <div
                            key={image.id} // Assuming each image has a unique id
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${
                                index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <img className="object-cover w-full h-full" src={image.productImage} alt={image.alt || 'Product Image'} />
                        </div>
                    ))}
                </div>
                {images.length > 1 && (
                    <>
                        <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 opacity-50 hover:opacity-75 p-2 rounded-full focus:outline-none z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7-1.41-1.41L6 12l8.41 8.41z" />
                            </svg>
                        </button>
                        <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 opacity-50 hover:opacity-75 p-2 rounded-full focus:outline-none z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7 1.41 1.41L18 12l-8.41-8.41z" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Slider;
