import React from "react";

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
  <section className="w-full py-16 sm:py-14 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16">
        Our Values
      </h2>

      {/* Value Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {values.map((value) => (
          <div
            key={value.title}
            className="p-6 sm:p-8 rounded-2xl bg-gray-500 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              {value.title}
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurValues;
