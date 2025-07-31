import Accent from "@/components/Accent";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const WhyChoose = () => {
  return (
    <Container className="px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Image Content */}
        <div className="flex justify-center bg-charcoal-gray">
          <Image
            src="/bmw/bmw.png"
            alt="BMW Engine"
            width={400}
            height={300}
            className="rounded-lg w-full max-w-sm h-auto my-12 mx-6"
          />
        </div>
        {/* Text Content */}
        <div className="space-y-6">
          <Heading>
            Why Choose
            <Accent>Engines</Accent>
            Market?
          </Heading>

          <Paragraph>
            At <strong>Engines</strong> Market, we take pride in delivering
            top-notch automotive services backed by expertise, quality, and
            customer satisfaction.
          </Paragraph>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 font-bold" />
              <span className="font-semibold">Free Instant Quotes</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 font-bold" />
              <span className="font-semibold">
                12 Years Industry Experience
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 font-bold" />
              <span className="font-semibold">
                Trusted Engine Suppliers Only
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 font-bold" />
              <span className="font-semibold">
                Reconditioned Engine Specialists
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 font-bold" />
              <span className="font-semibold">
                Save 40% on Replacement Cost
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 font-bold" />
              <span className="font-semibold">
                Certified Engines with OEM Parts
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
