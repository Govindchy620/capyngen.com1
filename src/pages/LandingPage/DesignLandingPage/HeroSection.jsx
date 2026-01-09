import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="text-white">
          <p className="uppercase tracking-widest text-sm font-semibold opacity-90 mb-4">
            Web Application
          </p>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
            Development Services
          </h1>

          <p className="text-lg opacity-90 max-w-xl mb-10">
            Build fast, modern and secure web applications with a proven team.
            From discovery to deployment—clean code, scalable architecture and
            performance that holds up in production.
          </p>

          {/* FEATURES */}
          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3">
              <span className="text-xl">✔</span>
              <span className="text-lg">Full-cycle product engineering</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✔</span>
              <span className="text-lg">
                Dedicated teams or fixed-scope delivery
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✔</span>
              <span className="text-lg">
                Security-first, test-driven approach
              </span>
            </li>
          </ul>

          {/* BADGES */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-white/10 px-5 py-4 rounded-xl backdrop-blur">
              <span className="text-yellow-400 text-lg">★</span>
              <div>
                <p className="font-semibold">Top Rated</p>
                <p className="text-sm opacity-80">4.8/5 average</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 px-5 py-4 rounded-xl backdrop-blur">
              <span className="text-yellow-400 text-lg">🏆</span>
              <div>
                <p className="font-semibold">Trusted Vendor</p>
                <p className="text-sm opacity-80">NDA-ready</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 px-5 py-4 rounded-xl backdrop-blur">
              <span className="text-yellow-400 text-lg">⚡</span>
              <div>
                <p className="font-semibold">Fast Delivery</p>
                <p className="text-sm opacity-80">Weekly shipping</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-xl shadow-2xl p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="+91 9XXXX XXXXX"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What do you need?
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Select one</option>
                  <option>Web App Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>Dedicated Team</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project details
              </label>
              <textarea
                rows="4"
                placeholder="What are you building? Goals, features, timeline..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-4 rounded-full text-lg shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
