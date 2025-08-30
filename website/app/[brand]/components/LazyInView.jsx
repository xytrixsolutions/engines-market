"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function LazyInView({ children = <></>, minHeight = 600 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (inView) setHasMounted(true);
  }, [inView]);

  // Trigger AOS refresh when component mounts
  useEffect(() => {
    if (hasMounted && typeof window !== "undefined" && window.AOS) {
      setTimeout(() => window.AOS.refresh(), 100);
    }
  }, [hasMounted]);

  return (
    <div ref={ref}>
      {hasMounted ? (
        children
      ) : (
        <div className="flex items-center justify-center" style={{ minHeight }}>
          <div className="text-muted-foreground">Loading content...</div>
        </div>
      )}
    </div>
  );
}
