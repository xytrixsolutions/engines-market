// src/components/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "red" | "green";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "red",
  ...props
}) => {
  const getVariantStyles = () => {
    if (variant === "green") {
      return "relative rounded-full font-semibold border-2 border-[#057532] bg-gradient-to-r from-[#057532] to-[#49B34B] text-white px-8 py-3 hover:border-[#057532] hover:text-[#057532] transition-all duration-700 overflow-hidden before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700";
    }

    // Default red variant
    return "relative rounded-full font-semibold border-2 border-neon-red bg-gradient-to-r from-[#b30529] via-[#ff0033] to-[#b30529] text-white px-8 py-3 hover:border-neon-red hover:text-[#ff0033] transition-all duration-700 overflow-hidden before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700";
  };

  const baseStyles = getVariantStyles();

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      <span className="relative z-10 inline-flex items-center">{children}</span>
    </button>
  );
};

export default Button;
