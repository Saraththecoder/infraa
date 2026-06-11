import React from "react";
import PageBanner from "../components/PageBanner";
import ProjectsShowcase from "../components/ProjectsShowcase";
import CTA from "../components/CTA";

export default function ProjectsPage() {
  return (
    <>
      <PageBanner 
        title="Our Premium Ventures" 
        subtitle="Projects" 
        eyebrow="— Project Portfolio" 
      />
      <ProjectsShowcase />
      <CTA />
    </>
  );
}
