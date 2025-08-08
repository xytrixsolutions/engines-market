import Container from "@/components/Container";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <Container
      dark
      className="flex flex-col-reverse md:flex-row items-center justify-between"
      id="how-it-works"
    >
      {/* Right Side (Image) */}
      <div
        data-aos="fade-up"
        className="md:w-1/2 flex justify-start mb-10 md:mb-0 max-md:mt-10"
      >
        <Image
          src="/Home/image-2.png"
          alt="Engine Market"
          width={520}
          height={520}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Left Side (Text) */}
      <div
        data-aos="fade-up"
        className="md:w-1/2 w-full flex justify-end md:pb-8"
      >
        <div className="w-full md:w-[90%] text-left">
          <h2 className="text-3xl  md:text-4xl font-bold text-charcoal-gray-muted mb-5">
            How It Works -{" "}
            <span className="text-neon-red">Simple & Straightforward</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Get Multiple Quotes Within Hours!
          </p>
          <ul className="space-y-4 text-charcoal-gray-muted text-base">
            <li>
              <span className="font-bold">1. Enter Your Car Registration</span>{" "}
              - Get the best deal, no exceptions!
            </li>
            <li>
              <span className="font-bold">
                2. Compare Quotes from Multiple Sellers
              </span>{" "}
              - Trusted sellers and garages only.
            </li>
            <li>
              <span className="font-bold">3. Choose the Best Deal</span> - Find
              engines ready to ship nationwide.
            </li>
            <li>
              <span className="font-bold">4. Pick-Up & Drop-Off Available</span>{" "}
              - Hassle-free transport options available.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
