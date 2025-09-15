import React from "react";
import { assets } from "../assets/assets";
import { Monitor, Sprout, Sparkles } from "lucide-react";

const JoinUs = () => {
  return (
    <section className="bg-black text-white pt-20 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-light leading-tight">
            Love <span className="italic text-red-500">delighting</span>{" "}
            customers?
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold mt-4">
            We’d love to have you
          </h3>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl mx-auto">
            Join a diverse team that’s customer-first—for real. At Help Scout,
            you can craft exceptional customer experiences from wherever you
            are.
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

        {/* Cards Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Monitor className="w-7 h-7 text-red-500" />
              <h4 className="text-lg font-semibold">
                Do your best work, remotely
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We’ve been remote-first for over a decade and have teammates in
              more than 115 cities worldwide. We go to great lengths to set you
              up for success from day one, and work hard to keep you connected.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sprout className="w-7 h-7 text-red-500" />
              <h4 className="text-lg font-semibold">Grow with purpose</h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We don’t subscribe to the hypergrowth playbook. We believe in
              sustainable growth which means our people and values are
              paramount.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-7 h-7 text-red-500" />
              <h4 className="text-lg font-semibold">
                Build something exceptional
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We are motivated first and foremost by helping our customers
              succeed. Every team at Help Scout is laser-focused on providing
              delight at every touchpoint and building an exceptional customer
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
