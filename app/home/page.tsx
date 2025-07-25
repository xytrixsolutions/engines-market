import Hero1 from "../../components/Hero1";
import Hero3 from "../../components/Hero3";

export default function Home() {
  const carImages = [
    "/banners/banner-1.png",
    "/banners/banner-1.png",
    "/banners/banner-1.png",
    "/banners/banner-1.png",
  ]

  return (
    <>
      <Hero1 carImages={carImages} />
      <Hero3 />
    </>
  );
}
