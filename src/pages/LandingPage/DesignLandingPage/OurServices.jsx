import React from "react";

const OurServices = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our Web Application Development Services
          </h2>
          <p className="text-lg text-gray-500">
            Choose a delivery model and stack—our team builds reliable web apps
            that scale.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ITEM */}
          <div className="p-5 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">▭</span>
              <h3 className="text-xl font-semibold text-[#0f4c4c]">
                Custom Web Applications
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Product discovery & architecture
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Role-based dashboards
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Payments, subscriptions & billing
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Analytics and reporting
              </li>
            </ul>
          </div>

          {/* ITEM */}
          <div className="p-5 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">◔</span>
              <h3 className="text-xl font-semibold text-[#0f4c4c]">
                Website Care & Redesign
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                UI/UX refresh with design system
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Performance & Core Web Vitals
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Accessibility improvements
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Conversion-focused rebuild
              </li>
            </ul>
          </div>

          {/* ITEM */}
          <div className="p-5 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✚</span>
              <h3 className="text-xl font-semibold text-[#0f4c4c]">
                API Development
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                REST & GraphQL APIs
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Third-party integrations
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Webhooks and event pipelines
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Rate limiting & auth
              </li>
            </ul>
          </div>

          {/* ITEM */}
          <div className="p-5 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">⬡</span>
              <h3 className="text-xl font-semibold text-[#0f4c4c]">
                Cloud & DevOps
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                CI/CD pipelines
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Docker & containers
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                AWS / GCP / Azure hosting
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Monitoring & logging
              </li>
            </ul>
          </div>

          {/* ITEM */}
          <div className="p-5 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">≡</span>
              <h3 className="text-xl font-semibold text-[#0f4c4c]">
                Admin Panels & CRM
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Role/permission systems
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Internal tooling
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Workflow automations
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Audit trails
              </li>
            </ul>
          </div>

          {/* ITEM */}
          <div className="p-5 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🛡</span>
              <h3 className="text-xl font-semibold text-[#0f4c4c]">
                Maintenance & Support
              </h3>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                SLA-based support
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Bug fixes & optimization
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Feature enhancements
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✔</span>
                Security updates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
