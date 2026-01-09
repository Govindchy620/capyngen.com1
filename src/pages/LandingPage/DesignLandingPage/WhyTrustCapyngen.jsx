import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  {
    q: "Will you deliver on time?",
    a: "Yes. We create structured timelines and use milestone tracking to keep projects on schedule.",
  },
  {
    q: "Will the software be reliable and secure?",
    a: "Yes. We implement industry security standards and testing protocols.",
  },
  {
    q: "Will there be transparency?",
    a: "Absolutely. We offer regular updates, visibility into progress, and clear communication.",
  },
  {
    q: "What about support after launch?",
    a: "Definitely. After delivery, we provide support and optimization.",
  },
  {
    q: "Will it scale as we grow?",
    a: "Yes. The system architecture is planned with scalability in mind.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WhyTrustCapyngen = () => {
  return (
    <section className="w-full py-14 sm:py-16 md:py-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Why Growing Businesses Trust{" "}
            <span className="text-indigo-400">Capyngen</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            There is no doubt that selecting a development partner is a major
            decision. Capyngen gets it and has a thorough understanding of the
            worries business leaders have — that is why we point out our
            solutions in detail:
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover={{ y: -3 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:border-indigo-500/40 transition"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition" />
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold leading-snug">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white/75 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
          className="mt-12 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/15 to-fuchsia-500/10 p-6 md:p-8"
        >
          <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed">
            Capyngen does not promise magic — we promise{" "}
            <span className="font-semibold text-white">clarity</span>,{" "}
            <span className="font-semibold text-white">
              measurable outcomes
            </span>
            , and{" "}
            <span className="font-semibold text-white">
              dependable delivery
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTrustCapyngen;
