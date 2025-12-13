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
import { Helmet } from "react-helmet-async";

const webpageSchema = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "Capyngen Private Limited",
  alternateName: "Capyngen",
  url: "https://www.capyngen.com/",
  logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tower B3, Spaze I-Tech Park, Sector 49",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    postalCode: "122018",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/capyngen",
    "https://www.instagram.com/capyngen/",
    "https://twitter.com/Capyngen",
  ],
  foundingDate: "2022-01-24",
  founders: [
    {
      "@type": "Person",
      name: "Vivek Ojha",
      jobTitle: "CEO & Managing Director",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Capyngen Private Limited",
  alternateName: "Capyngen",
  url: "https://www.capyngen.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.capyngen.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen Private Limited",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Capyngen offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide Information Technology (IT) services, Customer Relationship Management (CRM) solutions, cybersecurity, application development, user interface/user experience (UI/UX) design, and digital marketing that can contribute to the growth of the businesses. :contentReference[oaicite:1]{index=1}",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose Capyngen over others?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Well! Because we combine strategy, technology, and artistry to produce quantifiable, scalable, and dependable solutions that are unique to your objectives.:contentReference[oaicite:2]{index=2}",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups as well as enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Indeed, we create startups, Small and Medium-sized Businesses (SMBs), and large enterprises solutions in a manner that is adaptable to any industry. :contentReference[oaicite:3]{index=3}",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen help improve my online presence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course! We make your brand visible and increase your digital presence through SEO, social media, and performance marketing.:contentReference[oaicite:4]{index=4}",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer custom software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certainly, we take pride in creating customized web, mobile, and enterprise software applications that address specific business requirements. :contentReference[oaicite:5]{index=5}",
      },
    },
    {
      "@type": "Question",
      name: "How experienced is your team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team is made up of certified experts who have several years of experience in Information Technology (IT), marketing, and business transformation. :contentReference[oaicite:6]{index=6}",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We partner with the healthcare, finance, education, e-commerce, travel, IT, etc. industries.:contentReference[oaicite:7]{index=7}",
      },
    },
    {
      "@type": "Question",
      name: "Is your approach data-driven?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Absolutely, all our measures rely on data analytics, performance tracking, and continuous optimization.). :contentReference[oaicite:8]{index=8}",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle large-scale IT projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure, our team is capable to oversee the management of complicated projects at the enterprise-level with the use of end-to-end solutions. :contentReference[oaicite:9]{index=9}",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer CRM solutions for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer CRM tools that are manageable and can adapt to any business regardless of its size. :contentReference[oaicite:10]{index=10}",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure cybersecurity for clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We incorporate multiple layers of security, real-time surveillance, and regulatory frameworks to guarantee the security of data and networks. :contentReference[oaicite:11]{index=11}",
      },
    },
    {
      "@type": "Question",
      name: "Can I track the progress of my projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we allow the provision of progress updates and other forms of transparent reporting at any point of the project lifecycle. :contentReference[oaicite:12]{index=12}",
      },
    },
    {
      "@type": "Question",
      name: "Are your digital marketing strategies customized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely — the objectives, the target market, and the industry of your business are the main factors in every campaign that we execute. :contentReference[oaicite:13]{index=13}",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support after deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The answer is yes, we provide support 24 hours a day, 7 days a week, to make sure that everything runs smoothly and in case of a problem, the resolution will be quick.:contentReference[oaicite:14]{index=14}",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free consultation can be arranged at your leisure, you tell us what you need, and then our professionals get down to work creating the exact solution your business requires.:contentReference[oaicite:15]{index=15}",
      },
    },
  ],
};

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
      question: "Which services does Capyngen provide?",
      answer:
        "Capyngen is a supplier of IT, digital marketing and bespoke software.",
    },
    {
      question: "Why not Capyngen among others?",
      answer:
        "Owing to the fact that we provide innovative and reliable results.",
    },
    {
      question: "Do you deal with both startups and enterprises?",
      answer: "Yes, we favour both startups and large organisations.",
    },
    {
      question: "Will Capyngen assist me to enhance my online presence?",
      answer: "Yes, with the help of SEO, SMM and the digital marketing.",
    },
    {
      question: "Do you provide tailor-made software development?",
      answer: "Yes, we create software that is custom-built.",
    },
    {
      question: "How experienced is your team?",
      answer: "We have a quite experienced team in the industry.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "Our fields of operation include finance, healthcare, retail, etc.",
    },
    {
      question: "Is your approach data-driven?",
      answer: "Yes, we trust in analytics and insights.",
    },
    {
      question: "Are you able to deal with massive IT projects?",
      answer: "Yes, we handle IT projects of enterprise level.",
    },
    {
      question: "Are you a provider of CRM solutions to small businesses?",
      answer: "Yes, we are offering custom CRM.",
    },
    {
      question: "What are your means of providing cybersecurity to clients?",
      answer: "Via surveillance, risk management, and guarded measures.",
    },
    {
      question: "Am I able to monitor the advances of my projects?",
      answer: "Yes, you get all the progress reports.",
    },
    {
      question: "Do you customise your digital marketing strategies?",
      answer: "Yes, the strategies are custommade.",
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer: "Yes, we offer continuous support.",
    },
    {
      question: "How can I get started with Capyngen?",
      answer: "You can contact us directly to begin.",
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
      <Helmet>
        <title>
          Capyngen | Custom Software Development, Web & App Solutions, Digital
          Marketing Experts
        </title>
        <meta
          name="description"
          content="Capyngen is a trusted IT solution company delivering innovative IT services and solutions, like app development, web design, SEO. etc for business growth."
        />
        <meta
          name="keywords"
          content="IT solution company, IT services and solutions, innovative IT solutions, best IT company, App development, digital IT services, business IT solutions"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
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
        <div className="py-10 pt-20 bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 [&>*]:!mt-0 [&>*]:!mb-0">
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
        <div className="pt-10 bg-gradient-to-b from-[#000]/90 to-[#000]/90 [&>*]:!mt-0 [&>*]:!mb-0">
          <ScrollRevealEffect />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
