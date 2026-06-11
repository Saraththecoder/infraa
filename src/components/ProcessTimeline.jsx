import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiMapPin, FiFileText, FiTrendingUp, FiCheckSquare, FiKey } from "react-icons/fi";

const steps = [
  {
    num: "01",
    title: "Consultation",
    description: "Understanding your investment goals, budget, and location preferences in detail.",
    icon: <FiUsers size={16} />
  },
  {
    num: "02",
    title: "Site Selection",
    description: "Shortlisting legally verified, high-growth plotting locations for site inspection.",
    icon: <FiMapPin size={16} />
  },
  {
    num: "03",
    title: "Documentation",
    description: "Executing clear-title legal audits, title review, and drafting standard sale agreements.",
    icon: <FiFileText size={16} />
  },
  {
    num: "04",
    title: "Development",
    description: "Executing infrastructure development like laying BT roads, drains, and landscaping parks.",
    icon: <FiTrendingUp size={16} />
  },
  {
    num: "05",
    title: "Registration",
    description: "Completing official sale deed registration and mutations at sub-registrar offices.",
    icon: <FiCheckSquare size={16} />
  },
  {
    num: "06",
    title: "Handover",
    description: "Delivering structural plots with boundary markers and all physical ownership documents.",
    icon: <FiKey size={16} />
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="section-pad bg-ak-offwhite relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
            — Workflow Path
          </div>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            Our Development Process
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            We follow a structured, client-centered process to ensure absolute compliance, high quality, and a stress-free mutation experience.
          </p>
        </div>

        {/* Desktop View (Horizontal Timeline) */}
        <div className="hidden lg:block relative mt-24 pb-12">
          {/* Connecting Track Line centered at the height of step-number circles (26px) */}
          <div 
            className="absolute h-[2px] bg-ak-border z-0" 
            style={{ top: "26px", left: "8.33%", right: "8.33%" }} 
          />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "83.34%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute h-[2px] bg-ak-gold z-0" 
            style={{ top: "26px", left: "8.33%" }}
          />

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                key={step.num}
                className="flex flex-col items-center group text-center"
              >
                {/* Connector Circle with step number (Playfair Display 700 20px) */}
                <div className="w-13 h-13 rounded-full bg-white border-2 border-ak-gold text-ak-navy group-hover:bg-ak-gold group-hover:text-white flex items-center justify-center shadow-ak-sm transition-all duration-300 select-none cursor-pointer">
                  <span className="font-serif text-[20px] font-bold relative z-10 leading-none">
                    {parseInt(step.num, 10)}
                  </span>
                </div>

                {/* Step Title (Inter 600 14px) */}
                <h3 className="font-sans font-semibold text-sm text-ak-navy tracking-wide mt-6">
                  {step.title}
                </h3>

                {/* Description (Inter 400 12px) */}
                <p className="text-xs text-ak-muted font-sans mt-2 leading-relaxed max-w-[150px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View (Vertical Timeline) */}
        <div className="lg:hidden relative mt-8 pl-8 sm:pl-12">
          {/* Vertical connecting line */}
          <div className="absolute top-0 bottom-0 left-[16px] sm:left-[24px] w-[2px] bg-ak-border z-0" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 left-[16px] sm:left-[24px] w-[2px] bg-ak-gold z-0"
          />

          <div className="space-y-10 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                key={step.num}
                className="relative text-left group flex items-start gap-6 sm:gap-8"
              >
                {/* Node icon marker */}
                <div className="relative z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-ak-gold text-ak-navy group-hover:bg-ak-gold group-hover:text-white flex items-center justify-center shadow-ak-sm transition-colors duration-300 shrink-0">
                  <span className="font-serif text-base sm:text-lg font-bold leading-none">
                    {parseInt(step.num, 10)}
                  </span>
                </div>

                {/* Step content block */}
                <div className="bg-white border border-ak-border rounded-[4px] p-6 shadow-ak-sm flex-1 text-left">
                  <div className="text-xs font-bold font-sans text-ak-gold tracking-widest mb-1">
                    STEP {step.num}
                  </div>
                  <h3 className="text-base font-serif font-bold text-ak-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ak-muted font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
