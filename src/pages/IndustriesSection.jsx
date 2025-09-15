import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Banknote,
  Home,
  Car,
  Building,
  Droplets,
} from "lucide-react";

const industries = [
  {
    icon: <HeartPulse className="w-10 h-10 text-white mb-4" />,
    title: "Healthcare",
    desc: "Mobile apps in healthcare include telemedicine platforms, health monitoring, patient management, and appointment scheduling.",
  },
  {
    icon: <Banknote className="w-10 h-10 text-white mb-4" />,
    title: "Banking & Finance",
    desc: "Apps for mobile banking, financial management, investment tracking, and payment processing fall under this category.",
  },
  {
    icon: <Home className="w-10 h-10 text-white mb-4" />,
    title: "Real Estate",
    desc: "Apps in real estate often focus on property listings, virtual tours, agent-client communication, and property management.",
  },
  {
    icon: <Car className="w-10 h-10 text-white mb-4" />,
    title: "Automotive",
    desc: "Track vehicles, schedule maintenance, and connect with car features to enhance management and user experience.",
  },
  {
    icon: <Building className="w-10 h-10 text-white mb-4" />,
    title: "E-commerce",
    desc: "Browse products, process payments securely, and receive personalized recommendations to boost sales and engagement.",
  },
  {
    icon: <Droplets className="w-10 h-10 text-white mb-4" />,
    title: "Oil & Gas",
    desc: "Apps for real-time monitoring, equipment management, and data analysis to improve efficiency and safety.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const IndustriesSection = () => {
  return (
    <section className="bg-[#0A1D47] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Transform Industries with Expert App Development Consulting
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Explore the impact of advanced mobile apps across diverse industries,
          enhancing functionality, improving user experience, and driving growth
          and innovation.
        </motion.p>

        {/* Grid with animation */}
        <motion.div
          className="grid md:grid-cols-3 sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {industries.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 25px rgba(255,255,255,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="p-6 border border-gray-600 rounded-lg bg-[#0F2A5F] cursor-pointer"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
