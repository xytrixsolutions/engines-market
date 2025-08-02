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
import FAQSection from "@/components/FAQs";
import { data } from "./data/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    brand: string;
  }>;
}

const Page = async ({ params }: PageProps): Promise<JSX.Element> => {
  const brand = (await params).brand.toLowerCase();

  if (!data[brand]) notFound();
  const { carImages, carModelNames, faqs } = data[brand];

  return (
    <>
      <Hero1 carImages={carImages} carModelNames={carModelNames} />
      <EngineGuide brand={brand} />
      <WhyChoose brand={brand} />
      <EngineTablesTabs brand={brand} />
      <EngineProblemsSection brand={brand} />
      <EngineProsCons brand={brand} />
      <TroubleshootingGuide brand={brand} />
      <ReplacementCostsTable brand={brand} />
      <PerformanceUpgrades brand={brand} />
      <EngineDealsCTA brand={brand} />
      <FAQSection faqs={faqs} />
    </>
  );
};

// ISR Configuration
export const revalidate = 86400; // Revalidate every 24 hours

// Generate static paths at build time
export async function generateStaticParams() {
  return Object.keys(data).map((brand) => ({
    brand,
  }));
}

export default Page;
