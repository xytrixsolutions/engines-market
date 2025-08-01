"use client"; // Needed if you're using Next.js 13+ App Router

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import Link from "next/link";

// Define your logos with different sizes
const brandLogos = [
  { link: "/bmw", name: "BMW", src: "/brands/01.png", width: 80, height: 80 },
  {
    link: "/jaguar",
    name: "Jaguar",
    src: "/brands/02.png",
    width: 100,
    height: 80,
  },
  {
    link: "/landrover",
    name: "Land Rover",
    src: "/brands/03.png",
    width: 120,
    height: 100,
  },
  {
    link: "/mercedes",
    name: "Mercedes",
    src: "/brands/04.png",
    width: 140,
    height: 100,
  },
  {
    link: "/rangerover",
    name: "Rangerover",
    src: "/brands/05.png",
    width: 140,
    height: 100,
  },
  {
    link: "/mini",
    name: "Mini",
    src: "/brands/06.png",
    width: 180,
    height: 100,
  },
  {
    link: "/skoda",
    name: "Skoda",
    src: "/brands/07.png",
    width: 130,
    height: 100,
  },
  {
    link: "/jaguar",
    name: "Jaguar",
    src: "/brands/08.png",
    width: 150,
    height: 100,
  },
  {
    link: "/land",
    name: "Land Rover",
    src: "/brands/09.png",
    width: 160,
    height: 100,
  },
  {
    link: "/mercedes",
    name: "Mercedes",
    src: "/brands/10.png",
    width: 110,
    height: 90,
  },
  {
    link: "/rangerover",
    name: "Rangerover",
    src: "/brands/11.png",
    width: 150,
    height: 100,
  },
  {
    link: "/mini",
    name: "Mini",
    src: "/brands/12.png",
    width: 150,
    height: 100,
  },
  { link: "/bmw", name: "BMW", src: "/brands/13.png", width: 95, height: 95 },
  {
    link: "/jaguar",
    name: "Jaguar",
    src: "/brands/14.png",
    width: 120,
    height: 100,
  },
  {
    link: "/land",
    name: "Land Rover",
    src: "/brands/15.png",
    width: 150,
    height: 100,
  },
  {
    link: "/mercedes",
    name: "Mercedes",
    src: "/brands/16.png",
    width: 150,
    height: 100,
  },
  {
    link: "/rangerover",
    name: "Rangerover",
    src: "/brands/17.png",
    width: 100,
    height: 100,
  },
  {
    link: "/mini",
    name: "Mini",
    src: "/brands/18.png",
    width: 100,
    height: 100,
  },
  {
    link: "/skoda",
    name: "Skoda",
    src: "/brands/19.png",
    width: 80,
    height: 100,
  },
  {
    link: "/jaguar",
    name: "Jaguar",
    src: "/brands/20.png",
    width: 180,
    height: 100,
  },
  {
    link: "/land",
    name: "Land Rover",
    src: "/brands/21.png",
    width: 90,
    height: 100,
  },
  {
    link: "/mercedes",
    name: "Mercedes",
    src: "/brands/22.png",
    width: 100,
    height: 100,
  },
  {
    link: "/rangerover",
    name: "Rangerover",
    src: "/brands/23.png",
    width: 100,
    height: 105,
  },
  {
    link: "/mini",
    name: "Mini",
    src: "/brands/24.png",
    width: 100,
    height: 100,
  },
  {
    link: "/skoda",
    name: "Skoda",
    src: "/brands/25.png",
    width: 130,
    height: 100,
  },
  {
    link: "/jaguar",
    name: "Jaguar",
    src: "/brands/26.png",
    width: 100,
    height: 100,
  },
  {
    link: "/land",
    name: "Land Rover",
    src: "/brands/27.png",
    width: 100,
    height: 100,
  },
  {
    link: "/mercedes",
    name: "Mercedes",
    src: "/brands/28.png",
    width: 180,
    height: 100,
  },
  {
    link: "/rangerover",
    name: "Rangerover",
    src: "/brands/29.svg",
    width: 80,
    height: 100,
  },
];

export default function Hero3() {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount(brandLogos.length); // show all logos
  };

  return (
    <Container dark>
      <div className="items-center mb-12 text-center flex flex-col justify-center">
        {/* Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray-muted leading-tight mb-5 text-center">
            Explore By <span className="text-neon-red">Manufacturer</span>
          </h2>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-6xl mx-auto">
            Find the perfect engine for your car! Choose your manufacturer below
            and get instant access to reconditioned, used, and new engine
            options from trusted suppliers.
          </p>
        </div>
      </div>

      {/* Manufacturer Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        {brandLogos.slice(0, visibleCount).map((logo, index) => (
          <div
            key={index}
            className="mx-auto flex items-center justify-center"
            style={{
              width: `${logo.width + 20}px`,
              height: `${logo.height + 20}px`,
            }}
          >
            <Link href={logo.link}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < brandLogos.length && (
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px neon-red-gradient"></div>
          <Button className="" onClick={handleLoadMore}>
            Load More
          </Button>
          <div className="flex-1 h-px neon-red-gradient"></div>
        </div>
      )}
    </Container>
  );
}
