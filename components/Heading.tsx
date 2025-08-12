/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import React from "react";
import * as motion from "motion/react-client";

interface WrapperProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  dark?: boolean;
  useMotion?: boolean;
  variants?: any;
}

const Heading = ({
  children,
  className,
  dark,
  useMotion,
  variants,
  ...props
}: WrapperProps) => {
  const Component = useMotion ? motion.h1 : "h1";

  return (
    <Component
      className={cn(
        "text-3xl md:text-4xl font-bold leading-tight mb-6",
        dark ? "text-charcoal-gray-muted" : "text-charcoal-gray",
        className,
      )}
      {...(variants ? { variants } : {})}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

export default Heading;
