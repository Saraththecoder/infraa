import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? "bg-[#071A35]/92 backdrop-blur-md py-4 border-b border-white/8 shadow-ak-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo - logo.png + Text */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img src="/logo.png" alt="AK Group Logo" className="h-8 w-auto object-contain" />
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg font-bold tracking-wider text-white leading-none">
                AK GROUP
              </span>
              <span className="text-[9px] font-sans font-medium tracking-[0.18em] uppercase text-ak-gold leading-none mt-1">
                INFRA DEVELOPERS
              </span>
            </div>
          </Link>

          {/* Desktop Links - Center aligned */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link-custom ${isActive ? "active-link" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Phone + CTA - Right aligned */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919948100096"
              className="font-sans text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              99481 00096
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-ak-gold hover:bg-ak-gold-light text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-[2px] transition-all duration-300 shadow-ak-sm hover:shadow-ak-md font-sans"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded text-white hover:bg-white/5 transition-colors"
              aria-label="Open menu"
            >
              <HiOutlineMenuAlt3 size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[55] w-80 max-w-[85vw] bg-ak-navy-deep flex flex-col shadow-ak-lg"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/8">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-left"
                >
                  <img src="/logo.png" alt="AK Group Logo" className="h-7 w-auto object-contain" />
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-bold tracking-wider text-white leading-none">
                      AK GROUP
                    </span>
                    <span className="text-[8px] font-sans font-medium tracking-[0.18em] uppercase text-ak-gold leading-none mt-1">
                      INFRA DEVELOPERS
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <HiX size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-10 text-left">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-[15px] font-semibold tracking-wider uppercase font-serif py-1 transition-colors ${
                        isActive
                          ? "text-ak-gold border-l-2 border-ak-gold pl-3"
                          : "text-white/70 hover:text-white pl-3 border-l-2 border-transparent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-6 border-t border-white/8 bg-ak-navy flex flex-col gap-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-[2px] bg-ak-gold hover:bg-ak-gold-light text-white font-sans text-xs font-bold tracking-widest uppercase shadow-ak-sm transition-colors duration-300"
                >
                  Enquire Now
                </Link>
                <p className="text-[10px] text-center text-white/50 leading-normal font-sans">
                  H.No. 3-7-18/1, Sagar Enclave,<br />
                  LB Nagar, Hyderabad - 500078
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
