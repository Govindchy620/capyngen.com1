import React from "react";

// Single Category Component
const TechCategory = ({ title, items }) => {
  return (
    <div className="bg-transparent border border-gray-700 shadow-sm hover:shadow-white transition-all duration-300 rounded-lg py-5 px-3 flex flex-col items-center hover:-translate-y-2">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-600 transition-all duration-300  shadow-sm hover:shadow-white">
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain transition-transform duration-300"
              />
            </div>
            <span className="text-sm font-medium group-hover:text-indigo-600 transition-colors duration-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Tech Stack Section
const TechStack = ({ heading, subheading, categories }) => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-900 text-white">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-normal">
          {heading}
        </h2>
        <p className="text-lg max-w-2xl mx-auto">{subheading}</p>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Row: 2 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.slice(0, 2).map((category, index) => (
            <TechCategory
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>

        {/* Bottom Row: 3 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.slice(2).map((category, index) => (
            <TechCategory
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
