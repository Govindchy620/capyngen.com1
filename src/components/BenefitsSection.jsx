import React from "react";

const BenefitsSection = ({
  heading = "Web Development Solutions We Offer",
  desc = "A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages...",
  benefits = [],
  reverse = false,
  image = null,

  // 🎨 Dynamic Props
  cardBg = "bg-gradient-to-br from-zinc-900 to-zinc-800",
  cardText = "text-white",
  highlightBg = "bg-gradient-to-br from-pink-500 to-red-400",
  highlightText = "text-black",
  hoverScale = "hover:scale-[1.02]",
  hoverShadow = "hover:shadow-2xl",
  hoverRingColor = "hover:ring-pink-500/40",
}) => {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN */}
        <div
          className={`md:sticky md:top-24 self-start flex flex-col gap-6 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            {heading}
          </h1>
          {Array.isArray(desc) ? (
            desc.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base md:text-lg text-white max-w-3xl mx-auto lg:mx-0 mb-4"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-base md:text-lg text-white max-w-3xl mx-auto lg:mx-0">
              {desc}
            </p>
          )}

          {/* Large Image (Optional) */}
          {image && (
            <div className="mt-6">
              <img
                src={image}
                alt="Benefits Illustration"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (benefits cards) */}
        <div className={`space-y-12 ${reverse ? "md:order-1" : "md:order-2"}`}>
          {benefits.map((item, i) => {
            const isHighlight = item.highlight;

            return (
              <div
                key={i}
                className={`relative p-10 rounded-2xl shadow-lg min-h-[40vh] flex flex-col justify-center transition-all duration-300 
                  ${isHighlight ? highlightBg : cardBg} 
                  ${isHighlight ? highlightText : cardText} 
                  ${hoverScale} ${hoverShadow}`}
              >
                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 leading-snug group-hover:text-pink-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-lg leading-relaxed opacity-90">
                  {item.desc}
                </p>

                {/* Subtle hover ring */}
                <div
                  className={`absolute inset-0 rounded-2xl ring-1 ring-transparent ${hoverRingColor} transition-all duration-300 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-center text-white mt-10 text-xl font-semibold max-w-6xl mx-auto">
        One stop for development and maintenance of ecommerce websites, mobile
        apps, and online platforms to ensure effortless shopping experiences.
      </p>
    </section>
  );
};

export default BenefitsSection;
