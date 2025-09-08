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
      image: "/placeholder.svg?height=200&width=300&text=Banking",
      description:
        "Giving banks and other financial institutions safe, scalable, and cutting-edge technology solutions to help them go digital.",
      features: [
        "Best Mobile Banking App Development",
        "Updating Core Banking",
        "Safe Ways to Pay",
        "Following the rules and managing risk",
      ],
    },
  },
  {
    id: "education",
    title: "Education",
    icon: "BookOpen",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Education",
      description:
        "Changing how students learn with new technology made for schools, colleges, and the internet.",
      features: [
        "Best Technology Solutions for Education",
        "Learning Management System Development",
        "Online Classrooms and E-Learning Sites",
        "Systems for Student Information",
      ],
    },
  },
  {
    id: "capital-market",
    title: "Capital Market",
    icon: "TrendingUp",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Capital+Market",
      description:
        "Using advanced trading, analytics, and risk management tools to make capital market operations better.",
      features: [
        "Best Trading Platform Development",
        "Capital Market Software Solutions",
        "Market Analytics & Insights",
        "Secure Transaction Systems",
      ],
    },
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    icon: "FlaskRound",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Life+Sciences",
      description:
        "Using IT-driven solutions to speed up innovation in healthcare, biotechnology, and pharmaceutical research.",
      features: [
        "Clinical Data Management",
        "Research & Development",
        "Regulatory Compliance Systems",
        "Patient-Centric Solutions",
      ],
    },
  },
  {
    id: "healthcare",
    title: "Healthcare & Fitness",
    icon: "HeartPulse",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Healthcare",
      description:
        "Providing tailored health and fitness solutions for patients, providers, and wellness businesses.",
      features: [
        "Telemedicine Platforms",
        "Fitness & Wellness App Development",
        "Electronic Health Records (EHR)",
        "Wearable Integration",
      ],
    },
  },
  {
    id: "energy",
    title: "Energy, Resources & Utilities",
    icon: "BatteryCharging",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Energy",
      description:
        "Using smart IT solutions for energy, resources, and utilities to make operations and sustainability better.",
      features: [
        "Smart Grid Solutions",
        "Monitoring and analyzing energy",
        "Systems for Planning Resources",
        "Platforms for Managing Utilities",
      ],
    },
  },
  {
    id: "more-industries",
    title: "More Industries",
    icon: "Globe2",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=More+Industries",
      description:
        "Powering diverse sectors with scalable development, cloud infrastructure, and cutting-edge digital solutions.",
      features: [
        "Healthcare Tech Solutions",
        "Fintech Platforms & Security",
        "Retail & E-Commerce Innovation",
        "Smart Manufacturing Systems",
      ],
    },
  },
];

// ✅ Card
function ServiceCard({ service, isMobile = false }) {
  if (!service) return null;
  if (isMobile) {
    return (
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-4 border border-white/20">
          <div className="relative overflow-hidden rounded-2xl mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 z-10"></div>
            <img
              src={service.card.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm">{service.card.description}</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-xs">
            {service.card.features.map((f, i) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-2"></span>
                {f}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-gray-100">
            <AnimatedButton
              text="Learn More"
              onClick={() => alert("Button clicked!")}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl w-96">
        <img
          src={service.card.image || "/placeholder.svg"}
          alt={service.title}
          className="w-full h-40 object-cover rounded-t-2xl"
        />
        <div className="px-5 pb-4">
          <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.card.description}</p>
          <ul className="grid grid-cols-2 mt-4 gap-x-4 text-sm list-disc pl-4">
            {service.card.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <div className="pt-3 border-t border-gray-100">
            <AnimatedButton
              text="Learn More"
              onClick={() => alert("Button clicked!")}
            />
          </div>
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
      className="pb-10 md:pb-0"
      style={{
        backgroundImage: `url(${assets.patternBg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BestHeading title="" highlight="Industries" />
      <div className="min-h-screen text-white flex flex-col relative overflow-hidden py-14">
        {/* Desktop */}
        <div className="hidden lg:block w-full flex-1">
          <div
            ref={containerRef}
            className="relative w-full h-screen flex items-center justify-center"
          >
            {activeService && <ServiceCard service={activeService} />}
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 1000 800"
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

        {/* Mobile */}
        <div className="block lg:hidden w-full max-w-4xl mx-auto px-4">
          <div className="mb-8">
            {activeService && (
              <ServiceCard service={activeService} isMobile={true} />
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`group p-2 sm:p-6 rounded-2xl transition-all duration-300 ${
                  activeServiceId === service.id
                    ? "bg-green-500/20 border-2 border-green-500 scale-105"
                    : "bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:border-green-400"
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto ${
                    activeServiceId === service.id
                      ? "bg-green-400 shadow-2xl shadow-green-400/50"
                      : "bg-blue-500/80 group-hover:bg-green-400/80 shadow-lg"
                  }`}
                >
                  <Icon
                    name={service.icon}
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white text-center">
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
