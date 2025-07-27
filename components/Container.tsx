import { cn } from "@/lib/utils"; // adjust path as needed
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div
      className={cn("w-11/12 lg:w-9/12 xl:w-8/12 mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
