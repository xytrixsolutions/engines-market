"use client"; // Needed if you're using Next.js 13+ App Router

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import Link from "next/link";

// Define your logos with different sizes
const brandLogos = [
  { link: "/bmw", name: "BMW", src: "/brands/bmw.png", width: 80, height: 80 },
  {
    link: "/mercedes",
    name: "Mercedes",
    src: "/brands/mercedes.png",
    width: 100,
    height: 80,
  },
  {
    link: "/jaguar",
    name: "Jaguar",
    src: "/brands/jaguar.png",
    width: 150,
    height: 80,
  },
  {
    link: "/landrover",
    name: "Mercedes",
    src: "/brands/land-rover.png",
    width: 160,
    height: 80,
  },
  {
    link: "/rangerover",
    name: "Rangerover",
    src: "/brands/range-rover.png",
    width: 150,
    height: 80,
  },
  {
    link: "/mini",
    name: "Mini",
    src: "/brands/mini.png",
    width: 180,
    height: 80,
  },
  {
    link: "/audi",
    name: "Audi",
    src: "/brands/audi.png",
    width: 150,
    height: 80,
  },
  {
    link: "/volkswagen",
    name: "Volkswagen",
    src: "/brands/volkswagen.png",
    width: 150,
    height: 80,
  },
  {
    link: "/alfaromeo",
    name: "Alfa Romeo",
    src: "/brands/alfa-romeo.png",
    width: 160,
    height: 80,
  },
  {
    link: "/citreon",
    name: "Citreon",
    src: "/brands/citreon.png",
    width: 100,
    height: 80,
  },
  {
    link: "/fiat",
    name: "Fiat",
    src: "/brands/fiat.png",
    width: 150,
    height: 80,
  },
  {
    link: "/ford",
    name: "Ford",
    src: "/brands/ford.png",
    width: 150,
    height: 80,
  },
  { link: "/honda", name: "Honda", src: "/brands/honda.png", width: 95, height: 95 },
  {
    link: "/hyundai",
    name: "Hyundai",
    src: "/brands/hyundai.png",
    width: 120,
    height: 80,
  },
  {
    link: "/iveco",
    name: "Iveco",
    src: "/brands/iveco.png",
    width: 150,
    height: 80,
  },
  {
    link: "/kia",
    name: "Kia",
    src: "/brands/kia.png",
    width: 150,
    height: 80,
  },
  {
    link: "/lexus",
    name: "Lexus",
    src: "/brands/lexus.png",
    width: 100,
    height: 80,
  },
  {
    link: "/mazda",
    name: "Mazda",
    src: "/brands/mazda.png",
    width: 100,
    height: 80,
  },
  {
    link: "/mitsubishi",
    name: "Mitsubishi",
    src: "/brands/mitsubishi.png",
    width: 80,
    height: 80,
  },
  {
    link: "/Nissan",
    name: "Nissan",
    src: "/brands/nissan.png",
    width: 180,
    height: 80,
  },
  {
    link: "/peugeot",
    name: "Peugeot",
    src: "/brands/peugeot.png",
    width: 100,
    height: 80,
  },
  {
    link: "/renault",
    name: "Renault",
    src: "/brands/renault.png",
    width: 100,
    height: 80,
  },
  {
    link: "/seat",
    name: "Seat",
    src: "/brands/seat.png",
    width: 100,
    height: 80,
  },
  {
    link: "/skoda",
    name: "Skoda",
    src: "/brands/skoda.png",
    width: 100,
    height: 80,
  },
  {
    link: "/subaru",
    name: "Subaru",
    src: "/brands/subaru.png",
    width: 130,
    height: 80,
  },
  {
    link: "/suzuki",
    name: "Suzuki",
    src: "/brands/suzuki.png",
    width: 80,
    height: 80,
  },
  {
    link: "/toyota",
    name: "Toyota",
    src: "/brands/toyota.png",
    width: 100,
    height: 80,
  },
  {
    link: "/vauxhall",
    name: "Vauxhall",
    src: "/brands/vauxhall.png",
    width: 180,
    height: 80,
  },
  {
    link: "/volvo",
    name: "Volvo",
    src: "/brands/volvo.svg",
    width: 80,
    height: 80,
  },
];

export default function Hero3() {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount(brandLogos.length); // show all logos
  };

  return (
    <Container dark id="explore-by-manufacturer" data-aos="fade-down">
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
          <Button className="before:bg-charcoal-gray" onClick={handleLoadMore}>
            Load More
          </Button>
          <div className="flex-1 h-px neon-red-gradient"></div>
        </div>
      )}
    </Container>
  );
}
