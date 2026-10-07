import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaBullhorn,
  FaChartLine,
  FaDollarSign,
  FaHeart,
  FaRocket,
  FaShieldAlt,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/digital-marketing#webpage",
  url: "https://www.capyngen.com/digital-marketing",
  name: "Best Digital Marketing Services | End-to-End Marketing Solutions",
  description:
    "Looking for the best digital marketing services in India? Capyngen offers end-to-end digital marketing services to increase traffic, leads, and sales for your business.",
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
  "@id": "https://www.capyngen.com/digital-marketing#service",
  name: "Top Digital Marketing Services in India",
  serviceType:
    "Digital Marketing, SEO, PPC Advertising, Social Media Marketing, Content Marketing, Email Marketing, Conversion Rate Optimization",
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
    "Looking for the best digital marketing services in India? Capyngen offers end-to-end digital marketing services to increase traffic, leads, and sales for your business.",
  url: "https://www.capyngen.com/digital-marketing",
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
      name: "What is digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing is a form of promotional marketing undertaken digitally using online media, which includes social media, search engines, e-mail, and websites.",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of digital marketing to business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It enables companies to become more familiar, lure visitors to their web pages, acquire potential clients and, accordingly, make more purchases, in addition to building the brand stronger in the digital environment by the means of the internet.",
      },
    },
    {
      "@type": "Question",
      name: "What services are offered by a digital marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some of the services offered by the agency include search engine optimisation (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing, as well as email campaigns, among others, and analytics.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to grow a small business with the help of digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed. The online promotional procedures are highly adaptable, cost-effective, and highly focused on reaching potential buyers.",
      },
    },
    {
      "@type": "Question",
      name: "How does a digital marketing company differ from an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is also similar that they are both marketing service providers. Unlike the agencies that are often capable of providing more detailed solutions, companies tend to focus on developing tailor-made strategies or providing consulting.",
      },
    },
    {
      "@type": "Question",
      name: "What is the time to break even in digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The various outputs of the different channels and approaches tend to last 3-6 months under the SEO and content marketing, whereas the paid campaigns may provide instant outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer tailored digital marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Capyngen can develop custom digital marketing campaigns that can be relevant to the business objectives and industry of your organisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to handle the online marketing of startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, surely. We provide digital marketing services to startups with the objective of making swift steps and becoming a regular in the global market.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide online digital marketing services to international companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen, the professional global international digital marketing agency, is the answer to the issues of your enterprise and global business ventures.",
      },
    },
    {
      "@type": "Question",
      name: "What is your measurement of campaign success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some of the main alterations in the performance indicators are the object of the tracking activity, like the number of people visiting the site, leads, the transformation of the latter into customers and ROI, also the interaction of the audience with the brand.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer social media marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed. Our participation is in the planning, content development, execution of advertising and measuring success in three big social media networks.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to sell more through digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed. Once the right audience is drawn, and the optimisation of the campaigns is conducted, the digital marketing tool will open the path to achieving more conversions and increased revenues.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide PPC and SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a full-fledged digital marketing company, the services of which involve the optimisation of search engines and paid advertisements.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The prices are set depending on the degree of the service, size and the duration of the campaign. Capyngen has the facility to scale businesses based on their size and price.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I begin with the digital marketing services of Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Begin with a free consultation to discuss your goals and receive a company-specific plan of digital marketing.",
      },
    },
  ],
};

const DigitalMarketing = () => {
  const faqItems = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing is a form of promotional marketing undertaken digitally using online media, which includes social media, search engines, e-mail, and websites.",
    },
    {
      question: "What is the importance of digital marketing to business?",
      answer:
        "It enables companies to become more familiar, lure visitors to their web pages, acquire potential clients and, accordingly, make more purchases, in addition to building the brand stronger in the digital environment by the means of the internet.",
    },
    {
      question: "What services are offered by a digital marketing agency?",
      answer:
        "Some of the services offered by the agency include search engine optimisation (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing, as well as email campaigns, among others, and analytics.",
    },
    {
      question:
        "Is it possible to grow a small business with the help of digital marketing?",
      answer:
        "Indeed. The online promotional procedures are highly adaptable, cost-effective, and highly focused on reaching potential buyers.",
    },
    {
      question: "How does a digital marketing company differ from an agency?",
      answer:
        "It is also similar that they are both marketing service providers. Unlike the agencies that are often capable of providing more detailed solutions, companies tend to focus on developing tailor-made strategies or providing consulting.",
    },
    {
      question: "What is the time to break even in digital marketing?",
      answer:
        "The various outputs of the different channels and approaches tend to last 3-6 months under the SEO and content marketing, whereas the paid campaigns may provide instant outcomes.",
    },
    {
      question: "Do you offer tailored digital marketing services?",
      answer:
        "Absolutely. Capyngen can develop custom digital marketing campaigns that can be relevant to the business objectives and industry of your organisation.",
    },
    {
      question: "Are you able to handle the online marketing of startups?",
      answer:
        "Yes, surely. We provide digital marketing services to startups with the objective of making swift steps and becoming a regular in the global market.",
    },
    {
      question:
        "Do you provide online digital marketing services to international companies?",
      answer:
        "Yes. Capyngen, the professional global international digital marketing agency, is the answer to the issues of your enterprise and global business ventures.",
    },
    {
      question: "What is your measurement of campaign success?",
      answer:
        "Some of the main alterations in the performance indicators are the object of the tracking activity, like the number of people visiting the site, leads, the transformation of the latter into customers and ROI, also the interaction of the audience with the brand.",
    },
    {
      question: "Do you offer social media marketing?",
      answer:
        "Indeed. Our participation is in the planning, content development, execution of advertising and measuring success in three big social media networks.",
    },
    {
      question: "Is it possible to sell more through digital marketing?",
      answer:
        "Indeed. Once the right audience is drawn, and the optimisation of the campaigns is conducted, the digital marketing tool will open the path to achieving more conversions and increased revenues.",
    },
    {
      question: "Do you provide PPC and SEO services?",
      answer:
        "Yes. We are a full-fledged digital marketing company, the services of which involve the optimisation of search engines and paid advertisements.",
    },
    {
      question: "What is the cost of digital marketing?",
      answer:
        "The prices are set depending on the degree of the service, size and the duration of the campaign. Capyngen has the facility to scale businesses based on their size and price.",
    },
    {
      question:
        "Where do I begin with the digital marketing services of Capyngen?",
      answer:
        "Begin with a free consultation to discuss your goals and receive a company-specific plan of digital marketing.",
    },
  ];

  const solutionsData = [
    {
      title: "Search Engine Optimisation (SEO)",
      desc: "Rank your site higher on renowned search engines for high-intent keywords through on-page optimization, quality backlinks, technical SEO, and localized Google Maps ranking.",
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: "Engage your customers where they spend their time: Facebook, Instagram, LinkedIn, X, and YouTube with targeted creatives, community management, and paid social campaigns.",
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      desc: "Generate instant exposure and qualified lead volumes at the lowest Cost Per Click (CPC) across Google Search, Display, Shopping, and high-converting retargeting funnels.",
    },
    {
      title: "Content Marketing",
      desc: "Build authority and organic search visibility with value-driven blog writing, landing page copy, case studies, whitepapers, and compelling visual storytelling.",
    },
    {
      title: "Email Marketing",
      desc: "Achieve the highest ROI with personalized lead nurturing sequences, automated drip workflows, product launch announcements, and customer retention campaigns.",
    },
    {
      title: "Conversion Rate Optimisation (CRO)",
      desc: "Turn passive traffic into paying customers through rigorous heatmap analysis, A/B testing, CTA optimization, and seamless friction-free checkout flows.",
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Global Reach",
      description: "Expand your customer footprint far beyond local boundaries to capture international markets.",
      icon: <FaTools className="text-3xl text-blue-400" />,
    },
    {
      title: "Targeted Marketing",
      description: "Direct your advertising budget specifically toward high-intent buyer segments that yield maximum return.",
      icon: <FaDollarSign className="text-3xl text-blue-400" />,
    },
    {
      title: "Cost-Efficient",
      description: "Agile digital campaigns that deliver measurable leads at a fraction of traditional media costs.",
      icon: <FaUsers className="text-3xl text-blue-400" />,
    },
    {
      title: "Measurable Impact",
      description: "Track impressions, clicks, conversion rates, and revenue with precision through live analytics dashboards.",
      icon: <FaShieldAlt className="text-3xl text-blue-400" />,
    },
    {
      title: "High Interaction Levels",
      description: "Form direct personal relationships with buyers and establish lasting brand loyalty online.",
      icon: <FaBullhorn className="text-3xl text-blue-400" />,
    },
    {
      title: "Greater ROI",
      description: "Continuously optimize campaigns to scale your bottom-line return on marketing investment.",
      icon: <FaHeart className="text-3xl text-blue-400" />,
    },
  ];

  const steps = [
    {
      title: "Research & Analysis",
      description: "Deep dive into your business model, competitor landscape, and target customer behavior.",
    },
    {
      title: "Strategy Development",
      description: "Architect a customized, multi-channel digital growth roadmap aligned with your business KPIs.",
    },
    {
      title: "Execution",
      description: "Deploy high-performance SEO, targeted paid ads, content distribution, and social campaigns.",
    },
    {
      title: "Tracking & Optimisation",
      description: "Continuously monitor campaign KPIs, test variations, and adjust budgets to maximize output.",
    },
    {
      title: "Reporting",
      description: "Deliver transparent, comprehensive monthly performance reports with actionable insights.",
    },
    {
      title: "Continuous Improvement",
      description: "Iterate strategies based on empirical data to ensure your business maintains sustained growth.",
    },
  ];

  const features = [
    {
      icon: <FaRocket className="text-3xl text-blue-400" />,
      title: "Tailored Strategies",
      description: "Bespoke marketing funnels built uniquely around your product, margins, and market positioning.",
    },
    {
      icon: <FaUsers className="text-3xl text-blue-400" />,
      title: "Proven Track Record",
      description: "Demonstrated success scaling traffic and revenue across B2B, eCommerce, and enterprise sectors.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-400" />,
      title: "Certified Specialists",
      description: "Google Ads certified, Meta Blueprint certified, and seasoned technical SEO specialists.",
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-400" />,
      title: "Analytics-Based Decisions",
      description: "Campaign decisions driven purely by hard statistical data, attribution models, and conversion metrics.",
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-400" />,
      title: "Open & Honest Reporting",
      description: "Full visibility into ad spend, cost per acquisition, and net return with zero hidden fees.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Best Digital Marketing Services | End-to-End Marketing Solutions
        </title>
        <meta
          name="description"
          content="Looking for the best digital marketing services in India? Capyngen offers end-to-end digital marketing services to increase traffic, leads, and sales for your business."
        />
        <meta
          name="keywords"
          content="Digital Marketing Services | Result-Driven Marketing Agency – Capyngen"
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
        aria-label="Digital Marketing Services Hero"
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
                Digital Marketing Services That Drive Real Growth
              </h1>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-normal">
                Big ideas, busy markets, creative campaigns. Increase exposure, user engagement, and measurable sales with end-to-end data-driven digital marketing solutions designed to keep pace.
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
                  src={assets.digitalMarketing1}
                  alt="Digital Marketing Solutions Showcase"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT IS DIGITAL MARKETING? (SPLIT LIGHT SECTION)                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.digitalMarketing2}
                alt="What is Digital Marketing"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What is Digital Marketing?
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Digital marketing encompasses all promotional efforts leveraging online channels and connected devices. Unlike traditional advertising, digital marketing offers granular precision targeting, live conversion analytics, and rapid optimization loops.
              </p>
              <p>
                When executed strategically, your digital presence generates scalable organic traffic, qualified sales leads, and sustainable long-term brand authority.
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
      {/* 3. FULL SIZE BANNER 1: EXPAND YOUR BRAND                                  */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.digitalMarketingFullSize}
            alt="Expand your brand in the digital world"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Expand your brand in the digital world
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We collaborate with you to find, interact with, and convert customers across every digital touchpoint.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Boost My Business
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR DIGITAL MARKETING SERVICES (6 CARDS - White Background)             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Digital Marketing Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We deliver complete digital solutions designed to help ambitious companies acquire traffic, leads, and sales across every channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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
      {/* 5. WHY CHOOSE CAPYNGEN FOR DIGITAL MARKETING (6 Dark Cards)                */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen for Digital Marketing Services?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Investing in performance digital marketing is the cornerstone of sustainable modern business expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, idx) => (
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
      {/* 6. OUR DIGITAL MARKETING PROCESS (6 Dark Cards)                            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Digital Marketing Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Our practice is based on a mindful and evidence-driven approach to ensure maximum growth outcomes per campaign.
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
      {/* 7. FULL SIZE BANNER 2: TURN CLICKS INTO CUSTOMERS                         */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.digitalMarketingFullSize2}
            alt="Turn clicks into customers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Turn clicks into customers
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our marketers strategise sharp, information-oriented measures to realise quantifiable revenue growth.
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
      {/* 8. WHAT MAKES US THE PERFECT PARTNER (5 CARDS - White Background)          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What Makes Us the Perfect Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-sm relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="mb-4">{feat.icon}</div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WHY WORK WITH A DIGITAL MARKETING AGENCY (Split Light Section)         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Work With a Digital Marketing Agency?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Working with Capyngen, you receive more than basic task execution — you gain a high-impact digital growth partner.
            </p>
            <ul className="space-y-3.5 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Save valuable internal time and stay focused on core operations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Leverage enterprise-grade analytics, automation, and testing tools.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Seamlessly scale campaign budgets up or down based on verified performance.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Build lasting multi-channel brand authority and measurable market dominance.</span>
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
                src={assets.digitalMarketing3}
                alt="Why work with a digital marketing agency"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Learn more about our digital marketing campaigns, ROI tracking, and channel optimizations."
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
              Enhance Your Web Presence Now
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Discuss your digital marketing goals with our certified specialists and receive a custom roadmap designed to grow your business online.
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

export default DigitalMarketing;
