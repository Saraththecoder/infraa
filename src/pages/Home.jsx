import React from "react";
import Hero from "../components/Hero";
import MarqueeTicker from "../components/MarqueeTicker";
import DarkIntro from "../components/DarkIntro";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import InteriorCalculator from "../components/InteriorCalculator";
import Statistics from "../components/Statistics";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import VideoReel from "../components/VideoReel";
import ProcessTimeline from "../components/ProcessTimeline";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <DarkIntro />
      <WhyChooseUs />
      <Services />
      <InteriorCalculator />
      <Statistics />
      <BeforeAfterSlider />
      <VideoReel />
      <ProcessTimeline />
      <Testimonials />
      <CTA />
    </>
  );
}
