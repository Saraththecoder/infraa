import React from "react";
import PageBanner from "../components/PageBanner";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <PageBanner 
        title="Get in Touch" 
        subtitle="Contact Us" 
        eyebrow="— Send Enquiry" 
      />
      <Contact />
    </>
  );
}
