"use client";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

// Reusable navigation link component
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-charcoal-gray-muted hover:text-neon-red font-semibold transition-colors duration-200"
  >
    {children}
  </Link>
);

// Mobile navigation link component
const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-charcoal-gray-muted hover:text-neon-red font-semibold transition-colors duration-200"
  >
    {children}
  </Link>
);

// Navigation items data
const NAV_ITEMS = [
  { href: "/engines", label: "Engines" },
  { href: "/car-parts", label: "Car Parts" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-charcoal-gray">
      <nav className="w-11/12 lg:w-10/12 mx-auto py-2 md:py-5  text-charcoal-gray-muted">
        <div className="flex items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 flex-1">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <Image
                src="/FooterLogo.png"
                alt="Plus Icon"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-xl lg:text-2xl xl:text-3xl font-bold">
              <span className="text-charcoal-gray-muted">ENGINES</span>
              <span className="text-neon-red">MARKET</span>
            </div>
          </div>

          {/* Navigation Menu (center) */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Actions (desktop only) */}
          <div className="hidden md:flex items-center space-x-6 justify-end flex-1">
            <Button variant="red" className="max-lg:text-sm xl:px-6 xl:py-2 before:bg-charcoal-gray">
              <span>Request A Quote</span>
              <FiArrowUpRight className="w-7 h-7" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-gray-muted hover:text-neon-red focus:outline-none transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-charcoal-gray-muted hover:text-neon-red transition-transform duration-300 rotate-180" />
              ) : (
                <FiMenu className="w-6 h-6 text-charcoal-gray-muted hover:text-neon-red transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-4"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="space-y-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <div
                  key={item.href}
                  className="transform transition-all duration-300 ease-out"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isMobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
                  <MobileNavLink href={item.href}>{item.label}</MobileNavLink>
                </div>
              ))}
            </nav>
            <div
              className="transform transition-all duration-300 ease-out"
              style={{
                transitionDelay: `${NAV_ITEMS.length * 50}ms`,
                transform: isMobileMenuOpen
                  ? "translateX(0)"
                  : "translateX(-20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              <Button variant="red" className="w-full">
                <span>Request A Quote</span>
                <FiArrowUpRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Neon Red Border Bottom Gradient */}
      <div className="h-px bg-gradient-to-r from-[#ff003c] via-[#ff3c00] to-[#ff003c] shadow-[0_0_8px_1px_rgba(255,0,60,0.6)]"></div>
    </header>
  );
}
