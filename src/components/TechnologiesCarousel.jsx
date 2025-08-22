import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

// Example tech stack (replace logos with your assets)
const technologies = [
  { name: "JavaScript", logo: assets.js },
  { name: "Python", logo: assets.python },
  { name: "CSS3", logo: assets.css3 },
  { name: "C++", logo: assets.cplusplus },
  { name: "PHP", logo: assets.php },
  { name: "React", logo: assets.react },
  { name: "Vue.js", logo: assets.vuejs },
  { name: "AngularJS", logo: assets.angular },
  { name: "JQuery", logo: assets.jquery },
  { name: "Next.js", logo: assets.nextjs },
  { name: "MongoDB", logo: assets.mongodb },
  { name: "MySQL", logo: assets.mysql },
  { name: "PostgreSQL", logo: assets.postgresql },
  { name: "Node.js", logo: assets.nodejs },
  { name: "Laravel", logo: assets.laravel },
  { name: "Express.js", logo: assets.expressjs },
  { name: "Azure", logo: assets.azure },
  { name: "AWS", logo: assets.aws },
  { name: "Google Cloud", logo: assets.googlecloud },
];

const TechnologiesCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000, // smooth movement
    slidesToShow: 7,
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
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Web Development Technologies We Use
        </h1>
        <p className="mt-4 max-w-2xl text-lg mx-auto text-gray-300">
          We create impactful digital experiences that help businesses grow. Our
          team blends creativity, strategy, and technology to craft innovative
          and user-friendly solutions.
        </p>

        <Slider {...settings}>
          {technologies.map((tech, i) => (
            <div key={i} className="px-6 mt-10">
              <div className="flex flex-col items-center justify-center bg-white rounded-sm overflow-hidden">
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
