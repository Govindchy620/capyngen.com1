import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react"; // modern lightweight icons
import { assets } from "../assets/assets";

const HeroSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const features = [
    {
      title: "Innovative",
      gradient: "from-sky-400 via-blue-500 to-cyan-400",
      description: "Fresh ideas, future-ready solutions.",
      Icon: Sparkles,
    },
    {
      title: "Trusted",
      gradient: "from-green-400 via-emerald-500 to-teal-400",
      description: "A reputation built on reliability.",
      Icon: ShieldCheck,
    },
    {
      title: "Reliable",
      gradient: "from-purple-400 via-fuchsia-500 to-pink-400",
      description: "Always delivering on our promise.",
      Icon: CheckCircle2,
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={assets.heroVideo}
        poster={assets.heroPoster || "/default-poster.jpg"}
        preload="metadata"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8 md:space-y-10 mt-20 sm:mt-28 md:mt-32">
        {/* Title */}
        <h1 className="font-extrabold text-white leading-tight tracking-tight text-[clamp(2rem,5vw,4.5rem)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          Designing Innovation, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
            Delivering Growth
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-gray-300 max-w-3xl text-[clamp(1rem,1.5vw,1.25rem)] drop-shadow-sm"
        >
          Capyngen is a custom software development company and a digital
          marketing agency providing <strong>Web Development</strong>,{" "}
          <strong>CRM</strong>, <strong>SEO</strong>, <strong>AI</strong>, and{" "}
          <strong>IT Consulting</strong> services. We are a major{" "}
          <strong>IT company</strong> in World and offer the best solutions that
          are considered all over the world.
        </motion.p>

        {/* Features Section */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 mt-1"
          role="list"
          aria-label="Core company features"
        >
          {[
            {
              title: "Innovative",
              gradient: "from-blue-400 to-cyan-400",
              description:
                "New ideas, future-word solutions of a leading IT Company in India.",
            },
            {
              title: "Trusted",
              gradient: "from-green-400 to-emerald-400",
              description:
                "Reliable reputation and that we are one of best IT company in India.",
            },
            {
              title: "Reliable",
              gradient: "from-purple-400 to-pink-400",
              description:
                "It will always deliver on our promise as a fast-growing IT company in world.",
            },
          ].map(({ title, gradient, description }) => (
            <motion.li
              key={title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg p-2 cursor-pointer select-text"
              tabIndex={0}
              aria-describedby={`${title.toLowerCase()}-desc`}
              role="listitem"
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent select-text`}
              >
                {title}
              </h3>
              <p
                id={`${title.toLowerCase()}-desc`}
                className="text-gray-400 mt-1 text-sm sm:text-base text-center"
              >
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default HeroSection;
