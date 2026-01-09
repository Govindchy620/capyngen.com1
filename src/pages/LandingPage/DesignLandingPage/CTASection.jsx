import React from "react";

const CTASection = () => {
  return (
    <section className="w-full bg-[#143a59]">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* LEFT CONTENT */}
        <div className="text-white max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let’s discuss your project
          </h2>
          <p className="text-lg text-white/80">
            Share your idea, timeline and budget—we’ll respond with next steps.
          </p>
        </div>

        {/* CTA BUTTON */}
        <button className="bg-[#ffb733] hover:bg-[#ffc04d] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-[0_0_30px_rgba(255,183,51,0.6)] transition">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default CTASection;
