import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation & Briefing",
    description: "Meet our designers to align on your floor plan, budgets, functional needs, and stylistic design preferences."
  },
  {
    num: "02",
    title: "3D Visualization",
    description: "Experience photorealistic 3D renders and virtual spatial walkthroughs of your future home before building."
  },
  {
    num: "03",
    title: "Material & Finish Selection",
    description: "Handpick cabinetry finishes, handle designs, kitchen worktops, hardware systems, and lighting solutions."
  },
  {
    num: "04",
    title: "Factory Fabrication",
    description: "Precision manufacturing of modular panels at our state-of-the-art facility using European CNC machines."
  },
  {
    num: "05",
    title: "On-site Installation",
    description: "Dust-free assembly and fitting of structural woodworks by our factory-trained execution technicians."
  },
  {
    num: "06",
    title: "Walkthrough & Handover",
    description: "A final multi-point quality check, professional cleaning, and formal delivery of your 12-year warranty card."
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="section-pad bg-white relative overflow-hidden border-t border-ak-border">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase">
            [ Execution Path ]
          </span>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            Our design and execution process
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            We follow a structured, collaborative execution model to guarantee timeline efficiency and material quality.
          </p>
        </div>

        {/* Editorial Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 items-start text-left mt-12">
          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              key={step.num}
              className="flex items-start gap-8 py-8 border-b border-ak-border group w-full"
            >
              {/* Giant light number */}
              <span className="font-serif font-light text-6xl md:text-7xl text-ak-navy/5 group-hover:text-ak-gold/45 transition-colors duration-400 select-none shrink-0 leading-none">
                {step.num}
              </span>

              {/* Title & Desc */}
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-semibold text-ak-navy group-hover:text-ak-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-3 text-ak-muted font-sans text-sm leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
