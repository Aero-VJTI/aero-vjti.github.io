'use client';
import * as React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const eventsData = [
  {
    title: 'Glider Workshop 2020',
    description: 'This Workshop Introduced students to the fundamentals of flight and aircraft design through interactive lectures and hands-on glider construction. Participants built and flew their own gliders, experiencing the thrill of flight and the joy of creation as their models soared successfully across the skies. ✈',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759689246/83990264_3496629067046123_6432054825336176640_n_l2grta.jpg',
  },
  {
    title: 'Aero Exhibition',
    description: 'AERO VJTI showcased their expertise in aeronautics and aerodynamics through engaging displays and explanations. The event drew massive crowds, especially curious children, and even featured a visit from ex–Air Chief Marshal B.S. Dhanoa ✈',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759689242/81882299_3405685212807176_7095352390366265344_n_wttugv.jpg',
  },
  {
    title: 'AQUILA 2019',
    description: 'This workshop saw thrilling flight sessions by AERO VJTI, where over 25 teams showcased their flying skills. The skies came alive with powerful gliders and fierce competition—a truly spectacular sight! ✈',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759693566/The_skies_were_subdued_with_the_mighty_prowess_of_the_throttled_fliers_as_Aero_VJTI_conducted_th_icpoh1.jpg',
  },
  {
    title: 'The Glider Workshop',
    description: 'This Workshop introduced school students to the exciting world of aviation. Through engaging sessions, they learned the basics of aerodynamics and built their own gliders. The young participants experienced the joy of flight as their creations soared high across the skies. ✈',
    image: 'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759695741/IMG_20251006_015158_tetvvl.jpg',
  },
];

export default function WorkshopsEvents({props, ref}) {
  return (
    <div
      ref={ref}
      className="relative w-[100%] py-24 flex flex-col justify-center items-center   bg-gradient-to-l max-md:bg-gradient-to-b from-black via-slate-900 to-black animate-gradient"
    >
      <div className="max-md:mt-10 ">
        <h2 className="max-sm:px-2 text-4xl md:text-6xl overflow-visible font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
            Workshops & Events
          </span>
        </h2>
        <p className=" text-center text-2xl underline-offset-1 font-bold text-white font-mono">
          Educating young minds
        </p>

      </div>
      <Carousel
        opts={{align: 'start'}}
        className="relative w-[80%] max-md:w-[80%] mt-5 p-4"
      >
        <CarouselContent className="flex w-[100%] gap-6 md:p-6">
          {eventsData.map ((event, idx) => (
            <CarouselItem
              key={idx}
              className="md:basis-1/2 lg:basis-1/3 min-w-[300px] "
            >
              <Card className="bg-slate-900/50 shadow-lg rounded-xl overflow-hidden h-[100%] pb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full  h-60 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows outside */}
        <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/60 text-gray-900 shadow-lg">
          ◀
        </CarouselPrevious>
        <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/30 hover:bg-white/60 text-gray-900 shadow-lg">
          ▶
        </CarouselNext>
      </Carousel>
    </div>
  );
}
