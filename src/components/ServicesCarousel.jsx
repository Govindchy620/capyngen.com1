"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BestHeading from "./BestHeading";

const cards = [
  {
    icon: "📱",
    title: "App Development",
    desc: "Apps for mobile devices that are strong, scalable, and simple to use, all designed to help organizations meet their objectives.",
    items: [
      "Can be used on more than one platform",
      "Quick and safe growth",
      "Architecture that may change throughout time",
      "Design that puts the user first",
    ],
  },
  {
    icon: "🤖",
    title: "Custom AI Solution",
    desc: "Custom AI-powered solutions that make jobs go faster and help businesses do better.",
    items: [
      "Predictive analysis",
      "Intelligent automation",
      "AI models designed particularly for you",
      "Insights in real time",
    ],
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "Websites that are secure and responsive, so that users have a good time and companies may prosper.",
    items: [
      "Web solutions that are right for you",
      "Infrastructure that can grow",
      "Better performance",
      "Design for mobile first",
    ],
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Smart online stores that are created to increase sales, customer happiness, and engagement.",
    items: [
      "Secure payment integration",
      "Easy to get around",
      "Taking care of stock",
      "Growth that can be measured",
    ],
  },
  {
    icon: "⛓️",
    title: "Blockchain Development",
    desc: "Blockchain solutions that are secure, transparent, and reliable for digital transactions.",
    items: [
      "Creating smart contracts",
      "Apps that don't need a central server to work",
      "Transactions that are secure",
      "Blockchain consulting",
    ],
  },
  {
    icon: "⚡",
    title: "DevOps Solutions",
    desc: "Streamlined DevOps services that let you produce software more quickly, reliably, and effectively.",
    items: [
      "Always integrating",
      "Deployment that occurs on its own",
      "Pipelines that can become bigger",
      "Doing business on the cloud",
    ],
  },
  {
    icon: "🛠️",
    title: "Application Solutions",
    desc: "Full application services for fresh ideas, improved company results, and making things work more smoothly.",
    items: [
      "Upgrading obsolete systems",
      "Going to the cloud",
      "Make applications safe",
      "Help from beginning to end",
    ],
  },
  {
    icon: "📋",
    title: "CRM & Management Software",
    desc: "Custom CRM systems that truly help with sales, relationships, and getting customers involved.",
    items: [
      "Lead management",
      "Automating processes",
      "Data-based insights",
      "Multi-channel support",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "User-centered UI/UX design that makes sure that users can easily comprehend and enjoy their interactions.",
    items: [
      "Making wireframes and prototypes",
      "Interactive design",
      "Testing with real people",
      "Improving conversions",
    ],
  },
  {
    icon: "🌐",
    title: "Website Design",
    desc: "Creative, responsive, and impactful websites designed to strengthen digital presence.",
    items: [
      "SEO-friendly design",
      "Custom layouts",
      "Mobile optimization",
      "Fast loading speed",
    ],
  },
  {
    icon: "🏷️",
    title: "Branding & Identity Design",
    desc: "Strong branding solutions to define identity and connect with your audience.",
    items: [
      "Logo creation",
      "Brand strategy",
      "Visual guidelines",
      "Identity consistency",
    ],
  },
  {
    icon: "🛍️",
    title: "Ecommerce Design",
    desc: "Modern ecommerce designs that boost sales, trust, and customer shopping experiences.",
    items: [
      "Simple to use interface",
      "Safe checkout",
      "Display of goods",
      "User-friendly backend",
    ],
  },
  {
    icon: "📰",
    title: "CMS Design",
    desc: "CMS designs that help you manage your content better and make the site perform better.",
    items: [
      "Easy to switch",
      "A framework that can expand",
      "SEO optimization",
      "Backend that is easy to utilize",
    ],
  },
  {
    icon: "🔍",
    title: "Search Engine Optimization",
    desc: "Effective SEO strategies to improve ranking, visibility, and long-term online growth.",
    items: [
      "On-page SEO",
      "Off-page SEO",
      "Keyword optimization",
      "Analytics tracking",
    ],
  },
  {
    icon: "📱",
    title: "Social Media Marketing (SMM)",
    desc: "Engaging SMM campaigns that build brand presence and connect with audiences.",
    items: [
      "Ads that are made for a certain platform",
      "Finding an audience",
      "Keeping an eye on engagement",
    ],
  },
  {
    icon: "💰",
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Result-driven PPC ads that maximize ROI and capture qualified leads quickly.",
    items: [
      "Campaigns that target certain individuals",
      "The best keywords",
      "Tracking in real time",
      "Ads that emphasize on return on investment",
    ],
  },
  {
    icon: "🧠",
    title: "Artificial Intelligence",
    desc: "Cutting-edge AI services for smarter automation, innovation, and business transformation.",
    items: [
      "AI-powered chatbots",
      "Predictive analysis",
      "Data-based insights",
      "Making things automatic",
    ],
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Robust cybersecurity solutions to safeguard data, systems, and digital infrastructures.",
    items: [
      "Finding dangers",
      "Keeping data safe",
      "Risk assessment and monitoring 24 hours a day",
    ],
  },
  {
    icon: "📡",
    title: "Network Services and Solutions",
    desc: "Advanced network solutions ensuring reliable, scalable, and secure connectivity infrastructure.",
    items: [
      "Cloud-based networking",
      "Network safety",
      "Building infrastructure",
      "Getting better at what you do",
    ],
  },
  {
    icon: "🏢",
    title: "Business Solutions",
    desc: "Scalable enterprise solutions built to streamline operations and accelerate digital transformation.",
    items: [
      "Systems for ERP",
      "Apps created particularly for your company",
      "Taking care of data",
      "Working with the cloud",
    ],
  },
  {
    icon: "📊",
    title: "Data and Analysis",
    desc: "Actionable data analytics services turning raw information into valuable business insights.",
    items: [
      "Handling a lot of data",
      "Dashboards that change in real time",
      "Predictions that can be made",
      "Looking at data",
    ],
  },
  {
    icon: "👨‍💼",
    title: "Consulting",
    desc: "Expert IT consulting services to align technology with your business growth goals.",
    items: [
      "Thinking forward",
      "A plan for technology",
      "Making procedures better",
      "Always ready to assist",
    ],
  },
];

// Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 
               bg-gradient-to-r from-indigo-600 to-purple-600 
               hover:from-purple-600 hover:to-pink-600 
               text-white rounded-full p-3 shadow-lg 
               transition-all duration-300 
               focus:outline-none focus:ring-2 focus:ring-purple-400"
    onClick={onClick}
    aria-label="Next"
  >
    <ChevronRight className="h-6 w-6" />
  </button>
);

// Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="hidden md:flex absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 
               bg-gradient-to-r from-indigo-600 to-purple-600 
               hover:from-purple-600 hover:to-pink-600 
               text-white rounded-full p-3 shadow-lg 
               transition-all duration-300 
               focus:outline-none focus:ring-2 focus:ring-purple-400"
    onClick={onClick}
    aria-label="Previous"
  >
    <ChevronLeft className="h-6 w-6" />
  </button>
);

const Card = ({ icon, title, desc, items }) => (
  <div
    className="relative group rounded-2xl p-8 min-h-[380px] flex flex-col shadow-lg
               bg-gradient-to-br from-white/90 via-white/80 to-white/90 
               backdrop-blur-md overflow-hidden border border-gray-200/40
               transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
  >
    {/* Glow border effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-2xl"></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex mb-4 items-center">
        <span className="w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl shadow-md mr-3">
          {icon}
        </span>
        <span className="ml-auto flex items-center border border-gray-300 rounded-full w-10 h-10 justify-center group-hover:bg-indigo-50 transition-colors duration-300">
          <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-indigo-600 transition-colors duration-300" />
        </span>
      </div>
      <h2 className="font-bold text-lg mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
      <ul className="text-gray-700 text-[15px] pl-3 list-disc flex-grow">
        {items.map((it, idx) => (
          <li key={idx} className="my-1">
            {it}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;
  const slidesToScroll = 1;
  const settings = {
    dots: false,
    infinite: cards.length > slidesToShow,
    speed: 600,
    slidesToShow,
    slidesToScroll,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-black">
      <BestHeading title="" highlight="Services" />
      <div className="bg-black h-[75vh] flex items-center">
        <div className="max-w-[90rem] mx-auto px-6 w-full">
          <Slider {...settings}>
            {cards.map((card, idx) => (
              <div key={idx} className="px-3 py-2">
                <Card {...card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
