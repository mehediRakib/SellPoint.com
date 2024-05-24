import React, {useEffect} from 'react';
import contactImg from '../../assets/images/contact.jpg';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mt-28">
            <div className="flex justify-center items-center">
                <div className="bg-white shadow-md border-t rounded-md w-11/12 md:w-2/3 h-auto p-4">
                    <div className="flex justify-center items-center">
                        <div className="w-48 h-48 object-cover">
                            <img src={contactImg} alt="Contact Us" className="max-w-full h-auto"/>
                            <hr className='border mt-2'/>

                        </div>
                    </div>
                    <div className="mt-4 text-center ">
                        <p className="text-xl font-bold ">Contact Us</p>
                        <p className="mt-2 w-2/3 mx-auto">
                            Check out our FAQs and Stay Safe sections to see if your question has already been
                            answered. If not, please get in touch with us and we will get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="mt-16 text-center ">
                        <p className="text-xl font-bold ">You can also call or email us</p>
                        <p className="mt-2 w-2/3 mx-auto text-gray-500">
                            Every day from 10:00 AM to 8:00 PM
                        </p>
                    </div>

                    <div className="flex justify-center items-center mt-10 mx-16 mb-16">
                        <div className="flex-grow text-center">
                            <div className="flex justify-center items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <p>Call us</p>
                            </div>
                            <div>
                                <p>01611650721</p>
                            </div>
                        </div>
                        <div className="flex-grow text-center mt-16">
                            <div className="flex justify-center items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div>
                                    <p className="">Addresss</p>
                                </div>
                            </div>
                            <div className="w-1/3 text-center mx-auto">
                                <p>Floor-11, MS Center, Plot 8, Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka-1212</p>
                            </div>
                        </div>
                        <div className="flex-grow text-center">
                            <div className="flex justify-center items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <p>Mail us</p>
                            </div>
                            <div>
                                <p>rakib107054@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
