import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageBanner({ title, subtitle, eyebrow }) {
  return (
    <section className="relative pt-44 pb-20 bg-ak-navy-deep overflow-hidden border-b border-white/5 bg-dot-grid">
      {/* Subtle overlay accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ak-navy opacity-20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ak-gold opacity-5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Eyebrow Label */}
          {eyebrow && (
            <div className="text-ak-gold text-[12px] font-sans font-medium tracking-[0.18em] uppercase">
              {eyebrow}
            </div>
          )}

          {/* Heading */}
          <h1 className="text-display text-white font-serif font-bold mt-3 leading-tight">
            {title}
          </h1>

          {/* Subtitle / Breadcrumb links */}
          <div className="flex items-center gap-2 mt-4 text-[13px] font-sans font-medium tracking-wide text-white/50">
            <Link to="/" className="hover:text-ak-gold transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">{subtitle || title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
