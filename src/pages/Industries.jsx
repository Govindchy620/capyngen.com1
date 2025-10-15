import React from "react";
import FlipCards from "../components/FlipCards";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const Industries = () => {
  const cards = [
    {
      id: 1,
      link: "/industries/banking",
      front: {
        title: "Banking",
        image: assets.banking,
        textColor: "text-white",
      },
      back: {
        title:
          "Digitally transform banking with security, seamless transactions, and personalized customer experiences.",
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
          "Empower education through AI-driven tutoring, virtual classrooms, and accessible digital learning tools.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 3,
      link: "/industries/capital-market",
      front: {
        title: "Capital Market",
        image: assets.capitalMarket1,
        textColor: "text-white",
      },
      back: {
        title:
          "Enhance capital markets with advanced analytics, automated trading systems, and secure digital platforms.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 4,
      link: "/industries/life-science",
      front: {
        title: "Life Science",
        image: assets.lifeScience1,
        textColor: "text-white",
      },
      back: {
        title:
          "Accelerate biotech and pharma innovations leveraging AI, big data, and IoT-driven research.",
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
          "Deliver smart healthcare and fitness solutions through telemedicine and AI-powered wellness monitoring.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 6,
      link: "/industries/energy-resources-utilities",
      front: {
        title: "Energy, Resources & Utilities",
        image: assets.energyResourcesBanner1,
        textColor: "text-white",
      },
      back: {
        title:
          "Boost energy efficiency and sustainability with smart grids, renewable technology, and IoT integration.",
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
          "Implement Industry 4.0 with automation, robotics, and connected automotive technologies.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 8,
      link: "/industries/public-service",
      front: {
        title: "Public Service",
        image: assets.publicService1,
        textColor: "text-white",
      },
      back: {
        title:
          "Revolutionize public services with transparent, citizen-centric digital governance solutions.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 9,
      link: "/industries/e-commerce",
      front: {
        title: "E-Commerce",
        image: assets.eCommerceSolution,
        textColor: "text-white",
      },
      back: {
        title:
          "Deliver personalized online shopping experiences powered by AI-driven recommendations and secure payments.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 10,
      link: "/industries/high-tech",
      front: {
        title: "High Tech",
        image: assets.highTech10,
        textColor: "text-white",
      },
      back: {
        title:
          "Craft innovative AI, IoT, blockchain, and cloud-based solutions for tomorrow’s technologies.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 11,
      link: "/industries/travel-logistics",
      front: {
        title: "Travel & Logistics",
        image: assets.travel11,
        textColor: "text-white",
      },
      back: {
        title:
          "Build smart mobility and logistics platforms optimizing global travel and supply chain operations.",
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
          "Transform distribution channels with digitized supply chains and consumer-first engagement strategies.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 13,
      link: "/industries/insurance",
      front: {
        title: "Insurance",
        image: assets.insurance14,
        textColor: "text-white",
      },
      back: {
        title:
          "Innovate insurance with AI-driven risk assessment, automation, and predictive analytics.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 14,
      link: "/industries/communication-media-it",
      front: {
        title: "Communication, Media & IT",
        image: assets.communicationMediaBanner2,
        textColor: "text-white",
      },
      back: {
        title:
          "Deliver cutting-edge media, telecom, and IT solutions for seamless connectivity worldwide.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 15,
      link: "/industries/real-estate",
      front: {
        title: "Real Estate",
        image: assets.realEstate1,
        textColor: "text-white",
      },
      back: {
        title:
          "Simplify property management, investments, and transactions with smart real estate technology.",
        buttonText: "Learn More",
        textColor: "text-white",
      },
    },
    {
      id: 16,
      link: "/industries/gaming",
      front: {
        title: "Gaming",
        image: assets.gaming4,
        textColor: "text-white",
      },
      back: {
        title:
          "Create immersive AR/VR and multiplayer gaming experiences powered by cloud technology.",
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
        backgroundImage={assets.industriesBanner}
        description="Unlock the Power of Web Presence with our Professional Website Designing Service! Elevate Your Online Presence with Stunning Website Designs."
      />
      <FlipCards cards={cards} />
    </div>
  );
};

export default Industries;
