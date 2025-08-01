import Accent from "@/components/Accent";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import { data } from "../types/data";

export default function BMWEngineGuide() {
  const section1Image = data[0].section1Image;
  return (
    <Container dark className="py-16">
      {/* Heading and Text */}
      <div className="text-center text-charcoal-gray-muted space-y-6 mb-14 max-w-6xl mx-auto">
        <Heading className="leading-tight text-charcoal-gray-muted">
          The Complete
          <Accent className="mx-3">BMW Engine</Accent>
          Guide: Engine Codes, Specifications, Replacement Costs &{" "}
          <Accent>Performance Upgrade</Accent>
        </Heading>

        <Paragraph>
          Welcome to the ultimate BMW engines guide. This page provides a
          comprehensive overview of <strong>BMW replacement engines</strong>,
          including estimated costs, engine codes, and compatible models.
          You&apos;ll also find <strong>troubleshooting guides</strong> for
          common issues, a breakdown of the{" "}
          <strong>pros and cons of different replacement engine types</strong>,{" "}
          <strong>performance upgrade tips</strong>, and answers to the most
          frequently asked questions.
        </Paragraph>
      </div>

      {/* Image */}
      <Image
        src={section1Image.img}
        alt="BMW Dealership with BMW Cars"
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-auto rounded-lg shadow-lg mx-auto"
      />
    </Container>
  );
}
