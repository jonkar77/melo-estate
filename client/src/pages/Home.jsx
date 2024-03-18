import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import PostCard from './Services';
import PropertyCard from './PostCard';
import Footer from './Footer';

const servicesData = [
  {
    imageUrl: "/house.png",
    title: "Buy a Home",
    description: "Explore this stunning villa offering breathtaking ocean views and modern amenities.Explore this stunning villa offering breathtaking ocean views and modern amenities.",
  },
  {
    imageUrl: "/vila1.jpg",
    title: "Rent a Home",
    description: "Explore this stunning villa offering breathtaking ocean views and modern amenities.Explore this stunning villa offering breathtaking ocean views and modern amenities.",
  },
  {
    imageUrl: "/vila1.jpg",
    title: "Sell a Home",
    description: "Explore this stunning villa offering breathtaking ocean views and modern amenities.Explore this stunning villa offering breathtaking ocean views and modern amenities.",
  },
];

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  
  return (
    <div className='absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-92'>
      <div className="bg-cover bg-center bg-no-repeat mt-0 h-screen flex justify-center items-center text-white" style={{ backgroundImage: 'url("/vila1.jpg")' }}>
        <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto px-4">
          <div className='w-full shadow-2xl md:w-[335px] mt-[450px]'>
            <form
              onSubmit={handleSubmit}
              className='bg-white text-black p-3 rounded-3xl flex items-center w-full shadow-lg'
            >
              <input
                type='text'
                placeholder='Search...'
                className='bg-transparent focus:outline-none w-full sm:w-64 mr-2 ml-2'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className='bg-blue-500 focus:outline-none focus:shadow-outline text-white py-2 px-4 rounded-2xl hover:bg-blue-700 shadow-md'>
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=' mt-[80px] flex flex-col'>
        <div className='flex flex-row justify-center '>
          <div className="text-center py-[8px] rounded-2xl px-[7px] bg-slate-500 border w-40 border-[#7042f88b] opacity-[0.9]]">
            <h1 className="text-[18px]">Our Services</h1>
          </div>
        </div>
        <div className='mt-10 flex justify-center space-x-4'>
          {servicesData.map((service, index) => (
            <PostCard
              key={index}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
      </div>
      <div className=' mt-[80px] flex flex-col justify-center'>
        <div className='flex flex-row justify-center '>
          <div className="text-center py-[8px] rounded-2xl px-[7px] bg-slate-500 border w-40 border-[#7042f88b] opacity-[0.9]]">
            <h1 className="text-[18px]">Properties</h1>
          </div>
        </div>
            <h1 className='mt-3 text-center text-[28px]'>Featured Listings</h1>
        <div className='mt-10 flex justify-center space-x-4'>
          
            <PropertyCard
              imageUrl={servicesData[0].imageUrl}
              name="Royal XYZ"
              price='10000000'
              description={servicesData[0].description}
              bedrooms={3}
              bathrooms={2}
              area={2000}

            />
            <PropertyCard
              imageUrl={servicesData[0].imageUrl}
              name="ABC Mansion"
              price='10000000'
              description={servicesData[0].description}
              bedrooms={3}
              bathrooms={2}
              area={2000}

            />
            <PropertyCard
              imageUrl={servicesData[0].imageUrl}
              name="Topaz Villa"
              price='10000000'
              description={servicesData[0].description}
              bedrooms={3}
              bathrooms={2}
              area={2000}

            />
        </div>
      </div>
      <Footer />
    </div>
  );
}
