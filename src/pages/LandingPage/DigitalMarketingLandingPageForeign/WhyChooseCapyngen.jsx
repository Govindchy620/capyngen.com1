import React from "react";
import { Target, BarChart3, Settings, ShieldCheck } from "lucide-react";
import { FadeIn, Reveal } from "../../../ui/Reveal";

const features = [
  {
    icon: Target,
    title: "Individualized Plans",
    description:
      "No cookie-cutter templates. We build strategies specifically for your business model and market position.",
  },
  {
    icon: BarChart3,
    title: "ROI-Based Campaigns",
    description:
      "Every dollar spent is tracked. We focus on explicit KPIs and open reporting to ensure maximum growth.",
  },
  {
    icon: Settings,
    title: "Full-Funnel Optimization",
    description:
      "From awareness to retention, we optimize SEO, Social, and PPC to work together seamlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reporting",
    description:
      "Growth is optimized by obvious data. Weekly updates, practical insights, and clear communication.",
  },
];

const WhyChooseCapyngen = () => {
  return (
    <section
      className="py-18 bg-brand-surface relative overflow-hidden bg-gradient-to-b from-blue-950 to-black"
      id="why-us"
    >
      {/* Background Mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Modern Brands Choose Capyngen
            </h2>
            <p className="text-white max-w-2xl mx-auto text-lg">
              Our campaigns are optimized through ongoing changes to ensure
              maximum growth and improved returns.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="h-full p-8 rounded-lg bg-brand-dark/50 backdrop-blur-sm border border-white/50 hover:border-brand-accent/50 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-accent/5">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <feature.icon size={100} className="text-white" />
                </div>

                <div className="w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors border border-white/50">
                  <feature.icon className="w-7 h-7 text-brand-accent text-gray-700 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCapyngen;
