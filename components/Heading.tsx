import { cn } from "@/lib/utils"; // adjust path as needed
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  dark?: boolean;
}

const Heading = ({ children, className, dark, ...props }: WrapperProps) => {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl font-bold leading-tight mb-6",
        dark ? "text-charcoal-gray-muted" : "text-charcoal-gray",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
