import React from 'react';
import googlePlay from '../../assets/images/googlePlay.png';
import appleStore from '../../assets/images/appStore.png';
import facebookImg from '../../assets/images/facebook.png';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-col w-full min-h-full  bg-gray-100 mt-8">
            <hr className="border-1 border-green-700" />
            <div className="container p-5 flex-grow">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 px-20 pl-24 pt-5 ">
                    <div className="space-y-4">
                        <p className="text-lg text-gray-700 font-bold">Download Our app</p>
                        <div className="flex space-x-4">
                            <div className="w-28 h-12">
                                <img className="h-10 w-auto" src={googlePlay} alt="Download from Google Play" />
                            </div>
                            <div className="w-28 h-12">
                                <img className="w-auto h-10" src={appleStore} alt="Download from Apple Store" />
                            </div>
                        </div>

                        <p className="text-lg text-gray-700">Connect with</p>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12">
                                <img className="w-10 h-8" src={facebookImg} alt="Facebook" />
                            </div>
                            <Link to='https://www.facebook.com/' className="text-blue-800 font-sans font-bold">Like us on facebook</Link>
                        </div>
                    </div>

                    {/* More from SellPoint.com */}
                    <div>
                        <p className="text-lg text-gray-700 font-bold">More from SellPoint.com</p>
                        <div className="text-blue-800 space-y-2">
                            <p><Link to="">Membership</Link></p>
                            <p><Link to="">Banner Ads</Link></p>
                            <p><Link to="">Ad Promotion</Link></p>
                        </div>
                    </div>

                    {/* Help and Support */}
                    <div>
                        <p className="text-lg text-gray-700 font-bold">Help and Support</p>
                        <div className="text-blue-800 space-y-2">
                            <p><Link to="">FAQ</Link></p>
                            <p><Link to="/stay-safe">Stay Safe</Link></p>
                            <p><Link to="/contact-us">Contact Us</Link></p>
                        </div>
                    </div>

                    {/* Follow SellPoint */}
                    <div>
                        <p className="text-lg text-gray-700 font-bold">Follow SellPoint</p>
                        <div className="text-blue-800 space-y-2">
                            <p><Link to="">Blog</Link></p>
                            <p><Link to="https://www.facebook.com/profile.php?id=100084533238325">Facebook</Link></p>
                            <p><Link to="https://x.com/X?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">X</Link></p>
                            <p><Link to="https://www.youtube.com/">YouTube</Link></p>
                        </div>
                    </div>

                    {/* About SellPoint.com */}
                    <div>
                        <p className="text-lg text-gray-700 font-bold">About SellPoint.com</p>
                        <div className="text-blue-800 space-y-2">
                            <p><Link to="/about-us">About Us</Link></p>
                            <p><Link to="">Careers</Link></p>
                            <p><Link to="/terms-and-condition">Terms and Conditions</Link></p>
                            <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                            <p><Link to="">Site Map</Link></p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="border-1 border-gray-400 w-full md:w-1/2">
                        <hr />
                    </div>
                </div>

                <div className="flex justify-center pt-4 mt-4 space-x-4">
                    <div className="">
                        <p>Copyright @ SellPoint.com</p>
                    </div>
                    <div>
                        <img src="logo" alt="SellPoint Logo"/>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Footer;