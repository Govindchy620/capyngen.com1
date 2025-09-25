import React from "react";
import { assets } from "../assets/assets";
import AnimatedButton from "./AnimatedButton";
import BestHeading from "./BestHeading";

const demoPeople = [assets.team1, assets.team2, assets.team3, assets.team4];

const HomeAboutUs = () => {
  return (
    <section
      className="relative w-full overflow-hidden text-white px-4 sm:px-6 md:px-12 lg:px-20"
      aria-label="About Capyngen"
    >
      {/* Section Heading */}
      <BestHeading title="" highlight="About Capyngen" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-10 md:pt-14 gap-12 xl:gap-20">
        {/* Illustration / 3D Image */}
        <div className="w-full md:w-1/3 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[26rem]">
            <img
              src={assets.capyngen3d}
              alt="Capyngen modern IT infrastructure illustration"
              className="w-full h-auto object-contain max-w-md md:max-w-none md:h-[420px] lg:h-[480px] xl:h-[520px] animate-smoothBounce drop-shadow-2xl"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              sizes="(max-width: 640px) 18rem, (max-width: 768px) 22rem, 33vw"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 flex flex-col space-y-8 md:space-y-10 order-2 md:order-1 text-center md:text-left">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight drop-shadow-lg">
            Capyngen – Your Partner Beyond a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
              Digital Marketing Agency
            </span>
          </h2>

          {/* Team Avatars */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-start gap-4 md:gap-6">
            <div className="flex -space-x-3 sm:-space-x-4">
              {demoPeople.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Capyngen team member ${idx + 1}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md border border-white/20 shadow-md object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              ))}
            </div>
            <span className="text-sm sm:text-base md:text-lg ">
              You'll be talking with our talented team.
            </span>
          </div>

          {/* Description + CTA */}
          <div className="flex flex-col gap-5 md:gap-7 max-w-3xl mx-auto md:mx-0">
            <p className="text-[clamp(1rem,1.4vw,1.15rem)] font-medium  leading-relaxed drop-shadow-sm">
              Capyngen is a cut above the rest in the{" "}
              <strong>digital marketing</strong> agency arena, as we are not
              only a digital marketing agency. The team of Capyngen, equipped
              with the most <strong>up-to-date technologies</strong> and with
              the enthusiasm for innovation, combines artistry with the highest
              technical standards to produce bespoke strategies. Getting the
              goals, target audience, and idea of our clients, we assure a{" "}
              <em>personalized modus Method</em>.
            </p>

            <AnimatedButton
              text="Learn More About Us"
              aria-label="Learn more about Capyngen"
              onClick={() => alert("Button clicked!")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
