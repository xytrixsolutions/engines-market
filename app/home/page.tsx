import TestimonialSection from "@/components/Testimonials";
import Hero1 from "../../components/Hero1";
import Hero3 from "../../components/Hero3";
import HowItWorks from "./components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import TrustBadges from "./components/TrustBadges";
import BlogCards from "./components/Blog";
import FAQSection, { FAQ } from "@/components/FAQs";
import EngineDealSection from "./components/EngineDealSection";
import carImagesData from "./data/carImages.json";
import carModelNamesData from "./data/carModelNames.json";
import faqsData from "./data/faqs.json";
import SearchNav from "@/components/SearchNav";

export default function Home() {
  const carImages: string[] = carImagesData;
  const carModelNames: string[] = carModelNamesData;
  const faqs: FAQ[] = faqsData;

  const navItems = [
    { label: "Find the Best Engine", id: "best-engine" },
    { label: "Explore By Manufacturer", id: "explore-by-manufacturer" },
    { label: "Why Choose Engine Market", id: "why-choose-engine-market" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Customer Testimonials", id: "customer-testimonials" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Featured Blog Post", id: "blog" },
    { label: "Frequently Asked Questions", id: "faqs" },
  ];


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
