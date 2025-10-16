import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { useState, useEffect } from "react";

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
      <div className="relative">
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent outline-none border-0 border-b border-blue-500 placeholder:text-neutral-500 py-3 text-white relative z-10 focus:border-blue-400 transition-colors duration-300"
        />
      </div>
    </label>
  );
};

const Map = () => (
  <div className="mt-12 rounded-3xl border border-blue-500 shadow-[inset_0_2px_6px_rgba(117,111,255,0.6),0_10px_20px_rgba(30,30,60,0.6)] overflow-hidden">
    <iframe
      title="Company Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0861420419263!2d-122.40992178468155!3d37.77492977975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c6e51594d%3A0xe0cb9c16730d2c7b!2sYour%20Tech%20Company!5e0!3m2!1sen!2sus!4v1697314690554!5m2!1sen!2sus"
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "Inquiry",
    message: "",
  });

  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  // Clear response message automatically after 5 seconds
  useEffect(() => {
    if (showResponse) {
      const timer = setTimeout(() => {
        setShowResponse(false);
        setResponseMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showResponse]);

  // Handle submit and send data to backend
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
          subject: "Inquiry",
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
    <div className="relative min-h-screen w-full pt-10 overflow-hidden bg-[#0c0c0d] text-white selection:bg-blue-500 selection:text-white">
      {/* Floating gradient blobs */}
      <div
        className="pointer-events-none absolute -left-10 top-40 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,#999bf3_0%,#0347e9_45%,#1b1b2a_60%)] animate-float"
        style={{ animationDelay: "0s", animationDuration: "8s" }}
      />
      <div
        className="pointer-events-none absolute right-8 top-28 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#999bf3_0%,#0347e9_45%,#1b1b2a_70%)] animate-float"
        style={{ animationDelay: "2s", animationDuration: "10s" }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-20 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#999bf3_0%,0347e9_45%,#1b1b2a_70%)] animate-float"
        style={{ animationDelay: "4s", animationDuration: "12s" }}
      />
      <div
        className="pointer-events-none absolute right-20 bottom-40 h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#9ea0ff_0%,#999bf3_45%,#1b1b2a_70%)] animate-float"
        style={{ animationDelay: "6s", animationDuration: "9s" }}
      />

      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold animate-fadeInUp bg-gradient-to-r from-blue-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="mt-3 text-neutral-400 animate-fadeInUp">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Main container */}
      <div className="mx-auto mt-10 max-w-7xl px-6 pb-24">
        <div
          className="relative animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div
            className={`relative rounded-3xl bg-white/[0.1] backdrop-blur-3xl border border-blue-600 shadow-[inset_0_2px_8px_rgba(117,111,255,0.4),0_20px_50px_rgba(30,30,60,0.4)] transition-shadow duration-500 hover:shadow-[inset_0_3px_10px_rgba(117,111,255,0.6),0_25px_60px_rgba(40,40,90,0.5)]`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Contact Info + Form */}
            <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[380px_1fr] md:p-12 lg:p-16">
              {/* Contact info panel */}
              <div className="relative rounded-3xl backdrop-blur-2xl p-8 md:p-10 shadow-[inset_0_3px_6px_rgba(117,111,255,0.5),0_10px_40px_rgba(30,30,60,0.4)] border border-blue-600 group transition-all duration-500">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-10 text-base">
                  <div className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/30 backdrop-blur-sm border border-blue-500/80 shadow-lg">
                      <Mail className="h-5 w-5 text-blue-200" />
                    </div>
                    <a
                      href="mailto:contact@capyngen.com"
                      className="text-blue-300 font-semibold underline hover:text-blue-400 transition-colors duration-300"
                    >
                      contact@capyngen.com
                    </a>
                  </div>

                  <div className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/30 backdrop-blur-sm border border-blue-500/80 shadow-lg">
                      <Phone className="h-5 w-5 text-blue-200" />
                    </div>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-300 font-semibold underline hover:text-blue-400 transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/30 backdrop-blur-sm border border-blue-500/80 shadow-lg">
                      <MapPin className="h-5 w-5 text-blue-200" />
                    </div>
                    <address className="text-blue-400 not-italic leading-relaxed">
                      123 Tech Avenue, Suite 100
                      <br />
                      Silicon Valley, CA 94043
                      <br />
                      USA
                    </address>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="absolute bottom-8 left-8 flex items-center gap-4 text-blue-300/90">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="rounded-xl bg-blue-700/70 p-3 border border-blue-500/70 hover:bg-blue-800 transition-all duration-300 shadow-lg hover:scale-110"
                  >
                    <FaFacebookF className="text-white" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="rounded-xl bg-blue-500/70 p-3 border border-blue-500/70 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:scale-110"
                  >
                    <FaTwitter className="text-white" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="rounded-xl bg-pink-500/70 p-3 border border-blue-500/70 hover:bg-pink-600 transition-all duration-300 shadow-lg hover:scale-110"
                  >
                    <FaInstagram className="text-white" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="rounded-xl bg-blue-600/70 p-3 border border-blue-500/70 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:scale-110"
                  >
                    <FaLinkedinIn className="text-white" />
                  </a>
                </div>
              </div>

              {/* Contact form */}
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

                  {/* Message */}
                  <div className="mt-8">
                    <label className="flex flex-col gap-2 group">
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          isMessageFocused
                            ? "text-blue-400"
                            : "text-neutral-400"
                        }`}
                      >
                        Message
                      </span>
                      <div className="relative">
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
                          className="w-full resize-none bg-transparent outline-none border-0 border-b border-blue-500 placeholder:text-neutral-500 py-3 text-white relative z-10 focus:border-blue-400 transition-colors duration-300"
                          required
                        />
                      </div>
                    </label>
                  </div>

                  {/* Send button */}
                  <div className="mt-12 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative rounded-2xl bg-gradient-to-r from-blue-500 via-blue-500 to-pink-500 px-10 py-3 text-lg font-semibold text-white shadow-lg outline-none ring-2 ring-blue-400 transition-all duration-300 hover:brightness-110 active:brightness-90 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <span className="relative z-10">
                        {loading ? "Sending..." : "Send Message"}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-blue-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />
                    </button>
                  </div>

                  {/* Responsive and animated message */}
                  {showResponse && (
                    <p
                      className={`mt-6 rounded-xl py-2 px-6 text-center text-sm font-semibold max-w-sm mx-auto transition-transform duration-300 ${
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

            {/* Map below form */}
            <Map />
          </div>
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
      `}</style>
    </div>
  );
}
