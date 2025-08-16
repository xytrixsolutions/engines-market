// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { CiStar } from "react-icons/ci";
// import Container from "@/components/Container";
// import * as motion from "motion/react-client";
// import { Easing } from "motion/react";
//
// export default function TestimonialSection() {
//   const testimonials = [
//     {
//       name: "Freddie Deckow",
//       role: "Lead Marketing Administrator",
//       image: "/testimonials/Ellipse 6.png",
//       text: "Fast, reliable, and the best prices online! I saved over £200 compared to a local supplier.",
//       rating: 5,
//     },
//     {
//       name: "Cameron Lehner",
//       role: "Global Research Strategist",
//       image: "/testimonials/Ellipse 6 (1).png",
//       text: "Got multiple quotes in hours and found the perfect engine for my Audi A4. Highly recommended!",
//       rating: 4,
//     },
//     {
//       name: "Garry Medhurst",
//       role: "Principal Quality Developer",
//       image: "/testimonials/Ellipse 6 (2).png",
//       text: "The service was exceptional from start to finish. Quick delivery and the part was in perfect condition.",
//       rating: 3,
//     },
//     {
//       name: "Sophie Reynolds",
//       role: "Senior Operations Manager",
//       image: "/testimonials/Ellipse 6 (3).png",
//       text: "Saved both time and money with this service. Will definitely use again for future car parts needs.",
//       rating: 2,
//     },
//   ];
//
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(4);
//   const carouselRef = useRef(null);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setCardsPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setCardsPerView(2);
//       } else {
//         setCardsPerView(4);
//       }
//     };
//
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//
//   useEffect(() => {
//     const startCarousel = () => {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
//         );
//       }, 3000);
//     };
//
//     startCarousel();
//
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [testimonials.length]);
//
//   const getVisibleTestimonials = () => {
//     const visible = [];
//     for (let i = 0; i < cardsPerView; i++) {
//       const index = (currentIndex + i) % testimonials.length;
//       visible.push(testimonials[index]);
//     }
//     return visible;
//   };
//
//   const visibleTestimonials = getVisibleTestimonials();
//
//   return (
//     <Container id="customer-testimonials">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" as Easing }}
//         className="mb-12 text-center"
//       >
//         <div className="inline-flex items-center gap-3 mb-5">
//           <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray">
//             Customer <span className="text-neon-red">Testimonials</span> &{" "}
//             <span className="text-neon-red">Trust Signals</span>
//           </h2>
//           <div className="flex">
//             <Image
//               src={"/testimonials/Group.png"}
//               alt={`testimonial`}
//               width={50}
//               height={50}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </motion.div>
//
//       {/* Carousel Container */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" as Easing }}
//         className="relative overflow-hidden"
//         ref={carouselRef}
//       >
//         {/* Testimonial Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
//           {visibleTestimonials.map((testimonial, index) => (
//             <div
//               key={`${testimonial.name}-${index}`}
//               className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* Card Header */}
//               <div className="bg-black text-white px-4 py-5 flex items-center justify-between">
//                 <span className="text-sm font-medium">Testimonial</span>
//                 <div className="rounded-full flex items-center justify-center">
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) =>
//                       i < testimonial.rating ? (
//                         <FaStar
//                           key={i}
//                           className="w-5 h-5 text-white fill-white"
//                         />
//                       ) : (
//                         <CiStar key={i} className="w-5 h-5 text-white" />
//                       ),
//                     )}
//                   </div>
//                 </div>
//               </div>
//
//               {/* Card Content */}
//               <div className="p-6">
//                 <div className="flex justify-center mb-4">
//                   <div className="w-50 h-50 rounded-full overflow-hidden">
//                     <Image
//                       src={testimonial.image || "/placeholder.svg"}
//                       alt={`${testimonial.name} testimonial`}
//                       width={150}
//                       height={150}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//                 <div className="text-center mb-4">
//                   <h3 className="font-semibold text-black text-lg mb-1">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                 </div>
//                 <p className="text-gray-700 text-sm leading-relaxed text-center">
//                   {testimonial.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </Container>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Container from "@/components/Container";
import * as motion from "motion/react-client";
import { Easing } from "motion/react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Freddie Deckow",
      role: "Lead Marketing Administrator",
      image: "/testimonials/Ellipse 6.png",
      text: "Fast, reliable, and the best prices online! I saved over £200 compared to a local supplier.",
      rating: 5,
    },
    {
      name: "Cameron Lehner",
      role: "Global Research Strategist",
      image: "/testimonials/Ellipse 6 (1).png",
      text: "Got multiple quotes in hours and found the perfect engine for my Audi A4. Highly recommended!",
      rating: 4,
    },
    {
      name: "Garry Medhurst",
      role: "Principal Quality Developer",
      image: "/testimonials/Ellipse 6 (2).png",
      text: "The service was exceptional from start to finish. Quick delivery and the part was in perfect condition.",
      rating: 3,
    },
    {
      name: "Sophie Reynolds",
      role: "Senior Operations Manager",
      image: "/testimonials/Ellipse 6 (3).png",
      text: "Saved both time and money with this service. Will definitely use again for future car parts needs.",
      rating: 2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const carouselRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
        );
      }, 3000);
    };

    startCarousel();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <Container id="customer-testimonials">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as Easing }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-3 mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray">
            Customer <span className="text-neon-red">Testimonials</span> &{" "}
            <span className="text-neon-red">Trust Signals</span>
          </h2>
          <div className="flex">
            <Image
              src={"/testimonials/Group.png"}
              alt={`testimonial`}
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Carousel Container - Fixed overflow and height issues */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as Easing }}
        className="relative" // Removed overflow-hidden
        ref={carouselRef}
      >
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full" // Added flex layout for equal heights
            >
              {/* Card Header */}
              <div className="bg-black text-white px-4 py-5 flex items-center justify-between flex-shrink-0">
                <span className="text-sm font-medium">Testimonial</span>
                <div className="rounded-full flex items-center justify-center">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) =>
                      i < testimonial.rating ? (
                        <FaStar
                          key={i}
                          className="w-5 h-5 text-white fill-white"
                        />
                      ) : (
                        <CiStar key={i} className="w-5 h-5 text-white" />
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Card Content - Made flexible to fill remaining space */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    {" "}
                    {/* Fixed image container size */}
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} testimonial`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mb-4 flex-shrink-0">
                  <h3 className="font-semibold text-black text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed text-center flex-1">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
