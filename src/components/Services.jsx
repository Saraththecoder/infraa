import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    num: "01",
    title: "Modular Kitchens",
    description: "Tailored L-shape, U-shape, parallel, and straight modular kitchens with state-of-the-art pull-out trays, soft-close hinges, and premium finishes.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Custom Wardrobes",
    description: "Floor-to-ceiling swing and sliding door wardrobes, walking closets, and custom lofts fabricated with termite-proof panels.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Living & Entertainment",
    description: "Stunning floating TV units, partition louvers, wooden paneling, custom shoe cabinets, and ambient home bars.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Aesthetic False Ceilings",
    description: "Gypsum plasterboard false ceilings, linear track layout configurations, and warm designer coves.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Turnkey Renovations",
    description: "Comprehensive home upgrades including countertop slab alterations, tiles laying, plumbing shifts, and custom lighting.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section id="services" className="section-pad bg-ak-offwhite relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase">
            [ Premium Services ]
          </span>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            End-to-end home design services
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            We provide complete modular interior installations and customized interior architectural layouts backed by manufacturing intelligence.
          </p>
        </div>

        {/* List Layout with Image Preview Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
          
          {/* Left: List items (7 cols) */}
          <div className="lg:col-span-7 flex flex-col border-t border-ak-border">
            {services.map((service, idx) => (
              <div
                key={service.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="flex items-center gap-6 py-8 border-b border-ak-border cursor-pointer transition-all duration-300 hover:pl-4 group"
              >
                {/* Number */}
                <span className="font-serif font-light text-5xl md:text-6xl text-ak-navy/10 group-hover:text-ak-gold transition-colors duration-300 min-w-[70px] select-none text-left">
                  {service.num}
                </span>

                {/* Info */}
                <div className="flex-1 text-left">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-ak-navy group-hover:text-ak-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-ak-muted font-sans text-xs md:text-sm mt-2 max-w-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Sliding Arrow */}
                <span className="text-ak-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <FiArrowRight size={22} />
                </span>
              </div>
            ))}
          </div>

          {/* Right: Floating/Sticky Preview Frame (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-[360px] md:h-[450px] w-full bg-white border border-ak-border shadow-ak-md rounded-none overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={services[hoveredIdx].image}
                  alt={services[hoveredIdx].title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-6 left-6 text-white font-serif text-2xl font-bold">
                  {services[hoveredIdx].title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        <div className="text-left mt-12">
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-ak-navy text-white hover:bg-ak-gold hover:text-ak-navy-deep font-sans text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-350 inline-block"
          >
            Start Your Journey
          </Link>
        </div>

      </div>
    </section>
  );
}
