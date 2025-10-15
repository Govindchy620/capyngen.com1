"use client";

import { useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BestHeading from "./BestHeading";
import {
  Smartphone,
  Cpu,
  Globe,
  ShoppingCart,
  ShieldCheck,
  Hammer,
  Layout,
  Settings,
  Paintbrush,
  Monitor,
  Tag,
  Box,
  FileText,
  Search,
  Facebook,
  DollarSign,
  Brain,
  Shield,
  Wifi,
  Briefcase,
  BarChart2,
  UserCheck,
} from "lucide-react";

// ---------------- CARDS DATA + LINKS ----------------
const cards = [
  {
    title: "App Development",
    desc: "Apps for mobile devices that are strong, scalable, and simple to use, designed to help organizations meet objectives.",
    href: "/app-development",
    items: [
      "Multi-device compatibility",
      "Quick and safe growth",
      "Architecture that may change throughout time",
      "Design that puts the user first",
    ],
  },
  {
    title: "Custom AI Solution",
    desc: "Custom AI-powered solutions that make jobs go faster and help businesses do better.",
    href: "/custom-ai-solutions",
    items: [
      "Predictive analysis",
      "Intelligent automation",
      "AI models designed particularly for you",
      "Insights in real time",
    ],
  },
  {
    title: "Web Development",
    desc: "Websites that are secure and responsive, so that users have a good time and companies may prosper.",
    href: "/web-development",
    items: [
      "Web solutions that are right for you",
      "Infrastructure that can grow",
      "Better performance",
      "Design for mobile first",
    ],
  },
  {
    title: "E-Commerce Solutions",
    desc: "Smart online stores that are created to increase sales, customer happiness, and engagement.",
    href: "/ecommerce-solutions",
    items: [
      "Secure payment integration",
      "Easy to get around",
      "Taking care of stock",
      "Growth that can be measured",
    ],
  },
  {
    title: "Blockchain Development",
    desc: "Blockchain solutions that are secure, transparent, and reliable for digital transactions.",
    href: "/blockchain-development",
    items: [
      "Creating smart contracts",
      "Apps that don't need a central server to work",
      "Transactions that are secure",
      "Blockchain consulting",
    ],
  },
  {
    title: "DevOps Solutions",
    desc: "Streamlined DevOps services that let you produce software more quickly, reliably, and effectively.",
    href: "/devops-solutions",
    items: [
      "Always integrating",
      "Deployment that occurs on its own",
      "Pipelines that can become bigger",
      "Doing business on the cloud",
    ],
  },
  {
    title: "Application Solutions",
    desc: "Full application services for fresh ideas, improved company results, and making things work more smoothly.",
    href: "/application-solutions",
    items: [
      "Upgrading obsolete systems",
      "Going to the cloud",
      "Make applications safe",
      "Help from beginning to end",
    ],
  },
  {
    title: "CRM & Management Software",
    desc: "Custom CRM systems that truly help with sales, relationships, and getting customers involved.",
    href: "/crm-management-software",
    items: [
      "Lead management",
      "Automating processes",
      "Data-based insights",
      "Multi-channel support",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "User-centered UI/UX design that makes sure that users can easily comprehend and enjoy their interactions.",
    href: "/ui-ux-design",
    items: [
      "Making wireframes and prototypes",
      "Interactive design",
      "Testing with real people",
      "Improving conversions",
    ],
  },
  {
    title: "Website Design",
    desc: "Creative, responsive, and impactful websites designed to strengthen digital presence.",
    href: "/website-design",
    items: [
      "SEO-friendly design",
      "Custom layouts",
      "Mobile optimization",
      "Fast loading speed",
    ],
  },
  {
    title: "Branding & Identity Design",
    desc: "Strong branding solutions to define identity and connect with your audience.",
    href: "/branding-and-identity-design",
    items: [
      "Logo creation",
      "Brand strategy",
      "Visual guidelines",
      "Identity consistency",
    ],
  },
  {
    title: "Ecommerce Design",
    desc: "Modern ecommerce designs that boost sales, trust, and customer shopping experiences.",
    href: "/ecommerce-design",
    items: [
      "Simple to use interface",
      "Safe checkout",
      "Display of goods",
      "User-friendly backend",
    ],
  },
  {
    title: "CMS Design",
    desc: "CMS designs that help you manage your content better and make the site perform better.",
    href: "/cms-design",
    items: [
      "Easy to switch",
      "A framework that can expand",
      "SEO optimization",
      "Backend that is easy to utilize",
    ],
  },
  {
    title: "Search Engine Optimization",
    desc: "Effective SEO strategies to improve ranking, visibility, and long-term online growth.",
    href: "/seo",
    items: [
      "On-page SEO",
      "Off-page SEO",
      "Keyword optimization",
      "Analytics tracking",
    ],
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Engaging SMM campaigns that build brand presence and connect with audiences.",
    href: "/smm",
    items: [
      "Ads that are made for a certain platform",
      "Finding an audience",
      "Keeping an eye on engagement",
    ],
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Result-driven PPC ads that maximize ROI and capture qualified leads quickly.",
    href: "/ppc",
    items: [
      "Campaigns that target certain individuals",
      "The best keywords",
      "Tracking in real time",
      "Ads that emphasize on return on investment",
    ],
  },
  {
    title: "Artificial Intelligence",
    desc: "Cutting-edge AI services for smarter automation, innovation, and business transformation.",
    href: "/artificial-intelligence",
    items: [
      "AI-powered chatbots",
      "Predictive analysis",
      "Data-based insights",
      "Making things automatic",
    ],
  },
  {
    title: "Cybersecurity",
    desc: "Robust cybersecurity solutions to safeguard data, systems, and digital infrastructures.",
    href: "/cybersecurity",
    items: [
      "Finding dangers",
      "Keeping data safe",
      "Risk assessment and monitoring 24/7",
    ],
  },
  {
    title: "Network Services and Solutions",
    desc: "Advanced network solutions ensuring reliable, scalable, and secure connectivity infrastructure.",
    href: "/network-solutions",
    items: [
      "Cloud-based networking",
      "Network safety",
      "Building infrastructure",
      "Getting better at what you do",
    ],
  },
  {
    title: "Business Solutions",
    desc: "Scalable enterprise solutions built to streamline operations and accelerate digital transformation.",
    href: "/enterprise-solutions",
    items: [
      "Systems for ERP",
      "Apps created particularly for your company",
      "Taking care of data",
      "Working with the cloud",
    ],
  },
  {
    title: "Data and Analysis",
    desc: "Actionable data analytics services turning raw information into valuable business insights.",
    href: "/data-analytics",
    items: [
      "Handling a lot of data",
      "Dashboards that change in real time",
      "Predictions that can be made",
      "Looking at data",
    ],
  },
  {
    title: "Consulting",
    desc: "Expert IT consulting services to align technology with your business growth goals.",
    href: "/consulting",
    items: [
      "Thinking forward",
      "A plan for technology",
      "Making procedures better",
      "Always ready to assist",
    ],
  },
];

// ---------------- ICONS MAP ----------------
const iconMap = [
  <Smartphone className="text-white w-7 h-7" />,
  <Cpu className="text-white w-7 h-7" />,
  <Globe className="text-white w-7 h-7" />,
  <ShoppingCart className="text-white w-7 h-7" />,
  <ShieldCheck className="text-white w-7 h-7" />,
  <Hammer className="text-white w-7 h-7" />,
  <Settings className="text-white w-7 h-7" />,
  <Layout className="text-white w-7 h-7" />,
  <Paintbrush className="text-white w-7 h-7" />,
  <Monitor className="text-white w-7 h-7" />,
  <Tag className="text-white w-7 h-7" />,
  <Box className="text-white w-7 h-7" />,
  <FileText className="text-white w-7 h-7" />,
  <Search className="text-white w-7 h-7" />,
  <Facebook className="text-white w-7 h-7" />,
  <DollarSign className="text-white w-7 h-7" />,
  <Brain className="text-white w-7 h-7" />,
  <Shield className="text-white w-7 h-7" />,
  <Wifi className="text-white w-7 h-7" />,
  <Briefcase className="text-white w-7 h-7" />,
  <BarChart2 className="text-white w-7 h-7" />,
  <UserCheck className="text-white w-7 h-7" />,
];

// ---------------- CARD COMPONENT ----------------
const Card = ({ title, desc, items, index, href, onClick }) => (
  <article
    className="h-92 relative group rounded-2xl p-6 min-h-[380px] flex flex-col shadow-lg
               bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700
               backdrop-blur-md overflow-hidden border border-cyan-400/40
               transition-all duration-500 hover:shadow-2xl hover:scale-[1.04] cursor-pointer
               focus:outline-none focus:ring-4 focus:ring-cyan-400"
    onClick={onClick}
    tabIndex={0}
    aria-label={`${title} service`}
    role="group"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition duration-500 bg-gradient-to-r from-teal-500 to-blue-700 rounded-2xl"></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex mb-4 items-center">
        <span className="w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-white text-2xl shadow-md mr-3 select-none">
          {iconMap[index]}
        </span>
        <span className="ml-auto flex items-center border border-cyan-300 rounded-full w-10 h-10 justify-center group-hover:bg-cyan-50 transition-colors duration-300">
          <ArrowRight className="h-5 w-5 text-cyan-100 group-hover:text-cyan-700 transition-colors duration-300" />
        </span>
      </div>
      <h2 className="font-bold text-lg mb-2 text-white">{title}</h2>
      <p className="text-cyan-200 text-sm mb-4">{desc}</p>
      <ul className="text-cyan-100 text-[15px] pl-4 list-disc flex-grow space-y-1">
        {items.map((it, idx) => (
          <li key={idx} className="my-1">
            {it}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

// ---------------- MAIN CAROUSEL ----------------
const ServicesCarousel = () => {
  const navigate = useNavigate(); // ✅ navigation
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: cards.length > 4,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="overflow-x-hidden overflow-y-hidden md:min-h-[100vh] py-12"
      aria-label="Services"
      role="region"
    >
      <BestHeading title="" highlight="Services" />

      <div className="py-6 sm:py-10">
        <div className="mx-auto w-full max-w-screen-2xl px-2 sm:px-6">
          <div className="relative px-7 sm:px-12 md:px-16">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous Services"
              className="flex absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-20
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         hover:from-purple-600 hover:to-pink-600
                         text-white rounded-full p-3 shadow-lg
                         transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next Services"
              className="flex absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-20
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         hover:from-purple-600 hover:to-pink-600
                         text-white rounded-full p-3 shadow-lg
                         transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slider */}
            <Slider
              ref={sliderRef}
              {...settings}
              role="list"
              aria-live="polite"
            >
              {cards.map((card, idx) => (
                <div key={idx} className="px-2 sm:px-3 py-2" role="listitem">
                  <Card
                    {...card}
                    index={idx}
                    onClick={() => navigate(card.href)} // ✅ navigate on card click
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
