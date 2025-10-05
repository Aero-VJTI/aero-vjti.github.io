'use client';
import React, {forwardRef} from 'react';

const timelineData = [
  {
    year: '2025',
    title: 'Founded AeroVJTI',
    description: 'Ranked 7th in the world in the design report phase',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759689229/2025_teamm_s6ouoc.jpg',
  },
  {
    year: '2024',
    title: 'Workshops & Training',
    description: 'Ranked 7th in the world in the design report phase',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759685484/2024_aiaa_team_hwbm8r.png',
  },
  {
    year: '2022',
    title: 'AIAA',
    description: '1st in Asia, 15th in Design Report rankings and finished 19th globally.',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759685517/2022_team_wnk7dc.png',
  },
  {
    year: '2019',
    title: 'Research & Innovation',
    description: '1st in Asia, placed 5th in global standings in AIAA',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759685566/2019_-_4_kkovb6.png',
  },
  {
    year: '2017',
    title: 'Future Vision',
    description: 'Won the best design report award and 1st in Design placed 7th in overall standings in AIAA',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759685685/2017_-_1_1_d2sbkw.png',
  },
];

const Timeline = forwardRef (function Timeline (props, ref) {
  return (
    <div ref={ref} id="timeline" className='flex flex-col justify-center items-center bg-gradient-to-l max-md:bg-gradient-to-b from-black via-slate-900 to-black animate-gradient py-24'>
      <div className='max-md:mt-10'>
        <h2 className="text-4xl md:text-6xl overflow-visible font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
   Our Journey
</span>
</h2>
<p className=" text-center text-2xl underline-offset-1 font-bold text-white font-mono">
            Path of Innovation
  </p>

      </div>
      <div
        ref={ref}
        className=" pt-10 space-y-12 relative before:absolute before:inset-0 before:ml-5 
                 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 
                 before:h-full before:w-0.5 before:bg-gradient-to-b 
                 before:from-transparent before:via-slate-300 before:to-transparent p-4 md:w-[80%]"
      >
        {timelineData.map ((item, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-between md:justify-normal group 
            ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white 
                       bg-slate-300 group-[.is-active]:bg-emerald-500 
                       text-blue-500 group-[.is-active]:text-emerald-50 shadow 
                       shrink-0 md:order-1 
                       md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
              >
                <circle cx="7" cy="7" r="6" />
              </svg>
            </div>

            {/* Card */}
            {/* md:w-[calc(50%-2.5rem)] */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] 
                       bg-transparent p-5 rounded-xl text-white border border-blue-800  shadow hover:scale-[1.02] transition">
              <img
                src={item.image}
                alt={item.title}
                className=" h-full w-full object-cover rounded-lg mb-3"
              />
              <div className="flex items-center justify-between mb-2">
                <time className="text-indigo-500 font-medium">{item.year}</time>
                {/* <h3 className="font-bold text-white text-lg">{item.title}</h3> */}
              </div>
              <p className="text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Timeline;
