import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiMapPin, FiFileText, FiAward, FiGrid, FiUser } from "react-icons/fi";

const features = [
  {
    num: "01",
    title: "Legally Verified Projects",
    description: "All land titles cleared and RERA compliant before sale.",
    icon: <FiShield size={24} />
  },
  {
    num: "02",
    title: "Prime AP Locations",
    description: "Strategic sites in growth corridors across the state.",
    icon: <FiMapPin size={24} />
  },
  {
    num: "03",
    title: "Transparent Documentation",
    description: "Every document handed to you before any payment.",
    icon: <FiFileText size={24} />
  },
  {
    num: "04",
    title: "Trusted Since 2019",
    description: "5 years of unbroken delivery and client retention.",
    icon: <FiAward size={24} />
  },
  {
    num: "05",
    title: "Quality Infrastructure",
    description: "Roads, drainage, and utilities built to municipal standards.",
    icon: <FiGrid size={24} />
  },
  {
    num: "06",
    title: "Customer-First Always",
    description: "Direct developer access, no middlemen, no hidden charges.",
    icon: <FiUser size={24} />
  }
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="why-choose-us" className="section-pad bg-ak-offwhite relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
            — The Reasons Investors Return
          </div>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            Why Choose AK Group?
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            We operate with a commitment to legal integrity, prime site planning, and absolute dedication to long-term community value.
          </p>
        </div>

        {/* Card Grid with 40px gap */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feat) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                borderBottomColor: "#D97706",
                boxShadow: "0 8px 32px rgba(7,26,53,0.12)"
              }}
              key={feat.num}
              className="group relative p-10 bg-white border border-ak-border border-bottom-3 border-b-transparent rounded-[4px] shadow-ak-sm transition-all duration-300 overflow-hidden flex flex-col justify-between"
              style={{ borderBottomWidth: "3px" }}
            >
              <div className="text-left">
                {/* Thin Navy Icon (stroke based, gold on hover) */}
                <div className="text-ak-navy group-hover:text-ak-gold transition-colors duration-300 w-10 h-10 flex items-center justify-start">
                  {feat.icon}
                </div>

                {/* Card Number - Top Right */}
                <span className="absolute top-10 right-10 text-[11px] font-sans font-medium tracking-wider text-ak-muted uppercase">
                  {feat.num}
                </span>

                {/* Title */}
                <h3 className="text-[20px] font-serif font-bold text-ak-navy mt-6 leading-tight">
                  {feat.title}
                </h3>
                
                {/* Description */}
                <p className="text-ak-muted font-sans text-sm mt-3 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
