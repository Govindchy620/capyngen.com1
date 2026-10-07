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
  FaExchangeAlt,
  FaRocket,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/ppc#webpage",
  url: "https://www.capyngen.com/ppc",
  name: "PPC Management Services | Capyngen",
  description:
    "Capyngen helps brands grow through innovative digital marketing, website design, e-commerce development, and data-driven strategies tailored for success.",
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.linkedin.com/company/capyngen",
      "https://www.instagram.com/capyngen",
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Pay-Per-Click (PPC) Advertising Services",
    serviceType: "PPC Campaign Management",
    provider: {
      "@type": "Organization",
      name: "Capyngen",
      url: "https://www.capyngen.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    description:
      "Capyngen delivers data-driven PPC advertising solutions for Google Ads, Bing, Meta, and YouTube. Our certified experts optimize ad spend and boost lead generation for businesses worldwide.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PPC Service Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Google Ads Management",
          description:
            "Comprehensive Google Ads setup, optimization, and reporting for better conversions.",
        },
        {
          "@type": "Offer",
          name: "YouTube Ads Campaigns",
          description:
            "Video-based ad strategy and targeting for brand awareness and audience engagement.",
        },
        {
          "@type": "Offer",
          name: "Bing & Display Ads",
          description:
            "Cross-platform ad management to expand your digital reach.",
        },
      ],
    },
  },
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    url: "https://www.capyngen.com",
    name: "Capyngen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pay-Per-Click (PPC) Advertising Services",
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
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  url: "https://www.capyngen.com/ppc",
  description:
    "Capyngen offers result-driven PPC services designed to boost your online visibility, generate leads, and increase ROI through targeted Google Ads, YouTube Ads, and social media campaigns.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PPC Advertising Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Management",
          description:
            "Comprehensive Google Ads management to optimize search, display, and shopping campaigns for maximum conversions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "YouTube Video Advertising",
          description:
            "Create and manage YouTube ad campaigns to increase brand reach and engagement with targeted video ads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media PPC Campaigns",
          description:
            "Run paid ads across Facebook, Instagram, and LinkedIn to boost engagement and generate high-quality leads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PPC Audit and Optimization",
          description:
            "Detailed audits and performance tracking to ensure efficient ad spend and improve ROI on all active campaigns.",
        },
      },
    ],
  },
  image: "https://www.capyngen.com/assets/ppc1-HKkEwlmX.png",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is PPC advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPC (Pay-Per-Click) advertising is a model where advertisers pay a fee each time their ad is clicked. It’s a fast and measurable way to drive targeted traffic to your website.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I invest in PPC services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPC provides instant visibility on search engines and social platforms, delivering faster results than organic marketing. It’s ideal for lead generation and brand awareness.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms do you manage PPC campaigns on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen manages PPC campaigns across Google Ads, YouTube, Facebook, Instagram, and LinkedIn — optimized for your industry and audience.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure PPC campaign success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track key performance indicators like CTR, conversion rate, cost-per-acquisition, and ROI. Our reports give full visibility into campaign performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a free PPC audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen offers a free 30-day PPC trial and initial audit to analyze your current campaigns and identify improvement opportunities.",
      },
    },
  ],
};

const PPC = () => {
  const faqItems = [
    {
      question:
        "Which PPC management services offer the best ROI for small businesses?",
      answer:
        "Capyngen provides the highest ROI based on Google Ad optimisation with pay-per-click and Meta Ad optimisation and daily bid adjustments. The 4–8X returns in 60 days are typical of small businesses using our PPC management services.",
    },
    {
      question: "What are the fundamentals of pay-per-click advertising?",
      answer:
        "Pay-per-click advertising will not involve any charge until users click your ads on Google Ads, Microsoft Ads, Meta Ads, and social sites. Capyngen specialises in keyword research, ad copy testing, landing page optimization and conversion tracking to achieve maximum results.",
    },
    {
      question:
        "What are the best platforms for managing PPC campaigns in India?",
      answer:
        "India is dominated by Google Ads (Search/Display), Meta Ads (Facebook/Instagram), Microsoft Ads, and LinkedIn Sponsored Content. Capyngen deploys all platforms along with e-commerce advertising on Amazon and Flipkart to cover all customer bases.",
    },
    {
      question:
        "Is PPC advertising suitable for startups and local businesses?",
      answer:
        "Absolutely. PPC advertising provides instant exposure, Gurugram targeting, and good budget control, making it economical for startups. Capyngen ranks local businesses instantly and scales them nationwide—unlike SEO.",
    },
    {
      question: "How long does it take to see ROI from PPC campaigns?",
      answer:
        "Capyngen clients realise a positive ROI within 14–30 days. Optimised campaigns typically generate 3X returns by Day 60 and 5–8X by Day 90 due to constant A/B testing and negative keyword management.",
    },
    {
      question:
        "What are the key benefits of pay-per-click advertising for businesses?",
      answer:
        "Real-time traffic, accurate targeting, complete budget control, quantifiable ROI, and scalability. Capyngen achieves 28% lower CPCs and 3X more conversions compared to the industry for small businesses.",
    },
    {
      question:
        "What are the prices of professional PPC management services in India?",
      answer:
        "Capyngen plans start at very affordable pricing (10% of ad spend), including strategy, daily optimisation, and reporting. Larger budgets are supported with custom enterprise plans to ensure improved ROAS.",
    },
    {
      question: "Is it possible to use PPC to compete with big brands?",
      answer:
        "Yes! PPC levels the playing field with hyper-local and long-tail keyword targeting. Capyngen has helped Gurugram salons outperform big chains, including boosting Sector 14 hair spa conversions to 47%.",
    },
    {
      question:
        "Why is Capyngen different from the other PPC agencies in India?",
      answer:
        "Capyngen offers 24/7 monitoring, combines Google Ads, Meta Ads, Microsoft Advertising, and e-commerce platforms, and uses a proprietary bid algorithm. A 92% client retention rate reflects our position as a top PPC service provider in India.",
    },
    {
      question: "What is Capyngen doing to ensure PPC advertising success?",
      answer:
        "Capyngen provides performance guarantees: Week 1 setup, Week 2 optimisation, Month 1 break-even ROAS, and Month 2 at 4X target. Strategy meetings and a transparent Looker Studio dashboard ensure full accountability.",
    },
  ];

  const solutionsData = [
    {
      title: "Google Ads Management",
      desc: "Comprehensive Search, Display, Shopping, and YouTube Video Ads created and fine-tuned for high-intent search queries and optimal return on ad spend.",
    },
    {
      title: "Social Media PPC Advertising",
      desc: "Hyper-targeted paid campaigns across Facebook, Instagram, LinkedIn, and X engineered to engage prospective buyers and drive lower CPA lead generation.",
    },
    {
      title: "PPC Management Services",
      desc: "Continuous bid strategy adjustments, keyword negative matching, landing page conversion rate testing, and cross-channel attribution reporting.",
    },
    {
      title: "E-commerce PPC Advertising",
      desc: "Product feed optimization for Google Shopping, Amazon PPC, and marketplace ads (Flipkart, Myntra) with dynamic retargeting to maximize sales.",
    },
  ];

  const steps = [
    {
      title: "Business Analysis",
      description: "Analyze your commercial goals, margin requirements, customer lifetime value, and competitor campaigns.",
    },
    {
      title: "Keyword & Audience Research",
      description: "Identify high-intent, low-waste search keywords and granular in-market audience segments.",
    },
    {
      title: "Campaign Architecture Setup",
      description: "Structure ad groups, match types, conversion tracking tags, and automated smart bidding rules.",
    },
    {
      title: "Ad Creative & Copy Creation",
      description: "Write compelling headlines, test dynamic ad assets, and build high-converting landing page variants.",
    },
    {
      title: "Launch & Live Monitoring",
      description: "Deploy campaigns with live real-time bid monitoring to avoid wasted spend in initial learning phases.",
    },
    {
      title: "Continuous Optimisation",
      description: "Weekly negative keyword pruning, demographic adjustments, and creative refreshing to scale ROAS.",
    },
  ];

  const features = [
    {
      icon: <FaCheckCircle className="text-3xl text-blue-400" />,
      title: "Certified Specialists",
      description: "Google Ads Premier and Meta Certified media buyers managing your campaigns directly.",
    },
    {
      icon: <FaDraftingCompass className="text-3xl text-blue-400" />,
      title: "Personalized Strategies",
      description: "Bespoke campaign funnels customized to your profit margins, target CAC, and inventory speed.",
    },
    {
      icon: <FaRocket className="text-3xl text-blue-400" />,
      title: "Data-Driven Execution",
      description: "Decisions guided by rigorous statistical testing, predictive bidding algorithms, and conversion tracking.",
    },
    {
      icon: <FaExchangeAlt className="text-3xl text-blue-400" />,
      title: "Transparent Dashboards",
      description: "24/7 access to live Looker Studio dashboards tracking impressions, clicks, leads, and ROAS in real time.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "SEO",
      description: "An organic compounding process that builds long-term domain authority and brand credibility over months.",
      image: assets.ppc6,
    },
    {
      title: "Social Media Marketing",
      description: "Builds wide brand awareness and community trust across channels, supporting ongoing buyer retention.",
      image: assets.ppc7,
    },
    {
      title: "PPC Marketing",
      description: "Generates real-time customer contacts within hours with precise budget control and accountable, instant ROI.",
      image: assets.ppc8,
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Pay-Per-Click Advertising Company in India | Best PPC Services
        </title>
        <meta
          name="description"
          content="Capyngen offers expert pay-per-click advertising in India with data-driven PPC strategies to increase traffic, leads, and conversions."
        />
        <meta
          name="keywords"
          content="Pay-Per-Click Advertising | ROI-Driven Ad Campaigns"
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
        aria-label="Pay-Per-Click Advertising Hero"
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
                Pay-Per-Click Advertising Services That Drive Instant Results
              </h1>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-normal">
                Big ideas, precision bidding, measurable return. As a leading Google & Meta ads partner, we execute data-backed PPC campaigns that attract high-intent buyers, boost qualified leads, and maximize your ROAS.
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
                  src={assets.ppc1}
                  alt="PPC Advertising Showcase"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT IS PAY-PER-CLICK ADVERTISING? (SPLIT LIGHT SECTION)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.ppc2}
                alt="What is Pay-Per-Click Advertising"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What is Pay-Per-Click Advertising?
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Pay-Per-Click is a high-speed digital advertising model in which marketers only pay when a qualified user clicks on their ad. It allows your business to appear instantly at the top of search results and social feeds without waiting for organic rankings.
              </p>
            </div>
            <ul className="space-y-3.5 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Google Ads (High-intent Search, Display, Shopping, and YouTube).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Meta Ads (Facebook and Instagram targeted user feeds).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>LinkedIn Sponsored Content for executive B2B decision-makers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>E-commerce marketplace ads on Amazon and regional portals.</span>
              </li>
            </ul>
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
      {/* 3. FULL SIZE BANNER 1: MAXIMIZE ROI WITH SMART PPC CAMPAIGNS               */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.ppcFullSize}
            alt="Maximize ROI with smart PPC campaigns"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Maximize ROI with smart PPC campaigns
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Through data-driven bid management, we convert qualified prospect traffic into predictable revenue streams.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Start Campaign
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE PAY-PER-CLICK MARKETING? (Split Light Section)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Pay-Per-Click Marketing?
            </h2>
            <ul className="space-y-3.5 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Immediate Visibility:</strong> Appear at the very top of Google and Meta feeds in just hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Hyper-Niche Targeting:</strong> Reach buyers filtered by exact commercial keywords and intent.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Total Budget Control:</strong> Set exact limits on daily, weekly, and monthly campaign spend.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Measurable ROAS:</strong> Transparent conversion attribution on every rupee invested.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Instant Competitive Advantage:</strong> Outrank legacy competitors immediately.</span>
              </li>
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

          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.ppc3}
                alt="Why Choose Pay-Per-Click Marketing"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PPC ADVERTISING SERVICES (4 CARDS - White Background)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Pay-Per-Click Advertising Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Tailored, results-driven paid advertising packages designed to achieve aggressive commercial targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {solutionsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-sm relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PPC CAMPAIGN PROCESS (6 Dark Cards)                                 */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our PPC Campaign Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We engineer, launch, and optimize your paid advertising campaigns through a rigorous empirical process.
            </p>
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
      {/* 7. FULL SIZE BANNER 2: GET INSTANT VISIBILITY ONLINE                      */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.ppcFullSize2}
            alt="Get instant visibility online"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get instant visibility online
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Targeted pay-per-click advertising puts your offerings right in front of high-intent searchers ready to convert.
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
      {/* 8. WHY CHOOSE US (4 Feature Cards - Dark Section)                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Us as Your PPC Partner
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Proven track record managing successful pay-per-click ad campaigns across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
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
      {/* 9. PPC VS. OTHER PROMOTION CHANNELS (3 Image Cards - White Background)     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              PPC vs. Other Promotion Channels
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              While SEO and organic social build lasting brand authority, PPC delivers instant agility and laser precision. A combined strategy is unbeatable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
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
        desc="Explore answers regarding our PPC management pricing, expected ROAS timelines, and platform coverage."
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
              Ready to Accelerate Your Customer Acquisition?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Partner with certified PPC experts to launch campaigns that increase qualified sales leads, reduce cost per acquisition, and scale your business.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Schedule Free PPC Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPC;
