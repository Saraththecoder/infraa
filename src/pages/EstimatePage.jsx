import React from "react";
import PageBanner from "../components/PageBanner";
import InteriorCalculator from "../components/InteriorCalculator";
import CTA from "../components/CTA";

export default function EstimatePage() {
  return (
    <>
      <PageBanner 
        title="Calculate Your Interior Budget" 
        subtitle="Estimate" 
        eyebrow="— Instant Price Estimator" 
      />
      <InteriorCalculator />
      <CTA />
    </>
  );
}
