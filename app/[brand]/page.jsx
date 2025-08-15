import FAQSection from "@/components/FAQs";
import SearchNav from "@/components/SearchNav";
import BrandSchema from "@/components/schema";
import { data } from "@/data/brands";
import Head from "next/head";
import { notFound } from "next/navigation";
import { memo, use } from "react";
import Hero1 from "../../components/Hero1";
import EngineDealsCTA from "./components/EngineDealsCTA";
import EngineGuide from "./components/EngineGuide";
import EngineProblemsSection from "./components/EngineProblemsSection";
import EngineProsCons from "./components/EngineProsCons";
import EngineTablesTabs from "./components/EngineTablesTabs";
import PerformanceUpgrades from "./components/PerformanceUpgrades";
import ReplacementCostsTable from "./components/ReplacementCostsTable";
import TroubleshootingGuide from "./components/TroubleShoot";
import WhyChoose from "./components/WhyChoose";
import { ClientWrapper } from "./components/ClientWrapper";
import AOSWrapper from "@/components/AOSInit";
import * as motion from "motion/react-client";

export async function generateMetadata({ params }) {
  const brand = (await params).brand.toLowerCase();
  const brandData = data[brand];

  if (!brandData) {
    return {
      title: "Brand Not Found",
      description: "The requested brand does not exist",
    };
  }

  // Use brand-specific metadata if available, fallback to generated
  return {
    title: brandData.metadata?.title || `${brandData.brandName} Engines`,
    description:
      brandData.metadata?.description ||
      `Complete guide to ${brandData.brandName} engines`,
    keywords: brandData.metadata?.keywords || [
      `${brandData.brandName} engines`,
      `${brandData.brandName} engine specs`,
    ],
  };
}

const Page = ({ params }) => {
  const brand = use(params).brand.toLowerCase();
  if (!data[brand]) notFound();
  const { carImages, carModelNames, faqs, brandName } = data[brand];

  const navItems = [
    { label: "Engine Guide", id: "engine-guide" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Models, Engine Code & Compatibility Table", id: "tables" },
    { label: "Common Engine Problems", id: "engine-problems" },
    { label: "Pros & Cons", id: "pros-cons" },
    { label: "Troubleshooting Guide", id: "troubleshooting-guide" },
    { label: "Engine Replacement Cost", id: "engine-replacement-cost" },
    {
      label: "Performance Upgrades & Modifications",
      id: "performance-upgrades-modifications",
    },
    { label: "Frequently Asked Questions", id: "faqs" },
  ];

  return (
    <>
      <AOSWrapper />
      <Head>
        <BrandSchema brand={brand} />
      </Head>
      {/* <ClientWrapper /> */}
      <SearchNav navItems={navItems} />
      <Hero1
        carImages={carImages}
        carModelNames={carModelNames}
        brandName={brandName}
      />
      <EngineGuide brand={brand} />
      <WhyChoose brand={brand} />
      <div
        style={{
          contain: "layout",
        }}
      >
        <EngineTablesTabs brand={brand} />
      </div>
      <EngineProblemsSection brand={brand} />
      <EngineProsCons brand={brand} />
      <TroubleshootingGuide brand={brand} />
      <ReplacementCostsTable brand={brand} />
      <PerformanceUpgrades brand={brand} />
      <EngineDealsCTA brand={brand} />
      <FAQSection faqs={faqs} brandName={brandName} />
    </>
  );
};

// ISR Configuration
// export const revalidate = 86400; // Revalidate every 24 hours

// Generate static paths at build time
export async function generateStaticParams() {
  return Object.keys(data).map((brand) => ({
    brand,
  }));
}

export default memo(Page);
