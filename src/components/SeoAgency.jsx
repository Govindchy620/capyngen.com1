import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const SeoAgency = () => {
  const [progressVisible, setProgressVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProgressVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) observer.observe(progressRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative py-20 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={assets.seoAgency}
              alt="SEO professionals with analytics"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-10">
            {/* Header with star icon */}
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-2xl">⭐</span>
              <span className="text-orange-500 font-medium text-lg">
                With SEO Optimisation...
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-snug">
              Expect Great Things
              <br />
              From Your SEO Agency
            </h2>

            {/* Description */}
            <p className="text-white text-lg leading-relaxed max-w-lg">
              Turn your ideas into reality with our exceptional software design
              and development team. Join the growing list of clients who have
              leveraged our expertise to scale their business.
            </p>

            {/* Stats + Progress */}
            <div
              ref={progressRef}
              className="flex flex-col md:flex-row items-start md:items-center border-b pb-6 gap-8"
            >
              {/* Success stat */}
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-white">
                    250
                  </span>
                  <span className="text-orange-500 text-2xl font-bold">+</span>
                </div>
                <p className="text-orange-500 font-semibold">Successful Job</p>
              </div>

              {/* Progress bar */}
              <div className="flex-1 border-l pl-8">
                <div className="flex justify-between">
                  <span className="font-bold text-lg text-white">
                    Consulting Skill
                  </span>
                  <span className="font-bold text-lg text-white">70%</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full mt-3 overflow-hidden">
                  <div
                    className="bg-white h-3 rounded-full transition-all duration-[1500ms] ease-out"
                    style={{ width: progressVisible ? "70%" : "0%" }}
                  />
                </div>
              </div>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 items-center text-white font-medium">
              <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">✓</span>
                GRE CBT Test
              </div>
              <span className="text-white">•</span>
              <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">✓</span>
                Moneyback Guarantee
              </div>
              <span className="text-white">•</span>
              <div className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <span className="text-orange-500">✓</span>
                JEE CBT Test
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <span className="bg-white text-orange-500 rounded-full p-2 group-hover:rotate-45 transition-transform duration-300">
                  →
                </span>
                Get a free quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoAgency;
