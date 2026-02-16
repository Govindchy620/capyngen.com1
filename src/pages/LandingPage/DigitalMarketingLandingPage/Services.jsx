import React from "react";
import {
  Search,
  MousePointerClick,
  Smartphone,
  Zap,
  PenTool,
  Layout,
  Mail,
  HelpCircle
} from "lucide-react";
import { FadeIn } from "../../../ui/Reveal"; // Adjust path if needed

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Get your website ranking on Google and attract organic traffic. More traffic = more leads.",
    icon: Search,
    color: "from-emerald-400 to-green-600",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Run paid campaigns to generate instant leads and traffic. We optimize your budget to maximize ROI.",
    icon: MousePointerClick,
    color: "from-blue-400 to-blue-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Social Media Marketing (SMM)",
    description: "Grow your brand on Instagram, Facebook, and LinkedIn. Target the right audience to increase sales.",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "Performance Marketing",
    description: "Every campaign is monitored and optimized for maximum returns. Every penny of your ad spend is used effectively.",
    icon: Zap,
    color: "from-orange-400 to-rose-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "Content Marketing",
    description: "Blogs, posts, infographics, and videos to engage your audience. Content that attracts and converts.",
    icon: PenTool,
    color: "from-purple-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Website Design & Optimization",
    description: "Professional, fast-loading, and mobile-friendly website. Visitors can easily explore your services and reach out.",
    icon: Layout,
    color: "from-cyan-400 to-teal-500",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Email & WhatsApp Marketing",
    description: "Reach potential customers directly and boost repeat sales with personalized campaigns.",
    icon: Mail,
    color: "from-yellow-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Not Sure? Need Guidance",
    description: "We provide full strategy and implementation guidance. Perfect for beginners too.",
    icon: HelpCircle,
    color: "from-slate-400 to-slate-600",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <section
      className="py-20 lg:py-24 bg-[#030712] relative overflow-hidden"
      id="services"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10  filter blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Our Services – <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Boost Your Business</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              With this package, you’ll get a complete digital marketing strategy tailored precisely to your business goals.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid (4 Columns on Desktop to fit 8 items perfectly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative h-full bg-[#0a0f1c]/80 backdrop-blur-xl overflow-hidden  border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(79,70,229,0.4)] hover:border-indigo-500/30 flex flex-col">

                {/* Image Header (More compact for an 8-item grid) */}
                <div className="h-44 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-[#030712]/60 z-10 group-hover:bg-[#030712]/30 transition-colors duration-500" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 pt-10 relative flex-grow flex flex-col">

                  {/* Floating Overlapping Icon */}
                  <div className="absolute -top-6 left-6 z-20">
                    <div className={`w-12 h-12  bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg border border-white/20 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <service.icon className="text-white w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Interactive Accent Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;