import Container from "@/components/Container";
import Image from "next/image";

export default function BMWEngineGuide() {
  return (
    <Container className="py-16 px-2 md:px-4">
      {/* Heading and Text */}
      <div className="text-center space-y-6 mb-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          The Complete BMW Engine Guide: Engine Codes, Specifications,
          Replacement Costs & Performance Upgrade
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mx-auto">
          Welcome to ultimate BMW engines guide, this page is designed to give
          you a complete overview of BMW replacement engines, estimated costs,
          engine codes and their compatible models, along with troubleshooting
          guides for common problems, pros & cons of various replacement engine
          types, performance upgrade tips and most frequently asked questions.
        </p>
      </div>

      {/* Image */}
      <Image
        src="/bmw/engine-guide.png"
        alt="BMW Dealership with BMW Cars"
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-auto rounded-lg shadow-lg mx-auto"
      />
    </Container>
  );
}
