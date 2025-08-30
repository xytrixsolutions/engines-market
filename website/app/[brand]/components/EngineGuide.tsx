import Accent from "@/components/Accent";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { data } from "../../../data/brands";
import React from "react";
import * as motion from "motion/react-client";

const EngineGuide: React.FC<{ brand: string }> = ({
  brand,
}: {
  brand: string;
}) => {
  const { section1Image, brandName } = data[brand];
  return (
    <Container className="py-16" id="engine-guide">
      {/* Heading and Text */}
      <motion.div
        className="text-center text-charcoal-gray space-y-6 mb-14 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Heading className="leading-tight text-charcoal-gray">
          The Complete
          <Accent className="mx-3">{brandName} Engine</Accent>
          Guide: Engine Codes, Specifications, Replacement Costs &{" "}
          <Accent>Performance Upgrade</Accent>
        </Heading>

        <Paragraph>
          Welcome to the ultimate {brandName} engines guide. This page provides
          a comprehensive overview of{" "}
          <strong>{brandName} replacement engines</strong>, including estimated
          costs, engine codes, and compatible models. You&apos;ll also find{" "}
          <strong>troubleshooting guides</strong> for common issues, a breakdown
          of the{" "}
          <strong>pros and cons of different replacement engine types</strong>,{" "}
          <strong>performance upgrade tips</strong>, and answers to the most
          frequently asked questions.
        </Paragraph>
      </motion.div>

      {/* Image */}
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={section1Image.img}
        alt={`${brandName} Dealership with ${brandName} Cars`}
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-auto rounded-lg shadow-lg mx-auto"
      />
    </Container>
  );
};
export default EngineGuide;
