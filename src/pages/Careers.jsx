import React from "react";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import { assets } from "../assets/assets";
import { Monitor, Sparkles, Sprout } from "lucide-react";

const Careers = () => {
  const faqItems = [
    {
      question: "Value add",
      answer:
        "You’ll have a video call with the hiring manager to get to know you and see if you have potential to be a great addition to the team.",
    },
    {
      question: "What is the minimum deposit requirement?",
      answer:
        "PrimeForex Markets requires no minimum deposit, however, a minimum amount may be required by your preferred funding method. ",
    },
    {
      question: "Are there any fees associated with depositing funds?",
      answer: "No, PrimeForex Markets charges no fees for depositing funds.",
    },
  ];

  return (
    <section className="bg-black text-white pt-20 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="max-w-6xl text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Ready to
            <span className="italic text-blue-600"> Shape the Future </span> of
            Digital?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mt-4">
            Your Next Career Adventure Starts Here!
          </h3>
          <h3 className="text-3xl md:text-5xl font-bold mt-4">
            Join Team{" "}
            <span className="font-extrabold text-blue-600">Capyngen</span>
          </h3>
          <p className="mt-6 text-base md:text-lg text-gray-300 mx-auto">
            At <strong>Capyngen</strong>, we are not only constructing digital
            campaigns, but we are also creating worthwhile careers for the
            people. <br />
            We are a digital shape of things to come, a group of creative
            dissenters, and fans of personal growth who are convinced that you
            will not be the one with the greatest talent but the one with the
            greatest platform to showcase it. <br />
            It is not a mere job that will throw your way, but it is one of your
            ways to the stars. Besides being heard, your ideas will be up to
            their processing into strategies that actually change the market and
            have a positive impact on real business.
          </p>
        </div>

        {/* Image */}
        <div className="mt-14 relative flex justify-center">
          <img
            src={assets.careers}
            alt="Join Us"
            className="rounded-xl shadow-lg w-full max-w-7xl object-cover"
          />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mt-20 mb-10">
          Why Capyngen is Different
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Monitor className="w-7 h-7 text-blue-500" />
              <h4 className="text-lg font-semibold">Beyond the 9-to-5 Grind</h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We are the kind of people who think out of the box, and yet we do
              not stop being dreamers in the strictest sense of the word. We
              never get tired of taking on challenges and continuously evolving.
              Boring routines? No way.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sprout className="w-7 h-7 text-blue-500" />
              <h4 className="text-lg font-semibold">
                Growth That Actually Happens
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Among other things, your schedule can be quite flexible. On top of
              that, take the edge off by engaging in your favorite learning
              opportunities and get guided by leaders of the industry – the
              desire for your success is shared by both of us.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-7 h-7 text-blue-500" />
              <h4 className="text-lg font-semibold">
                Fuel for Your Creativity
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Not only the snack-stocked pantry that is the stuff of the legends
              is there for you, but the collaborative spaces are also there for
              you waiting for you to recharge your creativity with the most
              groundbreaking thoughts and achieve your dream workplace ambiance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
