import Container from "@/components/Container";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <Container className="flex flex-col md:flex-row items-center justify-between">
      {/* Left Side (Text) */}
      <div className="w-full md:w-1/2 flex justify-center lg:justify-start mb-10 md:mb-0">
        <div className="w-full md:w-[90%] text-left">
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
              <span className="font-bold">✔ Fast Stock Availability</span> -
              Find engines ready to ship nationwide.
            </li>
            <li>
              <span className="font-bold">✔ Pick-Up & Drop-Off Services</span>{" "}
              - Hassle-free transport options available.
            </li>
            <li>
              <span className="font-bold">✔ Best After-Sales Support</span> -
              We assist even after your purchase.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/Home/image-2.png"
          alt="Engine Market"
          width={520}
          height={520}
          className="rounded-lg object-cover"
        />
      </div>
    </Container>
  );
};

export default WhyChoose;
