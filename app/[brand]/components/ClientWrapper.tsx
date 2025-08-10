"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

let aosInited = false;

export function ClientWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    if (!aosInited) {
      AOS.init({
        duration: 800,
        once: true,
      });
      aosInited = true;
    } else {
      // Use refreshHard to detect new elements after route change
      setTimeout(() => {
        AOS.refreshHard();
      }, 0);
    }
  }, [pathname]);

  return null;
}

export default ClientWrapper;
