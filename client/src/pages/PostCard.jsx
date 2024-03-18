import React from 'react';
import { FaBath, FaBed, FaIcons } from 'react-icons/fa';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function PropertyCard({ imageUrl, name, price, description, bedrooms, bathrooms, area }) {
  return (
    <div className="max-w-sm bg-white border border-purple-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='flex flex-row justify-end mr-3 mt-2'>
          <div className="text-center px-[3px] bg-white border w-30 border-[#7042f88b] opacity-[0.9]]">
            <h1 className="text-[18px]">For Rent</h1>
          </div>
        </div>
      <img className="rounded-t-lg" src={imageUrl} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div className="flex flex-col justify-center mb-2">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">${price}</span>
          <div className="flex space-x-2">
            <div className="flex items-center">
            <FaBed color='white'/>
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">{bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center">
            <FaBath color='white' />
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">{bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center">
            <BsFillHouseDoorFill color='white'/>
              <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">{area} sqft</span>
            </div>
          </div>
        </div>
       <div className='flex flex-row justify-center'>
       <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View Details
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
       </div>
      </div>
    </div>
  );
}

export default PropertyCard;
