"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { motion } from "framer-motion";

// import { Easing } from "motion";
//
// const easeOut: Easing = [0.22, 1, 0.36, 1]; // cubic-bezier for easeOut

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  // visible: (custom = 0) => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visible: (_ = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      // delay: custom * 0.12,
      duration: 0.75,
      // ease: easeOut, // use the typed easing array
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

const WhyChoose = () => {
  const listItems = [
    "✔ Lowest Price Guarantee - Get the best deal, no exceptions!",
    "✔ 100s of Verified Suppliers - Trusted sellers and garages only.",
    "✔ Fast Stock Availability - Find engines ready to ship nationwide.",
    "✔ Pick-Up & Drop-Off Services - Hassle-free transport options available.",
    "✔ Best After-Sales Support - We assist even after your purchase.",
  ];

  return (
    <Container
      className="flex flex-col md:flex-row items-center justify-between"
      id="why-choose-engine-market"
    >
      {/* Left Side (Text) */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center lg:justify-start mb-10 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="w-full md:w-[90%] text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4"
            custom={0}
            variants={fadeUpVariants}
          >
            Why Choose <span className="text-neon-red">Engine Market</span>?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            custom={1}
            variants={fadeUpVariants}
          >
            A Smarter Way to Buy Engines – The Power is in Your Hands!
          </motion.p>
          <ul className="space-y-4 text-black text-base">
            {listItems.map((item, idx) => (
              <motion.li
                key={idx}
                custom={idx + 2} // offset index for delay after h2 and p
                variants={fadeUpVariants}
              >
                <span className="font-bold">{item.split(" - ")[0]}</span> -{" "}
                {item.split(" - ")[1]}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Right Side (Image) */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center lg:justify-end"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.75 }}
      >
        <Image
          src="/Home/image-2.png"
          alt="Engine Market"
          width={520}
          height={520}
          className="rounded-lg object-cover"
        />
      </motion.div>
    </Container>
  );
};

export default WhyChoose;
