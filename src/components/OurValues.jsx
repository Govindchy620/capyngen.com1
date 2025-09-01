import React from "react";

// Updated icons to match the image design

const values = [
  {
    title: "Ethics",
    description:
      "Our commitment to ethical business practices and transparent communication forms the foundation of all our interactions; we are always doing what's right for our customers, partners, and society.",
  },
  {
    title: "Empathy",
    description:
      "At Experion, we prioritize putting ourselves in our clients' shoes to understand their needs and craft exceptional digital solutions that truly make a difference in their lives.",
  },
  {
    title: "Excellence",
    description:
      "Continuously striving for excellence in all that we do, from delivering high-quality solutions to fostering a positive work environment and achieving the highest standards of quality, innovation, and customer satisfaction, is at the heart of Experion's DNA.",
  },
];

const OurValues = () => (
  <div className="w-full py-20 bg-white">
    <div className="max-w-7xl mx-auto px-8 md:px-16">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-20">
        Our Values
      </h2>

      {/* Value Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((value, idx) => (
          <div
            key={value.title}
            className="text-center px-6 group cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
              {value.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OurValues;
