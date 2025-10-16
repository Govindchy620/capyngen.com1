import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealEffect() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const localTriggers = useRef([]);

  // Form state and handlers
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [showResponse, setShowResponse] = useState(false);

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
    if (loading) return; // prevent duplicate submits
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

      if (!container || !sections.length) {
        console.warn("Refs not ready");
        return;
      }

      // Kill any existing local triggers before re-creating
      localTriggers.current.forEach((trigger) => trigger.kill());
      localTriggers.current = [];

      // Pin container
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

      // Animate sections sequentially
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

      // Refresh ScrollTrigger to fix early start/blank space issues
      ScrollTrigger.refresh();
    };

    // Run setup once layout & assets are ready
    const handleReady = () => {
      requestAnimationFrame(setupAnimations);
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
    }

    // Refresh on resize for accurate height calculations
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup all triggers from this component only
      localTriggers.current.forEach((trigger) => trigger.kill());
      localTriggers.current = [];

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleReady);

      // Refresh global ScrollTriggers in case others exist
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
          {/* Gradient Overlays */}
          {section.bg && (
            <>
              <div
                className="absolute -top-20 left-0 w-full h-40 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--tw-bg-opacity,1) currentColor, transparent)",
                }}
              ></div>
              <div
                className="absolute -bottom-20 left-0 w-full h-40 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, var(--tw-bg-opacity,1) currentColor, transparent)",
                }}
              ></div>
            </>
          )}

          {section.text === "Form" ? (
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 px-4 sm:px-6 lg:px-10 text-white max-w-7xl mx-auto w-full max-h-[90vh]">
              {/* Left Side (Intro) */}
              <div className="hidden flex-1 min-w-[300px] md:flex flex-col justify-center bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-lg">
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

              {/* Right Side (Form) */}
              <div className="flex-1 min-w-[300px] bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg overflow-auto max-h-[90vh]">
                <form
                  className="space-y-4 w-full"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* First and Last Name */}
                  <div className="flex items-center justify-between gap-6">
                    <div className="w-1/2">
                      <label className="block mb-2 text-sm font-medium">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
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
                        placeholder="Enter your last name"
                        className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
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
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      placeholder="Write your message..."
                      rows="3"
                      className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-300 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {/* Responsive and animated message */}
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
