import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CreativeAgencyFAQ = ({
  slides = [],
  slideDuration = 5000,
  headingClass = "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.18]",
  descClass = "text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal",
  priceLabel = "Monthly Price",
  buttonLabel = "Schedule Consultation",
  buttonLink = "/contact-us",
  containerClass = "relative bg-[#0b1b3c] text-white pt-32 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 overflow-hidden border-b border-blue-950",
}) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Start autoplay with reset logic
  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);
  };

  useEffect(() => {
    if (slides.length > 0) startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [slides, slideDuration]);

  const handleDotClick = (i) => {
    setIndex(i);
    startAutoplay();
  };

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  if (slides.length === 0) return null;

  return (
    <div className={containerClass}>
      <div className="relative max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
          >
            {/* Left Side - Image with padding and pagination */}
            <div className="relative flex-shrink-0 w-full max-w-[420px] lg:max-w-[480px]">
              <div className="relative overflow-hidden border border-blue-900/40 shadow-2xl bg-[#0b1b3c]">
                <img
                  src={slides[index].image}
                  alt={slides[index].heading || "Slide image"}
                  className="w-full h-[340px] sm:h-[400px] lg:h-[460px] object-cover"
                />
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all duration-300 ${
                      i === index
                        ? "bg-[#2563eb] w-7 h-2 rounded-full"
                        : "bg-slate-600/70 hover:bg-slate-400 w-2 h-2 rounded-full"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 max-w-2xl text-left">
              <div className="w-10 h-1 bg-[#2563eb] mb-5" />

              <h1
                className={headingClass}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {slides[index].heading}
              </h1>

              <div className={descClass}>
                {slides[index].description}
              </div>

              {slides[index].price && (
                <div className="flex items-center gap-8 mb-6">
                  <div className="text-4xl lg:text-5xl font-black text-white">
                    {slides[index].price}
                  </div>
                  <div className="text-lg text-slate-400">{priceLabel}</div>
                </div>
              )}

              <div className="pt-2">
                <Link
                  to={buttonLink}
                  className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-lg group text-base"
                >
                  {buttonLabel}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CreativeAgencyFAQ;
