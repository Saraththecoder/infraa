import React from "react";
import { motion } from "framer-motion";
import { FiGrid, FiLayout, FiMaximize, FiCpu, FiCheckCircle, FiBriefcase, FiAward } from "react-icons/fi";

const solutionsList = [
  {
    title: "Design Services",
    subtitle: "Spatial Layouts",
    icon: <FiLayout size={24} />,
    image: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=800&auto=format&fit=crop",
    desc: "Comprehensive space planning, architectural drafting, and high-fidelity 3D renderings to envision your layouts.",
    features: [
      "2D Floor Plans & room layouts",
      "3D Designs & Visualization rendering",
      "Electrical & conduit wiring plans",
      "Lighting placement & reflected ceiling plans"
    ]
  },
  {
    title: "Modular Solutions",
    subtitle: "Advanced Carcasses",
    icon: <FiGrid size={24} />,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    desc: "Precision modular cabinetry manufactured on European CNC lines with absolute dimensional accuracy.",
    features: [
      "Modular Kitchens: L-Shape, Parallel, U-Shape layouts",
      "Wardrobe Design: Classic Swing & space-saving Sliding doors",
      "Calibrated anti-termite ply & HDHMR materials",
      "Premium soft-close tandem drawer systems"
    ]
  },
  {
    title: "Residential Interiors",
    subtitle: "Cozy Lifestyles",
    icon: <FiMaximize size={24} />,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    desc: "Custom home interior tailoring including feature TV panel backdrops, sliding glass dividers, and bedroom claddings.",
    features: [
      "Living Room Interiors: Louvers & fluted paneling",
      "Bedroom Interiors: Padded headboards & study units",
      "Foyers, shoe consoles & custom display cabinets",
      "Integrated profile LED strip integrations"
    ]
  },
  {
    title: "Commercial Interiors",
    subtitle: "Productive Offices",
    icon: <FiBriefcase size={24} />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    desc: "Functional commercial office spaces configured for optimal workspace efficiency, visitor flows, and styling.",
    features: [
      "Commercial Office Interiors & layouts",
      "Modular staff workstations & manager desks",
      "Board rooms, conference spaces & reception desk panels",
      "Acoustic partition screens & cable managers"
    ]
  },
  {
    title: "Execution & Construction",
    subtitle: "Turnkey Handover",
    icon: <FiCpu size={24} />,
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop",
    desc: "Certified execution technicians covering civil shifts, track wiring, paint coat handovers, and ceiling designs.",
    features: [
      "Civil Work: Slab shifts, plumbing modifications, and tiling",
      "Electrical Work: Wiring adjustments & lighting track layouts",
      "Painting Services: Double-coat acrylic emulsion finish",
      "Gypsum Ceiling: Perimeter channels & designer coves"
    ]
  },
  {
    title: "Specialty Solutions",
    subtitle: "Elite Add-ons",
    icon: <FiAward size={24} />,
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=800&auto=format&fit=crop",
    desc: "Elite acoustic additions and decorative features that transform basic rooms into dedicated luxury experiences.",
    features: [
      "Home Theatre: Sound absorption boards & screen panels",
      "Wall Arts & Decor: High-quality customized claddings",
      "Ambient bar counter setups & home libraries",
      "Digital security safety locks & storage safes"
    ]
  }
];

export default function InteriorSolutions() {
  return (
    <section id="interior-solutions" className="section-pad bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {solutionsList.map((sol, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={sol.title} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16 border-b border-ak-border/60 last:border-none ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Solution Visuals */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden shadow-ak-md bg-ak-offwhite group">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                </div>
              </motion.div>

              {/* Solution Copy Details */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 text-left flex flex-col items-start"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-ak-border text-ak-gold flex items-center justify-center shadow-sm">
                    {sol.icon}
                  </div>
                  <span className="text-ak-gold text-[12px] font-sans font-bold tracking-widest uppercase">
                    {sol.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-ak-navy mb-4 leading-tight">
                  {sol.title}
                </h3>

                <p className="text-ak-muted font-sans text-body-custom leading-relaxed mb-6">
                  {sol.desc}
                </p>

                {/* Features list */}
                <ul className="space-y-3.5 w-full">
                  {sol.features.map((feat) => (
                    <li key={feat} className="flex gap-3 items-start text-ak-slate font-sans text-sm">
                      <FiCheckCircle className="text-ak-gold shrink-0 mt-0.5" size={15} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
