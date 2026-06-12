import React from "react";
import PageBanner from "../components/PageBanner";
import About from "../components/About";
import Leadership from "../components/Leadership";
import VisionMission from "../components/VisionMission";
import CoreValues from "../components/CoreValues";
import CTA from "../components/CTA";

export default function AboutPage() {
  return (
    <>
      <PageBanner 
        title="Developing Premium Real Estate & Custom Living Spaces." 
        subtitle="About Us" 
        eyebrow="— Real Estate & Interior Pioneers" 
      />
      <About />
      <Leadership />
      <VisionMission />
      <CoreValues />
      <CTA />
    </>
  );
}
