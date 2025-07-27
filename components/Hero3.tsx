"use client"; // Needed if you're using Next.js 13+ App Router

import { useState } from "react";
import Image from "next/image";

// Define your logos with different sizes
const brandLogos = [
  { name: "BMW", src: "/brands/01.png", width: 80, height: 80 },
  { name: "Jaguar", src: "/brands/02.png", width: 100, height: 80 },
  { name: "Land Rover", src: "/brands/03.png", width: 120, height: 100 },
  { name: "Mercedes", src: "/brands/04.png", width: 140, height: 100 },
  { name: "Rangerover", src: "/brands/05.png", width: 140, height: 100 },
  { name: "Mini", src: "/brands/06.png", width: 180, height: 100 },
  { name: "Skoda", src: "/brands/07.png", width: 130, height: 100 },
  { name: "Jaguar", src: "/brands/08.png", width: 150, height: 100 },
  { name: "Land Rover", src: "/brands/09.png", width: 160, height: 100 },
  { name: "Mercedes", src: "/brands/10.png", width: 110, height: 90 },
  { name: "Rangerover", src: "/brands/11.png", width: 150, height: 100 },
  { name: "Mini", src: "/brands/12.png", width: 150, height: 100 },
  { name: "BMW", src: "/brands/13.png", width: 95, height: 95 },
  { name: "Jaguar", src: "/brands/14.png", width: 120, height: 100 },
  { name: "Land Rover", src: "/brands/15.png", width: 150, height: 100 },
  { name: "Mercedes", src: "/brands/16.png", width: 150, height: 100 },
  { name: "Rangerover", src: "/brands/17.png", width: 100, height: 100 },
  { name: "Mini", src: "/brands/18.png", width: 100, height: 100 },
  { name: "Skoda", src: "/brands/19.png", width: 80, height: 100 },
  { name: "Jaguar", src: "/brands/20.png", width: 180, height: 100 },
  { name: "Land Rover", src: "/brands/21.png", width: 90, height: 100 },
  { name: "Mercedes", src: "/brands/22.png", width: 100, height: 100 },
  { name: "Rangerover", src: "/brands/23.png", width: 100, height: 105 },
  { name: "Mini", src: "/brands/24.png", width: 100, height: 100 },
  { name: "Skoda", src: "/brands/25.png", width: 130, height: 100 },
  { name: "Jaguar", src: "/brands/26.png", width: 100, height: 100 },
  { name: "Land Rover", src: "/brands/27.png", width: 100, height: 100 },
  { name: "Mercedes", src: "/brands/28.png", width: 180, height: 100 },
  { name: "Rangerover", src: "/brands/29.svg", width: 80, height: 100 },
];

export default function Hero3() {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount(brandLogos.length); // show all logos
  };

  return (
    <div className="bg-[#F3F9FF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="items-center mb-12 text-center flex flex-col justify-center">
  {/* Title */}
  <div>
    <h2 className="text-4xl md:text-5xl font-normal text-black leading-tight mb-5 text-center">
      Explore By <span className="text-[#0037D6]">Manufacturer</span>
    </h2>
  </div>

  {/* Description */}
  <div>
    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
      Find the perfect engine for your car! Choose your manufacturer
      below and get instant access to reconditioned, used, and new
      engine options from trusted suppliers.
    </p>
  </div>
</div>


        {/* Manufacturer Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 max-w-6xl mx-auto">
          {brandLogos.slice(0, visibleCount).map((logo, index) => (
            <div
              key={index}
              className="mx-auto flex items-center justify-center"
              style={{
                width: `${logo.width + 20}px`,
                height: `${logo.height + 20}px`,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < brandLogos.length && (
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-[#0037D6]"></div>
            <button
              onClick={handleLoadMore}
              className=" bg-[#0037D6] hover:bg-transparent border-2 border-[#0037D6] text-white hover:text-[#0037D6] px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Load More
            </button>
            <div className="flex-1 h-px bg-[#0037D6]"></div>
          </div>
        )}
      </div>
    </div>
  );
}
