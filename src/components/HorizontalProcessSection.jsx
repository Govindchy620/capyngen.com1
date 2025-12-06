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
        "We begin by defining business goals and setting up on key performance indicators (KPIs) that are in line with your vision. This strategy will ensure that all digital marketing services will have quantifiable positive impact of a Top IT Company in World.",
      image: assets.homepageGoal,
    },
    {
      id: 2,
      title: "Audience Research & Insights",
      description:
        "We drill in the figures to identify the most desirable customers to your company. With the identification of their needs and wants, we are able to create products that will be appealing to them and will keep them occupied by the solutions offered by Capyngen digital marketing agency.",
      image: assets.homepageAudience,
    },
    {
      id: 3,
      title: "Data-Driven Performance",
      description:
        "We are provided with the latest data by which each act we do is followed. As we identify trends and opportunities, we will change our approach to ensure that your SEO, social media and marketing will provide the highest returns to your investment.",
      image: assets.homepageDataDriven,
    },
    {
      id: 4,
      title: "Execution & Continuous Optimization",
      description:
        "We are so attentive in executing our programs up to the point of the takeoff to the landing. We always ensure that our team is busy with the minor components of the programs, thereby making sure that your IT services and online marketing will be profitable in the long run with the help of the modern devops consulting services.",
      image: assets.homepageExecution,
    },
    {
      id: 5,
      title: "Reporting & Transparent Communication",
      description:
        "We are also available of reports and keep you informed at every stage thereby allowing a complete realization and measurable results of your IT consulting services and custom software development programs developed by a top IT company in World.",
      image: assets.homepageReporting,
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
                  We do your strategic work at Capyngen with smart, data driven
                  steps to make it more effective and grow it. All the
                  personalization of the software and application solutions, as
                  well as cloud platforms and digital strategies, are customized
                  to your business goals. Our professional team makes all the
                  required measures, supports the performance and observes the
                  results, and, therefore, will help you to stay in the
                  competition, win customers and make another new gateway to the
                  long-term success.
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
