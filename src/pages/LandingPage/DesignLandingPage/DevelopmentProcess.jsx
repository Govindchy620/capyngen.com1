import { motion } from "framer-motion";
import { Users, Layers, Code2, TrendingUp } from "lucide-react";

export default function DevelopmentProcess() {
  const steps = [
    {
      icon: Users,
      title: "Understand Your Business Goals",
      description:
        "Listening first and then coding is our mantra. We chart out your goals, target audience, and the way you measure success.",
    },
    {
      icon: Layers,
      title: "Plan a Strategic Roadmap",
      description:
        "We figure out a tech stack, architecture, and workflow that fit perfectly with your business and its needs.",
    },
    {
      icon: Code2,
      title: "Build with Precision",
      description:
        "Development is well organized, transparent, and accompanied by testing at each milestone.",
    },
    {
      icon: TrendingUp,
      title: "Launch, Monitor, Improve",
      description:
        "We continue to enhance efficiency and help your business grow long after launch.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black py-6 md:pb-10 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Capyngen’s Development Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto">
            We follow a proven workflow that eliminates guesswork and builds
            with clarity.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-0 bottom-18 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/40 to-blue-500/40 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 group"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-blue-500/20 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/40">
                    <step.icon size={24} className="text-blue-400" />
                  </div>

                  {/* Step Number */}
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>

                  {/* Mobile Divider */}
                  <div className="mt-6 md:hidden w-14 h-1 bg-blue-500/30 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl text-center mt-10 mx-auto">
          This ensures you get software that works the first time — and evolves
          with you.
        </p>
      </div>
    </section>
  );
}
