import React from "react";

const BenefitsSection = ({
  heading = "Why Leading Brands Choose Us for App Development?",
  benefits = [],
}) => {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN (sticky) */}
        <div className="md:sticky md:top-24 self-start">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            {heading}
          </h1>
          <div className="mt-8 w-28 h-28 border border-gray-500 rounded-full"></div>
        </div>

        {/* RIGHT COLUMN (scrolls with page) */}
        <div className="space-y-12">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`p-10 rounded-2xl shadow-lg min-h-[40vh] flex flex-col justify-center ${
                item.highlight ? "bg-pink-500 text-black" : "bg-zinc-900"
              }`}
            >
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
