import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSliders, FiLayout, FiGrid, FiCheckCircle, FiPhoneCall, FiInfo } from "react-icons/fi";

export default function InteriorCalculator() {
  const [activeTab, setActiveTab] = useState("full-home"); // full-home, kitchen, wardrobe
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // ==========================================
  // STATE & LOGIC: FULL HOME ESTIMATOR
  // ==========================================
  const [bhk, setBhk] = useState("3BHK"); // 2BHK, 3BHK, 4BHK, Villa
  const [scope, setScope] = useState({
    kitchen: true,
    wardrobes: true,
    ceiling: false,
    tvUnit: true,
    painting: false,
    civil: false,
  });
  const [tier, setTier] = useState("Premium"); // Essential, Premium, Luxury

  const bhkBasePrice = {
    "2BHK": 450000,
    "3BHK": 650000,
    "4BHK": 900000,
    "Villa": 1400000,
  };

  const scopePrices = {
    kitchen: 220000,
    wardrobes: {
      "2BHK": 240000, // 2 wardrobes
      "3BHK": 360000, // 3 wardrobes
      "4BHK": 480000, // 4 wardrobes
      "Villa": 600000, // 5 wardrobes
    },
    ceiling: 90000,
    tvUnit: 80000,
    painting: 70000,
    civil: 60000,
  };

  const getFullHomeEstimate = () => {
    let price = bhkBasePrice[bhk];
    
    if (scope.kitchen) price += scopePrices.kitchen;
    if (scope.wardrobes) price += scopePrices.wardrobes[bhk];
    if (scope.ceiling) price += scopePrices.ceiling;
    if (scope.tvUnit) price += scopePrices.tvUnit;
    if (scope.painting) price += scopePrices.painting;
    if (scope.civil) price += scopePrices.civil;

    if (tier === "Premium") price *= 1.25;
    if (tier === "Luxury") price *= 1.6;

    return Math.round(price);
  };

  // ==========================================
  // STATE & LOGIC: MODULAR KITCHEN ESTIMATOR
  // ==========================================
  const [kitchenLayout, setKitchenLayout] = useState("L-Shape"); // L-Shape, Parallel, U-Shape, Straight
  const [kitchenLength, setKitchenLength] = useState(12); // in feet
  const [kitchenFinish, setKitchenFinish] = useState("Acrylic"); // Laminate, Acrylic, PU, Glass
  const [kitchenAccessories, setKitchenAccessories] = useState({
    pantry: false,
    tallUnit: false,
    softClose: true,
    glassCabinet: false,
  });

  const getKitchenEstimate = () => {
    let baseRate = 2200; // Laminate
    if (kitchenFinish === "Acrylic") baseRate = 3500;
    if (kitchenFinish === "PU") baseRate = 4500;
    if (kitchenFinish === "Glass") baseRate = 5800;

    let price = kitchenLength * baseRate * 1.5; // accounts for upper + lower cabinets

    // Layout modifiers
    if (kitchenLayout === "Parallel") price *= 1.35;
    if (kitchenLayout === "U-Shape") price *= 1.6;

    // Accessories
    if (kitchenAccessories.pantry) price += 35000;
    if (kitchenAccessories.tallUnit) price += 25000;
    if (kitchenAccessories.softClose) price += 15000;
    if (kitchenAccessories.glassCabinet) price += 18000;

    return Math.round(price);
  };

  // ==========================================
  // STATE & LOGIC: CUSTOM WARDROBE ESTIMATOR
  // ==========================================
  const [wardrobeDoors, setWardrobeDoors] = useState("Sliding"); // Swing, Sliding, Walk-In
  const [wardrobeWidth, setWardrobeWidth] = useState(6); // in feet
  const [wardrobeHeight, setWardrobeHeight] = useState(8); // in feet
  const [wardrobeFinish, setWardrobeFinish] = useState("Laminate"); // Laminate, Acrylic, Glass, PU
  const [wardrobeAccs, setWardrobeAccs] = useState({
    leds: true,
    drawers: true,
    tieRack: false,
  });

  const getWardrobeEstimate = () => {
    const area = wardrobeWidth * wardrobeHeight;
    let sqftRate = 1400; // Laminate Swing

    if (wardrobeDoors === "Sliding") {
      sqftRate = 1800; // Sliding is premium
    } else if (wardrobeDoors === "Walk-In") {
      sqftRate = 2400;
    }

    // Finish adjustments
    if (wardrobeFinish === "Acrylic") sqftRate += 300;
    if (wardrobeFinish === "Glass") sqftRate += 600;
    if (wardrobeFinish === "PU") sqftRate += 850;

    let price = area * sqftRate;

    if (wardrobeAccs.leds) price += 8000;
    if (wardrobeAccs.drawers) price += 6000;
    if (wardrobeAccs.tieRack) price += 4000;

    return Math.round(price);
  };

  // ==========================================
  // GLOBAL LOGIC
  // ==========================================
  const getCurrentEstimate = () => {
    if (activeTab === "full-home") return getFullHomeEstimate();
    if (activeTab === "kitchen") return getKitchenEstimate();
    return getWardrobeEstimate();
  };

  const getSummaryText = () => {
    if (activeTab === "full-home") {
      return `${bhk} Home Design (${tier} Tier)`;
    }
    if (activeTab === "kitchen") {
      return `${kitchenLayout} Modular Kitchen (${kitchenLength}ft, ${kitchenFinish} finish)`;
    }
    return `${wardrobeDoors} Wardrobe (${wardrobeWidth}x${wardrobeHeight}ft, ${wardrobeFinish} finish)`;
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="section-pad bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-ak-navy opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-ak-gold opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
            — Instant Price Estimator
          </div>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            Calculate Your Interior Budget
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            Get an instant modular interior quote in seconds. Choose your scope, layout, finishes, and dimensions to preview pricing transparently (±10% variance).
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-ak-border pb-4 mb-10">
          {[
            { id: "full-home", label: "Full Home Interiors", icon: <FiLayout /> },
            { id: "kitchen", label: "Modular Kitchen", icon: <FiGrid /> },
            { id: "wardrobe", label: "Custom Wardrobes", icon: <FiSliders /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSubmitted(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-wider uppercase rounded-[2px] transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-ak-navy text-white shadow-ak-sm"
                  : "bg-ak-offwhite text-ak-muted hover:text-ak-navy border border-ak-border/60"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Estimator Content & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column (7/12) - Calculator Controls */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: FULL HOME */}
              {activeTab === "full-home" && (
                <motion.div
                  key="full-home-calc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  {/* Step 1: BHK */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ak-navy mb-4">
                      1. Select Apartment Layout
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["2BHK", "3BHK", "4BHK", "Villa"].map((item) => (
                        <button
                          key={item}
                          onClick={() => setBhk(item)}
                          className={`py-3.5 text-center font-sans text-xs font-bold rounded-[2px] border transition-all duration-200 uppercase tracking-wider ${
                            bhk === item
                              ? "border-ak-gold bg-ak-gold/5 text-ak-gold font-bold"
                              : "border-ak-border hover:border-ak-navy text-ak-slate"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Scope Checklist */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ak-navy mb-4">
                      2. Choose Required Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: "kitchen", label: "Modular Kitchen", desc: "Base cabinets, wall units, drawer units" },
                        { id: "wardrobes", label: `Bespoke Wardrobes`, desc: `Designer closets for each bedroom` },
                        { id: "tvUnit", label: "Living Room TV Unit", desc: "Floating storage console & wall panelling" },
                        { id: "ceiling", label: "False Ceiling & Profile LEDs", desc: "Gypsum sheets, decorative cove trims" },
                        { id: "painting", label: "Premium Emulsion Painting", desc: "Full home double coats & accent colors" },
                        { id: "civil", label: "Civil & Electrical Alterations", desc: "Switchboard shifts, plumbing adjustments" },
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setScope(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`p-4 border rounded-[4px] cursor-pointer transition-all duration-200 select-none flex items-start gap-3.5 ${
                            scope[item.id]
                              ? "border-ak-gold bg-ak-gold/[0.02] shadow-sm"
                              : "border-ak-border hover:border-slate-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={scope[item.id]}
                            onChange={() => {}} // handled by div click
                            className="mt-1 accent-ak-gold shrink-0 cursor-pointer"
                          />
                          <div>
                            <span className="block font-sans text-xs font-bold text-ak-navy tracking-wide">{item.label}</span>
                            <span className="block font-sans text-[11px] text-ak-muted mt-1 leading-normal">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Material Quality Tier */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-4">
                      <h3 className="font-serif text-lg font-bold text-ak-navy">
                        3. Material Quality & Fittings
                      </h3>
                      <div className="group relative cursor-pointer">
                        <FiInfo className="text-ak-muted hover:text-ak-navy" size={14} />
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 hidden group-hover:block bg-ak-navy-deep text-white text-[10px] leading-relaxed p-3 rounded-[3px] shadow-ak-lg w-64 z-50">
                          <strong>Essential</strong>: Sleek commercial laminates, standard wire baskets.<br />
                          <strong>Premium</strong>: High-gloss acrylics, soft-close drawers, Hettich/Ebco.<br />
                          <strong>Luxury</strong>: Custom tinted glass, lacquer PU, Hafele liftups.
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: "Essential", label: "Essential Tier", desc: "Matte laminates & standard soft-close" },
                        { id: "Premium", label: "Premium Tier", desc: "Gloss acrylic, HDMR boards & branded hardware" },
                        { id: "Luxury", label: "Luxury Tier", desc: "Tinted glass, PU lacquers & premium Hafele fixtures" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setTier(item.id)}
                          className={`p-4 text-left border rounded-[4px] transition-all duration-200 flex flex-col justify-between ${
                            tier === item.id
                              ? "border-ak-gold bg-ak-gold/5 shadow-sm"
                              : "border-ak-border hover:border-ak-navy text-ak-slate"
                          }`}
                        >
                          <span className="font-sans text-xs font-bold uppercase tracking-wider block">{item.label}</span>
                          <span className="font-sans text-[10px] text-ak-muted mt-1.5 leading-normal block">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: KITCHEN */}
              {activeTab === "kitchen" && (
                <motion.div
                  key="kitchen-calc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  {/* Kitchen Layout */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ak-navy mb-4">
                      1. Select Kitchen Layout
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["L-Shape", "U-Shape", "Parallel", "Straight"].map((item) => (
                        <button
                          key={item}
                          onClick={() => setKitchenLayout(item)}
                          className={`py-3.5 text-center font-sans text-xs font-bold rounded-[2px] border transition-all duration-200 uppercase tracking-wider ${
                            kitchenLayout === item
                              ? "border-ak-gold bg-ak-gold/5 text-ak-gold"
                              : "border-ak-border hover:border-ak-navy text-ak-slate"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dimension Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-serif text-lg font-bold text-ak-navy">
                        2. Countertop Length
                      </h3>
                      <span className="font-serif text-xl font-bold text-ak-gold">
                        {kitchenLength} Running Feet
                      </span>
                    </div>
                    <input
                      type="range"
                      min="8"
                      max="24"
                      step="1"
                      value={kitchenLength}
                      onChange={(e) => setKitchenLength(Number(e.target.value))}
                      className="w-full h-[6px] bg-slate-200 rounded-lg appearance-none cursor-pointer accent-ak-gold"
                      style={{
                        background: `linear-gradient(to right, #D97706 0%, #D97706 ${(kitchenLength - 8) / 16 * 100}%, #E2E8F0 ${(kitchenLength - 8) / 16 * 100}%, #E2E8F0 100%)`
                      }}
                    />
                  </div>

                  {/* Material Finish */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ak-navy mb-4">
                      3. Cabinet Shutters Finish
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: "Laminate", label: "Laminate", desc: "Matte/Suede, very durable" },
                        { id: "Acrylic", label: "Acrylic", desc: "Ultra high-gloss, premium feel" },
                        { id: "PU", label: "PU Lacquer", desc: "Rich seamless paint texture" },
                        { id: "Glass", label: "Profile Glass", desc: "Tinted glass in metal frame" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setKitchenFinish(item.id)}
                          className={`p-3.5 text-left border rounded-[2px] transition-all duration-200 flex flex-col justify-between h-24 ${
                            kitchenFinish === item.id
                              ? "border-ak-gold bg-ak-gold/5 shadow-sm"
                              : "border-ak-border hover:border-ak-navy"
                          }`}
                        >
                          <span className="font-sans text-xs font-bold uppercase tracking-wider block">{item.label}</span>
                          <span className="font-sans text-[9px] text-ak-muted mt-1 leading-normal block">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Premium Accessories */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ak-navy mb-4">
                      4. Add Accessories
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: "softClose", label: "Soft Close Hinges (Hettich)", desc: "Silent doors closing mechanism" },
                        { id: "pantry", label: "Pantry Pull-out Unit", desc: "Multi-layered kitchen storage larder" },
                        { id: "tallUnit", label: "Oven Tall Cabinet Unit", desc: "Built-in slot for microwave & convection" },
                        { id: "glassCabinet", label: "Under-cabinet profile LEDs", desc: "Direct countertop task lighting" },
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setKitchenAccessories(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`p-4 border rounded-[4px] cursor-pointer transition-all duration-200 select-none flex items-start gap-3.5 ${
                            kitchenAccessories[item.id]
                              ? "border-ak-gold bg-ak-gold/[0.02] shadow-sm"
                              : "border-ak-border hover:border-slate-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={kitchenAccessories[item.id]}
                            onChange={() => {}} // handled by div click
                            className="mt-1 accent-ak-gold shrink-0 cursor-pointer"
                          />
                          <div>
                            <span className="block font-sans text-xs font-bold text-ak-navy tracking-wide">{item.label}</span>
                            <span className="block font-sans text-[11px] text-ak-muted mt-1 leading-normal">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: WARDROBES */}
              {activeTab === "wardrobe" && (
                <motion.div
                  key="wardrobe-calc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  {/* Door Mechanism */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ak-navy mb-4">
                      1. Door Opening Mechanism
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "Swing", label: "Classic Swing Door", desc: "Requires space to swing open" },
                        { id: "Sliding", label: "Modern Sliding Door", desc: "Space-saving side-glide sliders" },
                        { id: "Walk-In", label: "Walk-in Wardrobe", desc: "Open partition panels, luxury wardrobe rooms" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setWardrobeDoors(item.id)}
                          className={`p-3.5 text-left border rounded-[2px] transition-all duration-200 flex flex-col justify-between h-24 ${
                            wardrobeDoors === item.id
                              ? "border-ak-gold bg-ak-gold/5 shadow-sm"
                              : "border-ak-border hover:border-ak-navy"
                          }`}
                        >
                          <span className="font-sans text-xs font-bold uppercase tracking-wider block">{item.label}</span>
                          <span className="font-sans text-[9px] text-ak-muted mt-1 leading-normal block">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-serif text-base font-bold text-ak-navy">Wardrobe Width</span>
                        <span className="font-serif text-lg font-bold text-ak-gold">{wardrobeWidth} Feet</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="12"
                        value={wardrobeWidth}
                        onChange={(e) => setWardrobeWidth(Number(e.target.value))}
                        className="w-full h-[6px] bg-slate-200 rounded-lg appearance-none cursor-pointer accent-ak-gold"
                        style={{
                          background: `linear-gradient(to right, #D97706 0%, #D97706 ${(wardrobeWidth - 5) / 7 * 100}%, #E2E8F0 ${(wardrobeWidth - 5) / 7 * 100}%, #E2E8F0 100%)`
                        }}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-serif text-base font-bold text-ak-navy">Wardrobe Height</span>
                        <span className="font-serif text-lg font-bold text-ak-gold">{wardrobeHeight} Feet</span>
                      </div>
                      <input
                        type="range"
                        min="7"
                        max="10"
                        value={wardrobeHeight}
                        onChange={(e) => setWardrobeHeight(Number(e.target.value))}
                        className="w-full h-[6px] bg-slate-200 rounded-lg appearance-none cursor-pointer accent-ak-gold"
                        style={{
                          background: `linear-gradient(to right, #D97706 0%, #D97706 ${(wardrobeHeight - 7) / 3 * 100}%, #E2E8F0 ${(wardrobeHeight - 7) / 3 * 100}%, #E2E8F0 100%)`
                        }}
                      />
                    </div>
                  </div>

                  {/* Wardrobe Finish */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ak-navy mb-4">
                      3. Exterior Surface Finish
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {["Laminate", "Acrylic", "Glass", "PU"].map((item) => (
                        <button
                          key={item}
                          onClick={() => setWardrobeFinish(item)}
                          className={`py-3.5 text-center font-sans text-xs font-bold rounded-[2px] border transition-all duration-200 uppercase tracking-wider ${
                            wardrobeFinish === item
                              ? "border-ak-gold bg-ak-gold/5 text-ak-gold"
                              : "border-ak-border hover:border-ak-navy"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Wardrobe Accessories */}
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ak-navy mb-4">
                      4. Internal Organization Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { id: "leds", label: "Smart Sensor LEDs", desc: "Lights up automatically upon opening doors" },
                        { id: "drawers", label: "Internal Lockers", desc: "Private drawers with digital numerical lock" },
                        { id: "tieRack", label: "Slide-out Tie & Belt Hanger", desc: "Sleek sliding hanger organizers" },
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setWardrobeAccs(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`p-4 border rounded-[4px] cursor-pointer transition-all duration-200 select-none flex items-start gap-3.5 ${
                            wardrobeAccs[item.id]
                              ? "border-ak-gold bg-ak-gold/[0.02] shadow-sm"
                              : "border-ak-border hover:border-slate-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={wardrobeAccs[item.id]}
                            onChange={() => {}} // handled by div click
                            className="mt-1 accent-ak-gold shrink-0 cursor-pointer"
                          />
                          <div>
                            <span className="block font-sans text-xs font-bold text-ak-navy tracking-wide">{item.label}</span>
                            <span className="block font-sans text-[10px] text-ak-muted mt-1 leading-normal font-light">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column (5/12) - Lead Generation Form */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
            <div className="bg-ak-navy-deep text-white rounded-[4px] p-8 shadow-ak-lg border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-ak-gold opacity-10 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="lead-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-left flex flex-col h-full justify-between"
                  >
                    <div>
                      <span className="bg-ak-gold/15 text-ak-gold text-[10px] font-sans font-bold tracking-widest uppercase px-2 py-0.5 rounded-[2px] inline-block mb-3.5">
                        Estimated Pricing Summary
                      </span>
                      
                      <h3 className="font-serif text-2xl font-bold text-white mb-1">
                        {formatCurrency(getCurrentEstimate())}
                      </h3>
                      
                      <p className="text-xs text-white/60 font-sans tracking-wide mb-6">
                        {getSummaryText()}
                      </p>

                      <hr className="border-white/10 mb-6" />

                      <h4 className="font-serif text-base font-bold text-white mb-2">
                        Lock In This Price Estimate
                      </h4>
                      <p className="text-[11px] text-white/50 font-sans leading-relaxed mb-6">
                        Submit your name and mobile number to request a free design consultation, site measurement validation, and a detailed itemized catalog.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-white/70 mb-1.5">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/15 focus:border-ak-gold focus:outline-none rounded-[2px] px-4 py-3 text-xs text-white placeholder-white/30 transition-all font-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-white/70 mb-1.5">
                            Mobile Number
                          </label>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            title="Please enter a valid 10-digit mobile number"
                            placeholder="Enter 10-digit mobile number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-white/5 border border-white/15 focus:border-ak-gold focus:outline-none rounded-[2px] px-4 py-3 text-xs text-white placeholder-white/30 transition-all font-sans"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-6 py-4 bg-ak-gold hover:bg-ak-gold-light text-white font-sans text-xs font-bold tracking-widest uppercase rounded-[2px] transition-all duration-300 shadow-ak-sm flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <FiPhoneCall size={12} /> Claim Quote & Design Call
                        </button>
                      </form>
                    </div>

                    {/* Guarantees List */}
                    <div className="mt-8 pt-6 border-t border-white/10 space-y-3.5 text-xs text-white/75 font-sans">
                      <div className="flex gap-2.5 items-start">
                        <FiCheckCircle size={14} className="text-ak-gold shrink-0 mt-0.5" />
                        <span><strong>45-Day Delivery Guarantee</strong>: If your modular interior handover is delayed, we cover your rent.</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <FiCheckCircle size={14} className="text-ak-gold shrink-0 mt-0.5" />
                        <span><strong>12-Year Structural Warranty</strong>: Full factory replacement pledge on termite and moisture-proof cabinets.</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <FiCheckCircle size={14} className="text-ak-gold shrink-0 mt-0.5" />
                        <span><strong>Free Virtual 3D Renders</strong>: Meet our designers at the LB Nagar studio to review your home in virtual reality.</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="calc-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-600/10 flex items-center justify-center border border-emerald-500/30 text-emerald-400 mb-6 animate-bounce">
                      <FiCheckCircle size={32} />
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      Estimate Locked!
                    </h3>
                    
                    <p className="text-xs text-white/75 font-sans leading-relaxed max-w-sm px-2">
                      Hello <strong>{name}</strong>, your approximate quote for the <strong>{getSummaryText()}</strong> is **{formatCurrency(getCurrentEstimate())}**.
                    </p>

                    <div className="my-6 bg-white/5 border border-white/10 p-5 rounded-[4px] text-left text-xs text-white/80 font-sans space-y-2.5 max-w-sm">
                      <p>📞 <strong>Design Consultation</strong>: An expert interior architect will call you on <strong>{phone}</strong> within 15 minutes to discuss layouts.</p>
                      <p>📂 <strong>Catalog Delivery</strong>: A PDF catalogue showcasing room modular finishes and drawer accessories is being sent to your mobile.</p>
                      <p>📏 <strong>Studio Meet</strong>: We've booked a free consultation slot at our LB Nagar studio, where you can inspect board samples first-hand.</p>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 border border-white/25 hover:border-white text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all duration-200"
                    >
                      Recalculate Price
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
