import React from "react";

export default function Banner10({
  title = "CONSULTING",
  highlight = "SERVICES COMPANY",
  description = "Capyngen is a premium consulting services company providing a broad spectrum of IT consulting services...",
  buttonText = "Let's Build Your App",
  buttonAria = "Let's Build Your App",
  services = [
    "Custom IT Consulting",
    "Business Consulting Solutions",
    "Digital Consulting Services",
    "Enterprise Consulting Company",
  ],
  image,
}) {
  return (
    <section
      className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-gray-950 to-blue-900 text-white flex items-center justify-center px-4"
      aria-label={`${title} ${highlight} Banner`}
    >
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[90vw] mx-auto items-center gap-5">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow-xl">
            {title} <span className="text-blue-500">{highlight}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-lg mb-8 max-w-[87.5%] mx-auto lg:mx-0 leading-relaxed">
            {description}
          </p>
          <button
            type="button"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 shadow-xl hover:shadow-blue-500/40 text-white font-semibold py-3 px-8 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 mb-10 text-lg group"
            aria-label={buttonAria}
          >
            {buttonText}
            <span className="ml-3 transform group-hover:translate-x-1 transition-transform">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </span>
          </button>
          {/* Service tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center bg-gray-800 hover:bg-blue-900 text-white rounded-full px-5 py-2 shadow transition-colors duration-200 border border-gray-700/60"
              >
                <span className="mr-3 text-blue-400 text-lg" aria-hidden="true">
                  &#10003;
                </span>
                <span className="text-base font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center max-w-full">
          <img
            src={image}
            alt={`${title} ${highlight} illustration`}
            className="w-full max-w-[420px] rounded-3xl shadow-2xl border-4 border-blue-700/30 object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
