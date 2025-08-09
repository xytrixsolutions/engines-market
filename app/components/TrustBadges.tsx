"use client";

import {
  FaTruckPickup,
  FaCertificate,
  FaUserShield,
  FaIndustry,
} from "react-icons/fa";
import { ReactElement } from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";

interface Badge {
  icon: ReactElement;
  title: string;
  description: string;
}

const badges: Badge[] = [
  {
    icon: <FaUserShield className="text-white text-4xl" />,
    title: "Verified UK Suppliers",
    description: "Trusted and authenticated vendors",
  },
  {
    icon: <FaIndustry className="text-white text-4xl" />,
    title: "12 Years Experience",
    description: "Proven track record in the industry",
  },
  {
    icon: <FaCertificate className="text-white text-4xl" />,
    title: "12–18 Months Warranty",
    description: "On all reconditioned engines",
  },
  {
    icon: <FaTruckPickup className="text-white text-4xl" />,
    title: "Pick-Up & Drop-Off",
    description: "Convenient services available",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

const TrustBadges = () => {
  return (
    <Container dark id="why-choose-us">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-bold text-center text-charcoal-gray-muted mb-10"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.05} // delay in seconds
      >
        Why <span className="text-neon-red">Choose</span> Us?
      </motion.h2>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="relative bg-white py-14 text-center rounded-xl shadow-md hover:shadow-lg"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1 + index * 0.1} // same stagger as AOS delay
          >
            {/* Icon Circle */}
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
              <div className="bg-black rounded-full w-22 h-22 flex items-center justify-center">
                {badge.icon}
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-lg font-semibold text-gray-800 mt-8">
              {badge.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{badge.description}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default TrustBadges;
