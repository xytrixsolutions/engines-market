/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import React from "react";
import * as motion from "motion/react-client";

interface WrapperProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  dark?: boolean;
  useMotion?: boolean;
  variants?: boolean;
}

const Paragraph = ({
  children,
  className,
  dark,
  useMotion,
  variants,
  ...props
}: WrapperProps) => {
  const Component = useMotion ? motion.p : "p";

  return (
    <Component
      className={cn(
        "text-lg mx-auto mb-8 leading-relaxed",
        dark ? "text-charcoal-gray-muted" : "text-muted-foreground",
        className,
      )}
      {...(variants ? { variants } : {})}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

export default Paragraph;
