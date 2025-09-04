import React from "react";

const BenefitsSection = ({
  heading = "Web Development Solutions We Offer",
  desc = "A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages. At RichestSoft, we design and program the web pages best adapted to the different needs of each project. From strategic and rigorous thinking, we define and execute the Internet strategy with in-depth analysis. We focus on and effectively solve the challenges of each project with innovative answers.",
  benefits = [],
}) => {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN (sticky) */}
        <div className="md:sticky md:top-24 self-start">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="text-base md:text-lg my-6 text-white max-w-3xl mx-auto lg:mx-0 space-y-4">
            {desc}
          </p>
        </div>

        {/* RIGHT COLUMN (scrolls with page) */}
        <div className="space-y-12">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`relative p-10 rounded-2xl shadow-lg min-h-[40vh] flex flex-col justify-center transition-all duration-300 ${
                item.highlight
                  ? "bg-gradient-to-br from-pink-500 to-red-400 text-black"
                  : "bg-gradient-to-br from-zinc-900 to-zinc-800 text-white"
              } hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Decorative top accent bar */}
              <div
                className={`absolute top-0 left-0 w-24 h-1 rounded-tr-full ${
                  item.highlight ? "bg-black/50" : "bg-pink-500"
                }`}
              />

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 leading-snug group-hover:text-pink-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-lg leading-relaxed opacity-90">{item.desc}</p>

              {/* Subtle hover ring */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent hover:ring-pink-500/40 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
