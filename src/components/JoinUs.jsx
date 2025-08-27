import React from "react";
import { assets } from "../assets/assets";
import { Monitor, Sprout, Sparkles } from "lucide-react"; // using lucide icons

const JoinUs = () => {
  return (
    <section className="bg-black text-white py-16 pt-30 text-center">
      <div className="max-w-[90%] mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-light">
            Love <span className="italic">delighting</span> customers?
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">
            We’d love to have you
          </h3>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Join a diverse team that’s customer-first—for real. At Help Scout,
            you can craft exceptional customer experiences from wherever you
            are.
          </p>
        </div>

        {/* Image section */}
        <div className="mt-12 relative flex justify-center">
          <img src={assets.joinus} alt="Join Us" className="rounded-lg" />
        </div>

        {/* Cards Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between gap-15 mx-auto text-center">
          {/* Card 1 */}
          <div className="w-1/3">
            <div className="flex items-center  justify-center gap-3 mb-3">
              <Monitor className="w-6 h-6 text-white" />
              <h4 className="text-lg font-bold">Do your best work, remotely</h4>
            </div>
            <p className="text-white leading-relaxed">
              We’ve been remote-first for over a decade and have teammates in
              more than 115 cities worldwide. We go to great lengths to set you
              up for success from day one, and work hard to keep you connected.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-1/3">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sprout className="w-6 h-6 text-white" />
              <h4 className="text-lg font-bold">Grow with purpose</h4>
            </div>
            <p className="text-white leading-relaxed">
              We don’t subscribe to the hypergrowth playbook. We believe in
              sustainable growth which means our people and values are
              paramount.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-1/3">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-white" />
              <h4 className="text-lg font-bold">Build something exceptional</h4>
            </div>
            <p className="text-white leading-relaxed">
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
