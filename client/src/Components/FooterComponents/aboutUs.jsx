import React, {useEffect} from 'react';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className=" mt-28 flex justify-center items-center">
                <div className="bg-white shadow-md rounded-md w-3/4 h-auto border-t-2 ">
                    <div className=" mb-10">
                        <div className="flex justify-center items-center ">
                            <div className="mt-16 text-3xl font-semibold w-2/3">
                                <h1 className="mb-2 text-center">About SellPoint</h1>
                                <hr className="mt-3 border"/>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-gray-500">Bikroy is a platform on which you can buy and sell almost
                                everything! Use the location selector to find deals close to you or check out</p>
                        </div>
                        <div className="flex justify-center items-center space-x-5 px-5 pt-10">
                            <div className="w-2/5 pt-3 ">
                                <div className="text-lg font-semibold">
                                    <p>Have items to sell?</p>
                                </div>
                                <div className="pt-4">
                                    <p>Sign up for a free account to start selling your items! It takes less than 2
                                        minutes
                                        to post an ad. Visit How to sell fast for some tips on creating great ads that
                                        generate a lot of buyer interest. If you have a lot of items to sell, consider
                                        buying a membership and enjoy additional benefits. We also have some great tools
                                        that help make your ad stand out from the rest. Check out the Ad Promotions page
                                        for
                                        more information.</p>
                                </div>

                            </div>
                            <div className="w-2/5">
                                <div className="text-lg font-semibold">
                                    <p>Looking to buy something?</p>
                                </div>
                                <div className="pt-3">
                                    <p>Bikroy has the widest selection of items all over Bangladesh and across more than
                                        50
                                        different categories. Whether you're looking for a car, mobile phone, house,
                                        computer or pet, you will find the best deal on Bikroy. Our search and filters
                                        make
                                        it super easy to find exactly what you're looking for!</p>

                                </div>

                            </div>
                        </div>
                        <hr className="mt-5 border"/>
                        <div className="text-gray-500 flex justify-center items-center px-20 pt-5">
                            <p>Please note that we carefully review every ad before it is published to ensure that the
                                quality is up to our standards. Check out the FAQs page for answers to the most
                                frequently
                                asked questions.</p>
                        </div>

                    </div>


                </div>

            </div>
            <div className="flex justify-center items-center mt-10">
                <div className="bg-white shadow-md border-t rounded-md w-3/4 h-auto">
                    <div className="flex justify-center items-center">
                        <div>
                            <div className="mt-10 px-10">
                                <p className="text-2xl font-semibold">Questions? Get In Touch!</p>
                                <p className="text-gray-500 pt-3">Every day from 10:00 AM to 8:00 PM</p>
                            </div>
                           <div className="flex items-center justify-center space-x-4 mt-10 mb-10 px-5 ml-5">
                               <div className="flex-grow">
                                   <div className="flex space-x-2">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                           <path strokeLinecap="round" strokeLinejoin="round"
                                                 d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                                       </svg>
                                       <p>Call us</p>
                                   </div>
                                   <div className="text-gray-500">
                                       <p>01611650721</p>
                                   </div>

                               </div>
                               <div>
                                   <div className="flex space-x-2">
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                           <path strokeLinecap="round" strokeLinejoin="round"
                                                 d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                                       </svg>
                                       <p>Email us</p>
                                   </div>
                                   <div className="text-gray-500">
                                       <p>rakib107054@gamil.com</p>
                                   </div>
                               </div>

                           </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;