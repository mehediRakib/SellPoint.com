import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="mt-28 ">
            <div>
                <div>
                    <div className="ml-10">
                        <Link to="/admin/dashboard">
                            <h2 className="font-semibold text-2xl">Dashboard</h2>
                        </Link>
                    </div>
                    <hr/>
                </div>
                   <div className="flex w-full h-auto">
                       <div className="shadow-md bg-slate-100 rounded-md w-1/3 min-h-screen mt-2">

                          <div className="flex space-x-2 ml-10 mt-20 items-center text-c">
                              <div className="">
                                  <Link to="/profile"><p>My account </p></Link>
                                  <Link to="/create-ad"><p>Create Ad </p></Link>
                                  <Link to=""><p>View Product</p></Link>
                                  <Link to=""><p>Create Category & Sub Category</p></Link>

                              </div>
                              <div className="">
                                  <p> > </p>
                                  <p> > </p>
                                  <p> > </p>
                                  <p> > </p>
                                  <p> > </p>
                              </div>
                          </div>
                       </div>
                       <div className="w-full">
                           <div className="flex space-x-4 justify-center items-center mb-8 ">

                               <Link to="/user-account" className="bg-red-200 w-1/4 h-32 mt-28 rounded-md text-center border  border-orange-400 hover:bg-gray-300 focus:ring-2 focus:ring-amber-200 focus:outline-none transition  hover:translate-y-2 hover:scale-95 duration-300 ease-in-out delay-200">
                                   <p className="text-center mt-12 text-lg text-black">User account</p>
                               </Link>

                               <Link to="/view-product" className="bg-cyan-200 w-1/4 h-32 mt-28 rounded-md text-center border  border-orange-400 hover:bg-gray-300 focus:ring-2 focus:ring-amber-200 focus:outline-none transition  hover:translate-y-2 hover:scale-95 duration-300 ease-in-out delay-200">
                                   <p className="text-center mt-12 text-lg text-black">View Product</p>
                               </Link>

                               <Link to="/create-ad" className="bg-green-400 w-1/4 h-32 mt-28 rounded-md text-center border  border-orange-400 hover:bg-gray-300 focus:ring-2 focus:ring-amber-200 focus:outline-none transition  hover:translate-y-2 hover:scale-95 duration-300 ease-in-out delay-200">
                                   <p className="text-center mt-12 text-lg text-black">Create ad</p>
                               </Link>


                           </div>
                       </div>

                   </div>

               </div>

        </div>
    );
};

export default Home;