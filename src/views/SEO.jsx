import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaSearch,
  FaFileAlt,
  FaLink,
  FaWrench,
  FaMapMarkerAlt,
  FaMicrophone,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import SeoStatsSection from "../components/SeoStatsSection";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/seo#webpage",
  url: "https://www.capyngen.com/seo",
  name: "Best SEO Company in India | Professional AI SEO Services",
  description:
    "Capyngen is the best SEO company in India providing professional SEO services like technical SEO, on-page SEO, off-page SEO, local SEO near you.",
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
  "@id": "https://www.capyngen.com/seo#service",
  name: "Search Engine Optimization (SEO) Services",
  serviceType:
    "SEO,ON PAGE SEO,OFF PAGE SEO,AI+SEO,TECHNICAL SEO, Search Engine Optimization, Organic Search Optimization",
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
    "Capyngen is the best SEO company in India providing professional SEO services like technical SEO, on-page SEO, off-page SEO, local SEO near you.",
  url: "https://www.capyngen.com/seo",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/seoHero-B9XLly_w.png",
    caption: "SEO Services – Capyngen",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process of making your webpage more attractive to search engine to attract more organic traffic of acceptable quality is known as Search Engine Optimization (SEO).",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of Search Engine Optimization (SEO) to my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By the best seo agency, SEO services India will ensure that your site is on the first page of different search engines, with the right people to see your site, with increased visitors and consequently sales or leads and all this in accordance with your business model by best seo agency.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of seeing the results of Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a rule, the results of SEO services can be observed in 3-6 months in case of the mediocre competition, good health of the website, and adequacy of the strategy provided by seo company in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "So what is the difference between online and offline SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content optimization and web structure are the primary on-page SEO services activities, but the activities of off-page SEO typically imply backlinks, social media, PR, and other external circumstances by seo services in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "What are the keywords in search engine optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The phrases that searchers utilise are known as keywords. The right keyword targeting will mean that people who have to find the information that you give will find your site through the best SEO services.",
      },
    },
    {
      "@type": "Question",
      name: "What roles do contents play in Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content that is of high quality and is relevant to what the user is requesting will perform better in ranking, as well as make the user stay longer and ultimately get more links with seo company in India.",
      },
    },
    {
      "@type": "Question",
      name: "What is link building in Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link building is the process of connecting other websites to your website to gain power, trust, and ranking among the search results are enhanced by an SEO service provider in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are meta tags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta tags also provide hints to the search engine on the subject of a web page, fonts used and the title, description, and keywords that are optimized by the best SEO company in India.",
      },
    },
    {
      "@type": "Question",
      name: "What is the impact of mobile optimization on Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Designing websites to be user-friendly through mobile devices is also under the design of ensuring that the user experiences are positive, and the desktop and mobile rankings are thus higher since the search engines prioritise the mobile-friendly sites through the seo agency India.",
      },
    },
    {
      "@type": "Question",
      name: "What is local SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The local SEO services helps businesses to be located in an efficient way in local searches and it then brings local customers to the business brought about by the seo services India.",
      },
    },
    {
      "@type": "Question",
      name: "What is Search Engine Optimization (SEO) performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install Google Analytics, Google Search and utilise other SEO services software to monitor the traffic, ranking and conversion completion of the Top Digital marketing company.",
      },
    },
    {
      "@type": "Question",
      name: "Does Search engine optimization (SEO) ensure the number one ranking in Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO services do not assure top rankings quite easily, but it visually raises the traffic and the likelihood of the site appearing in the highest results of competitors in the search engine by using ppc services provider.",
      },
    },
    {
      "@type": "Question",
      name: "What is techno SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical SEO services imply that the websites are incredibly fast in their loading, present the appropriate information to the search engine due to accessibility, can be easily indexed, securely encrypted, and even permit the search engines to work with structured data provided by the seo company in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "What should the frequency of Search engine optimization (SEO) be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a highly dynamic field as the strategy, techniques, and objectives are to be adjusted according to trends and altering algorithms that implies in the real world that a strategy is regularly revised by the best seo agency.",
      },
    },
    {
      "@type": "Question",
      name: "Why should it be a professional SEO company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One similar to Capyngen possesses an SEO consultant and a team of experts that provide custom-made SEO services, continuous Search Engine Optimization (SEO), and measurable evidences that can work in your business development and growth online.",
      },
    },
  ],
};

const SEO = () => {
  const faqItems = [
    {
      question: "What is Search Engine Optimization (SEO)?",
      answer:
        "The process of making your webpage more attractive to search engine to attract more organic traffic of acceptable quality is known as Search Engine Optimization (SEO).",
    },
    {
      question:
        "What is the importance of Search Engine Optimization (SEO) to my business?",
      answer:
        "By the best seo agency, SEO services India will ensure that your site is on the first page of different search engines, with the right people to see your site, with increased visitors and consequently sales or leads and all this in accordance with your business model by best seo agency.",
    },
    {
      question:
        "What is the duration of seeing the results of Search Engine Optimization (SEO)?",
      answer:
        "As a rule, the results of SEO services can be observed in 3-6 months in case of the mediocre competition, good health of the website, and adequacy of the strategy provided by seo company in Gurgaon.",
    },
    {
      question:
        "So what is the difference between online and offline SEO services?",
      answer:
        "Content optimization and web structure are the primary on-page SEO services activities, but the activities of off-page SEO typically imply backlinks, social media, PR, and other external circumstances by seo services in Gurgaon.",
    },
    {
      question: "What are the keywords in search engine optimization (SEO)?",
      answer:
        "The phrases that searchers utilise are known as keywords. The right keyword targeting will mean that people who have to find the information that you give will find your site through the best SEO services.",
    },
    {
      question:
        "What roles do contents play in Search Engine Optimization (SEO)?",
      answer:
        "Content that is of high quality and is relevant to what the user is requesting will perform better in ranking, as well as make the user stay longer and ultimately get more links with seo company in India.",
    },
    {
      question: "What is link building in Search Engine Optimization (SEO)?",
      answer:
        "Link building is the process of connecting other websites to your website to gain power, trust, and ranking among the search results are enhanced by an SEO service provider in India.",
    },
    {
      question: "What are meta tags?",
      answer:
        "Meta tags also provide hints to the search engine on the subject of a web page, fonts used and the title, description, and keywords that are optimized by the best SEO company in India.",
    },
    {
      question:
        "What is the impact of mobile optimization on Search Engine Optimization (SEO)?",
      answer:
        "Designing websites to be user-friendly through mobile devices is also under the design of ensuring that the user experiences are positive, and the desktop and mobile rankings are thus higher since the search engines prioritise the mobile-friendly sites through the seo agency India.",
    },
    {
      question: "What is local SEO services?",
      answer:
        "The local SEO services helps businesses to be located in an efficient way in local searches and it then brings local customers to the business brought about by the seo services India.",
    },
    {
      question: "What is Search Engine Optimization (SEO) performance?",
      answer:
        "Install Google Analytics, Google Search and utilise other SEO services software to monitor the traffic, ranking and conversion completion of the Top Digital marketing company.",
    },
    {
      question:
        "Does Search engine optimization (SEO) ensure the number one ranking in Google?",
      answer:
        "SEO services do not assure top rankings quite easily, but it visually raises the traffic and the likelihood of the site appearing in the highest results of competitors in the search engine by using ppc services provider.",
    },
    {
      question: "What is techno SEO services?",
      answer:
        "Technical SEO services imply that the websites are incredibly fast in their loading, present the appropriate information to the search engine due to accessibility, can be easily indexed, securely encrypted, and even permit the search engines to work with structured data provided by the seo company in Gurgaon.",
    },
    {
      question:
        "What should the frequency of Search engine optimization (SEO) be?",
      answer:
        "SEO is a highly dynamic field as the strategy, techniques, and objectives are to be adjusted according to trends and altering algorithms that implies in the real world that a strategy is regularly revised by the best seo agency.",
    },
    {
      question: "Why should it be a professional SEO company in India?",
      answer:
        "One similar to Capyngen possesses an SEO consultant and a team of experts that provide custom-made SEO services, continuous Search Engine Optimization (SEO), and measurable evidences that can work in your business development and growth online.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "SEO Audit & Strategy",
      description:
        "Comprehensive site diagnostics and competitive keyword architecture that unlock high-ranking organic opportunities.",
      image: assets.seo1,
    },
    {
      title: "On-Page SEO",
      description:
        "Semantic meta tags, structured schema data, keyword placement, and internal linking to maximize search engine indexing.",
      image: assets.seo2,
    },
    {
      title: "Off-Page SEO & Link Building",
      description:
        "Authoritative, high-trust backlink acquisition and digital PR to build verifiable domain authority and search dominance.",
      image: assets.seo3,
    },
    {
      title: "Technical SEO",
      description:
        "Core Web Vitals tuning, lightning-fast site speed, mobile optimization, crawl budget management, and clean XML sitemaps.",
      image: assets.seo4,
    },
    {
      title: "Local SEO",
      description:
        "Google Business Profile optimization, local citation building, and geo-targeted ranking to dominate regional search queries.",
      image: assets.seo5,
    },
    {
      title: "Content Strategy & Creation",
      description:
        "High-intent blogs, authoritative guides, and landing pages designed to rank at the top and engage human readers.",
      image: assets.seo6,
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Increase Visibility",
      description: "Rank at the top of organic search results for the commercial keywords that drive buyers to your business.",
      icon: <FaSearch className="text-3xl text-blue-400" />,
    },
    {
      title: "Affordable Solutions",
      description: "Scalable search optimization packages that deliver superior ROI for both ambitious startups and established firms.",
      icon: <FaFileAlt className="text-3xl text-blue-400" />,
    },
    {
      title: "Drive Traffic & Leads",
      description: "Attract intent-driven qualified organic traffic that converts reliably into inbound leads and closed deals.",
      icon: <FaLink className="text-3xl text-blue-400" />,
    },
    {
      title: "Custom SEO Strategies",
      description: "Bespoke optimization blueprints tailored to your specific industry vertical and market competitors.",
      icon: <FaWrench className="text-3xl text-blue-400" />,
    },
    {
      title: "Trusted Agency",
      description: "A battle-tested track record of lifting client websites to Page 1 on competitive global terms.",
      icon: <FaMapMarkerAlt className="text-3xl text-blue-400" />,
    },
    {
      title: "Boost ROI",
      description: "Compounds over time to lower your Customer Acquisition Cost (CAC) compared to continuous paid advertising.",
      icon: <FaMicrophone className="text-3xl text-blue-400" />,
    },
  ];

  const steps = [
    {
      title: "Discovery & Goal Setting",
      description: "Understand your target market, buyer personas, commercial goals, and core competitive set.",
    },
    {
      title: "Audit & Keyword Research",
      description: "Diagnose on-site technical friction and identify high-value search intent keywords.",
    },
    {
      title: "Strategy Development",
      description: "Architect content roadmaps, link acquisition plans, and technical remediation schedules.",
    },
    {
      title: "Implementation",
      description: "Execute precision on-page optimization, content publishing, speed boosts, and schema tags.",
    },
    {
      title: "Monitoring & Optimization",
      description: "Continuously track position movements, algorithmic updates, impressions, and click-through rates.",
    },
    {
      title: "Reporting & Feedback",
      description: "Deliver transparent monthly reports with verified rank improvements, organic traffic, and revenue metrics.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>Best SEO Company in India | Professional AI SEO Services</title>
        <meta
          name="description"
          content="Capyngen is the best SEO company in India providing professional SEO services like technical SEO, on-page SEO, off-page SEO, local SEO near you."
        />
        <meta
          name="keywords"
          content="Search Engine Optimization | Best SEO Company – Capyngen"
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
      {/* 1. HERO SECTION (MICROSOFT-STYLE: Editorial, Minimalist, High Contrast)   */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[90vh] lg:min-h-screen text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden bg-gradient-to-r from-[#121316] via-[#1a1c22] to-[#121316]"
        aria-label="SEO Services Hero"
      >
        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              {/* Microsoft-style Yellow/Amber Accent Pill */}
              <span className="inline-block bg-[#ffb900] text-black font-semibold text-xs px-2.5 py-1 mb-6 rounded-none tracking-wide">
                New
              </span>

              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Boost Your Brand Visibility with AI-Powered SEO Services
              </h1>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-normal">
                Big ideas, busy markets, measurable results. Capyngen provides affordable, data-driven Search Engine Optimization services that ensure your business ranks at the top and stays ahead.
              </p>

              <div>
                {/* Microsoft-style Solid White High-Contrast Button */}
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3.5 px-8 rounded-none transition-colors duration-150 shadow-lg text-base"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </Link>
              </div>
            </div>

            {/* Right Graphic (Clean Showcase against sleek dark canvas) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[560px] xl:max-w-[620px] flex items-center justify-center overflow-hidden">
                <img
                  src={assets.seoHero}
                  alt="SEO Services Illustration"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR SEO SERVICES (6 CARDS - White Background)                           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our SEO Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              From technical website audits to localized search rankings, we deploy targeted optimizations that bring real organic growth.
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
            Discover the strength of our online SEO services in India that help you gain more visitors and increase revenue.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURES & BENEFITS (6 Dark Cards)                                      */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Features & Benefits
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Search engine optimization is an investment in durable digital equity that scales with your business over time.
            </p>
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
      {/* 4. FULL SIZE BANNER 1: RANK HIGHER, REACH FURTHER                          */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.seoFullSize}
            alt="Rank higher, reach further"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Rank higher, reach further
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Through Search Engine Optimization best practices, we elevate your digital visibility to drive high-intent leads and purchases.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Improve Ranking
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SEO STATS & LIVE CHARTS SECTION                                         */}
      {/* ========================================================================= */}
      <SeoStatsSection />

      {/* ========================================================================= */}
      {/* 6. OUR SEO PROCESS (6 Dark Cards)                                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our SEO Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We apply an organized, battle-tested methodology to elevate your website's search performance methodically.
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
      {/* 7. FULL SIZE BANNER 2: LET YOUR BRAND BE FOUND FIRST                       */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.seoFullSize2}
            alt="Let your brand be found first"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let your brand be found first
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Improve your ranking on Google and major search engines using proven, ethical search engine optimization strategies.
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
      {/* 8. WHY CHOOSE CAPYNGEN AS YOUR SEO PARTNER (Split White Section)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen as Your SEO Partner
            </h2>
            <ul className="space-y-4 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Established History:</strong> Proven track record of delivering top search visibility for high-growth firms.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Custom Strategies:</strong> Bespoke technical and content blueprints aligned strictly with your market goals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Affordable Packages:</strong> Cost-effective search marketing packages designed to scale seamlessly with your revenue.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Open Reporting:</strong> Transparent, real-time KPI tracking for impressions, keyword positions, and ROI.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Dedicated Support:</strong> Agile direct communication with senior SEO consultants dedicated to your project.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.seo7}
                alt="Why Choose Capyngen as Your SEO Partner"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Learn more about SEO timelines, link building practices, and keyword rankings."
        items={faqItems}
      />

      {/* ========================================================================= */}
      {/* 10. BOTTOM FINAL CTA BANNER (Below FAQs)                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Take Your Business to the Top of Search Results
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Partner with Capyngen to achieve measurable, compounding growth in organic traffic, qualified sales leads, and revenue.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Book Your Free SEO Consultation Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;
