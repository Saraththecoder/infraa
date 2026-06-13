import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import PageBanner from "../components/PageBanner";

const openPositions = [
  {
    id: 1,
    title: "Civil Engineer",
    department: "Engineering",
    location: "Hyderabad, Site Locations",
    type: "Full-Time",
    desc: "Oversee civil construction, site management, and ensure compliance with municipal design guidelines."
  },
  {
    id: 2,
    title: "Project Manager",
    department: "Management",
    location: "Hyderabad HQ",
    type: "Full-Time",
    desc: "Lead project planning, coordinate with stakeholders, and deliver real estate projects on schedule."
  },
  {
    id: 3,
    title: "Office Staff",
    department: "Administration",
    location: "Hyderabad HQ",
    type: "Full-Time",
    desc: "Manage day-to-day office operations, document handling, and support executive administration."
  },
  {
    id: 4,
    title: "Surveyor",
    department: "Field Operations",
    location: "Various Sites",
    type: "Full-Time",
    desc: "Conduct land surveys, establish boundaries, and assist in plotting and layout planning."
  },
  {
    id: 5,
    title: "Auto-CAD Designer",
    department: "Design & Architecture",
    location: "Hyderabad HQ",
    type: "Full-Time",
    desc: "Create detailed 2D/3D CAD layouts, floor plans, and architectural drafts for residential and commercial projects."
  },
  {
    id: 6,
    title: "Sales Officer",
    department: "Sales & Marketing",
    location: "Hyderabad",
    type: "Full-Time",
    desc: "Drive property sales, manage client relationships, and provide real estate investment advisory."
  }
];

export default function CareersPage() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    experience: ""
  });

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.qualification || !formData.experience) {
      alert("Please fill in all required fields.");
      return;
    }

    const message = `*Application for ${selectedJob}*\n----------------------\n*Name:* ${formData.name}\n*Contact No:* ${formData.phone}\n*Mail ID:* ${formData.email || 'N/A'}\n*Qualification:* ${formData.qualification}\n*Experience:* ${formData.experience}`;
    const link = `https://wa.me/919014529890?text=${encodeURIComponent(message)}`;
    
    window.open(link, "_blank");
    setShowModal(false);
    setFormData({ name: "", phone: "", email: "", qualification: "", experience: "" });
  };

  return (
    <>
      <PageBanner
        title="Careers at AK Group"
        subtitle="Build Your Future With Us"
      />

      <section className="section-pad bg-ak-offwhite relative">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
              — Join Our Team
            </span>
            <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
              Current Openings
            </h2>
            <p className="mt-4 text-ak-muted font-sans text-body-custom">
              We are constantly looking for talented, passionate individuals to join our mission of developing world-class infrastructure and real estate layouts. Explore our open positions below.
            </p>
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 border border-ak-border shadow-ak-sm hover:shadow-ak-lg transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-ak-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-ak-gold bg-ak-gold/10 px-2 py-1 rounded-[2px]">
                      {job.department}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-[22px] font-bold text-ak-navy mb-2 group-hover:text-ak-gold transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-[12px] font-sans text-ak-muted mb-4">
                    <span className="flex items-center gap-1.5">
                      <FaBriefcase className="text-ak-navy/40" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaGraduationCap className="text-ak-navy/40" /> {job.location}
                    </span>
                  </div>
                  
                  <p className="text-ak-slate font-sans text-[13px] leading-relaxed mb-6">
                    {job.desc}
                  </p>
                </div>
                
                <div className="mt-auto pt-5 border-t border-ak-border">
                  <button
                    onClick={() => handleApplyClick(job.title)}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-ak-navy hover:bg-[#25D366] text-white font-sans text-[12px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm group-hover:shadow-md cursor-pointer"
                  >
                    <FaWhatsapp size={16} />
                    <span>Apply Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Application Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[4px] shadow-ak-lg w-full max-w-lg overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-ak-border flex justify-between items-center bg-ak-offwhite">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-ak-gold block mb-1">
                  Applying for
                </span>
                <h3 className="font-serif text-2xl font-bold text-ak-navy leading-none">
                  {selectedJob}
                </h3>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-ak-muted hover:text-ak-navy transition-colors text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleFormSubmit} className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-[2px] border border-ak-border text-sm font-sans focus:outline-none focus:border-ak-navy"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Phone No *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-[2px] border border-ak-border text-sm font-sans focus:outline-none focus:border-ak-navy"
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Mail ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-[2px] border border-ak-border text-sm font-sans focus:outline-none focus:border-ak-navy"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Qualification *</label>
                <input
                  type="text"
                  name="qualification"
                  required
                  placeholder="e.g. B.Tech Civil, MBA"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-[2px] border border-ak-border text-sm font-sans focus:outline-none focus:border-ak-navy"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Experience *</label>
                <input
                  type="text"
                  name="experience"
                  required
                  placeholder="e.g. 3 Years, Fresher"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-[2px] border border-ak-border text-sm font-sans focus:outline-none focus:border-ak-navy"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 border border-ak-border text-ak-slate font-sans text-xs font-bold uppercase tracking-widest hover:bg-ak-offwhite transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <FaWhatsapp size={14} />
                  <span>Send</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
