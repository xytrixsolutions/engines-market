/* eslint-disable @next/next/no-img-element */
// components/AnimatedImageSlider.tsx
"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

type AnimatedImageSliderProps = {
  carImages: string[];
  carModelNames: string[];
};

export default function AnimatedImageSlider({
  carImages,
  carModelNames,
}: AnimatedImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % carImages.length);
        setIsTextVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [carImages.length, currentIndex]);

  return (
    <motion.div
      className="lg:col-span-3 flex flex-col items-center z-0"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full relative aspect-[12/7] overflow-x-visible rounded-lg mb-5 flex items-center justify-center max-w-xl lg:max-w-none mx-auto">
        {carImages.map((src, index) => {
          let className = "image-slide";
          if (index === currentIndex) className += " active";
          else if (index === prevIndex) className += " next";
          else className += " prev";

          return (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className={`${className} absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500`}
            />
          );
        })}
      </div>

      <div className="h-full text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#ff5a73] to-[#b30529] text-transparent bg-clip-text">
        <span
          className={`transition-opacity duration-700 ease-in-out ${
            isTextVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {carModelNames[currentIndex]}
        </span>
      </div>
    </motion.div>
  );
}
