import Carousel from "@/components/carousel-section";
import Intro from "@/components/intro-section";
import LastSection from "@/components/last-section";
import Manage from "@/components/manage-section";
import Pattern from "@/components/pattern-image";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(2000);
  return (
    <>
      <Pattern />
      <Intro />
      <Manage />
      <Carousel />
      <LastSection />
    </>
  );
}
