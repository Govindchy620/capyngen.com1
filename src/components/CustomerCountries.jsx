import React from "react";

// Updated SVG icons to match the image design
const AsiaIcon = () => (
  <svg
    className="w-16 h-16 mx-auto text-red-500 mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
    <path d="M12 3c2.485 0 4.5 4.03 4.5 9" />
  </svg>
);

const OceaniaIcon = () => (
  <svg
    className="w-16 h-16 mx-auto text-red-500 mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
    <circle cx="14" cy="16" r="1" fill="currentColor" />
  </svg>
);

const EuropeIcon = () => (
  <svg
    className="w-16 h-16 mx-auto text-red-500 mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
    <path d="M9 12h6M9 8h6M9 16h6" />
  </svg>
);

const NAIcon = () => (
  <svg
    className="w-16 h-16 mx-auto text-red-500 mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
    <path d="M7.5 8L12 12l4.5-4" />
  </svg>
);

const regions = [
  {
    icon: <AsiaIcon />,
    title: "Asia",
    countries: ["India - 3", "Japan"],
  },
  {
    icon: <OceaniaIcon />,
    title: "Oceania",
    countries: ["Australia", "New Zealand"],
  },
  {
    icon: <EuropeIcon />,
    title: "Europe",
    countries: ["United Kingdom", "Germany", "Switzerland", "Netherlands"],
  },
  {
    icon: <NAIcon />,
    title: "North America",
    countries: ["United States"],
  },
];

const CustomerCountries = () => (
  <div className="w-full py-20 bg-white">
    <div className="max-w-7xl mx-auto px-8 md:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        {/* Left column - Text Content */}
        <div className="lg:w-2/4">
          <h2 className="text-5xl font-semibold text-gray-900 mb-8 leading-tight">
            500+ customers across 37 countries
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Direct presence in United States, United Kingdom, Germany,
            Switzerland,Netherlands, India, Japan, Australia and New Zealand
          </p>
        </div>

        {/* Right column - Region Cards */}
        <div className="lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div
                key={region.title}
                className="bg-white rounded-md border border-gray-100 p-8 flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
              >
                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="transform transition-all duration-300 group-hover:scale-110">
                  {region.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-red-600 transition-colors duration-300">
                  {region.title}
                </h3>

                <div className="space-y-2">
                  {region.countries.map((country, i) => (
                    <div
                      key={i}
                      className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                    >
                      {country}
                    </div>
                  ))}
                </div>

                {/* Decorative line under last country */}
                {index < regions.length - 1 && (
                  <div className="w-16 h-0.5 bg-gray-300 mt-6 group-hover:bg-red-400 transition-colors duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CustomerCountries;
