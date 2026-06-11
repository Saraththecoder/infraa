import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

const categories = [
  { id: "all", name: "All" },
  { id: "ongoing", name: "Ongoing" },
  { id: "completed", name: "Completed" },
  { id: "upcoming", name: "Upcoming" },
];

const projects = [
  {
    name: "Sagar Enclave Extension",
    location: "LB Nagar, Hyderabad",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    description: "Elite residential developments featuring modular layout blueprints, BT roads, and modern municipal connections."
  },
  {
    name: "Green Meadows Venture",
    location: "Kothur, Hyderabad Sector",
    status: "Ready to Register",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    description: "Premium DTCP approved open plot layout. Fully developed with electricity, storm water channels, and plantation zones."
  },
  {
    name: "Highway Hub Commercial",
    location: "Sagar Highway, Hyderabad",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop",
    description: "High commercial-density layout perfect for retail showrooms, warehouse logistics, and corporate structures."
  },
  {
    name: "Reddy Colony Infrastructure",
    location: "Near Sagar Enclave, Hyderabad",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    description: "Complete layout excavation, underground sewer system installation, and municipal drinking water supply line piping execution."
  },
  {
    name: "Sagar Valley Premium",
    location: "Reddy Colony, Hyderabad",
    status: "Pre-Launch",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    description: "An upcoming gated plotted venture. Designed with modern park landscaping, concrete curbs, and security perimeter fencing."
  },
  {
    name: "Capital Ridge Villas",
    location: "Adibatla Corridor, Hyderabad",
    status: "Planning Phase",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
    description: "Architectural blueprint phase of premium luxury smart villas, emphasizing green materials, and solar grids."
  }
];

const projectHeights = {
  "Sagar Enclave Extension": true,      // Tall
  "Green Meadows Venture": false,       // Short
  "Highway Hub Commercial": false,      // Short
  "Reddy Colony Infrastructure": true,  // Tall
  "Sagar Valley Premium": true,         // Tall
  "Capital Ridge Villas": false,        // Short
};

export default function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => {
        if (activeTab === "ongoing") return p.status === "Ongoing";
        if (activeTab === "completed") return p.status === "Completed" || p.status === "Ready to Register";
        if (activeTab === "upcoming") return p.status === "Pre-Launch" || p.status === "Planning Phase";
        return true;
      });

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
        className={`group relative overflow-hidden rounded-[4px] shadow-ak-sm hover:shadow-ak-lg cursor-pointer bg-ak-offwhite w-full ${
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
            background: "linear-gradient(to top, rgba(7, 26, 53, 0.95) 0%, rgba(7, 26, 53, 0.3) 60%, transparent 100%)"
          }}
        />
        
        {/* Bottom Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-left">
          
          {/* Status Badge - Gold backdrop, 2px border radius, uppercase letter spacing 0.15em */}
          <div className="w-fit bg-[#D97706] text-white text-[10px] font-sans font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-[2px] mb-4">
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
          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 text-white w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-ak-gold group-hover:text-ak-gold transition-colors duration-300">
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
            <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
              — Our Developments
            </div>
            
            <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
              Developments That Define the Landscape
            </h2>
            
            <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-md">
              Explore our portfolio of successfully delivered residential layouts, infrastructure networks, and high-yield plotting ventures.
            </p>
          </div>

          {/* Right-aligned Filter Tabs */}
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

        {/* 2-Column stacked masonry layout (1 column on mobile) */}
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
