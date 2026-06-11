import React from "react";
import { motion } from "framer-motion";
import { FiGrid, FiLayout, FiMaximize, FiCpu, FiCheckCircle } from "react-icons/fi";

const solutionsList = [
  {
    title: "Modular Kitchen Solutions",
    subtitle: "Heart of the Home",
    icon: <FiGrid size={24} />,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    desc: "Engineered for high utility and smooth ergonomics, our kitchen configurations are tailored to your spatial layout.",
    features: [
      "Shapes: L-Shape, Parallel, U-Shape, Island kitchens",
      "Materials: BWP Marine Ply & HDHMR water-resistant board",
      "Finishes: High-gloss German Acrylic, PU Paint, Glass profiles",
      "Fittings: Soft-close Hettich tandem boxes & Hafele lift-ups"
    ]
  },
  {
    title: "Bespoke Wardrobes & Closets",
    subtitle: "Smart Storage Layouts",
    icon: <FiLayout size={24} />,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    desc: "Maximize bedroom storage with floor-to-ceiling closets that match your design preferences.",
    features: [
      "Door Opening: Sliding glass doors, classic swing, walk-in closets",
      "Carcass: Calibrated anti-termite ply with laminate lining",
      "Finishes: Matte laminate, tinted reflective glass, PU lacquer",
      "Smart Add-ons: Automatic sensor LEDs, secure digital lockers"
    ]
  },
  {
    title: "Living & Entertainment Units",
    subtitle: "Social Statement Spaces",
    icon: <FiMaximize size={24} />,
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop",
    desc: "Custom floating TV consoles and partitions designed to organize and elevate your primary living zone.",
    features: [
      "TV Panels: Marble-textured laminates, fluted louvers",
      "Partitions: CNC jali cuts, wooden rafters, glass panels",
      "Bar Units: Integrated wine glass racks & ambient mirror backings",
      "Shoe Racks: Custom ventilated storage boxes & seating benches"
    ]
  },
  {
    title: "False Ceiling & Profile Lighting",
    subtitle: "Aesthetic Overhead Layouts",
    icon: <FiCpu size={24} />,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    desc: "Architectural plasterboard ceilings integrated with high-end linear and magnetic diffuse lighting.",
    features: [
      "Ceilings: Gypsum boards with sturdy metal perimeter channels",
      "Track Lights: Modular magnetic tracks & recess LED spots",
      "Ambient Lighting: Dimmable LED coves & decorative profile lines",
      "Acoustics: Soundproofing ceiling linings for home theatres"
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-ak-gold">{sol.icon}</div>
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
