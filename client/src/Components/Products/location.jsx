import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import productStore from "../../Store/productStore.js";

const Location = () => {
    const {readDivisionDetails,readDivision}=productStore();
    useEffect(() => {
        (async ()=>{
            await readDivision();
        })()
    }, []);

    const [selectedLocation, setSelectedLocation] = useState(null); // Corrected the typo and initialized as null

    const handleLocationClick = (id) => {
        setSelectedLocation(id);
    };

    return (
        <div className="mt-10 mb-10">
            <div>
                <p className="text-gray-600">Location</p>
            </div>
            <div className="pt-2 ml-4"><strong>All of Bangladesh</strong></div>
            <div className="mt-6 ml-14">
                {readDivisionDetails && readDivisionDetails.map((item, i) => (
                    <Link
                        to={`/Product-by-division/${item['division']}/${item['_id']}`}
                        key={i}
                        onClick={() => handleLocationClick(item['_id'])}
                        className={`hover:underline text-sky-700 ${selectedLocation === item['_id'] ? 'font-bold' : ''}`}
                    >
                        <p>{item['division']}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Location;