"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Send, MapPin, Building2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollRevealEffect() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dropdownRef = useRef(null);

  const topics = [
    "Web Development",
    "App Development",
    "Custom AI Solution",
    "E-Commerce Solutions",
    "Blockchain Development",
    "DevOps Solutions",
    "Application Solutions",
    "CRM & Management Software",
    "UI/UX Design",
    "Website Design",
    "Branding & Identity Design",
    "Ecommerce Design",
    "CMS Design",
    "Digital Marketing",
    "Search Engine Optimization (SEO)",
    "Social Media Marketing (SMM)",
    "Pay-Per-Click Advertising (PPC)",
    "Artificial Intelligence",
    "Cybersecurity",
    "Network Solutions & Services",
    "Enterprise Solutions",
    "Data & Analytics",
    "Consulting",
    "Others",
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showResponse) {
      const timer = setTimeout(() => {
        setShowResponse(false);
        setResponseMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showResponse]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);
    setResponseMsg("");
    setShowResponse(false);

    try {
      const response = await fetch("https://api.capyngen.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      if (response.ok) {
        setResponseMsg("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          topic: "",
          message: "",
        });
      } else {
        setResponseMsg(`❌ Error: ${data.message || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setResponseMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setShowResponse(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 overflow-hidden bg-[#070e1d] border-t border-slate-800"
      aria-label="Contact Section"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1536px]">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-6xl mx-auto w-full">
          {/* Left side: Info Card */}
          <div className="flex-1 flex flex-col justify-between bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-8 sm:p-10 lg:p-12 shadow-2xl border border-blue-400/30">
            <div>
              <span className="block mb-3 text-xs font-bold tracking-widest text-cyan-200 uppercase">
                Get In Touch
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Let’s Talk About Your Project
              </h2>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-sans font-normal">
                Fill out the form and we’ll get back to you as soon as
                possible. We’d love to hear about your ideas and help bring
                them to life.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-blue-400/30 font-sans text-sm text-blue-100 space-y-2">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <p className="font-semibold text-white">Capyngen IT Solutions</p>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-300 shrink-0" />
                <p>Sector 49, Gurugram, Haryana 122018</p>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div className="flex-1 bg-white text-slate-900 p-8 sm:p-10 shadow-2xl border border-slate-200/90">
            <form onSubmit={handleSubmit} className="space-y-4.5 w-full" noValidate>
              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm font-sans"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm font-sans"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm font-sans"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Phone + Select Topic */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                <div>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm font-sans"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    Select Topic
                  </label>
                  <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-slate-800 cursor-pointer focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none flex justify-between items-center transition-all text-sm font-sans"
                  >
                    <span className="truncate text-sm text-slate-700">
                      {formData.topic || "Choose a topic"}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`ml-2 text-slate-500 transition-transform duration-200 ${
                        showDropdown ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute z-50 mt-1.5 w-full max-h-56 overflow-y-auto bg-white border border-slate-200 shadow-2xl divide-y divide-slate-100"
                      >
                        <div className="p-2 sticky top-0 bg-white">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-1.5 bg-slate-50 text-slate-900 border border-slate-200 focus:outline-none focus:border-blue-500 text-xs"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        {filteredTopics.length ? (
                          filteredTopics.map((topic, idx) => (
                            <div
                              key={idx}
                              className={`px-3.5 py-2 hover:bg-blue-50 text-xs cursor-pointer transition ${
                                formData.topic === topic
                                  ? "bg-blue-50/70 text-blue-600 font-semibold"
                                  : "text-slate-800"
                              }`}
                              onClick={() => {
                                setFormData({ ...formData, topic });
                                setSearchTerm("");
                                setShowDropdown(false);
                              }}
                            >
                              {topic}
                            </div>
                          ))
                        ) : (
                          <p className="text-center text-slate-400 text-xs py-3">
                            No matches found
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                  Message
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none resize-none transition-all text-sm font-sans"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm font-sans tracking-wide cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <Send size={15} />
              </button>

              <AnimatePresence>
                {showResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-3 py-2.5 px-4 text-center text-xs sm:text-sm font-semibold max-w-md mx-auto flex items-center justify-center gap-2 shadow-md ${
                      responseMsg.includes("✅")
                        ? "bg-emerald-600 text-white"
                        : "bg-rose-600 text-white"
                    }`}
                  >
                    {responseMsg.includes("✅") ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <AlertCircle size={16} />
                    )}
                    <span>{responseMsg.replace(/^✅|❌/g, "").trim()}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
