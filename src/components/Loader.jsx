import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.1, 1], 
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" } 
            }}
            className="flex flex-col items-center"
          >
            <div className="relative flex items-center justify-center w-24 h-24 mb-6 rounded-2xl bg-slate-900 border border-white/5 shadow-2xl shadow-[rgba(10,46,92,0.2)] p-3">
              <img
                src="/logo.png"
                alt="AK Group Logo"
                className="w-12 h-12 object-contain animate-pulse"
              />
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute -inset-[2px] border-2 border-transparent border-t-ak-gold border-b-ak-navy rounded-2xl"
              />
            </div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold font-serif text-white tracking-widest text-center px-4"
            >
              AK GROUP
            </motion.h1>
            <motion.p 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xs md:text-sm text-slate-300 font-sans tracking-[0.25em] uppercase mt-2 text-center"
            >
              Infra Developers Pvt. Ltd.
            </motion.p>
          </motion.div>

          {/* Luxury loading bar */}
          <div className="absolute bottom-16 w-48 h-[2px] bg-slate-800 overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1/2 h-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
