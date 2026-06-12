import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    name: "M. Ramesh Kumar Yadav",
    role: "Plot Owner, Greenfield Gated Community, Shadnagar",
    text: "AK Group delivered our gated plotted community layout with absolute perfection. Their link documents and title check were 100% legally clear, and construction approvals were processed instantly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "K. Ananda Prasad",
    role: "Real Estate Investor, Miyapur Corridor",
    text: "As a real estate investor, transparent pricing and clear DTCP/HMDA layouts are my highest priorities. AK Group has consistently delivered high-ROI plotted ventures with clear title documentation and excellent blacktop road connectivity.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "G. Rajeshwar Rao",
    role: "Land Buyer, Ibrahimpatnam Layout",
    text: "Purchased an open plot for my retirement home. The boundary marking, avenue plantation, and concrete drainage lines were completed exactly as promised in the layouts. Outstanding professionalism.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sravanthi Reddy",
    role: "Farm Land Owner, Yadagirigutta Managed Farms",
    text: "I invested in their suburban agricultural farmland project. The managed plantation scheme, water connection setup, and secure wire fencing have given me complete peace of mind and a beautiful weekend getaway spot.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Ch. Manoj Kumar",
    role: "Commercial Plot Buyer, ORR Exit Corridor",
    text: "Finding clear title commercial lands along the highway is difficult, but AK Group made it hassle-free. Their legal documentation team helped verify everything, and the layout has premium commercial zoning suitability.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "P. Lakshmi Prasanna",
    role: "NRI Investor, Maheshwaram Layout",
    text: "Being based in the US, I needed a trusted land developer in Hyderabad. AK Group provided remote site drone footage, clear title paperwork verification, and handled the registration smoothly without requiring my physical presence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "J. Venkat Rao",
    role: "Plot Purchaser, Sadashivpet Community",
    text: "The blacktop roads, underground wiring, and green community park amenities are top-notch. AK Group layouts have real standard infrastructure rather than just basic empty plots. Strongly recommend them.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Anuradha Reddy",
    role: "Villa Interior Client, Gachibowli",
    text: "We had AK Group execute the complete bespoke interiors for our new villa. The modular kitchen and custom ceiling designs were fabricated with premium quality and completed under a single supervisor desk within the promised timeline.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Srinivas & Haritha",
    role: "3 BHK Apartment Interiors, Kokapet",
    text: "Our apartment interiors are gorgeous, especially the custom acrylic modular kitchen and space-saving wardrobes. The factory fabrication finish is clean and the 12-year modular warranty gives us high confidence.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Mir Sameer Ali",
    role: "Penthouse Design Client, Jubilee Hills",
    text: "Their interior architects transformed our empty penthouse shell into a luxury home. The 3D layouts matched the final execution perfectly, from premium lighting tracks to solid wood vanity systems. Truly state-of-the-art styling.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
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
    <section id="testimonials" className="bg-[#0b1a30] py-28 md:py-36 overflow-hidden relative border-t border-white/5">
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
                className="space-y-6"
              >
                {/* Rating and Profile Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <img 
                      src={reviews[current].image} 
                      alt={reviews[current].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-ak-gold text-lg tracking-wide leading-none">
                    ★★★★★
                  </div>
                </div>
                
                {/* Client Profile */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-white leading-tight">
                    {reviews[current].name}
                  </h4>
                  <p className="text-xs font-sans text-white/45 tracking-wider uppercase mt-1.5 leading-relaxed">
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
