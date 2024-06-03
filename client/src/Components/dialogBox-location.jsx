import React, {useEffect, useState} from 'react';
import productStore from "../Store/productStore.js";
import {Link, useParams} from "react-router-dom";
const DialogBoxLocation = ({isClose}) => {
    const { readDivision, readDivisionDetails, readDistrictDetails, readDistrict, DivisionName, ReadDivisionByID} = productStore();

  const {categoryID}=useParams();
    const [isDivisonId, setDivisonId] = useState(null);

    const {readProductByDistrict}=productStore();
    useEffect(() => {
        (async () => {
            await readDivision();
        })()
    }, []);

    const showDistrict = async (divisionID) => {
        setDivisonId(divisionID);
        await readDistrict(divisionID);
        await ReadDivisionByID(divisionID);

    }

    const showProductByDistrict=async (districtId)=>{
        await readProductByDistrict(categoryID,districtId)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="absolute inset-0 bg-black opacity-50" onClick={isClose}></div>
            <div className="bg-white p-8 rounded shadow-lg z-10 w-1/2 min-h-5/6">
                <h2 className="text-xl mb-4 text-center font-semibold">Choose Location</h2>
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        {
                            readDivisionDetails && readDivisionDetails.map((item, index) => (
                                <>


                                    <div
                                        className={`flex py-2 hover:drop-shadow hover:rounded-md px-4 ${isDivisonId === item['_id'] ? `bg-gray-100 rounded-md px-1` : `bg-white`}`}
                                        onClick={() => showDistrict(item['_id'])}>
                                        <div className="w-full">
                                            <p>{item['division']}</p>
                                        </div>
                                        <div className="">
                                            <p>{'>'}</p>
                                        </div>
                                    </div>
                                    <hr/>


                                </>
                            ))

                        }
                    </div>
                    <div className="w-1/2 flex-grow">
                        {

                            isDivisonId ?

                                <div>
                                    {
                                        DivisionName['division'] ?
                                            <Link
                                                to={`/Product-by-division/${DivisionName['division']}/${isDivisonId}`}>
                                                <p className="text-center font-semibold hover:underline">All
                                                    of {DivisionName['division']}</p></Link> : <p>Loading ...</p>}
                                    {
                                        readDistrictDetails && readDistrictDetails.map((item, index) => (
                                           <Link to={`/district-name/${categoryID}/${item['_id']}`} onClick={isClose}>
                                               <div key={index} className="hover:shadow-md cursor-pointer" onClick={()=>showProductByDistrict(item['_id'])}>
                                                   <div className="flex py-2 ml-8">
                                                       <div className="w-full">
                                                           <p>{item['district']}</p>
                                                       </div>
                                                   </div>
                                                   <hr/>
                                               </div>
                                           </Link>
                                        ))
                                    }
                                </div> :
                                null
                        }
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={isClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
                </div>
            </div>
        </div>
    );
};

export default DialogBoxLocation;