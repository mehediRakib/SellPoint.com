import React, { useEffect } from 'react';
import productStore from "../../Store/productStore.js";
import { Link } from "react-router-dom";
import moneyImg from '../../assets/images/money.avif'

const Category = () => {
    let { categoryDetails, readCategory } = productStore();

    useEffect(() => {
        (async () => {
            await readCategory();
        })()
    }, []);

    return (
        <div className="container flex justify-center">
            <div className="h-auto w-3/4">
                <div className="w-auto ml-32 mt-10 pt-20 ">
                    <h3 className="text-xl"><b>Browse items by category</b></h3>
                    <div className="flex flex-wrap mt-10">
                        {categoryDetails && categoryDetails.map((item, i) => (
                            <div key={i} className="w-1/4 px-1">
                                <Link to={"/products/"+item['_id']}>
                                    <div className="flex items-center p-5">
                                        <div className="w-28 h-28 px-1 pt-3">
                                            <img className="h-16 w-20" src={item['categoryImg']} alt={item['categoryName']} />
                                        </div>
                                        <div className="text-xl font-sans">
                                            <p>{item['categoryName']}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

               <div className="flex justify-center mt-16 space-x-4 pt-4">
                   <div className="w-1/2 h-48 shadow-xl rounded-md flex">
                       <div className="h-20 w-1/3">
                         <img src={moneyImg}/>
                       </div>
                       <div className="flex-grow pt-5">
                           <h2 className="text-xl"><strong>Start making money!</strong></h2>
                           <p className="text-gray-600 pt-2">Do you  have something to sell?</p>
                           <p className="text-gray-600 pb-4">Post your first ad and start making money!</p>
                           <Link to="/create-ad" className="w-20 bg-yellow-400 rounded-2xl px-5 py-1 mt-5 border-2 border-green-600 hover:bg-yellow-500 hover:text-gray-600">
                               post your ad for free
                           </Link>
                       </div>

                   </div>
                   <div className="w-1/2 h-48 shadow-xl rounded-md">

                   </div>
               </div>

                <div className="mt-16 text-gray-600">
                    <h2 className="text-lg font-semibold">About SellPoint.com, The largest market place in Bangladesh!</h2>
                    <p>SellPoint is platform where you can buy and sell almost everything!.We help people to buy and
                        sell vehicles find properties,buy and sell mobile phones, purchase electronic products and much more.
                        With more than 50 categories our solution are built to be safe, smart and convenient for out customers</p>

                    <h2 className="font-semibold mt-5">Benefits of Trading at SellPoint.com</h2>
                    <ul className="list-disc">
                        <li>
                            Fast & Easy Experience: Navigated buying and selling experience in Bangladesh which is simpler, faster, and easier. Shop and sell on the go and get your desired products in just a few clicks.
                        </li>
                        <li>
                            Post Ads Free: As a free classified website, we offer free ad posting features in many categories for the convenience of the users based on their locations.
                        </li>
                        <li>
                            Safe & Secure Shopping: We have listed our verified members and authorized dealers to create a safe shopping experience for our users.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Category;
