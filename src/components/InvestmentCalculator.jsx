import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSliders, FiTrendingUp, FiCheckCircle, FiPhoneCall, FiMapPin, FiMap } from "react-icons/fi";

export default function InvestmentCalculator() {
  const [budget, setBudget] = useState(2500000); // Default 25 Lakhs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [corridor, setCorridor] = useState("Sagar Highway");
  const [submitted, setSubmitted] = useState(false);

  // Formatter for Currency
  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Crore`;
    }
    return `₹${(value / 100000).toFixed(0)} Lakhs`;
  };

  // Math for ROI (15% CAGR)
  const calcAppreciation = (principal, years) => {
    const rate = 0.15;
    const amount = principal * Math.pow(1 + rate, years);
    return Math.round(amount);
  };

  const years3 = calcAppreciation(budget, 3);
  const years5 = calcAppreciation(budget, 5);
  const years10 = calcAppreciation(budget, 10);

  // Get matching projects dynamically based on budget
  const getMatchingProject = (val) => {
    if (val <= 2000000) {
      return {
        name: "Green Meadows Venture",
        location: "Kothur, Hyderabad Sector",
        price: "Plots from ₹15 Lakhs",
        desc: "Best match for entry-level appreciation in high-growth corridors.",
        cagr: "14.8% corridor CAGR"
      };
    } else if (val > 2000000 && val <= 4500000) {
      return {
        name: "Highway Hub Commercial",
        location: "Sagar Highway, Hyderabad",
        price: "Commercial plots from ₹30 Lakhs",
        desc: "Ideal match for retail, logistics warehouses, and medium-term rentals.",
        cagr: "16.2% corridor CAGR"
      };
    } else {
      return {
        name: "Sagar Enclave Extension / Sagar Valley",
        location: "LB Nagar / Adibatla Corridor",
        price: "Premium residential plots from ₹50 Lakhs",
        desc: "Elite gated community layouts adjacent to active IT/residential sectors.",
        cagr: "17.5% corridor CAGR"
      };
    }
  };

  const matchingProj = getMatchingProject(budget);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="roi-calculator" className="section-pad bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-ak-navy opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7/12) - Interactive ROI Calculator */}
          <div className="lg:col-span-7 text-left">
            <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
              — Future Wealth Simulator
            </div>
            
            <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
              Estimate Your Land Returns
            </h2>
            
            <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
              Historically, plotted land in Andhra Pradesh's highway growth corridors appreciation rates have averaged **15% CAGR**. Move the slider below to project your potential wealth returns.
            </p>

            {/* Interactive Slider Card */}
            <div className="mt-10 bg-ak-offwhite p-6 sm:p-8 rounded-[4px] border border-ak-border shadow-ak-sm">
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-xs font-bold text-ak-navy/60 uppercase tracking-wider flex items-center gap-2">
                  <FiSliders className="text-ak-gold" /> Set Investment Budget
                </span>
                <span className="font-serif text-2xl font-bold text-ak-navy">
                  {formatCurrency(budget)}
                </span>
              </div>

              {/* Range Input Slider */}
              <input
                type="range"
                min="1000000" // 10 Lakhs
                max="10000000" // 1 Crore
                step="500000" // 5 Lakhs
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-[6px] bg-slate-200 rounded-lg appearance-none cursor-pointer accent-ak-gold mb-10"
                style={{
                  background: `linear-gradient(to right, #D97706 0%, #D97706 ${(budget - 1000000) / 90000}%, #E2E8F0 ${(budget - 1000000) / 90000}%, #E2E8F0 100%)`
                }}
              />

              {/* ROI Output Columns */}
              <div className="grid grid-cols-3 gap-4 border-t border-ak-border/70 pt-8">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-sans font-bold text-ak-muted uppercase tracking-wider">
                    3 Year Return
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-bold text-ak-navy mt-1">
                    {formatCurrency(years3)}
                  </span>
                  <span className="text-[10px] font-sans text-emerald-600 mt-1 font-medium">
                    +{Math.round((years3 - budget) / budget * 100)}% appreciation
                  </span>
                </div>
                
                <div className="flex flex-col text-left border-x border-ak-border/70 px-4">
                  <span className="text-[10px] font-sans font-bold text-ak-muted uppercase tracking-wider">
                    5 Year Return
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-bold text-ak-gold mt-1">
                    {formatCurrency(years5)}
                  </span>
                  <span className="text-[10px] font-sans text-emerald-600 mt-1 font-medium">
                    +{Math.round((years5 - budget) / budget * 100)}% appreciation
                  </span>
                </div>

                <div className="flex flex-col text-left pl-2">
                  <span className="text-[10px] font-sans font-bold text-ak-muted uppercase tracking-wider">
                    10 Year Return
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-bold text-ak-navy mt-1">
                    {formatCurrency(years10)}
                  </span>
                  <span className="text-[10px] font-sans text-emerald-600 mt-1 font-medium">
                    +{Math.round((years10 - budget) / budget * 100)}% appreciation
                  </span>
                </div>
              </div>
            </div>

            {/* Dynamic Matching Project Card (Variable Reward) */}
            <div className="mt-6 bg-white border border-ak-border p-6 rounded-[4px] shadow-ak-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-left">
                <span className="bg-ak-gold/10 text-ak-gold text-[9px] font-sans font-bold tracking-widest uppercase px-2 py-0.5 rounded-[2px] inline-block mb-2">
                  Recommended Project Match
                </span>
                <h4 className="font-serif text-lg font-bold text-ak-navy flex items-center gap-1.5">
                  <FiMap className="text-ak-navy-deep shrink-0" size={16} /> {matchingProj.name}
                </h4>
                <p className="text-xs text-ak-slate font-sans mt-1">
                  {matchingProj.desc}
                </p>
                <div className="flex gap-4 items-center mt-3 text-[11px] font-sans font-semibold text-ak-muted">
                  <span className="flex items-center gap-1">
                    <FiMapPin size={12} className="text-ak-gold" /> {matchingProj.location}
                  </span>
                  <span className="text-emerald-600 font-bold">{matchingProj.cagr}</span>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-xs font-sans text-ak-muted block">Estimated Price</span>
                <span className="font-serif text-base font-bold text-ak-navy block mt-0.5">
                  {matchingProj.price}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5/12) - High Conversion Hook Form */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-ak-navy-deep text-white rounded-[4px] p-8 shadow-ak-lg border border-white/5 relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-ak-gold opacity-10 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="hook-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-left flex flex-col h-full justify-between"
                  >
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white mb-2">
                        Get Site Layout & Blueprint Map
                      </h3>
                      <p className="text-xs text-white/60 font-sans leading-relaxed mb-6">
                        Unlock legal inspection documents, DTCP layout plan blueprints, and secure pricing for your recommended plots.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-white/70 mb-1.5">
                            Full Name
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
                            placeholder="Enter 10-digit number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-white/5 border border-white/15 focus:border-ak-gold focus:outline-none rounded-[2px] px-4 py-3 text-xs text-white placeholder-white/30 transition-all font-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-white/70 mb-1.5">
                            Preferred Corridor
                          </label>
                          <select
                            value={corridor}
                            onChange={(e) => setCorridor(e.target.value)}
                            className="w-full bg-slate-900 border border-white/15 focus:border-ak-gold focus:outline-none rounded-[2px] px-4 py-3 text-xs text-white transition-all font-sans"
                          >
                            <option value="Sagar Highway">Sagar Highway Corridor</option>
                            <option value="LB Nagar Extension">LB Nagar Extension</option>
                            <option value="Adibatla Sector">Adibatla Sector</option>
                            <option value="Kothur Sector">Kothur Growth Sector</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-6 py-4 bg-ak-gold hover:bg-ak-gold-light text-white font-sans text-xs font-bold tracking-widest uppercase rounded-[2px] transition-all duration-300 shadow-ak-sm flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <FiPhoneCall size={12} /> Get Layout Map & Callback
                        </button>
                      </form>
                    </div>

                    {/* Customer Retention Guarantee Hooks */}
                    <div className="mt-8 pt-6 border-t border-white/10 space-y-3.5 text-xs text-white/75 font-sans">
                      <div className="flex gap-2.5 items-start">
                        <FiCheckCircle size={14} className="text-ak-gold shrink-0 mt-0.5" />
                        <span><strong>Free Site Visit Transport</strong>: Complimentary A/C cab service arranged directly to layout locations.</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <FiCheckCircle size={14} className="text-ak-gold shrink-0 mt-0.5" />
                        <span><strong>Director Call Guaranteed</strong>: Direct call from Ashwin or Kiran within 10 minutes of submitting.</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <FiCheckCircle size={14} className="text-ak-gold shrink-0 mt-0.5" />
                        <span><strong>Resale Support Desk</strong>: We offer liquidity consultations and resell marketing support for our buyers.</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hook-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-600/10 flex items-center justify-center border border-emerald-500/30 text-emerald-400 mb-6 animate-bounce">
                      <FiCheckCircle size={32} />
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      Callback Requested!
                    </h3>
                    
                    <p className="text-xs text-white/75 font-sans leading-relaxed max-w-sm px-2">
                      Hello <strong>{name}</strong>, we have received your request for the <strong>{matchingProj.name}</strong> layout plan.
                    </p>

                    <div className="my-6 bg-white/5 border border-white/10 p-5 rounded-[4px] text-left text-xs text-white/80 font-sans space-y-2.5 max-w-sm">
                      <p>📞 <strong>Direct Callback</strong>: An executive or director will call you on <strong>{phone}</strong> shortly.</p>
                      <p>📂 <strong>Document Delivery</strong>: The DTCP site map and legal title clearance certificate are being compiled for <strong>{corridor}</strong> and will be sent to your WhatsApp.</p>
                      <p>🚗 <strong>Site Visit</strong>: Free transport cab details will be messaged to arrange a site tour at your convenience.</p>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 border border-white/25 hover:border-white text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all duration-200"
                    >
                      Back to Calculator
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
