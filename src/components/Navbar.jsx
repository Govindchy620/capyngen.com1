import { useEffect, useState, useRef } from "react";
import { assets, navItems } from "../assets/assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Scroll to top if same link, navigate otherwise
  const handleSameLinkClick = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  // ✅ Navbar scroll hide/show
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

  // ✅ Disable background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // ✅ Keyboard accessibility: Escape + focus loss closes dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsHovered(false);
      }
    };

    const handleFocusOut = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.relatedTarget)
      ) {
        setActiveDropdown(null);
        setIsHovered(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusout", handleFocusOut);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const shouldBeDark = scrolled || isHovered;
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // ✅ Keyboard toggle for dropdown (Enter / Down Arrow)
  const handleDropdownKey = (e, idx) => {
    if (e.key === "Enter" || e.key === "ArrowDown" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown(activeDropdown === idx ? null : idx);
      setIsHovered(true);
    }
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
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleSameLinkClick("/");
              }}
              className="flex-shrink-0 z-50 transition-transform hover:scale-105"
            >
              <img
                src={assets.capyngenLogo}
                className="w-26 md:w-36"
                alt="Capyngen Logo"
              />
            </NavLink>

            {/* Desktop Menu */}
            <div
              className="hidden lg:flex items-center space-x-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === idx ? null : idx)
                      }
                      onKeyDown={(e) => handleDropdownKey(e, idx)}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === idx}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 focus:outline-none ${
                        shouldBeDark
                          ? "text-slate-100 hover:text-white hover:bg-slate-800/60 focus:bg-slate-800/60"
                          : "text-white hover:text-slate-200 hover:bg-white/10 focus:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          activeDropdown === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSameLinkClick(item.href);
                      }}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none ${
                        shouldBeDark
                          ? "text-slate-100 hover:text-white hover:bg-slate-800/60 focus:bg-slate-800/60"
                          : "text-white hover:text-slate-200 hover:bg-white/10 focus:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div
                      ref={dropdownRef}
                      role="menu"
                      aria-label={`${item.label} menu`}
                      className={`absolute top-full left-0 right-0 transition-all duration-200 pt-2 ${
                        activeDropdown === idx
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
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
                                            tabIndex={0}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              handleSameLinkClick(link.href);
                                              setActiveDropdown(null);
                                            }}
                                            onKeyDown={(e) => {
                                              if (
                                                e.key === "Enter" ||
                                                e.key === " "
                                              ) {
                                                e.preventDefault();
                                                handleSameLinkClick(link.href);
                                                setActiveDropdown(null);
                                              }
                                            }}
                                            className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-200 block py-1 hover:translate-x-1 focus:text-blue-400"
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
                                          tabIndex={0}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            handleSameLinkClick(link.href);
                                            setActiveDropdown(null);
                                          }}
                                          onKeyDown={(e) => {
                                            if (
                                              e.key === "Enter" ||
                                              e.key === " "
                                            ) {
                                              e.preventDefault();
                                              handleSameLinkClick(link.href);
                                              setActiveDropdown(null);
                                            }
                                          }}
                                          className="text-sm text-slate-300 hover:text-white transition-colors duration-200 block py-1 hover:translate-x-1 focus:text-white"
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-slate-900 lg:hidden"
          >
            <div className="bg-slate-900 h-full overflow-y-auto">
              <div className="px-4 py-6 space-y-4 mt-16">
                {navItems.map((item, idx) => (
                  <div key={idx}>
                    {item.dropdown ? (
                      <div>
                        <NavLink
                          to={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(
                              activeDropdown === idx ? null : idx
                            );
                          }}
                          className="w-full flex items-center justify-between py-3 text-left text-slate-100 hover:text-white transition-colors"
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              activeDropdown === idx ? "rotate-180" : ""
                            }`}
                          />
                        </NavLink>

                        {activeDropdown === idx && (
                          <div className=" mt-2 pl-4 space-y-4">
                            <div className="max-h-[60vh] overflow-y-auto pr-2 lg:max-h-none lg:overflow-y-visible">
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
                                          onClick={(e) => {
                                            e.preventDefault();
                                            handleSameLinkClick(link.href);
                                            setMobileMenuOpen(false);
                                          }}
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
                          </div>
                        )}
                      </div>
                    ) : (
                      <NavLink
                        to={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSameLinkClick(item.href);
                          setMobileMenuOpen(false);
                        }}
                        className="block py-3 text-slate-100 hover:text-white font-medium transition-colors"
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
