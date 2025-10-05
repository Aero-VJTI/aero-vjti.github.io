"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const merchandise = [
  {
    name: "T-Shirt",
    price: "₹350",
    description: "High-quality cotton T-Shirt with club logo.",
    image: "/merch/tshirt_1.jpg",
  }
];

const MerchandisePage = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 ">
       <h2 className="text-4xl md:text-6xl overflow-visible font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
            Merchandise
          </span>
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {merchandise.map((item, index) => (
          <motion.div
            key={index}
            tabIndex={0}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-md p-6 flex flex-col items-center text-center
                       hover:bg-transparent focus:bg-white/20 active:bg-white/20
                       shadow-lg hover:shadow-blue-500/40 focus:shadow-blue-500/40 active:shadow-blue-500/40
                       transition-all cursor-pointer h-max w-max"
          >
            <div className="w-80 h-80 relative mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-xl w-80 h-100 object-contain "
              />
            </div>
            <h2 className="text-2xl font-semibold text-blue-400">{item.name}</h2>
            <p className="text-gray-300 mt-2 mb-2">{item.description}</p>
            <p className="text-lg font-bold">{item.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MerchandisePage;
