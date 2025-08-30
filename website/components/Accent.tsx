import { cn } from "@/lib/utils"; // adjust path as needed
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Accent = ({ children, className, ...props }: WrapperProps) => {
  return (
    <span
      className={cn("text-neon-red font-extrabold mx-2", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Accent;
