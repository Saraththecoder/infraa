import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const transformations = [
  {
    id: "kitchen",
    title: "Modular Kitchen Transformation",
    before: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255911/new-empty-room-under-construction-plaster-walls-home-concrete-interior-renovation-166454551_vscu0i.webp",
    after: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255943/modern-kitchen-in-luxury-home-with-island-and-hardwood-floor_nse36b.webp"
  },
  {
    id: "living",
    title: "Living Lounge Transformation",
    before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BeforeAfterSlider() {
  const [activeId, setActiveId] = useState("kitchen");
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activePair = transformations.find((t) => t.id === activeId) || transformations[0];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const onPointerDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointercancel", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isDragging]);

  return (
    <section className="bg-[#0b1a30] py-28 md:py-32 overflow-hidden relative border-t border-white/5">
      <div className="container-custom relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase">
            [ The Transformation ]
          </span>
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#FAF8F5] font-light mt-4 leading-tight">
            Before. After. Always exceptional.
          </h2>
          
          {/* Tab Selector */}
          <div className="flex justify-center gap-6 mt-8">
            {transformations.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveId(t.id);
                  setSliderPosition(50);
                }}
                className={`text-[12px] font-sans font-bold tracking-widest uppercase transition-colors duration-300 ${
                  activeId === t.id ? "text-ak-gold border-b-2 border-ak-gold pb-1" : "text-white/45 hover:text-white/80"
                }`}
              >
                {t.id} view
              </button>
            ))}
          </div>
        </div>

        {/* Slider Frame */}
        <div 
          ref={containerRef}
          onMouseMove={isDragging ? handleMouseMove : null}
          onTouchMove={isDragging ? handleTouchMove : null}
          onMouseDown={onPointerDown}
          onTouchStart={onPointerDown}
          className="relative max-w-4xl mx-auto aspect-[16/9] w-full rounded-sm overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl bg-stone-900"
        >
          {/* BEFORE Image (Left/Bottom Layer) */}
          <div className="absolute inset-0">
            <img 
              src={activePair.before} 
              alt="Before Transformation" 
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* BEFORE Overlay Tag */}
            <span className="absolute top-4 left-4 bg-slate-950/80 border border-white/15 px-3 py-1 text-[10px] font-sans font-bold text-white tracking-widest uppercase rounded-[2px] z-20">
              BEFORE
            </span>
          </div>

          {/* AFTER Image (Top Clipping Layer) */}
          <div 
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <img 
              src={activePair.after} 
              alt="After Transformation" 
              className="w-full h-full object-cover pointer-events-none"
            />
            {/* AFTER Overlay Tag */}
            <span className="absolute top-4 right-4 bg-ak-gold px-3 py-1 text-[10px] font-sans font-bold text-white tracking-widest uppercase rounded-[2px] z-20">
              AFTER
            </span>
          </div>

          {/* Drag Handle Bar */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-[1px] bg-white/40 pointer-events-none flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Sliding Grip Circle */}
            <div className="w-10 h-10 rounded-full bg-white border border-ak-gold flex items-center justify-center shadow-lg cursor-ew-resize pointer-events-none shrink-0 -translate-x-[20px] hover:scale-105 active:scale-95 transition-transform">
              <span className="text-[12px] text-ak-navy font-bold font-serif select-none select-none">↔</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
