import { JSX } from "react";
import Hero1 from "../../components/Hero1";
import WhyChoose from "./components/WhyChoose";
import EngineGuide from "./components/engine-guide";
import EngineTablesTabs from "./components/EngineTablesTabs";
import EngineProblemsSection from "./components/EngineProblemsSection";
import EngineProsCons from "./components/EngineProsCons";
import TroubleshootingGuide from "./components/TroubleShoot";
import PerformanceUpgrades from "./components/PerformanceUpgrades";
import EngineDealsCTA from "./components/EngineDealsCTA";

const Page = (): JSX.Element => {
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
      <WhyChoose />
      <EngineGuide />
      <EngineTablesTabs />
      <EngineProblemsSection />
      <EngineProsCons />
      <TroubleshootingGuide />
      <PerformanceUpgrades />
      <EngineDealsCTA />
    </>
  );
};
export default Page;
