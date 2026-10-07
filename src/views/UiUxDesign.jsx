import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Layout,
  Smartphone,
  Eye,
  Workflow,
  ShieldCheck,
  Check,
} from "lucide-react";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/ui-ux-design-services#webpage",
  url: "https://www.capyngen.com/ui-ux-design-services",
  name: "UI/UX Design Services | App & Website Design Experts – Capyngen",
  description:
    "Transform your digital experience with Capyngen’s UI/UX design services. We craft stunning mobile app and website designs that attract, engage, and convert users.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
      width: 250,
      height: 80,
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/uiUx1-W5KEUcae.png",
    width: 1200,
    height: 800,
    caption: "UI/UX Design Services by Capyngen",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Services",
        item: "https://www.capyngen.com/services",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "UI/UX Design",
        item: "https://www.capyngen.com/ui-ux-design-services",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "UI/UX Design Services",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.instagram.com/capyngen",
      "https://www.linkedin.com/company/capyngen",
      "https://x.com/capyngen",
    ],
  },
  url: "https://www.capyngen.com/ui-ux-design-services",
  description:
    "Capyngen provides creative and user-centered UI/UX design services that improve digital experiences across websites, mobile apps, and enterprise platforms.",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "UI/UX Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website UI/UX Design",
          description:
            "Design visually appealing and conversion-focused website interfaces that enhance user engagement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App UI/UX Design",
          description:
            "Craft intuitive and high-performance mobile app designs for both Android and iOS platforms.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "User Research & Wireframing",
          description:
            "In-depth research and prototyping to ensure the final design aligns with business goals and user needs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interaction & Visual Design",
          description:
            "Deliver engaging user experiences with modern interaction design, animations, and visuals.",
        },
      },
    ],
  },
  image: "https://www.capyngen.com/assets/uiUx1-W5KEUcae.png",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/ui-ux-design-services#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is UI/UX design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UI/UX design involves the creation of user interfaces and experiences that are not only visually appealing but also intuitive and easy to navigate.",
      },
    },
    {
      "@type": "Question",
      name: "Why is UI/UX a matter of businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good UI/UX leads engagement, thus retaining the users and enhancing conversions.",
      },
    },
    {
      "@type": "Question",
      name: "Are you offering mobile app UI/UX design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, we build attractive and responsive interfaces for iOS and Android apps.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for you to design websites that follow UI/UX best practices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed, our website UI/UX design services guarantee a smooth user journey and better user interaction.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver custom UI/UX design services in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we design personalized UI/UX solutions that are in line with your company requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What sorts of businesses are your clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Health care, banking, online shopping, education, travel, hotel business, SaaS, and others.",
      },
    },
    {
      "@type": "Question",
      name: "What instruments do you use for UI/UX design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Figma, Sketch, Adobe XD, InVision, Zeplin, Marvel, and Axure RP.",
      },
    },
    {
      "@type": "Question",
      name: "Are UX audits and optimization services offered by you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure. We check the interface for usability and engagement and then optimize it.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for Capyngen to improve accessibility in designs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. We strive to make all digital products accessible and compliant with the standards.",
      },
    },
    {
      "@type": "Question",
      name: "Do you give the user experience constant attention and improvement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We analyze user habits and tweak the layout to the best solution.",
      },
    },
    {
      "@type": "Question",
      name: "Are your UI/UX services affordable for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide reasonably priced UI UX design services without slimming off quality.",
      },
    },
    {
      "@type": "Question",
      name: "What is the time span for a UI/UX design project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schedules for projects are different but most will fall between 3–8 weeks of duration based on their complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you connect designs with development teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yeah. We arrange for the easy design handoff along with detailed instructions for developers.",
      },
    },
    {
      "@type": "Question",
      name: "Can you make interactive prototypes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most definitely. We design interactive prototypes that allow users to go through the flow before developers do the actual coding.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen UI/UX design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The very first step is to really understand your need by booking a free consultation then custom design plan are delivered to you.",
      },
    },
  ],
};

const UiUxDesign = () => {
  const faqItems = [
    {
      question: "What is UI/UX design?",
      answer:
        "UI/UX design involves the creation of user interfaces and experiences that are not only visually appealing but also intuitive and easy to navigate.",
    },
    {
      question: "Why is UI/UX a matter of businesses?",
      answer:
        "Good UI/UX leads engagement, thus retaining the users and enhancing conversions.",
    },
    {
      question: "Are you offering mobile app UI/UX design services?",
      answer:
        "Definitely, we build attractive and responsive interfaces for iOS and Android apps.",
    },
    {
      question:
        "Is it possible for you to design websites that follow UI/UX best practices?",
      answer:
        "Indeed, our website UI/UX design services guarantee a smooth user journey and better user interaction.",
    },
    {
      question: "Do you deliver custom UI/UX design services in India?",
      answer:
        "Yes, we design personalized UI/UX solutions that are in line with your company requirements.",
    },
    {
      question: "What sorts of businesses are your clients?",
      answer:
        "Health care, banking, online shopping, education, travel, hotel business, SaaS, and others.",
    },
    {
      question: "What instruments do you use for UI/UX design?",
      answer:
        "Figma, Sketch, Adobe XD, InVision, Zeplin, Marvel, and Axure RP.",
    },
    {
      question: "Are UX audits and optimization services offered by you?",
      answer:
        "Sure. We check the interface for usability and engagement and then optimize it.",
    },
    {
      question:
        "Is it possible for Capyngen to improve accessibility in designs?",
      answer:
        "Definitely. We strive to make all digital products accessible and compliant with the standards.",
    },
    {
      question:
        "Do you give the user experience constant attention and improvement?",
      answer:
        "Yes. We analyze user habits and tweak the layout to the best solution.",
    },
    {
      question: "Are your UI/UX services affordable for startups?",
      answer:
        "Yes. We provide reasonably priced UI UX design services without slimming off quality.",
    },
    {
      question: "What is the time span for a UI/UX design project?",
      answer:
        "Schedules for projects are different but most will fall between 3–8 weeks of duration based on their complexity.",
    },
    {
      question: "Do you connect designs with development teams?",
      answer:
        "Yeah. We arrange for the easy design handoff along with detailed instructions for developers.",
    },
    {
      question: "Can you make interactive prototypes?",
      answer:
        "Most definitely. We design interactive prototypes that allow users to go through the flow before developers do the actual coding.",
    },
    {
      question: "How can I get started with Capyngen UI/UX design services?",
      answer:
        "The very first step is to really understand your need by booking a free consultation then custom design plan are delivered to you.",
    },
  ];

  const servicesData = [
    {
      image: assets.uiUx9,
      title: "Enhanced User Engagement & Retention",
      desc: "Develop user-focused and interactive experiences that attract users back, thereby increasing loyalty and long-lasting engagement.",
    },
    {
      image: assets.uiUx10,
      title: "Improved Conversion Rates",
      desc: "Wisely chosen layouts and workflows motivate visitors to take specific actions, boosting sales, sign-ups, and overall engagement.",
    },
    {
      image: assets.uiUx11,
      title: "Intuitive, Responsive, and Accessible Design",
      desc: "Deliver smooth experiences across all devices, ensuring usability for everyone—including users with disabilities.",
    },
    {
      image: assets.uiUx12,
      title: "Faster Load Times & Optimized Performance",
      desc: "Quick-loading apps with seamless navigation reduce bounce rates and enhance user satisfaction.",
    },
    {
      image: assets.uiUx13,
      title: "Scalable Architecture for Growth",
      desc: "Build platforms that can handle increased traffic, new features, and expansion without compromising performance or stability.",
    },
    {
      image: assets.uiUx14,
      title: "Strong Branding & Visual Identity",
      desc: "Design consistent and visually appealing interfaces that clearly communicate your brand values and leave a lasting impression.",
    },
    {
      image: assets.uiUx15,
      title: "Seamless Integration with Tools & Services",
      desc: "Connect your app with CRMs, payment gateways, analytics, and other third-party services to create a unified ecosystem.",
    },
    {
      image: assets.uiUx16,
      title: "Data-Driven Decision Making",
      desc: "Use analytics and user behavior insights to refine UI/UX, marketing strategies, and product offerings.",
    },
    {
      image: assets.uiUx17,
      title: "Security & Privacy Compliance",
      desc: "Protect user data and build trust by adhering to industry standards, regulations, and cybersecurity best practices.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Requirement Gathering & User Research",
      description:
        "Define business goals, user needs, and lifestyle of the target audience to guide every design decision. By doing so, the end product will be in harmony with both the goals and the user's expectations.",
    },
    {
      step: "02",
      title: "Information Architecture & Wireframes",
      description:
        "Arrange the information and depict the user-flows to have navigation easily understandable. Wireframes act as a user's cross-platform journey map ensuring that the movement is fast and logical.",
    },
    {
      step: "03",
      title: "Visual & Interaction Design",
      description:
        "Creating the designs that are not only attractive but also easy to use significantly contributes to increased user engagement and guidance. The interaction part of the product is being made user-friendly by the company to improve the WebApp experience as a whole.",
    },
    {
      step: "04",
      title: "Prototyping & User Testing",
      description:
        "Creating working models and asking real users for their opinions. The test is to check the correctness of the designer's decisions and to identify shortcomings that can be fixed before the coding stage.",
    },
    {
      step: "05",
      title: "Design Handoff & Implementation",
      description:
        "Work and communicate effectively with developers to have an easy integration and successful implementation. The product will be the one that works in the same way as the design and looks exactly like the design.",
    },
    {
      step: "06",
      title: "Continuous UX Improvement",
      description:
        "Observe users‘ behavior and suggestions for the iterative updating of the design. Regular improvements increase the site's usability, users' engagement and conversion rates with time.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "User Research & Analysis",
      description: "Get to know your users, their behaviors, and preferences.",
      image: assets.uiUx3,
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Visualize app and website layouts before the coding process.",
      image: assets.uiUx4,
    },
    {
      title: "Visual & Interaction Design",
      description:
        "Make the user interface visually attractive and interactive.",
      image: assets.uiUx5,
    },
    {
      title: "Mobile & Web UI/UX Design",
      description:
        "Create apps and websites that are compatible with all devices and are user-friendly.",
      image: assets.uiUx6,
    },
    {
      title: "UX Audit & Optimization",
      description: "Locate the problem areas and improve usability.",
      image: assets.uiUx7,
    },
    {
      title: "Accessibility & Usability Design",
      description:
        "Designing digital products that are accessible and easy to use for the entire user base.",
      image: assets.uiUx8,
    },
  ];

  const chooseReasons = [
    "Knowledge of mobile, and web UI UX design service",
    "Original designs centering on end-users for startups and companies with vast business volume",
    "Delivery anywhere in the world at prices that are attractive and solutions that can be scaled up or down",
    "Concentration on engagement, retention, and conversions",
    "Committed group with up-to-date equipment and design methods",
    "Reliability in the production of user-friendly digital interactions across the globe",
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          UI/UX Design Services – Best UI/UX Design Company in India
        </title>
        <meta
          name="description"
          content="Professional UI/UX design services in India. We create creative, responsive, and user-friendly interfaces to enhance your digital experience"
        />
        <meta
          name="keywords"
          content="UI UX design, UI UX design services, ui ux design services in gurgaon, UX design company India, UI design company, best UI/UX design agency, professional UI UX services"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Full Screen min-h-screen / Sharp Edges / High Contrast)   */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-screen text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden bg-gradient-to-b from-[#070e1d] via-[#09152e] to-[#070e1d]"
        aria-label="UI UX Design Services Banner"
      >
        {/* Subtle Tech Grid Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 sm:w-12 bg-slate-400" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-slate-300 font-bold">
                  WHAT WE DO <span className="text-blue-400 mx-1">/</span> SERVICES
                </span>
                <div className="h-[1px] flex-1 max-w-xs bg-slate-600/50" />
              </div>

              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold leading-[1.15] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Best{" "}
                <span className="text-blue-500">
                  UI/UX Design Services
                </span>{" "}
                in India Delivering Creative, Responsive, and User-Friendly Digital Experiences for Businesses
              </h1>

              <div className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                <p>
                  Capyngen designs interfaces that intuitively meet the needs of your
                  users, and are engaging, user-friendly, and customized for your
                  users. Our services will not only bring delight to your target market
                  but also result in more substantial engagement, conversions, and
                  overall business growth.
                </p>
              </div>

              <div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[560px] xl:max-w-[600px] flex items-center justify-center overflow-hidden">
                <img
                  src={assets.uiUx1}
                  alt="Hero section illustration - UI/UX Design Services"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT ARE UI/UX DESIGN? (SPLIT INTRO)                                   */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.uiUx2}
                alt="What Are UI/UX Design by Capyngen"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What Are UI/UX Design?
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                UI (User Interface) and UX (User Experience) design refer to the creation of visually attractive, user-friendly, and simple-to-navigate interfaces. The former revolves around the appearance and structure of applications or websites whereas the latter aims at giving a hassle-free and delightful experience.
              </p>
              <p>
                One of the reasons why Capyngen is the most sought after company for UI UX design services in India is that their expert team delivers tailor-made solutions that make web and mobile platforms more user-friendly, engaging, and result-oriented.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FULL SIZE BANNER 1: DESIGN EXPERIENCES                                 */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.uiUxFullSize}
            alt="Design experiences that captivate users"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Design experiences that captivate users
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We build user-friendly interfaces that unite emotion and functionality.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              View Designs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. UI/UX DESIGN SERVICES WE OFFER (6 CARDS - White Background)             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              UI/UX Design Services We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {cardsSectionImageData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-500 transition-colors duration-150 flex flex-col justify-between rounded-none shadow-sm relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />

                <div className="relative h-56 overflow-hidden border-b border-slate-200">
                    <img
                      src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-none"
                  />
                  </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#f8fafc]">
                  <div>
                    <h3
                      className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-150"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Accent Summary Box */}
          <div className="p-6 bg-[#f8fafc] border border-slate-200 border-l-4 border-l-blue-600 text-slate-800 text-center text-lg sm:text-xl rounded-none shadow-sm">
            Our UI UX design services India are customized to support businesses in increasing their{" "}
            <span className="font-semibold text-blue-600">engagement</span>,{" "}
            <span className="font-semibold text-blue-600">satisfaction</span>, and{" "}
            <span className="font-semibold text-blue-600">retention</span>.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR UI/UX DESIGN PROCESS (6 STEPS)                                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our UI/UX Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {st.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHY USE CAPYNGEN FOR MOBILE APPLICATION DEVELOPMENT (9 SERVICES)       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why use Capyngen for Mobile Application Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 flex flex-col justify-between rounded-none shadow-xl relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />

                <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-150"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WHY TO CHOOSE CAPYNGEN FOR UI/UX DESIGN (White Background - Swapped)   */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.uiUx18}
                alt="Why to Choose Capyngen for UI/UX Design"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why to Choose Capyngen for UI/UX Design
            </h2>
            <p className="text-slate-800 font-semibold text-lg">
              Importance of Cybersecurity in Modern Businesses
            </p>
            <ul className="space-y-4 text-slate-600 text-base leading-relaxed">
              {chooseReasons.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FULL SIZE BANNER 2: MAKE EVERY INTERACTION MEANINGFUL (Swapped)        */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.uiUxFullSize2}
            alt="Make every interaction meaningful"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Make every interaction meaningful
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Immerse users in aesthetically pleasing, and easy-to-navigate digital designs that significantly increase their interaction time.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              CONTACT US
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Find quick answers regarding our UI/UX design workflow, turnaround times, and handoff procedures."
        items={faqItems}
      />

      {/* ========================================================================= */}
      {/* 12. BOTTOM FINAL CTA BANNER (Below FAQs)                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Explore Design Packages
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Choose the right plan for your business and elevate your digital experience with intuitive, user-tested interfaces that convert.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Explore Design Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UiUxDesign;
