import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import productStore from "../../Store/productStore.js";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {data} from "autoprefixer";

const Slider = () => {

    const {categoryID} = useParams();
    const {productByCategory,readClickCategory,ClickCategoryDetails} = productStore();
    const [img, setImg] = useState([]);
    const [name,setName]=useState([]);
    const [price,setPrice]=useState([]);
    const [id,setId]=useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            await readClickCategory(categoryID);
            await productByCategory(categoryID)
                .then(data => {
                    setImg(data.map(item => item.productImg));
                    setName(data.map(item=>item.productName));
                    setPrice(data.map(item=>item.price));
                    setId(data.map(item=>item._id));
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
        <div className="m-10 bg-white shadow-md rounded-md">
            <div className="max-w-lg m-auto py-16 px-4 relative group ">
                <div className="flex justify-center items-center text-xl font-semibold">
                    {ClickCategoryDetails && ClickCategoryDetails.map((item, i) => (
                        <p key={i}>
                            {item['categoryName']}
                        </p>
                    ))}
                </div>

                <Link to={`/productDetails/${name[currentIndex]}/${id[currentIndex]}?categoryID=${categoryID}`}>
                    <div>
                        <div className="flex justify-center p-5">
                            <img src={img[currentIndex]} className="w-auto h-96 rounded-2xl bg-center object-cover bg-cover duration-500 hover:opacity-90 transition"/>
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-lg">{name[currentIndex]}</p>
                            <p className="text-lg font-semibold text-green-600">Price: {price[currentIndex]}</p>
                        </div>
                    </div>
                </Link>
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