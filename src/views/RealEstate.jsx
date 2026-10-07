import React from "react";
import Banner6 from "../components/Banner6";
import {
  FaMapMarkerAlt,
  FaVideo,
  FaBullseye,
  FaExpand,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.capyngen.com/industries/real-estate",
  name: "IT Solutions for Real Estate | Web & UI/UX Design Services – Capyngen",
  description:
    "Capyngen provides innovative IT solutions for the real estate industry. From web design to UI/UX services, we help real estate brands go digital and grow faster.",
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  keywords: "IT Solutions for Real Estate | Web & UI/UX Design Services",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "Real estate software development, Real estate CRM solutions, property management software",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/industries/real-estate",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  description:
    "Capyngen provides innovative IT solutions for the real estate industry. From web design to UI/UX services, we help real estate brands go digital and grow faster.",
  keywords: "IT Solutions for Real Estate | Web & UI/UX Design Services",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are real estate software development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate software development services refer to the creation of property websites, portals, mobile apps, and custom management software that is aimed at easing real estate transactions.",
      },
    },
    {
      "@type": "Question",
      name: "What is property management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Efficient software for managing listings, tenants, payments, maintenance, and overall property operations.",
      },
    },
    {
      "@type": "Question",
      name: "What are real estate CRM solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real estate CRM solutions bring about lead tracking, relationship management, and quicker deal closure.",
      },
    },
    {
      "@type": "Question",
      name: "What is real estate portal development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A process of designing portals or platforms that show a range of properties for sale or rent and which allow users to apply filters or make inquiries.",
      },
    },
    {
      "@type": "Question",
      name: "How can a tenant management system help property owners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The system facilitates tenant onboarding, rent tracking, and the whole communication process making the property management easier.",
      },
    },
    {
      "@type": "Question",
      name: "What is construction project management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Efficient software for planning, scheduling, and managing construction projects, budgets, and teams.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer real estate mobile applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure, Capyngen is one of the companies that build mobile apps for property searches, lead management, and virtual tours.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create custom property management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely, we customize solutions for the specific real estate needs of your business.",
      },
    },
    {
      "@type": "Question",
      name: "How does Capyngen improve lead generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen attracts qualified buyers and tenants through diverse marketing channels such as SEO, local SEO, social media campaigns, and targeted ads.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide CRM integration with real estate websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we connect the CRM systems with websites to make the process of getting leads, following them up, and closing sales more efficient.",
      },
    },
    {
      "@type": "Question",
      name: "What industries benefit from your real estate solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inter alia, real estate agencies, property brokers, developers, listing portals, rental businesses, the luxury real estate market.",
      },
    },
    {
      "@type": "Question",
      name: "Is your real estate software scalable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, solutions are built with scalability from varying sizes of agencies to large property portals in mind.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is the property data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement security measures that are up to industry-standard in order to secure information on clients, tenants, and properties.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a property portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Feature dependent, the usually full deployment time will be within 8–16 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen for real estate software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best of both worlds with IT, real estate, and digital marketing at the forefront, we go the whole nine yards to provide you with end-to-end, scalable, and ROI-driven solutions.",
      },
    },
  ],
};

const RealEstate = () => {
  const faqItems = [
    {
      question: "What are real estate software development services?",
      answer:
        "Real estate software development services refer to the creation of property websites, portals, mobile apps, and custom management software that is aimed at easing real estate transactions.",
    },
    {
      question: "What is property management software?",
      answer:
        "Efficient software for managing listings, tenants, payments, maintenance, and overall property operations.",
    },
    {
      question: "What are real estate CRM solutions?",
      answer:
        "Real estate CRM solutions bring about lead tracking, relationship management, and quicker deal closure.",
    },
    {
      question: "What is real estate portal development?",
      answer:
        "A process of designing portals or platforms that show a range of properties for sale or rent and which allow users to apply filters or make inquiries.",
    },
    {
      question: "How can a tenant management system help property owners?",
      answer:
        "The system facilitates tenant onboarding, rent tracking, and the whole communication process making the property management easier.",
    },
    {
      question: "What is construction project management software?",
      answer:
        "Efficient software for planning, scheduling, and managing construction projects, budgets, and teams.",
    },
    {
      question: "Do you offer real estate mobile applications?",
      answer:
        "Sure, Capyngen is one of the companies that build mobile apps for property searches, lead management, and virtual tours.",
    },
    {
      question: "Can you create custom property management software?",
      answer:
        "Absolutely, we customize solutions for the specific real estate needs of your business.",
    },
    {
      question: "How does Capyngen improve lead generation?",
      answer:
        "Capyngen attracts qualified buyers and tenants through diverse marketing channels such as SEO, local SEO, social media campaigns, and targeted ads.",
    },
    {
      question: "Do you provide CRM integration with real estate websites?",
      answer:
        "Yes, we connect the CRM systems with websites to make the process of getting leads, following them up, and closing sales more efficient.",
    },
    {
      question: "What industries benefit from your real estate solutions?",
      answer:
        "Inter alia, real estate agencies, property brokers, developers, listing portals, rental businesses, the luxury real estate market.",
    },
    {
      question: "Is your real estate software scalable?",
      answer:
        "Yes, solutions are built with scalability from varying sizes of agencies to large property portals in mind.",
    },
    {
      question: "How secure is the property data?",
      answer:
        "We implement security measures that are up to industry-standard in order to secure information on clients, tenants, and properties.",
    },
    {
      question: "How long does it take to develop a property portal?",
      answer:
        "Feature dependent, the usually full deployment time will be within 8–16 weeks.",
    },
    {
      question: "Why choose Capyngen for real estate software development?",
      answer:
        "The best of both worlds with IT, real estate, and digital marketing at the forefront, we go the whole nine yards to provide you with end-to-end, scalable, and ROI-driven solutions.",
    },
  ];

  const servicesData1 = [
    {
      image: assets.realEstate3,
      title: "Real Estate Websites & Apps",
      desc: (
        <span>
          You can make user-friendly property listing websites by implementing{" "}
          <Link
            to={"/ui-ux-design-services"}
            className="text-blue-400 underline hover:text-blue-300"
          >
            UI & UX Design
          </Link>{" "}
          for Real estate Industry along with advanced search, filter and contact
          features.
        </span>
      ),
    },
    {
      image: assets.realEstate4,
      title: "MLS/IDX Integration",
      desc: "Directly link your site with the most significant multiple listing service databases to keep your property listings up to date and get market insights.",
    },
    {
      image: assets.realEstate5,
      title: "3D Virtual Tours & AR/VR",
      desc: "Enable buyers to take a feel of your property through immersive visualizations and, in such way, you can attract them.",
    },
    {
      image: assets.realEstate6,
      title: "CRM Integration",
      desc: "Manage the generated leads, follow-ups, and deals in an efficient way.",
    },
    {
      image: assets.realEstate7,
      title: "Cloud & Hosting",
      desc: "The provision of safe, fast, and powerful platforms for seamless data storage and transfer is ensured by us.",
    },
    {
      image: assets.realEstate8,
      title: "Maintenance & Support",
      desc: "Offer a service that will keep your real estate sites updated and accessible to anyone at any time.",
    },
  ];

  const servicesData2 = [
    {
      image: assets.realEstate9,
      title: "SEO for Real Estate Websites",
      desc: "By getting listed on local property-related queries, your website's traffic will increase.",
    },
    {
      image: assets.realEstate10,
      title: "Local SEO & Maps Optimization",
      desc: "Find local buyers using Google Maps who are searching for your property.",
    },
    {
      image: assets.realEstate11,
      title: "Social Media Marketing",
      desc: "Effortlessly gain more visibility on Facebook, Instagram, and LinkedIn.",
    },
    {
      image: assets.realEstate12,
      title: "Lead Gen Ads",
      desc: "Run targeted Google and social campaigns which are specifically designed to deliver qualified leads.",
    },
    {
      image: assets.realEstate13,
      title: "Content & Video Advertising",
      desc: "Build brand trust through blogs, reels, and walkthroughs.",
    },
    {
      image: assets.realEstate14,
      title: "Email & Automation",
      desc: "Nurture your leads with updates and promotions regarding the property.",
    },
  ];

  const typesData = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Localized Targeting",
      desc: "Reach potential buyers of specific towns or regions in a highly effective manner.",
    },
    {
      icon: <FaVideo />,
      title: "Virtual Property Exhibitions",
      desc: "Combine serious buyers and save time with immersive digital showings.",
    },
    {
      icon: <FaBullseye />,
      title: "Lead Generation Focused",
      desc: "Improve ROI by concentrating on high-intent buyer and tenant pipelines.",
    },
    {
      icon: <FaExpand />,
      title: "Scalable Solutions",
      desc: "Suiting from boutique property brokers to multi-national listing networks.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Data Handling",
      desc: "Protect sensitive property records, buyer financial data, and transaction logs.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Insights",
      desc: "Track user behavior, campaign performance, and property engagement for data-driven decisions.",
    },
  ];

  const slidesData = [
    {
      id: 1,
      title: "Real Estate Powered by Technology",
      subtitle:
        "Digital platforms enabled by AI have the power to simplify everything from property management to listings and customer interactions.",
      image: assets.realEstateBanner1,
      ctaText: "Explore Projects",
      ctaLink: "/contact",
    },
    {
      id: 2,
      title: "Digital Solutions for Modern Real Estate Businesses",
      subtitle:
        "Safeguarded, automated, and AI-infused solutions are the shortest and easiest way to get buyers, sellers, and agents connected.",
      image: assets.realEstateBanner3,
      ctaText: "Get Started",
      ctaLink: "/contact",
    },
    {
      id: 3,
      title: "Transforming Real Estate with Innovation",
      subtitle:
        "The use of data analytics and automation in real estate sector has resulted in the increased visibility of properties and profits made on them.",
      image: assets.realEstateBanner2,
      ctaText: "Get Started",
      ctaLink: "/contact",
    },
  ];

  const industriesWeServe = [
    {
      image: assets.realEstate15,
      title: "Real Estate Agencies & Brokers",
      desc: "End-to-end broker portals, lead dispatching, and agent commission tracking systems.",
    },
    {
      image: assets.realEstate16,
      title: "Property Developers & Builders",
      desc: "Master-plan interactive showcases, unit inventory management, and digital buyer journey tools.",
    },
    {
      image: assets.realEstate17,
      title: "Property Listing Portals",
      desc: "High-scale multi-vendor listing engines with MLS/IDX feeds and algorithmic search filters.",
    },
    {
      image: assets.realEstate18,
      title: "Rental & Leasing Businesses",
      desc: "Tenant screening, digital lease signing, automated recurring payments, and maintenance requests.",
    },
    {
      image: assets.realEstate19,
      title: "Co-working & Commercial Spaces",
      desc: "Desk & room reservation engines, access control integrations, and billing automation.",
    },
    {
      image: assets.realEstate20,
      title: "Luxury Real Estate Brands",
      desc: "Ultra-premium editorial styling, 4K video tours, bespoke concierge scheduling, and VIP privacy.",
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>
          IT Solutions for Real Estate | Web & UI/UX Design Services – Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen provides innovative IT solutions for the real estate industry. From web design to UI/UX services, we help real estate brands go digital and grow faster."
        />
        <meta
          name="keywords"
          content="IT Solutions for Real Estate | Web & UI/UX Design Services – Capyngen"
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
      <Banner6
        slides={slidesData}
        autoplay={true}
        autoplaySpeed={4000}
        showDots={true}
        textColor="text-white"
        arrowColor="text-white"
        bgHover="hover:bg-white/20"
      />

      {/* Dual Overview Section */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Part 1: IT Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
                REAL ESTATE TECH FOUNDATION
              </div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                IT Solutions for Real Estate
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Day by day, technology is rapidly evolving and so are said
                  technologies have to be applied in the real estate sector.
                  Hence, real estate businesses have to adopt modern IT tools to
                  keep up their competitive advantages over their rivals, improve
                  the customer experience, and simplify their operational
                  processes.
                </p>
                <p>
                  Our company offers real estate IT solutions which are uniquely
                  tailored to the specific requirements of the real estate sector.
                  If you are a real estate developer, agent, or broker, we can
                  help you work more efficiently with our IT solutions in the
                  real estate field through listings, process flows, and client
                  interaction, etc.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#070e1d] hover:bg-blue-600 text-white font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Schedule Consultation <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 bg-gray-50 p-2 rounded-none">
              <img
                src={assets.realEstate1}
                alt="IT Solutions for Real Estate"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          {/* Part 2: Why Real Estate Needs Digital Transformation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 border-t border-gray-100">
            <div className="order-2 lg:order-1 border border-gray-200 bg-gray-50 p-2 rounded-none">
              <img
                src={assets.realEstate2}
                alt="Digital Transformation in Real Estate"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
                MARKET DISRUPTION & DEMAND
              </div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Real Estate Needs Digital Transformation
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  The real estate market has changed big time. However, just
                  before making the final purchase offline, the first thing that
                  buyers and investors now do is to look for options online.
                </p>
                <p>
                  Adding a robust online presence supplemented by IT solutions for
                  property is turning out to be a winning strategy as it creates
                  trust, brings more visibility, and speeds up the process of
                  reaching out to potential customers.
                </p>
                <p>
                  Capyngen's Web Designing for Real Estate combines both
                  technology and strategy to provide real estate businesses with
                  the tools to showcase the properties effectively, save on
                  marketing expenses, and make more profits through real estate{" "}
                  <Link
                    to={"/crm-management-software"}
                    className="text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-800"
                  >
                    CRM solutions
                  </Link>
                  , property management software, and enhanced web design for real
                  estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT & Web Solutions Section */}
      <section className="bg-[#070e1d] py-20 px-4 md:px-8 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              ENGINEERING & PLATFORMS
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              IT & Web Solutions for Real Estate
            </h2>
            <p className="mt-4 text-gray-400 text-base leading-relaxed">
              High-performance property portals, MLS/IDX integrations, and
              interactive 3D virtual walkthroughs designed to accelerate deal
              closures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData1.map((item, index) => (
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

                  <div className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>CAPYNGEN REAL ESTATE</span>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              LEAD GENERATION & VISIBILITY
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Digital Marketing Solutions
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Target high-intent investors, home buyers, and tenants through
              custom local SEO, targeted ad funnels, and automated follow-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData2.map((item, index) => (
              <div
                key={index}
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
                  <span>MARKETING ENGINE</span>
                  <span className="text-blue-600 font-semibold">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="bg-[#0b162c] py-20 px-4 md:px-8 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              VALUE DELIVERED
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Features & Benefits
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Comprehensive capabilities designed to give property developers and
              brokers a sustainable, unfair technological advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {typesData.map((type, tIdx) => (
              <div
                key={tIdx}
                className="bg-[#070e1d] border border-slate-800 p-8 rounded-none relative group hover:border-blue-500 transition-colors duration-200 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

                <div>
                  <div className="w-14 h-14 bg-[#070e1d] border border-slate-800 flex items-center justify-center text-2xl text-blue-400 mb-6 group-hover:text-white transition-colors">
                    {type.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {type.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {type.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-gray-500 font-mono">
                  VERIFIED BENEFIT
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              SPECIALIZED REAL ESTATE VERTICALS
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Serve
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              From commercial workspaces to luxury developments, we craft
              tailored digital solutions for every real estate domain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((item, idx) => (
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
                  <span>SECTOR DOMAIN</span>
                  <span className="text-blue-600 font-semibold">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Capyngen Section */}
      <section className="bg-[#070e1d] py-20 px-4 md:px-8 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
                THE CAPYNGEN ADVANTAGE
              </div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Choose Capyngen?
              </h2>
              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>
                  Capyngen brings real estate IT solutions tailored for
                  performance and growth. Combining marketing and IT under one
                  roof, we provide seamless implementation, better lead
                  generation, and faster growth.
                </p>
                <p>
                  Our expertise in real estate web design, property management
                  software, and CRM integration undoubtedly makes you the market
                  leader.
                </p>
                <p>
                  If you want to sell properties faster, get more leads, and
                  enhance your brand, then Capyngen is the tech partner for you.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Book Free Consultation <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="border border-gray-800 bg-[#0b162c] p-2 rounded-none">
              <img
                src={assets.realEstate21}
                alt="Why Capyngen Real Estate"
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
            READY TO SCALE YOUR PROPERTY PIPELINE
          </div>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Turn Your Real Estate Business Around Today
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Lead the real estate market with a variety of IT Services for Real
            Estate that empower you to create leads, close deals faster, and build
            a strong online presence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#2563eb] hover:bg-slate-100 font-bold px-8 py-3.5 rounded-none shadow-lg transition-colors uppercase tracking-wider text-sm"
            >
              Schedule a Call Now
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent text-white border-2 border-white font-bold px-8 py-3.5 rounded-none hover:bg-white hover:text-[#2563eb] transition-colors uppercase tracking-wider text-sm"
            >
              Collaborate with Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default RealEstate;
