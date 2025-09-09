import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({ image, title, description }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.4 }}
    className="relative rounded-lg overflow-hidden group card-glow
      h-56 sm:h-64 lg:h-72 w-full"
  >
    {/* Card Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover object-top 
                 transition-all duration-500 group-hover:scale-110"
    />

    {/* Desktop/Large: Hover Reveal */}
    <div
      className="
        hidden sm:block
        absolute bottom-0 left-0 w-full p-4 transition-transform duration-300
        translate-y-32 group-hover:translate-y-0 bg-gradient-to-t from-black/80
      "
    >
      <p className="text-lg md:text-xl text-white font-semibold">{title}</p>
      <p className="text-white text-xs mt-1">{description}</p>
    </div>

    {/* Mobile: Always Show Info */}
    <div className="sm:hidden absolute bottom-0 left-0 w-full p-3 bg-black/70">
      <p className="text-base font-semibold">{title}</p>
      <p className="text-xs mt-1">{description}</p>
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
  ];

  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <div className="bg-black text-white py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Other Services
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-lg md:text-xl mx-auto">
            Comprehensive Website Services to Ignite Your Online Success.
            Empower Your Business with Powerful Online Services from our
            Website.
          </p>
        </div>

        {/* Grid for cards */}
        <motion.div
          layout
          className="
            grid gap-2 sm:gap-4
            grid-flow-col auto-cols-[minmax(140px,1fr)]
            overflow-x-auto sm:overflow-visible
            no-scrollbar
          "
        >
          <AnimatePresence>
            {services.slice(0, visibleCount).map((m, idx) => (
              <ServiceCard key={idx} {...m} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
