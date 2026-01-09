import React from "react";

const Process = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Web Development Process
          </h2>
          <p className="text-lg text-gray-800">
            A simple, transparent flow—from strategy to launch to ongoing
            improvements.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="space-y-20 max-w-3xl mx-auto">
            {/* STEP 01 */}
            <div className="flex gap-16 relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border font-bold text-lg">
                  01
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Discovery & planning
                </h3>
                <p className="mb-4 max-w-xl">
                  Clarify goals, users, scope and success metrics. Align on
                  milestones and risks.
                </p>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>Requirements workshop</li>
                  <li>Architecture outline</li>
                  <li>Delivery plan</li>
                </ul>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="flex gap-16 relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border font-bold text-lg">
                  02
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  UI/UX & prototyping
                </h3>
                <p className="mb-4 max-w-xl">
                  Wireframes to clickable prototypes—focused on usability and
                  conversion.
                </p>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>User flows</li>
                  <li>Design system</li>
                  <li>Responsive layouts</li>
                </ul>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="flex gap-16 relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border font-bold text-lg">
                  03
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Development sprints
                </h3>
                <p className="mb-4 max-w-xl">
                  Iterative builds with weekly demos, code reviews and automated
                  tests.
                </p>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>Agile sprints</li>
                  <li>Feature flags</li>
                  <li>CI/CD pipeline</li>
                </ul>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="flex gap-16 relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border font-bold text-lg">
                  04
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Launch & iteration
                </h3>
                <p className="mb-4 max-w-xl">
                  Production launch, monitoring and continuous improvements
                  based on real data.
                </p>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>Production deployment</li>
                  <li>Monitoring & analytics</li>
                  <li>Ongoing enhancements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
