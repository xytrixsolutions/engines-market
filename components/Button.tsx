// src/components/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  const baseStyles =
    "rounded-full font-semibold border-2 border-neon-red bg-gradient-to-r from-[#b30529] via-[#ff0033] to-[#b30529] text-white px-8 py-3 hover:from-white hover:via-white hover:to-white hover:border-[#ff0033] hover:text-[#ff0033] transition-all duration-700 ";

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
