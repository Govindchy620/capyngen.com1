import { Mail, MapPin } from "lucide-react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Input = ({ label, placeholder, type = "text" }) => (
  <label className="flex flex-col gap-2">
    <span className="text-sm text-neutral-300">{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent outline-none border-0 border-b border-white/30 focus:border-white/60 transition placeholder:text-neutral-500 py-2 text-white"
    />
  </label>
);

export default function ContactUs() {
  return (
    <div className="relative min-h-screen w-full pt-10 overflow-hidden bg-[#0c0c0d] text-white">
      {/* Background floating radial blobs */}
      <div className="pointer-events-none absolute -left-10 top-40 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,#74a2ff_0%,#6b5bff_45%,#1b1b2a_60%)]" />
      <div className="pointer-events-none absolute right-8 top-28 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#74a2ff_0%,#6b5bff_45%,#1b1b2a_70%)]" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#74a2ff_0%,#6b5bff_45%,#1b1b2a_70%)]" />
      {/* Page heading */}
      <div className="mx-auto max-w-5xl px-6 pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-3 text-neutral-300">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 pb-24">
        <div className="relative">
          {/* Enhanced gradient border with more subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 p-[1px]" />

          <div className="relative rounded-2xl bg-white/[0.08] backdrop-blur-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.1),0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>

            <div className="pointer-events-none absolute -left-8 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,#8ab2ff_0%,transparent_60%)] opacity-40" />
            <div className="pointer-events-none absolute -right-10 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,#9ea0ff_0%,transparent_60%)] opacity-50" />
            <div className="pointer-events-none absolute -left-8 bottom-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,#8ab2ff_0%,transparent_60%)] opacity-40" />
            <div className="pointer-events-none absolute right-16 bottom-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,#8ab2ff_0%,transparent_60%)] opacity-50" />

            <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-[360px_1fr] md:p-10 lg:p-12">
              <div className="relative rounded-2xl bg-white/[0.12] backdrop-blur-xl p-6 md:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.2)] border border-white/20">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <h3 className="text-xl font-semibold">Contact Information</h3>

                <div className="mt-10 space-y-8 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20 shadow-sm">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="text-white">contact@capyngen.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20 shadow-sm">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span className="text-neutral-300">&nbsp;</span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-6 flex items-center gap-4 text-white/90">
                  <a
                    href="#"
                    className="rounded-md bg-white/15 backdrop-blur-sm p-2 hover:bg-white/25 transition-all duration-200 border border-white/20 shadow-sm"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="rounded-md bg-white/15 backdrop-blur-sm p-2 hover:bg-white/25 transition-all duration-200 border border-white/20 shadow-sm"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="rounded-md bg-white/15 backdrop-blur-sm p-2 hover:bg-white/25 transition-all duration-200 border border-white/20 shadow-sm"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Right form area */}
              <div className="relative py-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <Input label="First Name" placeholder="" />
                  <Input label="Last Name" placeholder="" />
                  <Input label="Email" type="email" placeholder="" />
                  <Input label="Phone Number" placeholder="+91" />
                </div>

                <div className="mt-8">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-neutral-300">Message</span>
                    <textarea
                      rows={2}
                      placeholder="Write your message.."
                      className="resize-none bg-transparent outline-none border-0 border-b border-white/30 focus:border-white/60 transition placeholder:text-neutral-500 py-2 text-white"
                    />
                  </label>
                </div>

                <div className="mt-8 flex justify-end">
                  <button className="rounded-md bg-white/20 backdrop-blur-sm px-5 py-2 text-sm text-white shadow-lg outline-none ring-1 ring-white/30 transition-all duration-200 hover:bg-white/30 hover:ring-white/40 active:scale-[0.98] border border-white/20">
                    Send Message
                  </button>
                </div>

                {/* Paper plane doodle */}
                <div className="pointer-events-none absolute -bottom-4 right-4">
                  <svg
                    width="170"
                    height="90"
                    viewBox="0 0 170 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 78 C60 70, 85 55, 120 35 C140 25, 152 12, 162 10"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                    <polygon
                      points="160,4 168,18 150,16"
                      fill="white"
                      opacity="0.95"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
