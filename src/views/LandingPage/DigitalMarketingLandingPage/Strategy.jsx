import React from "react";
import { ArrowRight, Zap, TrendingUp, Users } from "lucide-react";
import { Reveal } from "../../../ui/Reveal";
import { motion } from "framer-motion";

const Strategy = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden"
      id="strategy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Integrated Digital Marketing Strategy – All Channels Working
                Together
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-white text-lg mb-4 leading-relaxed">
                The greatest strength of Capyngen is that of integration. Our
                PPC, Social Media Marketing, digital marketing and SEO services
                are combined through a unified strategy.
              </p>
            </Reveal>

            <div className="space-y-2">
              {[
                {
                  icon: Zap,
                  title: "Immediate Traffic",
                  desc: "PPC gets immediate traffic, and SEO gains authority over time.",
                },
                {
                  icon: TrendingUp,
                  title: "Long-term Authority",
                  desc: "Paid and organic efforts are reinforced by social media since it generates trust and brand recall.",
                },
                {
                  icon: Users,
                  title: "Brand Loyalty",
                  desc: "An awareness, consideration, conversion, and loyalty strategy.",
                },
              ].map((item, idx) => (
                <Reveal key={idx} delay={0.2 + idx * 0.1}>
                  <div className="flex gap-4 items-start group p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default">
                    <div className="p-3 bg-brand-dark rounded-lg border border-white/60 group-hover:border-brand-accent/50 transition-colors">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-brand-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <Reveal delay={0.3}>
              <div className="relative rounded-md overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-brand-accent/20 mix-blend-color z-10" />

                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                  alt="Strategic Planning"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>

            {/* Background glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-indigo-500/20 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
