// import type React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Container from "@/components/Container";
// import { ArrowRight, Phone, Mail, Clock, CheckCircle } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import Heading from "@/components/Heading";
// import Paragraph from "@/components/Paragraph";
// import Link from "next/link";
// import { data } from "../../../data/brands";
//
// // Reusable FeatureCard Component
// const FeatureCard = ({
//   icon,
//   title,
//   description,
//   aosDelay = 0,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   aosDelay?: number;
// }) => (
//   <Card
//     className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300"
//     data-aos="fade-up" // 👉 Pop from bottom
//     data-aos-delay={aosDelay}
//     data-aos-duration="500"
//     data-aos-once="true"
//   >
//     <CardContent className="py-12 text-center">
//       {icon}
//       <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </CardContent>
//   </Card>
// );
//
// const iconClass = "h-8 w-8 mx-auto mb-3";
//
// const features = [
//   {
//     Icon: CheckCircle,
//     iconClassName: `${iconClass} text-green-600`,
//     title: "Best Prices Guaranteed",
//     description: "Competitive pricing on all engine types",
//   },
//   {
//     Icon: Clock,
//     iconClassName: `${iconClass} text-blue-600`,
//     title: "Fast Delivery",
//     description: "Quick turnaround times nationwide",
//   },
//   {
//     Icon: CheckCircle,
//     iconClassName: `${iconClass} text-green-600`,
//     title: "Quality Assured",
//     description: "All engines tested and warranted",
//   },
// ];
//
// // Trust badges
// const trustIndicators = [
//   "Free Quotes",
//   "No Obligation",
//   "Expert Support",
//   "Nationwide Delivery",
// ];
//
// const EngineDealsCTA: React.FC<{ brand: string }> = ({ brand: brand }) => {
//   const { brandName } = data[brand];
//   return (
//     <Container
//       className="py-16 relative overflow-hidden text-gray-900"
//       id="last-cta"
//       data-aos="fade-up"
//       data-aos-delay="0"
//       data-aos-duration="500"
//       data-aos-once="true"
//     >
//       <div className="text-center space-y-8">
//         {/* Heading */}
//         <div
//           className="max-w-5xl mx-auto"
//           data-aos="fade-up"
//           data-aos-delay="50"
//           data-aos-duration="500"
//           data-aos-once="true"
//         >
//           <Heading>
//             Compare Prices & Get the Best{" "}
//             <span className="text-neon-red">{brandName} Engine Deals</span> Now!
//           </Heading>
//           <Paragraph>
//             At <strong>Engine Market</strong>, we offer the best prices and
//             availability for all {brandName} engines. Whether you&apos;re
//             looking for a new, used, or reconditioned engine, we&apos;ve got you
//             covered. Don&apos;t wait, request a quote today and get your{" "}
//             {brandName} back on the road in no time!
//           </Paragraph>
//         </div>
//
//         {/* Feature Cards */}
//         <div
//           className="grid gap-6 md:grid-cols-3"
//           data-aos="fade-up"
//           data-aos-delay="100"
//           data-aos-duration="500"
//           data-aos-once="true"
//         >
//           {features.map(({ Icon, iconClassName, title, description }, i) => (
//             <FeatureCard
//               key={i}
//               icon={<Icon className={iconClassName} />}
//               title={title}
//               description={description}
//               aosDelay={100 + i * 80}
//             />
//           ))}
//         </div>
//
//         {/* CTA Buttons */}
//         <div
//           className="flex flex-col gap-4 justify-center items-center"
//           data-aos="fade-up"
//           data-aos-delay="180"
//           data-aos-duration="500"
//           data-aos-once="true"
//         >
//           {/* Primary Button */}
//           <Button
//             size="lg"
//             className="bg-neon-red hover:bg-transparent hover:text-neon-red border border-neon-red text-white font-semibold px-8 py-3 text-lg transition-all duration-300 group"
//           >
//             <Link href="#cta2">Request a Quote Now!</Link>
//             <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//           </Button>
//
//           {/* Secondary Buttons */}
//           <div className="flex gap-4">
//             {[
//               { icon: Phone, label: "Call Now" },
//               { icon: Mail, label: "Email Us" },
//               { icon: FaWhatsapp, label: "WhatsApp" },
//             ].map(({ icon: Icon, label }, i) => (
//               <Button
//                 key={label}
//                 variant="outline"
//                 size="lg"
//                 className="border border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold px-6 py-3 bg-white"
//                 data-aos="fade-up"
//                 data-aos-delay={200 + i * 60} // Very tight delay
//                 data-aos-duration="500"
//                 data-aos-once="true"
//               >
//                 <Icon className="mr-2 h-4 w-4" />
//                 {label}
//               </Button>
//             ))}
//           </div>
//         </div>
//
//         {/* Trust Indicators */}
//         <div
//           className="pt-8 border-t border-gray-300"
//           data-aos="fade-up"
//           data-aos-delay="300"
//           data-aos-duration="500"
//           data-aos-once="true"
//         >
//           <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
//             {trustIndicators.map((text, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-2"
//                 data-aos="fade-up"
//                 data-aos-delay={320 + i * 50} // Super subtle
//                 data-aos-duration="500"
//                 data-aos-once="true"
//               >
//                 <CheckCircle className="h-4 w-4 text-green-600" />
//                 <span className="text-sm">{text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };
//
// export default EngineDealsCTA;

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Container from "@/components/Container";
// import { ArrowRight, Phone, Mail, Clock, CheckCircle } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import Heading from "@/components/Heading";
// import Paragraph from "@/components/Paragraph";
// import Link from "next/link";
// import { data } from "../../../data/brands";
// import * as motion from "motion/react-client";
//
// const FeatureCard = ({
//   icon,
//   title,
//   description,
//   delay = 0,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   delay?: number;
// }) => (
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={{
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5, delay },
//       },
//     }}
//   >
//     <Card className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300">
//       <CardContent className="py-12 text-center">
//         {icon}
//         <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>
//       </CardContent>
//     </Card>
//   </motion.div>
// );
//
// const iconClass = "h-8 w-8 mx-auto mb-3";
//
// const features = [
//   {
//     Icon: CheckCircle,
//     iconClassName: `${iconClass} text-green-600`,
//     title: "Best Prices Guaranteed",
//     description: "Competitive pricing on all engine types",
//   },
//   {
//     Icon: Clock,
//     iconClassName: `${iconClass} text-blue-600`,
//     title: "Fast Delivery",
//     description: "Quick turnaround times nationwide",
//   },
//   {
//     Icon: CheckCircle,
//     iconClassName: `${iconClass} text-green-600`,
//     title: "Quality Assured",
//     description: "All engines tested and warranted",
//   },
// ];
//
// // Trust badges
// const trustIndicators = [
//   "Free Quotes",
//   "No Obligation",
//   "Expert Support",
//   "Nationwide Delivery",
// ];
//
// const fadeInUp = (delay = 0) => ({
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, delay },
//   },
// });
//
// const MotionDiv = motion.div;
//
// const EngineDealsCTA: React.FC<{ brand: string }> = ({ brand }) => {
//   const { brandName } = data[brand];
//
//   return (
//     <Container
//       className="py-16 relative overflow-hidden text-gray-900"
//       id="last-cta"
//     >
//       <MotionDiv
//         className="text-center space-y-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp()}
//       >
//         {/* Heading */}
//         <MotionDiv variants={fadeInUp(0.05)}>
//           <Heading>
//             Compare Prices & Get the Best{" "}
//             <span className="text-neon-red">{brandName} Engine Deals</span> Now!
//           </Heading>
//           <Paragraph>
//             At <strong>Engine Market</strong>, we offer the best prices and
//             availability for all {brandName} engines. Whether you&apos;re
//             looking for a new, used, or reconditioned engine, we&apos;ve got you
//             covered. Don&apos;t wait, request a quote today and get your{" "}
//             {brandName} back on the road in no time!
//           </Paragraph>
//         </MotionDiv>
//
//         {/* Feature Cards */}
//         <MotionDiv
//           className="grid gap-6 md:grid-cols-3"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.08,
//               },
//             },
//           }}
//         >
//           {features.map(({ Icon, iconClassName, title, description }, i) => (
//             <FeatureCard
//               key={i}
//               icon={<Icon className={iconClassName} />}
//               title={title}
//               description={description}
//               delay={0.1 + i * 0.08}
//             />
//           ))}
//         </MotionDiv>
//
//         {/* CTA Buttons */}
//         <MotionDiv
//           variants={fadeInUp()}
//           custom={0.18}
//           className="flex flex-col gap-4 justify-center items-center"
//         >
//           {/* Primary Button */}
//           <Button
//             size="lg"
//             className="bg-neon-red hover:bg-transparent hover:text-neon-red border border-neon-red text-white font-semibold px-8 py-3 text-lg transition-all duration-300 group"
//           >
//             <Link href="#cta2" className="flex items-center">
//               Request a Quote Now!
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//
//           {/* Secondary Buttons */}
//           <div className="flex gap-4">
//             {[
//               { icon: Phone, label: "Call Now" },
//               { icon: Mail, label: "Email Us" },
//               { icon: FaWhatsapp, label: "WhatsApp" },
//             ].map(({ icon: Icon, label }, i) => (
//               <MotionDiv
//                 key={label}
//                 variants={fadeInUp()}
//                 custom={0.2 + i * 0.06}
//               >
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   className="border border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold px-6 py-3 bg-white"
//                 >
//                   <Icon className="mr-2 h-4 w-4" />
//                   {label}
//                 </Button>
//               </MotionDiv>
//             ))}
//           </div>
//         </MotionDiv>
//
//         {/* Trust Indicators */}
//         <MotionDiv
//           className="pt-8 border-t border-gray-300"
//           variants={fadeInUp()}
//           custom={0.3}
//         >
//           <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
//             {trustIndicators.map((text, i) => (
//               <MotionDiv
//                 key={i}
//                 className="flex items-center gap-2"
//                 variants={fadeInUp()}
//                 custom={0.32 + i * 0.05}
//               >
//                 <CheckCircle className="h-4 w-4 text-green-600" />
//                 <span className="text-sm">{text}</span>
//               </MotionDiv>
//             ))}
//           </div>
//         </MotionDiv>
//       </MotionDiv>
//     </Container>
//   );
// };
//
// export default EngineDealsCTA;
import React, { memo } from "react";
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

export default memo(EngineDealsCTA);
