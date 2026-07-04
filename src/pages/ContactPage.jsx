import React from "react";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us | Real Estate Developers in Hyderabad"
        description="Get in touch with AK Group for premium real estate investments and custom modular home interiors in Hyderabad and Andhra Pradesh."
        keywords="Contact AK Group, real estate office Hyderabad, interior designers near me, builders contact Hyderabad, property investment Andhra Pradesh"
        url="/contact"
      />
      <PageBanner 
        title="Get in Touch" 
        subtitle="Contact Us" 
        eyebrow="— Send Enquiry" 
      />
      <Contact />
    </>
  );
}
