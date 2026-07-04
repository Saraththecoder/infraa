import React from "react";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import InteriorSolutions from "../components/InteriorSolutions";
import CTA from "../components/CTA";

export default function SolutionsPage() {
  return (
    <>
      <SEO 
        title="Interior Solutions | Custom Modular Interiors in Hyderabad"
        description="AK Group provides top-notch custom modular interior solutions, luxury home designs, and high-end room fixtures in Hyderabad and Andhra Pradesh."
        keywords="Modular interiors Hyderabad, custom home design Andhra Pradesh, luxury room fixtures, best interior designers Hyderabad, AK Group interiors"
        url="/solutions"
      />
      <PageBanner 
        title="Premium Modular Solutions" 
        subtitle="Solutions" 
        eyebrow="— Custom Room Fixtures" 
      />
      <InteriorSolutions />
      <CTA />
    </>
  );
}
