"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { usePathname } from "next/navigation";

const AOSWrapper = () => {
  // const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // useEffect(() => {
  //   // Runs every time the route changes
  //   AOS.refresh();
  // }, [pathname]);

  return null;
};

export default AOSWrapper;
