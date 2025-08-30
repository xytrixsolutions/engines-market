"use client";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { data } from "@/data/brands";

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

const NAV_ITEMS = [
  { href: "/brands", label: "Brands", type: "dropdown" }, // Mark as dropdown
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
const CAR_BRANDS = [
  "Toyota",
  "Honda",
  "Ford",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Tesla",
  "Porsche",
  "Lexus",
  "Nissan",
  "Hyundai",
  "Kia",
  "Volkswagen",
  "Chevrolet",
  "Ferrari",
  "Lamborghini",
  "Mazda",
  "Subaru",
  "Volvo",
  "Jaguar",
];
const brandEntries = Object.entries(data) as [string, { brandName: string }][];
const brandLinks = brandEntries.map(([slug, { brandName }]) => ({
  href: `/${slug}`,
  label: brandName,
}));

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-charcoal-gray">
      <nav className="w-11/12 lg:w-10/12 mx-auto py-2 md:py-5  text-charcoal-gray-muted">
        <div className="flex items-center h-16">
          <div className="flex items-center space-x-3 flex-1">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <Image
                src="/FooterLogo.png"
                alt="Plus Icon"
                fill
                className="object-contain"
              />
            </div>

            <Link
              href="/"
              className="text-xl lg:text-2xl xl:text-3xl font-bold"
            >
              <span className="text-charcoal-gray-muted">ENGINES</span>
              <span className="text-neon-red">MARKET</span>
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto relative">
            {NAV_ITEMS.map((item) =>
              item.label === "Brands" ? (
                <div key={item.href} className="relative group">
                  <NavLink href={item.href}>{item.label}</NavLink>
                  <div
                    className="absolute top-15  -translate-x-[44.2%] w-screen
                               opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                               transition-all duration-300 z-[99999999999]"
                  >
                    <div className="bg-charcoal-gray border border-charcoal-gray-muted/20 shadow-2xl rounded-md overflow-hidden">
                      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 p-5 max-h-96 overflow-y-auto">
                        {brandLinks.map(({ href, label }) => (
                          <Link
                            key={href}
                            href={href}
                            className="block px-3 py-2 text-sm text-center text-charcoal-gray-muted hover:text-neon-red hover:bg-gray-800 rounded transition-colors duration-200"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </div>
              )
            )}
          </nav>
          <form
            action={"/contact"}
            className="hidden md:flex items-center space-x-6 justify-end flex-1"
          >
            <Button
              variant="red"
              type="submit"
              className="max-lg:text-sm xl:px-6 xl:py-2 before:bg-charcoal-gray"
            >
              <span>Request A Quote</span>
              <FiArrowUpRight className="w-7 h-7" />
            </Button>
          </form>

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
            <form
              action={"/contact"}
              className="transform transition-all duration-300 ease-out"
              style={{
                transitionDelay: `${NAV_ITEMS.length * 50}ms`,
                transform: isMobileMenuOpen
                  ? "translateX(0)"
                  : "translateX(-20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              <Button type="submit" variant="red" className="w-full">
                <span>Request A Quote</span>
                <FiArrowUpRight className="w-6 h-6" />
              </Button>
            </form>
          </div>
        </div>
      </nav>

      {/* Neon Red Border Bottom Gradient */}
      <div className="h-px bg-gradient-to-r from-[#ff003c] via-[#ff3c00] to-[#ff003c] shadow-[0_0_8px_1px_rgba(255,0,60,0.6)]"></div>
    </header>
  );
}
