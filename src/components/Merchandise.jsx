'use client';
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

const merchandise = [
  {
    name: 'T-Shirt',
    price: '₹350',
    description: 'High-quality cotton T-Shirt with club logo.',
    image: '/merch/tshirt_1.jpg',
  },
];

const MerchandisePage = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 ">
      <h2 className="text-4xl md:text-6xl overflow-visible font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
        <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
          Merchandise
        </span>
      </h2>
      <div className="flex justify-center items-center gap-10  mx-auto px-4">
        {merchandise.map ((item, index) => (
          <motion.div
            key={index}
            tabIndex={0}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.2}}
            viewport={{once: true}}
            className="bg-white/10 backdrop-blur-sm rounded-md overflow-hidden px-6 flex flex-col items-center text-center
                        focus:bg-white/20 active:bg-white/20
                      
                       transition-all cursor-pointer h-max w-80 pb-4"
          >
            <div className="w-80 h-80 relative px-2">
              <Image src={item.image} alt={item.name} fill className="" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-400 mt-2">
              {item.name}
            </h2>
            <p className="text-gray-300 mt-2 mb-2">{item.description}</p>
            <div className="flex justify-between items-center w-[100%]">
              <p className="text-lg font-bold">{item.price}</p>
          
              <button
                className="p-2 rounded-md px-4 cursor-pointer text-white bg-orange-400 hover:bg-orange-600"
              >
                Buy
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MerchandisePage;
