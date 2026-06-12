import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DarkIntro() {
  return (
    <section className="relative bg-[#0b1a30] py-28 md:py-36 overflow-hidden">
      {/* Background Subtle Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow Label */}
          <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase">
            [ Vision & Philosophy ]
          </span>

          {/* Heading */}
          <h2 className="font-serif italic text-4xl md:text-6xl text-[#FAF8F5] font-light mt-6 leading-tight max-w-2xl">
            Building foundations where legacy meets lifestyle.
          </h2>

          {/* Philosophy Paragraph */}
          <p className="mt-8 text-white/65 font-sans text-base md:text-lg leading-relaxed max-w-2xl font-light">
            At AK Group, we believe that a home begins long before the walls are built—it starts with a legally secure, prime piece of land. By combining legal precision, structural engineering expertise, and premium modular craftsmanship, we deliver masterfully planned plotted developments and turnkey interior designs engineered for generations.
          </p>

          {/* CTA Ghost Button */}
          <Link
            to="/about"
            className="mt-12 px-8 py-3.5 border border-white/20 hover:border-white hover:bg-white/5 text-white font-sans text-xs font-bold tracking-widest uppercase transition-all duration-350"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
