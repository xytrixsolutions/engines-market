import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import { ArrowRight, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";
import { data } from "../../../data/brands";
import * as motion from "motion/react-client";

const MotionDiv = motion.div;

const iconClass = "h-8 w-8 mx-auto mb-3";

const features = [
  {
    Icon: CheckCircle,
    iconClassName: `${iconClass} text-green-600`,
    title: "Best Prices Guaranteed",
    description: "Competitive pricing on all engine types",
  },
  {
    Icon: Clock,
    iconClassName: `${iconClass} text-blue-600`,
    title: "Fast Delivery",
    description: "Quick turnaround times nationwide",
  },
  {
    Icon: CheckCircle,
    iconClassName: `${iconClass} text-green-600`,
    title: "Quality Assured",
    description: "All engines tested and warranted",
  },
];

const trustIndicators = [
  "Free Quotes",
  "No Obligation",
  "Expert Support",
  "Nationwide Delivery",
];

/* Plain variant objects — NO functions so server serialization is safe */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48 } },
};

/* Parent that handles stagger for the feature cards */
const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18, // make this larger for more obvious stagger
      delayChildren: 0.08,
    },
  },
};

/* Parent for CTA buttons - small stagger so buttons pop in sequence */
const buttonsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

/* Parent for trust indicators */
const trustContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.28,
    },
  },
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  /* CHILD: No initial/whileInView here — parent will control visibility */
  <MotionDiv variants={fadeInUp}>
    <Card className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300">
      <CardContent className="py-12 text-center">
        {icon}
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </MotionDiv>
);

const EngineDealsCTA: React.FC<{ brand: string }> = ({ brand }) => {
  const { brandName } = data[brand];

  return (
    <Container
      className="py-16 relative overflow-hidden text-gray-900"
      id="last-cta"
    >
      {/* Top-level: triggers when scrolled into view */}
      <MotionDiv
        className="text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: {} }} // parent placeholder; sections handle their own stagger
      >
        {/* Heading (simple fade) */}
        <MotionDiv variants={fadeInUp}>
          <Heading>
            Compare Prices & Get the Best{" "}
            <span className="text-neon-red">{brandName} Engine Deals</span> Now!
          </Heading>
          <Paragraph>
            At <strong>Engine Market</strong>, we offer the best prices and
            availability for all {brandName} engines. Whether you&apos;re
            looking for a new, used, or reconditioned engine, we&apos;ve got you
            covered. Don&apos;t wait, request a quote today and get your{" "}
            {brandName} back on the road in no time!
          </Paragraph>
        </MotionDiv>

        {/* Feature Cards: PARENT controls staggerChildren */}
        <MotionDiv
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainer}
        >
          {features.map(({ Icon, iconClassName, title, description }, i) => (
            <FeatureCard
              key={i}
              icon={<Icon className={iconClassName} />}
              title={title}
              description={description}
            />
          ))}
        </MotionDiv>

        {/* CTA Buttons: parent stagger */}
        <MotionDiv
          className="flex flex-col gap-4 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={buttonsContainer}
        >
          <MotionDiv variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-neon-red hover:bg-transparent hover:text-neon-red border border-neon-red text-white font-semibold px-8 py-3 text-lg transition-all duration-300 group"
            >
              <Link href="#cta2" className="flex items-center">
                Request a Quote Now!
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </MotionDiv>

          <div className="flex gap-4">
            {[
              { icon: Phone, label: "Call Now" },
              { icon: Mail, label: "Email Us" },
              { icon: FaWhatsapp, label: "WhatsApp" },
            ].map(({ icon: Icon, label }, i) => (
              <MotionDiv key={label} variants={fadeInUp}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold px-6 py-3 bg-white"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {label}
                </Button>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Trust Indicators: parent stagger */}
        <MotionDiv
          className="pt-8 border-t border-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={trustContainer}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
            {trustIndicators.map((text, i) => (
              <MotionDiv
                key={i}
                className="flex items-center gap-2"
                variants={fadeInUp}
              >
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">{text}</span>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </Container>
  );
};

export default EngineDealsCTA;
