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

export default function Home() {
  const carImages: string[] = carImagesData;
  const carModelNames: string[] = carModelNamesData;
  const faqs: FAQ[] = faqsData;

  return (
    <>
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
