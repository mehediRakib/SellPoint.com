import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import userStore from "../../Store/userStore.js";

const UserSidebar = () => {
    const { readProfile,profile } = userStore();

    useEffect(() => {
        (async () => {
            await readProfile();
        })();
    }, []);

    return (
        <div className="bg-gray-800 text-white w-full sm:w-3/4 md:w-1/2 lg:w-1/4 flex flex-col">
            <div className="py-5 px-4 sm:py-10 sm:px-5">
                <div className="text-center mb-5 sm:mb-10">
                    <p className="font-semibold text-xl">Account</p>
                </div>
                {profile && profile.map((item, i) => (
                    <div key={i}>
                        <Link to={`/my-account/${item['_id']}`}>
                            <div className="py-2 hover:bg-gray-700 rounded-md">
                                <p className="my-2">My Account</p>
                            </div>
                        </Link>
                        <Link to={`/my-ads/${item['_id']}`}>
                            <div className="py-2 hover:bg-gray-700 rounded-md">
                                <p className="my-2">My Ad</p>
                            </div>
                        </Link>
                        <Link to="/contact-numbers">
                            <div className="py-2 hover:bg-gray-700 rounded-md">
                                <p className="my-2">Contact Numbers</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserSidebar;
