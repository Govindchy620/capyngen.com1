import { useState } from "react";
import {
  BarChart3,
  Search,
  FileText,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { assets } from "../assets/assets";

const seoTools = [
  {
    id: 0,
    title: "SEO Marketing",
    subtitle: "SEO Audit",
    description:
      "Check the on-page optimization for your website and make sure it is optimized correctly for important search engines.",
    image: assets.seoTool1,
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: 1,
    title: "Keyword Marketing",
    subtitle: "Keyword Research",
    description:
      "Discover the right keywords for your business and optimize your content to improve your rankings.",
    image: assets.seoTool2,
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Content Strategy",
    subtitle: "Content Marketing",
    description:
      "Create powerful content strategies to attract and engage your audience effectively.",
    image: assets.seoTool3,
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Competitor Insights",
    subtitle: "Competitor Analysis",
    description:
      "Analyze competitor websites to identify opportunities and outperform them in search rankings.",
    image: assets.seoTool4,
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Performance Tracking",
    subtitle: "SEO Reporting",
    description:
      "Track and measure your SEO performance with detailed reports and insights.",
    image: assets.seoTool5,
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
];

function SeoToolsSection() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabClick = (index) => {
    if (index === active) return;

    setIsTransitioning(true); // fade out current

    setTimeout(() => {
      setActive(index); // render new content while still opacity-0

      // ensure at least one paint with opacity-0 before fading in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(false));
      });
    }, 150);
  };

  return (
    <section className="w-full bg-black h-screen py-16 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 h-full">
        {/* Left Tabs */}
        <div className="flex-1 space-y-6 w-1/3">
          <h2 className="text-3xl font-bold mb-8">Discover our SEO Tools</h2>
          <ul className="space-y-4">
            {seoTools.map((tool, index) => (
              <li
                key={tool.id}
                onClick={() => handleTabClick(index)}
                className={`flex items-center gap-4 cursor-pointer transition-all duration-500 transform hover:translate-x-2 hover:scale-105 rounded-xl p-3 ${
                  active === index
                    ? "font-bold text-white bg-white/10 shadow-lg backdrop-blur-sm border border-white/20"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span
                  className={`p-3 rounded-full transition-all duration-500 ${
                    active === index
                      ? "bg-white text-blue-800 shadow-lg scale-110 animate-pulse"
                      : "bg-blue-700 hover:bg-blue-600 hover:scale-105"
                  }`}
                >
                  {tool.icon}
                </span>
                <span
                  className={`transition-all duration-500 ${
                    active === index
                      ? "text-xl font-semibold"
                      : "text-lg hover:font-medium"
                  }`}
                >
                  {tool.subtitle}
                </span>
                {active === index && (
                  <div className="ml-auto w-1 h-8 bg-white rounded-full" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center items-center relative group">
          <img
            src={seoTools[active].image}
            alt={seoTools[active].title}
            className={`rounded-2xl h-96 object-contain transition-all duration-700 ease-in-out ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-slow"></div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative w-1/3">
          <div
            key={seoTools[active].id}
            className={`p-8 text-blue-900 transition-all duration-700 ease-in-out transform rounded-2xl ${
              isTransitioning
                ? "opacity-0 translate-y-4 scale-95"
                : "opacity-100 translate-y-0 scale-100"
            }`}
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-black bg-clip-text text-transparent">
                {seoTools[active].title}
              </h3>
              <p className="mb-8 text-gray-100 leading-relaxed">
                {seoTools[active].description}
              </p>
              <button className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:scale-105 hover:shadow-lg active:scale-95 overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoToolsSection;
