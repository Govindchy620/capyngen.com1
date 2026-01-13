import React from "react";
import { Share2, MousePointerClick, Search, CheckCircle2 } from "lucide-react";
import { FadeIn } from "../../../ui/Reveal";

const services = [
  {
    title: "Social Media Marketing Services – Turn Followers into Customers",
    description: "",
    icon: Share2,
    color: "from-pink-500 to-rose-500",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop",
    features: [
      "Instagram, Facebook, LinkedIn, X and YouTube.",
      "Recognition, leads, interactions & purchases.",
      "Regular, high-impact content creative.",
    ],
  },
  {
    title: "Pay-Per-Click Advertising Services – Instant, Measurable Results",
    description: "",
    icon: MousePointerClick,
    color: "from-brand-glow to-blue-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    features: [
      "High-intent keyword and audience research.",
      "Targeting based on demographics, interest and behavior.",
      "Formatted ad groups aligned with user intent and opening pages.",
    ],
  },
  {
    title: "SEO Services – Sustainable Organic Growth on Search Engines",
    description: "",
    icon: Search,
    color: "from-emerald-400 to-green-600",
    image:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2670&auto=format&fit=crop",
    features: [
      "Speed optimization, mobile optimization and indexing optimization.",
      "Keyword-based on-page SEO",
      "Better UX & lower bounce rates",
    ],
  },
];

const Services = () => {
  return (
    <section
      className="py-18 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden"
      id="services"
    >
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-accent/5 rounded-full filter blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 text-center leading-15">
            Our Digital Marketing Services – A 360° Growth Engine
          </h2>
          <p className="text-white text-center max-w-3xl mx-auto text-lg">
            We develop a comprehensive online development platform that improves
            awareness, purchases, and retention of customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="group relative h-full bg-brand-surface overflow-hidden rounded-md border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-accent/10">
                {/* Image Background Header */}
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-dark/60 z-10 group-hover:bg-brand-dark/40 transition-colors duration-500" />

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-0`}
                    >
                      <service.icon className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-6 relative">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-white mb-10 text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5 text-white" />
                        <span className="text-gray-300 text-sm font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom line accent */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
