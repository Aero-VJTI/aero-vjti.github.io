"use client";
import React, { forwardRef } from "react";
import { FaPlane, FaUsers, FaBullseye } from "react-icons/fa";

const AboutUs = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="w-full min-h-screen bg-gradient-to-b max-md:bg-gradient-to-b from-black via-slate-900 to-black-950 animate-gradient flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl text-white space-y-10">
        
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            About <span className="text-orange-500">Aero VJTI</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">AeroVJTI</span> is the aero-modelling club of <span className="font-semibold">Veermata Jijabai Technological Institute (VJTI)</span>. 
            A student-run society, AeroVJTI promotes aero-modelling and design.
          </p>
        </div>

        {/* Horizontal Sections */}
        <div className="flex flex-col md:flex-row gap-8 justify-between">

          {/* Our Work */}
          <div className="flex-1 bg-slate-900/50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300">
            <div className="text-cyan-400 text-4xl mb-4">
              <FaPlane />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Our Work</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We design and build RC Aircraft and participate in national and international competitions like <span className="font-semibold">SAE India</span> and <span className="font-semibold">AIAA D/B/F</span> in the USA. We have also competed in <span className="font-semibold">SAE Aero-Design</span> (USA) and <span className="font-semibold">Future Flight Design (FFD)</span> in Turkey.
            </p>
          </div>

          {/* Mentorship & Outreach */}
          <div className="flex-1 bg-slate-900/50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300">
            <div className="text-cyan-400 text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Mentorship & Outreach</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We mentor juniors to develop their own designs and models through workshops in schools and colleges. We also conduct awareness programs in NGOs under <span className="font-semibold">'PRATIGYA'</span> to share knowledge and spark interest in aero-designing.
            </p>
          </div>

          {/* Our Goal */}
          <div className="flex-1 bg-slate-900/50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300">
            <div className="text-cyan-400 text-4xl mb-4">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Our Goal</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Our goal is to represent our club in different national competition as well as India on a international level, further develop the club's legacy, and popularize aero-modelling in India. We strive to reach the top by combining expertise, experience, and innovative ideas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
});

export default AboutUs;
