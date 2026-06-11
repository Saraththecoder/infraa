import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

const categories = [
  { id: "all", name: "All" },
  { id: "kitchen", name: "Kitchen" },
  { id: "living", name: "Living Room" },
  { id: "wardrobes", name: "Wardrobe" },
];

const projects = [
  {
    name: "Minimalist L-Shape Kitchen",
    location: "LB Nagar, Hyderabad",
    status: "Completed",
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    description: "Sleek European styled L-shaped modular kitchen featuring matte laminates, G-profile handles, and quartz countertop."
  },
  {
    name: "Contemporary Living Lounge",
    location: "Jubilee Hills, Hyderabad",
    status: "Premium Delivery",
    category: "living",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop",
    description: "Elegant TV panel backdrop with marble textures, custom warm-light LED profile strips, and minimal storage units."
  },
  {
    name: "Master Suite Sliding Closet",
    location: "Gachibowli, Hyderabad",
    status: "Completed",
    category: "wardrobes",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    description: "Floor-to-ceiling 3-door sliding wardrobe with premium tinted glass facades and automatic internal sensor LED profiles."
  },
  {
    name: "Lacquered PU Parallel Kitchen",
    location: "Miyapur, Hyderabad",
    status: "Completed",
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
    description: "Parallel kitchen layout styled in dual-tone PU paint finish with soft-close tandem drawers and built-in microwave slots."
  },
  {
    name: "Bespoke Glass Swing Wardrobe",
    location: "Financial District, Hyderabad",
    status: "Completed",
    category: "wardrobes",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    description: "Swing door wardrobe with metallic bronze frames, glass panels, and dedicated internal drawers for jewelry organizers."
  },
  {
    name: "Luxury Penthouse Living Room",
    location: "Kukatpally, Hyderabad",
    status: "Completed",
    category: "living",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    description: "High-ceiling living lounge featuring custom wooden slatted partitions, gypsum false ceiling cove lighting, and stone panelling."
  }
];

const projectHeights = {
  "Minimalist L-Shape Kitchen": true,
  "Contemporary Living Lounge": false,
  "Master Suite Sliding Closet": false,
  "Lacquered PU Parallel Kitchen": true,
  "Bespoke Glass Swing Wardrobe": true,
  "Luxury Penthouse Living Room": false,
};

export default function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  // Split projects based on original index to maintain column stability when tabs are clicked
  const leftColumnProjects = projects
    .filter((_, idx) => idx % 2 === 0)
    .filter((p) => filteredProjects.some((fp) => fp.name === p.name));
  const rightColumnProjects = projects
    .filter((_, idx) => idx % 2 !== 0)
    .filter((p) => filteredProjects.some((fp) => fp.name === p.name));

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
        className={`group relative overflow-hidden rounded-none shadow-ak-sm hover:shadow-ak-lg cursor-pointer bg-ak-offwhite w-full ${
          isTall ? "h-[420px] md:h-[520px]" : "h-[280px] md:h-[320px]"
        }`}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Cinematic Linear Gradient Overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(11, 26, 48, 0.95) 0%, rgba(11, 26, 48, 0.35) 60%, transparent 100%)"
          }}
        />
        
        {/* Bottom Overlay Content */}
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

          {/* Short Description (slides up on hover) */}
          <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out">
            <p className="text-white/85 font-sans text-xs md:text-sm mt-4 leading-relaxed pr-6">
              {project.description}
            </p>
          </div>

          {/* Arrow Icon in bottom-right */}
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-left max-w-xl">
            <span className="text-ak-gold text-[11px] font-sans font-medium tracking-[0.15em] uppercase">
              [ Our Work ]
            </span>
            
            <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
              A portfolio of crafted spaces
            </h2>
            
            <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-md">
              Browse some of our beautifully executed modular kitchens, living room partitions, and bespoke wardrobe projects delivered across Hyderabad.
            </p>
          </div>

          {/* Right-aligned Filter Tabs - Underline active, no bg */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 border-b border-ak-border pb-4 md:pb-2 self-start md:self-end w-full md:w-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 font-sans ${
                  activeTab === tab.id
                    ? "text-ak-gold"
                    : "text-ak-muted hover:text-ak-navy"
                }`}
              >
                {tab.name}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-ak-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column stacked layout (1 column on mobile) */}
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
    </section>
  );
}
