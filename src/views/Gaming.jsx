import React from "react";
import ShuffleHero from "../components/ShuffleHero";
import { assets } from "../assets/assets";
import {
  FaSearch,
  FaUsers,
  FaGamepad,
  FaVideo,
  FaBullhorn,
  FaEnvelopeOpenText,
  FaArrowRight,
  FaCheck,
  FaShieldAlt,
  FaChartLine,
  FaServer,
  FaHeadset,
} from "react-icons/fa";
import FAQSection2 from "../components/FAQSection2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/gaming#webpage",
  url: "https://www.capyngen.com/industries/gaming",
  name: "IT Solutions for Gaming Industry | Game App Development Services – Capyngen",
  description:
    "Capyngen offers innovative IT solutions for the gaming industry. From Android, iOS, and PC game development to cloud gaming — we bring your ideas to life.",
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
    url: "https://www.capyngen.com/assets/gaming1-B9Bp7YkI.png",
    width: 1200,
    height: 800,
    caption: "Gaming Industry IT Solutions by Capyngen",
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
        name: "Gaming",
        item: "https://www.capyngen.com/industries/gaming",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gaming Industry Digital Solutions",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.instagram.com/capyngen",
      "https://x.com/capyngen",
    ],
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  url: "https://www.capyngen.com/industries/gaming",
  description:
    "Capyngen delivers next-generation digital marketing, web design, and data-driven solutions tailored for the gaming industry — enhancing player engagement and brand visibility.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Game app development software company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The company deals with the creation of custom game engines, mobile, PC, and console games, VR/AR solutions, and multiplayer platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What is Mobile Game App Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iOS Game App Development, Android Game App Development, and cross-platform mobile devices with the focus on performance and user engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What is PC Game Development & console game development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The high-performance Windows, Mac, PlayStation, Xbox, and Nintendo games development.",
      },
    },
    {
      "@type": "Question",
      name: "What is VR game software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The gaming Industry involves Virtual reality technology meant for the consumer to enjoy an immersive experience with the VR headset and motion controls.",
      },
    },
    {
      "@type": "Question",
      name: "What is AR game development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AR games are games that bring digital components to the physical space for easy interaction.",
      },
    },
    {
      "@type": "Question",
      name: "What are multiplayer Game app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Products and server systems that allow different users to play real-time games at different locations.",
      },
    },
    {
      "@type": "Question",
      name: "How does Capyngen help gaming businesses grow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver flexible IT resolutions, online-offline promotional activities, and data to spur gaming and moneymaking.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer custom Mobile Game App Development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely! We are also more than capable of making unique mobile games for your video game company and that specifically target your intended demographic of players.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build multiplayer Game app development online games?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course! Stable servers and seamless gameplay are what we base the development of online multiplayer games on.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle game analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We make use of the latest and the best tools in the industry to collect data about various factors relating to the game and the players' living habits.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Cloud gaming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide Cloud gaming with great efficiency which can manage players up to thousands concurrently.",
      },
    },
    {
      "@type": "Question",
      name: "What is your experience with VR & AR games?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We develop immersive VR and AR solutions for gaming, simulation, and amusement applications.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with esports and community engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen supports esports and community engagement through player outreach programs, influencer collaborations, and promotional campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "How long does game development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration of game development typically ranges from 3 to 12 months, depending on the platform, complexity, and required features.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen for game development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen combines IT expertise, creative strategies, and gaming industry insights to deliver engaging, flexible, and profit-driven game development solutions.",
      },
    },
  ],
};

const Gaming = () => {
  const faqItems = [
    {
      question: "What is a Game app development software company?",
      answer:
        "The company deals with the creation of custom game engines, mobile, PC, and console games, VR/AR solutions, and multiplayer platforms.",
    },
    {
      question: "What is Mobile Game App Development?",
      answer:
        "iOS Game App Development, Android Game App Development, and cross-platform mobile devices with the focus on performance and user engagement.",
    },
    {
      question: "What is PC Game Development & console game development?",
      answer:
        "The high-performance Windows, Mac, PlayStation, Xbox, and Nintendo games development.",
    },
    {
      question: "What is VR game software?",
      answer:
        "The gaming Industry involves Virtual reality technology meant for the consumer to enjoy an immersive experience with the VR headset and motion controls.",
    },
    {
      question: "What is AR game development?",
      answer:
        "AR games are games that bring digital components to the physical space for easy interaction.",
    },
    {
      question: "What are multiplayer Game app development?",
      answer:
        "Products and server systems that allow different users to play real-time games at different locations.",
    },
    {
      question: "How does Capyngen help gaming businesses grow?",
      answer:
        "We deliver flexible IT resolutions, online-offline promotional activities, and data to spur gaming and moneymaking.",
    },
    {
      question: "Do you offer custom Mobile Game App Development services?",
      answer:
        "Definitely! We are also more than capable of making unique mobile games for your video game company and that specifically target your intended demographic of players.",
    },
    {
      question: "Can you build multiplayer Game app development online games?",
      answer:
        "Of course! Stable servers and seamless gameplay are what we base the development of online multiplayer games on.",
    },
    {
      question: "How do you handle game analytics?",
      answer:
        "We make use of the latest and the best tools in the industry to collect data about various factors relating to the game and the players' living habits.",
    },
    {
      question: "Do you provide Cloud gaming?",
      answer:
        "Yes, we provide Cloud gaming with great efficiency which can manage players up to thousands concurrently.",
    },
    {
      question: "What is your experience with VR & AR games?",
      answer:
        "We develop immersive VR and AR solutions for gaming, simulation, and amusement applications.",
    },
    {
      question: "Can you help with esports and community engagement?",
      answer:
        "Sure, we plan and execute the outreach programs targeted at player engagement, influencer partnership, and esports promotion.",
    },
    {
      question: "How long does game development take?",
      answer:
        "Depending upon the platform, game complexity, and features, the production schedule can be generally from 3–12 months.",
    },
    {
      question: "Why choose Capyngen for game development?",
      answer:
        "We combine the knowledge and strategies of IT, promotion, and the field of gaming to offer gaming solutions that are flexible, interesting, and profit-generating.",
    },
  ];

  const heroImages = [
    { id: 1, src: assets.gaming1 },
    { id: 2, src: assets.gaming2 },
    { id: 3, src: assets.gaming3 },
    { id: 4, src: assets.gaming4 },
    { id: 5, src: assets.gaming5 },
    { id: 6, src: assets.gaming6 },
    { id: 7, src: assets.gaming7 },
    { id: 8, src: assets.gaming8 },
    { id: 9, src: assets.gaming9 },
    { id: 10, src: assets.gaming10 },
    { id: 11, src: assets.gaming11 },
    { id: 12, src: assets.gaming12 },
    { id: 13, src: assets.gaming13 },
    { id: 14, src: assets.gaming14 },
    { id: 15, src: assets.gaming15 },
    { id: 16, src: assets.gaming16 },
  ];

  const servicesData = [
    {
      image: assets.gaming18,
      title: "Custom Game Portals & App Development",
      desc: "Just a few clicks and you can download, stream, and interact with players across responsive web and native client environments.",
    },
    {
      image: assets.gaming19,
      title: "Multiplayer Server Setup & Management",
      desc: "High-tickrate dedicated servers with auto-scaling, low ping routing, and battle-tested matchmaking algorithms.",
    },
    {
      image: assets.gaming20,
      title: "API & Payment Gateway Integration",
      desc: "Secure microtransactions, in-game virtual economy wallets, cross-border payments, and antifraud protections.",
    },
    {
      image: assets.gaming21,
      title: "Cloud Gaming Infrastructure",
      desc: "Low-latency edge hosting and interactive GPU streaming services built to support thousands of concurrent players.",
    },
    {
      image: assets.gaming22,
      title: "Gaming Analytics Solutions",
      desc: "Comprehensive telemetry to analyze player churn, retention funnels, ARPU, economy balance, and session metrics.",
    },
    {
      image: assets.gaming23,
      title: "Maintenance & DevOps Support",
      desc: "24/7 server monitoring, rapid patch distribution, anti-cheat enforcement, and seamless zero-downtime game updates.",
    },
  ];

  const cardsSectionData2 = [
    {
      title: "SEO for Gaming Websites",
      description:
        "Get the attention of your target audience by using SEO when they search for the latest games, reviews, or news. Our customised SEO strategies make sure your gaming platform is ranked high and draws in organic, long-term visitors.",
      icon: <FaSearch className="text-3xl text-blue-500" />,
    },
    {
      title: "Community Building & Social Marketing",
      description:
        "Players will find you by setting up engaging online communities. We assist you in creating an active fanbase on Discord, Reddit, and social media channels that prompt loyalty and interaction.",
      icon: <FaUsers className="text-3xl text-blue-500" />,
    },
    {
      title: "Influencer & Esports Marketing",
      description:
        "Put yourself where your audience is. Partner with streamers, gaming influencers, and esports professionals to elevate your brand presence and create excitement before and after your game release.",
      icon: <FaGamepad className="text-3xl text-blue-500" />,
    },
    {
      title: "Video & Content Marketing",
      description:
        "Make compelling content that resonates with gamers. We produce gameplay trailers and behind-the-scenes videos with high emotional impact and exhilaration.",
      icon: <FaVideo className="text-3xl text-blue-500" />,
    },
    {
      title: "Paid Ads for Game Launches",
      description:
        "Put yourself in the perfect spot at the perfect time. Our paid ad methods on Google, Meta, Steam, and Twitch will get your title seen and downloaded on day one.",
      icon: <FaBullhorn className="text-3xl text-blue-500" />,
    },
    {
      title: "Email & Retention Marketing",
      description:
        "Re-engage inactive players with live ops announcements, exclusive reward bundles, season passes, and tournament invites.",
      icon: <FaEnvelopeOpenText className="text-3xl text-blue-500" />,
    },
  ];

  const solutionsData = [
    {
      title: "Fast and Reliable IT Solutions for the Gaming Industry",
      desc: "Our customized backend systems provide the same performance, speed of loading, and the ability of the audience to play their games without interruptions worldwide, in all parts of the world.",
      icon: <FaServer className="text-xl text-blue-400" />,
    },
    {
      title: "People-Oriented Marketing that Drives Engagement",
      desc: "We create digital campaigns that speak emotionally to the players, motivating them to create more substantial community and brand trust relations.",
      icon: <FaUsers className="text-xl text-emerald-400" />,
    },
    {
      title: "Secure and Scalable Gaming Platforms",
      desc: "We build solid structures that offer security to users' data and platform stability, allowing for the easy handling of high traffic during tournaments, launches, or live events.",
      icon: <FaShieldAlt className="text-xl text-amber-400" />,
    },
    {
      title: "Advanced Player Analytics and Insights",
      desc: "Make the most of our customer satisfaction survey tools using data-driven methods to track, monitor user behavior, and offer personalized solutions to drive management and revenue growth.",
      icon: <FaChartLine className="text-xl text-rose-400" />,
    },
    {
      title: "End-to-End Technical and Marketing Support",
      desc: "The team of professionals staying with you is not only there during the time of the game, but they are still there with you in the post-launch scaling and pre-launch preparation as well, through every stage of your success.",
      icon: <FaHeadset className="text-xl text-purple-400" />,
    },
  ];

  const cardsSectionSliderData1 = [
    {
      image: assets.gaming24,
      title: "Game Studios & Indie Developers",
      desc: "Full-lifecycle game engineering, asset pipelines, and multiplatform publishing support.",
    },
    {
      image: assets.gaming25,
      title: "Esports Teams & Tournament Portals",
      desc: "Bracket management, live broadcast hubs, leaderboards, and sponsor activation spaces.",
    },
    {
      image: assets.gaming26,
      title: "Gaming Communities & Forums",
      desc: "Custom guild systems, Discord bots, community reputation engines, and social feeds.",
    },
    {
      image: assets.gaming27,
      title: "Streaming & Content Creators",
      desc: "Interactive stream overlays, fan tip integrations, subscriber perks, and merch portals.",
    },
    {
      image: assets.gaming28,
      title: "Online Gaming Marketplaces",
      desc: "Digital key distribution, item trading systems, peer-to-peer security, and anti-fraud checks.",
    },
    {
      image: assets.gaming29,
      title: "VR and AR Gaming Startups",
      desc: "Immersive spatial gameplay prototypes, wearable headset SDKs, and gesture-driven UX.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Consultation & Requirement Analysis",
      description:
        "Understand your game concept, intended demographic, mechanics, and business goals.",
    },
    {
      step: "02",
      title: "Strategy & Architectural Planning",
      description:
        "Design scalable IT infrastructure, player retention roadmaps, and monetization logic.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Build secure game portals, cloud multiplayer servers, APIs, and VR/AR features.",
    },
    {
      step: "04",
      title: "Marketing Campaigns & Live Ops",
      description:
        "Deploy teaser campaigns, streamer outreach, community Discord builds, and pre-orders.",
    },
    {
      step: "05",
      title: "Stress Testing & Optimization",
      description:
        "Execute rigorous load testing, penetration tests, and frame-rate optimization.",
    },
    {
      step: "06",
      title: "Launch & Ongoing Scale",
      description:
        "Support zero-downtime game patches, live seasons, anti-cheat monitoring, and telemetry.",
    },
  ];

  const whyChoosePoints = [
    "Deep technical mastery of gaming backend architectures and real-time multiplayer protocols.",
    "Proven marketing playbooks that build viral hype and sustain long-term player retention.",
    "Battle-tested security and DDoS protection for game servers, account profiles, and wallets.",
    "Transparent cost models and modular engineering adapted to both indie studios and enterprise publishers.",
    "Dedicated 24/7 technical support aligned with global player time zones and tournament schedules.",
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>
          IT Solutions for Gaming Industry | Game App Development Services –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen offers innovative IT solutions for the gaming industry. From Android, iOS, and PC game development to cloud gaming — we bring your ideas to life."
        />
        <meta
          name="keywords"
          content="IT Solutions for Gaming Industry | Game App Development Services – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero preserved untouched */}
      <ShuffleHero
        heading={
          <>
            IT Solutions for
            <span className="text-blue-500"> Gaming Industry</span> for the Next
            Level
          </>
        }
        subheading=""
        description="Our services have been the choice of game studios, esports brands, and developers who need business strategies that are sustainable, customer engagement, and community growth through personal Mobile Game App Development, innovative VR/AR game software, and multiplayerGame app development solutions."
        buttonText="Explore Now"
        themeColor="bg-blue-500 hover:bg-blue-600"
        bgColor="bg-gray-900"
        images={heroImages}
        gridCols={4}
        gridRows={4}
        shuffleInterval={3000}
      />

      {/* Overview Section */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
                DIGITAL GAMING ECOSYSTEM
              </div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                How Gaming Businesses Benefit from Digital Innovation
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  The industry of gaming is one of those sectors that have been
                  recognized as rapidly developing areas of the digital world
                  where the user experience and community engagement become a
                  crucial factor.
                </p>
                <p>
                  Particularly the IT infrastructure of the right kind is the
                  indisputable foundation for the smooth running of Game{" "}
                  <Link
                    to={"/app-development"}
                    className="text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-800"
                  >
                    app development
                  </Link>
                  , secure transactions, and scalable performance to support
                  large-scale concurrent users.
                </p>
                <p>
                  Gaming companies by mere digital marketing practices can
                  attract the right crowd, build a faithful customer base, and
                  make a flow of revenue that would be sustainable through the
                  successful implementation of campaigns.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#070e1d] hover:bg-blue-600 text-white font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Request Game Tech Consultation <FaArrowRight className="text-xs" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 bg-gray-50 p-2 rounded-none">
              <img
                src={assets.gaming17}
                alt="Gaming Digital Innovation"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IT Solutions for Gaming Industry */}
      <section className="bg-[#070e1d] py-20 px-4 md:px-8 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              INFRASTRUCTURE & DEVELOPMENT
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              IT Solutions for Gaming Industry
            </h2>
            <p className="mt-4 text-gray-400 text-base leading-relaxed">
              From robust multiplayer server architectures to cloud streaming
              engines and secure payment processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="bg-[#0b162c] border border-gray-800 rounded-none p-8 relative group transition-colors duration-200 hover:border-blue-500 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

                <div>
                  <div className="border border-gray-800 mb-6 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-44 object-cover"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>GAMING ENGINE</span>
                  <span className="text-blue-400 font-semibold">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Solutions Section */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              COMMUNITY & GROWTH ENGINES
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Digital Marketing Solutions for Gaming
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Drive viral launch visibility, foster dedicated fan bases on
              Discord and Reddit, and connect with top Twitch and YouTube
              creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-8 rounded-none group hover:border-blue-600 transition-colors duration-200 relative flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

                <div>
                  <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors">
                    {item.icon}
                  </div>

                  <h3
                    className="text-xl font-bold text-[#070e1d] mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>MARKETING PIPELINE</span>
                  <span className="text-blue-600 font-semibold">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Benefits Section */}
      <section className="bg-[#0b162c] py-20 px-4 md:px-8 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
                TECHNICAL EXCELLENCE
              </div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Key Features & Benefits
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Designed to give game studios, publishers, and platforms
                uncompromising reliability, real-time analytics, and infinite
                scalability during peak event launches.
              </p>

              <div className="border border-slate-800 bg-[#070e1d] p-2 rounded-none">
                <img
                  src={assets.gaming30}
                  alt="Gaming Key Features"
                  className="w-full h-auto object-cover rounded-none"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {solutionsData.map((item, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-[#070e1d] border border-slate-800 p-6 rounded-none relative group hover:border-blue-500 transition-colors duration-200 flex gap-5 items-start"
                >
                  <div className="w-12 h-12 bg-[#070e1d] border border-slate-800 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors"
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
        </div>
      </section>

      {/* Industries & Ecosystems We Serve */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              SECTORS WE EMPOWER
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Serve
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              We collaborate with diverse sectors across the global interactive
              entertainment industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionSliderData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-8 rounded-none group hover:border-blue-600 transition-colors duration-200 relative flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

                <div>
                  <div className="border border-gray-200 mb-6 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-44 object-cover"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold text-[#070e1d] mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>GAMING VERTICAL</span>
                  <span className="text-blue-600 font-semibold">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our 6-Step Process */}
      <section className="bg-[#070e1d] py-20 px-4 md:px-8 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              ENGINEERING METHODOLOGY
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Process
            </h2>
            <p className="mt-4 text-gray-400 text-base leading-relaxed">
              A structured, sprint-based approach from initial proof of concept
              to global server deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, sIndex) => (
              <div
                key={sIndex}
                className="bg-[#0b162c] border border-gray-800 p-8 rounded-none relative group hover:border-blue-500 transition-colors duration-200 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

                <div>
                  <div className="text-3xl font-extrabold text-blue-500 font-mono mb-4">
                    {st.step}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {st.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800/80 text-xs text-gray-500 font-mono">
                  PHASE VALIDATED
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Capyngen Section */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
                THE CAPYNGEN ADVANTAGE
              </div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Choose Capyngen?
              </h2>
              <div className="space-y-3 mb-8">
                {whyChoosePoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 rounded-none">
                      <FaCheck className="text-xs" />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#070e1d] hover:bg-blue-600 text-white font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Get a Free Consultation <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 bg-gray-50 p-2 rounded-none">
              <img
                src={assets.applicationSolution}
                alt="Why Capyngen Gaming"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="bg-[#2563eb] py-20 px-4 md:px-8 text-white text-center border-b border-blue-500/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/20 border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
            LEVEL UP YOUR PROJECT
          </div>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Boost Your Gaming Projects with Smart Tech Solutions
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Turn on the bright lights for your brand with Capyngen’s tailor-made
            IT solutions for the gaming sector, which covers everything from
            mobile to cloud gaming.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#2563eb] hover:bg-slate-100 font-bold px-8 py-3.5 rounded-none shadow-lg transition-colors uppercase tracking-wider text-sm"
            >
              Receive a Game Tech Consultation at No Cost
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent text-white border-2 border-white font-bold px-8 py-3.5 rounded-none hover:bg-white hover:text-[#2563eb] transition-colors uppercase tracking-wider text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default Gaming;
