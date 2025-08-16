/* eslint-disable @typescript-eslint/no-explicit-any */
// import Container from "@/components/Container";
//
// const cards = [
//   {
//     bg: "bg-gray-50",
//     titleColor: "text-gray-800",
//     textColor: "text-gray-600",
//     buttonExtra: "hover:text-[#EB0808]",
//     delay: 100,
//   },
//   {
//     bg: "bg-[#1E3A8A]",
//     titleColor: "text-white",
//     textColor: "text-white",
//     buttonExtra: "",
//     delay: 200,
//   },
//   {
//     bg: "bg-gray-50",
//     titleColor: "text-gray-800",
//     textColor: "text-gray-600",
//     buttonExtra: "hover:text-[#EB0808]",
//     delay: 300,
//   },
// ];
//
// const snippet =
//   "Snippet from blog post - Learn everything you need to know about buying a used or reconditioned engine and how to get the best deal. ".repeat(
//     3,
//   );
//
// const BlogCards = () => {
//   return (
//     <Container id="blog">
//       <div data-aos="fade-up">
//         <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6 text-center">
//           Featured Blog Post -{" "}
//           <span className="text-neon-red">Latest Engine Buying Guides</span>
//         </h2>
//         <p className="text-center text-gray-500 mb-12">
//           Stay informed with our expert guides and insider tips!
//         </p>
//       </div>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {cards.map(({ bg, titleColor, textColor, buttonExtra, delay }, i) => (
//           <div
//             key={i}
//             className={`${bg} p-6 rounded-2xl shadow-2xl transition`}
//             data-aos="fade-up"
//             data-aos-delay={delay}
//             data-aos-duration="600"
//             data-aos-once="true"
//           >
//             <h3 className={`text-xl font-semibold ${titleColor} mb-3`}>
//               Buying Guide For Engine
//             </h3>
//             <p className={`${textColor} text-sm mb-4`}>{snippet}</p>
//             <a
//               href="#"
//               className={`inline-block bg-[#EB0808] hover:bg-transparent border-2 border-[#EB0808] rounded-4xl px-5 py-2 text-white ${buttonExtra} font-medium mt-10 transition-all duration-300`}
//             >
//               Read More →
//             </a>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };
//
// export default BlogCards;
import Container from "@/components/Container";
import * as motion from "motion/react-client";

const cards = [
  {
    bg: "bg-gray-50",
    titleColor: "text-gray-800",
    textColor: "text-gray-600",
    buttonExtra: "hover:text-[#EB0808]",
    delay: 100,
  },
  {
    bg: "bg-[#1E3A8A]",
    titleColor: "text-white",
    textColor: "text-white",
    buttonExtra: "",
    delay: 200,
  },
  {
    bg: "bg-gray-50",
    titleColor: "text-gray-800",
    textColor: "text-gray-600",
    buttonExtra: "hover:text-[#EB0808]",
    delay: 300,
  },
];

const snippet =
  "Snippet from blog post - Learn everything you need to know about buying a used or reconditioned engine and how to get the best deal. ".repeat(
    3,
  );

const BlogCards = () => {
  // Animation variants for staggered card appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 100ms between each child (matches your 100ms increment)
        delayChildren: 0.1, // optional: slight delay before first item
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as any,
        stiffness: 100,
        damping: 15,
        // delay applied individually via card.delay
      },
    },
  };

  return (
    <Container id="blog">
      {/* Header with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6">
          Featured Blog Post -{" "}
          <span className="text-neon-red">Latest Engine Buying Guides</span>
        </h2>
        <p className="text-center text-gray-500">
          Stay informed with our expert guides and insider tips!
        </p>
      </motion.div>

      {/* Card Grid with Staggered Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {cards.map(({ bg, titleColor, textColor, buttonExtra, delay }, i) => (
          <motion.div
            key={i}
            className={`${bg} p-6 rounded-2xl shadow-2xl`}
            variants={cardVariants}
            transition={{
              delay: delay / 1000, // Convert ms to seconds (100ms = 0.1s)
              duration: 0.6,
              ease: "easeOut" as any,
            }}
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
      </motion.div>
    </Container>
  );
};

export default BlogCards;
