import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaCheckCircle,
  FaDraftingCompass,
  FaRocket,
  FaExchangeAlt,
  FaCommentsDollar,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaHeadset,
  FaTools,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/ecommerce-website-design#webpage",
  url: "https://www.capyngen.com/ecommerce-website-design",
  name: "E-commerce Design | Website, App & UI Design Services – Capyngen",
  description:
    "Enhance your online store with Capyngen’s e-commerce design expertise. We offer custom website, app UI, and database design solutions to boost your sales.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
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
  "@id": "https://www.capyngen.com/ecommerce-website-design#service",
  name: "E-Commerce Design Services",
  serviceType:
    "E-commerce Website & App UI/UX Design, Digital Storefront Design, Conversion-Optimised E-commerce Design",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Enhance your online store with Capyngen’s e-commerce design expertise. We offer custom website, app UI, and database design solutions to boost your sales.",
  url: "https://www.capyngen.com/ecommerce-website-design",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/eCommDesign1-BipcLe85.png",
    caption: "E-commerce Design | Website, App & UI Design Services – Capyngen",
  },
  offers: {
    "@type": "Offer",
    price: "Custom",
    priceCurrency: "INR",
    availability: "InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/ecommerce-website-design#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is e-commerce design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-commerce design is the process of building online stores that are visually attractive, user-friendly, and designed for high conversion rates across web and mobile platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Why is e-commerce UI design important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good UI design is essential as it makes everything clear and easy to use. It enhances the user experience, which in turn increases engagement and sales for an online store.",
      },
    },
    {
      "@type": "Question",
      name: "What is an e-commerce app UI design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-commerce app UI design focuses on creating user-friendly, engaging, and mobile-optimized interfaces for Android and iOS e-commerce applications.",
      },
    },
    {
      "@type": "Question",
      name: "How does e-commerce database design help my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proper database design helps manage product listings, customer data, and transaction histories securely and efficiently within an e-commerce platform.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide custom e-commerce website design solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides fully customized e-commerce design solutions aligned with your brand identity, business goals, and user expectations.",
      },
    },
    {
      "@type": "Question",
      name: "What are e-commerce website design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-commerce website design services include layout creation, responsive design, UI/UX optimization, and seamless integration with payment gateways and analytics tools.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen handle e-commerce mobile app design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen develops cross-platform e-commerce apps featuring push notifications, personalized dashboards, and secure, smooth payment systems.",
      },
    },
    {
      "@type": "Question",
      name: "What industries can benefit from e-commerce web design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industries like retail, fashion, electronics, healthcare, and food delivery, along with any business selling online globally, can benefit from Capyngen’s e-commerce design expertise.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer affordable e-commerce website design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide affordable and efficient e-commerce design services without compromising on quality, performance, or scalability for small and medium-sized businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure high conversion rates through e-commerce design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We achieve high conversion rates through strategic UI/UX design, user flow optimization, intuitive checkout experiences, and visually engaging layouts.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen integrate third-party tools in e-commerce web design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen integrates third-party services like payment solutions, CRM systems, analytics, and marketing tools for enhanced functionality and performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide maintenance and support for e-commerce platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer ongoing support and maintenance, ensuring your e-commerce store runs securely, efficiently, and remains up-to-date.",
      },
    },
    {
      "@type": "Question",
      name: "Can you design e-commerce websites and apps for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen works with startups, SMEs, and enterprises to deliver scalable, visually appealing, and conversion-optimized web and mobile e-commerce platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to design a full e-commerce platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The design timeline depends on the project's complexity and features, typically taking 4 to 12 weeks for complete web and mobile e-commerce platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen for e-commerce design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen combines global experience, creative talent, and a focus on UI/UX excellence to deliver high-performing, visually engaging e-commerce platforms that turn ideas into successful businesses.",
      },
    },
  ],
};

const EcommerceDesign = () => {
  const faqItems = [
    {
      question: "What is e-commerce design?",
      answer:
        "E-commerce design revolves around creating a beautiful, easy to navigate, and responsive online store as a way to improve the buying experience.",
    },
    {
      question: "Why is e-commerce design important?",
      answer:
        "A good design will, among other things, increase customer engagement, provide higher conversions, decrease bounce rates, and also create a strong brand.",
    },
    {
      question: "Can you create custom e-commerce designs?",
      answer:
        "Yes, our team builds tailor-made online stores that are specifically designed to reflect both your brand and business ambitions.",
    },
    {
      question: "Which platforms do you design for?",
      answer:
        "We create designs on platforms like Shopify, Magento, WooCommerce, OpenCart, PrestaShop, and custom CMS platforms.",
    },
    {
      question: "Do you provide mobile-friendly designs?",
      answer:
        "Definitely, every one of our e-commerce designs is responsive and fully optimized for mobile devices and tablets.",
    },
    {
      question: "Can you redesign an existing e-commerce store?",
      answer:
        "Of course, we provide redesign services to overhaul UI/UX, improve checkout speed, and modernise looks.",
    },
    {
      question: "Do you integrate UI/UX best practices?",
      answer:
        "Definitely, our designs adhere strictly to conversion-focused UX patterns, frictionless checkout flows, and accessible navigation.",
    },
    {
      question: "Can you create designs for international stores?",
      answer:
        "Exactly, we build multilingual, multi-currency architectures engineered to serve customers across global territories.",
    },
    {
      question: "How do you ensure fast-loading websites?",
      answer:
        "We optimize assets, scripts, and layouts ensuring minimal bundle size, fast Time-To-Interactive, and rapid page rendering.",
    },
    {
      question: "Do you provide design mockups before development?",
      answer:
        "Definitely, we deliver clickable Figma wireframes and interactive prototypes for full review prior to engineering handoff.",
    },
    {
      question: "Can your designs improve conversion rates?",
      answer:
        "Yes. We strategically optimize product detail pages, sticky CTAs, one-page checkouts, and trust badges to maximize sales.",
    },
    {
      question: "Are SEO considerations included in e-commerce design?",
      answer:
        "Yes, all architectures are structured for optimal search crawlability, schema markups, and fast performance scores.",
    },
    {
      question: "Do you integrate payment gateways in your designs?",
      answer:
        "Definitely, our designs accommodate seamless flows for Stripe, PayPal, Razorpay, Apple Pay, and local checkout providers.",
    },
    {
      question: "Can your designs handle large product catalogs?",
      answer:
        "Yes, we architect scalable mega-menus, faceted filtering, and database search patterns capable of housing tens of thousands of SKUs.",
    },
    {
      question: "Do you provide post-launch support for your designs?",
      answer:
        "Of course, we offer continuous maintenance, A/B testing optimization, and feature evolution to keep your store at peak performance.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "E-commerce Website Design",
      description:
        "Visually striking e-commerce websites designed to convert. Responsive, fast, and engineered for both growing startups and high-volume enterprise stores.",
      image: assets.eCommDesign4,
    },
    {
      title: "E-commerce UI Design",
      description:
        "Stunning, intuitive interfaces that maximize customer engagement, eliminate friction during browsing, and boost retention rates.",
      image: assets.eCommDesign5,
    },
    {
      title: "E-commerce App UI Design",
      description:
        "Smart mobile app UI designs for Android and iOS that deliver seamless, gesture-driven shopping journeys with high repeat purchase rates.",
      image: assets.eCommDesign6,
    },
    {
      title: "E-commerce Database Design",
      description:
        "Robust, secure, and scalable database schemas that guarantee fast product queries, secure transaction histories, and seamless inventory sync.",
      image: assets.eCommDesign7,
    },
    {
      title: "Custom E-commerce Solutions",
      description:
        "Bespoke storefronts tailored specifically to your unique product lines, custom business workflows, and distinct visual branding.",
      image: assets.eCommDesign8,
    },
    {
      title: "E-commerce Web Design Services",
      description:
        "A perfect blend of art and engineering: mobile-responsive, lightning-fast layouts designed to capture organic search traffic and drive conversions.",
      image: assets.eCommDesign9,
    },
    {
      title: "E-commerce Mobile App Design",
      description:
        "Cross-platform app designs equipped with personalized home screens, smart search, push notification triggers, and 1-click checkout.",
      image: assets.eCommDesign10,
    },
    {
      title: "Affordable E-commerce Website Design",
      description:
        "High-performance design packages made accessible for direct-to-consumer startups and growing brands seeking rapid market entry.",
      image: assets.eCommDesign11,
    },
    {
      title: "Enterprise E-commerce Solutions",
      description:
        "Multi-vendor, omnichannel, and high-traffic e-commerce design systems built with advanced checkout flows and deep analytics integration.",
      image: assets.eCommDesign12,
    },
  ];

  const features = [
    {
      icon: <FaCheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Proof & MVP",
      description:
        "Create and validate Minimum Viable Products to test storefront concepts, gather early user data, and attract investors.",
    },
    {
      icon: <FaDraftingCompass className="w-8 h-8 text-blue-500" />,
      title: "Prototype Development",
      description:
        "Fabricate interactive, high-fidelity prototypes of web and mobile apps to validate user journeys before writing backend code.",
    },
    {
      icon: <FaRocket className="w-8 h-8 text-blue-500" />,
      title: "Launch Strategy",
      description:
        "Utilize data-driven release plans to ensure maximum visibility, zero launch-day friction, and instant transaction success.",
    },
    {
      icon: <FaExchangeAlt className="w-8 h-8 text-blue-500" />,
      title: "Flexible Models",
      description:
        "Scale your design and engineering resources smoothly with flexible engagement models customized to your release deadlines.",
    },
  ];

  const solutionsData = [
    {
      title: "E-commerce Consulting",
      desc: "Strategic guidance to adopt modern omnichannel storefront architectures, improve UX metrics, and increase average order value.",
      icon: <FaCommentsDollar className="text-3xl text-blue-400" />,
    },
    {
      title: "E-commerce Security",
      desc: "Robust storefront security, PCI-DSS compliance frameworks, secure authentication, and encrypted payment gateway integrations.",
      icon: <FaShieldAlt className="text-3xl text-blue-400" />,
    },
    {
      title: "E-commerce Implementation",
      desc: "Pixel-perfect implementation of bespoke storefronts and third-party integrations with zero disruption to active business operations.",
      icon: <FaCloudUploadAlt className="text-3xl text-blue-400" />,
    },
    {
      title: "E-commerce Help Desk Services",
      desc: "Reliable round-the-clock technical troubleshooting ensuring frictionless buyer experiences and high merchant peace of mind.",
      icon: <FaHeadset className="text-3xl text-blue-400" />,
    },
    {
      title: "E-commerce Management & Support",
      desc: "Continuous catalog updates, banner refreshes, seasonal campaign optimizations, and performance tuning.",
      icon: <FaTools className="text-3xl text-blue-400" />,
    },
    {
      title: "E-commerce Migration",
      desc: "Seamless replatforming across Shopify, WooCommerce, Magento, or custom stacks with zero lost data and preserved SEO authority.",
      icon: <FaExchangeAlt className="text-3xl text-blue-400" />,
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Ecommerce Website Design Services – Best Ecommerce Design Company in India
        </title>
        <meta
          name="description"
          content="Professional ecommerce website design services in India. We create responsive, user-friendly, and high-converting online stores for your business."
        />
        <meta
          name="keywords"
          content="ecommerce website design, best ecommerce Website Designing Company in Gurgaon, best ecommerce design agency, online store design India, ecommerce website design india, responsive ecommerce design, custom ecommerce website design"
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
        aria-label="Ecommerce Website Design Banner"
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
                Best Ecommerce Website Design{" "}
                <span className="text-blue-500">
                  Services in India Delivering Responsive, High-Converting Stores
                </span>
              </h1>

              <div className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                <p>
                  We design and develop high-converting e-commerce websites and mobile apps for ambitious brands worldwide. Our solutions combine frictionless UI/UX design, mobile responsiveness, and scalable database architecture to maximize transactions and long-term customer value.
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
                  src={assets.eCommDesign1}
                  alt="Ecommerce Design Illustration"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SPLIT INTRO SECTION: E-COMMERCE DESIGN TRANSFORMS YOUR STORE            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.eCommDesign2}
                alt="E-Commerce Design Transforms Your Digital Store"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              E-Commerce Design Transforms Your Digital Store
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                A professionally designed storefront is the single best way to let your catalog shine. The combination of intuitive e-commerce UI design, frictionless mobile app experiences, and scalable database infrastructure builds a powerful foundation that converts clicks into repeat customers.
              </p>
              <p>
                Partnering with Capyngen gives your brand the decisive competitive edge in the global e-commerce marketplace through customer-tested layouts and optimized checkout pathways.
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
      {/* 3. FULL SIZE BANNER 1: DESIGN THAT CONVERTS VISITORS INTO CUSTOMERS        */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.eCommDesignFullSize}
            alt="Design that converts visitors into customers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Design that converts visitors into customers
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We design engaging, conversion-focused online shopping experiences that delight customers and drive repeat business.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Design My Store
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DESIGNING E-COMMERCE SOLUTIONS THAT DRIVE SALES (9 CARDS - White)        */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Designing E-commerce Solutions That Drive Sales
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We design scalable, aesthetically pleasing digital storefronts for both startups and enterprises, driving substantial engagement and revenue growth.
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
            Empowering growth through innovative e-commerce design partnerships with{" "}
            <span className="font-semibold text-blue-600">Capyngen</span>.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPERT DESIGN APPROACH & MVP VALIDATION (4 Dark Cards)                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              E-commerce Solutions by Expert Designers
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Custom e-commerce website design solutions accompanied with market validation, user testing, scalable architecture, and customer feedback loops.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="mb-4">{feat.icon}</div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FULL SIZE BANNER 2: TURN YOUR E-COMMERCE VISION INTO REALITY           */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.eCommDesignFullSize2}
            alt="Turn your e-commerce vision into reality"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Turn your e-commerce vision into reality
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Store designs that are intuitive to navigate, responsive on all screens, and engineered for sustainable conversion growth.
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
      {/* 7. COMPREHENSIVE E-COMMERCE SOLUTIONS (6 Cards - Dark Blue)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              End-to-End E-Commerce Capabilities
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Flexible engagement models and specialized capabilities to support your online store from initial launch to high-volume scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
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
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Explore answers regarding our e-commerce design process, platforms supported, and checkout optimizations."
        items={faqItems}
      />

      {/* ========================================================================= */}
      {/* 9. BOTTOM FINAL CTA BANNER (Below FAQs)                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to Launch Your High-Converting Online Store?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect with our global e-commerce design team to build custom web and mobile platforms that increase conversions and drive business growth.
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

export default EcommerceDesign;
