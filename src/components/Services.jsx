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
  FiUsers 
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
  FiUsers: <FiUsers size={12} className="text-ak-gold shrink-0" />
};

const categories = [
  { 
    id: "real-estate", 
    name: "Real Estate", 
    eyebrow: "[ Built Architecture & Investments ]", 
    headline: "Premium Villas, Apartments & Advisory", 
    description: "Ashwin and Kiran (AK) Group construct high-end independent villas, premium apartments, and commercial projects across Hyderabad's prime sectors." 
  },
  { 
    id: "lands", 
    name: "Lands", 
    eyebrow: "[ Plotted Gated Communities ]", 
    headline: "HMDA & DTCP Approved Plotted Developments", 
    description: "Discover legally verified open plots, premium gated layout investments, and suburban farm lands with high future valuation." 
  }
];

const realEstateServices = [
  {
    num: "01",
    title: "Independent Luxury Villas",
    description: "Premium architected 4 BHK and 5 BHK independent house developments with state-of-the-art civil infrastructure, green backyards, and modular layouts.",
    bullets: [
      { text: "Premium homes", icon: "FiAward" },
      { text: "Earthquake resistant", icon: "FiShield" },
      { text: "Villas & duplexes", icon: "FiHome" },
      { text: "Private courtyard slots", icon: "FiCompass" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255658/Modern-Villa-Design-with-car-parking_pfgbls.webp"
  },
  {
    num: "02",
    title: "Apartments & Gated Communities",
    description: "Modern, budget-friendly and luxury high-rise apartments constructed in prime sectors, featuring excellent ventilation and premium fixtures.",
    bullets: [
      { text: "Apartments & flats", icon: "FiLayers" },
      { text: "Budget-friendly homes", icon: "FiDollarSign" },
      { text: "Gated safety systems", icon: "FiShield" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255773/high-rise-building-definition-design-safety-800x400_ch1ryp.webp"
  },
  {
    num: "03",
    title: "Commercial Office Spaces",
    description: "Sleek retail complexes, corporate staff cabins, and warehouse infrastructures developed along primary suburban highway corridors.",
    bullets: [
      { text: "Commercial outlets", icon: "FiBriefcase" },
      { text: "High traffic corridors", icon: "FiMapPin" },
      { text: "Structured floor plans", icon: "FiGrid" }
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Real Estate Investment Advisory",
    description: "Data-driven property consulting, ROI projections, micro-market survey evaluations, and legal compliance checks.",
    bullets: [
      { text: "Investment planning", icon: "FiBriefcase" },
      { text: "Market analysis", icon: "FiBarChart2" },
      { text: "ROI guidance", icon: "FiPercent" },
      { text: "Portfolio consulting", icon: "FiUsers" }
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
  },
  {
    num: "05",
    title: "Independent Houses",
    description: "Premium architectural design and construction of independent houses, luxury duplexes, and triplexes across prime zones. Crafted with premium raw materials and high-end elevations.",
    bullets: [
      { text: "Custom layouts & designs", icon: "FiAward" },
      { text: "Earthquake resistant structures", icon: "FiShield" },
      { text: "12-Year structural warranty", icon: "FiHome" },
      { text: "Bespoke elevations & styling", icon: "FiCompass" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255658/Modern-Villa-Design-with-car-parking_pfgbls.webp"
  },
  {
    num: "06",
    title: "Apartments",
    description: "Modern apartments and multi-family residential gated communities constructed with outstanding ventilation, fire-safety compliance, premium amenities, and reliable water sources.",
    bullets: [
      { text: "Gated safety systems", icon: "FiShield" },
      { text: "Premium common areas", icon: "FiLayers" },
      { text: "Rainwater harvesting slots", icon: "FiCompass" },
      { text: "High resale appreciation", icon: "FiTrendingUp" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255773/high-rise-building-definition-design-safety-800x400_ch1ryp.webp"
  }
];

const landServices = [
  {
    num: "01",
    title: "Open Plot Sales",
    description: "Gated community open plots in high-growth suburban corridors featuring legally verified documents, link papers, and immediate registration suitability.",
    bullets: [
      { text: "Legally verified plots", icon: "FiShield" },
      { text: "Clear titles check", icon: "FiCheckCircle" },
      { text: "Verified documentation", icon: "FiFileText" },
      { text: "High ROI potential", icon: "FiTrendingUp" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255573/ankur_ex65ul.webp"
  },
  {
    num: "02",
    title: "HMDA & DTCP Approved Layouts",
    description: "Premium plotted layouts fully developed with wide BT blacktop roads, underground water pipes, electricity conduits, and green community parks.",
    bullets: [
      { text: "Approved layouts", icon: "FiCheckCircle" },
      { text: "BT Blacktop roads", icon: "FiMapPin" },
      { text: "Avenue plantation", icon: "FiHome" },
      { text: "Electricity & water lines", icon: "FiGrid" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255404/h8hbnx6-1736165878-551639287-optorig-1_mklnx4.webp"
  },
  {
    num: "03",
    title: "Suburban Agricultural & Farm Lands",
    description: "High-value agricultural holdings and green farmhouse plots perfect for long-term land banking and weekend getaways.",
    bullets: [
      { text: "Suburban farm lands", icon: "FiCompass" },
      { text: "Clear boundaries fencing", icon: "FiShield" },
      { text: "Strategic land banking", icon: "FiTrendingUp" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255573/ankur_ex65ul.webp"
  },
  {
    num: "04",
    title: "Open Lands",
    description: "Raw acreage and strategic bulk land parcels with clear titles, boundary walls, and direct highway connectivity, perfect for long-term investments or future community planning.",
    bullets: [
      { text: "Clear title & registration", icon: "FiCheckCircle" },
      { text: "Secure boundary walls", icon: "FiShield" },
      { text: "Strategic road access", icon: "FiMapPin" },
      { text: "Bulk land banking ROI", icon: "FiTrendingUp" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255282/Country-Bank-aerial-view-of-plot-of-green-land-1024x683_pi8blb.webp"
  },
  {
    num: "05",
    title: "Open Plots",
    description: "Gated layout open plots with HMDA & DTCP approvals, underground drainage, electricity cables, community parks, and standard civic amenities ready for villa construction.",
    bullets: [
      { text: "HMDA & DTCP approved", icon: "FiCheckCircle" },
      { text: "Underground civic conduits", icon: "FiGrid" },
      { text: "BT Blacktop internal roads", icon: "FiMapPin" },
      { text: "Immediate villa building suit", icon: "FiHome" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255404/h8hbnx6-1736165878-551639287-optorig-1_mklnx4.webp"
  },
  {
    num: "06",
    title: "Agricultural Lands",
    description: "Suburban farm lands and managed agricultural layout plots with fertile soil, active water source setups, and secure fencing, offering an organic lifestyle or land banking value.",
    bullets: [
      { text: "Suburban farmhouse layouts", icon: "FiCompass" },
      { text: "Clear water source access", icon: "FiGrid" },
      { text: "Secure wire fencing lines", icon: "FiShield" },
      { text: "Natural eco environments", icon: "FiHome" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255573/ankur_ex65ul.webp"
  },
  {
    num: "07",
    title: "Commercial Lands",
    description: "High-potential commercial-zoned land parcels situated along busy highway corridors and junction lines, optimized for warehouses, showrooms, or retail parks.",
    bullets: [
      { text: "Commercial-zoned plots", icon: "FiBriefcase" },
      { text: "Highway corridor facing", icon: "FiMapPin" },
      { text: "High utility connectivity", icon: "FiLayers" },
      { text: "Rapid commercial growth", icon: "FiTrendingUp" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255601/mumbai-highway-facing-open-plots-1000x1000_wqrqtj.webp"
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("lands");
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const currentServices = activeTab === "real-estate" ? realEstateServices : landServices;
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
        <div className="flex gap-2 border-b border-ak-border pb-4 mb-10 w-full justify-start overflow-x-auto whitespace-nowrap">
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
