import React, { useState } from 'react';
import { Link } from "react-router-dom";

const TopBar = ({ openDialog }) => {
    const [keyWord, setKeyword] = useState("");

    return (
        <div className="flex justify-center mt-4 sm:mt-8">
            <div className="flex-grow px-4 sm:px-10 flex cursor-pointer" onClick={openDialog}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <div>
                    <p><b>Select Location</b></p>
                </div>
            </div>
            <div className="flex-grow hidden sm:block"></div>
            <div className="flex-grow flex justify-end mr-4 sm:mr-10 relative">
                <input onChange={(e) => { setKeyword(e.target.value) }} className="w-full sm:w-96 h-10 border border-gray-300 rounded-full px-4 sm:px-10" placeholder="Search here!" />
                <Link to={keyWord.length > 0 ? `/by-keyword/${keyWord}` : '/'} className="absolute inset-y-0 right-0 bg-blue-500 rounded-r-full px-3 items-center pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
