import React, { useRef, useLayoutEffect } from "react";
import BestHeading from "./BestHeading";
import { assets } from "../assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamMemberCard = React.forwardRef(({ image, name, title }, ref) => (
  <div
    ref={ref}
    className="team-member-card relative w-84 h-100 rounded-lg overflow-hidden group shadow-lg mx-auto"
  >
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-opacity duration-200"
    />
    <div className="absolute bottom-0 left-0 w-full bg-white/90 p-6 transition-transform duration-300 translate-y-30 group-hover:translate-y-0 shadow-md">
      <p className="text-2xl text-black font-semibold">{name}</p>
      <p className="text-gray-600 text-md mt-2">{title}</p>
    </div>
  </div>
));

export default function HomeBlogs() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const members = [
    { image: assets.blog1, name: "Person One", title: "Project Manager" },
    {
      image: assets.blog2,
      name: "Savannah Nguyen",
      title: "Sr. Web Developer",
    },
    { image: assets.blog3, name: "Person Three", title: "UI/UX Designer" },
    { image: assets.blog4, name: "Person Three", title: "UI/UX Designer" },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;
    if (!cardsContainer || !section) return;
    const cardEls = Array.from(
      cardsContainer.querySelectorAll(".team-member-card")
    );
    const mm = gsap.matchMedia();

    // Pin the section for enough scroll space
    const st = ScrollTrigger.create({
      id: "teamPin",
      trigger: section,
      start: "top top",
      end: "+=200%",
      pin: true,
      anticipatePin: 1,
      scrub: false,
      markers: false,
    });

    // Animate cards: Desktop (simultaneous), Mobile (sequential)
    mm.add("(min-width: 768px)", () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const offLeft = -vw * 0.9;
      const offRight = vw * 0.9;
      const offBottom = vh * 0.6;
      // Initial state
      gsap.set(cardEls, {
        x: (i) => (i % 2 === 0 ? offLeft : offRight), // alternate different directions for demo
        y: offBottom,
        opacity: 1,
        willChange: "transform",
      });
      // Timeline: as you scroll, cards move into their places
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: () => st.start + window.innerHeight * 1.25,
          scrub: true,
        },
      });
      tl.to(
        cardEls,
        {
          x: 0,
          y: 0,
          stagger: 0,
          ease: "none",
        },
        0
      );
      return () => tl.scrollTrigger?.kill();
    });

    mm.add("(max-width: 767px)", () => {
      const vh = window.innerHeight;
      gsap.set(cardEls, {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: "90vw",
        maxWidth: "28rem",
        opacity: 1,
        willChange: "transform",
        x: 0,
        y: vh,
        zIndex: 1,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: () => st.start + vh * 0.7,
          end: () => st.start + vh * 2.4,
          scrub: true,
        },
      });
      const move = 1.0;
      const gap = 0.2;
      members.forEach((_, i) => {
        tl.set(cardEls[i], { zIndex: 10 });
        tl.to(cardEls[i], { y: 0, ease: "none", duration: move });
        tl.to(cardEls[i], { y: -vh, ease: "none", duration: move });
        tl.to({}, { duration: gap });
        tl.set(cardEls[i], { zIndex: 1 });
      });
      return () => tl.scrollTrigger?.kill();
    });

    return () => {
      st.kill();
      mm.revert();
    };
  }, [members.length]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-10 relative overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto">
        <BestHeading title="" highlight="News & Updates" />
        <h1 className="text-center text-3xl font-bold mb-8 mt-10">
          Expert IT Team Driving <br /> Business Success Forward.
        </h1>
        <div
          ref={cardsRef}
          className="flex flex-col md:flex-row gap-4 justify-center relative"
        >
          {members.map((m, idx) => (
            <TeamMemberCard key={idx} {...m} />
          ))}
        </div>
      </div>
    </div>
  );
}
