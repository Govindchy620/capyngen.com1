import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-10 mt-17 text-white">
      <div>
        <div className="relative overflow-hidden rounded-3xl min-h-150 flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://www.boopin.com/wp-content/uploads/2023/11/service-page-1-scaled.jpg')",
            }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-4xl px-6 md:px-12 w-1/2"
          >
            <h1 className="text-white font-bold leading-tight text-4xl">
              Capyngen – India’s Most Trusted Web, App & CRM Development Company
            </h1>
            <br />

            <h2 className="font-bold text-2xl">
              Helping Businesses Grow with Secure, Scalable, and Reliable
              Digital IT Solutions
            </h2>
            <br />

            <p className="text-lg leading-tight">
              Capyngen helps startups, high-growth companies, and large
              enterprises to develop custom software, web platforms, mobile
              apps, and smart systems that are dependable, scalable, and
              designed to deliver results.
            </p>
            <br />
            <p className="text-lg leading-tight">
              Code writing is not our only thing; we address actual business
              issues through technology that not only works now but also expands
              with your business.
            </p>

            {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-fuchsia-500 px-7 py-3 text-sm font-semibold text-white hover:bg-fuchsia-500 transition-all duration-300"
          >
            LET’S TALK
          </motion.button> */}
          </motion.div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
