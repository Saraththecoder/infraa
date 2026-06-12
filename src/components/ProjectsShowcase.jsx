import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiArrowRight, FiX, FiCheck, FiInfo, FiClock, FiGrid, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";

// Categories definition
const mainCategories = [
  { id: "all", name: "All Projects" },
  { id: "real-estate", name: "Real Estate Projects" },
  { id: "interiors", name: "Interior Projects" }
];

const subCategoriesMap = {
  "all": [
    { id: "all-sub", name: "All Types" }
  ],
  "real-estate": [
    { id: "all-sub", name: "All Real Estate" },
    { id: "plots-dev", name: "Plot Development Projects" },
    { id: "residential-prop", name: "Residential Property Projects" },
    { id: "investment-prop", name: "Investment Property Projects" }
  ],
  "interiors": [
    { id: "all-sub", name: "All Interiors" },
    { id: "kitchen", name: "Modular Kitchen Projects" },
    { id: "wardrobes", name: "Wardrobe Projects" },
    { id: "living", name: "Living Room Projects" },
    { id: "bedroom", name: "Bedroom Projects" },
    { id: "commercial", name: "Commercial Office Projects" },
    { id: "theatre", name: "Home Theatre Projects" },
    { id: "wallart", name: "Wall Art & Decor Projects" },
    { id: "gypsum", name: "Gypsum Ceiling Projects" },
    { id: "painting", name: "Painting Projects" },
    { id: "civil", name: "Civil Work Projects" },
    { id: "electrical", name: "Electrical Work Projects" },
    { id: "complete", name: "Complete Home Interior Projects" }
  ]
};

const serviceCategoryNames = {
  "plots-dev": "Plot Development Projects",
  "residential-prop": "Residential Property Projects",
  "investment-prop": "Investment Property Projects",
  "kitchen": "Modular Kitchen Projects",
  "wardrobes": "Wardrobe Projects",
  "living": "Living Room Projects",
  "bedroom": "Bedroom Projects",
  "commercial": "Commercial Office Projects",
  "theatre": "Home Theatre Projects",
  "wallart": "Wall Art & Decor Projects",
  "gypsum": "Gypsum Ceiling Projects",
  "painting": "Painting Projects",
  "civil": "Civil Work Projects",
  "electrical": "Electrical Work Projects",
  "complete": "Complete Home Interior Projects"
};

// Projects list database
const projects = [
  // REAL ESTATE
  {
    name: "Greenfield Gated Community",
    location: "LB Nagar, Hyderabad",
    status: "Completed",
    category: "real-estate",
    subcategory: "plots-dev",
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255404/h8hbnx6-1736165878-551639287-optorig-1_mklnx4.webp",
    description: "Premium plotted layout venture featuring legally verified plots and complete gated infrastructure.",
    area: "12 Acres",
    budget: "₹4.5 Cr - ₹5.2 Cr",
    duration: "8 Months",
    beforeImage: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255282/Country-Bank-aerial-view-of-plot-of-green-land-1024x683_pi8blb.webp",
    afterImage: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255404/h8hbnx6-1736165878-551639287-optorig-1_mklnx4.webp",
    testimonial: {
      text: "AK Group delivered this open plot venture with 100% legally verified papers and exceptional layouts. The blacktop roads are top notch.",
      author: "V. Ramesh, Investor"
    },
    features: [
      "HMDA Approved gated community layout",
      "40-feet wide BT blacktop internal roads",
      "Underground electrical cabling & conduits",
      "Avenue plantation & children play park",
      "Clear title validation with complete check"
    ]
  },
  {
    name: "Royal Sovereign Villas",
    location: "Gachibowli, Hyderabad",
    status: "Completed",
    category: "real-estate",
    subcategory: "residential-prop",
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781254017/villas-8216974_piy7qq.webp",
    description: "Luxury 4 BHK independent villas constructed with high-end structural engineering standards.",
    area: "4,500 sq.ft",
    budget: "₹2.2 Cr - ₹2.5 Cr",
    duration: "12 Months",
    beforeImage: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255911/new-empty-room-under-construction-plaster-walls-home-concrete-interior-renovation-166454551_vscu0i.webp",
    afterImage: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255658/Modern-Villa-Design-with-car-parking_pfgbls.webp",
    testimonial: {
      text: "The construction quality of our villa is outstanding. They used premium steel and concrete and met our timeline perfectly.",
      author: "Dr. Ananya Sen, Homeowner"
    },
    features: [
      "Custom 4 BHK structural layout design",
      "Earthquake resistant foundation walls",
      "Solar electricity micro-grid panels",
      "Private backyard land design & pool slot",
      "24/7 Gated security & access control gates"
    ]
  },
  {
    name: "Highway Commercial Plots",
    location: "Miyapur, Hyderabad",
    status: "Completed",
    category: "real-estate",
    subcategory: "investment-prop",
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255601/mumbai-highway-facing-open-plots-1000x1000_wqrqtj.webp",
    description: "Premium investment plots positioned in high-growth corridors featuring legally verified document checks.",
    area: "5 Acres",
    budget: "₹1.8 Cr - ₹2.1 Cr",
    duration: "6 Months",
    beforeImage: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255282/Country-Bank-aerial-view-of-plot-of-green-land-1024x683_pi8blb.webp",
    afterImage: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255601/mumbai-highway-facing-open-plots-1000x1000_wqrqtj.webp",
    testimonial: {
      text: "Clear title verification was handled entirely by AK Group. It was the smoothest land investment transaction I've ever experienced.",
      author: "K. Prasad, Business Owner"
    },
    features: [
      "DTCP layout approvals validated",
      "Excellent commercial road accessibility",
      "Fully fenced boundary wall layouts",
      "Clear titles & verified documentation checklist",
      "ROI advisory blueprint report completed"
    ]
  },

  // INTERIORS
  {
    name: "Sleek L-Shape Kitchen",
    location: "LB Nagar, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "kitchen",
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255943/modern-kitchen-in-luxury-home-with-island-and-hardwood-floor_nse36b.webp",
    description: "Premium modular kitchen using BWP Marine Plywood carcasses and high-gloss German acrylic shutters.",
    area: "180 sq.ft",
    budget: "₹3.5 Lakh - ₹4.5 Lakh",
    duration: "4 Weeks",
    beforeImage: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255911/new-empty-room-under-construction-plaster-walls-home-concrete-interior-renovation-166454551_vscu0i.webp",
    afterImage: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781255943/modern-kitchen-in-luxury-home-with-island-and-hardwood-floor_nse36b.webp",
    testimonial: {
      text: "Our kitchen looks like a dream now. The Hettich tandem baskets and soft-close hinges operate silently. Handover was clean.",
      author: "Mrs. S. Lakshmi, Resident"
    },
    features: [
      "German high-gloss Acrylic finish shutters",
      "Waterproof BWP Marine Ply carcasses",
      "Built-in chimney & microwave niches",
      "Quartz countertop with modular sink joints",
      "Soft-close Hettich tandem drawer systems"
    ]
  },
  {
    name: "Built-in Master Sliding Closets",
    location: "Jubilee Hills, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "wardrobes",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    description: "Floor-to-ceiling sliding wardrobe equipped with built-in internal lockers and LED sensors.",
    area: "120 sq.ft",
    budget: "₹2.2 Lakh - ₹2.8 Lakh",
    duration: "3 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Excellent wardrobe design. The automatic LED lights when we open the sliding doors are super convenient.",
      author: "R. Sidharth, Tech Executive"
    },
    features: [
      "Floor-to-ceiling space-saving sliding door layout",
      "Internal digital safety lockers integration",
      "Automatic sensor LEDs upon opening",
      "Tinted reflection glass facades",
      "Calibrated termite-proof HDHMR board"
    ]
  },
  {
    name: "Contemporary Living Lounge",
    location: "Gachibowli, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "living",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    description: "Living area overhaul featuring fluted panel dividers, marble-textured panels, and profile strips.",
    area: "320 sq.ft",
    budget: "₹4.8 Lakh - ₹5.5 Lakh",
    duration: "5 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Our living room TV unit has become the focal point of our home. Beautiful slatted partitions and stone textures.",
      author: "K. Kiran, Investor"
    },
    features: [
      "Marble-textured panels wall mounting",
      "Custom wooden louvers spatial divider",
      "Integrated dimmable profile LED tracks",
      "Floating TV console unit with drawers",
      "Warm accent spot track lighting grids"
    ]
  },
  {
    name: "Cozy Headboard Bed Suite",
    location: "Financial District, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "bedroom",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    description: "Bespoke bedroom styling with custom headboard paneling and floating side drawers.",
    area: "240 sq.ft",
    budget: "₹3.0 Lakh - ₹3.8 Lakh",
    duration: "4 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Highly customized. They designed the headboard paneling and integrated a matching study table perfectly.",
      author: "A. Kavitha, HR Lead"
    },
    features: [
      "Padded fabric cushion headboard board",
      "Floating side drawers with profile lines",
      "Bespoke study corner with book shelf",
      "Glass panel sliding closet pairing",
      "Dual tone paint finishes and putties"
    ]
  },
  {
    name: "Tech Workspace Hub",
    location: "Madhapur, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    description: "Turnkey office interior featuring modular staff desks, executive cabins, and boardrooms.",
    area: "2,800 sq.ft",
    budget: "₹24 Lakh - ₹28 Lakh",
    duration: "10 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Professional turnkey commercial project. The acoustical dividers and lighting grids look incredibly neat.",
      author: "N. Srinivas, Startup Founder"
    },
    features: [
      "32 Ergonomic staff modular desks setup",
      "3 Acoustic glass supervisor cabins",
      "Conference boardroom with integrated TV sockets",
      "Reception desk counter panels & waiting lounge",
      "Integrated false ceiling magnetic lighting grids"
    ]
  },
  {
    name: "Cinematic Home Cinema",
    location: "Jubilee Hills, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "theatre",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=800&auto=format&fit=crop",
    description: "Luxury home theatre equipped with soundproofing panels and dimmable track configurations.",
    area: "280 sq.ft",
    budget: "₹6.5 Lakh - ₹7.5 Lakh",
    duration: "6 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Excellent acoustics. The soundproofing is complete, and the screen backboard panels look fantastic.",
      author: "Y. Ajay, Investor"
    },
    features: [
      "Acoustic fabric wall panels installation",
      "Multi-level step carpet recliner seats",
      "Fibre-optic star coordinate ceiling grid",
      "Dimmable linear magnetic spotlight tracks",
      "Subwoofer low-frequency vibration panels"
    ]
  },
  {
    name: "MDF Backdrop Backlit Screens",
    location: "Secunderabad, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "wallart",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    description: "Handcrafted lobby wall art featuring backlit CNC metal sheets and textures.",
    area: "80 sq.ft",
    budget: "₹80,000 - ₹1.2 Lakh",
    duration: "10 Days",
    beforeImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Beautiful CNC metal jali frame and custom textures. It has elevated our lobby wall entirely.",
      author: "M. Venkat, Villa Owner"
    },
    features: [
      "CNC cut backlit metal screens",
      "Custom cement-texture base coating",
      "Back-run warm LED strip brackets",
      "Finished oak wood perimeter frames",
      "Low power circuit installation"
    ]
  },
  {
    name: "Linear Ambient LED Ceilings",
    location: "LB Nagar, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "gypsum",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    description: "Plasterboard false ceilings with magnetic linear tracks and decorative cove trims.",
    area: "1,200 sq.ft",
    budget: "₹1.4 Lakh - ₹1.8 Lakh",
    duration: "2 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Perfect linear lighting tracks. The gypsum ceiling is clean, with straight joints and no visible seams.",
      author: "P. Swathi, Homeowner"
    },
    features: [
      "Saint-Gobain Gyproc board templates",
      "Galvanized GI steel channels grid support",
      "Recessed magnetic linear lighting lanes",
      "Double paint finish coves for hidden LEDs",
      "Ceiling structural safety load checked"
    ]
  },
  {
    name: "Royal Anti-Fungal Textures",
    location: "LB Nagar, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "painting",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    description: "Premium interior painting execution using putty sanding, primers, and emulsion texture coats.",
    area: "1,800 sq.ft",
    budget: "₹90,000 - ₹1.3 Lakh",
    duration: "8 Days",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Excellent finish. The wall preparation putty and double coats of Royal Emulsion look flawless.",
      author: "K. Srinivas Rao, Owner"
    },
    features: [
      "Full wall putty sanding & leveling",
      "Asian Paints Royal Emulsion application",
      "Anti-fungal primer base coats",
      "Specialty metallic accent texture paint",
      "Zero-drip trim paint detailing"
    ]
  },
  {
    name: "Turnkey Tiling Renovations",
    location: "Kukatpally, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "civil",
    image: "https://images.unsplash.com/photo-1581094724017-d5d1c4df821f?q=80&w=800&auto=format&fit=crop",
    description: "Renovation works covering granite slab remodeling, wall cuts, and waterproofing.",
    area: "600 sq.ft",
    budget: "₹3.5 Lakh - ₹4.5 Lakh",
    duration: "3 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1581094724017-d5d1c4df821f?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "The civil slab alteration and structural piping were executed cleanly. Zero leaks, smooth slope alignment.",
      author: "B. Nagesh, Homeowner"
    },
    features: [
      "Granite kitchen counter remodeling",
      "Slope-aligned bathroom tiling floor layout",
      "Waterproofing floor seals validation",
      "Civil partition wall cuts & shifts",
      "Debris disposal and site cleanup"
    ]
  },
  {
    name: "Magnetic Circuit Conduit Grid",
    location: "Miyapur, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "electrical",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
    description: "Custom electrical installations covering conduits, breaker loops, and magnetic lighting tracks.",
    area: "1,500 sq.ft",
    budget: "₹1.1 Lakh - ₹1.5 Lakh",
    duration: "10 Days",
    beforeImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "Sleek magnetic track grids. The electrical circuit load was balanced professionally, avoiding voltage drops.",
      author: "G. Sathish, Resident"
    },
    features: [
      "Concealed Finolex wiring installations",
      "Modular Legrand switchboard configurations",
      "Conduit wall runs & groove cuts",
      "AC wiring circuit breaker loops",
      "Distribution board load balancer check"
    ]
  },
  {
    name: "Premium Gated 3BHK Turnkey",
    location: "LB Nagar, Hyderabad",
    status: "Completed",
    category: "interiors",
    subcategory: "complete",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    description: "Turnkey home interiors combining wardrobes, ceilings, modular units, and painting under one supervisor.",
    area: "2,200 sq.ft",
    budget: "₹12 Lakh - ₹15 Lakh",
    duration: "7 Weeks",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    testimonial: {
      text: "AK Group delivered our complete 3BHK home interior under a single dedicated supervisor. Outstanding modular finishing.",
      author: "T. Kiran Prasad, Executive"
    },
    features: [
      "Modular kitchen + custom wardrobes",
      "Living room marble panels backboard",
      "Plasterboard coves false ceiling",
      "Royal Emulsion painting double coats",
      "12-Year Structural Warranty certificate"
    ]
  }
];

// Project heights configuration for layout grid
const projectHeights = {
  "Greenfield Gated Community": true,
  "Royal Sovereign Villas": false,
  "Highway Commercial Plots": false,
  "Sleek L-Shape Kitchen": true,
  "Built-in Master Sliding Closets": true,
  "Contemporary Living Lounge": false,
  "Cozy Headboard Bed Suite": false,
  "Tech Workspace Hub": true,
  "Cinematic Home Cinema": false,
  "MDF Backdrop Backlit Screens": true,
  "Linear Ambient LED Ceilings": false,
  "Royal Anti-Fungal Textures": true,
  "Turnkey Tiling Renovations": false,
  "Magnetic Circuit Conduit Grid": true,
  "Premium Gated 3BHK Turnkey": false
};

// Before / After Slider Component inside Modal
function ModalBeforeAfterSlider({ before, after }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
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
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={onPointerDown}
      onTouchStart={onPointerDown}
      className="relative w-full aspect-video rounded-[4px] overflow-hidden select-none cursor-ew-resize border border-ak-border bg-stone-900 shadow-md"
    >
      {/* BEFORE Image */}
      <div className="absolute inset-0">
        <img 
          src={before} 
          alt="Before Transformation" 
          className="w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute top-3.5 left-3.5 bg-slate-950/80 border border-white/10 px-2.5 py-1 text-[9px] font-sans font-bold text-white tracking-widest uppercase rounded-[2px] z-20">
          BEFORE
        </span>
      </div>

      {/* AFTER Image (Clipped) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img 
          src={after} 
          alt="After Transformation" 
          className="w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute top-3.5 right-3.5 bg-ak-gold px-2.5 py-1 text-[9px] font-sans font-bold text-white tracking-widest uppercase rounded-[2px] z-20">
          AFTER
        </span>
      </div>

      {/* Sliding Bar Divider */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-[1px] bg-white/40 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white border border-ak-gold flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 absolute top-1/2 cursor-ew-resize select-none pointer-events-none">
          <span className="text-[10px] text-ak-navy font-bold select-none">↔</span>
        </div>
      </div>
    </div>
  );
}

// Project Details Modal Component
function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-white text-ak-navy w-full max-w-4xl shadow-ak-lg rounded-[4px] overflow-hidden flex flex-col md:flex-row border border-ak-border max-h-[90vh] md:max-h-[85vh]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/90 text-ak-navy border border-ak-border hover:bg-ak-gold hover:text-white transition-all shadow-md"
          aria-label="Close details"
        >
          <FiX size={16} />
        </button>

        {/* Left column (55%): Image Slider */}
        <div className="w-full md:w-7/12 p-6 flex flex-col justify-center bg-ak-offwhite border-r border-ak-border">
          <div className="mb-4 text-left">
            <span className="text-[10px] font-sans font-bold tracking-wider text-ak-gold uppercase">Interactive Transformation</span>
            <h4 className="font-serif text-lg font-bold text-ak-navy mt-1">Drag the slider left or right</h4>
          </div>
          <ModalBeforeAfterSlider before={project.beforeImage} after={project.afterImage} />
        </div>

        {/* Right column (45%): Specs & Text */}
        <div className="w-full md:w-5/12 p-8 overflow-y-auto text-left flex flex-col justify-between">
          <div>
            <span className="text-ak-gold text-[10px] font-sans font-bold tracking-widest uppercase">
              {project.category === "real-estate" ? "Real Estate Venture" : "Interior Solution"}
            </span>
            <h3 className="font-serif text-2xl font-bold text-ak-navy mt-1.5 leading-tight">{project.name}</h3>
            
            <div className="flex flex-col gap-1.5 mt-3">
              <div className="flex items-center gap-1.5 text-xs text-ak-slate font-sans">
                <span className="text-[10px] font-sans font-bold tracking-wider text-ak-gold uppercase">Service Category:</span>
                <span className="font-semibold text-ak-navy">
                  {serviceCategoryNames[project.subcategory] || "General Project"}
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 text-ak-muted text-xs font-sans">
                <FiMapPin size={12} className="text-ak-gold shrink-0" />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Spec details grid */}
            <div className="grid grid-cols-3 gap-3.5 my-6 bg-ak-offwhite p-4 border border-ak-border rounded-[2px]">
              <div>
                <span className="block text-[9px] font-sans font-bold tracking-wider text-ak-muted uppercase">Area</span>
                <span className="block text-xs font-bold text-ak-navy mt-1 truncate">{project.area}</span>
              </div>
              <div>
                <span className="block text-[9px] font-sans font-bold tracking-wider text-ak-muted uppercase">Budget</span>
                <span className="block text-xs font-bold text-ak-navy mt-1 truncate">{project.budget}</span>
              </div>
              <div>
                <span className="block text-[9px] font-sans font-bold tracking-wider text-ak-muted uppercase">Duration</span>
                <span className="block text-xs font-bold text-ak-navy mt-1 truncate">{project.duration}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h5 className="text-[11px] font-sans font-bold tracking-wider text-ak-navy uppercase mb-3">Key Features</h5>
              <ul className="space-y-2 text-xs font-sans text-ak-slate leading-relaxed">
                {project.features.map((feat) => (
                  <li key={feat} className="flex gap-2 items-start">
                    <FiCheck size={14} className="text-ak-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Quote */}
            <div className="border-l-[3px] border-ak-gold pl-4 py-1.5 bg-ak-offwhite/50 mb-6 italic text-xs text-ak-slate font-sans leading-relaxed">
              <p>"{project.testimonial.text}"</p>
              <span className="block text-[10px] font-sans font-bold tracking-wide text-ak-muted uppercase mt-2.5 not-italic">— {project.testimonial.author}</span>
            </div>
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            className="w-full text-center py-3 bg-ak-navy text-white hover:bg-ak-gold hover:text-ak-navy-deep font-sans text-xs font-bold tracking-widest uppercase transition-colors duration-300 rounded-[2px]"
          >
            Inquire About Similar Works
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// Main Projects Showcase Component
export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState("all-sub");
  const [selectedProject, setSelectedProject] = useState(null);

  // Reset subcategory on main tab change
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setActiveSubCategory("all-sub");
  };

  // Filter logic
  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = activeCategory === "all" || proj.category === activeCategory;
    const matchesSubCategory = activeSubCategory === "all-sub" || proj.subcategory === activeSubCategory;
    return matchesCategory && matchesSubCategory;
  });

  // Columns partition to maintain Masonry styling
  const leftColumnProjects = filteredProjects.filter((_, idx) => idx % 2 === 0);
  const rightColumnProjects = filteredProjects.filter((_, idx) => idx % 2 !== 0);

  const renderCard = (project) => {
    const isTall = projectHeights[project.name] ?? false;
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4 }}
        key={project.name}
        onClick={() => setSelectedProject(project)}
        className={`group relative overflow-hidden rounded-none shadow-ak-sm hover:shadow-ak-lg cursor-pointer bg-ak-offwhite w-full ${
          isTall ? "h-[420px] md:h-[520px]" : "h-[280px] md:h-[320px]"
        }`}
      >
        {/* Project Thumbnail Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Linear overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(11, 26, 48, 0.95) 0%, rgba(11, 26, 48, 0.35) 60%, transparent 100%)"
          }}
        />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-left">
          {/* Status Badge */}
          <div className="w-fit bg-ak-gold text-ak-navy-deep text-[10px] font-sans font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-none mb-4">
            {project.status.toUpperCase()}
          </div>

          {/* Project Name */}
          <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
            {project.name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-white/65 text-xs font-sans font-medium tracking-wide">
            <FiMapPin size={12} className="text-ak-gold" />
            <span>{project.location}</span>
          </div>

          {/* Slider trigger cue on hover */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out">
            <p className="text-white/85 font-sans text-xs md:text-sm mt-4 leading-relaxed pr-6">
              {project.description}
            </p>
          </div>

          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 text-white w-8 h-8 rounded-none border border-white/20 flex items-center justify-center group-hover:border-ak-gold group-hover:text-ak-gold transition-colors duration-300">
            <FiArrowRight size={14} />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-pad bg-white relative overflow-hidden min-h-screen">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
            <div className="text-left max-w-xl">
              <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase">
                [ Our Completed Masterpieces ]
              </span>
              <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
                A portfolio of crafted spaces
              </h2>
              <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-md">
                Browse our completed plotted developments and bespoke home interior solutions executed across Hyderabad. Click any card to preview full project details.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 border-b border-ak-border pb-2 self-start md:self-end w-full md:w-auto">
              {mainCategories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 font-sans ${
                    activeCategory === tab.id
                      ? "text-ak-gold font-bold"
                      : "text-ak-muted hover:text-ak-navy"
                  }`}
                >
                  {tab.name}
                  {activeCategory === tab.id && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-ak-gold"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Double tier: Sub-category filter tags */}
          {subCategoriesMap[activeCategory] && subCategoriesMap[activeCategory].length > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 justify-start border-t border-ak-border/60 pt-4"
            >
              {subCategoriesMap[activeCategory].map((subTab) => (
                <button
                  key={subTab.id}
                  onClick={() => setActiveSubCategory(subTab.id)}
                  className={`px-4 py-2 text-[10px] font-bold tracking-wider uppercase transition-all duration-200 border rounded-[2px] ${
                    activeSubCategory === subTab.id
                      ? "bg-ak-navy text-white border-ak-navy shadow-sm"
                      : "bg-ak-offwhite text-ak-muted border-ak-border/60 hover:text-ak-navy"
                  }`}
                >
                  {subTab.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            <AnimatePresence mode="popLayout">
              {leftColumnProjects.map((project) => (
                <motion.div key={project.name} layout>
                  {renderCard(project)}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            <AnimatePresence mode="popLayout">
              {rightColumnProjects.map((project) => (
                <motion.div key={project.name} layout>
                  {renderCard(project)}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Project details popup modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
