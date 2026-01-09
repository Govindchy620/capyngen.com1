import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center font-bold text-white">
              g
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Gtm<span className="font-light text-gray-600">Flex</span>
            </span>
          </div>

          {/* CTA */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-medium shadow-md">
            Talk to us
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
