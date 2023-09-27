import Carousel from "@/components/carousel-section";
import Intro from "@/components/intro-section";
import LastSection from "@/components/last-section";
import Manage from "@/components/manage-section";
import Pattern from "@/components/pattern-image";

export default function Home() {
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
