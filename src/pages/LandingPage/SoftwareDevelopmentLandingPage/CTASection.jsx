import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

export default function ReadyToBuild() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/capyngen/",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/capyngen/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/capyngen_official/",
      label: "Instagram",
    },
    { icon: Twitter, href: "https://x.com/capyngen", label: "Twitter" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Capyngen_official",
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
    <section className="w-full bg-black py-4 md:py-8 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
        >
          Ready to Build Software Built for Business?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed"
        >
          If you want a software partner that listens, delivers, and supports
          you through growth —
          <br className="hidden sm:block" />
          <span className="font-semibold text-white text-2xl">
            Capyngen is ready to work with you.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-5 text-sm sm:text-base md:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed"
        >
          Whether it’s web, apps, AI, ecommerce, blockchain, or enterprise
          systems — get in touch now and turn your vision into powerful digital
          solutions.
        </motion.p>

        {/* Contact & Social Links */}
        <motion.div
          className="mt-10 pt-6 border-t border-slate-700/50 space-y-6 max-w-4xl mx-auto flex flex-col items-center"
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
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
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
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
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
            <span className="font-medium text-white">Connect With Us:</span>
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
      </div>
    </section>
  );
}
