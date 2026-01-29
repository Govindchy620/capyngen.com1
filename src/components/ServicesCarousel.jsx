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
    title: "Custom AI Solution",
    desc: "Specially made AI-based solutions that enable jobs to be faster and enable businesses to succeed better.",
    href: "/custom-ai-solutions",
    items: [
      "Predictive analysis",
      "Intelligent automation",
      "AI models that are specifically created.",
      "Insights in real time",
    ],
  },
  {
    title: "Web Development",
    desc: "The secure, responsive websites where the users can enjoy themselves and the companies can flourish during the use of the services of the Best web design.",
    href: "/web-development",
    items: [
      "Right solutions to web problems.",
      "Growing infrastructure.",
      "Better performance",
      "Design for mobile first",
    ],
  },
  {
    title: "E-Commerce Solutions",
    desc: "Smarter online shops that are designed to maximize purchases, customer satisfaction, and interaction.",
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
    desc: "Safe, transparent, and trustworthy blockchain solutions to conducting digital transactions.",
    href: "/blockchain-development",
    items: [
      "Creating smart contracts",
      "Applications which do not require a central server to operate.",
      "Secure transactions",
      "Blockchain consulting",
    ],
  },
  {
    title: "DevOps Solutions",
    desc: "Easy DevOps solutions that allow you to develop software faster, with greater reliability and efficiency.",
    href: "/devops-solutions",
    items: [
      "Always integrating",
      "Self-deployment.",
      "Expanding pipelines.",
      "Doing business on the cloud",
    ],
  },
  {
    title: "Application Solutions",
    desc: "Complete utilization of new ideas, better company performance, and simplified smooth work.",
    href: "/application-solutions",
    items: [
      "Upgrading obsolete systems",
      "Going to the cloud",
      "Make applications safe",
      "Help from beginning to end",
    ],
  },
  {
    title: "CRM &amp; Management Software",
    desc: "Tailored customer relationship management systems that actually assist in sales, relationships and customer involvement.",
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
    desc: "UI/UX design that focuses on the user to ensure that interactions are not difficult to understand and use by users.",
    href: "/ui-ux-design-services",
    items: [
      "Development of wireframes and prototypes.",
      "Interactive design",
      "Testing with real people",
      "Improving conversions",
    ],
  },
  {
    title: "Website Design",
    desc: "Engaging, receptive and effective websites built to enhance online presence.",
    href: "/website-design-company-india",
    items: [
      "SEO-friendly design",
      "Custom layouts",
      "Mobile optimization",
      "Fast loading speed",
    ],
  },
  {
    title: "Branding &amp; Identity Design",
    desc: "Good branding solutions to make an identity and reach your audience.",
    href: "/branding-identity-design",
    items: [
      "Logo creation",
      "Brand strategy",
      "Visual guidelines",
      "Identity consistency",
    ],
  },
  {
    title: "Ecommerce Design",
    desc: "Contemporary ecommerce layouts that enhance purchasing, confidence, and shopping experiences of customers.",
    href: "/ecommerce-website-design",
    items: [
      "Simple to use interface",
      "Safe checkout",
      "Display of goods",
      "User-friendly backend",
    ],
  },
  {
    title: "CMS Design",
    desc: "CMS templates that assist you in managing your contents to a better extent and enhance the performance of the site.",
    href: "/cms-website-design",
    items: [
      "Easy to switch",
      "A framework that can expand",
      "SEO optimization",
      "Easy to use backend.",
    ],
  },
  {
    title: "Search Engine Optimization",
    desc: "Proper search engine optimization to enhance the ranking, visibility, and the long-term online expansion.",
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
    desc: "Participation in SMM campaigns that create brand awareness and reach out to audiences.",
    href: "/smm",
    items: [
      "Advertisements that are platform specific.",
      "Finding an audience",
      "Keeping an eye on engagement",
    ],
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Outcome-based PPC advertisements, which lead to the highest ROI and acquisition of qualified leads in the shortest time possible.",
    href: "/ppc",
    items: [
      "The campaigns targeting specific people.",
      "The best keywords",
      "Tracking in real time",
      "Advertisements focusing on the returns on investment.",
    ],
  },
  {
    title: "Artificial Intelligence",
    desc: "Innovation, smarter automation, and business transformation through state-of-the-art AI services.",
    href: "/artificial-intelligence-services",
    items: [
      "AI-powered chatbots",
      "Predictive analysis",
      "Data-based insights",
      "Making things automatic",
    ],
  },
  {
    title: "Cybersecurity",
    desc: "Solid cybersecurity measures to protect information, networks, and computer networks.",
    href: "/cybersecurity",
    items: [
      "Finding dangers",
      "Keeping data safe",
      "Risk monitoring and assessment 24/7.",
    ],
  },
  {
    title: "Network Services and Solutions",
    desc: "Breakthrough Network solutions that provide reliable, scalable and secure network infrastructure.",
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
    desc: "Enterprise solutions designed to be scalable and streamline operations and speed up digital transformation.",
    href: "/enterprise-solutions",
    items: [
      "Systems for ERP",
      "Applications designed specifically to your company.",
      "Taking care of data",
      "Working with the cloud",
    ],
  },
  {
    title: "Data and Analysis",
    desc: "Service analytics Actionable information analytics services transforming raw data into business insights.",
    href: "/data-analytics-services",
    items: [
      "Handling a lot of data",
      "Real time changing dashboards.",
      "Predictions that can be made",
      "Looking at data",
    ],
  },
  {
    title: "Consulting",
    desc: "IT consulting services to make technology work with your business growth objectives.",
    href: "/consulting",
    items: [
      "Thinking forward",
      "A plan for technology",
      "Making procedures better",
      "Always ready to assist",
    ],
  },
  {
    title: "App Development",
    desc: "Mobile device apps that are robust, scalable and easy to use, and are aimed at assisting organisations in achieving their goals.",
    href: "/app-development",
    items: [
      "Multi-device compatibility",
      "Quick and safe growth",
      "Architecture that can evolve over time.",
      "User-centered design.",
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
