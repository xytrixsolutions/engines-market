/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

interface Hero1Props {
  carImages: string[];
  carModelNames: string[];
}

const Hero1: FC<Hero1Props> = ({ carImages, carModelNames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out text before changing
      setIsTextVisible(false);

      setTimeout(() => {
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % carImages.length);
        setIsTextVisible(true); // Fade back in
      }, 500); // match fade duration
    }, 4000);

    return () => clearInterval(interval);
  }, [carImages.length, currentIndex]);

  return (
    <Container dark>
      <div className="text-center mb-16">
        {/* <h1 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4 leading-tight"> */}
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal-gray-muted mb-4 leading-tight">
          The UK’s Largest Engine Marketplace – Compare & Save Instantly!
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* LEFT: Form */}
        <div
          className="relative lg:col-span-2 max-w-xl lg:max-w-none mx-auto lg:mr-0 lg:ml-auto z-50 overflow-visible"
          style={{
            boxShadow: "0 0 100px rgba(255, 255, 255, 0.35)", // <- even on all sides
            borderRadius: "1.5rem",
          }}
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Rotated Background with Diagonal Split */}
            <div className="absolute inset-0 -z-10 transform rotate-[4deg] scale-110 bg-[conic-gradient(from_221deg,white_0deg,white_50%,#ededed_50%,#ededed_100%)]"></div>

            {/* Foreground Form */}
            <div className="relative p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Enter Your Vehicle Registration To
                </h3>
                <h4 className="text-xl font-bold text-gray-900">
                  Find Best Supplier Near You
                </h4>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <div className="absolute top-1/2 transform -translate-y-1/2">
                    <div className="w-10 h-16 relative">
                      <Image
                        src="/Home/uknumberplate.png"
                        alt="UK Flag"
                        fill
                        className="object-cover rounded-l-md"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="REG HERE"
                    className="w-full text-center py-4 text-lg font-semibold text-gray-700 bg-[#ffcb05] border-2 border-black rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <p className="text-center text-gray-600 mb-6 leading-relaxed">
                Enter Your Vehicle Registration Number To Instantly Locate the
                Right Engine & Get Quotes From UK’s Top Suppliers
              </p>

              <Button variant="red" className="w-full mb-4 before:bg-white">
                <span>Get Free Quote Now</span>
                <FiArrowUpRight className="w-5 h-5" />
              </Button>

              <p className="text-center text-gray-600">
                {"Don't Have REG..? "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Click Here
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image + Model Name */}
        <div className="lg:col-span-3 flex flex-col items-center z-0">
          <div className="w-full relative aspect-[12/7] overflow-x-visible rounded-lg mb-5 flex items-center justify-center max-w-xl lg:max-w-none mx-auto ">
            {carImages.map((src, index) => {
              let className = "image-slide";
              if (index === currentIndex) {
                className += " active";
              } else if (index === prevIndex) {
                className += " next";
              } else {
                className += " prev";
              }

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

          {/* Model name with fade effect */}
          <div className="h-full text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#ff5a73] to-[#b30529] text-transparent bg-clip-text">
            <span
              className={`transition-opacity duration-700 ease-in-out ${
                isTextVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {carModelNames[currentIndex]}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero1;
