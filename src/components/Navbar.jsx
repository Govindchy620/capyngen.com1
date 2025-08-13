"use client";

import { useEffect, useState } from "react";
import { assets, navItems } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const shouldBeDark = scrolled || isHovered;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          shouldBeDark
            ? "bg-slate-900/95 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <NavLink
              to="/"
              className="flex-shrink-0 z-50 transition-transform hover:scale-105"
            >
              <img
                src={shouldBeDark ? assets.fpmLogoDark : assets.fpmLogo}
                className="h-8 lg:h-10 w-auto"
                alt="logo"
              />
            </NavLink>

            <div
              className="hidden lg:flex items-center space-x-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {navItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  {item.dropdown ? (
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                        shouldBeDark
                          ? "text-slate-100 hover:text-white hover:bg-slate-800/60"
                          : "text-white hover:text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform group-hover:rotate-180"
                      />
                    </button>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        shouldBeDark
                          ? "text-slate-100 hover:text-white hover:bg-slate-800/60"
                          : "text-white hover:text-slate-200 hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                      <div className="fixed inset-x-0 top-16 lg:top-20 bg-slate-900/98 backdrop-blur-lg border-b border-slate-700/30 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                          {item.label === "INDUSTRIES" ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                              {(() => {
                                const links = item.dropdown[0].links;
                                const chunkSize = Math.ceil(links.length / 3);
                                const chunks = Array.from(
                                  { length: 3 },
                                  (_, i) =>
                                    links.slice(
                                      i * chunkSize,
                                      i * chunkSize + chunkSize
                                    )
                                );
                                return chunks.map((column, colIdx) => (
                                  <div key={colIdx} className="space-y-2">
                                    <ul className="space-y-2">
                                      {column.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                          <NavLink
                                            to={link.href}
                                            className="text-sm text-slate-300 hover:text-white transition-colors duration-200 block py-1 hover:translate-x-1"
                                          >
                                            {link.label}
                                          </NavLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ));
                              })()}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                              {item.dropdown.map((section, secIdx) => (
                                <div key={secIdx} className="space-y-4">
                                  {section.title && (
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                      {section.title}
                                    </h3>
                                  )}
                                  <ul className="space-y-2">
                                    {section.links.map((link, linkIdx) => (
                                      <li key={linkIdx}>
                                        <NavLink
                                          to={link.href}
                                          className="text-sm text-slate-300 hover:text-white transition-colors duration-200 block py-1 hover:translate-x-1"
                                        >
                                          {link.label}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                shouldBeDark ? "hover:bg-slate-800/60" : "hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X
                  size={24}
                  className={shouldBeDark ? "text-slate-100" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={shouldBeDark ? "text-slate-100" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="bg-slate-900 h-full overflow-y-auto">
            <div className="px-4 py-6 space-y-4 mt-16">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(idx)}
                        className="w-full flex items-center justify-between py-3 text-left text-slate-100 hover:text-white transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            activeDropdown === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === idx && (
                        <div className="mt-2 pl-4 space-y-4">
                          {item.dropdown.map((section, secIdx) => (
                            <div key={secIdx}>
                              {section.title && (
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                  {section.title}
                                </h4>
                              )}
                              <ul className="space-y-2 mb-4">
                                {section.links.map((link, linkIdx) => (
                                  <li key={linkIdx}>
                                    <NavLink
                                      to={link.href}
                                      onClick={toggleMobileMenu}
                                      className="text-sm text-slate-300 hover:text-white transition-colors block py-1"
                                    >
                                      {link.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={toggleMobileMenu}
                      className="block py-3 text-slate-100 hover:text-white font-medium transition-colors"
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
