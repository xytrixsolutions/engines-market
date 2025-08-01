import { cn } from "@/lib/utils"; // adjust path as needed
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  dark?: boolean;
}

const Paragraph = ({ children, className, dark, ...props }: WrapperProps) => {
  return (
    <p
      className={cn(
        "text-lg mx-auto mb-8 leading-relaxed",
        dark ? "text-charcoal-gray-muted" : "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
