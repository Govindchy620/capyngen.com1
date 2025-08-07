"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";
import BestHeading from "./BestHeading";

const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    title: "Web Developer At ThemeXriver",
    companyLogo: assets.testimonial2,
    companyName: "Europa",
    rating: 5,
    quote:
      "Their team transformed our outdated systems into a fast, secure infrastructure. We've never felt more confident in our IT setup.",
  },
  {
    id: 2,
    name: "Emma Markson",
    title: "Web Developer At ThemeXriver",
    companyLogo: assets.testimonial3,
    companyName: "EasyTax",
    rating: 4,
    quote:
      "Their team transformed our outdated systems into a fast, secure infrastructure. We've never felt more confident in our IT setup.",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    title: "IT Lead, Financial Services",
    companyLogo: assets.testimonial4,
    companyName: "CreativeFlow",
    rating: 5,
    quote:
      "Their team transformed our outdated systems into a fast, secure infrastructure. We’ve never felt more confident in our IT setup.",
  },
  {
    id: 4,
    name: "Kristin Watson",
    title: "Manager, Logistics Company",
    companyLogo: assets.testimonial5,
    companyName: "InnovateCo",
    rating: 5,
    quote:
      "Their team transformed our outdated systems into a fast, secure infrastructure. We’ve never felt more confident in our IT setup.",
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <Star
          key={i}
          className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1"
        />
      );
    } else {
      stars.push(
        <Star key={i} className="h-5 w-5 text-yellow-400" fill="none" />
      );
    }
  }
  return <div className="flex">{stars}</div>;
};

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute bottom-0 left-0 z-10 p-3 border border-white rounded-md hover:bg-white hover:text-[#0A1940] transition-colors duration-200"
    aria-label="Previous slide"
  >
    <ChevronLeft className="h-6 w-6" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute bottom-0 right-0 z-10 p-3 border border-white rounded-md hover:bg-white hover:text-[#0A1940] transition-colors duration-200"
    aria-label="Next slide"
  >
    <ChevronRight className="h-6 w-6" />
  </button>
);

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <section className="w-full bg-[#0A1940] text-white">
      <BestHeading title="" highlight="Testimonials" />
      <div className="container max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-2/5 justify-center space-y-8 px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 leading-tight">
            See What Our Customer Say About Us.
          </h1>
          <div className="relative w-full max-w-md sm:max-w-lg mx-auto lg:mx-0">
            <img
              src={assets.testimonial1}
              alt="Customer Testimonial"
              className="rounded-lg object-cover w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A1940] to-transparent p-6 pt-12 rounded-b-lg">
              <p className="text-6xl sm:text-7xl md:text-8xl font-bold mb-2">
                4.9
              </p>
              <p className="text-xl sm:text-2xl text-white/80">
                Clutch average based on 92+ reviews. All chances are you'll be
                impressed too.
              </p>
              <div className="flex items-center justify-between mt-6 text-white">
                <div className="relative w-full h-12">
                  <CustomPrevArrow
                    onClick={() => sliderRef.current?.slickPrev()}
                  />
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 text-lg font-medium">
                    {currentSlide + 1} / {testimonials.length}
                  </span>
                  <CustomNextArrow
                    onClick={() => sliderRef.current?.slickNext()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="relative flex items-center justify-center py-12 w-full lg:w-3/5 px-4 sm:px-6">
          <div className="w-full max-w-4xl">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-2">
                  <div className="bg-[#0A3492] rounded-xl p-6 sm:p-10 lg:p-15 relative overflow-hidden flex flex-col justify-between min-h-[450px] sm:min-h-[500px]">
                    <div className="flex items-center mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-md text-white/90">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.companyLogo || "/placeholder.svg"}
                        width={120}
                        height={50}
                        alt={testimonial.companyName}
                        className="object-contain mr-2"
                      />
                    </div>
                    <StarRating rating={testimonial.rating} />
                    <p className="text-base sm:text-lg lg:text-xl mt-4 text-white/90 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex justify-end">
                      <i className="fa-solid fa-quote-right text-7xl text-white/20"></i>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
