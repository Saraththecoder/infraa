import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "https://imgs.search.brave.com/oSE3F7TP979oRx7XqamKmg0kV1Xa_XKUDO9_Nnc8cK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJlc3RpZ2Vzb3V0/aGVybnN0YXIuaW5m/by9pbWFnZXMvcHJl/c3RpZ2UvcHJlc3Rp/Z2UtdGVjaC12aXN0/YS53ZWJw",
    title: "Premium Plots",
    tagline: "HMDA & DTCP Approved Gated Communities",
    eyebrow: "Legally verified plots & clear titles"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    title: "Independent Villas",
    tagline: "Premium Architected Villas & Apartments",
    eyebrow: "Prime locations & sustainable growth"
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
    title: "Bespoke Interiors",
    tagline: "Turnkey Modular Kitchens & Custom Closets",
    eyebrow: "Factory fabrication intelligence"
  }
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
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
    
    // Autoplay slider
    const sliderTimer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(sliderTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-[72px] overflow-hidden bg-ak-navy"
    >
      {/* Background Image Carousel Layer with cross-fade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              activeIdx === idx ? "opacity-35 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ 
              backgroundImage: `url('${slide.src}')`,
              transitionProperty: "opacity, transform"
            }}
          />
        ))}
      </div>

      {/* Cinematic gradient overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(11,26,48,0.96) 0%, rgba(11,26,48,0.88) 35%, rgba(11,26,48,0.45) 75%, rgba(11,26,48,0.18) 100%)"
        }}
      />

      <div className="container-custom relative z-10 w-full flex items-center justify-between py-12 md:py-16">
        
        {/* Left Side Content - 12 col grid style */}
        <div className="max-w-[660px] text-left">
          {/* Active slide metadata */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Eyebrow Label */}
              <span className="text-ak-gold text-[11px] font-sans font-semibold tracking-[0.2em] uppercase">
                [ {slides[activeIdx].eyebrow} ]
              </span>

              {/* Headline */}
              <h1 className="text-hero text-white leading-tight font-serif mt-6">
                Developing lands, <br />
                <span className="italic text-ak-gold font-light">crafting legacies.</span>
              </h1>

              {/* Subheadline description */}
              <p className="text-subhead text-white/70 max-w-[500px] mt-6 leading-relaxed font-sans font-light text-lg">
                {slides[activeIdx].tagline}. Premium real estate infrastructure developments and bespoke home interior solutions across Hyderabad.
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Divider Line */}
          <div className="h-[1px] w-[64px] bg-ak-gold/45 my-7" />

          {/* Action Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-ak-gold hover:bg-ak-gold-light text-ak-navy-deep font-sans text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-300 shadow-ak-sm"
            >
              Book Consultation
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border border-white/40 hover:border-white text-white font-sans text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-300 hover:bg-white/5"
            >
              View Our Work →
            </Link>
          </div>
        </div>

        {/* Right Side Slider Indicator Cards (Desktop only) */}
        <div className="hidden lg:flex flex-col gap-5 relative pr-4 select-none">
          {slides.map((slide, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={slide.title}
                onClick={() => setActiveIdx(idx)}
                className={`w-[260px] p-4 border transition-all duration-350 cursor-pointer text-left flex gap-4 items-center bg-[#0b1a30]/70 backdrop-blur-md rounded-none ${
                  isActive ? "border-ak-gold scale-105" : "border-white/10 opacity-55 hover:opacity-85"
                }`}
                whileHover={{ x: -6 }}
              >
                {/* Micro Thumbnail */}
                <div className="w-16 h-12 bg-slate-900 border border-white/10 overflow-hidden shrink-0">
                  <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                </div>
                {/* Details */}
                <div className="flex-1 overflow-hidden">
                  <span className="text-[10px] font-serif font-bold text-ak-gold block tracking-wider leading-none">
                    0{idx + 1}
                  </span>
                  <span className="text-white font-sans text-[12px] font-bold block mt-1 tracking-wide leading-tight truncate">
                    {slide.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom metrics bar styled as glassmorphic */}
      <div className="absolute bottom-0 left-0 right-0 h-[64px] bg-white/[0.04] backdrop-blur-[8px] z-10 border-t border-white/10 hidden md:block">
        <div className="max-w-[1360px] mx-auto grid grid-cols-4 h-full items-center text-center text-white/80 font-sans text-[11px] tracking-wider uppercase font-medium">
          <div className="border-r border-white/12 h-full flex items-center justify-center">100% Verified Titles</div>
          <div className="border-r border-white/12 h-full flex items-center justify-center">HMDA & DTCP Approved</div>
          <div className="border-r border-white/12 h-full flex items-center justify-center">Bespoke Design Delivery</div>
          <div className="h-full flex items-center justify-center">12-Year Structural Warranty</div>
        </div>
      </div>

      {/* Scroll indicator (Fade on scroll) */}
      {showScroll && (
        <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
          <div className="w-[1px] h-[60px] bg-white/20 relative">
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
