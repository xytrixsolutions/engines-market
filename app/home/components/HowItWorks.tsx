

import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-[#F3F9FF]">
      
      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Image
          src="/Home/image 2.png" // make sure this image is in public/ directory
          alt="Engine Market"
          width={520}
          height={520}
          className="rounded-lg  object-cover"
        />
      </div>

      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0037D6] mb-4">
        How It Works - Simple & Straightforward
        </h2>
        <p className="text-lg text-gray-700 mb-6">
        Get Multiple Quotes Within Hours!
        </p>
        <ul className="space-y-4 text-black text-base">
          <li><span className="font-bold">1. Enter Your Car Registration</span> - Get the best deal, no exceptions!</li>
          <li><span className="font-bold">2. Compare Quotes from Multiple Sellers</span> - Trusted sellers and garages only.</li>
          <li><span className="font-bold">3. Choose the Best Deal</span> - Find engines ready to ship nationwide.</li>
          <li><span className="font-bold">4. Pick-Up & Drop-Off Available</span> - Hassle-free transport options available.</li>
        </ul>
      </div>

      
    </section>
  );
};

export default HowItWorks;
