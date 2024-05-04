import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import productStore from "../../Store/productStore.js";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";

const Slider = () => {

    const {categoryID} = useParams();
    const {productByCategoryDetails, productByCategory} = productStore();
    const [img, setImg] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            await productByCategory(categoryID)
                .then(data => {
                    setImg(data.map(item => item.productImg));
                })
                .catch(err => {
                    setLoading(false);
                })
        })()
    }, [categoryID]);

    const [currentIndex,setCurrentIndex]=useState(0);
    const prevSlide=async ()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex=isFirstSlide? img.length-1:currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const nextSlide=()=>{
        const isLastSlide=currentIndex===img.length-1;
        const newIndex=isLastSlide?0:currentIndex+1;
        setCurrentIndex(newIndex);
    }
    const gotoSlide=async (index)=>{
        setCurrentIndex(index);

    }

    const autoSlide = true; // Set this to true to enable auto sliding
    const autosliderInterval = 3000; // Interval in milliseconds

    useEffect(() => {
        let interval = null;
        if (autoSlide) {
            interval = setInterval(() => {
                nextSlide(); // Call the nextSlide function to go to the next slide
            }, autosliderInterval);
        }
        return () => {
            if (interval) {
                clearInterval(interval); // Clear the interval on component unmount
            }
        };
    }, [currentIndex, autoSlide]);
    return (
        <div className="m-10">
            <div className="max-w-lg h-auto m-auto py-16 px-4 relative group ">
                <div>
                    <img src={img[currentIndex]} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"/>
                </div>
                <div className="hidden group-hover:block absolute inset-y-1/2 -translate-x-0 left-5 text-2xl h-10 w-10 py-1 px-1 bg-black/15 rounded-full text-white cursor-pointer  ">
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                <div className="hidden group-hover:block absolute inset-y-1/2 -translate-x-0 right-5 text-2xl h-10 w-10 py-1 px-1 bg-black/15 rounded-full text-white cursor-pointer  ">
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
                <div className="flex justify-center py-2 top-4">
                    {img.map((item,i)=>(
                        <div className="text-black cursor-pointer text-2xl"
                             key={i}
                             onClick={()=>gotoSlide(i)}
                        >
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Slider;