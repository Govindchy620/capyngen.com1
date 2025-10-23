import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner13({
  title = "CONSULTING",
  highlight = "SERVICES COMPANY",
  title2 = "",
  description = "Capyngen is a premium consulting services company providing a broad spectrum of IT consulting services...",
  buttonText = "Let's Build Your App",
  buttonAria = "Let's Build Your App",
  services = [
    "Custom IT Consulting",
    "Business Consulting Solutions",
    "Digital Consulting Services",
    "Enterprise Consulting Company",
  ],
  videoSrc, // Video source URL
  imageSrc,
}) {
  const navigate = useNavigate();
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-blue-900 text-white flex items-center justify-center px-4 pt-24"
      aria-label={`${title} ${highlight} ${title2} Banner`}
    >
      <div className="flex flex-col lg:flex-row w-full max-w-[90vw] mx-auto md:px-10 items-center gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-xl max-w-4xl mx-auto lg:mx-0">
            {title} <span className="text-blue-500">{highlight}</span> {title2}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-[87.5%] mx-auto lg:mx-0 leading-relaxed">
            {description}
          </p>
          <button
            type="button"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 shadow-xl hover:shadow-blue-500/40 text-white font-semibold py-3 px-8 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 mb-12 text-lg group"
            aria-label={buttonAria}
            onClick={() => navigate("/contact-us")}
          >
            {buttonText}
            <span
              className="ml-3 transform group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                focusable="false"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>

          {/* Service Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center bg-gray-800 hover:bg-blue-900 transition-colors duration-200 text-white rounded-full px-5 py-2 shadow border border-gray-700/60"
              >
                <span className="mr-3 text-blue-400 text-lg" aria-hidden="true">
                  &#10003;
                </span>
                <span className="text-base font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Phone Frame with Video */}
        <div className="flex-1 flex justify-center items-center max-w-full py-10 lg:py-0 animate-smoothBounce">
          <div className="relative w-[280px] h-[520px] rounded-[2.5rem] border-[6px] border-gray-800 bg-black shadow-2xl overflow-hidden">
            {/* Top notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

            {/* Dynamic Media */}
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                aria-label="Demo video"
              />
            ) : imageSrc ? (
              <img
                src={imageSrc}
                alt="Demo preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-800 via-gray-900 to-black flex items-center justify-center text-gray-400 text-lg">
                No preview available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
