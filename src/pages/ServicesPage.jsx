import React from "react";
import PageBanner from "../components/PageBanner";
import Services from "../components/Services";
import CTA from "../components/CTA";

export default function ServicesPage() {
  return (
    <>
      <PageBanner 
        title="Our Real Estate & Interior Services" 
        subtitle="Real Estate" 
        eyebrow="— Premium Developments & Turnkey Interiors" 
      />
      <Services />
      <CTA />
    </>
  );
}
