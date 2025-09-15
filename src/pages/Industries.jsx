import React from "react";
import FlipCards from "../components/FlipCards";
import {
  Banknote,
  GraduationCap,
  LineChart,
  FlaskConical,
  HeartPulse,
  Factory,
  Building,
  ShoppingCart,
  Cpu,
  Plane,
  Package,
  Shield,
  Radio,
  Home,
  Gamepad2,
} from "lucide-react"; // picked relevant icons
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const Industries = () => {
  const cards = [
    {
      id: 1,
      link: "/industries/banking",
      front: {
        title: "Banking",
        image: assets.banking, // full background image
        textColor: "text-white",
      },
      back: {
        title:
          "Transform traditional banking with digital-first, secure, and customer-focused solutions.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 2,
      link: "/industries/education",
      front: {
        title: "Education",
        image: assets.education,
        textColor: "text-white",
      },
      back: {
        title:
          "Revolutionize learning with digital classrooms, AI tutoring, and accessible education tech.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 3,
      link: "/industries/capital-market",
      front: {
        title: "Capital Market",
        image: assets.capitalMarket,
        textColor: "text-white",
      },
      back: {
        title:
          "Empowering trading platforms with analytics, automation, and secure transactions.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 4,
      link: "/industries/life-science",
      front: {
        title: "Life Science",
        image: assets.lifeScience,
        textColor: "text-white",
      },
      back: {
        title:
          "Innovating research, biotech, and pharma with AI, big data, and IoT solutions.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 5,
      link: "/industries/healthcare-fitness",
      front: {
        title: "Healthcare & Fitness",
        image: assets.healthcare,
        textColor: "text-white",
      },
      back: {
        title:
          "Smart healthcare systems, telemedicine, and fitness solutions to enhance wellness.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 6,
      link: "/industries/energy-resources-utilities",
      front: {
        title: "Energy, Resources & Utilities",
        image: assets.energy,
        textColor: "text-white",
      },
      back: {
        title:
          "Drive sustainability and efficiency with smart grids, renewable tech, and IoT.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 7,
      link: "/industries/manufacturing",
      front: {
        title: "Manufacturing & Automotive",
        image: assets.manufacturing,
        textColor: "text-white",
      },
      back: {
        title:
          "Industry 4.0 solutions for automation, robotics, and connected automotive tech.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 8,
      link: "/industries/public-service",
      front: {
        title: "Public Service",
        image: assets.publicService,
        textColor: "text-white",
      },
      back: {
        title:
          "Smart governance solutions for efficient, transparent, and citizen-focused services.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 9,
      link: "/industries/e-commerce",
      front: {
        title: "E-Commerce",
        image: assets.ecommerce,
        textColor: "text-white",
      },
      back: {
        title:
          "Seamless online shopping experiences with AI-driven personalization and payments.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 10,
      link: "/industries/high-tech",
      front: {
        title: "High Tech",
        image: assets.highTech,
        textColor: "text-white",
      },
      back: {
        title:
          "Building future-ready solutions with AI, IoT, blockchain, and cloud innovation.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 11,
      link: "/industries/travel-logistics",
      front: {
        title: "Travel & Logistics",
        image: assets.travel,
        textColor: "text-white",
      },
      back: {
        title:
          "Smart mobility, logistics, and booking solutions for global connectivity.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 12,
      link: "/industries/cpg-distribution",
      front: {
        title: "Consumer Packaged Goods & Distribution",
        image: assets.cpg,
        textColor: "text-white",
      },
      back: {
        title:
          "Reinventing supply chains with digital distribution and consumer-first strategies.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 13,
      link: "/industries/insurance",
      front: {
        title: "Insurance",
        image: assets.insurance,
        textColor: "text-white",
      },
      back: {
        title:
          "Digital insurance solutions powered by AI, predictive analytics, and automation.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 14,
      link: "/industries/communication-media-it",
      front: {
        title: "Communication, Media & IT",
        image: assets.communication,
        textColor: "text-white",
      },
      back: {
        title:
          "Innovations in media, telecom, and IT services to keep the world connected.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 15,
      link: "/industries/real-estate",
      front: {
        title: "Real Estate",
        image: assets.realEstate,
        textColor: "text-white",
      },
      back: {
        title:
          "Smart property management, real estate platforms, and investment tech.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 16,
      link: "/industries/gaming",
      front: {
        title: "Gaming",
        image: assets.gaming,
        textColor: "text-white",
      },
      back: {
        title:
          "Next-gen gaming with immersive AR/VR, multiplayer, and cloud-based experiences.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
  ];

  return (
    <div>
      <Banner
        title="Industries"
        overlayBg="bg-black/70"
        backgroundImage={assets.bg1}
        description="Unlock the Power of Web Presence with our Professional Website Designing Service! Elevate Your Online Presence with Stunning Website Designs."
      />
      <FlipCards cards={cards} />
    </div>
  );
};

export default Industries;
