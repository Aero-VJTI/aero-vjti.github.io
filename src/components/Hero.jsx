'use client';

import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import AircraftModel from './AircraftModel';
import Navbar from './Navbar';

export default function HeroSection({props, ref}) {
  return (
    <section
      ref={ref}
      id="hero"
      className=" max-md:relative  top-0 left-0 w-full h-screen  overflow-hidden bg-gradient-to-r max-md:bg-gradient-to-b from-black via-slate-900 to-black-950 animate-gradient"
    >
      {/* <Navbar/> */}
      <div className="relative max-md:mt-16 z-10 flex max-md:flex-col h-full max-md:justify-center max-md:items-center max-md:h-screen">

        {/* LEFT SIDE - TEXT */}
        <div className="flex flex-col max-md:mt-5 items-center md:items-start justify-center text-center md:text-left px-6 md:px-16 max-md:pt-10">
          {/* <p className="text-base md:text-lg text-gray-400 max-w-xl mb-4">
            Exploring the endless skies with passion, technology, and innovation.
          </p> */}
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Welcome to <span className="text-orange-400">AeroVJTI</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl rounded-lg backdrop-blur-sm">
          The Sky is not the Limit, it's our Playground ✈</p>
          {/* <img
                src={"/image.png"}
                alt={"img"}
                className="w-full h-64 object-cover"
              /> */}
          
        </div>

        {/* RIGHT SIDE - AIRCRAFT MODEL */}
        <div className="relative h-[500px]  flex justify-center items-center w-full  md:h-full">
          {/* <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            
            <AircraftModel position={[0, -1, 0]} scale={[0.3, 0.3, 0.3]} />
            
            <OrbitControls enableZoom={false} />
          </Canvas> */}

          <Canvas
            className="h-[600px]" // or h-96, h-[80vh], etc.
            camera={{position: [0, 1, 6], fov: 50}}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />

            <AircraftModel position={[0, -1, 0]} scale={[0.3, 0.3, 0.3]} />

            <OrbitControls enableZoom={false} />
          </Canvas> 
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

        </div>
      </div>
    </section>
  );
}
