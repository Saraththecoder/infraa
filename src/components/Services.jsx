import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiArrowRight, 
  FiShield, 
  FiTrendingUp, 
  FiFileText, 
  FiMapPin, 
  FiCheckCircle, 
  FiLayers, 
  FiHome, 
  FiCompass, 
  FiDollarSign, 
  FiAward, 
  FiBriefcase, 
  FiBarChart2, 
  FiPercent, 
  FiGrid, 
  FiUsers, 
  FiLayout, 
  FiEye, 
  FiBox, 
  FiTv, 
  FiMoon, 
  FiTool, 
  FiZap, 
  FiDroplet, 
  FiPlay, 
  FiImage 
} from "react-icons/fi";

const iconMap = {
  FiShield: <FiShield size={12} className="text-ak-gold shrink-0" />,
  FiTrendingUp: <FiTrendingUp size={12} className="text-ak-gold shrink-0" />,
  FiFileText: <FiFileText size={12} className="text-ak-gold shrink-0" />,
  FiMapPin: <FiMapPin size={12} className="text-ak-gold shrink-0" />,
  FiCheckCircle: <FiCheckCircle size={12} className="text-ak-gold shrink-0" />,
  FiLayers: <FiLayers size={12} className="text-ak-gold shrink-0" />,
  FiHome: <FiHome size={12} className="text-ak-gold shrink-0" />,
  FiCompass: <FiCompass size={12} className="text-ak-gold shrink-0" />,
  FiDollarSign: <FiDollarSign size={12} className="text-ak-gold shrink-0" />,
  FiAward: <FiAward size={12} className="text-ak-gold shrink-0" />,
  FiBriefcase: <FiBriefcase size={12} className="text-ak-gold shrink-0" />,
  FiBarChart2: <FiBarChart2 size={12} className="text-ak-gold shrink-0" />,
  FiPercent: <FiPercent size={12} className="text-ak-gold shrink-0" />,
  FiGrid: <FiGrid size={12} className="text-ak-gold shrink-0" />,
  FiUsers: <FiUsers size={12} className="text-ak-gold shrink-0" />,
  FiLayout: <FiLayout size={12} className="text-ak-gold shrink-0" />,
  FiEye: <FiEye size={12} className="text-ak-gold shrink-0" />,
  FiBox: <FiBox size={12} className="text-ak-gold shrink-0" />,
  FiTv: <FiTv size={12} className="text-ak-gold shrink-0" />,
  FiMoon: <FiMoon size={12} className="text-ak-gold shrink-0" />,
  FiTool: <FiTool size={12} className="text-ak-gold shrink-0" />,
  FiZap: <FiZap size={12} className="text-ak-gold shrink-0" />,
  FiDroplet: <FiDroplet size={12} className="text-ak-gold shrink-0" />,
  FiPlay: <FiPlay size={12} className="text-ak-gold shrink-0" />,
  FiImage: <FiImage size={12} className="text-ak-gold shrink-0" />
};

const categories = [
  { 
    id: "lands", 
    name: "Real Estate & Plots", 
    eyebrow: "[ Gated Layouts & Land Investments ]", 
    headline: "Premium Plotted Layouts & Real Estate Investments", 
    description: "Ashwin and Kiran (AK) Group delivers premium HMDA & DTCP approved plotted developments, open plot sales, and expert real estate investments across Hyderabad." 
  },
  { 
    id: "interiors", 
    name: "Interior Solutions", 
    eyebrow: "[ Bespoke Interiors ]", 
    headline: "Premium Turnkey Interior Architectural Solutions", 
    description: "From turnkey modular kitchens to detailed False Ceilings and Home Theatre systems, we design spaces styled around your lifestyle." 
  }
];

const interiorServices = [
  {
    num: "01",
    title: "Design Services",
    description: "Customized 2D Floor Plans and realistic 3D Designs & Visualization to preview your home layout before execution.",
    bullets: [
      { text: "2D Floor Plans", icon: "FiLayout" },
      { text: "3D Designs & Visualization", icon: "FiEye" }
    ],
    image: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Modular Solutions",
    description: "State-of-the-art Modular Kitchen setups and space-saving Custom Wardrobe Designs using water and termite-proof boards.",
    bullets: [
      { text: "Modular Kitchen", icon: "FiGrid" },
      { text: "Wardrobe Design", icon: "FiBox" }
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Residential Interiors",
    description: "Complete design execution for Living Room Interiors and Bedroom Interiors, blending ambient profile lights and textures.",
    bullets: [
      { text: "Living Room Interiors", icon: "FiTv" },
      { text: "Bedroom Interiors", icon: "FiMoon" }
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Commercial Interiors",
    description: "Tailored Commercial Office Interiors designed to optimize corporate productivity, lighting layouts, and visitor lounges.",
    bullets: [
      { text: "Commercial Office Interiors", icon: "FiBriefcase" }
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Execution & Construction",
    description: "End-to-end Civil Work, Electrical Work, Painting Services, and Gypsum False Ceilings managed by a single supervisor desk.",
    bullets: [
      { text: "Civil Work", icon: "FiTool" },
      { text: "Electrical Work", icon: "FiZap" },
      { text: "Painting Services", icon: "FiDroplet" },
      { text: "Gypsum Ceiling", icon: "FiGrid" }
    ],
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "06",
    title: "Specialty Solutions",
    description: "Premium acoustic-padded Home Theatre systems and custom Wall Arts & Decor setups for active entertainment rooms.",
    bullets: [
      { text: "Home Theatre", icon: "FiPlay" },
      { text: "Wall Arts & Decor", icon: "FiImage" }
    ],
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=600&auto=format&fit=crop"
  }
];

const landServices = [
  {
    num: "01",
    title: "Plot Sales & Land Investments",
    description: "Gated community open plots in prime locations featuring legally verified plots, clear titles, verified documentation, and high ROI potential.",
    bullets: [
      { text: "Legally verified plots", icon: "FiShield" },
      { text: "Land investments", icon: "FiTrendingUp" },
      { text: "Verified documentation", icon: "FiFileText" },
      { text: "Prime locations", icon: "FiMapPin" },
      { text: "Clear titles", icon: "FiCheckCircle" }
    ],
    image: "https://imgs.search.brave.com/oSE3F7TP979oRx7XqamKmg0kV1Xa_XKUDO9_Nnc8cK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJlc3RpZ2Vzb3V0/aGVybnN0YXIuaW5m/by9pbWFnZXMvcHJl/c3RpZ2UvcHJlc3Rp/Z2UtdGVjaC12aXN0/YS53ZWJw"
  },
  {
    num: "02",
    title: "Residential Property Sales",
    description: "Premium independent houses, luxury villas, and budget-friendly apartments tailored to home seekers and portfolio builders.",
    bullets: [
      { text: "Apartments", icon: "FiLayers" },
      { text: "Villas", icon: "FiHome" },
      { text: "Independent houses", icon: "FiCompass" },
      { text: "Budget-friendly homes", icon: "FiDollarSign" },
      { text: "Premium homes", icon: "FiAward" }
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Real Estate Investment Advisory",
    description: "Data-driven property investment consulting including professional investment planning, detailed market analysis, and ROI guidance.",
    bullets: [
      { text: "Investment planning", icon: "FiBriefcase" },
      { text: "Market analysis", icon: "FiBarChart2" },
      { text: "ROI guidance", icon: "FiPercent" },
      { text: "Portfolio diversification", icon: "FiGrid" },
      { text: "Property investment consulting", icon: "FiUsers" }
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("lands");
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const currentServices = activeTab === "interiors" ? interiorServices : landServices;
  const currentCat = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="services" className="section-pad bg-ak-offwhite relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase">
            {currentCat.eyebrow}
          </span>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            {currentCat.headline}
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            {currentCat.description}
          </p>
        </div>

        {/* Tab Controls for Services separation */}
        <div className="flex gap-2 border-b border-ak-border pb-4 mb-10 w-full justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setHoveredIdx(0);
              }}
              className={`relative px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 font-sans ${
                activeTab === cat.id
                  ? "text-ak-gold"
                  : "text-ak-muted hover:text-ak-navy"
              }`}
            >
              {cat.name}
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeServiceTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-ak-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* List Layout with Image Preview Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
          
          {/* Left: List items (7 cols) */}
          <div className="lg:col-span-7 flex flex-col border-t border-ak-border">
            {currentServices.map((service, idx) => (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="flex items-start gap-6 py-8 border-b border-ak-border cursor-pointer transition-all duration-300 hover:pl-4 group"
              >
                {/* Number */}
                <span className="font-serif font-light text-5xl md:text-6xl text-ak-navy/10 group-hover:text-ak-gold transition-colors duration-300 min-w-[70px] select-none text-left">
                  {service.num}
                </span>

                {/* Info */}
                <div className="flex-1 text-left">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-ak-navy group-hover:text-ak-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-ak-muted font-sans text-xs md:text-sm mt-2 max-w-lg leading-relaxed">
                    {service.description}
                  </p>

                   {/* Bullet points pills */}
                  {service.bullets && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.bullets.map((bullet) => (
                        <span 
                          key={bullet.text} 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-ak-navy/5 text-ak-navy text-[11px] font-sans font-medium hover:bg-ak-gold/10 hover:text-ak-gold transition-colors duration-200"
                        >
                          {iconMap[bullet.icon] || <FiCheckCircle size={12} className="text-ak-gold shrink-0" />}
                          <span>{bullet.text}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sliding Arrow */}
                <span className="text-ak-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <FiArrowRight size={22} />
                </span>
              </div>
            ))}
          </div>

          {/* Right: Floating/Sticky Preview Frame (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-[360px] md:h-[450px] w-full bg-white border border-ak-border shadow-ak-md rounded-none overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-" + hoveredIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentServices[hoveredIdx]?.image}
                  alt={currentServices[hoveredIdx]?.title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-6 left-6 text-white font-serif text-2xl font-bold">
                  {currentServices[hoveredIdx]?.title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        <div className="text-left mt-12">
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-ak-navy text-white hover:bg-ak-gold hover:text-ak-navy-deep font-sans text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-350 inline-block"
          >
            Start Your Journey
          </Link>
        </div>

      </div>
    </section>
  );
}
