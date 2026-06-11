import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function FooterTicker() {
  const [count, setCount] = React.useState(548);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-2 text-left select-none">
      <span className="font-serif font-light text-4xl text-[#FAF8F5] leading-none block">
        {count}
      </span>
      <span className="text-[10px] font-sans font-bold tracking-widest text-ak-gold uppercase block mt-1.5">
        Homes & Layouts Delivered
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ak-navy-deep text-white/60 font-sans">
      {/* Top Bar Divider */}
      <div className="w-full border-t border-white/8" />

      {/* Main Footer columns */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
        
        {/* Column 1: Brand details & Socials */}
        <div className="lg:col-span-4 space-y-6">
          <Link to="/" className="flex items-center gap-3 group w-fit">
            <img src="/logo.png" alt="AK Group Logo" className="h-9 w-auto object-contain" />
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg font-bold tracking-wider text-white leading-none">
                AK GROUP
              </span>
              <span className="text-[9px] font-sans font-medium tracking-[0.18em] uppercase text-ak-gold leading-none mt-1">
                INFRA DEVELOPERS
              </span>
            </div>
          </Link>

          <p className="text-[13px] text-white/50 leading-relaxed max-w-sm">
            ASHWIN AND KIRAN INFRA DEVELOPERS PVT. LTD. (AK Group) is a trusted real estate and infrastructure development company committed to legal transparency and sustainable investment growth.
          </p>

          {/* Animated project counter */}
          <FooterTicker />
        </div>

        {/* Column 2: Company links */}
        <div className="lg:col-span-2 space-y-5">
          <div className="border-l-[3px] border-ak-gold pl-3">
            <h3 className="text-[11px] font-bold font-sans tracking-[0.15em] text-ak-gold uppercase leading-none">
              Company
            </h3>
          </div>
          <ul className="space-y-3.5 text-[13px]">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors duration-200">Services</Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-white transition-colors duration-200">Solutions</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition-colors duration-200">Projects</Link>
            </li>
            <li>
              <Link to="/estimate" className="hover:text-white transition-colors duration-200">Estimate</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services links */}
        <div className="lg:col-span-3 space-y-5">
          <div className="border-l-[3px] border-ak-gold pl-3">
            <h3 className="text-[11px] font-bold font-sans tracking-[0.15em] text-ak-gold uppercase leading-none">
              Services
            </h3>
          </div>
          <ul className="space-y-3.5 text-[13px]">
            <li>
              <Link to="/services" className="hover:text-white transition-colors duration-200">Modular Kitchens</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors duration-200">Custom Wardrobes</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors duration-200">Living & Entertainment</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors duration-200">Turnkey Renovations</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="lg:col-span-3 space-y-5 text-[13px]">
          <div className="border-l-[3px] border-ak-gold pl-3">
            <h3 className="text-[11px] font-bold font-sans tracking-[0.15em] text-ak-gold uppercase leading-none">
              Contact Information
            </h3>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start font-sans">
              <FaMapMarkerAlt size={14} className="text-ak-gold flex-shrink-0 mt-1" />
              <span className="leading-relaxed">
                H.No. 3-7-18/1, Sagar Enclave, Reddy Colony, Near LB Nagar, Hyderabad - 500078
              </span>
            </li>
            <li className="flex gap-3 items-center font-sans">
              <FaPhoneAlt size={12} className="text-ak-gold flex-shrink-0" />
              <a href="tel:+919948100096" className="hover:text-white transition-colors">99481 00096</a>
            </li>
            <li className="flex gap-3 items-center font-sans">
              <FaEnvelope size={12} className="text-ak-gold flex-shrink-0" />
              <a href="mailto:akgroup.projects@gmail.com" className="hover:text-white transition-colors break-all">akgroup.projects@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-white/8 bg-ak-navy-deep/80 py-6">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium text-white/40 font-sans">
          <p>© 2026 ASHWIN AND KIRAN INFRA DEVELOPERS PVT. LTD. All Rights Reserved.</p>
          
          {/* Social Media Link Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-base transition-colors duration-200"
              aria-label="Facebook Link"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-base transition-colors duration-200"
              aria-label="Twitter Link"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-base transition-colors duration-200"
              aria-label="LinkedIn Link"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-base transition-colors duration-200"
              aria-label="Instagram Link"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
