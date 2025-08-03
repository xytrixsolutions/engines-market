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
import SearchNav from "@/components/SearchNav";

interface PageProps {
  params: Promise<{
    brand: string;
  }>;
}

const Page = async ({ params }: PageProps): Promise<JSX.Element> => {
  const brand = (await params).brand.toLowerCase();

  if (!data[brand]) notFound();
  const { carImages, carModelNames, faqs } = data[brand];

  const navItems = [
    { label: "Engine Guide", id: "engine-guide" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Models, Engine Code & Compatibility Table", id: "tables" },
    { label: "Common Engine Problems", id: "engine-problems" },
    { label: "Pros & Cons", id: "pros-cons" },
    { label: "Troubleshooting Guide", id: "troubleshooting-guide" },
    { label: "Engine Replacement Cost", id: "engine-replacement-cost" },
    { label: "Performance Upgrades & Modifications", id: "performance-upgrades-modifications" },
    { label: "Frequently Asked Questions", id: "faqs" },
  ];

  return (
    <>
      <SearchNav navItems={navItems} />
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
