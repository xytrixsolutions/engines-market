import Accent from "@/components/Accent";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { CheckCircle } from "lucide-react";
import { data } from "../../../data/brands";
import * as motion from "motion/react-client";

const motionProps = {
  initial: { opacity: 0, y: 50 },
  transition: { duration: 1, delay: 0.2, ease: "easeOut" as const }, // fix
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

const WhyChoose = ({ brand }: { brand: string }) => {
  const { section0Image } = data[brand];

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 items-center h-auto lg:h-[85vh] overflow-x-hidden"
      id="why-choose"
    >
      {/* Image Side - Full height + BG */}
      <motion.div
        className="bg-[url('/why-choose-bg.webp')] bg-cover bg-center flex justify-center items-center py-16 lg:py-0 h-full"
        {...motionProps}
      >
        <motion.img
          {...motionProps}
          src={section0Image.img}
          alt="BMW Engine"
          width={400}
          height={300}
        />
      </motion.div>

      {/* Text Side - Inside layout container */}
      <motion.div
        className="bg-[linear-gradient(90deg,_#2e2e2e,_#727272,_#2e2e2e)] bg-blend-color-burn h-full flex items-center max-lg:py-10"
        {...motionProps}
      >
        <div
          className="w-11/12 lg:w-10/12 max-w-screen-xl mx-auto px-4 py-12 pb-20 rounded-xl bg-neutral-800/20 backdrop-blur-md border border-white/20 shadow-md"
          style={{
            boxShadow: "0 0 100px rgba(255, 255, 255, 0.35)",
            borderRadius: "1.5rem",
          }}
        >
          <Heading useMotion dark className="text-center" {...motionProps}>
            Why Choose <Accent>Engines</Accent> Market?
          </Heading>

          <Paragraph
            useMotion
            dark
            className="text-start max-w-lg"
            {...motionProps}
          >
            At <strong>Engines</strong> Market, we take pride in delivering
            top-notch automotive services backed by expertise, quality, and
            customer satisfaction.
          </Paragraph>

          <motion.div
            className="space-y-6 text-charcoal-gray-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
          >
            {[
              "Free Instant Quotes",
              "12 Years Industry Experience",
              "Trusted Engine Suppliers Only",
              "Reconditioned Engine Specialists",
              "Save 40% on Replacement Cost",
              "Certified Engines with OEM Parts",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-3 translate-x-6 sm:translate-x-10 md:translate-x-16 lg:translate-x-10 xl:translate-x-10 [@media(min-width:1400px)]:translate-x-16 [@media(min-width:1600px)]:translate-x-24 [@media(min-width:1700px)]:translate-x-36"
                variants={itemVariants}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChoose;
