import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
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
    id: "constructions",
    name: "Constructions",
    eyebrow: "[ Turnkey Solutions ]",
    headline: "End-to-End Construction Services",
    description: "End-to-end turnkey construction solutions for residential, commercial, and industrial projects with a focus on quality, safety, and timely delivery."
  },
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
  }
];

const constructionServices = [
  {
    num: "01",
    title: "Residential Constructions",
    description: "Premium villas, duplexes, and custom independent homes built with high-quality materials, sustainable practices, and modern architectural design.",
    bullets: [
      { text: "Custom Villas", icon: "FiHome" },
      { text: "High-grade materials", icon: "FiShield" },
      { text: "Vastu compliant", icon: "FiCompass" },
      { text: "Smart home ready", icon: "FiLayers" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781364462/photo-1621511075938-f03482369feb_vgfvr1.webp"
  },
  {
    num: "02",
    title: "Commercial & Retail Complexes",
    description: "Sleek, modern commercial buildings, shopping arcades, and corporate office spaces designed for high traffic, utility, and visual impact.",
    bullets: [
      { text: "Corporate offices", icon: "FiBriefcase" },
      { text: "Retail arcades", icon: "FiMapPin" },
      { text: "Structured layouts", icon: "FiGrid" },
      { text: "Timely delivery", icon: "FiCheckCircle" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781364852/1495788fc5e2ad0d7a1a0a90451c2616_rxavbt.webp"
  },
  {
    num: "03",
    title: "Industrial Warehousing",
    description: "Heavy-duty industrial sheds, factory structures, and spacious logistics warehouses built for extreme load-bearing and operational efficiency.",
    bullets: [
      { text: "Logistics facilities", icon: "FiLayers" },
      { text: "Heavy-duty built", icon: "FiShield" },
      { text: "Optimized space", icon: "FiMaximize" },
      { text: "Code compliant", icon: "FiCheckCircle" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781364884/Industrial-Warehousing_gkxgt6.webp"
  },
  {
    num: "04",
    title: "Turnkey Contracting",
    description: "End-to-end turnkey construction solutions handling everything from architectural blueprints and municipal approvals to final handover.",
    bullets: [
      { text: "End-to-end management", icon: "FiAward" },
      { text: "Cost efficiency", icon: "FiDollarSign" },
      { text: "Expert engineering", icon: "FiUsers" },
      { text: "Strict quality control", icon: "FiShield" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781364912/Labour_Contracting-1_kretix.webp"
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
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781365617/72986f_979504d85df7426b9d75cb6c1818d1ac_mv2_tabswv.webp"
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
    title: "Commercial Lands",
    description: "High-potential commercial-zoned land parcels situated along busy highway corridors and junction lines, optimized for warehouses, showrooms, or retail parks.",
    bullets: [
      { text: "Commercial-zoned plots", icon: "FiBriefcase" },
      { text: "Highway corridor facing", icon: "FiMapPin" },
      { text: "High utility connectivity", icon: "FiLayers" },
      { text: "Rapid commercial growth", icon: "FiTrendingUp" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255601/mumbai-highway-facing-open-plots-1000x1000_wqrqtj.webp"
  },
  {
    num: "05",
    title: "Open Lands",
    description: "Raw acreage and strategic bulk land parcels with clear titles, boundary walls, and direct highway connectivity, perfect for long-term investments.",
    bullets: [
      { text: "Clear title & registration", icon: "FiCheckCircle" },
      { text: "Secure boundary walls", icon: "FiShield" },
      { text: "Strategic road access", icon: "FiMapPin" },
      { text: "Bulk land banking ROI", icon: "FiTrendingUp" }
    ],
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255282/Country-Bank-aerial-view-of-plot-of-green-land-1024x683_pi8blb.webp"
  }
];

export default function Services() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    return location.state?.tab ? location.state.tab : "constructions";
  });

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  const currentServices = activeTab === "real-estate" ? realEstateServices : activeTab === "constructions" ? constructionServices : landServices;
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
              }}
              className={`relative px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 font-sans cursor-pointer ${
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

        {/* Grid Layout: Photos First, Matter Next */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12">
          {currentServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-ak-border rounded-none shadow-ak-sm hover:shadow-ak-lg transition-all duration-350 flex flex-col group overflow-hidden"
            >
              {/* Photo First: Card Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Number Badge overlay */}
                <div className="absolute top-4 left-4 bg-ak-navy text-white text-[11px] font-serif font-bold px-3 py-1.5 shadow-md">
                  {service.num}
                </div>
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ak-navy/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Matter Next: Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1 text-left justify-between">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-ak-navy group-hover:text-ak-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-ak-muted font-sans text-xs md:text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points tags */}
                  {service.bullets && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.bullets.map((bullet) => (
                        <span 
                          key={bullet.text} 
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[2px] bg-ak-navy/5 text-ak-navy text-[10px] font-sans font-medium hover:bg-ak-gold/10 hover:text-ak-gold transition-colors duration-200"
                        >
                          {iconMap[bullet.icon] || <FiCheckCircle size={10} className="text-ak-gold shrink-0" />}
                          <span>{bullet.text}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Card CTA Buttons */}
                <div className="mt-6 pt-4 border-t border-ak-border grid grid-cols-2 gap-3">
                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/919948100096?text=Hi%2C%20I%20am%20interested%20in%20your%20service%3A%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-[11px] font-bold tracking-wider uppercase transition-all duration-300 text-center shadow-sm"
                  >
                    <FaWhatsapp size={13} className="shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  {/* Call button */}
                  <a
                    href="tel:+919948100096"
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-ak-navy hover:bg-ak-gold text-white hover:text-ak-navy-deep font-sans text-[11px] font-bold tracking-wider uppercase transition-all duration-300 text-center shadow-sm"
                  >
                    <FaPhone size={11} className="shrink-0" />
                    <span>Call 1</span>
                  </a>

                  {/* Additional Call button */}
                  <a
                    href="tel:+919014529890"
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-ak-navy hover:bg-ak-gold text-white hover:text-ak-navy-deep font-sans text-[11px] font-bold tracking-wider uppercase transition-all duration-300 text-center shadow-sm col-span-2"
                  >
                    <FaPhone size={11} className="shrink-0" />
                    <span>Call 2</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Start Your Journey Button */}
        <div className="text-left mt-12">
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-ak-navy text-white hover:bg-ak-gold hover:text-ak-navy-deep font-sans text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-350 inline-block shadow-ak-md"
          >
            Start Your Journey
          </Link>
        </div>

      </div>
    </section>
  );
}
