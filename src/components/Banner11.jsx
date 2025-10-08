import React from "react";
import PropTypes from "prop-types";

export default function Banner11({
  heading = "Digital Marketing Services to Grow Your Business",
  highlight = "Digital Marketing Services",
  description = `In the current whirlwind digital environment, the importance of visibility cannot be overstated. Through digital marketing, your brand can connect with the appropriate target market, on time, using the most suitable communication, thus increasing your business with tangible results.`,
  cards = [],
  bgColor = "bg-black",
  textColor = "text-white",
}) {
  return (
    <section
      className={`relative min-h-screen ${bgColor} px-6 pt-24 py-20 grid place-items-center`}
    >
      <div className="w-full max-w-7xl">
        <div className="grid gap-12 place-items-center text-center">
          {/* Header */}
          <header className="grid gap-6 place-items-center">
            <hgroup className="grid gap-2">
              <h1
                className={`text-3xl md:text-5xl font-bold ${textColor} mb-5`}
              >
                <span className="text-blue-600">{highlight}</span>{" "}
                {heading.replace(highlight, "").trim()}
              </h1>
              <p
                className={`text-lg max-w-5xl mx-auto ${textColor} text-opacity-90`}
              >
                {description}
              </p>
            </hgroup>
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
                        alt={card.alt || card.text}
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

Banner11.propTypes = {
  heading: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      alt: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ),
};
