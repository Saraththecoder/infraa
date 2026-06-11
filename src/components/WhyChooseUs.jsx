import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiClock, FiFileText, FiAward, FiSettings, FiSliders } from "react-icons/fi";

const features = [
  {
    num: "01",
    title: "45-Day Move-in Guarantee",
    description: "Enjoy a guaranteed 45-day move-in timeline from design sign-off. If we delay, we pay your rent.",
    icon: <FiClock size={24} />
  },
  {
    num: "02",
    title: "Flat 12-Year Warranty",
    description: "Every modular kitchen and wardrobe is backed by a robust 12-year warranty for absolute peace of mind.",
    icon: <FiShield size={24} />
  },
  {
    num: "03",
    title: "No Hidden Costs",
    description: "Receive fully itemized, transparent quotes with zero surprises. What you see is what you pay.",
    icon: <FiFileText size={24} />
  },
  {
    num: "04",
    title: "100% Customized Designs",
    description: "Personalized room layouts, modular configurations, and color combinations styled around your lifestyle.",
    icon: <FiSliders size={24} />
  },
  {
    num: "05",
    title: "German Machine Finish",
    description: "Fabricated with state-of-the-art European CNC machinery for perfect alignment, clean joints, and extreme durability.",
    icon: <FiSettings size={24} />
  },
  {
    num: "06",
    title: "Zero-Stress Turnkey Handover",
    description: "We handle civil alterations, false ceilings, lighting layouts, painting, and modular assembly under one dedicated supervisor.",
    icon: <FiAward size={24} />
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
            — The AK Group Standard
          </div>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            Why Choose AK Group?
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            We provide hassle-free home interior solutions backed by manufacturing intelligence, strict design execution deadlines, and reliable warranties.
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
                borderBottomColor: "#F97316",
                boxShadow: "0 8px 32px rgba(15,23,42,0.12)"
              }}
              key={feat.num}
              className="group relative p-10 bg-white border border-ak-border border-bottom-3 border-b-transparent rounded-[4px] shadow-ak-sm transition-all duration-300 overflow-hidden flex flex-col justify-between"
              style={{ borderBottomWidth: "3px" }}
            >
              <div className="text-left">
                {/* Premium Icon Container */}
                <div className="icon-container-premium mb-6">
                  {feat.icon}
                </div>

                {/* Card Number - Top Right */}
                <span className="absolute top-10 right-10 text-[11px] font-sans font-medium tracking-wider text-ak-muted uppercase">
                  {feat.num}
                </span>

                {/* Title */}
                <h3 className="text-[20px] font-serif font-bold text-ak-navy mt-4 leading-tight">
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
