import React from "react";
import PageBanner from "../components/PageBanner";
import InteriorSolutions from "../components/InteriorSolutions";
import CTA from "../components/CTA";

export default function SolutionsPage() {
  return (
    <>
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
