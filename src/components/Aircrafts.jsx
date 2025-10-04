"use client";
import React, { useState } from "react";

const aircraftsData = [
  {
    name: "RC Glider",
    description: "Lightweight glider designed for endurance and smooth flight.",
    image: "/aircraft_1.png",
  },
  {
    name: "Quadcopter Drone",
    description: "High-speed drone with advanced flight stabilization and maneuverability.",
    image: "/aircraft_1.png",
  },
  {
    name: "Propeller Plane",
    description: "Classic propeller-driven aircraft designed for aerobatics.",
    image: "/aircraft_1.png",
  },
  {
    name: "Experimental UAV",
    description: "Unmanned aerial vehicle for research and development projects.",
    image: "/aircraft_1.png",
  },
  {
    name: "Experimental UAV",
    description: "Unmanned aerial vehicle for research and development projects.",
    image: "/aircraft_1.png",
  },
  {
    name: "Experimental UAV",
    description: "Unmanned aerial vehicle for research and development projects.",
    image: "/aircraft_1.png",
  },
  {
    name: "Experimental UAV",
    description: "Unmanned aerial vehicle for research and development projects.",
    image: "/aircraft_1.png",
  },
];

export default function Aircraft3DCarousel({ refProp }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? aircraftsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === aircraftsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={refProp}
      id="aircrafts"
      className="w-full min-h-screen bg-gradient-to-r from-black via-slate-900 to-black-950 px-6 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-12">
        Aircrafts
      </h2>

      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 text-white bg-slate-900/50 p-3 rounded-full hover:bg-cyan-500 transition-colors z-10"
        >
          &#8592;
        </button>

        {/* Carousel Container */}
        <div className="w-full flex items-center justify-center perspective-1000">
          <div className="relative w-full flex items-center justify-center">
            {aircraftsData.map((aircraft, idx) => {
              const offset = idx - activeIndex;

              // Limit visible cards
              if (offset < -2 || offset > 2) return null;

              return (
                <div
                  key={idx}
                  className="absolute transition-transform duration-500 ease-in-out cursor-pointer"
                  style={{
                    transform: `translateX(${offset * 220}px) scale(${1 - Math.abs(offset) * 0.2}) rotateY(${
                      offset * -15
                    }deg)`,
                    zIndex: 10 - Math.abs(offset),
                  }}
                >
                  <div className="bg-slate-900/50 rounded-xl shadow-lg w-60 md:w-72">
                    <img
                      src={aircraft.image}
                      alt={aircraft.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-cyan-400 mb-2">{aircraft.name}</h3>
                      <p className="text-gray-400 text-sm md:text-base">{aircraft.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 text-white bg-slate-900/50 p-3 rounded-full hover:bg-cyan-500 transition-colors z-10"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
