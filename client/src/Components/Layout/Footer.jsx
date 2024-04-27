import React from 'react';
import googlePlay from '../../assets/images/googlePlay.png';
import appleStore from '../../assets/images/appStore.png';
import facebookImg from '../../assets/images/facebook.png';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="pt-12  bottom-0 w-full z-0 flex flex-col min-h-full">
                <hr className="border border-1 border-green-700"/>
            <div className="container p-5 bg-gray-300 h-fit bottom-0">

                <div className=" h-50">
                    <div className="flex px-5">
                       <div className="flex-grow">
                           <p className="text-lg text-gray-700 "><strong>Download Our app</strong></p>
                           <div className="flex">
                               <div className="w-28 h-12">
                                   <img className="h-10 w-auto" src={googlePlay}/>
                               </div>
                               <div className="w-28 h-12">
                                   <img  className=" w-auto h-auto" src={appleStore}/>
                               </div>
                           </div>

                           <p className="text-lg text-gray-700">Connect with</p>
                           <div className="flex">
                               <div className="w-12 h-12">
                                   <img  className=" w-10 h-8" src={facebookImg}/>
                               </div>
                               <div>
                                   <Link to='https://www.facebook.com/' className="text-blue-800 font-sans "><strong>Like us on facebook</strong></Link>
                               </div>
                           </div>
                       </div>
                        <div className="flex-grow">
                            <div>
                                <p className="text-lg text-gray-700"><strong>More from SellPoint.com</strong></p>
                            </div>
                            <div className="text-blue-800">
                               <p> <Link to="">Member Ship</Link></p>
                                <p><Link to="">Banner Ads</Link></p>
                                <p><Link to="">Ad promotion</Link></p>
                            </div>

                        </div>

                        <div className="flex-grow">
                            <div>
                                <p className="text-lg text-gray-700"><strong>Help and support</strong></p>
                            </div>
                            <div className="text-blue-800">
                                <p> <Link to="">FAQ</Link></p>
                                <p><Link to="">Stay safe</Link></p>
                                <p><Link to="">Contact us</Link></p>
                            </div>

                        </div>


                        <div className="flex-grow">
                            <div>
                                <p  className="text-lg text-gray-700"><strong>Follow Sellpoint</strong></p>
                            </div>
                            <div className="text-blue-800">
                                <p> <Link to="">Blog</Link></p>
                                <p><Link to="">Facebook</Link></p>
                                <p><Link to="">X</Link></p>
                                <p><Link to="">Youtube</Link></p>
                            </div>

                        </div>

                        <div className="flex-grow">
                            <div>
                                <p className="text-lg text-gray-700"><strong>About SellPoint.com</strong></p>
                            </div>
                            <div className="text-blue-800">
                                <p> <Link to="">About us</Link></p>
                                <p><Link to="">Carrers</Link></p>
                                <p><Link to="">Temrs and Conditons</Link></p>
                                <p><Link to="">Privacy policy</Link></p>
                                <p><Link to="">Site map</Link></p>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="flex justify-center mt-8">
                    <div className=" border border-1 border-gray-400 w-1/2 ">
                        <hr/>
                    </div>
                </div>

                <div className="w-1/2 flex justify-center pt-4 ml-96">

                    <div  className="">
                        <p>Copyright @ SellPoint.com</p>
                    </div>
                    <div>
                        <img src="logo"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;