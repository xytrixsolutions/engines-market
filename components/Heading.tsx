import { cn } from "@/lib/utils"; // adjust path as needed
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Heading = ({ children, className, ...props }: WrapperProps) => {
  return (
    <h1
      className={cn(
        "text-3xl md:text-4xl text-gray-700 font-bold leading-tight mb-6",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
