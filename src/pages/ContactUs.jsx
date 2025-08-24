import { Mail, MapPin } from "lucide-react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";

const Input = ({ label, placeholder, type = "text" }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label className="flex flex-col gap-2 group">
      <span
        className={`text-sm transition-colors duration-300 ${
          isFocused ? "text-white" : "text-neutral-300"
        }`}
      >
        {label}
      </span>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent outline-none border-0 border-b border-white/30 focus:border-white/80 transition-all duration-500 placeholder:text-neutral-500 py-3 text-white relative z-10"
        />
        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
            isFocused ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>
    </label>
  );
};

export default function ContactUs() {
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full pt-10 overflow-hidden bg-[#0c0c0d] text-white">
      {/* Enhanced animated background blobs */}
      <div
        className="pointer-events-none absolute -left-10 top-40 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,#74a2ff_0%,#6b5bff_45%,#1b1b2a_60%)] animate-float"
        style={{ animationDelay: "0s", animationDuration: "8s" }}
      />
      <div
        className="pointer-events-none absolute right-8 top-28 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#74a2ff_0%,#6b5bff_45%,#1b1b2a_70%)] animate-float"
        style={{ animationDelay: "2s", animationDuration: "10s" }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-20 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#74a2ff_0%,#6b5bff_45%,#1b1b2a_70%)] animate-float"
        style={{ animationDelay: "4s", animationDuration: "12s" }}
      />
      <div
        className="pointer-events-none absolute right-20 bottom-40 h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#9ea0ff_0%,#74a2ff_45%,#1b1b2a_70%)] animate-float"
        style={{ animationDelay: "6s", animationDuration: "9s" }}
      />

      {/* Animated header */}
      <div className="mx-auto max-w-5xl px-6 pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold animate-fadeInUp bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p
          className="mt-3 text-neutral-300 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 pb-24">
        <div
          className="relative animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div
            className="relative rounded-3xl bg-white/[0.12] backdrop-blur-3xl border border-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.1),0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.1),0_25px_50px_rgba(0,0,0,0.4)]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Enhanced glass shine effect */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Floating inner glow orbs with animation */}
            <div
              className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-[radial-gradient(circle,#8ab2ff_0%,transparent_65%)] opacity-50 animate-pulse"
              style={{ animationDuration: "4s" }}
            />
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[radial-gradient(circle,#9ea0ff_0%,transparent_65%)] opacity-60 animate-pulse"
              style={{ animationDuration: "5s", animationDelay: "1s" }}
            />
            <div
              className="pointer-events-none absolute -left-12 bottom-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,#8ab2ff_0%,transparent_65%)] opacity-45 animate-pulse"
              style={{ animationDuration: "6s", animationDelay: "2s" }}
            />
            <div
              className="pointer-events-none absolute right-16 bottom-6 h-36 w-36 rounded-full bg-[radial-gradient(circle,#b0a0ff_0%,transparent_65%)] opacity-55 animate-pulse"
              style={{ animationDuration: "7s", animationDelay: "3s" }}
            />

            <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-[380px_1fr] md:p-12 lg:p-16">
              {/* Left contact info panel with enhanced glassy effect */}
              <div className="relative rounded-3xl backdrop-blur-2xl p-8 md:p-10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.3)] border border-white/30 group transition-all duration-500">
                {/* Contact panel shine effects */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">
                  Contact Information
                </h3>

                <div className="mt-12 space-y-10 text-base">
                  <div className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg group-hover/item:bg-white/30 group-hover/item:scale-110 transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="text-white font-medium">
                      contact@capyngen.com
                    </span>
                  </div>

                  <div className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg group-hover/item:bg-white/30 group-hover/item:scale-110 transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span className="text-neutral-300">&nbsp;</span>
                  </div>
                </div>

                {/* Enhanced social media icons with animation */}
                <div className="absolute bottom-8 left-8 flex items-center gap-4 text-white/90">
                  <a
                    href="#"
                    className="rounded-xl bg-blue-500/20 backdrop-blur-sm p-3 hover:bg-blue-500/30 hover:scale-110 transition-all duration-300 border border-white/30 shadow-lg group"
                  >
                    <FaTwitter className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a
                    href="#"
                    className="rounded-xl bg-pink-500/20 backdrop-blur-sm p-3 hover:bg-pink-500/30 hover:scale-110 transition-all duration-300 border border-white/30 shadow-lg group"
                  >
                    <FaInstagram className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a
                    href="#"
                    className="rounded-xl bg-blue-600/20 backdrop-blur-sm p-3 hover:bg-blue-600/30 hover:scale-110 transition-all duration-300 border border-white/30 shadow-lg group"
                  >
                    <FaLinkedinIn className="group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Right form area with enhanced styling */}
              <div className="relative py-16 px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <Input label="First Name" placeholder="" />
                  <Input label="Last Name" placeholder="" />
                  <Input label="Email" type="email" placeholder="" />
                  <Input label="Phone Number" placeholder="+91" />
                </div>

                {/* Enhanced message textarea */}
                <div className="mt-8">
                  <label className="flex flex-col gap-2 group">
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        isMessageFocused ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      Message
                    </span>
                    <div className="relative">
                      <textarea
                        rows={3}
                        placeholder="Write your message..."
                        onFocus={() => setIsMessageFocused(true)}
                        onBlur={() => setIsMessageFocused(false)}
                        className="w-full resize-none bg-transparent outline-none border-0 border-b border-white/30 focus:border-white/80 transition-all duration-500 placeholder:text-neutral-500 py-3 text-white relative z-10"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                          isMessageFocused
                            ? "w-full opacity-100"
                            : "w-0 opacity-0"
                        }`}
                      />
                    </div>
                  </label>
                </div>

                {/* Enhanced send button */}
                <div className="mt-12 flex justify-end">
                  <button className="group relative rounded-xl backdrop-blur-xl px-8 py-3 text-base font-medium text-white shadow-2xl outline-none ring-2 ring-white/40 transition-all duration-300 hover:from-blue-500/40 hover:ring-white/60 hover:scale-105 active:scale-95 border border-white/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
