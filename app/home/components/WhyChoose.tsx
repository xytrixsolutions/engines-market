import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className="w-full  flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16  bg-[#F3F9FF]">
      {/* Left Side */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0037D6] mb-4">
          Why Choose Engine Market?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A Smarter Way to Buy Engines – The Power is in Your Hands!
        </p>
        <ul className="space-y-4 text-black text-base">
          <li>
            <span className="font-bold">✔ Lowest Price Guarantee</span> - Get
            the best deal, no exceptions!
          </li>
          <li>
            <span className="font-bold">✔ 100s of Verified Suppliers</span> -
            Trusted sellers and garages only.
          </li>
          <li>
            <span className="font-bold">✔ Fast Stock Availability</span> - Find
            engines ready to ship nationwide.
          </li>
          <li>
            <span className="font-bold">✔ Pick-Up & Drop-Off Services</span> -
            Hassle-free transport options available.
          </li>
          <li>
            <span className="font-bold">✔ Best After-Sales Support</span> - We
            assist even after your purchase.
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/Home/image-2.png" // make sure this image is in public/ directory
          alt="Engine Market"
          width={520}
          height={520}
          className="rounded-lg  object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChoose;
