import Image from "next/image";

// Define your logos
const brandLogos = [
  { name: "BMW", src: "/brands/01.png" },
  { name: "Jaguar", src: "/brands/02.png" },
  { name: "Land Rover", src: "/brands/03.png" },
  { name: "Mercedes", src: "/brands/04.png" },
  { name: "Rangerover", src: "/brands/05.png" },
  { name: "Mini", src: "/brands/06.png" },
  { name: "Skoda", src: "/brands/07.png" },
  { name: "Jaguar", src: "/brands/08.png" },
  { name: "Land Rover", src: "/brands/09.png" },
  { name: "Mercedes", src: "/brands/10.jpg" },
  { name: "Rangerover", src: "/brands/11.png" },
  { name: "Mini", src: "/brands/12.png" },
  { name: "BMW", src: "/brands/13.png" },
  { name: "Jaguar", src: "/brands/14.png" },
  { name: "Land Rover", src: "/brands/15.png" },
  { name: "Mercedes", src: "/brands/16.png" },
  { name: "Rangerover", src: "/brands/17.png" },
  { name: "Mini", src: "/brands/18.png" },
  { name: "Skoda", src: "/brands/19.png" },
  { name: "Jaguar", src: "/brands/20.png" },
  { name: "Land Rover", src: "/brands/21.png" },
  { name: "Mercedes", src: "/brands/22.png" },
  { name: "Rangerover", src: "/brands/23.png" },
  { name: "Mini", src: "/brands/24.png" },
  { name: "Skoda", src: "/brands/25.png" },
  { name: "Jaguar", src: "/brands/26.png" },
  { name: "Land Rover", src: "/brands/27.png" },
  { name: "Mercedes", src: "/brands/28.png" },
  { name: "Rangerover", src: "/brands/29.svg" },
];

export default function Hero3() {
  return (
    <div className="bg-[#F3F9FF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-black leading-tight">
              Explore By
            </h2>
            <h3 className="text-4xl md:text-5xl font-normal text-[#0037D6] leading-tight">
              Manufacturer
            </h3>
          </div>

          {/* Center - Description */}
          <div className="">
            <p className="text-gray-700 text-lg leading-relaxed">
              Find the perfect engine for your car! Choose your manufacturer
              below and get instant access to reconditioned, used, and new
              engine options from trusted suppliers.
            </p>
          </div>




        </div>

        {/* Manufacturer Logos */}
        <div className="flex justify-center items-center flex-wrap gap-12 mb-12">
          {brandLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Load More Button with Lines */}
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-[#0037D6]"></div>
          <button className=" bg-[#0037D6] hover:bg-transparent border-2 border-[#0037D6] text-white hover:text-[#0037D6] px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Load More
          </button>
          <div className="flex-1 h-px bg-[#0037D6]"></div>
        </div>
      </div>
    </div>
  );
}
