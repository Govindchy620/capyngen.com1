"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { number: 15, suffix: "+", label: "Total Years of Experience" },
    { number: 110, suffix: "+", label: "Integrated RPA in Android App" },
    { number: 50, suffix: "+", label: "NLP & LLM Integration" },
    { number: 50, suffix: "+", label: "AI Integration in Android App" },
    { number: 40, suffix: "+", label: "Blockchain Android Apps" },
  ];

  // Intersection observer to trigger count-up only when visible
  const { ref, inView } = useInView({
    triggerOnce: true, // run once
    threshold: 0.2, // 20% visible
  });

  return (
    <section ref={ref} className="bg-blue-800 text-white py-16 px-6">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp end={stat.number} duration={2.5} /> : "0"}
              {stat.suffix}
            </h3>
            <p className="mt-2 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 my-10"></div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-lg md:text-xl mb-6">
          Consult with Our{" "}
          <span className="font-bold">Android App Experts</span> Today For{" "}
          <br />
          Android App Development Services
        </p>
        <a
          href="#"
          className="inline-block text-lg font-semibold underline underline-offset-4 decoration-red-500 hover:decoration-white transition"
        >
          Schedule Meeting &gt;
        </a>
      </div>
    </section>
  );
};

export default StatsSection;
