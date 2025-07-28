import TestimonialSection from "@/components/Testimonials";
import Hero1 from "../../components/Hero1";
import Hero3 from "../../components/Hero3";
import HowItWorks from "./components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import TrustBadges from "./components/TrustBadges";
import BlogCards from "./components/Blog";
import FAQSection from "@/components/FAQs";
import EngineDealSection from "./components/EngineDealSection";

export default function Home() {
  const carImages = [
    "/banners/banner-1.webp",
    "/banners/banner-2.webp",
    "/banners/banner-3.webp",
    "/banners/banner-4.webp",
    "/banners/banner-5.webp",
  ];

  return (
    <>
      <Hero1 carImages={carImages} />
      <EngineDealSection />
      <Hero3 />
      <WhyChoose />
      <HowItWorks />
      <TestimonialSection />
      <TrustBadges />
      <BlogCards />
      <FAQSection />
    </>
  );
}
