import React, { useEffect } from 'react';
import safetyImg from '../../assets/images/safety.avif';
import safetyImg2 from '../../assets/images/safetyImg2.avif';

const Safety = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mt-28 px-4">
            <div className="flex justify-center items-center">
                <div className="bg-white shadow-md rounded-md w-full lg:w-2/3 h-auto border">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-full md:w-1/2 lg:w-1/3 mx-auto" src={safetyImg} alt="Safety"/>
                        <div className="text-center w-full px-4">
                            <p className="font-semibold text-2xl">Stay safe on SellPoint</p>
                            <div className="w-full md:w-4/5 text-center text-gray-600 mx-auto">
                                <p>
                                    At SellPoint, we are 100% committed to making sure that your experience on our
                                    platform is as safe as possible. Here's some advice on how to stay safe while trading on Bikroy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-10"/>
                    <div className="flex-col lg:flex-row justify-center items-center mt-10 px-4">
                           <div className="flex justify-center items-center">
                               <img className="w-full md:w-2/3 lg:w-1/2" src={safetyImg2} alt="General Safety Advice"/>
                           </div>
                           <div className="text-center lg:ml-4 mt-4 lg:mt-0">
                               <p className="font-semibold text-2xl">General Safety Advice</p>
                           </div>
                    </div>
                    <div className="mt-10 flex flex-col lg:flex-row justify-center items-center lg:mx-16 space-y-8 lg:space-y-0 lg:space-x-4">
                        <div className="w-full lg:w-1/2 space-y-8 px-4">
                            <div>
                                <p className="font-semibold text-lg mt-2">Verify item in person</p>
                                <p className="text-gray-600">Always meet the seller and inspect the item thoroughly before proceeding with any payment.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-lg mt-2 mb-2">Exchange item and payment at the same time</p>
                                <p className="text-gray-600">Buyers: don't make any payments before receiving an item. Sellers: don't send an item before receiving payment.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-lg mt-2">Never give out financial information</p>
                                <p className="text-gray-600">This includes bank account details, eBay/PayPal info, and any other information that could be misused.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-8 px-4">
                            <div>
                                <p className="font-semibold text-lg mt-2">While applying for a job</p>
                                <p className="text-gray-600">Research the job and the employer before you apply. Don’t give out personal information before meeting the employer in person. Avoid going to remote locations for an interview.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-lg mt-2">Use common sense</p>
                                <p className="text-gray-600">Avoid anything that appears too good to be true, such as unrealistically low prices and promises of quick money.</p>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-16"/>
                    <div className="mt-16">
                        <div className="flex flex-col justify-center items-center w-full px-4">
                            <img className="w-full md:w-1/2 lg:w-1/4 mx-auto"
                                 src="https://img.freepik.com/free-vector/get-your-technology-safe-with-scam-alert-alarm-background_1017-45322.jpg?size=626&ext=jpg&ga=GA1.1.176802940.1712506422&semt=ais_user_b"
                                 alt="Scam Alert"
                            />
                            <p className="text-center font-bold text-3xl mt-4">Scams and frauds to watch out for</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center mx-auto px-4 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-4 mt-16">
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div>
                                    <p className="font-semibold text-lg mt-2">Fake payment services</p>
                                    <p className="text-gray-500">Bikroy does not offer any form of payment scheme or protection. Please report any emails claiming to offer such services. Avoid using online payment services or escrow sites unless you are 100% sure that they are genuine.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-lg mt-2">Fake fee requests</p>
                                    <p className="text-gray-500">Avoid anyone that asks for extra fees to buy or sell an item or service. Bikroy never requests payments for its basic services, and doesn't allow items that are not located in Bangladesh, so import and brokerage fees should never be required.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-lg mt-2">Caution: No Delivery Options at Bkman</p>
                                    <p className="text-gray-500">Bkman no longer offers delivery. Please report any false claims and avoid payment for such services.</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 space-y-8 lg:space-x-8">
                                <div className="lg:ml-8">
                                    <p className="font-semibold text-lg mt-2">Fake information requests</p>
                                    <p className="text-gray-500">Bikroy never sends emails requesting your personal details. If you receive an email asking you to provide your personal details to us, do not open any links. Please report the email and delete it.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-lg mt-2">Requests to use money transfer services such as Western Union or MoneyGram</p>
                                    <p className="text-gray-500">These services are not meant for transactions between strangers and many scams are run through them. Avoid requests to use these services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="mt-5"/>
                        <div>
                            <div className="flex justify-center items-center md:w-1/5 lg:w-1/3 sm:w-40 mx-auto">
                                <img src="data:image/jpeg;base64,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"/>
                            </div>
                            <div className="flex flex-col justify-center items-center w-full px-4">
                                <p className="text-center font-bold text-3xl">Reporting a safety issue</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center mx-auto px-4 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-4 mt-16 mb-5">
                            <div className="w-full lg:w-1/2">
                                <p className="font-semibold text-lg mt-2">Victim of a scam?</p>
                                <p className="text-gray-500">If you feel that you have been the victim of a scam, please report your situation to us immediately. If you have been cheated, we also recommend that you contact your local police department.</p>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="font-semibold text-lg mt-2">Information sharing</p>
                                <p className="text-gray-500">Bikroy is committed to the privacy of our users and does not share user information publicly. However, we take safety seriously and will cooperate with law enforcement if receive requests regarding fraudulent or other criminal activity.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div>
                                <div className="mt-10 px-4">
                                    <p className="text-2xl font-semibold">Need help!</p>
                                    <p className="text-gray-500 pt-3">Every day from 10:00 AM to 8:00 PM</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-center space-x-8 mt-10 mb-10 px-4">
                                    <div className="flex-grow">
                                        <div className="flex space-x-2 items-center">
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
                                        <div className="flex space-x-2 items-center">
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
        </div>
    );
};

export default Safety;
