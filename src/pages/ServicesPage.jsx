import React from "react";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import Services from "../components/Services";
import CTA from "../components/CTA";

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Our Services | Best Real Estate & Plotted Layouts in Hyderabad"
        description="Explore AK Group's premium real estate services, open plots, and commercial developments in Hyderabad and Andhra Pradesh."
        keywords="Real estate services Hyderabad, plotted layouts Hyderabad, open plots in Andhra Pradesh, commercial real estate developers, AK Group services"
        url="/services"
      />
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
