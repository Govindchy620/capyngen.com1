import React, { useState } from "react";

export default function Banner11() {
  const cards = [
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-1.jpg",
      alt: "Christmas background 3D cartoon",
      text: "Create compelling content now",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-2.jpg",
      alt: "A beautiful glowing flower",
      text: "Design stunning visuals effortlessly",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-3.jpg",
      alt: "A magical leopard",
      text: "Edit with ready-made templates",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-4.jpg",
      alt: "A female 3D cartoon holding a wrapped gift box",
      text: "Explore your custom creations",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black px-6 py-20 grid place-items-center">
      <div className="w-full max-w-7xl">
        <div className="grid gap-12 place-items-center text-center">
          {/* Header */}
          <header className="grid gap-6 place-items-center">
            <hgroup className="grid gap-2">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
                The ultimate AI tool. Just imagine.
              </h1>
              <p className="text-lg text-white">
                Create stunning text and images effortlessly with Ocean AI.
                Dream it. Create it. Easy.
              </p>
            </hgroup>
            <div className="w-full max-w-md my-5">
              <a
                href="#"
                className="px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition text-nowrap"
              >
                Start your 30-day free trial
              </a>
            </div>
          </header>

          {/* Cards */}
          <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 w-full">
            {cards.map((card, idx) => (
              <li key={idx} className="group">
                <div className="w-full h-full p-3 bg-white/80 backdrop-blur-md border border-white rounded-xl shadow hover:shadow-lg transition grid text-left">
                  <figure className="grid gap-3">
                    <div className="rounded-lg overflow-hidden h-44 bg-gradient-to-br from-indigo-200 to-indigo-50">
                      <img
                        src={card.img}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <figcaption className="font-semibold text-gray-900">
                      {card.text}
                    </figcaption>
                  </figure>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
