import React from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "../components/Statistics";
import ProcessTimeline from "../components/ProcessTimeline";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Statistics />
      <ProcessTimeline />
      <Testimonials />
      <CTA />
    </>
  );
}
