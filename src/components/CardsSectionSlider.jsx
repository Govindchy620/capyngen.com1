"use client";

import Slider from "react-slick";

const CardsSectionSlider = ({
  heading = "Dynamic Slider Heading",
  subheading = "",
  services = [],
  headColor = "text-black",
  sectionBg = "bg-white",
  textColor = "text-gray-900",
  autoplay = true,
  autoplaySpeed = 3000,
  slidesToShow = 4,
  speed = 500,
  pauseOnHover = true,
  responsive = [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed,
    pauseOnHover,
    responsive,
  };

  return (
    <section className={`py-16 px-6 md:px-12 ${sectionBg}`}>
      <div className={`max-w-6xl mx-auto text-center`}>
        {/* Dynamic Heading */}
        <h2 className={`text-2xl ${headColor} md:text-3xl font-bold mb-4`}>
          {heading}
        </h2>
        <p className={`mb-12 max-w-3xl mx-auto ${headColor}`}>{subheading}</p>

        {/* Slider */}
        <Slider {...settings}>
          {services.map((item, index) => (
            <div key={index} className="px-2 group overflow-hidden">
              <div
                className={`relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[60vh] flex flex-col justify-between overflow-hidden rounded-lg ${
                  item.textColor || "text-white"
                }`}
              >
                {/* Content */}
                <div className="absolute top-3 sm:top-4 lg:top-6 xl:top-8 left-3 sm:left-4 lg:left-5 z-10 max-w-[80%]">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Background Image */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full group-hover:scale-110 duration-700 object-cover transition-all"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CardsSectionSlider;
