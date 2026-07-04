import React from "react";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import About from "../components/About";
import Leadership from "../components/Leadership";
import VisionMission from "../components/VisionMission";
import CoreValues from "../components/CoreValues";
import CTA from "../components/CTA";

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us | Top Builders & Real Estate Developers in Hyderabad"
        description="Learn about AK Group, the leading premium real estate developers and custom interior design experts in Hyderabad. Discover our leadership, vision, and core values."
        keywords="About AK Group, top builders in Hyderabad, premium real estate developers in Hyderabad, real estate pioneers Andhra Pradesh, custom interior design experts"
        url="/about"
      />
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
