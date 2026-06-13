import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Real Estate", href: "/services", state: { tab: "real-estate" } },
  { name: "Lands", href: "/services", state: { tab: "lands" } },
  { name: "Constructions", href: "/services", state: { tab: "constructions" } },
  { name: "Interior Solutions", href: "/solutions" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white shadow-ak-sm py-4 border-b border-ak-border"
            : "bg-white py-6 shadow-sm"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo - logo.png + Text */}
          <Link
            to="/"
            className="flex items-center gap-2 lg:gap-3 group text-left shrink-0"
          >
            <img src="/logo.png" alt="AK Group Logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain" />
            <div className="flex items-center gap-2">
              <span className="font-serif text-[24px] lg:text-[28px] font-bold text-ak-navy leading-none">
                AK
              </span>
              <div className="w-[1px] h-5 lg:h-6 bg-[#D97706]" />
              <div className="flex flex-col text-[10px] lg:text-[12px] font-sans font-bold uppercase tracking-[0.05em] text-[#D97706] leading-none">
                <span>GROUP</span>
                <span className="mt-0.5">INFRA</span>
              </div>
            </div>
          </Link>

          {/* Desktop Links - Center aligned */}
          <nav className="hidden xl:flex items-center gap-5 shrink-1">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.href &&
                (link.href !== "/services" ||
                  (link.state?.tab === "lands"
                    ? location.state?.tab === "lands"
                    : location.state?.tab !== "lands"));
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  state={link.state}
                  className={`nav-link-custom text-[13px] whitespace-nowrap ${isActive ? "active-link" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA - Right aligned */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0">
            <Link
              to="/contact"
              className="px-4 xl:px-6 py-2 xl:py-2.5 bg-ak-gold hover:bg-ak-gold-light text-white text-[11px] xl:text-[12px] font-bold tracking-[0.08em] uppercase rounded-[2px] transition-all duration-300 shadow-ak-sm hover:shadow-ak-md font-sans whitespace-nowrap"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded text-ak-navy hover:bg-ak-navy/5 transition-colors"
              aria-label="Open menu"
            >
              <HiOutlineMenuAlt3 size={28} />
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
                  className="flex items-center gap-2.5 text-left"
                >
                  <img src="/logo.png" alt="AK Group Logo" className="h-7 w-auto object-contain" />
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-[20px] font-bold text-white leading-none">
                      AK
                    </span>
                    <div className="w-[1px] h-4 bg-[#D97706]" />
                    <div className="flex flex-col text-[9px] font-sans font-medium uppercase tracking-[0.05em] text-[#D97706] leading-none">
                      <span>GROUP</span>
                      <span className="mt-0.5">INFRA</span>
                    </div>
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
                  const isActive =
                    location.pathname === link.href &&
                    (link.href !== "/services" ||
                      (link.state?.tab === "lands"
                        ? location.state?.tab === "lands"
                        : location.state?.tab !== "lands"));
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      state={link.state}
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
                  className="flex items-center justify-center w-full py-3 rounded-[2px] bg-ak-gold hover:bg-ak-gold-light text-ak-navy-deep font-sans text-xs font-bold tracking-widest uppercase shadow-ak-sm transition-colors duration-300"
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
