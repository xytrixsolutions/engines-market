import { cn } from "@/lib/utils"; // adjust path as needed
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Paragraph = ({ children, className, ...props }: WrapperProps) => {
  return (
    <p
      className={cn(
        "text-lg text-muted-foreground mx-auto mb-8 leading-relaxed",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
