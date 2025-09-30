import { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BestHeading2 from "./BestHeading2";

const Banner12 = ({ slides }) => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (_, newIndex) => setActiveSlide(newIndex),
  };

  return (
    <div className="relative overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative w-full h-[100vh] max-h-[100vh] overflow-hidden">
              {/* Desktop Image */}
              <div className="hidden sm:block w-full h-full">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 sm:bg-black/40 md:bg-black/80"></div>

              {/* Content */}
              <div className="absolute inset-0 flex mt-28 md:mt-0 md:items-center justify-center text-white px-6">
                <div className="max-w-5xl text-center">
                  <h2 className="text-6xl leading-normal font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-6 sm:mt-8 md:mt-10 px-2">
                    {slide.description}
                  </p>
                  {slide.buttonText && (
                    <button className="mt-6 sm:mt-8 bg-[#00bafa] hover:bg-[#0096c9] text-white px-6 py-3 rounded-full text-sm md:text-base transition-all">
                      {slide.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrows */}
      <button
        onClick={previous}
        className="absolute hidden md:block left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-black/50 rounded-full transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute hidden md:block right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-black/50 rounded-full transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-16 w-full flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => sliderRef.current.slickGoTo(index)}
            className={`h-[2px] sm:h-[3px] w-6 sm:w-8 md:w-10 cursor-pointer rounded-2xl transition-all duration-300 ${
              index === activeSlide ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner12;
