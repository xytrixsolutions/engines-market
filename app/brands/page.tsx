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
import { data } from "./types/data";

const Page = (): JSX.Element => {
  const carImages: string[] = data[0].carImages;
  const carModelNames: string[] = data[0].carModelNames;
  const faqs: FAQ[] = data[0].faqs;
  return (
    <>
      <Hero1 carImages={carImages} carModelNames={carModelNames} />
      <EngineGuide />
      <WhyChoose />
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
