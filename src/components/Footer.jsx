import { NavLink } from "react-router-dom";
import { assets, navItems } from "../assets/assets";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 234 567 890",
      href: "tel:+1234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@capyngen.com",
      href: "mailto:info@capyngen.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Business Street, Tech City, TC 12345",
    },
  ];

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={assets.capyngenLogo || assets.capyngenFavIcon}
                alt="Capyngen Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-slate-300 text-sm leading-relaxed">
                Transforming businesses through innovative IT solutions. We
                deliver cutting-edge technology that drives growth and
                efficiency for modern enterprises.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <contact.icon className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-slate-400 font-medium">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-slate-300">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              What We Offer
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h4>
            <div className="space-y-4">
              {navItems.slice(0, 1).map((item, idx) => (
                <div key={idx}>
                  {item.dropdown?.map((section, secIdx) => (
                    <div key={secIdx} className="mb-4">
                      {section.title && (
                        <h5 className="text-blue-400 font-semibold mb-3 text-sm">
                          {section.title}
                        </h5>
                      )}
                      <ul className="space-y-2">
                        {section.links.slice(0, 4).map((link, i) => (
                          <li key={i}>
                            <NavLink
                              to={link.href}
                              className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                            >
                              {link.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              Industries
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h4>
            <div className="space-y-4">
              {navItems.slice(1, 2).map((item, idx) => (
                <div key={idx}>
                  {item.dropdown?.map((section, secIdx) => (
                    <div key={secIdx} className="mb-4">
                      <ul className="space-y-2">
                        {section.links.map((link, i) => (
                          <li key={i}>
                            <NavLink
                              to={link.href}
                              className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                            >
                              {link.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              Company
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h4>
            <ul className="space-y-2">
              {navItems.slice(2).map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={item.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative">
              Stay Connected
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h4>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-slate-300 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-slate-300 text-sm mb-3">
                Follow us on social media
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-slate-300 hover:text-white transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative border-t border-slate-700/50 my-8">
          {/* Scroll to top button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={scrollToTop}
              className={`w-12 h-12 rounded-full border border-teal-400/50 bg-slate-800/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-teal-400 ${
                showScrollTop
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-teal-400" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-slate-400 text-sm">
            © {currentYear} Capyngen. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm">
            <NavLink
              to="/privacy-policy"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-service"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/sitemap"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              Sitemap
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Effect Section */}
      <div className="relative h-[50px] md:h-[100px]">
        {/* Capyngen watermark */}
        <div className="absolute top-0 -translate-y-1/2 inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-slate-800 text-7xl md:text-9xl lg:text-[12rem] font-bold md:tracking-wider select-none">
            capyngen
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
