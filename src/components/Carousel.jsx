'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Carousel({
  images = ['https://res.cloudinary.com/dqqfkjchq/image/upload/v1759688693/IMG_3226_wk1ctz_figb2x.jpg'],
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const length = images.length;
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (!autoPlay || length <= 1) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, autoPlayInterval);
    return () => clearInterval(autoplayRef.current);
  }, [autoPlay, autoPlayInterval, length]);

  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const dx = touchStartX.current - touchEndX.current;
    if (Math.abs(dx) > 50) dx > 0 ? next() : prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (length === 0) {
    return (
      <div className="w-full bg-gray-100 flex items-center justify-center rounded-xl">
        <p className="text-gray-500 text-sm">No images available</p>
      </div>
    );
  }

  return (
    <div className={`relative w-[96%] md:w-[80%] mx-auto overflow-hidden rounded-2xl shadow-lg ${className}`} 
         onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>

      {/* Images */}
      <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div key={i} className="w-[100%] flex-shrink-0 relative max-md:h-[300px] md:h-[500px]">
            <Image src={src} alt={`Slide ${i + 1}`} fill className="object-cover" priority={i === 0} />
          </div>
        ))}
      </div>

      {/* Left Arrow (outside) */}
      {length > 1 && (
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right Arrow (outside) */}
      {length > 1 && (
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Indicators */}
      {showIndicators && length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full bg-white transition ${i === index ? "scale-125 opacity-100" : "opacity-60"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
