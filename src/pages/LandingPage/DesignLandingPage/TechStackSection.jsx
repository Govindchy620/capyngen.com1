import React from "react";

const TechStackSection = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center max-w-6xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Web Application Development Tech Stack
          </h2>
          <p className="text-lg text-gray-800">
            We pick the right tools for your product, team and scalability
            needs.
          </p>
        </div>

        {/* STACK GRID */}
        <div className="space-y-8">
          {/* FRONTEND */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="font-bold text-lg uppercase px-8 py-3 rounded">
              Frontend
            </div>
            <div className="ml-20 md:col-span-4 flex flex-wrap gap-x-12 gap-y-2 text-lg font-medium">
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                React
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Next.js
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Angular
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Vue
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Svelte
              </span>
            </div>
          </div>

          {/* BACKEND */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-white font-bold text-lg uppercase px-8 py-3 rounded">
              Backend
            </div>
            <div className="ml-20 md:col-span-4 flex flex-wrap gap-x-12 gap-y-6 text-lg font-medium">
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Node.js
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                PHP
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Laravel
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Python
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Ruby
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Go
              </span>
            </div>
          </div>

          {/* DATABASES */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="font-bold text-lg uppercase px-8 py-3 rounded">
              Databases
            </div>
            <div className="ml-20 md:col-span-4 flex flex-wrap gap-x-12 gap-y-6 text-lg font-medium">
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                PostgreSQL
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                MySQL
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                MongoDB
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Redis
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Elastic
              </span>
            </div>
          </div>

          {/* CLOUD */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-white font-bold text-lg uppercase px-8 py-3 rounded">
              Cloud
            </div>
            <div className="ml-20 md:col-span-4 flex flex-wrap gap-x-12 gap-y-6 text-lg font-medium">
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                AWS
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                GCP
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Azure
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Docker
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Kubernetes
              </span>
            </div>
          </div>

          {/* TESTING */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="font-bold text-lg uppercase px-8 py-3 rounded">
              Testing
            </div>
            <div className="ml-20 md:col-span-4 flex flex-wrap gap-x-12 gap-y-6 text-lg font-medium">
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Cypress
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Playwright
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Jest
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                PHPUnit
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Selenium
              </span>
            </div>
          </div>

          {/* ANALYTICS */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-white font-bold text-lg uppercase px-8 py-3 rounded">
              Analytics
            </div>
            <div className="ml-20 md:col-span-4 flex flex-wrap gap-x-12 gap-y-6 text-lg font-medium">
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                GA4
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Mixpanel
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Amplitude
              </span>
              <span className="bg-gray-100 px-3 py-2 border border-gray-200 rounded-full">
                Segment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
