import { useEffect, useState } from "react";
import { brandAssets, navItems } from "../assets/navData";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import rightimg from "../assets/Group35633.png";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeOfferTab, setActiveOfferTab] = useState(0);

  // ✅ Must be declared at top level
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Handles same-page scroll and normal navigation
  const handleSameLinkClick = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  // Navbar scroll visibility logic
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const shouldBeDark = scrolled || isHovered;
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleDropdownClick = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-white border-b border-gray-100 shadow-xs`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 gap-4 sm:gap-6">
            {/* Responsive Logo Container */}
            <NavLink
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleSameLinkClick("/");
              }}
              className="flex-shrink-0 z-50 flex items-center transition-transform hover:scale-105"
            >
              <img
                src={brandAssets.capyngenLogo}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-200"
                alt="Capyngen Logo"
              />
            </NavLink>

            {/* Desktop Menu */}
            <div
              className="hidden lg:flex items-center gap-7 xl:gap-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {navItems
                .filter((item) => item.href !== "/contact-us" && item.label !== "CONTACT US")
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="relative py-2"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown ? (
                      <NavLink
                        to={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSameLinkClick(item.href);
                        }}
                        className={`text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                          activeDropdown === idx
                            ? "text-blue-600 font-semibold"
                            : "text-slate-700 hover:text-blue-600"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeDropdown === idx ? "rotate-180 text-blue-600" : "text-slate-400"
                          }`}
                        />
                      </NavLink>
                    ) : (
                      <NavLink
                        to={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSameLinkClick(item.href);
                        }}
                        className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </NavLink>
                    )}

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 right-0 transition-all duration-200 pt-2 ${
                        activeDropdown === idx
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <div className="fixed inset-x-0 top-16 lg:top-20 bg-[#0B1120]/98 backdrop-blur-xl border-b border-slate-800 shadow-2xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                          {item.label === "WHAT WE OFFER" ? (
                            <div className="flex flex-col lg:flex-row items-stretch">
                              {/* Left Tabs Column */}
                              <div className="w-full lg:w-64 xl:w-72 flex-shrink-0 lg:pr-8 lg:border-r border-slate-800/80">
                                <div className="space-y-1">
                                  {item.dropdown.map((section, secIdx) => (
                                    <button
                                      key={secIdx}
                                      type="button"
                                      onMouseEnter={() => setActiveOfferTab(secIdx)}
                                      onClick={() => setActiveOfferTab(secIdx)}
                                      className={`w-full flex items-center justify-between py-3.5 px-3 text-left border-b border-slate-800/70 transition-all ${
                                        activeOfferTab === secIdx
                                          ? "text-white font-bold bg-white/5"
                                          : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                                      }`}
                                    >
                                      <span className="text-sm font-semibold tracking-wide">
                                        {section.title}
                                      </span>
                                      <ChevronRight
                                        size={16}
                                        className={`transition-transform duration-200 ${
                                          activeOfferTab === secIdx
                                            ? "text-white translate-x-1"
                                            : "text-slate-500"
                                        }`}
                                      />
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Right Content Area: Subcategory title + 2 columns of links */}
                              {(() => {
                                const currentSection =
                                  item.dropdown[activeOfferTab] || item.dropdown[0];
                                const links = currentSection.links || [];
                                const col1 = links.filter((_, i) => i % 2 === 0);
                                const col2 = links.filter((_, i) => i % 2 !== 0);

                                return (
                                  <div className="flex-1 lg:pl-10 xl:pl-14 min-w-0 flex items-start justify-between">
                                    <div className="flex-1 max-w-2xl">
                                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                                        {currentSection.title}
                                      </h3>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                                        <div className="space-y-0">
                                          {col1.map((link, lIdx) => (
                                            <NavLink
                                              key={lIdx}
                                              to={link.href}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                handleSameLinkClick(link.href);
                                                setActiveDropdown(null);
                                              }}
                                              className="block py-3 text-sm text-slate-300 hover:text-white border-b border-slate-800/70 transition-colors duration-150 hover:translate-x-1"
                                            >
                                              {link.label}
                                            </NavLink>
                                          ))}
                                        </div>
                                        <div className="space-y-0">
                                          {col2.map((link, lIdx) => (
                                            <NavLink
                                              key={lIdx}
                                              to={link.href}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                handleSameLinkClick(link.href);
                                                setActiveDropdown(null);
                                              }}
                                              className="block py-3 text-sm text-slate-300 hover:text-white border-b border-slate-800/70 transition-colors duration-150 hover:translate-x-1"
                                            >
                                              {link.label}
                                            </NavLink>
                                          ))}
                                        </div>
                                      </div>
                                    </div>

                                    {/* Right Geometric Line-art Graphic */}
                                    <div className="hidden xl:flex items-center justify-center pl-8 relative w-48 h-48 opacity-30 select-none pointer-events-none self-center">
                                      <div className="absolute w-28 h-28 border border-slate-600 rounded-none translate-x-4 -translate-y-4" />
                                      <div className="absolute w-28 h-28 border border-slate-600 rounded-none translate-x-2 -translate-y-2" />
                                      <div className="absolute w-28 h-28 border border-slate-600 rounded-none" />
                                    </div>
                                  </div>
                                );
                              })()}
                            </div>
                          ) : item.label === "INDUSTRIES" ? (
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
                                            onClick={(e) => {
                                              e.preventDefault();
                                              handleSameLinkClick(link.href);
                                              setActiveDropdown(null);
                                            }}
                                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 block py-1 hover:translate-x-1"
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
                                    <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                                      {section.title}
                                    </h3>
                                  )}
                                  <ul className="space-y-2">
                                    {section.links.map((link, linkIdx) => (
                                      <li key={linkIdx}>
                                        <NavLink
                                          to={link.href}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            handleSameLinkClick(link.href);
                                            setActiveDropdown(null);
                                          }}
                                          className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 block py-1 hover:translate-x-1"
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

            {/* Right side (Contact Us + Right Image + Mobile Toggle) */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <NavLink
                to="/contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  handleSameLinkClick("/contact-us");
                }}
                className="hidden md:inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-4 sm:px-5 py-2 text-sm font-semibold text-white transition-colors shadow-xs whitespace-nowrap"
              >
                Contact Us
              </NavLink>

              {/* Decorative Graphic Icon */}
              <img
                src={rightimg}
                alt="Decorative Graphic"
                className="h-8 md:h-10 w-auto object-contain select-none"
              />

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-slate-800" />
                ) : (
                  <Menu size={24} className="text-slate-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="bg-white h-full overflow-y-auto border-r border-slate-200">
            <div className="px-4 py-6 space-y-4 mt-16">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  {item.dropdown ? (
                    <div>
                      <NavLink
                        to={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownClick(idx);
                        }}
                        className="w-full flex items-center justify-between py-3 text-left text-slate-800 hover:text-blue-600 transition-colors"
                      >
                        <span className="font-semibold">{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform text-slate-600 ${
                            activeDropdown === idx ? "rotate-180" : ""
                          }`}
                        />
                      </NavLink>

                      {activeDropdown === idx && (
                        <div className="mt-2 pl-4 space-y-4">
                          {item.dropdown.map((section, secIdx) => (
                            <div key={secIdx}>
                              {section.title && (
                                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
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
                                      className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors block py-1"
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
                  ) : item.href === "/contact-us" ? (
                    <NavLink
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSameLinkClick(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="mt-4 block text-center px-6 py-3 bg-[#0055FE] hover:bg-[#0046D5] text-white font-bold rounded-full shadow-md transition-all text-base"
                    >
                      Contact Us
                    </NavLink>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSameLinkClick(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="block py-3 text-slate-800 hover:text-blue-600 font-semibold transition-colors"
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
