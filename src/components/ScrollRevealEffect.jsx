import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealEffect() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const localTriggers = useRef([]);

  // Form state
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
    topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hide dropdown on outside click
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
      const response = await fetch(
        "https://capyngen-backendv2-1.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

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

  useEffect(() => {
    const setupAnimations = () => {
      const sections = sectionsRef.current;
      const container = containerRef.current;
      if (!container || !sections.length) return;

      localTriggers.current.forEach((trigger) => trigger.kill());
      localTriggers.current = [];

      const pinTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${sections.length * window.innerHeight}`,
        pin: true,
        scrub: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });
      localTriggers.current.push(pinTrigger);

      sections.forEach((section, i) => {
        if (i === sections.length - 1) return;
        const trigger = gsap.to(section, {
          rotate: 90,
          transformOrigin: "0 0",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => `${i * window.innerHeight} top`,
            end: () => `${(i + 1) * window.innerHeight} top`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).scrollTrigger;
        localTriggers.current.push(trigger);
      });

      ScrollTrigger.refresh();
    };

    const handleReady = () => requestAnimationFrame(setupAnimations);
    if (document.readyState === "complete") handleReady();
    else window.addEventListener("load", handleReady);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      localTriggers.current.forEach((trigger) => trigger.kill());
      localTriggers.current = [];
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleReady);
      ScrollTrigger.refresh();
    };
  }, []);

  const sections = [
    { bg: "bg-lime-400", text: "Let's Talk" },
    { bg: "bg-yellow-400", text: "About The" },
    { bg: "bg-cyan-400", text: "Project" },
    {
      bg: "transparent",
      text: "Form",
      style: {
        backgroundImage: `url(${assets.letsTalk})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className={`absolute inset-0 flex items-center justify-center ${section.bg}`}
          style={{
            zIndex: sections.length - i,
            ...(section.style || {}),
          }}
        >
          {section.text === "Form" ? (
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 px-4 sm:px-6 lg:px-10 text-white max-w-7xl mx-auto w-full max-h-[90vh]">
              {/* Left side */}
              <div className="hidden flex-1 md:flex flex-col justify-center bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-lg">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Let’s <span className="text-cyan-400">Talk</span> About Your{" "}
                  <span className="text-cyan-400">Project</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-300">
                  Fill out the form and we’ll get back to you as soon as
                  possible. We’d love to hear about your ideas and help bring
                  them to life.
                </p>
              </div>

              {/* Right side (Form) */}
              <div className="flex-1 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg overflow-auto max-h-[90vh]">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 w-full"
                  noValidate
                >
                  {/* Names */}
                  <div className="flex gap-6">
                    <div className="w-1/2">
                      <label className="block mb-2 text-sm font-medium">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your first name"
                        className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block mb-2 text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your last name"
                        className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  {/* Phone + Select Topic */}
                  <div className="flex gap-6 relative">
                    {/* Contact */}
                    <div className="w-1/2">
                      <label className="block mb-2 text-sm font-medium">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Custom Searchable Dropdown */}
                    <div className="w-1/2 relative" ref={dropdownRef}>
                      <label className="block mb-2 text-sm font-medium">
                        Select Topic
                      </label>
                      <div
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white cursor-pointer focus:ring-2 focus:ring-cyan-400 outline-none flex justify-between items-center"
                      >
                        <span className="truncate">
                          {formData.topic || "Choose a topic"}
                        </span>
                        <span
                          className={`ml-2 transition-transform ${
                            showDropdown ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </div>

                      {showDropdown && (
                        <div className="absolute z-50 mt-2 w-full max-h-48 overflow-y-auto bg-black/80 backdrop-blur-lg border border-white/30 rounded-lg shadow-xl">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-2 bg-transparent text-white border-b border-white/20 focus:outline-none placeholder-gray-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          {filteredTopics.length ? (
                            filteredTopics.map((topic, idx) => (
                              <div
                                key={idx}
                                className="px-3 py-2 hover:bg-cyan-400/20 text-white text-sm cursor-pointer transition"
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
                            <p className="text-center text-gray-400 text-sm py-2">
                              No matches found
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      rows="3"
                      required
                      placeholder="Write your message..."
                      className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-300 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {showResponse && (
                    <p
                      className={`mt-4 rounded-lg py-2 px-4 text-center text-sm font-semibold max-w-md mx-auto transition-transform duration-300 ${
                        responseMsg.includes("✅")
                          ? "bg-green-600/80 text-green-100 shadow-lg animate-popIn"
                          : "bg-red-600/80 text-red-100 shadow-lg animate-popIn"
                      }`}
                    >
                      {responseMsg.replace(/^✅|❌/g, "")}
                    </p>
                  )}
                </form>
              </div>
            </div>
          ) : (
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-black">
              {section.text}
            </h1>
          )}
        </div>
      ))}

      <style>{`
        @keyframes popIn {
          0% {transform: scale(0.8); opacity: 0;}
          100% {transform: scale(1); opacity: 1;}
        }
        .animate-popIn {
          animation: popIn 0.35s ease forwards;
        }
      `}</style>
    </div>
  );
}
