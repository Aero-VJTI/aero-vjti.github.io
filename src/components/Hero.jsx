'use client';

import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import AircraftModel from './AircraftModel';
import Navbar from './Navbar';
import Carousel from '@/components/Carousel';
export default function HeroSection({props, ref}) {
  return (
    <section
      ref={ref}
      id="hero"
      className="max-md:pb-4 max-md:relative  top-0 left-0 w-full h-screen  overflow-hidden bg-gradient-to-r max-md:bg-gradient-to-b from-black via-slate-900 to-black-950 animate-gradient"
    >
      {/* <Navbar/> */}
      <div className="relative w-[100%] max-md:mt-16 z-10 flex  max-md:flex-col-reverse h-full justify-center items-center max-md:h-screen">

        {/* LEFT SIDE - TEXT */}
        <div className=" flex flex-col max-md:flex-col-reverse items-center  justify-center text-center px-6 ">
          {/* <p className="text-base md:text-lg text-gray-400 max-w-xl mb-4">
            Exploring the endless skies with passion, technology, and innovation.
          </p> */}
          <h1 className="max-md:hidden text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Welcome to <span className="text-orange-400">AeroVJTI</span>
          </h1>
          <p className="md:mt-6 text-lg md:text-xl  max-w-xl md:text-gray-300 rounded-lg backdrop-blur-sm text-white">
            Dream. Design. Fly — shaping the future of aerospace innovation.
AeroVJTI empowers students to turn their passion for flight into real-world engineering excellence.</p>
          
          <h2 className=" text-xl  overflow-visible mt-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
        <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
          Your wings already exist, all you have to do is fly ✈
          
        </span>
      </h2>
          {/* <img
                src={"/image.png"}
                alt={"img"}
                className="w-full h-64 object-cover"
              /> */}

        </div>

        {/* RIGHT SIDE - AIRCRAFT MODEL */}
        <div className="relative  flex justify-center items-center max-md:w-[100%] w-[50%] px-6 ">
          {/* <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            
            <AircraftModel position={[0, -1, 0]} scale={[0.3, 0.3, 0.3]} />
            
            <OrbitControls enableZoom={false} />
          </Canvas> */}

          {/* <Canvas
            className="h-[600px]" // or h-96, h-[80vh], etc.
            camera={{position: [0, 1, 6], fov: 50}}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />

            <AircraftModel position={[0, -1, 0]} scale={[0.3, 0.3, 0.3]} />

            <OrbitControls enableZoom={false} />
          </Canvas>  */}
          {/* <div class="sketchfab-embed-wrapper">
            {' '}
            <iframe
              title="HAL Tejas"
              frameborder="0"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/f75b93a36c1440e18c9e058b564543c1/embed"
            >
              {' '}
            </iframe>
            {' '}
            <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
              {' '}
              <a
                href="https://sketchfab.com/3d-models/hal-tejas-f75b93a36c1440e18c9e058b564543c1?utm_medium=embed&utm_campaign=share-popup&utm_content=f75b93a36c1440e18c9e058b564543c1"
                target="_blank"
                rel="nofollow"
                style="font-weight: bold; color: #1CAAD9;"
              >
                {' '}HAL Tejas{' '}
              </a>
              {' '}
              by
              {' '}
              <a
                href="https://sketchfab.com/NETRUNNER_pl?utm_medium=embed&utm_campaign=share-popup&utm_content=f75b93a36c1440e18c9e058b564543c1"
                target="_blank"
                rel="nofollow"
                style="font-weight: bold; color: #1CAAD9;"
              >
                {' '}NETRUNNER_pl{' '}
              </a>
              {' '}
              on
              {' '}
              <a
                href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f75b93a36c1440e18c9e058b564543c1"
                target="_blank"
                rel="nofollow"
                style="font-weight: bold; color: #1CAAD9;"
              >
                Sketchfab
              </a>
            </p>
          </div> */}

          <div className='w-[100%] h-max flex justify-center items-center py-2' >
            <Carousel
              images={[
                'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759692166/IMG_20251006_005158_u3br8f.jpg',
                'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759696242/IMG_20251006_020011_qxmazf.jpg',
                'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759688693/IMG_3226_wk1ctz_figb2x.jpg',
                'https://res.cloudinary.com/dqqfkjchq/image/upload/v1759689214/Aero2026_team_photo_zfd7cz.jpg',
                ]}
              autoPlay={true}
              autoPlayInterval={3000}
            />
          </div>

        </div>
         <h1 className="md:hidden px-5 text-center pb-5 text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Welcome to <span className="text-orange-400">AeroVJTI</span>
          </h1>

      </div>
    </section>
  );
}
