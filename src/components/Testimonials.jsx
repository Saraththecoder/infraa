import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    name: "K. Srinivasa Rao",
    role: "4 BHK Villa Owner, LB Nagar",
    text: "AK Group transformed our villa with absolute perfection. The modular kitchen is a masterpiece, and their 45-day move-in commitment was met precisely. Unbelievable precision and service!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Anitha Reddy",
    role: "3 BHK Apartment, Gachibowli",
    text: "Highly impressed by their 3D planning phase. The renders were photorealistic, and the actual wardrobes look exactly like the designs we approved. The 12-year warranty gives us great peace of mind.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Vikram Kumar",
    role: "2 BHK Apartment, LB Nagar",
    text: "The best interior design team in Hyderabad. They offered fully transparent, itemized quoting with zero hidden charges. The soft-close modular cabinets are of superb German quality.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-[#0F172A] py-28 md:py-36 overflow-hidden relative border-t border-white/5">
      <div className="container-custom relative z-10 text-left">
        
        {/* Section Label */}
        <div className="mb-16">
          <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase block">
            [ What Our Clients Say ]
          </span>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-5xl">
          
          {/* Left Column (60%): Large Pull Quote with absolute quote mark */}
          <div className="lg:col-span-8 relative pl-12 min-h-[160px] flex items-center">
            {/* Giant quote mark */}
            <span 
              className="absolute top-0 left-0 text-ak-gold opacity-10 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: "120px", marginTop: "-40px" }}
            >
              “
            </span>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="font-serif italic text-white/90 leading-relaxed font-light text-2xl md:text-3xl"
              >
                "{reviews[current].text}"
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Right Column (40%): Details and Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full border-l border-white/10 pl-8 lg:pl-12 py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Rating */}
                <div className="text-ak-gold text-lg tracking-wide leading-none">
                  ★★★★★
                </div>
                
                {/* Client Profile */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-white leading-tight">
                    {reviews[current].name}
                  </h4>
                  <p className="text-xs font-sans text-white/45 tracking-wider uppercase mt-1">
                    {reviews[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-none border border-white/20 hover:border-ak-gold text-white hover:text-ak-gold flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-none border border-white/20 hover:border-ak-gold text-white hover:text-ak-gold flex items-center justify-center transition-all duration-300"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
