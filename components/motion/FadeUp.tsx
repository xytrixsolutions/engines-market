"use client";
import { motion } from "motion/react";
interface FadeUpProps {
  children: React.ReactNode; // Define the type of children
  delay?: number;
  duration?: number;
  initialY?: number;
  whileInViewY?: number;
}
export default function FadeUp({
  delay = 0,
  duration = 0.5,
  children,
  initialY = 20,
  whileInViewY = 0,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: whileInViewY }}
      viewport={{ once: true }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}
export const fadeUp = (delay = 0.5) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: delay },
});
