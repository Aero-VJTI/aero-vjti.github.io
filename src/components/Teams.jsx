"use client";
import React from "react";

const teamData = [
  {
    name: "Amey Dheple",
    role: "General Secretary",
    image: "https://res.cloudinary.com/dqqfkjchq/image/upload/v1759694796/IMG_20251006_013559_rebwtk.jpg"  },
  {
    name: "Dhruva Sambhoo",
    role: "Joint General Secretary",
    image: "https://res.cloudinary.com/dqqfkjchq/image/upload/v1759694587/IMG-20251006-WA0007_ymw4gf.jpg",
  },
  {
    name: "Parth Gandhi",
    role: "Sponsorship Head",
    image: "https://res.cloudinary.com/dqqfkjchq/image/upload/v1759694209/IMG_20251006_012501_oyvscm.jpg",
  }
];

export default function TeamMembers({ props,ref }) {
  return (
    <section
      ref={ref}
      id="team"
      className="w-full min-h-screen bg-gradient-to-l max-md:bg-gradient-to-b from-black via-slate-900 to-black animate-gradient px-6 py-24"
    >
      <div className="max-w-6xl max-md:pt-10 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl overflow-visible font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
   Meet Our Team
</span>
<span className='text-orange-500'> </span>
        </h2>
        <p className=" text-center text-2xl underline-offset-1 font-bold text-white font-mono">
            Faces of Innovation
          </p>

        {/* Team Grid */}
        <div className="mt-6 flex max-md:flex-col justify-center items-center w-full gap-8">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="w-80 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-70 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-cyan-400">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
