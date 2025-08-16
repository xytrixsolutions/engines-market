"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import * as motion from "motion/react-client";

const EngineDealSection = () => {
  const images = [
    { src: "/Home/engines/engine01.png", width: 400, height: 400 },
    { src: "/Home/engines/engine02.png", width: 400, height: 400 },
    { src: "/Home/engines/engine03.png", width: 200, height: 200 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Start the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Fade animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { opacity: { duration: 0.2 }, scale: { duration: 0.3 } },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { opacity: { duration: 0.2 }, scale: { duration: 0.3 } },
    },
  };

  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Container
      className="grid md:grid-cols-2 items-center md:gap-8"
      id="best-engine"
    >
      {/* Text Section (order-1 on mobile, order-2 on desktop) */}
      <motion.div
        className="order-1 md:order-2 text-center md:text-left space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-charcoal-gray"
        >
          Find the Best Engine Deals with{" "}
          <span className="text-neon-red">Engine Market</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg font-semibold text-gray-800"
        >
          Lowest Price Guaranteed | 100s of Suppliers | Nationwide Availability
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg text-gray-700">
          Engine Market connects you with hundreds of trusted suppliers. Get
          competitive quotes in hours, compare prices, and save today!
        </motion.p>
      </motion.div>

      {/* Image Section (order-2 on mobile, order-1 on desktop) */}
      <div className="order-2 md:order-1 flex justify-center lg:justify-start mt-8 md:mt-0">
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <AnimatePresence mode="sync">
            <motion.div
              key={images[currentIndex].src}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].src}
                alt={`Engine ${currentIndex + 1}`}
                fill
                className="rounded-lg object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
};

export default EngineDealSection;
