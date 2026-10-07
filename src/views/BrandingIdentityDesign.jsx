import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaAppStore,
  FaBuilding,
  FaIndustry,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPuzzlePiece,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/branding-identity-design#webpage",
  url: "https://www.capyngen.com/branding-identity-design",
  name: "Branding Design Services | Creative & Corporate Branding",
  description:
    "Build a powerful brand identity with Capyngen’s branding design services. We create custom, creative, and professional designs that make your brand stand out.",
  inLanguage: "en",
  keywords: "Branding Design Services, Creative & Corporate Branding",
  isPartOf: {
    "@type": "WebSite",
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
    },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "Branding Design services, Creative branding design, Corporate branding design, Professional branding design, Custom branding design, Brand identity design, Branding and graphic design",
  name: "Branding Design Services | Creative & Corporate Branding",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  url: "https://www.capyngen.com/branding-identity-design",
  description:
    "Build a powerful brand identity with Capyngen’s branding design services. We create custom, creative, and professional designs that make your brand stand out.",
  keywords: "Branding Design Services, Creative & Corporate Branding",
  offers: {
    "@type": "Offer",
    url: "https://www.capyngen.com/contact",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  category: "Branding & Identity Design Services",
  serviceOutput:
    "Build a powerful brand identity with Capyngen’s branding design services. We create custom, creative, and professional designs that make your brand stand out.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are branding design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In order to develop a cohesive brand identity, these services incorporate logo design, visual identity, packaging, stationery, and digital branding.",
      },
    },
    {
      "@type": "Question",
      name: "Why is branding important for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Among the benefits of strong branding are increased recognition, customer loyalty, and competition in the market.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen provide global branding services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen is a professional branding design company that serves clients all over the world. Through their services, businesses can go international.",
      },
    },
    {
      "@type": "Question",
      name: "Can you design logos for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course! We do tailor-made branding works both for startups and for existing companies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create brand guidelines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we assist with brand guidelines in order to achieve correct brand usage across all forums.",
      },
    },
    {
      "@type": "Question",
      name: "Can you design packaging and collateral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed, the team is available to accomplish a task of packaging design, or create your business cards, brochures, and stationery for you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle digital branding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all-inclusive Web design, social media graphics, and getting online campaigns ready for a digital appearance are parts of digital branding.",
      },
    },
    {
      "@type": "Question",
      name: "How long does branding design take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Just about 4–8 weeks, it really depends on the size of the worldwide launch and the intricacy of the design work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer rebranding services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! The company Capyngen provides top-notch rebranding solutions for those businesses that want change.",
      },
    },
    {
      "@type": "Question",
      name: "Are your designs research-backed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed, each project comes with market and competitor research that facilitates creating a brand strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you ensure cross-platform consistency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, no matter what platform you use - digital, print, or social media - we make sure that everything is harmonized.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle multilingual branding for international markets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides branding design services to the widest possible audience regardless of their location and language.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing brand support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we are always here ready to help through brand updates and offering expert advice to remain at the leading edge.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen help improve marketing ROI through branding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, a well thought out and professionally done brand can increase customer interaction, sales, and overall campaign productivity.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Capyngen’s branding design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take a look at the schedule on our website and pick a time that works for you to receive a free consultation to share your ideas and business needs.",
      },
    },
  ],
};

const BrandingIdentityDesign = () => {
  const faqItems = [
    {
      question: "What are branding design services?",
      answer:
        "In order to develop a cohesive brand identity, these services incorporate logo design, visual identity, packaging, stationery, and digital branding.",
    },
    {
      question: "Why is branding important for businesses?",
      answer:
        "Among the benefits of strong branding are increased recognition, customer loyalty, and competition in the market.",
    },
    {
      question: "Does Capyngen provide global branding services?",
      answer:
        "Capyngen is a professional branding design company that serves clients all over the world. Through their services, businesses can go international.",
    },
    {
      question: "Can you design logos for startups?",
      answer:
        "Of course! We do tailor-made branding works both for startups and for existing companies.",
    },
    {
      question: "Do you create brand guidelines?",
      answer:
        "Yes, we assist with brand guidelines in order to achieve correct brand usage across all forums.",
    },
    {
      question: "Can you design packaging and collateral?",
      answer:
        "Indeed, the team is available to accomplish a task of packaging design, or create your business cards, brochures, and stationery for you.",
    },
    {
      question: "Do you handle digital branding?",
      answer:
        "Yes, all-inclusive Web design, social media graphics, and getting online campaigns ready for a digital appearance are parts of digital branding.",
    },
    {
      question: "How long does branding design take?",
      answer:
        "Just about 4–8 weeks, it really depends on the size of the worldwide launch and the intricacy of the design work.",
    },
    {
      question: "Do you offer rebranding services?",
      answer:
        "Absolutely! The company Capyngen provides top-notch rebranding solutions for those businesses that want change.",
    },
    {
      question: "Are your designs research-backed?",
      answer:
        "Indeed, each project comes with market and competitor research that facilitates creating a brand strategy.",
    },
    {
      question: "Do you ensure cross-platform consistency?",
      answer:
        "Yes, no matter what platform you use - digital, print, or social media - we make sure that everything is harmonized.",
    },
    {
      question:
        "Can you handle multilingual branding for international markets?",
      answer:
        "Yes, Capyngen provides branding design services to the widest possible audience regardless of their location and language.",
    },
    {
      question: "Do you offer ongoing brand support?",
      answer:
        "Yes, we are always here ready to help through brand updates and offering expert advice to remain at the leading edge.",
    },
    {
      question: "Can Capyngen help improve marketing ROI through branding?",
      answer:
        "Definitely, a well thought out and professionally done brand can increase customer interaction, sales, and overall campaign productivity.",
    },
    {
      question:
        "How do I get started with Capyngen’s branding design services?",
      answer:
        "Take a look at the schedule on our website and pick a time that works for you to receive a free consultation to share your ideas and business needs.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Logo Design",
      description:
        "One-of-a-kind designs that make your product immediately recognizable, establish trust, and form a memorable presence.",
      image: assets.branding3,
    },
    {
      title: "Visual Identity",
      description:
        "Design elements such as colors, fonts, icons, and imagery crafted uniformly across all communication channels.",
      image: assets.branding4,
    },
    {
      title: "Brand Guidelines",
      description:
        "A comprehensive rule book that governs brand application consistently across print, web, and social media platforms.",
      image: assets.branding5,
    },
    {
      title: "Packaging Design",
      description:
        "Stunning, tactile packaging that delights consumers while serving as a direct physical reflection of your brand values.",
      image: assets.branding6,
    },
    {
      title: "Stationery & Collateral Design",
      description:
        "High-end business cards, presentation decks, brochures, and promotional materials designed to impress corporate partners.",
      image: assets.branding7,
    },
    {
      title: "Digital Branding",
      description:
        "Digital avenues like websites, social media graphics, and campaign materials that make your online presence cohesive.",
      image: assets.branding8,
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Richly articulated designs",
      description:
        "Brand market research leads to distinct brand identities that resonate deeply with your target group.",
      icon: <FaPuzzlePiece className="text-3xl text-blue-400" />,
    },
    {
      title: "Tailored Solutions",
      description:
        "Personalized designs crafted to match the exact personality and business objectives of your enterprise.",
      icon: <FaLaptopCode className="text-3xl text-blue-400" />,
    },
    {
      title: "Creative Expertise",
      description:
        "Innovative design thinking that leaves permanent positive impressions in the minds of your audience.",
      icon: <FaAppStore className="text-3xl text-blue-400" />,
    },
    {
      title: "Cross-Platform Consistency",
      description:
        "A brand identity standardized both visually and conceptually across digital, print, and social media channels.",
      icon: <FaMoneyBillWave className="text-3xl text-blue-400" />,
    },
    {
      title: "Strategic Approach",
      description:
        "Your brand story and commercial roadmap serve as the anchor of every visual identity decision we make.",
      icon: <FaBuilding className="text-3xl text-blue-400" />,
    },
    {
      title: "Worldwide Experience",
      description:
        "Capyngen delivers branding solutions designed to cross cultural and geographical boundaries effortlessly.",
      icon: <FaIndustry className="text-3xl text-blue-400" />,
    },
  ];

  const steps = [
    {
      title: "Discovery & Research",
      description:
        "Dig into the business, target market, and competitive landscape to construct a rock-solid brand foundation.",
    },
    {
      title: "Strategy Development",
      description: "Define brand positioning, tone of voice, core messaging hierarchy, and strategic visual direction.",
    },
    {
      title: "Creative Conceptualization",
      description:
        "Develop and iterate ideas for logos, bespoke typography, color palettes, and graphic motifs.",
    },
    {
      title: "Design Execution",
      description:
        "Build complete brand guidelines, corporate stationery, packaging concepts, and high-fidelity digital assets.",
    },
    {
      title: "Brand Implementation",
      description:
        "Deploy the new identity across your official website, social media, marketing collateral, and customer touchpoints.",
    },
    {
      title: "Ongoing Support",
      description:
        "Continuous guidance, updates, and asset governance to keep your brand fresh and competitive globally.",
    },
  ];

  const cardsSectionImageData2 = [
    {
      title: "Minimalist Design",
      description: "Neat and straightforward visuals that communicate elegance and deliver your core message without friction.",
      image: assets.branding10,
    },
    {
      title: "Bold Typography",
      description: "Custom and distinctive typefaces that command immediate attention and build visual authority.",
      image: assets.branding11,
    },
    {
      title: "Vibrant Color Palettes",
      description: "Carefully curated color schemes that evoke emotion, build distinction, and drive psychological recall.",
      image: assets.branding12,
    },
    {
      title: "Custom Illustrations",
      description: "Bespoke brand illustration libraries that give your visual identity an unrepeatable character.",
      image: assets.branding13,
    },
    {
      title: "Dynamic Logos",
      description: "Adaptive responsive logos engineered for pixel-perfect clarity from billboards down to smartwatches.",
      image: assets.branding14,
    },
    {
      title: "Interactive Digital Branding",
      description: "Motion graphics, interactive UI micro-interactions, and animated logo reveals for digital-first brands.",
      image: assets.branding15,
    },
  ];

  const whyNeedsBrandingList = [
    {
      title: "Create a Lasting First Impression",
      text: "Professional branding ensures you and your audience connect immediately with high recall.",
    },
    {
      title: "Establish Brand Awareness & Loyalty",
      text: "Done right, branding increases recognition and turns casual buyers into lifetime advocates.",
    },
    {
      title: "Communicate Values Clearly",
      text: "Your mission, values, and personality become self-evident through thoughtful visual presentation.",
    },
    {
      title: "Stand Out from Competitors",
      text: "A well-differentiated identity guarantees you command attention even in crowded markets.",
    },
    {
      title: "Amplify Marketing Impact",
      text: "Consistent, premium branding drives stronger campaign conversions, trust, and marketing ROI.",
    },
    {
      title: "Global Reach",
      text: "Our international design framework equips your brand to speak effectively across world borders.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Branding and Identity Design Services – Best Branding Company in India
        </title>
        <meta
          name="description"
          content="Professional branding and identity design services in India. We create unique logos, brand strategies, and visual identities that make your business stand out."
        />
        <meta
          name="keywords"
          content="branding and identity design, best marketing company in gurgaon, brand identity services, logo design India, professional branding services, branding agency in gurgaon, brand identity design company, brand strategy services"
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
        aria-label="Branding and Identity Design Services Banner"
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
                Best Branding & Identity Design Services in India{" "}
                <span className="text-blue-500">
                  Delivering Unique Logos, Visual Identities & Brand Strategies
                </span>
              </h1>

              <div className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                <p>
                  Consumers choose brands that inspire trust and emotion. Capyngen's branding design services combine strategic positioning with world-class artistry to build cohesive brand identities that transcend geographical borders. From ambitious startups to global enterprises, we shape brands that command attention.
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
                  src={assets.branding1}
                  alt="Branding and Identity Design Services by Capyngen"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SPLIT INTRO SECTION: REASONS FOR BRANDING DESIGN TO BE CONSIDERED       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.branding2}
                alt="Reasons for branding design to be considered"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Reasons for Branding Design to Be Considered
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                In an interconnected world overwhelmed by continuous advertising, a brand is far more than a name or logo — it is the customer experience, the narrative, and the emotional connection. Capyngen provides systematic, research-backed branding solutions that help businesses discover their distinct identity and build lasting customer loyalty.
              </p>
              <p>
                A unified visual identity allows your company to differentiate itself cleanly from competitors, gain immediate trust, and maximize marketing ROI across all physical and digital channels.
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
      {/* 3. FULL SIZE BANNER 1: BUILD A BRAND THAT STANDS OUT                       */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.brandingFullSize}
            alt="Build a brand that stands out"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Build a brand that stands out
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We develop distinctive brand identities that have the power to make deep and lasting impressions.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Create My Brand
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT ARE BRANDING DESIGN SERVICES? (6 CARDS - White Background)         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What Are Branding Design Services?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              It is not only the visual elegance of design products by Capyngen that makes them stand out, but also the delivery of a complete end-to-end branding ecosystem.
            </p>
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
            Turn into a global sensation with the help of{" "}
            <span className="font-semibold text-blue-600">Capyngen's</span> expert branding design services.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY YOUR BUSINESS NEEDS BRANDING DESIGN (Split Light Section)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.branding9}
                alt="Why your business needs branding design"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Your Business Needs Branding Design
            </h2>
            <ul className="space-y-3.5 text-slate-700 text-base">
              {whyNeedsBrandingList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">{item.title}</strong>{" "}
                    – {item.text}
                  </span>
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
      {/* 6. WHAT MAKES PROFESSIONAL BRANDING DESIGN STAND OUT (6 Dark Cards)       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What Makes Professional Branding Design Services Stand Out?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR BRANDING DESIGN PROCESS (6 STEPS)                                   */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Branding Design Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              From in-depth discovery to worldwide deployment, our structured workflow creates memorable and scalable branding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
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
      {/* 8. FULL SIZE BANNER 2: DEFINE YOUR VISUAL STORY                           */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.brandingFullSize2}
            alt="Define your visual story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Define your visual story
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Working from logo to complete design systems, we build your brand’s indelible presence in the digital world.
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
      {/* 9. BRANDING DESIGN TRENDS (6 Cards - White Background)                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Branding Design Trends
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {cardsSectionImageData2.map((item, idx) => (
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
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Learn more about our branding services, delivery timelines, and brand guidelines implementation."
        items={faqItems}
      />

      {/* ========================================================================= */}
      {/* 11. BOTTOM FINAL CTA BANNER (Below FAQs)                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Develop a Memorable Brand Identity
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Develop a brand identity that is memorable, consistent, and impactful with Capyngen’s branding design services. Schedule a consultation today!
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingIdentityDesign;
