"use client"; // Required for using framer-motion

import Container from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

// Reuse the same variants for consistency
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (_ = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HowItWorks = () => {
  const steps = [
    "1. Enter Your Car Registration - Get the best deal, no exceptions!",
    "2. Compare Quotes from Multiple Sellers - Trusted sellers and garages only.",
    "3. Choose the Best Deal - Find engines ready to ship nationwide.",
    "4. Pick-Up & Drop-Off Available - Hassle-free transport options available.",
  ];

  return (
    <Container
      dark
      className="flex flex-col-reverse md:flex-row items-center justify-between"
      id="how-it-works"
    >
      {/* Right Side (Image) */}
      <motion.div
        className="md:w-1/2 flex justify-start mb-10 md:mb-0 max-md:mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.75 }}
      >
        <Image
          src="/Home/image-2.png"
          alt="Engine Market"
          width={520}
          height={520}
          className="rounded-lg object-cover"
        />
      </motion.div>

      {/* Left Side (Text) */}
      <motion.div
        className="md:w-1/2 w-full flex justify-end md:pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="w-full md:w-[90%] text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-charcoal-gray-muted mb-5"
            custom={0}
            variants={fadeUpVariants}
          >
            How It Works -{" "}
            <span className="text-neon-red">Simple & Straightforward</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-6"
            custom={1}
            variants={fadeUpVariants}
          >
            Get Multiple Quotes Within Hours!
          </motion.p>
          <ul className="space-y-4 text-charcoal-gray-muted text-base">
            {steps.map((step, idx) => (
              <motion.li key={idx} custom={idx + 2} variants={fadeUpVariants}>
                <span className="font-bold">{step.split(" - ")[0]}</span> -{" "}
                {step.split(" - ")[1]}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Container>
  );
};

export default HowItWorks;
