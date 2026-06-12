import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section 
      className="py-[120px] relative overflow-hidden text-center"
      style={{
        backgroundColor: "#0b1a30",
        backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }}
    >
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
            — Start Your Project
          </div>

          {/* Heading */}
          <h2 className="text-display text-white font-serif font-bold mt-4 leading-tight max-w-2xl">
            Ready to Build Your Dream Home?
          </h2>
          
          {/* Subheading */}
          <p className="mt-4 text-subhead text-white/65 max-w-xl font-light">
            Secure your premium plot or consult our interior architects for a personalized 3D design plan.
          </p>

          {/* Buttons row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
            
            {/* Call Now button */}
            <a
              href="tel:+919948100096"
              className="flex items-center justify-center gap-3 px-8 py-3.5 bg-ak-gold hover:bg-ak-gold-light text-ak-navy font-sans text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-300 shadow-ak-sm hover:shadow-ak-md w-full sm:w-auto text-center"
            >
              <FaPhoneAlt size={12} />
              <span>Call Now</span>
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919948100096"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-3.5 border border-white/20 hover:border-ak-gold text-white font-sans text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-300 w-full sm:w-auto text-center hover:bg-white/5"
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
