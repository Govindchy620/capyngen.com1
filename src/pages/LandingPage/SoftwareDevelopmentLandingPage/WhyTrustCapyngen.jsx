import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const trustPoints = [
  {
    id: 1,
    q: "Will you deliver on time?",
    a: "Yes. We create structured timelines and use milestone tracking to keep projects on schedule.",
  },
  {
    id: 2,
    q: "Will the software be reliable and secure?",
    a: "Yes. We implement industry security standards and testing protocols.",
  },
  {
    id: 3,
    q: "Will there be transparency?",
    a: "Absolutely. We offer regular updates, visibility into progress, and clear communication.",
  },
  {
    id: 4,
    q: "Will it scale as we grow?",
    a: "Yes. The system architecture is planned with scalability in mind.",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export function WhyTrustCapyngen() {
  return (
    <section className="py-10 max-w-[90vw] mx-auto bg-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          custom={0}
        >
          Why Growing Businesses Trust Capyngen
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-md md:text-xl text-white/85 mb-12 max-w-5xl mx-auto leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          custom={1}
        >
          There is no doubt that selecting a development partner is a major
          decision. Capyngen gets it and has a thorough understanding of the
          worries business leaders have — that is why we point out our solutions
          in detail:
        </motion.p>

        {/* Cards */}
        <div className="grid gap-4 md:gap-4 md:grid-cols-2 lg:grid-cols-4 text-left">
          <AnimatePresence>
            {trustPoints.map(({ id, q, a }, i) => (
              <motion.div
                key={id}
                className="p-7 flex flex-col text-white bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-lg rounded-md shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-transform"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                custom={i + 2}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{q}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          custom={8}
          className="mt-4 max-w-6xl mx-auto p-8 rounded-2xl"
        >
          <p className="text-white/90 text-base md:text-xl leading-relaxed">
            Capyngen does not promise magic — we promise{" "}
            <span className="text-white font-bold">clarity</span>,{" "}
            <span className="text-white font-bold">measurable outcomes</span>,
            and{" "}
            <span className="text-white font-bold">dependable delivery</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyTrustCapyngen;
