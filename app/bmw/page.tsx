import { JSX } from "react";
import Hero1 from "../../components/Hero1";
import WhyChoose from "./components/WhyChoose";
import EngineGuide from "./components/EngineGuide";
import EngineTablesTabs from "./components/EngineTablesTabs";
import EngineProblemsSection from "./components/EngineProblemsSection";
import EngineProsCons from "./components/EngineProsCons";
import TroubleshootingGuide from "./components/TroubleShoot";
import PerformanceUpgrades from "./components/PerformanceUpgrades";
import ReplacementCostsTable from "./components/ReplacementCostsTable";
import EngineDealsCTA from "./components/EngineDealsCTA";
import FAQSection, { FAQ } from "@/components/FAQs";
import carImagesData from "./data/carImages.json";
import carModelNamesData from "./data/carModelNames.json";
import faqsData from "./data/faqs.json";

const Page = (): JSX.Element => {
  const carImages: string[] = carImagesData;
  const carModelNames: string[] = carModelNamesData;
  const faqs: FAQ[] = faqsData;

  return (
    <>
      <Hero1 carImages={carImages} carModelNames={carModelNames} />
      <WhyChoose />
      <EngineGuide />
      <EngineTablesTabs />
      <EngineProblemsSection />
      <EngineProsCons />
      <TroubleshootingGuide />
      <ReplacementCostsTable />
      <PerformanceUpgrades />
      <EngineDealsCTA />
      <FAQSection faqs={faqs} />
    </>
  );
};
export default Page;
