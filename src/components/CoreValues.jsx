import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCheckCircle, FiAward, FiEye, FiZap, FiSmile } from "react-icons/fi";

const values = [
  {
    title: "Trust",
    description: "We build enduring relationships founded on the bedrock of transparency, reliability, and honest business deals.",
    icon: <FiBriefcase size={24} />
  },
  {
    title: "Integrity",
    description: "Compliance with all regulations and walking the talk is our standard. Legal and ethical correctness is non-negotiable.",
    icon: <FiCheckCircle size={24} />
  },
  {
    title: "Quality",
    description: "From layout planning to execution of roads and amenities, we insist on uncompromising quality and premium standards.",
    icon: <FiAward size={24} />
  },
  {
    title: "Transparency",
    description: "Every registration, agreement, and title check is open to scrutiny, with no hidden fees or obfuscated processes.",
    icon: <FiEye size={24} />
  },
  {
    title: "Innovation",
    description: "Integrating smart infrastructure layouts, environmental practices, and advanced project monitoring solutions.",
    icon: <FiZap size={24} />
  },
  {
    title: "Customer Satisfaction",
    description: "We place buyers at the heart of our operations, supporting them at every step of purchase, documentation, and beyond.",
    icon: <FiSmile size={24} />
  }
];

export default function CoreValues() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="values" className="section-pad bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
              — Our Foundations
            </span>
          </div>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            AK Group Core Values
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl mx-auto">
            Our guiding principles define how we work, make decisions, and interact with stakeholders every single day.
          </p>
        </div>

        {/* Values Cards Grid with 40px gap */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {values.map((val) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 8px 32px rgba(7,26,53,0.12)"
              }}
              key={val.title}
              className="p-8 bg-white border border-ak-border rounded-[4px] shadow-ak-sm transition-all duration-300 flex flex-col items-start text-left group"
            >
              {/* Clean Navy Icon - transitions to gold on hover */}
              <div className="text-ak-navy group-hover:text-ak-gold mb-6 transition-colors duration-300 w-10 h-10 flex items-center justify-start">
                {val.icon}
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-serif font-bold text-ak-navy mb-3 group-hover:text-ak-gold transition-colors duration-300">
                {val.title}
              </h3>

              {/* Description */}
              <p className="text-ak-muted font-sans text-sm leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
