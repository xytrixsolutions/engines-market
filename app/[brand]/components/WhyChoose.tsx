import Accent from "@/components/Accent";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { data } from "../data/data";

const WhyChoose: React.FC<{ brand: string }> = ({ brand }) => {
  const { section0Image } = data[brand];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-auto lg:h-[85vh]" id="why-choose">
      {/* Image Side - Full height + BG */}
      <div className="bg-[url('/why-choose-bg.png')] bg-cover bg-center flex justify-center items-center py-16 lg:py-0 h-full" data-aos="fade-right">
        <Image
          src={section0Image.img}
          alt="BMW Engine"
          width={400}
          height={300}
        />
      </div>

      {/* Text Side - Inside layout container */}
      <div className="bg-[linear-gradient(90deg,_#2e2e2e,_#727272,_#2e2e2e)] bg-blend-color-burn h-full flex items-center max-lg:py-10" data-aos="fade-left">
        <div
          className="w-11/12 lg:w-10/12 max-w-screen-xl mx-auto px-4 py-12 pb-20 rounded-xl bg-neutral-800/20 backdrop-blur-md border border-white/20 shadow-md"
          style={{
            boxShadow: "0 0 100px rgba(255, 255, 255, 0.35)",
            borderRadius: "1.5rem",
          }}
        >
          <Heading dark className="text-center">
            Why Choose <Accent>Engines</Accent> Market?
          </Heading>

          <Paragraph dark className="text-start max-w-lg">
            At <strong>Engines</strong> Market, we take pride in delivering
            top-notch automotive services backed by expertise, quality, and
            customer satisfaction.
          </Paragraph>

          <div className="space-y-6 text-charcoal-gray-muted ">
            {[
              "Free Instant Quotes",
              "12 Years Industry Experience",
              "Trusted Engine Suppliers Only",
              "Reconditioned Engine Specialists",
              "Save 40% on Replacement Cost",
              "Certified Engines with OEM Parts",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 translate-x-6 sm:translate-x-10 md:translate-x-48 lg:translate-x-10 xl:translate-x-10 [@media(min-width:1400px)]:translate-x-16 [@media(min-width:1600px)]:translate-x-24 [@media(min-width:1700px)]:translate-x-36 "
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
