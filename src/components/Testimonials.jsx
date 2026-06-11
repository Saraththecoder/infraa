import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    name: "K. Srinivasa Rao",
    role: "Property Investor",
    text: "Professional team with transparent dealings and excellent support. They guided me through every documentation phase, making my investment experience seamless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Anitha Reddy",
    role: "Residential Plot Owner",
    text: "Great investment opportunities and trustworthy guidance. Their plots are strategically located with very fast growth rates and complete legal clearance checks.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Vikram Kumar",
    role: "Premium Homebuyer",
    text: "Highly satisfied with their project quality and customer service. The execution of roads and layout infrastructure is top-notch. I highly recommend them for real estate.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" }
    })
  };

  return (
    <section id="testimonials" className="section-pad bg-ak-navy-deep relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="text-ak-gold text-[13px] font-sans font-medium tracking-[0.15em] uppercase">
            — Client Feedback
          </div>
          
          <h2 className="text-heading text-white font-serif font-bold mt-4 leading-[1.25]">
            Client Testimonials
          </h2>
        </div>

        {/* Carousel Slider Card */}
        <div className="relative min-h-[360px] md:min-h-[300px] bg-white/5 border border-white/8 rounded-[4px] p-10 md:p-12 shadow-ak-lg flex flex-col justify-between overflow-hidden max-w-4xl mx-auto">
          
          {/* Quotes icon decoration (Playfair Display 900, 120px, gold opacity-20, absolute top-left) */}
          <div className="absolute top-4 left-6 text-ak-gold opacity-20 font-serif font-black text-[120px] leading-none select-none pointer-events-none z-0">
            “
          </div>

          <div className="relative z-10 flex-1 flex flex-col justify-between">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-left"
              >
                {/* Rating Stars - 5 gold stars */}
                <div className="flex gap-1 text-ak-gold text-lg mb-6 leading-none">
                  {"★★★★★"}
                </div>

                {/* Review Text */}
                <blockquote className="text-white/90 font-serif text-lg sm:text-xl md:text-[20px] leading-relaxed italic font-light mb-8 max-w-3xl">
                  "{reviews[current].text}"
                </blockquote>

                {/* Client Profile Details */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10 flex-shrink-0">
                    <img
                      src={reviews[current].image}
                      alt={reviews[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-white tracking-wider uppercase mb-1">
                      {reviews[current].name}
                    </h4>
                    <p className="text-xs font-sans text-white/50 tracking-wide font-light">
                      {reviews[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls - Navy styled, gold border & hover */}
          <div className="absolute bottom-8 right-8 flex gap-3 z-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-[2px] border border-white/20 hover:border-ak-gold text-white hover:text-ak-gold flex items-center justify-center transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-[2px] border border-white/20 hover:border-ak-gold text-white hover:text-ak-gold flex items-center justify-center transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={16} />
            </button>
          </div>

        </div>

        {/* Bubble Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-350 ${
                current === idx ? "w-6 bg-ak-gold" : "bg-white/20 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
