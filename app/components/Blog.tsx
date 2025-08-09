"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";

const cards = [
  {
    bg: "bg-gray-50",
    titleColor: "text-gray-800",
    textColor: "text-gray-600",
    buttonExtra: "hover:text-[#EB0808]",
    delay: 0.1, // in seconds
  },
  {
    bg: "bg-[#1E3A8A]",
    titleColor: "text-white",
    textColor: "text-white",
    buttonExtra: "",
    delay: 0.2,
  },
  {
    bg: "bg-gray-50",
    titleColor: "text-gray-800",
    textColor: "text-gray-600",
    buttonExtra: "hover:text-[#EB0808]",
    delay: 0.3,
  },
];

const snippet =
  "Snippet from blog post - Learn everything you need to know about buying a used or reconditioned engine and how to get the best deal. ".repeat(
    3,
  );

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const BlogCards = () => {
  return (
    <Container id="blog">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6 text-center">
          Featured Blog Post -{" "}
          <span className="text-neon-red">Latest Engine Buying Guides</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Stay informed with our expert guides and insider tips!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map(({ bg, titleColor, textColor, buttonExtra, delay }, i) => (
          <motion.div
            key={i}
            className={`${bg} p-6 rounded-2xl shadow-2xl`}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={delay}
          >
            <h3 className={`text-xl font-semibold ${titleColor} mb-3`}>
              Buying Guide For Engine
            </h3>
            <p className={`${textColor} text-sm mb-4`}>{snippet}</p>
            <a
              href="#"
              className={`inline-block bg-[#EB0808] hover:bg-transparent border-2 border-[#EB0808] rounded-4xl px-5 py-2 text-white ${buttonExtra} font-medium mt-10 transition-all duration-300`}
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default BlogCards;
