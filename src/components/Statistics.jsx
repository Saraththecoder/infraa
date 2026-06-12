import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ value, duration = 2.0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    const numericTarget = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(numericTarget)) {
      setCount(value);
      return;
    }

    let startTimestamp = null;
    const easeOutQuad = (t) => t * (2 - t);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.floor(easedProgress * numericTarget));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(numericTarget);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  const suffix = value.replace(/\d/g, "");

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: "100%",
    label: "Clear Titles"
  },
  {
    value: "25+",
    label: "Landmarks Delivered"
  },
  {
    value: "500+",
    label: "Happy Families"
  },
  {
    value: "12-Yr",
    label: "Modular Warranty"
  }
];

export default function Statistics() {
  return (
    <section id="stats-band" className="relative py-[100px] bg-ak-navy overflow-hidden">
      {/* Row 1: Large decorative backdrop text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span 
          className="font-serif font-black text-white opacity-[0.04] text-center leading-none tracking-wider whitespace-nowrap block"
          style={{ fontSize: "clamp(100px, 15vw, 200px)" }}
        >
          AK GROUP
        </span>
      </div>

      <div className="container-custom relative z-10">
        {/* Row 2: Overlaid 4-column Stat Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 items-center text-center">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={stat.label}
              className={`flex flex-col items-center group px-4 h-full justify-center ${
                index !== stats.length - 1 ? "lg:border-r lg:border-white/8" : ""
              }`}
            >
              {/* Gold horizontal rule */}
              <div className="w-10 h-[2px] bg-ak-gold mb-5" />

              {/* Counter Value */}
              <div 
                className="font-serif font-bold text-white tracking-tight leading-none"
                style={{ fontSize: "clamp(48px, 5vw, 80px)" }}
              >
                <Counter value={stat.value} />
              </div>

              {/* Label */}
              <div className="text-sm text-white/60 font-sans tracking-wider uppercase mt-4">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
