// // src/components/AOSInit.tsx
// "use client";
//
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
//
// export default function AOSInit() {
//   useEffect(() => {
//     AOS.init({
//       // duration: 1000,
//       // once: true,
//       duration: 500,
//       easing: "ease-out-quart", // Smooth & fast
//       once: true,
//       offset: 50,
//     });
//   }, []);
//
//   return null;
// }
// app/components/AOSWrapper.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // refresh after short delay to ensure DOM is ready
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return null;
};

export default AOSWrapper;
