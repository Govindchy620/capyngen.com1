import React from "react";
import { assets } from "../assets/assets";
import Banner6 from "../components/Banner6";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import {
  FaBuilding,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaExpand,
  FaGlobe,
  FaHeartbeat,
  FaIndustry,
  FaMoneyBillWave,
  FaRocket,
  FaShoppingCart,
  FaUniversity,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import GetStarted from "../components/GetStarted";
import BenefitsSection from "../components/BenefitsSection";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSectionImage from "../components/CardsSectionImage";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/e-commerce#webpage",
  url: "https://www.capyngen.com/industries/e-commerce",
  name: "IT Solutions for E-Commerce | AI, CRM & DevOps for Online Stores – Capyngen",
  description:
    "Capyngen delivers tailored IT solutions for e-commerce. From AI and CRM to UI/UX design and DevOps, we empower online shopping platforms to scale and perform.",
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
    url: "https://www.capyngen.com/assets/ecommerceBanner1.jpg",
    width: 1200,
    height: 800,
    caption: "E-Commerce Industry Solutions by Capyngen",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Industries",
        item: "https://www.capyngen.com/industries",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "E-Commerce",
        item: "https://www.capyngen.com/industries/e-commerce",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/industries/e-commerce#service",
  name: "E-Commerce IT Solutions",
  serviceType:
    "AI Integration, CRM Development, UI/UX Design, DevOps Services for Online Stores",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Capyngen delivers tailored IT solutions for e-commerce. From AI and CRM to UI/UX design and DevOps, we empower online shopping platforms to scale and perform.",
  url: "https://www.capyngen.com/industries/e-commerce",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/eCommIndustry11-D8Ie3s9Z.jpg",
    caption: "E-Commerce IT Solutions | AI | CRM | DevOps | UI/UX Design",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are IT solutions for e-commerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT solutions for e-commerce are technology services that help online businesses efficiently develop, manage, and grow their platforms. These include AI, CRM, DevOps, and UI/UX design services.",
      },
    },
    {
      "@type": "Question",
      name: "In what ways can Internet sites' online shopping experience be enhanced and perfected through artificial intelligence-based solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI enhances the online shopping experience by personalizing purchases, streamlining customer support, predicting trends, and boosting sales through data-driven decision-making.",
      },
    },
    {
      "@type": "Question",
      name: "What is the specific duty and contribution that is given by DevOps in the scenario of e-commerce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevOps ensures rapid development, predictable performance, and high scalability for e-commerce platforms and applications.",
      },
    },
    {
      "@type": "Question",
      name: "Why is CRM software critical in e-commerce businesses that are operating in today's internet market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM is essential in e-commerce as it manages customer data, automates marketing, and enhances retention through personalized interactions.",
      },
    },
    {
      "@type": "Question",
      name: "In what ways does UI/UX design impact online sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A user-friendly UI/UX design improves navigation, builds trust, and increases conversions by simplifying the purchase process.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly does digital transformation mean in the context of the e-commerce sector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital transformation in e-commerce involves adopting advanced technologies to automate operations, enhance customer experiences, and encourage innovation across the business.",
      },
    },
    {
      "@type": "Question",
      name: "Do these solutions possess the correct features and functionalities implemented in them that can efficiently handle and support international e-commerce operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our solutions are scalable and designed to support international operations, global compliance, multiple currencies, and multilingual functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Can your AI products be customized to fit varying businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We customize every AI model and integration to align precisely with your business goals and operational needs.",
      },
    },
    {
      "@type": "Question",
      name: "How long would it take on average to properly install these different IT solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline depends on the project scope. Smaller setups typically take a few weeks, while large-scale integrations may take several months to complete.",
      },
    },
    {
      "@type": "Question",
      name: "Will you provide maintenance and support after the initial introduction phase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide continuous maintenance, timely updates, and optimization to ensure your e-commerce platform performs at its best.",
      },
    },
    {
      "@type": "Question",
      name: "Can the app be mobile-first and cross-platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop responsive, mobile-first, and cross-platform e-commerce applications to deliver seamless experiences across all devices.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure excellent UI/UX for e-commerce apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We ensure high engagement through user-centric designs that follow industry standards, focus on usability, and adapt responsively to all screens.",
      },
    },
    {
      "@type": "Question",
      name: "Are analytics and reporting features included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our e-commerce solutions include analytics and reporting tools that track sales, customer behavior, and performance metrics to support data-driven growth.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate my existing online store to a custom e-commerce platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we handle seamless migrations from platforms like Shopify, Magento, and WooCommerce to fully customized e-commerce solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do your services cover both B2B and B2C e-commerce solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in developing tailored B2B and B2C e-commerce applications, marketplace platforms, and online stores for all business types.",
      },
    },
  ],
};

const ECommerceIndustry = () => {
  const faqItems = [
    {
      question: "What are IT solutions for e-commerce?",
      answer:
        "These are technology services that provide online businesses with the development, management, and growth of their sites efficiently, including AI, CRM, DevOps, and UI/UX design.",
    },
    {
      question:
        "In what ways can Internet sites' online shopping experience be enhanced and perfected through artificial intelligence-based solutions?",
      answer:
        "AI personalizes the purchasing experience, streamlines customer service, predicts trends, and boosts sales through data-driven decision-making.",
    },
    {
      question:
        "What is the specific duty and contribution that is given by DevOps in the scenario of e-commerce?",
      answer:
        "DevOps facilitates rapid development, predictable performance, and scalability for e-commerce platforms and applications.",
    },
    {
      question:
        "Why is CRM software critical in e-commerce businesses that are operating in today's internet market?",
      answer:
        "CRM helps with the management of customer data, automates marketing processes, and increases customer retention through personalized interaction.",
    },
    {
      question: "In what ways does UI/UX design impact online sales?",
      answer:
        "An interface that is user-friendly guides the customer journey, builds credibility, and increases conversions through a seamless purchase experience.",
    },
    {
      question:
        "What exactly does digital transformation mean in the context of the e-commerce sector?",
      answer:
        "It entails incorporating modern technologies to automate operations, enhance customer experience, and foster a culture of innovation in business.",
    },
    {
      question:
        "Do these solutions possess the correct features and functionalities implemented in them that can efficiently handle and support international e-commerce operations?",
      answer:
        "Yes, our products are scalable and support worldwide traffic, multiple languages, and global compliance.",
    },
    {
      question: "Can your AI products be customized to fit varying businesses?",
      answer:
        "Without a doubt — we tailor and customize every artificial intelligence model and integration uniquely to match your business requirements.",
    },
    {
      question:
        "How long would it take on average to properly install these different IT solutions?",
      answer:
        "The time frame depends on the project scope — small setups may take a few weeks, while full-scale transformations can take several months.",
    },
    {
      question:
        "Will you provide maintenance and support after the initial introduction phase?",
      answer:
        "Yes, we offer routine maintenance, timely updates, and optimization to ensure your site performs at the highest level.",
    },
    {
      question: "Can the app be mobile-first and cross-platform?",
      answer:
        "Yes, we create responsive and cross-platform e-commerce apps to ensure seamless user experiences across all devices.",
    },
    {
      question: "How do you ensure excellent UI/UX for e-commerce apps?",
      answer:
        "We deliver e-commerce apps that follow industry UI/UX standards, user-centric design principles, and responsive layouts to maximize engagement.",
    },
    {
      question: "Are analytics and reporting features included?",
      answer:
        "Yes, analytics and reporting are included — giving you access to sales reports, customer behavior insights, and performance tracking to plan growth effectively.",
    },
    {
      question:
        "Can you migrate my existing online store to a custom e-commerce platform?",
      answer:
        "Yes, we handle migrations seamlessly from Shopify, Magento, or WooCommerce to fully customized e-commerce solutions.",
    },
    {
      question: "Do your services cover both B2B and B2C e-commerce solutions?",
      answer:
        "We specialize in developing tailored B2B and B2C e-commerce applications, marketplace platforms, and online stores for all business types.",
    },
  ];
  const slidesData = [
    {
      id: 1,
      title: "Redefine Online Retail with Scalable E-Commerce Solutions",
      subtitle:
        "Creating digital stores that are fast, safe, and optimized for conversions is what makes you reach worldwide markets.",
      image: assets.eCommIndustry11,
      ctaText: "Explore Projects",
      ctaLink: "/contact-us",
    },
    {
      id: 2,
      title: "Powering the Next-Gen Online Marketplace",
      subtitle:
        "Offerings that are personalized, data-focused, and designed mobility-first are what characterize next-generation e-commerce flows.",
      image: assets.eCommIndustry2,
      ctaText: "Get Started",
      ctaLink: "/contact-us",
    },
    {
      id: 3,
      title: "Sell Smarter, Grow Faster",
      subtitle:
        "One action that has the potential of completely changing your e-commerce business is automating it and using AI-driven analytics to guide your decisions.",
      image: assets.eCommIndustry3,
      ctaText: "Get Started",
      ctaLink: "/contact-us",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "",
      description:
        "Our personalized information technology solutions accurately meet every facet of the development and management process that is involved with e-commerce.",
      icon: <FaRocket className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "E-Commerce Application and Website Development: Focus on the design and development of secure, scalable, high-performance, and easy-to-use online stores that offer better user experience and convenient transactions for the customers.",
      icon: <FaBuilding className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "AI-Powered Tools: Personalization engines, intelligent recommendations, and predictive analysis to drive sales.",
      icon: <FaHeartbeat className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "CRM Integration involves the comprehensive management of leads, the automation of marketing processes, and strategies aimed at significantly improving customer retention rates.",
      icon: <FaShoppingCart className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "DevOps Implementation: More regular releases, greater stability, and smoother running.",
      icon: <FaIndustry className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "UI/UX Optimization: Create friction-free, responsive experiences that drive conversions.",
      icon: <FaUniversity className="text-4xl text-indigo-600" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Increased Operating Effectiveness",
      description: "Integration and automation of systems decrease labor work.",
      image: assets.eCommIndustry4,
      cardBg: "bg-blue-100",
    },
    {
      title: "More Conversions",
      description:
        "With streamlined UI/UX and AI technology, user interaction is enhanced.",
      image: assets.eCommIndustry5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Scalability",
      description:
        "Cloud and DevOps services allow the business to grow instantly.",
      image: assets.eCommIndustry6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Forecast trends, know customer activity, and make data-driven decisions.",
      image: assets.eCommIndustry7,
      cardBg: "bg-red-100",
    },
    {
      title: "Global Reach",
      description:
        "Make easy online purchase experiences across geographies and devices.",
      image: assets.eCommIndustry8,
      cardBg: "bg-gray-100",
    },
    {
      title: "Cost Optimization",
      description: "Minimize overheads by optimal backend system streamlining.",
      image: assets.eCommIndustry9,
      cardBg: "bg-blue-100",
    },
  ];
  const solutionsData = [
    {
      title: "AI-Powered Product Intelligence",
      desc: (
        <>
          <p>
            Identify customer preferences and leverage intelligent insights to
            increase sales through upselling and cross-selling strategies.
          </p>
          <p className="py-5">Key capabilities include:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Product-specific Advice: Identify the specific products and
              product features that customers favor.
            </li>
            <li>
              Predictive Analytics: Increase efficiency in demand forecasting,
              automate inventory management, and design better price strategies.
            </li>
            <li>
              Virtual Assistants & Chatbots: Offer real-time support and enhance
              customer satisfaction.
            </li>
            <li>
              AI Marketing Automation: Reach the right audience effectively
              through data-informed campaigns.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "DevOps for E-Commerce Companies",
      desc: (
        <>
          <p>
            Our DevOps practices designed specifically for e-commerce businesses
            accelerate the development process, improve stability, and drive
            sustainable growth.
          </p>
          <p className="py-5">We focus on:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Continuous Integration & Deployment: Deploy faster without
              downtime.
            </li>
            <li>
              Increased Reliability: Automated testing and monitoring for
              consistent site performance.
            </li>
            <li>
              Scalable Infrastructure: Easily scale and handle large traffic
              bursts efficiently.
            </li>
            <li>
              Less Time-to-Market: Ship features quickly and stay ahead of
              competition.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "CRM Software for E-Commerce Businesses",
      desc: (
        <>
          <p>
            Efficient customer data management is key to e-commerce success. Our
            CRM software centralizes all customer interactions, boosting
            retention and satisfaction.
          </p>
          <p className="py-5">Core functionalities include:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Centralized Database: View all customer histories in a single
              dashboard.
            </li>
            <li>
              Automated Campaigns: Run email, SMS, and remarketing campaigns
              effortlessly.
            </li>
            <li>
              Behavioral Tracking: Personalize promotions and experiences based
              on user behavior.
            </li>
            <li>
              Seamless Integrations: Connect easily with existing tools and
              systems.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "UI/UX Design for E-Commerce Sites",
      desc: (
        <>
          <p>
            We create e-commerce designs that not only look stunning but also
            drive conversions by offering intuitive, mobile-first, and
            user-centric experiences.
          </p>
          <p className="py-5">Our design strengths include:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Intuitive Navigation and Search Functions: Help users find
              products easily.
            </li>
            <li>
              Mobile-First Thinking: Ensure consistent experiences on all
              devices.
            </li>
            <li>
              High-Quality Visuals: Showcase products beautifully to encourage
              purchases.
            </li>
            <li>
              Streamlined Checkout: Reduce drop-offs and cart abandonments.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Digital Transformation in the E-Commerce Industry",
      desc: (
        <>
          <p>
            To stay competitive, e-commerce brands must adopt digital
            transformation strategies that optimize operations and enhance
            customer engagement.
          </p>
          <p className="py-5">Our digital transformation services cover:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Modern Cloud Infrastructure: Scale quickly, efficiently, and
              cost-effectively.
            </li>
            <li>
              Automated Order & Inventory Systems: Improve speed and accuracy in
              fulfillment.
            </li>
            <li>
              Integrated Customer Service: Centralize communication for better
              user experiences.
            </li>
            <li>
              Artificial Intelligence and Analytics: Gain insights and refine
              marketing strategies for greater effectiveness.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          IT Solutions for E-Commerce | AI, CRM & DevOps for Online Stores –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers tailored IT solutions for e-commerce. From AI and CRM to UI/UX design and DevOps, we empower online shopping platforms to scale and perform."
        />
        <meta
          name="keywords"
          content="IT Solutions for E-Commerce | AI, CRM & DevOps for Online Stores – Capyngen"
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
      {/* 1. HERO SECTION (BANNER6 - RETAINED EXACTLY AS REQUESTED)                 */}
      {/* ========================================================================= */}
      <Banner6
        slides={slidesData}
        autoplay={true}
        autoplaySpeed={4000}
        showDots={true}
        textColor="text-white"
        arrowColor="text-white"
        bgHover="hover:bg-white/20"
      />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / E-COMMERCE (SPLIT LIGHT SECTION)                            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.eCommIndustry1}
                alt="E-Commerce IT Solutions"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Tailored IT Solutions for Modern E-Commerce
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> delivers tailored IT solutions for global e-commerce and DTC retail brands. From predictive AI product recommendation engines and unified CRM systems to high-conversion UI/UX design and elastic DevOps, we empower online stores to scale smoothly.
              </p>
              <p>
                We construct robust storefronts that reduce cart abandonment, automate high-volume fulfillment, and provide personalized omni-channel customer journeys.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Conversion-focused mobile-first UI/UX engineering reducing checkout friction.",
                "AI-driven personalization, smart search filters, and dynamic pricing models.",
                "High-speed cloud infrastructure engineered to withstand viral traffic spikes.",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-none bg-blue-600 mt-2 shrink-0" />
                  <p className="text-slate-700 text-sm sm:text-base">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule E-Commerce Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CAPYNGEN APPROACHES TO E-COMMERCE (DARK CARDS GRID)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Capyngen’s Approaches towards E-Commerce IT
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Targeted technology solutions meeting every facet of the online shopping ecosystem from store design to automated fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-blue-400 text-3xl mb-4">
                    {item.icon}
                  </div>
                  {item.title && (
                    <h3
                      className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-150"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                  )}
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
      {/* 4. ADVANTAGES OF OUR IT SOLUTIONS (LIGHT CARDS)                           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Advantages of Our E-Commerce IT Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Enhancing conversion rates, improving inventory precision, and minimizing operating costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-md relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-48 mb-6 border border-slate-200 overflow-hidden rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ENTERPRISE E-COMMERCE CAPABILITIES (DARK CARDS)                        */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Enterprise E-Commerce Capabilities
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              State-of-the-art AI, CRM, and cloud DevOps designed to elevate customer loyalty and operational scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-slate-300 text-sm leading-relaxed space-y-2">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY CAPYNGEN (SPLIT LIGHT SECTION)                                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[480px]">
              <img
                src={assets.eCommIndustry10}
                alt="Why Capyngen E-Commerce"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Leading Retailers Choose Capyngen
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We unite deep retail commerce acumen with enterprise engineering to ensure your store scales effortlessly:
            </p>

            <div className="space-y-4 pt-2">
              {[
                {
                  title: "Industry Expertise",
                  text: "Comprehensive knowledge of global retail trends, headless architectures, and checkout optimizations.",
                },
                {
                  title: "End-to-End Solutions",
                  text: "From wireframing and frontend styling to payment gateway integrations and cloud hosting.",
                },
                {
                  title: "Global Scalability",
                  text: "Architectures engineered to handle multi-currency, multi-lingual, and international fulfillment.",
                },
                {
                  title: "Security & Compliance",
                  text: "PCI-DSS certified payment workflows, fraud detection, and robust data encryption.",
                },
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-slate-200 bg-slate-50 flex items-start gap-4 hover:border-blue-600 transition-colors duration-150"
                >
                  <div className="w-2.5 h-2.5 rounded-none bg-blue-600 mt-2 shrink-0" />
                  <div>
                    <h4
                      className="font-bold text-slate-900 text-base mb-1"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {pillar.title}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CALL TO ACTION BANNER                                                  */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Collaboratively, Let's Build Your High-Performance E-Commerce Platform
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From intelligent AI recommendations to high-converting UI/UX design, we power your online store for compounding growth.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#2563eb] font-bold py-4 px-10 rounded-none shadow-lg transition-colors duration-150 shadow-xl group text-base"
              >
                Work With Us
                <span className="text-white group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default ECommerceIndustry;
