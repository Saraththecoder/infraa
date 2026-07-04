import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import MarqueeTicker from "../components/MarqueeTicker";
import DarkIntro from "../components/DarkIntro";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import Leadership from "../components/Leadership";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProcessTimeline from "../components/ProcessTimeline";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "AK Group",
    "image": "https://akgroupinfra.com/logo.png",
    "url": "https://akgroupinfra.com",
    "description": "Premium real estate development and custom modular home interiors in Hyderabad and Andhra Pradesh.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.3850",
      "longitude": "78.4867"
    },
    "areaServed": ["Hyderabad", "Andhra Pradesh"]
  };

  return (
    <>
      <SEO 
        title="Premium Real Estate & Home Interiors in Hyderabad"
        description="AK Group offers premium real estate developers, plotted layouts, and best modular home interiors in Hyderabad and Andhra Pradesh. Discover luxury living."
        keywords="Premium real estate developers in Hyderabad, best modular home interiors in Hyderabad, plotted layouts in Hyderabad, top real estate company Andhra Pradesh, luxury interior designers Hyderabad"
        url="/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      <Hero />
      <MarqueeTicker />
      <DarkIntro />
      <WhyChooseUs />
      <Services />
      <Statistics />
      <Leadership />
      <BeforeAfterSlider />
      <ProcessTimeline />
      <Testimonials />
      <CTA />
    </>
  );
}
