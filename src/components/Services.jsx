import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Plot Development",
    description: "Legally approved and strategically located residential plots with future growth potential. Complete with developed blacktop roads, electric cabling, and landscaping.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Real Estate Consulting",
    description: "Professional guidance for property purchases, asset valuation, and structural investment setups tailored to individual risk appetites.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Property Investment Solutions",
    description: "Helping clients identify profitable opportunities in hot growth corridors, facilitating land aggregation, pre-launches, and exit management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Construction & Infrastructure Development",
    description: "Complete infrastructure development solutions including site grading, drainage channel layouts, utilities, and high-quality construction.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Property Documentation & Legal Assistance",
    description: "End-to-end legal verification of titles, link-document audits, stamp duty estimates, registration bookings, and revenue mutation assistance.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Project Management Services",
    description: "Professional planning, budgeting, execution oversight, quality audits, material procurement, and timely project delivery structures.",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="services" className="section-pad bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
            — Real Estate Solutions Designed For Growth
          </div>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            What We Build For You
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            We provide structured, end-to-end real estate and infrastructure services backed by engineering diligence and legal transparency.
          </p>
        </div>

        {/* Services Grid with 40px gaps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 20px 60px rgba(7,26,53,0.18)"
              }}
              key={service.title}
              className="group bg-white border border-ak-border shadow-ak-sm transition-all duration-350 overflow-hidden flex flex-col justify-between rounded-[4px] service-card"
            >
              <div>
                {/* Image Container with zoom effect on hover */}
                <div className="relative h-[240px] overflow-hidden bg-ak-offwhite service-card-img">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                </div>

                {/* Content Details with 28px 24px padding */}
                <div className="p-7 text-left service-card-body">
                  <h3 className="service-card-title text-[20px] font-serif font-bold text-ak-navy transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-ak-muted font-sans text-sm leading-relaxed mt-4">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 text-left">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ak-navy group-hover:text-ak-gold transition-colors duration-300 font-sans"
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
