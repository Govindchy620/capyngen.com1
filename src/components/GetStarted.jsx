import React from "react";
import { motion } from "framer-motion";

const GetStarted = ({
  title = "Guiding Your App Vision from Concept to Launch with Expert Consulting and Proven Strategies",
  description = "Our expert consulting team provides end-to-end support, from initial concept through to successful launch, ensuring every aspect of your app development is meticulously handled.",
  buttonText = "Get Started Today",
  buttonColor = "bg-red-500 hover:bg-red-600",
  buttonTextColor = "text-white",
  backgroundColor = "bg-[#0a1b52]",
  backgroundVideo,
  textColor = "text-white",
  image,
  reverse = false,
  listItems = [], // New list prop
}) => (
  <section className="relative bg-black/90 py-10 overflow-hidden">
    <div
      className={`relative z-10 py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto rounded-2xl overflow-hidden ${
        backgroundVideo ? "bg-black/50" : backgroundColor
      }`}
    >
      {backgroundVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          src={backgroundVideo}
        />
      )}
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
          className="flex-1 max-w-3xl z-10"
        >
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-6 ${textColor}`}
          >
            {title}
          </h2>
          <div className={`space-y-4 text-base sm:text-lg ${textColor}`}>
            {Array.isArray(description) ? (
              description.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>{description}</p>
            )}
            {/* Render list if items exist */}
            {Array.isArray(listItems) && listItems.length > 0 && (
              <ul className="mt-6 space-y-3 text-lg">
                {listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-green-400 text-lg">✔</span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
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
            className="md:flex-shrink-0 z-10"
          >
            <button
              className={`${buttonColor} ${buttonTextColor} font-semibold px-6 py-3 rounded-md shadow-md transition`}
            >
              {buttonText} →
            </button>
          </motion.div>
        )}

        {/* Image Section (if provided) */}
        {image && (
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center z-10"
          >
            <img
              src={image}
              alt="App Consulting Illustration"
              className="w-full max-w-md rounded-xl"
            />
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

export default GetStarted;
