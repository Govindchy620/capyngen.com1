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
    <section className="relative bg-black text-white px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* LEFT COLUMN */}
        <div
          className={`md:sticky md:top-24 self-start flex flex-col gap-6 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            {heading}
          </h1>

          {Array.isArray(desc) ? (
            desc.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-3"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0">
              {desc}
            </p>
          )}

          {image && (
            <div className="mt-6 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={image}
                alt="Benefits Illustration"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
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
            <div
              key={i}
              className="relative p-4 md:p-6 rounded-2xl min-h-[20vh] flex flex-col justify-start transition-all duration-300
                bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl hover:scale-[1.03]"
            >
              {/* Card Image */}
              {item.image && (
                <div className="mb-6 w-16 h-16 rounded-2xl overflow-hidden border border-white/20 shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 leading-snug text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                {item.desc}
              </p>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent hover:ring-white/30 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-300 mt-14 text-lg md:text-xl font-medium max-w-6xl mx-auto">
        {footerNote}
      </p>
    </section>
  );
};

export default BenefitsSection;
