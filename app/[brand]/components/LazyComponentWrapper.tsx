/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect, FC } from "react";
import Container from "@/components/Container";
import { ComponentPropsWithoutRef } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<typeof Container> {
  minHeight?: number;
}

const LazyComponentWrapper: FC<ContainerProps> = ({
  children,
  minHeight = 600,
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (inView) setHasMounted(true);
  }, [inView]);

  useEffect(() => {
    if (hasMounted && typeof window !== "undefined" && (window as any).AOS) {
      setTimeout(() => (window as any).AOS.refresh(), 100);
    }
  }, [hasMounted]);

  return (
    <div ref={ref}>
      <Container {...props}>
        {hasMounted ? (
          children
        ) : (
          <div
            className="flex items-center justify-center"
            style={{ minHeight }}
          >
            <div className="text-muted-foreground">Loading content...</div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default LazyComponentWrapper;
