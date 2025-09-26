import React from "react";

const CardsSectionGrid = ({
  heading = "Absolute Ecommerce Mobile App Development Solutions",
  description = [
    "We are a reliable Ecommerce application developer specializing in developing highly-scalable on-demand ecommerce development services. Our knowledgeable Ecommerce mobile app development Company services are globally renowned for providing avant-garde and reliable mobile app solutions.",
    "Our team of experts is capable of creating highly-customizable mobile solutions for business-specified Ecommerce needs.",
    "If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable Ecommerce development services.",
  ],
  services = [],
  reverse = false,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#0a0a0f] via-[#101020] to-[#0a0a0f] py-20 px-6 text-gray-100">
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } gap-16 items-start`}
      >
        {/* Cards Grid */}
        <div className="flex-1 w-full relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                tabIndex={0}
                className="relative group bg-gradient-to-br from-[#1a1f2f] to-[#101520] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-500"
                aria-labelledby={`card-title-${index}`}
                aria-describedby={`card-desc-${index}`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl mb-5 bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg`}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    id={`card-title-${index}`}
                    className="text-2xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    id={`card-desc-${index}`}
                    className="text-base text-gray-400 group-hover:text-gray-300 leading-relaxed"
                  >
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sticky Content section */}
        <aside className="flex-1 w-full lg:sticky lg:top-24 self-start h-fit max-w-lg">
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-10 text-white">
            {heading}
          </h1>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            {Array.isArray(description) ? (
              description.map((para, idx) => (
                <p key={idx} className="hover:text-gray-200 transition-colors">
                  {para}
                </p>
              ))
            ) : (
              <p>{description}</p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CardsSectionGrid;
