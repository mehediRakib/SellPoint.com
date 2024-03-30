import React from 'react';

const ProfileForm = () => {
    return (
        <div>
            <div className="container flex justify-center">
                <div className="h-auto w-80 shadow-lg rounded-md mt-10 flex flex-grow m-10 p-10 ">
                    <div className="flex flex-grow h-60 w-60 px-20">
                        <img className="rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/425638420_358999996927772_351558573554653578_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGiuDDMSgS6Y6vQOId6CY63WB9cL-1R3ytYH1wv7VHfK_QRPaeShCQIHA8lpnxSlFxJQ0olssgtqu_FMFCyJ324&_nc_ohc=zu55I8GovZsAX-hK2bM&_nc_ht=scontent.fdac157-1.fna&oh=00_AfCZD4RkOE1vAoJJoPlu6LqZLCRd1_W0MufD2lfpMi3BdA&oe=660D1925"/>
                    </div>

                    <div className="flex-grow">
                        <div>
                            <label className="px-1">Name:</label><br/>
                            <input type="text" placeholder="Name:" className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-96"/><br/>
                            <label className="px-1">Contact:</label><br/>
                            <input type="text" placeholder="Contact:" className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-96"/><br/>
                            <label className="px-1">Password:</label><br/>
                            <input type="text" placeholder="Password" className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-96"/><br/>
                            <label className="px-1 ">Division:</label><br/>
                            <input type="text" placeholder="Divivsion:" className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-96"/><br/>
                            <label className="px-1">District:</label><br/>
                            <input type="text" placeholder="District" className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-96"/><br/>
                            <label className="px-1">Area:</label><br/>
                            <input type="text" placeholder="Area:" className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-96"/><br/>


                        </div>


                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default ProfileForm;