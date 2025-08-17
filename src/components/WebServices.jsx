"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Complete website management",
    content:
      "We provide complete website management services, including regular updates, security checks, and performance monitoring to ensure your website runs smoothly.",
  },
  {
    title: "Security and protection",
    content:
      "Security and protection of a website are crucial to safeguard against cyber threats and unauthorized access. We monitor the website 24×7 to counter all kinds of threats to maintain the website safe.",
  },
  {
    title: "Performance optimization",
    content:
      "We optimize website performance by implementing best practices such as caching, image optimization, and code minification to ensure fast loading times and a smooth user experience.",
  },
];

export default function WebServices() {
  const [activeIndex, setActiveIndex] = useState(1); // Default open (Security)

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img
            src="/services-team.jpg" // replace with your image
            alt="Team working"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Website Designing or <br /> Development Services
          </h2>
          <p className="text-gray-300 mb-6">
            If you’re looking for website designing services, there are several
            options available to you. Here are a few avenues you can explore:
          </p>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-gray-700 pb-3 cursor-pointer"
              >
                <div
                  onClick={() => toggleService(index)}
                  className="flex items-center justify-between"
                >
                  <h3 className="font-semibold text-lg">{service.title}</h3>

                  <ChevronRight
                    className={`text-green-400 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Smooth Expand/Collapse */}
                <AnimatePresence>
                  {activeIndex === index && service.content && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-gray-400">{service.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
