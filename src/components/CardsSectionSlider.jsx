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
  pauseOnHover = false,
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
        <h1
          className={`text-2xl ${headColor} text-3xl sm:text-5xl font-bold mb-4`}
        >
          {heading}
        </h1>
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
                <div className="absolute left-0 z-10 w-full py-5 flex flex-col flex-end bg-black/40 hover:bg-black/70 h-full transition-all duration-700">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
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
