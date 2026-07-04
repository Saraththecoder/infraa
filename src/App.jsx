import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";

// Scroll restoration to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen w-full bg-white text-slate-800 antialiased font-sans selection:bg-primary/20 selection:text-primary">
          {/* Premium Loader Trigger */}
          <Loader />

          {/* Sticky Glassmorphic Navigation */}
          <Navbar />

          {/* Main Routed Sections */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          {/* Corporate structured Footer */}
          <Footer />

          {/* Floating Hotkeys (WhatsApp, Call, BackToTop) */}
          <FloatingActions />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
