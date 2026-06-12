import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const realEstateSteps = [
  {
    num: "01",
    title: "Site Visit & Layout Selection",
    description: "Explore our premium, strategically located gated community developments and select the perfect plot size."
  },
  {
    num: "02",
    title: "Legal & Title Verification",
    description: "Review 100% verified clear titles, link documents, and official DTCP/HMDA layout sanction papers."
  },
  {
    num: "03",
    title: "Agreement & Plot Booking",
    description: "Finalize standard, transparent booking agreements with zero hidden costs or registry modifications."
  },
  {
    num: "04",
    title: "Infrastructure Development",
    description: "We develop complete blacktop roads, underground water/electrical conduits, and avenue plantations."
  },
  {
    num: "05",
    title: "Registration & Handover",
    description: "Receive complete legal registration in your name and assume possession of your high-yield land plot."
  },
  {
    num: "06",
    title: "Custom Villa Construction",
    description: "Optionally collaborate with our in-house architects to construct your premium independent villa."
  }
];

const interiorSteps = [
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
  const [activeTab, setActiveTab] = useState("real-estate");
  const currentSteps = activeTab === "real-estate" ? realEstateSteps : interiorSteps;

  return (
    <section id="process" className="section-pad bg-white relative overflow-hidden border-t border-ak-border">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase">
            [ Execution Path ]
          </span>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            Our design and development process
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            We follow a structured, collaborative execution model to guarantee legal transparency, engineering safety, and handover timeliness.
          </p>
        </div>

        {/* Tab Controls for Process separation */}
        <div className="flex gap-2 border-b border-ak-border pb-4 mb-10 w-full justify-start overflow-x-auto whitespace-nowrap">
          {[
            { id: "real-estate", name: "Real Estate Journey" },
            { id: "interiors", name: "Bespoke Interiors Journey" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 font-sans ${
                activeTab === tab.id
                  ? "text-ak-gold"
                  : "text-ak-muted hover:text-ak-navy"
              }`}
            >
              {tab.name}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeProcessTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-ak-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Editorial Typography Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 items-start text-left"
          >
            {currentSteps.map((step, idx) => (
              <div
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
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
