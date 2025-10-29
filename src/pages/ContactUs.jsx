import { Mail, MapPin } from "lucide-react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label className="flex flex-col gap-2 group">
      <span
        className={`text-sm transition-colors duration-300 ${
          isFocused ? "text-blue-400" : "text-neutral-400"
        }`}
      >
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent outline-none border-0 border-b border-blue-500 placeholder:text-neutral-500 py-3 text-white focus:border-blue-400 transition-colors duration-300"
      />
    </label>
  );
};

const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
      <span className="text-sm text-neutral-400">{label}</span>
      <div className="relative border-b border-blue-500 focus-within:border-blue-400 transition-colors duration-300">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full text-left bg-transparent py-3 text-white placeholder:text-neutral-500 flex justify-between items-center"
        >
          <span>{value || "Select a topic"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 w-full mt-1 max-h-52 overflow-y-hidden bg-[#0f0f11] border border-blue-600 rounded-xl shadow-lg z-50 backdrop-blur-xl">
            <input
              type="text"
              placeholder="Search topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 bg-transparent text-sm text-white border-b border-blue-500 placeholder:text-neutral-500 focus:outline-none"
            />
            <ul className="max-h-44 overflow-y-auto custom-scroll">
              {filteredOptions.length ? (
                filteredOptions.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-blue-600/40 cursor-pointer transition-colors duration-200 text-white"
                  >
                    {opt}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-neutral-400 text-sm">
                  No matches found
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Map = () => (
  <div className="mt-12 rounded-3xl border border-blue-500 shadow-[inset_0_2px_6px_rgba(117,111,255,0.6),0_10px_20px_rgba(30,30,60,0.6)] overflow-hidden">
    <iframe
      title="Company Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2159924974653!2d77.0415838754927!3d28.41273877578547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x489ffc51a97b2a05%3A0xce07c65b285ef184!2scapyngen!5e0!3m2!1sen!2sin!4v1761233238159!5m2!1sen!2sin"
      width="100%"
      height="320"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-3xl"
    />
  </div>
);

export default function ContactUs() {
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });

  const [isMessageFocused, setIsMessageFocused] = useState(false);
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
    } catch {
      setResponseMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setShowResponse(true);
    }
  };

  return (
    <div className="relative min-h-screen w-full pt-10 overflow-hidden bg-[#0c0c0d] text-white selection:bg-blue-500 selection:text-white">
      <Helmet>
        <title>
          Capyngen | Contact Us – Let’s Talk About Your Digital Growth
        </title>
        <meta
          name="description"
          content="Have questions or ready to start your next digital project? Reach out to Capyngen’s expert team—SEO, social media, web & app development. We’re here to listen, plan and deliver. Contact us today!"
        />
        <meta
          name="keywords"
          content="Have questions or ready to start your next digital project? Reach out to Capyngen’s expert team—SEO, social media, web & app development. We’re here to listen, plan and deliver. Contact us today!"
        />
      </Helmet>
      {/* HEADER */}
      <div className="mx-auto max-w-5xl px-6 pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="mt-3 text-neutral-400">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-white/[0.1] backdrop-blur-3xl border border-blue-600 shadow-[inset_0_2px_8px_rgba(117,111,255,0.4),0_20px_50px_rgba(30,30,60,0.4)] p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[380px_1fr]">
            {/* LEFT PANEL */}
            <div className="rounded-3xl backdrop-blur-2xl p-8 border border-blue-600 shadow-[inset_0_3px_6px_rgba(117,111,255,0.5),0_10px_40px_rgba(30,30,60,0.4)] flex flex-col space-y-6 relative">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">
                Let’s Connect!
              </h3>
              <p className="text-neutral-300">
                We’re here to help. Reach out anytime, and our team will respond
                as soon as possible.
              </p>

              <div className="space-y-10 text-base">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-blue-200" />
                  <a
                    href="mailto:info@capyngen.com"
                    className="text-blue-300 font-semibold underline hover:text-blue-400"
                  >
                    info@capyngen.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-blue-200" />
                  <address className="text-blue-400 not-italic leading-relaxed">
                    Tower B3, Spaze i-Tech Park
                    <br />
                    Sector 49, Gurugram
                    <br />
                    Haryana 122018
                  </address>
                </div>
              </div>

              <div className="flex items-center gap-3  mt-4 text-blue-300/90">
                <a
                  href="https://www.facebook.com/profile.php?id=100086626928653"
                  className="rounded-xl bg-blue-600/70 p-3 border border-blue-500/70 hover:scale-110 transition-all duration-300"
                >
                  <FaFacebookF className="text-white" />
                </a>
                <a
                  href="https://x.com/CapyngenIndia"
                  className="rounded-xl bg-blue-600/70 p-3 border border-blue-500/70 hover:scale-110 transition-all duration-300 flex items-center gap-2 px-4"
                >
                  <FaTwitter className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/capyngen/"
                  className="rounded-xl bg-blue-600/70 p-3 border border-blue-500/70 hover:scale-110 transition-all duration-300 flex items-center gap-2 px-4"
                >
                  <FaInstagram className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/capyngen-private-limited-5ba173390"
                  className="rounded-xl bg-blue-600/70 p-3 border border-blue-500/70 hover:scale-110 transition-all duration-300 flex items-center gap-2 px-4"
                >
                  <FaLinkedinIn className="text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@Capyngen-pvt-ltd"
                  className="rounded-xl bg-blue-600/70 p-3 border border-blue-500/70 hover:scale-110 transition-all duration-300 flex items-center gap-2 px-4"
                >
                  <FaYoutube className="text-white" />
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="relative py-16 px-4">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <Input
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <Input
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="+1 (555) 555-5555"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Select Topic */}
                <div className="mt-8">
                  <Dropdown
                    label="Select Topic"
                    options={topics}
                    value={formData.topic}
                    onChange={(value) =>
                      setFormData({ ...formData, topic: value })
                    }
                  />
                </div>

                {/* Message */}
                <div className="mt-8">
                  <label className="flex flex-col gap-2 group">
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        isMessageFocused ? "text-blue-400" : "text-neutral-400"
                      }`}
                    >
                      Message
                    </span>
                    <textarea
                      rows={3}
                      name="message"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      onFocus={() => setIsMessageFocused(true)}
                      onBlur={() => setIsMessageFocused(false)}
                      className="w-full resize-none bg-transparent outline-none border-0 border-b border-blue-500 placeholder:text-neutral-500 py-3 text-white focus:border-blue-400 transition-colors duration-300"
                      required
                    />
                  </label>
                </div>

                {/* Submit */}
                <div className="mt-12 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative rounded-2xl bg-gradient-to-r from-blue-500 via-blue-500 to-pink-500 px-10 py-3 text-lg font-semibold text-white shadow-lg outline-none ring-2 ring-blue-400 hover:brightness-110 active:brightness-90 disabled:opacity-60 transition-all duration-300"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {showResponse && (
                  <p
                    className={`mt-6 rounded-xl py-2 px-6 text-center text-sm font-semibold max-w-sm mx-auto ${
                      responseMsg.includes("✅")
                        ? "bg-green-600/80 text-green-100"
                        : "bg-red-600/80 text-red-100"
                    } animate-popIn`}
                  >
                    {responseMsg.replace(/^✅|❌/g, "")}
                  </p>
                )}
              </form>
            </div>
          </div>

          <Map />
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0% {transform: scale(0.8); opacity: 0;}
          100% {transform: scale(1); opacity: 1;}
        }
        .animate-popIn {
          animation: popIn 0.35s ease forwards;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #2563eb;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
