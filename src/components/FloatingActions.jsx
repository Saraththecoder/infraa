import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaChevronUp } from "react-icons/fa";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end font-sans">
      
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-sm bg-primary hover:bg-accent-orange text-white flex items-center justify-center shadow-lg transition-colors duration-300 border border-white/10"
            aria-label="Back to top"
          >
            <FaChevronUp size={12} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button - Navy styled, orange hover */}
      <motion.a
        href="tel:+919948100096"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-sm bg-primary text-white flex items-center justify-center shadow-lg relative group border border-white/10"
        aria-label="Call business support desk"
      >
        <span className="absolute inset-0 rounded-sm bg-[#0A2E5C]/20 animate-ping opacity-75" />
        <FaPhoneAlt size={14} className="relative z-10 group-hover:text-accent-orange transition-colors" />
        <span className="absolute right-14 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap">
          Call Desk
        </span>
      </motion.a>

      {/* Floating WhatsApp Button - Navy/White styled to fit corporate guidelines, orange hover */}
      <motion.a
        href="https://wa.me/919948100096"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-sm bg-primary text-white flex items-center justify-center shadow-lg relative group border border-white/10"
        aria-label="Chat via WhatsApp"
      >
        <span className="absolute inset-0 rounded-sm bg-[#0A2E5C]/20 animate-ping opacity-75" />
        <FaWhatsapp size={16} className="relative z-10 group-hover:text-accent-orange transition-colors" />
        <span className="absolute right-14 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap">
          WhatsApp
        </span>
      </motion.a>

    </div>
  );
}
