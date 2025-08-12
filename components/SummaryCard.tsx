import React from "react";
import { HelpCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react/jsx-dev-runtime";
import * as motion from "motion/react-client";

interface SummaryCardProps {
  title?: string;
  content: string;
  contact?: JSX.Element;
  variant?: "blue" | "card" | "green" | "performance";
  icon?: React.ReactNode;
  className?: string;
  useMotion?: boolean;
}

const motionProps = {
  initial: { opacity: 0, y: 25 },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transition: { duration: 0.6, ease: "easeOut" as any }, // fix
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const SummaryCard: React.FC<SummaryCardProps> = ({
  title = "Need Help Choosing?",
  content,
  contact,
  variant = "blue",
  icon,
  useMotion,
  className = "",
  ...opts
}) => {
  // Default icons based on variant
  const getDefaultIcon = () => {
    switch (variant) {
      case "green":
        return (
          <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
        );
      case "performance":
        return (
          <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
        );
      case "card":
        return (
          <HelpCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
        );
      default:
        return (
          <HelpCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
        );
    }
  };

  // Get card styling based on variant
  const getCardStyling = () => {
    switch (variant) {
      case "green":
        return "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200";
      case "performance":
        return "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200";
      case "card":
        return "bg-blue-50 border-blue-200";
      default:
        return "bg-blue-50 border-blue-200";
    }
  };

  // Get text styling based on variant
  const getTextStyling = () => {
    switch (variant) {
      case "green":
        return {
          title: "text-xl font-semibold text-green-800",
          content: "text-green-700 leading-relaxed",
        };
      case "performance":
        return {
          title: "text-xl font-semibold text-blue-800",
          content: "text-blue-700 leading-relaxed",
        };
      case "card":
        return {
          title: "font-semibold text-blue-900 mb-2",
          content: "text-sm text-charcoal-gray",
        };
      default:
        return {
          title: "text-blue-700 font-bold text-lg mb-2",
          content: "text-black text-base font-normal",
        };
    }
  };

  // Motion wrapper element: motion.div or fragment fallback
  const MotionWrapper: React.FC<React.PropsWithChildren> = ({ children }) =>
    useMotion ? (
      <motion.div {...motionProps}>{children}</motion.div>
    ) : (
      <>{children}</>
    );

  const cardIcon = icon || getDefaultIcon();
  const cardStyling = getCardStyling();
  const textStyling = getTextStyling();

  // All variants now use the same card layout with consistent styling
  if (variant === "card") {
    return (
      <MotionWrapper>
        <Card
          className={`mt-5 mb-5 rounded-xl shadow-lg border ${cardStyling} ${className}`}
          {...opts}
        >
          <CardContent className="py-0">
            <div className="flex items-start gap-3">
              {cardIcon}
              <div>
                <h3 className={textStyling.title}>{title}</h3>
                <p className={textStyling.content}>
                  {content}
                  {contact && contact}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </MotionWrapper>
    );
  }

  // Summary card variants (green, performance, etc.)
  if (variant === "green" || variant === "performance") {
    return (
      <MotionWrapper>
        <Card
          className={`mt-12 rounded-xl shadow-lg border ${cardStyling} ${className}`}
          data-aos="fade-up"
        >
          <CardContent className="">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{cardIcon}</div>
              <div className="space-y-2">
                <h3 className={textStyling.title}>{title}</h3>
                <p className={textStyling.content}>{content}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </MotionWrapper>
    );
  }

  // Default blue variant
  return (
    <MotionWrapper>
      <div
        className={`w-full bg-blue-50 border-t border-b border-blue-200 py-10 my-12 rounded-xl shadow-lg ${className}`}
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className={textStyling.title}>{title}</div>
          <div className={textStyling.content}>{content}</div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default SummaryCard;
