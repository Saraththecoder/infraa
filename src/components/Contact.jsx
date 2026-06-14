import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "Full Home Interiors", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", interest: "Full Home Interiors", message: "" });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-pad bg-ak-offwhite relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
            — Connect With Us
          </div>
          
          <h2 className="text-heading text-ak-navy font-serif font-bold mt-4 leading-[1.25]">
            Get Your Customized Quote
          </h2>
        </div>

        {/* Contact Layout Grid - 50/50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (50%): Company Information */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold text-ak-navy leading-tight">
                Let's Start a Conversation
              </h3>
              <p className="text-ak-muted font-sans text-body-custom max-w-md leading-relaxed">
                Reach out to our design desk to request a free site measurement, look through material board samples, or book a consultation at our studio.
              </p>
            </div>

            {/* Address, Phone, Email Block */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white border border-ak-border text-ak-gold flex items-center justify-center shadow-sm flex-shrink-0">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider">Office Address</h4>
                  <p className="text-sm font-semibold text-ak-slate font-sans mt-1.5 leading-relaxed">
                    H.No. 3-7-18/1, Sagar Enclave, Road No.1, Reddy Colony, Near LB Nagar, Hyderabad, Telangana - 500078
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white border border-ak-border text-ak-gold flex items-center justify-center shadow-sm flex-shrink-0">
                  <FiPhone size={16} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider">Phone Call</h4>
                  <div className="flex flex-col gap-1 mt-1.5">
                    <a href="tel:+919948100096" className="text-sm font-semibold text-ak-slate font-sans hover:text-ak-gold transition-colors duration-200">+91 99481 00096</a>
                    <a href="tel:+919014529890" className="text-sm font-semibold text-ak-slate font-sans hover:text-ak-gold transition-colors duration-200">+91 90145 29890</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white border border-ak-border text-ak-gold flex items-center justify-center shadow-sm flex-shrink-0">
                  <FiMail size={16} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider">Email Address</h4>
                  <p className="text-sm font-semibold text-ak-slate font-sans mt-1.5">
                    <a href="mailto:akgroup.projects@gmail.com" className="hover:text-ak-gold transition-colors duration-200 break-all">akgroup.projects@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-white border border-ak-border text-ak-gold flex items-center justify-center shadow-sm flex-shrink-0">
                  <FiClock size={16} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider">Office Hours</h4>
                  <p className="text-sm text-ak-muted font-sans mt-1.5">
                    Monday – Saturday: 9:00 AM – 6:00 PM <span className="block mt-1 text-[11px] text-ak-gold font-medium uppercase tracking-wider">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Small Google Maps Embed (height 220px, 4px border-radius) */}
            <div className="w-full h-[220px] rounded-[4px] overflow-hidden shadow-ak-sm border border-ak-border bg-white relative">
              <iframe
                title="AK Group Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2045558000495!2d78.54964647596574!3d17.353842183526563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f1165ec91a7%3A0xb3ff76c4ec23528b!2sL.B.%20Nagar%2C%20Hyderabad%2C%20Telangana%20500074!5e0!3m2!1sen!2sin!4v1717999999999!5m2!1sen!2sin"
                className="w-full h-full border-none opacity-95 hover:opacity-100 transition-opacity duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column (50%): Contact Form */}
          <div className="lg:col-span-6 text-left">
            <div className="bg-white border border-ak-border rounded-[4px] p-10 md:p-12 shadow-ak-md">
              <h3 className="text-2xl font-serif font-bold text-ak-navy mb-6">
                Send an Inquiry
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-6 flex flex-col">
                {/* Full Name */}
                <div className="flex flex-col text-left">
                  <label htmlFor="name" className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="px-4 py-3.5 rounded-[2px] border border-ak-border text-sm font-sans text-ak-slate bg-transparent focus:outline-none focus:border-ak-navy transition-colors duration-200"
                  />
                </div>

                {/* Grid for phone and email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="phone" className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone"
                      className="px-4 py-3.5 rounded-[2px] border border-ak-border text-sm font-sans text-ak-slate bg-transparent focus:outline-none focus:border-ak-navy transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="email" className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                      className="px-4 py-3.5 rounded-[2px] border border-ak-border text-sm font-sans text-ak-slate bg-transparent focus:outline-none focus:border-ak-navy transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Interested In (Select) */}
                <div className="flex flex-col text-left">
                  <label htmlFor="interest" className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 rounded-[2px] border border-ak-border text-sm font-sans text-ak-slate bg-transparent focus:outline-none focus:border-ak-navy transition-colors duration-200 appearance-none bg-no-repeat bg-right"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231E293B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                      backgroundPosition: "right 16px center"
                    }}
                  >
                    <option value="Full Home Interiors">Full Home Interiors</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Custom Wardrobes">Custom Wardrobes</option>
                    <option value="Turnkey Renovations">Turnkey Renovations</option>
                    <option value="Open Plots">Open Plots</option>
                    <option value="Villas">Villas</option>
                    <option value="Apartments">Apartments</option>
                    <option value="Agriculture Lands">Agriculture Lands</option>
                    <option value="Farm Houses">Farm Houses</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col text-left">
                  <label htmlFor="message" className="text-[11px] font-bold font-sans text-ak-muted uppercase tracking-wider mb-2">Inquiry Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details about requirements..."
                    className="px-4 py-3.5 rounded-[2px] border border-ak-border text-sm font-sans text-ak-slate bg-transparent focus:outline-none focus:border-ak-navy transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit button (Full width, sharp corners, gold bg, Inter 500, uppercase) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-ak-gold hover:bg-ak-gold-light disabled:bg-slate-400 text-ak-navy-deep font-sans text-sm font-medium tracking-[0.1em] uppercase rounded-[2px] shadow-ak-sm transition-all duration-300 w-full text-center"
                >
                  {isSubmitting ? "Sending message..." : "Submit Request"}
                </button>

                {/* Success alert message */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-[2px] text-sm font-sans flex items-center gap-2 mt-4"
                  >
                    <span>✓</span>
                    <span>Thank you. Your request was received successfully. Our relationship manager will connect shortly.</span>
                  </motion.div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
