import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const founders = [
  {
    name: "V Ashwin Kumar",
    role: "Director",
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781414099/c5d1059c-5b64-4c5b-aa60-464d99e71db6_bw7dyy.jpg",
    bio: "Hailing from Hyderabad with 10 years of experience, Ashwin has strategically led AK Group to acquire and develop high-value land parcels across Telangana. He is dedicated to absolute legal integrity, clean-title compliance, and establishing long-term trust with landowners and developers.",
    specialties: ["Land Acquisition", "Legal & Regulatory Compliance", "Corporate Strategy"],
    email: "ashwin@akgroupinfra.com"
  },
  {
    name: "K Kiran Kumar",
    role: "Director",
    image: "https://res.cloudinary.com/doegh5lpl/image/upload/v1781266645/987c2816-f181-401b-8f56-505a78e2b6ac_icgp7w.jpg",
    bio: "Based in Hyderabad with 12 years of experience, Kiran oversees project execution, site development infrastructure, and investor partnerships. His customer-first approach ensures that every residential plotted layout meets elite municipal design guidelines and creates high investment yields.",
    specialties: ["Infrastructure Development", "Investor Partnerships", "Operations & Quality Control"],
    email: "kiran@akgroupinfra.com"
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad bg-white relative overflow-hidden border-t border-ak-border">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ak-navy opacity-5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
            — Visionary Leadership
          </div>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            Meet the Founders
          </h2>
          
          <p className="mt-4 text-ak-muted font-sans text-body-custom max-w-xl">
            Ashwin and Kiran lead the firm with a shared vision of raising the standard of plotted infrastructure in Telangana, backed by transparency and corporate excellence.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              key={founder.name}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 bg-ak-offwhite p-6 sm:p-8 rounded-[4px] border border-ak-border hover:shadow-ak-md transition-all duration-300"
            >
              {/* Founder Image Frame */}
              <div className="w-full sm:w-[180px] shrink-0">
                <div className="relative aspect-[3/4] rounded-[4px] overflow-hidden shadow-ak-sm group bg-slate-200">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ak-navy-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Founder Details */}
              <div className="flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-serif text-[22px] font-bold text-ak-navy leading-tight">
                    {founder.name}
                  </h3>
                  <p className="text-ak-gold text-[12px] font-sans font-semibold tracking-wider uppercase mt-1">
                    {founder.role}
                  </p>
                  
                  {/* Bio */}
                  <p className="text-ak-slate font-sans text-[13px] leading-relaxed mt-4">
                    {founder.bio}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mt-5">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-ak-navy/55 block">
                      Core Focus
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {founder.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="bg-white border border-ak-border px-2.5 py-1 rounded-[2px] text-[11px] font-sans text-ak-slate leading-none"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Founder Contact / Social Links */}
                <div className="flex gap-4 mt-6 pt-4 border-t border-ak-border items-center">
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center gap-2 text-[12px] font-sans font-medium text-ak-muted hover:text-ak-navy transition-colors duration-200"
                  >
                    <FaEnvelope className="text-ak-gold" />
                    <span>{founder.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
