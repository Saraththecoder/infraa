import React from "react";
import { motion } from "framer-motion";
import { FiEye, FiTarget, FiCheck } from "react-icons/fi";

const missionPoints = [
  "Deliver quality developments that stand the test of time.",
  "Maintain complete operational transparency in all transactions.",
  "Ensure highest levels of customer satisfaction and support.",
  "Embrace engineering innovation and modern design concepts.",
  "Build sustainable communities with premium infrastructure assets."
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="section-pad bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Vision Panel - Clean Off-white layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group relative p-10 md:p-12 bg-ak-offwhite border border-ak-border rounded-[4px] flex flex-col justify-between"
          >
            {/* Top gold border element */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-200 group-hover:bg-ak-gold transition-colors duration-500 rounded-t-[4px]" />

            <div>
              <div className="text-ak-navy mb-8 transition-colors duration-300">
                <FiEye size={24} />
              </div>

              <h3 className="text-2xl font-serif font-bold text-ak-navy mb-6">
                Our Vision
              </h3>

              <p className="text-ak-navy font-serif text-lg md:text-xl leading-relaxed font-light italic">
                "To become a trusted and respected real estate and infrastructure development company by creating high-quality developments that enhance communities and generate long-term value."
              </p>
            </div>

            <div className="mt-8 text-[11px] font-sans font-medium tracking-[0.12em] uppercase text-ak-muted mt-2.5">
              AK Group • Shaping Tomorrow
            </div>
          </motion.div>

          {/* Mission Panel - Luxury Dark Blue Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group relative p-10 md:p-12 bg-ak-navy-deep border border-white/5 rounded-[4px] flex flex-col justify-between shadow-ak-lg"
          >
            {/* Top gold border element */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 group-hover:bg-ak-gold transition-colors duration-500 rounded-t-[4px]" />

            <div>
              <div className="text-white mb-8">
                <FiTarget size={24} />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Our Mission
              </h3>

              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    key={index}
                    className="flex items-start gap-3.5 text-white/80 font-sans text-sm md:text-base leading-relaxed text-left"
                  >
                    <span className="text-ak-gold flex-shrink-0 mt-[6px]">
                      <FiCheck size={14} className="stroke-[2.5]" />
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-[11px] font-sans font-medium tracking-[0.12em] uppercase text-ak-gold leading-none">
              AK Group • Committed to Quality
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
