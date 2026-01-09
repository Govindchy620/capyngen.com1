import React from "react";
import { Check, Shield, AlignCenter } from "lucide-react";

const CleanCodeSection = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Deliver Clean Code, Error-Free and Secure Web Applications
          </h2>
          <p className="text-lg text-gray-500">
            Engineering practices that reduce risk, improve velocity and keep
            your product maintainable.
          </p>
        </div>

        {/* ICON STRIP */}
        <div className="flex justify-center gap-12 mb-10">
          <div className="flex flex-col items-center gap-4 ">
            <div className=" p-4 rounded-full shadow-lg border border-gray-100">
              <Check size={32} className="text-black" />
            </div>
            <span className="text-lg font-semibold text-gray-700">Quality</span>
          </div>

          <div className="flex flex-col items-center gap-4 ">
            <div className=" p-4 rounded-full shadow-lg border border-gray-100">
              <Shield size={32} className="text-black" />
            </div>
            <span className="text-lg font-semibold text-gray-700">
              Security
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 ">
            <div className=" p-4 rounded-full shadow-lg border border-gray-100">
              <AlignCenter size={32} className="text-black" />
            </div>
            <span className="text-lg font-semibold text-gray-700">Clarity</span>
          </div>
        </div>

        {/* THREE COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* COLUMN 1 */}
          <div className="border border-gray-100 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-3">Clean architecture</h3>
            <p className="text-gray-700 min-h-20 leading-relaxed mb-3">
              Layered structure, reusable components and consistent patterns so
              your team can scale development.
            </p>

            <p className="font-medium text-gray-700 mb-3">Maintainability</p>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-100" />
          </div>

          {/* COLUMN 2 */}
          <div className="border border-gray-100 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-3">Automated testing</h3>
            <p className="text-gray-700 min-h-20 leading-relaxed mb-3">
              Unit, integration, automated and end-to-end coverage to prevent
              regressions and ship confidently.
            </p>

            <p className="font-medium text-gray-700 mb-3">Reliability</p>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-100" />
          </div>

          {/* COLUMN 3 */}
          <div className="border border-gray-100 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-3">
              Performance & security
            </h3>
            <p className="text-gray-700 min-h-20 leading-relaxed mb-3">
              Optimized queries, caching, secure auth flows and hardened
              configurations aligned to OWASP.
            </p>

            <p className="font-medium text-gray-700 mb-3">
              Production readiness
            </p>
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanCodeSection;
