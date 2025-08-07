import React, { useState, useRef, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import BestHeading from "./BestHeading";

// Add CSS animation for line drawing
const lineAnimationStyles = `
@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = lineAnimationStyles;
  if (!document.head.querySelector("style[data-line-animation]")) {
    styleSheet.setAttribute("data-line-animation", "true");
    document.head.appendChild(styleSheet);
  }
}

// Icon component for dynamic Lucide icon usage
const Icon = ({ name, ...props }) => {
  const IconComponent = LucideIcons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

// Services Data
const servicesData = [
  {
    id: "cybersecurity",
    title: "Cybersecurity And Data Protection",
    icon: "ShieldCheck",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Cybersecurity",
      description:
        "Comprehensive security solutions to protect your valuable data and systems from threats.",
      features: [
        "Threat Detection",
        "Vulnerability Assessment",
        "Incident Response",
        "Compliance Management",
      ],
    },
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions & Migration",
    icon: "Cloud",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Cloud+Solutions",
      description:
        "Seamless migration and optimization of your applications and data to the cloud.",
      features: [
        "Cloud Strategy",
        "Migration Services",
        "Cloud Optimization",
        "Hybrid Cloud Solutions",
      ],
    },
  },
  {
    id: "managed-it",
    title: "Managed IT Services",
    icon: "Laptop",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Managed+IT",
      description:
        "Proactive management and support for your IT systems, ensuring smooth operations.",
      features: [
        "24/7 Monitoring",
        "Help Desk Support",
        "System Maintenance",
        "Security Management",
      ],
    },
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Strategy",
    icon: "Settings",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=IT+Consulting",
      description:
        "Strategic guidance to align your IT initiatives with overall business objectives.",
      features: [
        "Digital Transformation",
        "IT Roadmapping",
        "Technology Adoption",
        "Risk Management",
      ],
    },
  },
  {
    id: "data-analytics",
    title: "Data & Analytics Services",
    icon: "Search",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=Data+Analytics",
      description:
        "Leverage data-driven insights to make informed decisions and drive business growth.",
      features: [
        "Data Warehousing",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Governance",
      ],
    },
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure Services",
    icon: "CloudCog",
    card: {
      image: "/placeholder.svg?height=200&width=300&text=IT+Infrastructure",
      description:
        "Optimize performance and scalability with robust IT infrastructure services tailored.",
      features: [
        "Scalable Infrastructure",
        "Network Optimization",
        "Cloud Integration",
        "Business Continuity",
      ],
    },
  },
];

// Service card component
function ServiceCard({ service, isMobile = false }) {
  if (!service) return null;

  if (isMobile) {
    // Mobile version - relative positioning
    return (
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-4 border border-white/20 transition-all duration-500 hover:shadow-3xl">
          {/* Card header with gradient */}
          <div className="relative overflow-hidden rounded-2xl mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 z-10"></div>
            <img
              src={service.card.image || "/placeholder.svg"}
              alt={`${service.title} service`}
              className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Card content */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.card.description}
              </p>
            </div>

            {/* Features with enhanced styling */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {service.card.features.map((feature, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-700 text-xs font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
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

  // Desktop version - absolute positioning
  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-4 w-90 border border-white/20 transition-all duration-500 hover:shadow-3xl">
        {/* Card header with gradient */}
        <div className="relative overflow-hidden rounded-2xl mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 z-10"></div>
          <img
            src={service.card.image || "/placeholder.svg"}
            alt={`${service.title} service`}
            className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Card content */}
        <div className="space-y-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.card.description}
            </p>
          </div>

          {/* Features with enhanced styling */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {service.card.features.map((feature, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                  <span className="text-gray-700 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-4 border-t border-gray-100">
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

// Service node component
function ServiceNode({ service, isActive, onClick, position, index }) {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30 group"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <button
        type="button"
        className="cursor-pointer transition-all duration-300"
        onClick={() => onClick(service.id)}
      >
        {/* Node circle */}
        <div
          className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive
              ? "bg-green-400 shadow-2xl shadow-green-400/50 scale-110"
              : "bg-blue-500/80 hover:bg-green-400/80 shadow-lg"
          }`}
        >
          <Icon name={service.icon} className="w-6 h-6 text-white" />

          {/* Pulse animation for active node */}
          {isActive && (
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>
          )}
        </div>
      </button>

      {/* Service label positioned to the right */}
      <div
        className={`absolute left-20 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-75"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 whitespace-nowrap">
          <span className="text-white text-sm font-semibold">
            {service.title}
          </span>
        </div>
      </div>
    </div>
  );
}

// Main component
export default function HomeServices() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[3].id);
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const calculatePositions = () => {
      if (pathRef.current && containerRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        const containerRect = containerRef.current.getBoundingClientRect();
        const svg = pathRef.current.ownerSVGElement;
        const svgRect = svg.getBoundingClientRect();

        // Calculate positions along the path
        const newPositions = servicesData.map((_, index) => {
          const t = index / (servicesData.length - 1);
          const point = pathRef.current.getPointAtLength(t * pathLength);

          // Create SVG point and transform to screen coordinates
          const svgPoint = svg.createSVGPoint();
          svgPoint.x = point.x;
          svgPoint.y = point.y;

          // Transform from SVG coordinate system to screen coordinates
          const screenPoint = svgPoint.matrixTransform(svg.getScreenCTM());

          // Convert screen coordinates to container-relative coordinates
          const containerX = screenPoint.x - containerRect.left;
          const containerY = screenPoint.y - containerRect.top;

          return {
            x: containerX,
            y: containerY,
          };
        });

        setPositions(newPositions);
      }
    };

    // Intersection Observer for viewport detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Add a small delay to ensure proper rendering
    const timer = setTimeout(calculatePositions, 100);
    calculatePositions();
    window.addEventListener("resize", calculatePositions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePositions);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const activeService = servicesData.find((s) => s.id === activeServiceId);
  const activeServiceIndex = servicesData.findIndex(
    (s) => s.id === activeServiceId
  );
  const activePosition = positions[activeServiceIndex];

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const pathLength = path.getTotalLength();

      // Set the stroke-dasharray to the path length
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;

      if (isInViewport) {
        // Trigger the animation
        path.style.animation = `drawLine 2s ease-in-out forwards`;
      }
    }
  }, [isInViewport]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white flex flex-col relative overflow-hidden">
      {/* Section Header */}
      <BestHeading title="" highlight="Industries" />
      <div className="text-center pb-8 lg:pb-12 px-4">
        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
          Smart IT Services to Elevate Your Business Success.
        </h1>

        {/* Subheading */}
        <p className="text-lg font-semibold text-[#eaeaea] md:w-2/3 mx-auto">
          Smart IT services designed to elevate your business, enhance
          efficiency, and ensure long-term growth. Leverage cutting-edge
          technology tailored to meet your unique needs and goals.
        </p>
      </div>

      {/* Desktop Version - Curved line with nodes */}
      <div className="hidden lg:block w-full flex-1">
        <div
          ref={containerRef}
          className="relative w-full h-screen flex items-center justify-center z-10"
        >
          {/* Service card centered */}
          {activeService && <ServiceCard service={activeService} />}

          {/* SVG path with animation */}
          <svg
            className="absolute w-full h-full z-10"
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
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-lg"
              style={{
                filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
                strokeDasharray: isInViewport ? undefined : "2000 2000",
                strokeDashoffset: isInViewport ? undefined : "2000",
              }}
            />
          </svg>

          {/* Service nodes */}
          {positions.length > 0 &&
            servicesData.map((service, index) => (
              <ServiceNode
                key={service.id}
                service={service}
                isActive={activeServiceId === service.id}
                onClick={setActiveServiceId}
                position={positions[index]}
                index={index}
              />
            ))}
        </div>
      </div>

      {/* Mobile/Tablet Version - 2 Column Grid */}
      <div className="block lg:hidden w-full max-w-4xl mx-auto px-4">
        {/* Service card at top */}
        <div className="mb-8">
          {activeService && (
            <ServiceCard service={activeService} isMobile={true} />
          )}
        </div>

        {/* Service nodes in 2-column grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {servicesData.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveServiceId(service.id)}
              className={`group p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                activeServiceId === service.id
                  ? "bg-green-500/20 border-2 border-green-500 scale-105"
                  : "bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:border-green-400"
              }`}
            >
              {/* Service Icon */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
                  activeServiceId === service.id
                    ? "bg-green-400 shadow-2xl shadow-green-400/50"
                    : "bg-blue-500/80 group-hover:bg-green-400/80 shadow-lg"
                }`}
              >
                <Icon
                  name={service.icon}
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                />

                {/* Pulse animation for active */}
                {activeServiceId === service.id && (
                  <div className="absolute inset-0 rounded-2xl bg-green-400 animate-ping opacity-20"></div>
                )}
              </div>

              {/* Service Title */}
              <h3 className="text-sm sm:text-base font-bold text-white text-center leading-tight">
                {service.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
