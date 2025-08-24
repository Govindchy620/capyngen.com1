import React from "react";
import FlipCards from "../components/FlipCards";
import { Smartphone, DollarSign, Handshake, ArrowRight } from "lucide-react"; // Import Lucide icons
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const Industries = () => {
  const cards = [
    {
      id: 1,
      front: {
        title: "VOICE-ACTIVATED DIGITAL BANKING",
        icon: <Smartphone className="w-12 h-12" />,
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Advanced voice recognition technology enables secure banking transactions through natural speech commands.",
        buttonText: "Learn More",
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-white",
      },
    },
    {
      id: 2,
      front: {
        title: "INSTANT PAYMENTS",
        icon: <DollarSign className="w-12 h-12" />,
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Ensure funds become available in five seconds or less with our Instant Payment Solution Blueprint.",
        buttonText: "Learn More",
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-white",
      },
    },
    {
      id: 3,
      front: {
        title: "SMART ONBOARDING",
        icon: <Handshake className="w-12 h-12" />,
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-black",
      },
      back: {
        title:
          "Streamlined customer onboarding with AI-powered verification and automated compliance checks.",
        buttonText: "Learn More",
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-white",
      },
    },
    {
      id: 1,
      front: {
        title: "VOICE-ACTIVATED DIGITAL BANKING",
        icon: <Smartphone className="w-12 h-12" />,
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Advanced voice recognition technology enables secure banking transactions through natural speech commands.",
        buttonText: "Learn More",
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-white",
      },
    },
    {
      id: 2,
      front: {
        title: "INSTANT PAYMENTS",
        icon: <DollarSign className="w-12 h-12" />,
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Ensure funds become available in five seconds or less with our Instant Payment Solution Blueprint.",
        buttonText: "Learn More",
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-white",
      },
    },
    {
      id: 3,
      front: {
        title: "SMART ONBOARDING",
        icon: <Handshake className="w-12 h-12" />,
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-black",
      },
      back: {
        title:
          "Streamlined customer onboarding with AI-powered verification and automated compliance checks.",
        buttonText: "Learn More",
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-white",
      },
    },
    {
      id: 1,
      front: {
        title: "VOICE-ACTIVATED DIGITAL BANKING",
        icon: <Smartphone className="w-12 h-12" />,
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Advanced voice recognition technology enables secure banking transactions through natural speech commands.",
        buttonText: "Learn More",
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-white",
      },
    },
    {
      id: 2,
      front: {
        title: "INSTANT PAYMENTS",
        icon: <DollarSign className="w-12 h-12" />,
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Ensure funds become available in five seconds or less with our Instant Payment Solution Blueprint.",
        buttonText: "Learn More",
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-white",
      },
    },
    {
      id: 3,
      front: {
        title: "SMART ONBOARDING",
        icon: <Handshake className="w-12 h-12" />,
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-black",
      },
      back: {
        title:
          "Streamlined customer onboarding with AI-powered verification and automated compliance checks.",
        buttonText: "Learn More",
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-white",
      },
    },
    {
      id: 1,
      front: {
        title: "VOICE-ACTIVATED DIGITAL BANKING",
        icon: <Smartphone className="w-12 h-12" />,
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Advanced voice recognition technology enables secure banking transactions through natural speech commands.",
        buttonText: "Learn More",
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-white",
      },
    },
    {
      id: 2,
      front: {
        title: "INSTANT PAYMENTS",
        icon: <DollarSign className="w-12 h-12" />,
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Ensure funds become available in five seconds or less with our Instant Payment Solution Blueprint.",
        buttonText: "Learn More",
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-white",
      },
    },
    {
      id: 3,
      front: {
        title: "SMART ONBOARDING",
        icon: <Handshake className="w-12 h-12" />,
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-black",
      },
      back: {
        title:
          "Streamlined customer onboarding with AI-powered verification and automated compliance checks.",
        buttonText: "Learn More",
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-white",
      },
    },
    {
      id: 1,
      front: {
        title: "VOICE-ACTIVATED DIGITAL BANKING",
        icon: <Smartphone className="w-12 h-12" />,
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Advanced voice recognition technology enables secure banking transactions through natural speech commands.",
        buttonText: "Learn More",
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        textColor: "text-white",
      },
    },
    {
      id: 2,
      front: {
        title: "INSTANT PAYMENTS",
        icon: <DollarSign className="w-12 h-12" />,
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-black",
      },
      back: {
        title:
          "Ensure funds become available in five seconds or less with our Instant Payment Solution Blueprint.",
        buttonText: "Learn More",
        gradient: "from-orange-400 via-red-500 to-red-600",
        textColor: "text-white",
      },
    },
    {
      id: 3,
      front: {
        title: "SMART ONBOARDING",
        icon: <Handshake className="w-12 h-12" />,
        gradient: "from-purple-400 via-purple-500 to-blue-500",
        textColor: "text-black",
      },
      back: {
        title:
          "Streamlined customer onboarding with AI-powered verification and automated compliance checks.",
        buttonText: "Learn More",
        gradient: "from-purple-400 via-purple-500 to-blue-500",
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
