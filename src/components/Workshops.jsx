'use client';
import React from 'react';
import Typewriter from './TypeWriter';
const eventsData = [
  {
    title: 'RC Aircraft Workshop',
    description: 'Hands-on workshop on building and flying RC aircraft, learning aerodynamics and design principles.Hands-on workshop on building and flying RC aircraft, learning aerodynamics and design principles.',
    image: '/workshop1.png',
  },
  {
    title: 'Drone Design Challenge',
    description: 'Participate in designing and racing drones with aerodynamic and electronic optimization.',
    image: '/workshop1.png',
  },
  {
    title: 'PRATIGYA Outreach',
    description: 'Conduct awareness programs in NGOs to teach aero-modelling and inspire young minds.',
    image: '/workshop1.png',
  },
  {
    title: 'International Competitions',
    description: 'Participate in global events like AIAA Design/Build/Fly and SAE Aero Design.',
    image: '/workshop1.png',
  },
];

export default function WorkshopsEvents({props,ref}) {
  return (
    <section
      ref={ref}
      id="workshop"
      className="w-full min-h-screen px-6 py-24 bg-gradient-to-l max-md:bg-gradient-to-b from-black via-slate-900 to-black animate-gradient"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl overflow-visible font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
   Workshops & Events
</span>
<span className='text-orange-500'> </span>
        </h2>
        <div className='flex justify-center items-center '>
          <p className=" text-2xl underline-offset-1 font-bold text-white font-mono">
            Educating young minds
          </p>
          <div className="flex items-center justify-center  ">
            {/* <Typewriter
              texts={[
                '"young minds."',
                '"the next generation."',
                'Shaping tomorrow . . .',
                'Inspiring innovation.',
              ]}
              typingSpeed={100}
              pause={800}
            /> */}
          </div>
        </div>
        {/* Horizontal Scroll (Scrollbar Hidden) */}
        <div className="flex space-x-6 overflow-x-auto py-4 mt-5 scrollbar-none">
          {eventsData.map ((event, idx) => (
            <div
              key={idx}
              className="h-[500px] w-[300px] bg-slate-900/50 rounded-xl shadow-lg flex-shrink-0 "
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {event.title}
                </h3>
                <div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for all browsers */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
