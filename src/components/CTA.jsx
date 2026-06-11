import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-[120px] bg-ak-navy bg-dot-grid relative overflow-hidden text-center">
      {/* Background glow mesh accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-ak-gold/5 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow Label */}
          <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
            — Ready to Invest?
          </div>

          {/* Heading */}
          <h2 className="text-display text-white font-serif font-bold mt-4 leading-tight max-w-2xl">
            Your Next Investment Starts Here.
          </h2>
          
          {/* Subheading */}
          <p className="mt-4 text-subhead text-white/65 max-w-xl font-light">
            Let's find the right land, at the right location, with full documentation.
          </p>

          {/* Buttons row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
            
            {/* Call Now button */}
            <a
              href="tel:+919948100096"
              className="flex items-center justify-center gap-3 px-8 py-3.5 bg-ak-gold hover:bg-ak-gold-light text-white font-sans text-xs font-bold tracking-widest uppercase rounded-[2px] transition-all duration-300 shadow-ak-sm hover:shadow-ak-md w-full sm:w-auto text-center"
            >
              <FaPhoneAlt size={12} />
              <span>Call Now</span>
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919948100096"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-3.5 border border-white/20 hover:border-ak-gold text-white font-sans text-xs font-bold tracking-widest uppercase rounded-[2px] transition-all duration-300 w-full sm:w-auto text-center hover:bg-white/5"
            >
              <FaWhatsapp size={14} />
              <span>WhatsApp Us</span>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
