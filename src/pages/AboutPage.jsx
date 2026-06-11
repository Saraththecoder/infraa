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
        title="Grounded in AP. Built for Generations." 
        subtitle="About Us" 
        eyebrow="— About the Company" 
      />
      <About />
      <Leadership />
      <VisionMission />
      <CoreValues />
      <CTA />
    </>
  );
}
