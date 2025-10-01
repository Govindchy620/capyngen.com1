import React from "react";

const BenefitsSection = ({
  heading = "Web Development Solutions We Offer",
  desc = "A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages...",
  benefits = [],
  reverse = false,
  image = null,
  footerNote = "One stop for development and maintenance of ecommerce websites, mobile apps, and online platforms to ensure effortless shopping experiences.",
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#0a0a0f] via-[#111827] to-[#0a0a0f] text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* LEFT COLUMN */}
        <div
          className={`md:sticky md:top-16 self-start flex flex-col gap-6 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          {/* Heading with accent */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg">
            {heading}
          </h1>

          {/* Description */}
          {Array.isArray(desc) ? (
            desc.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-3 leading-relaxed hover:text-gray-200 transition-colors"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed hover:text-gray-200 transition-colors">
              {desc}
            </p>
          )}

          {/* Side Image */}
          {image && (
            <div className="mt-6 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={image}
                alt="Benefits Illustration"
                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (Cards) */}
        <div
          className={`space-y-10 flex flex-col ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          {benefits.map((item, i) => (
            <article
              key={i}
              tabIndex={0}
              className="relative group p-8 rounded-2xl min-h-[20vh] flex flex-col justify-start
                bg-gradient-to-br from-[#1a1f2f]/80 to-[#0f1420]/80 
                backdrop-blur-xl border border-white/10 
                shadow-lg hover:shadow-2xl hover:scale-[1.03] 
                transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
              aria-labelledby={`benefit-title-${i}`}
              aria-describedby={`benefit-desc-${i}`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Card Image/Icon */}
                {item.image && (
                  <div className="mb-6 w-16 h-16 rounded-2xl overflow-hidden border border-white/20 shadow-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                {/* Title */}
                <h3
                  id={`benefit-title-${i}`}
                  className="text-2xl md:text-3xl font-semibold mb-3 leading-snug text-white group-hover:text-cyan-400 transition-colors drop-shadow-lg"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  id={`benefit-desc-${i}`}
                  className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors"
                >
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-white mt-16 text-lg md:text-xl font-medium max-w-6xl mx-auto leading-relaxed ">
        {footerNote}
      </p>
    </section>
  );
};

export default BenefitsSection;
