import React from "react";
import { Reveal } from "../../../ui/Reveal";

const audienceData = [
  {
    title: "Ambitious Start-ups",
    desc: "Start-ups that want to reach out quickly via PPC and social media.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Expanding Companies",
    desc: "Expanding companies are establishing long-term organic power using SEO.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
  },
  {
    title: "Established Brands",
    desc: "Established brands maximizing and expanding their online performance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
  },
];

const Audience = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-glow/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Who Capyngen Is Ideal For
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Capyngen is constructed on brands that are serious about growth:
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {audienceData.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-48 h-48 rounded-full p-2 border-2 border-brand-accent/20 mb-8 relative">
                  <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="absolute inset-0 border-2 border-brand-glow/50 rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-glow transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
