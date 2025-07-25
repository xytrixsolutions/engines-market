"use client";

import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const carImages = [
  "/Home/banner 1.png",
  "/Home/banner 1.png",
  "/Home/banner 1.png",
  "/Home/banner 1.png",
];

export default function Hero1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % carImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-[#F3F9FF] py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            The UK’s Largest Engine Marketplace – Compare & Save Instantly!
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* LEFT: Image */}
          <div className="lg:col-span-3 flex flex-col items-center">
            <div className="w-full  relative aspect-[16/7] overflow-hidden rounded-lg mb-5">
              {carImages.map((src, index) => {
                let className = "image-slide";
                if (index === currentIndex) {
                  className += " active";
                } else if (index === prevIndex) {
                  className += " prev";
                } else {
                  className += " next";
                }

                return (
                  <Image
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    fill
                    className={className}
                    priority
                  />
                );
              })}
            </div>
            <button className="bg-[#0037D6] hover:bg-transparent border-2 border-[#0037D6] text-white hover:text-[#0037D6] px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300">
              <span>Request a Free Quote Now</span>
              <FiArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 sm:p-8">
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
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                  <div className="w-8 h-6 relative mr-2">
                    <Image
                      src="/Home/ChatGPT Image Jul 25, 2025, 02_17_06 AM.png"
                      alt="UK Flag"
                      fill
                      className="object-cover rounded-sm"
                    />
                  </div>
                  <span className="text-md font-bold text-black">UK</span>
                </div>
                <input
                  type="text"
                  placeholder="REG HERE"
                  className="w-full text-center py-4 text-lg font-semibold text-gray-700 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <p className="text-center text-gray-600 mb-6 leading-relaxed">
              Enter Your Vehicle Registration Number To Instantly Locate the
              Right Engine & Get Quotes From UK’s Top Suppliers
            </p>

            <button className="w-full bg-black hover:bg-transparent border-2 border-black text-white hover:text-black py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 mb-4">
              <span>Get Free Quote Now</span>
              <FiArrowUpRight className="w-5 h-5" />
            </button>

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
    </div>
  );
}
