import React from "react";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import ProjectsShowcase from "../components/ProjectsShowcase";
import CTA from "../components/CTA";

export default function ProjectsPage() {
  return (
    <>
      <SEO 
        title="Our Projects | Premium Developments in Hyderabad & AP"
        description="View AK Group's portfolio of completed real estate developments and luxury custom interior projects across Hyderabad and Andhra Pradesh."
        keywords="Real estate projects Hyderabad, custom interior portfolio Andhra Pradesh, luxury villas Hyderabad, AK Group projects, plotted layouts gallery"
        url="/projects"
      />
      <PageBanner 
        title="Our Completed Masterpieces" 
        subtitle="Projects" 
        eyebrow="— Portfolio Gallery" 
      />
      <ProjectsShowcase />
      <CTA />
    </>
  );
}
