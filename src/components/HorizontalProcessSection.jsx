import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BestHeading from "./BestHeading";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const HorizontalProcessSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [pinReadyKey, setPinReadyKey] = useState(null);

  const processSteps = [
    {
      id: 1,
      title: "Goal Setting & Strategy",
      description:
        "We start by establishing business objectives and identifying key performance indicators (KPIs) that are consistent with your vision. Such a plan will make sure that every digital marketing service will have a measurable positive effect.",
      image: assets.workProcess1,
    },
    {
      id: 2,
      title: "Audience Research & Insights",
      description:
        "We dig into the numbers to find the best customers for your company. By discovering their needs and wants, we can develop products that will attract their attention and keep them engaged.",
      image: assets.workProcess2,
    },
    {
      id: 3,
      title: "Data-Driven Performance",
      description:
        "Every act we perform is followed up with the latest data that we have. As we spot patterns and opportunities, we adjust our strategy to make sure that your SEO, social media & marketing efforts will give you the greatest possible return on your investment.",
      image: assets.workProcess3,
    },
    {
      id: 4,
      title: "Execution & Continuous Optimization",
      description:
        "We are very careful about implementing our programs from the step of the takeoff to that of the landing. Our team is constantly working on the smallest parts of the programs, thus ensuring that your IT services and digital marketing will be long-term profitable.",
      image: assets.workProcess4,
    },
    {
      id: 5,
      title: "Reporting & Transparent Communication",
      description:
        "We make accessible reports and keep you posted at each step, thus enabling full understanding of and quantifiable outcomes from your IT consulting services and custom software development initiatives.",
      image: assets.workProcess5,
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    let scrollTriggerInstance, horizontalScrollTween;

    const calculateScrollDistance = () => {
      const viewportWidth = window.innerWidth;
      const cards = container.querySelectorAll(".process-card");
      const lastCard = cards[cards.length - 1];
      const lastCardRightEdge = lastCard
        ? lastCard.offsetLeft + lastCard.offsetWidth
        : 0;
      const buffer = 200;
      return Math.max(0, lastCardRightEdge - viewportWidth + buffer);
    };

    const setupAnimation = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const scrollDistance = calculateScrollDistance();
      container.style.paddingRight = `${window.innerWidth}px`;

      scrollTriggerInstance = ScrollTrigger.create({
        id: "processPin",
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      setPinReadyKey(scrollTriggerInstance.start);

      horizontalScrollTween = gsap.to(container, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => scrollTriggerInstance.start,
          end: () => scrollTriggerInstance.end,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      processSteps.forEach((_, idx) => {
        const card = container.querySelector(`.process-card-${idx}`);
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: idx % 2 === 0 ? -100 : 100,
            scale: 0.3,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalScrollTween,
              start: "left 90%",
              end: "left 70%",
              scrub: 0.8,
            },
          }
        );
      });
    };

    setupAnimation();

    // Debounced resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (scrollTriggerInstance) scrollTriggerInstance.kill();
        if (horizontalScrollTween && horizontalScrollTween.scrollTrigger)
          horizontalScrollTween.scrollTrigger.kill();
        setupAnimation();
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      if (horizontalScrollTween && horizontalScrollTween.scrollTrigger)
        horizontalScrollTween.scrollTrigger.kill();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="Capyngen Process Section"
    >
      <div className="h-screen overflow-hidden relative z-10">
        <div
          ref={containerRef}
          className="flex items-center h-full px-4 md:px-8"
          style={{ width: "max-content" }}
        >
          <div className="flex-shrink-0 w-screen flex items-center justify-center px-8 relative">
            <div className="text-center max-w-7xl relative z-10">
              <BestHeading
                title=""
                highlight="The Capyngen Approach"
                textColor="white"
              />
              <div className="mt-16">
                <p className="text-base text-white md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
                  At Capyngen, we make strategy work for you with intelligent,
                  data-backed steps that increase effectiveness and expansion.
                  Everything from custom software and application solutions to
                  cloud platforms and digital strategies is personalized around
                  your business objectives. Our skilled team takes all the
                  necessary steps, maintains the performance, and tracks the
                  outcomes, thus, helping you to keep up with the competition,
                  improve customer experiences, and open new doors of long-term
                  success.
                </p>
              </div>
            </div>
          </div>

          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center justify-center h-full w-[100vw] md:w-[30vw] "
              // style={{ width: "calc(30vw)" }}
            >
              <div
                className={`flex flex-col justify-${
                  index % 2 === 0 ? "start" : "end"
                } h-[24rem] md:h-[80vh] w-full sm:w-80 md:w-96 mx-6 md:mx-6`}
              >
                <div
                  className={`process-card process-card-${index} relative bg-white backdrop-blur-2xl rounded-3xl shadow-2xl`}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      <span className="text-white font-black text-lg relative z-10">
                        {step.id}
                      </span>
                    </div>

                    <div className="mb-8">
                      <div className="w-full h-44 rounded-t-2xl overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-center space-y-2 px-2">
                      <h3 className="text-2xl font-black text-gray-800 mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <div className="px-2 xl:px-6 pb-2 xl:pb-6 rounded-2xl">
                        <p className="text-gray-700 text-base leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer for breathing room on desktop */}
          <div className="hidden md:block w-96 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default HorizontalProcessSection;
