import React, { useState } from "react";
import { assets } from "../assets/assets";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({ image, title, description }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.4 }}
    className="relative h-80 rounded-lg overflow-hidden group mx-auto card-glow"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover object-top transition-all duration-600 group-hover:scale-110"
    />
    <div
      className="
        absolute bottom-0 left-0 w-full p-6 transition-transform duration-300
        translate-y-40
        group-hover:translate-y-0
        shadow-md
      "
    >
      <p className="text-3xl text-white font-semibold">{title}</p>
      <p className="text-white text-sm mt-2">{description}</p>
    </div>
  </motion.div>
);

const OurServices = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom website solutions tailored to your business needs.",
      image: assets.blog1,
    },
    {
      title: "App Development",
      description: "Mobile and web applications to engage your customers.",
      image: assets.blog2,
    },
    {
      title: "Digital Marketing",
      description: "Strategies to boost your online presence and reach.",
      image: assets.blog3,
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support to keep your site running smoothly.",
      image: assets.blog1,
    },
    {
      title: "Graphic Design",
      description: "Visually stunning designs for your brand identity.",
      image: assets.blog2,
    },
    {
      title: "Domain & Hosting",
      description: "Reliable hosting solutions for your online presence.",
      image: assets.blog3,
    },
    {
      title: "Website Development",
      description: "Custom website solutions tailored to your business needs.",
      image: assets.blog1,
    },
    {
      title: "App Development",
      description: "Mobile and web applications to engage your customers.",
      image: assets.blog2,
    },
    {
      title: "Digital Marketing",
      description: "Strategies to boost your online presence and reach.",
      image: assets.blog3,
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support to keep your site running smoothly.",
      image: assets.blog1,
    },
    {
      title: "Graphic Design",
      description: "Visually stunning designs for your brand identity.",
      image: assets.blog2,
    },
    {
      title: "Domain & Hosting",
      description: "Reliable hosting solutions for your online presence.",
      image: assets.blog3,
    },
    {
      title: "Website Development",
      description: "Custom website solutions tailored to your business needs.",
      image: assets.blog1,
    },
    {
      title: "App Development",
      description: "Mobile and web applications to engage your customers.",
      image: assets.blog2,
    },
    {
      title: "Digital Marketing",
      description: "Strategies to boost your online presence and reach.",
      image: assets.blog3,
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support to keep your site running smoothly.",
      image: assets.blog1,
    },
    {
      title: "Graphic Design",
      description: "Visually stunning designs for your brand identity.",
      image: assets.blog2,
    },
    {
      title: "Domain & Hosting",
      description: "Reliable hosting solutions for your online presence.",
      image: assets.blog3,
    },
    {
      title: "Website Development",
      description: "Custom website solutions tailored to your business needs.",
      image: assets.blog1,
    },
    {
      title: "App Development",
      description: "Mobile and web applications to engage your customers.",
      image: assets.blog2,
    },
    {
      title: "Digital Marketing",
      description: "Strategies to boost your online presence and reach.",
      image: assets.blog3,
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support to keep your site running smoothly.",
      image: assets.blog1,
    },
    {
      title: "Graphic Design",
      description: "Visually stunning designs for your brand identity.",
      image: assets.blog2,
    },
    {
      title: "Domain & Hosting",
      description: "Reliable hosting solutions for your online presence.",
      image: assets.blog3,
    },
    {
      title: "Domain & Hosting",
      description: "Reliable hosting solutions for your online presence.",
      image: assets.blog3,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(5);

  const toggleServices = () => {
    setVisibleCount((prev) => (prev === 5 ? services.length : 5));
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-8xl">
            Other Services
          </h1>
          <p className="mt-4 max-w-2xl text-xl mx-auto">
            Comprehensive Website Services to Ignite Your Online Success.
            Empower Your Business with Powerful Online Services from our
            Website.
          </p>
        </div>

        {/* Cards with Animation */}
        <motion.div
          layout
          className="flex flex-wrap flex-col md:flex-row gap-4 justify-center items-center"
        >
          <AnimatePresence>
            {services.slice(0, visibleCount).map((m, idx) => (
              <ServiceCard key={idx} {...m} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleServices}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            {visibleCount === 5 ? (
              <>
                Show More <ChevronDown size={20} />
              </>
            ) : (
              <>
                Show Less <ChevronUp size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
