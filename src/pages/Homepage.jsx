import React, { useEffect, useRef, useState } from "react";
import HomeAboutUs from "../components/HomeAboutUs";
import HorizontalProcessSection from "../components/HorizontalProcessSection";
import HomeIndustries from "../components/HomeIndustries";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ServicesCarousel from "../components/ServicesCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeServices from "../components/HomeServices";
import HomeBlogs from "../components/HomeBlogs";
import HeroSection from "../components/HeroSection";
import FAQSection from "../components/FAQSection";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import { StickyScroll } from "../components/StickyScroll";
import { TextParallaxContentExample } from "../components/TextParallaxContent";
import { ParallaxScroll } from "../components/ParallaxScroll";
import { assets } from "../assets/assets";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import FAQSection2 from "../components/FAQSection2";

const Homepage = () => {
  const containerRef = useRef(null);
  const [init, setInit] = useState(false);

  // Initialize particles engine only once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setInit(true);
    });
  }, []);

  if (!init) return null;

  const faqItems = [
    {
      question: "What services does Capyngen offer?",
      answer:
        "We provide Information Technology (IT) services, Customer Relationship Management (CRM) solutions, cybersecurity, application development, user interface/user experience (UI/UX) design, and digital marketing that can contribute to the growth of the businesses.",
    },
    {
      question: "Why should I choose Capyngen over others?",
      answer:
        "Well! Because we combine strategy, technology, and artistry to produce quantifiable, scalable, and dependable solutions that are unique to your objectives.",
    },
    {
      question: "Do you work with startups as well as enterprises?",
      answer:
        "Indeed, we create startups, Small and Medium-sized Businesses (SMBs), and large enterprises solutions in a manner that is adaptable to any industry.",
    },
    {
      question: "Can Capyngen help improve my online presence?",
      answer:
        "Of course! We make your brand visible and increase your digital presence through SEO, social media, and performance marketing.",
    },
    {
      question: "Do you offer custom software development?",
      answer:
        "Certainly, we take pride in creating customized web, mobile, and enterprise software applications that address specific business requirements.",
    },
    {
      question: "How experienced is your team?",
      answer:
        "Our team is made up of certified experts who have several years of experience in Information Technology (IT), marketing, and business transformation.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We partner with the healthcare, finance, education, e-commerce, travel, IT, etc. industries.",
    },
    {
      question: "Is your approach data-driven?",
      answer:
        "Absolutely, all our measures rely on data analytics, performance tracking, and continuous optimization.",
    },
    {
      question: "Can you handle large-scale IT projects?",
      answer:
        "Sure, our team is capable to oversee the management of complicated projects at the enterprise-level with the use of end-to-end solutions.",
    },
    {
      question: "Do you offer CRM solutions for small businesses?",
      answer:
        "Yes, we offer CRM tools that are manageable and can adapt to any business regardless of its size.",
    },
    {
      question: "How do you ensure cybersecurity for clients?",
      answer:
        "We incorporate multiple layers of security, real-time surveillance, and regulatory frameworks to guarantee the security of data and networks.",
    },
    {
      question: "Can I track the progress of my projects?",
      answer:
        "Yes, we allow the provision of progress updates and other forms of transparent reporting at any point of the project lifecycle.",
    },
    {
      question: "Are your digital marketing strategies customized?",
      answer:
        "Definitely — the objectives, the target market, and the industry of your business are the main factors in every campaign that we execute.",
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer:
        "The answer is yes, we provide support 24 hours a day, 7 days a week, to make sure that everything runs smoothly and in case of a problem, the resolution will be quick.",
    },
    {
      question: "How can I get started with Capyngen?",
      answer:
        "A free consultation can be arranged at your leisure, you tell us what you need, and then our professionals get down to work creating the exact solution your business requires.",
    },
  ];

  // const demoContent = [
  //   {
  //     title:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab nemo impedit, laudantium aliquam exercitationem alias! Temporibus quae iste consequuntur!",
  //     description: "This is the first card’s description.",
  //     content: (
  //       <div className="p-1 text-white">
  //         <img src={assets.appDevelopment} alt="" />
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Card 2",
  //     description: "This is the second card’s description.",
  //     content: (
  //       <div className="p-4 text-white">🔥 Second card content here!</div>
  //     ),
  //   },
  //   {
  //     title: "Card 3",
  //     description: "This is the third card’s description.",
  //     content: (
  //       <div className="p-4 text-white">💧 Third card content here!</div>
  //     ),
  //   },
  // ];
  // const images = [
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  //   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  //   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  //   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  //   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  //   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  //   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  // ];

  // useSplitTextAnimation("h1");

  return (
    <div className="relative overflow-x-hidden" ref={containerRef}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#0a0a0a" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 120 }, push: { quantity: 4 } },
          },
          particles: {
            number: { value: 120, density: { enable: true, area: 900 } },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            size: { value: { min: 1, max: 4 } },
            opacity: { value: 0.6 },
          },
        }}
      />
      {/* Fixed Background (HeroSection) */}
      {/* Fixed Background (HeroSection) */}
      <div className="sticky inset-0">
        <HeroSection />
      </div>
      {/* <StickyScroll content={demoContent} />
      <TextParallaxContentExample />
      <ParallaxScroll images={images} />; */}
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <div className="lg:h-10 bg-gradient-to-b from-[#000]/90 to-[#000]/90"></div>
        <div className="py-10 bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <HomeAboutUs />
        </div>
        {/* <div className="h-10 bg-gradient-to-b from-[#0010A2]/90 to-[#0010A2]/90"></div> */}

        <div className="py-10 bg-gradient-to-b from-[#0010A2]/90 to-[#708090]/90 [&>*]:!mt-0 [&>*]:!mb-0">
            <WhyChooseUs />
        </div>
        <div className="py-10 bg-gradient-to-b from-[#708090]/90 to-[#000]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <HorizontalProcessSection />
        </div>
        <div className="py-10 bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <ServicesCarousel />
        </div>
        <div className="py-10 bg-gradient-to-b from-[#0010A2]/90 to-[#708090]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <HomeServices />
        </div>
        <div className="py-10 bg-gradient-to-b from-[#708090]/90 to-[#000]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <HomeIndustries />
        </div>
        <div className="py-10 bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <TestimonialCarousel />
        </div>
        <div className="py-10 bg-gradient-to-b from-[#0010A2]/90 to-[#708090]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <HomeBlogs />
        </div>
        <div className="py-10 bg-gradient-to-b from-[#708090]/90 to-[#000]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <FAQSection2 items={faqItems} bgColor="bg-transparent" />
        </div>
        <div className="py-10 bg-gradient-to-b from-[#000]/90 to-[#000]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <ScrollRevealEffect />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
