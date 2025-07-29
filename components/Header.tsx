"use client";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="w-11/12 lg:w-10/12 mx-auto py-2 md:py-5">
        <div className="flex items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 flex-1">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <Image
                src="/Black-and-White-logo-png-300x263.png"
                alt="Plus Icon"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-xl lg:text-2xl xl:text-3xl font-bold">
              <span className="text-gray-900">ENGINES</span>
              <span className="text-neon-red">MARKET</span>
            </div>
          </div>

          {/* Navigation Menu (center) */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <Link
              href="/engines"
              className="text-[#383838] hover:text-black font-semibold transition-colors duration-200"
            >
              Engines
            </Link>
            <Link
              href="/car-parts"
              className="text-[#383838] hover:text-black font-semibold transition-colors duration-200"
            >
              Car Parts
            </Link>
            <Link
              href="/about"
              className="text-[#383838] hover:text-black font-semibold transition-colors duration-200"
            >
              About
            </Link>
          </nav>

          {/* Right Side Actions (desktop only) */}
          <div className="hidden md:flex items-center space-x-6 justify-end flex-1">
            <Link
              href="/contact"
              className="text-[#383838] hover:text-black font-semibold transition-colors duration-200"
            >
              Contact
            </Link>
            <button className="bg-neon-red hover:bg-transparent text-white hover:text-neon-red border-2 px-1 py-1 lg:px-4 lg:py-1 max-lg:text-sm border-neon-red xl:px-6 xl:py-2 rounded-full font-medium flex items-center space-x-2 transition-all duration-300">
              <span>Request A Quote</span>
              <FiArrowUpRight className="w-7 h-7" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/engines"
                className="text-[#383838] hover:text-black font-semibold transition-colors duration-200"
              >
                Engines
              </Link>
              <Link
                href="/car-parts"
                className="text-[#383838] hover:text-black font-semibold transition-colors duration-200"
              >
                Car Parts
              </Link>
              <Link
                href="/about"
                className="text-[#383838] hover:text-black font-semibold transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#383838] hover:text-black font-semibold transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
            <button className="w-full bg-black hover:bg-transparent text-white hover:text-black border-2 px-6 py-2 border-black rounded-full font-medium flex justify-center items-center space-x-2 transition-all duration-300">
              <span>Request A Quote</span>
              <FiArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
