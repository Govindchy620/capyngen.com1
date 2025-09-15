import React, { useState } from "react";

const technologies = [
  {
    title: "Blockchain Integration",
    description:
      "Our iOS app development company integrates blockchain technology to enhance data security, ensuring transparent and secure transactions for your iOS apps across various industries.",
    image: "https://via.placeholder.com/600x400/8e44ad/ffffff?text=Blockchain", // replace with actual image
  },
  {
    title: "IoT Integration",
    description:
      "We integrate IoT to create smarter iOS apps that connect devices seamlessly, enabling automation and real-time monitoring.",
    image: "https://via.placeholder.com/600x400/27ae60/ffffff?text=IoT",
  },
  {
    title: "Cloud Computing",
    description:
      "Our cloud integration services ensure scalable, secure, and high-performing iOS apps with efficient data storage and access.",
    image: "https://via.placeholder.com/600x400/2980b9/ffffff?text=Cloud",
  },
  {
    title: "AI Chatbot",
    description:
      "We build AI-powered chatbots for iOS apps, enabling natural conversations and enhancing customer support experiences.",
    image: "https://via.placeholder.com/600x400/f39c12/ffffff?text=AI+Chatbot",
  },
  {
    title: "Business Intelligence",
    description:
      "We integrate BI tools into iOS apps to provide real-time insights and analytics for better decision-making.",
    image: "https://via.placeholder.com/600x400/c0392b/ffffff?text=BI",
  },
  {
    title: "RPA Development",
    description:
      "Our RPA services automate repetitive business processes in iOS apps, improving productivity and efficiency.",
    image: "https://via.placeholder.com/600x400/16a085/ffffff?text=RPA",
  },
];

const AdvancedTech = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-7xl bg-black mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Advanced Tech We Integrate in iOS App Development
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        RichestSoft integrates cutting-edge technologies like blockchain, AI,
        IoT, and cloud computing in its iOS application development services. As
        a top iPhone app development company, we build future-proof apps that
        drive growth and efficiency for your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - List */}
        <ul className="space-y-4">
          {technologies.map((tech, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`cursor-pointer border-b pb-2 transition-all duration-300 ${
                activeIndex === index
                  ? "font-semibold text-black border-black"
                  : "text-gray-600 border-gray-300 hover:text-black"
              }`}
            >
              {tech.title}
            </li>
          ))}
        </ul>

        {/* Right Side - Content */}
        <div className="relative">
          <img
            src={technologies[activeIndex].image}
            alt={technologies[activeIndex].title}
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <h3 className="font-bold text-lg mb-2">
                {technologies[activeIndex].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {technologies[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTech;
