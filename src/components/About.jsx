import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {

  return (
    <section id="about" className="section-pad bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Alternate layout: 60/40 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column (60%): Image + Overlapping Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative pl-6 pb-6 lg:pl-0"
          >
            <div className="relative aspect-[4/5] w-full rounded-[4px] overflow-visible shadow-ak-lg bg-ak-offwhite">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="AK Group Property Layout"
                className="w-full h-full object-cover rounded-[4px]"
              />
              
              {/* Overlapping Experience Badge inside bottom-left */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-ak-gold px-7 py-6 rounded-[2px] shadow-ak-md text-left z-10 flex flex-col justify-center min-w-[170px]"
              >
                <span className="text-white font-serif text-5xl font-bold leading-none">
                  5+
                </span>
                <span className="text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-white/90 mt-2.5 leading-tight">
                  YEARS OF EXCELLENCE
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column (40%): Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 text-left flex flex-col items-start"
          >
            {/* Eyebrow Label */}
            <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
              — About the Company
            </div>
            
            {/* Heading */}
            <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
              Grounded in Telangana. Built for Generations.
            </h2>

            {/* Paragraphs */}
            <div className="text-ak-slate font-sans text-body-custom leading-relaxed space-y-6 mt-6">
              <p>
                ASHWIN AND KIRAN INFRA DEVELOPERS PVT. LTD. (AK Group) is a premier real estate development and turnkey interiors firm committed to raising the benchmark of plotted layouts, residential infrastructure, and custom living spaces.
              </p>
              <p>
                We execute developments across Telangana's high-growth corridors. Every venture is subjected to rigorous legal vetting and is designed to create substantial investment value, which is then seamlessly completed with our premium bespoke interior solutions division.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-10 h-[1px] bg-ak-border my-7" />

            {/* Two Inline Stats with Divider */}
            <div className="flex gap-10 items-center w-full mt-6">
              <div className="flex flex-col text-left">
                <span className="font-serif text-[28px] font-bold text-ak-navy leading-none">100+</span>
                <span className="font-sans text-[13px] text-ak-muted mt-2">Satisfied Clients</span>
              </div>
              <div className="w-[1px] h-10 bg-ak-border self-center" />
              <div className="flex flex-col text-left">
                <span className="font-serif text-[28px] font-bold text-ak-navy leading-none">20+</span>
                <span className="font-sans text-[13px] text-ak-muted mt-2">Projects Delivered</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="mt-10 px-8 py-3.5 border border-ak-navy hover:bg-ak-navy hover:text-white text-ak-navy font-sans text-xs font-bold tracking-widest uppercase rounded-[2px] transition-all duration-350 inline-block text-center"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
