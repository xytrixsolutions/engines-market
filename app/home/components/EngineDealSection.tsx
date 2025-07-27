"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EngineDealSection = () => {
  // Each image has its own width and height
  const images = [
    { src: "/Home/engines/engine01.png", width: 400, height: 400 },
    { src: "/Home/engines/engine02.png", width: 400, height: 400 },
    { src: "/Home/engines/engine03.png", width: 200, height: 200 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-[#F3F9FF]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Fixed-size Image Container */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-[500px] h-[500px]">
            <Image
              src={images[currentIndex].src}
              alt={`Engine ${currentIndex + 1}`}
              fill
              className="rounded-lg object-cover transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
            Find the Best Engine Deals with{" "}
            <span className="text-[#0037D6]">Engine Market</span>
          </h2>
          <p className="text-lg text-gray-800 mt-4 font-semibold">
            Lowest Price Guaranteed | 100s of Suppliers | Nationwide
            Availability
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Looking for a replacement engine? Engine Market connects you with
            hundreds of trusted suppliers, ensuring you get multiple competitive
            quotes within hours. Compare prices, check availability, and save
            money today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineDealSection;
