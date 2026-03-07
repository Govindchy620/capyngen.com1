import React from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100086626928653",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/capyngen-private-limited-5ba173390",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/capyngen/",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://x.com/capyngen", label: "Twitter" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Capyngen-pvt-ltd",
      label: "YouTube",
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <footer
      className="bg-brand-dark pt-24 pb-12 border-t border-white/5 relative overflow-hidden bg-black"
      id="contact"
    >
      {/* 1. Added pointer-events-none here to stop it from stealing clicks */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-glow/5 rounded-full blur-[100px] pointer-events-none" />


      {/* 2. Added relative and z-10 here to bring content to the front */}
      <motion.div
        className="relative z-10 mt-2 pt-6 border-t border-slate-700/50 space-y-6 max-w-6xl mx-auto flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
        custom={2}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <a
            href="http://www.capyngen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            www.capyngen.com
          </a>
          <a
            href="mailto:sales@capyngen.com"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            sales@capyngen.com
          </a>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <span className="font-medium text-slate-400">Connect With Us:</span>
          <div className="flex space-x-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-5 h-5 text-slate-300 hover:text-white transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;