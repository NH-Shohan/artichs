"use client";

import { AnimatedTeamSection } from "@/components/sections/AnimatedTeamSection";
import { BentoGridSection } from "@/components/sections/BentoGridSection";
import FooterSection from "@/components/sections/FooterSection";
import { GlobeSection } from "@/components/sections/GlobeSection";
import HeroSection from "@/components/sections/HeroSection";
import { MacbookScrollSection } from "@/components/sections/MacbookScrollSection";
import { ParallaxScrollSection } from "@/components/sections/ParallaxScrollSection";
import SliderServiceSection from "@/components/sections/SliderServiceSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <GlobeSection />
      <SliderServiceSection />
      <ParallaxScrollSection />
      <TextGenerateEffect
        words={`Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`}
      />
      <BentoGridSection />
      <MacbookScrollSection />
      <AnimatedTeamSection />
      <FooterSection />
    </div>
  );
}
