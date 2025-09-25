import React from "react";
import { assets } from "../assets/assets";
import AnimatedButton from "./AnimatedButton";
import BestHeading from "./BestHeading";

const demoPeople = [assets.team1, assets.team2, assets.team3, assets.team4];

const HomeAboutUs = () => {
  return (
    <section
      className="relative w-full overflow-hidden text-white"
      aria-label="About Us Section"
    >
      <BestHeading title="" highlight="About Capyngen" />

      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center pt-6 md:py-12 px-6 md:px-12 xl:gap-24">
        {/* Right Section: Image */}
        <div className="w-full md:w-1/3 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
            <img
              src={assets.capyngen3d}
              alt="IT Server Room representing technology and infrastructure"
              className="w-full h-auto object-contain max-w-md md:max-w-none md:h-[480px] animate-smoothBounce"
            />
          </div>
        </div>

        {/* Left Section: Text */}
        <div className="w-full md:w-2/3 flex flex-col space-y-8 md:space-y-10 order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Capyngen – Your Partner Beyond a Digital Marketing Agency
          </h1>

          {/* Team Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between">
            {/* Avatars */}
            <div className="flex flex-wrap gap-2 items-center">
              {demoPeople.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Team member ${idx + 1}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-sm"
                />
              ))}
              <span className="text-sm sm:text-base md:text-lg ml-2 whitespace-pre-line">
                You’ll be talking with our{"\n"}
                talented team.
              </span>
            </div>
          </div>

          {/* Description + Button */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
            <p className="text-base sm:text-lg font-medium">
              Capyngen is a cut above the rest in the digital marketing agency
              arena, as we are not only a digital marketing agency. The team of
              Capyngen, equipped with the most up-to-date technologies and with
              the enthusiasm for innovation, combines artistry with the highest
              technical standards to produce bespoke strategies. Getting the
              goals, target audience, and idea of our clients, we assure a
              personalized modus Method.
            </p>

            <AnimatedButton
              text="Know About Us"
              onClick={() => alert("Button clicked!")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
