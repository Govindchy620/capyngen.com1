import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/smm#webpage",
  url: "https://www.capyngen.com/smm",
  name: "Social Media Marketing Agency in India | Growth-Driven SMM Services",
  description:
    "Capyngen is a trusted social media marketing agency in India offering professional social media marketing services, management, and ads to grow your brand.",
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
  "@id": "https://www.capyngen.com/smm#service",
  name: "Social Media Marketing Services",
  serviceType:
    "Social Media Marketing, SMM, Social Media Advertising, Community Management, Content Creation, SMM Agency, Facebook Marketing, YouTube Marketing",
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
    "Capyngen is a trusted social media marketing agency in India offering professional social media marketing services, management, and ads to grow your brand.",
  url: "https://www.capyngen.com/smm",
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
      name: "What is social media marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is marketing goods, services or brands of a business through social media platforms, namely Facebook, Instagram, LinkedIn, Twitter, etc, to create awareness and/or involvement of the user with the help of viral social media campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of social media marketing to business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media is effective in marketing companies as it utilises technologies that previously were only available to big organisations. It helps small businesses form new relationships, promote traffic and sales, and produce interesting content for the target groups with the help of social media services in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are some of the services offered by a social media marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The services will be social media marketing services, ad campaigns, content generation, data interpretation and strategy development offered by a leading social media agency in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "Is social media marketing effective for the growth of small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Planned campaigns are one of the effective strategies of small businesses to be known by potential customers, and this is a cost-effective method of creating leads through the best social media services in India.",
      },
    },
    {
      "@type": "Question",
      name: "What is social media advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a kind of paying for the promotion of media content to a target audience to attain the objectives of marketing using social media services in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are the operations of the social media management services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are in charge of the complete marketing process, content planning, and production, as well as ad campaigns and outcome analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen capable of social media promotion of enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have high-level clients across the world, and we provide services to them in terms of effective social media marketing services, utilizing our knowledge and resources.",
      },
    },
    {
      "@type": "Question",
      name: "What social media marketing platforms do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services are available on Facebook, Instagram, LinkedIn, Twitter, YouTube, and social networks that are emerging featuring the best social media marketing services in India.",
      },
    },
    {
      "@type": "Question",
      name: "After social media marketing, what is the time to notice the results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagement results and traffic are expected within 1-3 months, whereas brand authority will become developed over time.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible that social media marketing will boost traffic and sales of the website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Social media services in India can boost target traffic and promotional offers to the websites and the sales.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer analytics and reporting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We track such KPIs as engagement, reach, clicks, and ROI to assess the success of campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "What are the effective content creation strategies on social media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do an in-depth research, track the latest trends, rely on attractive images, and implement data-oriented methods to create exciting posts with a help of Top social media marketing services in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to have social media marketing to integrate with the other online marketing activities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SEO, email marketing and paid advertising may be incorporated into our campaigns to have a unified digital strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Is social media marketing services appropriate in startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. social media services in India is an economical solution that start ups can use to create brand awareness and get customers within a short time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to begin with Capyngen social media marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have scheduled an appointment with you to start developing a unique social media marketing strategy that suits your business objectives using the best social media marketing agency in gurgaon.",
      },
    },
  ],
};

const SMM = () => {
  const faqItems = [
    {
      question: "What is social media marketing?",
      answer:
        "It is marketing goods, services or brands of a business through social media platforms, namely Facebook, Instagram, LinkedIn, Twitter, etc, to create awareness and/or involvement of the user with the help of viral social media campaigns.",
    },
    {
      question: "What is the importance of social media marketing to business?",
      answer:
        "Social media is effective in marketing companies as it utilises technologies that previously were only available to big organisations. It helps small businesses form new relationships, promote traffic and sales, and produce interesting content for the target groups with the help of social media services in India.",
    },
    {
      question:
        "What are some of the services offered by a social media marketing agency?",
      answer:
        "The services will be social media marketing services, ad campaigns, content generation, data interpretation and strategy development offered by a leading social media agency in Gurgaon.",
    },
    {
      question:
        "Is social media marketing effective for the growth of small businesses?",
      answer:
        "Yes. Planned campaigns are one of the effective strategies of small businesses to be known by potential customers, and this is a cost-effective method of creating leads through the best social media services in India.",
    },
    {
      question: "What is social media advertising?",
      answer:
        "It is a kind of paying for the promotion of media content to a target audience to attain the objectives of marketing using social media services in India.",
    },
    {
      question:
        "What are the operations of the social media management services?",
      answer:
        "They are in charge of the complete marketing process, content planning, and production, as well as ad campaigns and outcome analysis.",
    },
    {
      question: "Is Capyngen capable of social media promotion of enterprises?",
      answer:
        "Yes. We have high-level clients across the world, and we provide services to them in terms of effective social media marketing services, utilizing our knowledge and resources.",
    },
    {
      question: "What social media marketing platforms do you use?",
      answer:
        "Our services are available on Facebook, Instagram, LinkedIn, Twitter, YouTube, and social networks that are emerging featuring the best social media marketing services in India.",
    },
    {
      question:
        "After social media marketing, what is the time to notice the results?",
      answer:
        "Engagement results and traffic are expected within 1-3 months, whereas brand authority will become developed over time.",
    },
    {
      question:
        "Is it possible that social media marketing will boost traffic and sales of the website?",
      answer:
        "Yes. Social media services in India can boost target traffic and promotional offers to the websites and the sales.",
    },
    {
      question: "Do you offer analytics and reporting?",
      answer:
        "Yes. We track such KPIs as engagement, reach, clicks, and ROI to assess the success of campaigns.",
    },
    {
      question:
        "What are the effective content creation strategies on social media?",
      answer:
        "We do an in-depth research, track the latest trends, rely on attractive images, and implement data-oriented methods to create exciting posts with a help of Top social media marketing services in Gurgaon.",
    },
    {
      question:
        "Is it possible to have social media marketing to integrate with the other online marketing activities?",
      answer:
        "Yes. SEO, email marketing and paid advertising may be incorporated into our campaigns to have a unified digital strategy.",
    },
    {
      question: "Is social media marketing services appropriate in startups?",
      answer:
        "Yes. social media services in India is an economical solution that start ups can use to create brand awareness and get customers within a short time.",
    },
    {
      question:
        "What is the best way to begin with Capyngen social media marketing services?",
      answer:
        "We have scheduled an appointment with you to start developing a unique social media marketing strategy that suits your business objectives using the best social media marketing agency in gurgaon.",
    },
  ];

  const servicesData = [
    {
      image: assets.smm3,
      title: "Content Personalization",
      desc: "Delivering bespoke, audience-segmented media that resonates deeply with target buyer profiles.",
    },
    {
      image: assets.smm4,
      title: "Storytelling Marketing",
      desc: "Narrative-driven visual campaigns that evoke emotional resonance and build lasting brand affinity.",
    },
    {
      image: assets.smm5,
      title: "Hashtag & Trend Campaigns",
      desc: "Leveraging trending viral conversations and community challenges to drive exponential organic exposure.",
    },
    {
      image: assets.smm6,
      title: "Video-First Strategy",
      desc: "High-retention Reels, TikToks, Shorts, and Live sessions engineered to capture viewer attention within seconds.",
    },
    {
      image: assets.smm7,
      title: "Paid + Organic Synergy",
      desc: "Balancing authentic organic community engagement with hyper-targeted paid amplification for maximum scale.",
    },
    {
      image: assets.smm8,
      title: "Data-Driven Optimization",
      desc: "Live analytics interpretation to continually refine creative assets, posting cadences, and ad spend efficiency.",
    },
  ];

  const solutionsData = [
    {
      title: "Social Media Strategy & Planning",
      desc: "Comprehensive market positioning, competitor analysis, channel selection (Meta, LinkedIn, X, YouTube), and quarterly content calendars.",
    },
    {
      title: "Social Media Management Services",
      desc: "End-to-end editorial execution including graphic design, short-form video creation, community management, and active reputation monitoring.",
    },
    {
      title: "Social Media Advertising",
      desc: "High-converting paid campaigns across Meta Ads, LinkedIn Sponsored Content, and YouTube Ads optimized for lowest cost-per-lead.",
    },
    {
      title: "Creative Content Production",
      desc: "Scroll-stopping infographics, motion graphics, carousel decks, and persuasive copy written to turn casual scrollers into followers.",
    },
    {
      title: "Influencer Collaborations",
      desc: "Identifying, vetting, and managing niche-specific influencer partnerships that bring trusted third-party validation to your brand.",
    },
    {
      title: "Analytics & Attribution Reporting",
      desc: "Transparent monthly performance reporting tracking audience growth, click-through rates, and downstream revenue conversions.",
    },
  ];

  const steps = [
    {
      title: "Research & Audit",
      description: "Analyze your existing profiles, target demographics, and top competitor playbooks.",
    },
    {
      title: "Strategy Development",
      description: "Define core content pillars, creative guidelines, posting cadence, and ad budget allocations.",
    },
    {
      title: "Content Creation",
      description: "Produce high-impact graphic design, video reels, and compelling caption copy.",
    },
    {
      title: "Execution & Amplification",
      description: "Publish content at optimal engagement times, run targeted ad campaigns, and engage the community.",
    },
    {
      title: "Monitoring & Reporting",
      description: "Track live KPIs, community sentiment, audience growth, and direct response actions.",
    },
    {
      title: "Continuous Improvement",
      description: "Refine creative angles and audience targeting to scale return on ad spend continuously.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Social Media Marketing Agency in India | Growth-Driven SMM Services
        </title>
        <meta
          name="description"
          content="Capyngen is a trusted social media marketing agency in India offering professional social media marketing services, management, and ads to grow your brand."
        />
        <meta
          name="keywords"
          content="Social Media Marketing | Grow Your Brand Online – Capyngen"
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
        aria-label="Social Media Marketing Hero"
      >
        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Growth-Driven Social Media Marketing That Converts
              </h1>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-normal">
                Big ideas, engaging content, thriving communities. We manage and scale your social presence with data-backed strategies and creative paid ads engineered to drive viral engagement.
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
                  src={assets.smm1}
                  alt="Social Media Marketing Showcase"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. IMPORTANCE OF SOCIAL MEDIA MARKETING (SPLIT LIGHT SECTION)             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.smm10}
                alt="Importance of Social Media Marketing"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Importance of Social Media Marketing
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Social Media Marketing (SMM) is the fastest route to direct customer engagement. It involves producing compelling content, managing active communities, and running targeted paid promotions.
              </p>
            </div>
            <ul className="space-y-3.5 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Massive Reach:</strong> Connect with billions of active social media users globally.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Cost-Effective:</strong> Higher ROI and agility compared to legacy promotional media.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Precision Targeting:</strong> Serve ads tailored by age, interests, job title, and real-time behavior.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">High Conversion Rates:</strong> Customer trust and social proof directly accelerate buying decisions.</span>
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
      {/* 3. FULL SIZE BANNER 1: CONNECT, ENGAGE, AND GROW ONLINE                   */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.smmFullSize}
            alt="Connect, engage, and grow online"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Connect, engage, and grow online
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We manage your social presence to build engaged communities that convert into loyal brand advocates.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Grow My Audience
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR SOCIAL MEDIA MARKETING SERVICES (6 CARDS - White Background)        */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Social Media Marketing Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              All-in-one solutions to elevate your brand presence across Facebook, Instagram, LinkedIn, and emerging platforms.
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
      {/* 5. TOP SOCIAL MEDIA MARKETING TACTICS (6 Image Cards - White Background)   */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Top Social Media Marketing Tactics
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We combine creative storytelling, trending formats, and live data feedback to keep your brand at the cultural forefront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-500 transition-colors duration-150 flex flex-col justify-between rounded-none shadow-sm relative group overflow-hidden"
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
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR SMM PROCESS (6 Dark Cards)                                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Social Media Marketing Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Our campaigns are conducted in a proven step-by-step fashion to ensure predictable audience growth.
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
      {/* 7. FULL SIZE BANNER 2: MAKE YOUR BRAND GO VIRAL                            */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.smmFullSize2}
            alt="Make your brand go viral"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Make your brand go viral
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            A creative, data-driven campaign can attract thousands of new followers and keep existing customers engaged.
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
      {/* 8. WHY CHOOSE US AS YOUR SMM PARTNER (Split White Section)                 */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Us as Your SMM Partner?
            </h2>
            <ul className="space-y-4 text-slate-700 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Custom Strategies:</strong> No cookie-cutter packages; every strategy is customized to your exact growth objectives.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Multidisciplinary Team:</strong> Experienced copywriters, video animators, and media buyers working cohesively.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Global & Local Experience:</strong> Established authority scaling campaigns across domestic and international markets.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Genuine Growth Partner:</strong> We align our goals directly with your revenue and customer acquisition metrics.</span>
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
                src={assets.smm9}
                alt="Why Choose Us as Your SMM Partner"
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
        desc="Learn more about our social media management packages, advertising platforms, and content production."
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
              Amplify Your Brand on Social Media Today
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Schedule a strategy session with Capyngen to design high-impact social media campaigns that scale customer engagement and revenue.
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

export default SMM;
