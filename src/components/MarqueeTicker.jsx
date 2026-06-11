import React from "react";

export default function MarqueeTicker() {
  const marqueeItems = [
    "Living Room",
    "Bedroom",
    "Modular Kitchen",
    "Wardrobe",
    "Pooja Unit",
    "Home Office",
    "False Ceiling",
    "Luxury Plotted Layouts",
    "Turnkey Civil Work"
  ];

  // Repeat items to ensure seamless loop
  const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-[#F8FAFC] border-y border-ak-border py-8 overflow-hidden select-none relative z-10">
      <div className="flex w-max">
        {/* First running track */}
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-16 pr-16 items-center">
          {displayItems.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-16">
              <span className="font-serif italic text-3xl md:text-5xl font-light text-ak-navy tracking-wide">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-ak-gold shrink-0" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Styles for keyframes directly injected to avoid config changes */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
