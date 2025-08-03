"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useEffect, useState } from "react";

const EngineDealSection = () => {
  const images = [
    { src: "/Home/engines/engine01.png", width: 400, height: 400 },
    { src: "/Home/engines/engine02.png", width: 400, height: 400 },
    { src: "/Home/engines/engine03.png", width: 200, height: 200 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container className="grid md:grid-cols-2 items-center md:gap-8" id="best-engine">
      {/* Text Section (comes first on mobile, second on desktop) */}
      <div className="order-1 md:order-2 text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray">
          Find the Best Engine Deals with{" "}
          <span className="text-neon-red">Engine Market</span>
        </h2>
        <p className="text-lg font-semibold text-gray-800">
          Lowest Price Guaranteed | 100s of Suppliers | Nationwide Availability
        </p>
        <p className="text-lg text-gray-700">
          Engine Market connects you with hundreds of trusted suppliers. Get
          competitive quotes in hours, compare prices, and save today!
        </p>
      </div>

      {/* Image Section (comes second on mobile, first on desktop) */}
      <div className="order-2 md:order-1 flex justify-center lg:justify-start mt-8 md:mt-0">
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <Image
            key={images[currentIndex].src}
            src={images[currentIndex].src}
            alt={`Engine ${currentIndex + 1}`}
            fill
            className={`rounded-lg object-cover transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </Container>
  );
};

export default EngineDealSection;
