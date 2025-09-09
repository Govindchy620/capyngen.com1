import React from "react";

// Updated SVG icons
const AsiaIcon = () => (
  <svg
    className="w-14 h-14 md:w-16 md:h-16 mx-auto text-red-500 mb-4"
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
    className="w-14 h-14 md:w-16 md:h-16 mx-auto text-red-500 mb-4"
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
    className="w-14 h-14 md:w-16 md:h-16 mx-auto text-red-500 mb-4"
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
    className="w-14 h-14 md:w-16 md:h-16 mx-auto text-red-500 mb-4"
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
  <div className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
        {/* Left column */}
        <div className="lg:w-2/5">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            500+ customers across{" "}
            <span className="text-red-600">37 countries</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Direct presence in United States, United Kingdom, Germany,
            Switzerland, Netherlands, India, Japan, Australia and New Zealand.
          </p>
        </div>

        {/* Right column */}
        <div className="lg:w-3/5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {regions.map((region) => (
              <div
                key={region.title}
                className="relative bg-white rounded-2xl border border-gray-100 p-8 flex flex-col items-center text-center 
                shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 cursor-pointer"
              >
                {/* Decorative gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/40 to-red-600/40 opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

                <div className="mb-4 transition-transform duration-500 group-hover:scale-110">
                  {region.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {region.title}
                </h3>

                <div className="space-y-2">
                  {region.countries.map((country, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300"
                    >
                      {country}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CustomerCountries;
