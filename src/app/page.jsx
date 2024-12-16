import { GlobeSection } from "@/components/sections/GlobeSection";
import HeroSection from "@/components/sections/HeroSection";
import SliderServiceSection from "@/components/sections/SliderServiceSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <GlobeSection />
      <SliderServiceSection />
    </div>
  );
}
