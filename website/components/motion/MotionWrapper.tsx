import * as motion from "motion/react-client";
import { ElementType, ReactNode } from "react";

type MotionWrapperProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  animation?: object;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export default function MotionWrapper<T extends ElementType = "div">({
  as,
  children,
  className,
  animation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },
  ...rest
}: MotionWrapperProps<T>) {
  const Component = as || "div";
  const MotionComponent = motion.create(Component as ElementType);

  return (
    <MotionComponent {...animation} className={className} {...rest}>
      {children}
    </MotionComponent>
  );
}
