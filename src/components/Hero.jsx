import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-[72px] overflow-hidden bg-ak-navy-deep"
    >
      {/* Background Image Layer with fixed parallax treatment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&fit=crop')",
          opacity: 0.35 
        }}
      />

      {/* Left-heavy cinematic overlay gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, rgba(10,46,92,0.92) 0%, rgba(10,46,92,0.78) 35%, rgba(10,46,92,0.35) 70%, rgba(10,46,92,0.1) 100%)"
        }}
      />

      <div className="container-custom relative z-10 w-full flex flex-col text-left py-12 md:py-16">
        <div className="max-w-[600px]">

          {/* Hero Headline */}
          <div className="mt-6 flex flex-col">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-hero text-white"
            >
              Building Trust.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-hero text-white mt-1"
            >
              Creating Value.
            </motion.h1>
          </div>

          {/* Gold Horizontal Rule (Margin 24px 0 / my-6) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ transformOrigin: "left" }}
            className="h-[3px] w-[72px] bg-ak-gold my-6"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-subhead text-white/75 max-w-[480px] leading-relaxed font-light"
          >
            Plotted developments, infrastructure solutions, and investment opportunities across Andhra Pradesh.
          </motion.p>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <Link
              to="/projects"
              className="px-8 py-4 bg-ak-gold hover:bg-ak-gold-light text-white font-sans text-xs font-bold tracking-widest uppercase rounded-[2px] transition-all duration-300 shadow-ak-sm hover:shadow-ak-md text-center"
            >
              Explore Projects
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 hover:border-white text-white font-sans text-xs font-bold tracking-widest uppercase rounded-[2px] transition-all duration-300 hover:bg-white/5 text-center"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero bottom metrics bar styled as glassmorphism */}
      <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-[rgba(10,46,92,0.35)] backdrop-blur-[12px] z-10 border-t border-white/10 hidden md:block">
        <div className="grid grid-cols-4 h-full items-center text-center text-white font-sans text-xs tracking-wider uppercase font-medium">
          <div className="border-r border-white/10 h-full flex items-center justify-center">5+ Years</div>
          <div className="border-r border-white/10 h-full flex items-center justify-center">100+ Projects</div>
          <div className="border-r border-white/10 h-full flex items-center justify-center">500+ Customers</div>
          <div className="h-full flex items-center justify-center">100% Trust</div>
        </div>
      </div>

      {/* Scroll indicator (Fade on scroll) */}
      {showScroll && (
        <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
          <div className="w-[1px] h-[60px] bg-white/30 relative">
            <motion.div
              animate={{
                y: [0, 54],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-[-2.5px] w-[6px] h-[6px] rounded-full bg-ak-gold"
            />
          </div>
        </div>
      )}
    </section>
  );
}
