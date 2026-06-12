import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiX } from "react-icons/fi";

export default function VideoReel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#0b1a30] py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="container-custom relative z-10 text-center">

        {/* Video Thumbnail Frame - Full viewport width/fit container, square design */}
        <div 
          onClick={() => setIsOpen(true)}
          className="relative max-w-5xl mx-auto aspect-[21/9] w-full border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
        >
          {/* Cover image (Studio workspace / interior creation) */}
          <img 
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400&auto=format&fit=crop" 
            alt="AK Group Craftsmanship Studio"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 opacity-70 group-hover:opacity-85"
          />

          {/* Pulse Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors duration-300">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-white text-ak-navy flex items-center justify-center shadow-2xl relative"
            >
              {/* Outer pulsing ring */}
              <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
              <FiPlay size={24} className="relative z-10 text-ak-navy ml-1" />
            </motion.div>
          </div>

          {/* Banner bottom details */}
          <div className="absolute bottom-6 left-6 text-left">
            <span className="text-white font-serif text-lg md:text-xl font-bold block">
              Watch The AK Group Transformation Time-lapse
            </span>
            <span className="text-[10px] font-sans text-white/50 uppercase tracking-widest block mt-1">
              Runtime: 2m 14s · Full HD Walkthrough
            </span>
          </div>
        </div>

      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-md"
          >
            {/* Close button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-3 hover:bg-white/5 transition-colors duration-200 z-[110]"
              aria-label="Close video player"
            >
              <FiX size={24} />
            </button>

            {/* Video Player Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-5xl aspect-video bg-slate-900 shadow-2xl border border-white/10 relative"
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="AK Group Video Walkthrough"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
