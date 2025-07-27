import { JSX } from "react";
import Hero1 from "../../components/Hero1";
import WhyChoose from "./components/why-choose";
import EngineGuide from "./components/engine-guide";
import EngineTablesTabs from "./components/EngineTablesTabs";
// import Hero3 from "../../components/Hero3";

const Page = (): JSX.Element => {
  const carImages = [
    "/banners/banner-2.png",
    "/banners/banner-2.png",
    "/banners/banner-2.png",
    "/banners/banner-2.png",
  ];

  return (
    <>
      <Hero1 carImages={carImages} />
      {/* <Hero3 /> */}
      <WhyChoose />
      <EngineGuide />
      <EngineTablesTabs />
    </>
  );
};
export default Page;
