import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as LucideIcons from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import BestHeading from "./BestHeading";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

// ✅ Dynamic icon
const Icon = ({ name, ...props }) => {
  const IconComponent = LucideIcons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

// ✅ Data

const servicesData = [
  {
    id: "banking",
    title: "Banking",
    icon: "ShieldCheck",
    card: {
      image: assets.homepageBanking,
      description:
        "Enabling financial institutions to have scalable, secure, and state-of-the-art digital solutions.",
      features: [
        "Mobile Banking Applications.",
        "Upgraded Core Banking",
        "Secure Payment Systems",
      ],
    },
  },
  {
    id: "education",
    title: "Education",
    icon: "BookOpen",
    card: {
      image: assets.homepageEducation,
      description:
        "Digitising learning in schools, colleges and online with a high-level digital solution.",
      features: [
        "Learning Technology Solutions.",
        "Learning Management Systems.",
        "Online Classrooms and E-Learning.",
        "Student Information Systems",
      ],
    },
  },
  {
    id: "capital-market",
    title: "Capital Market",
    icon: "TrendingUp",
    card: {
      image: assets.capitalMarket1,
      description:
        "Operating smarter and safer capital market operations based on credible IT solutions.",
      features: [
        "The Development of Trading Platform.",
        "Capital Market Software",
        "Market Analytics",
        "Secure Transactions",
      ],
    },
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    icon: "FlaskRound",
    card: {
      image: assets.homepageLifeScience,
      description:
        "Developing IT-based healthcare, biotech and pharma innovation.",
      features: [
        "Clinical Data Management",
        "Research &amp; Development",
        "Regulatory Compliance",
        "Patient-Centric Systems",
      ],
    },
  },
  {
    id: "healthcare",
    title: "Healthcare and fitness",
    icon: "HeartPulse",
    card: {
      image: assets.homepageHealth,
      description:
        "Providing customized digital services to patients, providers, and wellness enterprises.",
      features: [
        "Telemedicine Platforms",
        "Fitness &amp; Wellness Apps",
        "Electronic Health Records",
        "Integration of Wearable Devices.",
      ],
    },
  },
  {
    id: "energy",
    title: "Energy and Utilities",
    icon: "BatteryCharging",
    card: {
      image: assets.homepageEnergy,
      description:
        "Creating efficiency and sustainability in the energy and utilities industry.",
      features: [
        "Smart Grid Solutions",
        "Monitoring and analytics of the energy.",
        "Resource Planning Systems",
        "Utility Management Platforms",
      ],
    },
  },
  {
    id: "more-industries",
    title: "More Industries",
    icon: "Globe2",
    card: {
      image: assets.homepageIndustries,
      description:
        "Driving scalable IT, cloud and digital innovations across different sectors.",
      features: [
        "Healthcare Tech Solutions",
        "Fintech Platforms &amp; Security",
        "Retail &amp; E-Commerce",
        "Smart Manufacturing",
      ],
    },
  },
];

// ✅ Card
function ServiceCard({ service, isMobile = false }) {
  if (!service) return null;

  return (
    <div
      className={`relative ${
        isMobile ? "w-full max-w-sm mx-auto" : "w-72 h-100 mx-auto"
      }`}
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-400/20 via-blue-500/10 to-purple-500/20 blur-3xl opacity-70 animate-pulse"></div>

      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-green-400/30">
        {/* Image */}
        <div className="relative overflow-hidden group">
          <img
            src={service.card.image || "/placeholder.svg"}
            alt={service.title}
            className={`w-full ${
              isMobile ? "h-32" : "h-40"
            } object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60 opacity-70"></div>
          <div className="absolute bottom-3 left-4 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-green-400 to-blue-500 shadow-lg">
              <Icon name={service.icon} className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xl sm:text-xl font-extrabold text-white drop-shadow-lg">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="px-2 py-2">
          <p className="text-gray-100/90 text-sm sm:text-sm">
            {service.card.description}
          </p>

          {/* Features */}
          <ul className="mt-2 space-y-1">
            {service.card.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-gray-200 text-sm sm:text-sm group"
              >
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 group-hover:from-purple-400 group-hover:to-pink-500 transition-all"></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ✅ Node
function ServiceNode({ service, isActive, onClick, position }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <button onClick={() => onClick(service.id)}>
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive
              ? "bg-green-400 shadow-2xl shadow-green-400/90 scale-110"
              : "bg-blue-500/80 hover:bg-green-400/80 shadow-lg"
          }`}
        >
          <Icon
            name={service.icon}
            className={`w-6 h-6 ${isActive ? "text-black" : "text-white"}`}
          />
        </div>
      </button>
    </div>
  );
}

// ✅ Main
export default function HomeServices() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useLayoutEffect(() => {
    if (window.innerWidth < 1024) return; // ❌ Skip GSAP setup on mobile

    if (!pathRef.current || !sectionRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(path, { strokeDashoffset: 0, ease: "none", duration: 1 });

    const st = tl.scrollTrigger;
    const setCardByProgress = (progress) => {
      const idx = Math.round(progress * (servicesData.length - 1));
      setActiveServiceId(servicesData[idx].id);
    };
    if (st && st.animation) {
      st.animation.eventCallback("onUpdate", () =>
        setCardByProgress(st.progress)
      );
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) return; // ❌ Skip position calculation on mobile
    if (!pathRef.current || !containerRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();
    const containerRect = containerRef.current.getBoundingClientRect();
    const svg = path.ownerSVGElement;
    const svgRect = svg.getBoundingClientRect();

    const calculatePositions = () => {
      const newPositions = servicesData.map((_, index) => {
        const t = index / (servicesData.length - 1);
        const point = path.getPointAtLength(t * pathLength);
        const svgPoint = svg.createSVGPoint();
        svgPoint.x = point.x;
        svgPoint.y = point.y;
        const screenPoint = svgPoint.matrixTransform(svg.getScreenCTM());
        return {
          x: screenPoint.x - containerRect.left,
          y: screenPoint.y - containerRect.top,
        };
      });
      setPositions(newPositions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  const activeService = servicesData.find((s) => s.id === activeServiceId);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col bg-cover bg-center"
    >
      <BestHeading title="" highlight="Industries" />
      <div className="flex-1 w-full flex flex-col relative">
        {/* Desktop / Large Screens */}
        <div className="hidden lg:flex w-full h-full items-center justify-center px-4">
          <div
            ref={containerRef}
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto flex items-center justify-center"
          >
            {/* Center card */}
            <div className="absolute inset-0 flex items-center justify-center">
              {activeService && (
                <div className="flex items-center justify-center h-full px-4">
                  <ServiceCard service={activeService} />
                </div>
              )}
            </div>

            {/* Path */}
            <svg
              className="absolute w-full h-full max-w-6xl max-h-[85vh]"
              viewBox="50 0 800 800"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="pathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path
                ref={pathRef}
                d="M 1000 100 A 600 600 0 0 1 200 700"
                stroke="url(#pathGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Service Nodes */}
            {positions.length > 0 &&
              servicesData.map((service, index) => (
                <ServiceNode
                  key={service.id}
                  service={service}
                  isActive={activeServiceId === service.id}
                  onClick={setActiveServiceId}
                  position={positions[index]}
                />
              ))}
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="block lg:hidden w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="mb-8">
            {activeService && (
              <ServiceCard service={activeService} isMobile={true} />
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`group p-3 sm:p-5 md:p-6 rounded-2xl transition-all duration-300 ${
                  activeServiceId === service.id
                    ? "bg-green-500/20 border-2 border-green-500 scale-105"
                    : "bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:border-green-400"
                }`}
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto ${
                    activeServiceId === service.id
                      ? "bg-green-400 shadow-2xl shadow-green-400/50"
                      : "bg-blue-500/80 group-hover:bg-green-400/80 shadow-lg"
                  }`}
                >
                  <Icon
                    name={service.icon}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                  />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white text-center">
                  {service.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
