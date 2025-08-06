import React, { useState, useRef, useEffect } from "react";
import * as LucideIcons from "lucide-react";

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

// Custom Card components
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-xl shadow-lg border border-gray-200 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

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
function ServiceCard({ service }) {
  if (!service) return null;

  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-4 w-90 h-126 border border-white/20 transition-all duration-500 hover:shadow-3xl hover:scale-105">
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
            <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
            </button>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Interactive services section - Full screen */}
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
  );
}
