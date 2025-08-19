import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

// Example tech stack (replace logos with your assets)
const technologies = [
  { name: "JavaScript", logo: assets.capyngenFavIcon },
  { name: "Python", logo: "/logos/python.png" },
  { name: "CSS3", logo: "/logos/css3.png" },
  { name: "C++", logo: "/logos/cpp.png" },
  { name: "Swift", logo: "/logos/swift.png" },
  { name: "PHP", logo: "/logos/php.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Vue.js", logo: "/logos/react.png" },
  { name: "AngularJS", logo: "/logos/react.png" },
  { name: "JQuery", logo: "/logos/react.png" },
  { name: "Next.js", logo: "/logos/react.png" },
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "MySQL", logo: "/logos/mongodb.png" },
  { name: "PostgreSQL", logo: "/logos/mongodb.png" },
  { name: "Node.js", logo: "/logos/node.png" },
  { name: "Laravel", logo: "/logos/node.png" },
  { name: "Express.js", logo: "/logos/node.png" },
  { name: "Azure", logo: "/logos/node.png" },
  { name: "AWS", logo: "/logos/node.png" },
  { name: "Google Cloud", logo: "/logos/mongodb.png" },
];

const TechnologiesCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000, // smooth movement
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // continuous scroll
    cssEase: "linear", // no pause in scroll
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500">
          Web Development Technologies We Use
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
          We create impactful digital experiences that help businesses grow. Our
          team blends creativity, strategy, and technology to craft innovative
          and user-friendly solutions.
        </p>

        <Slider {...settings}>
          {technologies.map((tech, i) => (
            <div key={i} className="px-6">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <p className="text-blue-400 font-medium">{tech.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;
