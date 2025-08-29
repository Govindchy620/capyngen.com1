import React from "react";

// Updated icons to match the image design
const EthicsIcon = () => (
  <svg
    className="w-16 h-16 mx-auto text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M6.75 15.75h10.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0017.25 4.5H6.75A2.25 2.25 0 004.5 6.75v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const EmpathyIcon = () => (
  <svg
    className="w-16 h-16 mx-auto text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const ExcellenceIcon = () => (
  <svg
    className="w-16 h-16 mx-auto text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.091 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const values = [
  {
    icon: <EthicsIcon />,
    title: "Ethics",
    description:
      "Our commitment to ethical business practices and transparent communication forms the foundation of all our interactions; we are always doing what's right for our customers, partners, and society.",
  },
  {
    icon: <EmpathyIcon />,
    title: "Empathy",
    description:
      "At Experion, we prioritize putting ourselves in our clients' shoes to understand their needs and craft exceptional digital solutions that truly make a difference in their lives.",
  },
  {
    icon: <ExcellenceIcon />,
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

      {/* Icons Row */}
      <div className="relative mb-16">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
        
        {/* Icons with Red Dots */}
        <div className="relative z-10 flex justify-center items-center gap-32">
          {values.map((value, idx) => (
            <div key={value.title} className="flex flex-col items-center group cursor-pointer">
              <div className="transform transition-all duration-300 group-hover:scale-110">
                {value.icon}
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-full mt-6 transform transition-all duration-300 group-hover:scale-125"></div>
            </div>
          ))}
        </div>
      </div>

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
