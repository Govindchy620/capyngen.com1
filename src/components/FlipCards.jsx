"use client";
import React from "react";
import { Smartphone, DollarSign, Handshake, ArrowRight } from "lucide-react"; // Import Lucide icons

const FlipCards = () => {
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
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group perspective-1000 h-80 w-full"
          >
            {/* Outline behind the card */}
            <div className="absolute inset-0 -translate-x-3 translate-y-3 border-2 border-white pointer-events-none"></div>

            {/* Flipping card */}
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden p-6 border-2 border-white flex flex-col justify-between bg-gradient-to-br ${card.front.gradient} ${card.front.textColor}`}
              >
                <div className="flex flex-col items-start h-full">
                  {card.front.icon && (
                    <div className="mb-4">{card.front.icon}</div>
                  )}
                  <div className="flex-grow flex flex-col justify-end">
                    <h3 className="text-xl font-bold tracking-wide leading-tight mb-4">
                      {card.front.title}
                    </h3>
                  </div>
                </div>
                <div className="flex justify-end items-end">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>

              {/* Back Side */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 p-10 border-2 border-white flex flex-col justify-between bg-gradient-to-br ${card.back.gradient} ${card.back.textColor}`}
              >
                <div className="flex flex-col items-start h-full">
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-lg leading-relaxed mb-6">
                      {card.back.title}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  {card.back.buttonText && (
                    <button className="flex items-center gap-2 text-lg font-medium hover:gap-3 transition-all duration-300">
                      {card.back.buttonText}
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCards;
