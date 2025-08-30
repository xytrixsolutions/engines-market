import TestimonialSection from "@/app/components/Testimonials";
import Hero1 from "@/components/Hero1";
import Hero3 from "@/components/Hero3";
import HowItWorks from "./components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import TrustBadges from "./components/TrustBadges";
import BlogCards from "./components/Blog";
import FAQSection from "@/components/FAQs";
import EngineDealSection from "./components/EngineDealSection";
import SearchNav from "@/components/SearchNav";
import home from "../data/home";

export default function Home() {
  const { carImages, carModelNames, faqs, navItems } = home;
  return (
    <>
      <SearchNav navItems={navItems} />
      <Hero1 carImages={carImages} carModelNames={carModelNames} />
      <EngineDealSection />
      <Hero3 />
      <WhyChoose />
      <HowItWorks />
      <TestimonialSection />
      <TrustBadges />
      <BlogCards />
      <FAQSection faqs={faqs} />
    </>
  );
}
