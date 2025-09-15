import React from "react";
import { motion } from "framer-motion";

const GetStarted = ({
  title = "Guiding Your App Vision from Concept to Launch with Expert Consulting and Proven Strategies",
  description = "Our expert consulting team provides end-to-end support, from initial concept through to successful launch, ensuring every aspect of your app development is meticulously handled.",
  buttonText = "Get Started Today",
  buttonColor = "bg-red-500 hover:bg-red-600",
  buttonTextColor = "text-white",
  backgroundColor = "bg-[#0a1b52]", // default dark blue
  textColor = "text-white",
  image,
  reverse = false, // toggle layout
}) => {
  return (
    <section className="bg-black/90 py-10">
      <div
        className={`${backgroundColor} py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto rounded-xl`}
      >
        <div
          className={`container max-w-6xl mx-auto flex ${
            image
              ? `flex-col items-center justify-between gap-8 md:gap-16 lg:gap-20 ${
                  reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`
              : "flex-col md:flex-row items-center justify-between gap-6"
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: image ? (reverse ? 50 : -50) : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 max-w-3xl"
          >
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-6 ${textColor}`}
            >
              {title}
            </h1>
            <div className={`space-y-4 text-base sm:text-lg ${textColor}`}>
              {Array.isArray(description) ? (
                description.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p>{description}</p>
              )}
            </div>
          </motion.div>

          {/* Button when no image */}
          {!image && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:flex-shrink-0"
            >
              <button
                className={`${buttonColor} ${buttonTextColor} font-semibold px-6 py-3 rounded-md shadow-md transition`}
              >
                {buttonText} →
              </button>
            </motion.div>
          )}

          {/* Image Section (only if provided) */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <img
                src={image}
                alt="App Consulting Illustration"
                className="w-full"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
