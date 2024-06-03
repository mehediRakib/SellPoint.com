import React, {useEffect} from 'react';

import contact from '../../assets/images/contact.jpg'

const UserContact = () => {

    useEffect(() => {
        (()=>{
            window.scrollTo(0,0);
        })()
    }, []);
    return (
        <div className="mt-28">
            <div className=" flex justify-center items-center">
                <div className="shadow-md border bg-slate-50 w-2/3 h-screen">
                    <div>
                        <div className="text-center text-2xl font-bold mt-5 text-blue-800">
                            <h2 className="mb-4 ">Contact Details</h2>
                            <hr/>
                        </div>
                        <div>
                            <div className="w-64 h-64 flex justify-center items-center mx-auto">
                                <img src={contact}/>
                            </div>

                            <div className="flex flex-grow justify-center items-center space-x-48">
                                <div>
                                    <div>
                                        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                        </svg>
                                    </div>
                                    <p>email</p>
                                </div>
                                <div>
                                    <div>
                                        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
                                        </svg>
                                    </div>
                                    phone
                                </div>
                                <div>
                                    <div className="w-12 h-12">
                                        <img src="https://www.svgrepo.com/show/110227/linkedin-big-logo.svg" className="h-10 w-auto"/>
                                    </div>
                                    <p>Linkdin</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default UserContact;