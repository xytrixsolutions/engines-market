import React from "react";

interface GradientBorderWrapperProps {
  children: React.ReactNode;
  variant?: "linear" | "conic";
  className?: string;
}

const GradientBorderWrapper: React.FC<GradientBorderWrapperProps> = ({
  children,
  variant = "linear",
  className = "",
}) => {
  const getGradientClasses = () => {
    if (variant === "conic") {
      return "p-[2.5px] rounded-xl bg-[conic-gradient(at_top_left,_#ff003c_0%,_#ff3c00_25%,_#ff003c_50%,_#ff3c00_75%,_#ff003c_100%)] shadow-[0_0_12px_2px_rgba(255,0,60,0.5)]";
    }

    // Default linear variant
    return "p-[2px] rounded-xl bg-gradient-to-r from-[#ff003c] via-[#ff3c00] to-[#ff003c]";
  };

  return (
    <div className={`${getGradientClasses()} ${className}`}>{children}</div>
  );
};

export default GradientBorderWrapper;
