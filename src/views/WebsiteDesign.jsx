import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Check,
} from "lucide-react";
import {
  FaHandsHelping,
  FaSearch,
  FaTags,
  FaPalette,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/website-design-company-india#webpage",
  url: "https://www.capyngen.com/website-design-company-india",
  name: "Website Design Services | Creative & Responsive Web Design",
  description:
    "Boost your brand with Capyngen’s website design services. We deliver creative, custom, and responsive websites that are fast, affordable, and built to impress.",
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
    url: "https://www.capyngen.com/assets/webDesign--l8DQpZ8.png",
    width: 1200,
    height: 800,
    caption: "Website Design Services by Capyngen",
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
        name: "Website Design",
        item: "https://www.capyngen.com/website-design-company-india",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design and Development Services",
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
  url: "https://www.capyngen.com/website-design-company-india",
  description:
    "Capyngen offers professional website design and development services that help businesses create engaging, responsive, and SEO-friendly websites to boost online presence and conversions.",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Design & Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Design",
          description:
            "Tailor-made website designs focused on brand identity, performance, and user engagement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Responsive Web Design",
          description:
            "Fully responsive designs optimized for desktop, tablet, and mobile devices.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WordPress & CMS Development",
          description:
            "CMS-based website development for easy management, scalability, and flexibility.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Design",
          description:
            "High-converting landing page design that drives leads and sales for businesses.",
        },
      },
    ],
  },
  image: "https://www.capyngen.com/assets/webDesign--l8DQpZ8.png",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/website-design-company-india#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website Design Services are the services that include the creation of professional, responsive, and user-friendly websites that represent your brand and are in line with your business objectives.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I hire the best website design company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The company that is right for you is the one that guarantees you top-notch designs, smooth and responsive functionalities that pull customer traffic and engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What are Custom Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom Website Design Services mean the creation of one-of-a-kind and tailor-made websites that represent your brand and are designed to achieve your business objectives.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Responsive Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we make sure that your website has perfect functionality on desktops, tablets, and smartphones so that every user gets the best experience.",
      },
    },
    {
      "@type": "Question",
      name: "What are Creative Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creative Website Design Services are those that attract users by offering interactive, modern, and visually engaging designs and at the same time help your brand to be unique.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer Corporate Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, we create professional and scalable corporate websites that generate trust and loyalty for companies and B2B businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build E-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer E-commerce Website Design Services that comprise the set-up of secure and easy-to-use online stores that are optimized for conversions and provide a seamless shopping experience for customers.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to design a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on the level of difficulty, timelines can be different; still, the majority of the projects range between 3 and 8 weeks depending on features and customizations.",
      },
    },
    {
      "@type": "Question",
      name: "Are your website designs SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without any doubt! Our website designs comply with SEO standards, which, in turn, make it easier for web pages to be found by increasing their loading speed and ranking in search engines.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide affordable website design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen is the creative affordable website design service provider that is characterized by high quality, creativity, and performance besides being budget-friendly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide website redesign services to update your site, make it user-friendly, and increase user interaction.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services comprise all the necessary continuous updates, security monitoring, and technical support for your website.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are the perfect fit for the needs of startups, SMEs, corporate enterprises, e-commerce businesses, and organizations across healthcare, education, real estate, and much more.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate third-party tools into my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, we can. We bring in different tools like CRMs, analytics tools, payment gateways, and other platforms to enhance the functionality and performance of your website.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen as the best website design company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Combining creativity, technology, and business tactics, Capyngen takes the trust of Indian businesses to create tailor-made, responsive, and scalable website design services across India.",
      },
    },
  ],
};

const WebSiteDesign = () => {
  const faqItems = [
    {
      question: "What are Website Design Services?",
      answer:
        "Website Design Services are the services that include the creation of professional, responsive, and user-friendly websites that represent your brand and are in line with your business objectives.",
    },
    {
      question: "Why should I hire the best website design company?",
      answer:
        "The company that is right for you is the one that guarantees you top-notch designs, smooth and responsive functionalities that pull customer traffic and engagement.",
    },
    {
      question: "What are Custom Website Design Services?",
      answer:
        "Custom Website Design Services mean the creation of one-of-a-kind and tailor-made websites that represent your brand and are designed to achieve your business objectives.",
    },
    {
      question: "Do you provide Responsive Website Design Services?",
      answer:
        "Yes, we make sure that your website has perfect functionality on desktops, tablets, and smartphones so that every user gets the best experience.",
    },
    {
      question: "What are Creative Website Design Services?",
      answer:
        "Creative Website Design Services are those that attract users by offering interactive, modern, and visually engaging designs and at the same time help your brand to be unique.",
    },
    {
      question: "Do you offer Corporate Website Design Services?",
      answer:
        "Of course, we create professional and scalable corporate websites that generate trust and loyalty for companies and B2B businesses.",
    },
    {
      question: "Can you build E-commerce websites?",
      answer:
        "Yes, we offer E-commerce Website Design Services that comprise the set-up of secure and easy-to-use online stores that are optimized for conversions and provide a seamless shopping experience for customers.",
    },
    {
      question: "How long does it take to design a website?",
      answer:
        "Based on the level of difficulty, timelines can be different; still, the majority of the projects range between 3 and 8 weeks depending on features and customizations are completed.",
    },
    {
      question: "Are your website designs SEO-friendly?",
      answer:
        "Without any doubt! Our website designs comply with SEO standards, which, in turn, make it easier for web pages to be found by increasing their loading speed, and ranking in search engines.",
    },
    {
      question: "Do you provide affordable website design services?",
      answer:
        "Yes, Capyngen is the creative affordable website design service provider that is characterized by high quality, creativity, and performance besides being budget-friendly.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we give web redesign services to update your site, make it user-friendly, and increase user interaction.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Our services comprise all the necessary continuous updates, and security monitoring, as well as technical support for your website.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We are the perfect fit for the needs of startups, SMEs, corporate enterprises, e-commerce businesses, and organizations across healthcare, education, real estate, and much more.",
    },
    {
      question: "Can you integrate third-party tools into my website?",
      answer:
        "Of course, we can. We bring in different tools like CRMs, analytics tools, payment gateways, and other platforms to better the functionality and performance of your website.",
    },
    {
      question:
        "Why choose Capyngen as the best website design company in India?",
      answer:
        "Combining creativity, technology, and business tactics, Capyngen takes the trust of Indian businesses to create tailor-made, responsive, and scalable website design services across the length and breadth of India.",
    },
  ];

  const benefitsData = [
    {
      title: "Custom Design",
      desc: "Tailor-made layouts that simply flaunt your brand identity.",
    },
    {
      title: "Responsive Design",
      desc: "Easy access to your website and users can even navigate through it on their mobile phones, tablets, as well as desktops.",
    },
    {
      title: "Creative UI/UX",
      desc: "Trendy, entertaining, and easy-to-navigate UI/UX interfaces that visitors find irresistible to leave.",
    },
    {
      title: "E-commerce Solutions",
      desc: "Online stores that are safe, sufficient in terms of capacity, and are customer conversion-focused in order to increase sales.",
    },
    {
      title: "Corporate Solutions",
      desc: "The professional as well as the scalable designs that are capable of having a positive influence on your company image.",
    },
    {
      title: "SEO Integration",
      desc: "All the elements come together to facilitate search rankings e.g. structure, meta tags, and quality content.",
    },
    {
      title: "Performance Optimization",
      desc: "User experience gets better with a very fast loading of the website and functionalities which are smooth.",
    },
    {
      title: "Analytics & Tracking",
      desc: "Tools that are fully integrated to effectively capture visitor data, website activity, and performance.",
    },
    {
      title: "Ongoing Support",
      desc: "Regular maintenance, timely updates, and long-term technical assistance are available.",
    },
  ];

  const steps = [
    {
      title: "Discovery & Research",
      description:
        "Getting to know your brand, audience, and objectives to create a strong base for all design decisions.",
    },
    {
      title: "Strategy & Planning",
      description:
        "Working out details of the site structure, user flow, and key features for a clear execution plan.",
    },
    {
      title: "Wireframing & UI Design",
      description:
        "Creating simple layouts and impressive visuals that reflect your unique brand identity.",
    },
    {
      title: "Development",
      description:
        "Making websites that are fast, safe, and responsive with modern technology from the finalized designs.",
    },
    {
      title: "Content Integration",
      description:
        "Incorporating SEO-friendly text, interactive media, and attractive CTAs to guide user action.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Checking that performance, layout, and functionality are flawless on all browsers and devices.",
    },
    {
      title: "Launch",
      description: "Easy installation, seamless deployment, and going live without any downtime or trouble.",
    },
    {
      title: "Analytics & Optimization",
      description:
        "Monitoring user behavior and optimizing your website continuously for higher conversion rates.",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "Regular updates, security tracking, and patches to keep your site operating at its peak performance.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Custom Website Design Services",
      description:
        "We make websites that are one-of-a-kind and show off your brand’s identity. Nothing is standard, even the smallest detail is to ensure your business gets noticed online.",
      image: assets.webDesign3,
    },
    {
      title: "Responsive Website Design Services",
      description:
        "It doesn’t matter whether someone is visiting your site on a desktop computer, tablet, or mobile phone; it will always be perfect for them with a quick and trouble-free user experience.",
      image: assets.webDesign4,
    },
    {
      title: "Creative Website Design Services",
      description:
        "Website designs are modern, eye-catching, and user-friendly that attract new visitors and make them stay on the site for a longer period of time.",
      image: assets.webDesign5,
    },
    {
      title: "Corporate Website Design Services",
      description:
        "Websites that are designed professionally and are scalable get you loved by your customers and hence, your business becomes more powerful.",
      image: assets.webDesign6,
    },
    {
      title: "E-commerce Website Design Services",
      description:
        "Online stores that are safe, simple to use with easy and quick checkout are designed just to increase your selling.",
      image: assets.webDesign7,
    },
    {
      title: "Landing Page Design Services",
      description:
        "Landing pages with high conversion rates are made to be the source of leads, sign-ups, and get the targeted audience to take the desired next step.",
      image: assets.webDesign8,
    },
  ];

  const cardsSectionDifferentColorData1 = [
    {
      title: "Hands-On Experience",
      description:
        "The company has the know-how of years and a commendable record of success in creating high-performing websites across diverse industry sectors.",
      icon: <FaHandsHelping className="text-3xl text-blue-400" />,
    },
    {
      title: "SEO-Compatible Method",
      description:
        "Good quality programming, quick loading times, and search-friendly structures that increase your organic online visibility.",
      icon: <FaSearch className="text-3xl text-blue-400" />,
    },
    {
      title: "Cheap Web Design Services",
      description:
        "The customer gets tailor-made solutions in every way, including price, that do not slightly compromise on engineering quality.",
      icon: <FaTags className="text-3xl text-blue-400" />,
    },
    {
      title: "Bright Side of Design",
      description:
        "Just the right combination of contemporary aesthetics and customer-centric digital practicality.",
      icon: <FaPalette className="text-3xl text-blue-400" />,
    },
    {
      title: "Action-Oriented Campaigns",
      description:
        "Design crafted specifically to strongly engage the audience, turn visitors into contacts, and ultimately drive conversions.",
      icon: <FaBullhorn className="text-3xl text-blue-400" />,
    },
    {
      title: "Always There for You",
      description:
        "Our crew, from initial scheduling to post-launch, is completely committed to transparent communication and continuous support.",
      icon: <FaUsers className="text-3xl text-blue-400" />,
    },
  ];

  const cardsSectionSliderData1 = [
    {
      title: "E-commerce & Retail",
      image: assets.webDesign11,
    },
    {
      title: "Healthcare & Wellness",
      image: assets.webDesign12,
    },
    {
      title: "Education & E-learning",
      image: assets.webDesign13,
    },
    {
      title: "Real Estate",
      image: assets.webDesign14,
    },
    {
      title: "IT & Software",
      image: assets.webDesign15,
    },
    {
      title: "Corporate & Enterprise Solutions",
      image: assets.webDesign16,
    },
    {
      title: "Travel & Hospitality",
      image: assets.webDesign17,
    },
    {
      title: "Startups & Entrepreneurs",
      image: assets.webDesign18,
    },
  ];

  const whyChooseList = [
    {
      title: "Custom Website Designs",
      text: "that reflect your brand concept and distinctive value proposition.",
    },
    {
      title: "Fully Responsive Layouts",
      text: "to ensure every user gets the exact same frictionless experience on any device.",
    },
    {
      title: "Creative & Modern Interfaces",
      text: "that attract more attention to your brand and lower bounce rates.",
    },
    {
      title: "Corporate Web Solutions",
      text: "delivering a professional online identity that is solid, reputable, and reliable.",
    },
    {
      title: "E-commerce Website Designs",
      text: "built to scale smoothly, secure user checkout, and directly increase your revenue.",
    },
    {
      title: "Recognized by the Industry",
      text: "trusted nationwide as one of the best website design and development partners.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Website Design Company – Best Website Design Company in India
        </title>
        <meta
          name="description"
          content="Best website design company in India providing responsive, fast and SEO-friendly websites to help businesses grow online."
        />
        <meta
          name="keywords"
          content="website design company, website design company gurgaon, responsive website design, best website design agency, custom website design, best website design company in india, top website design company"
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
        aria-label="Website Design Services Banner"
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
                Website Design{" "}
                <span className="text-blue-500">
                  That Works for Your Business
                </span>
              </h1>

              <div className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                <p>
                  The world sees your business through your website. Capyngen provides Website Design Services that combine eye-catching design, clever technology, and a clear strategy. We don't just build websites that look beautiful, they also perform seamlessly to elevate your brand presence in the digital space.
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
                  src={assets.webDesign1}
                  alt="Website Design Services Illustration"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SPLIT INTRO SECTION: WHY CHOOSE CAPYNGEN FOR WEBSITE DESIGN             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.webDesign2}
                alt="Why Choose Capyngen for Website Design Services"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen for Website Design Services?
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                We at Capyngen are not just a service provider — we are your digital growth partner. Through our expertise and skilled team, we develop websites that are visually attractive, easy to navigate, mobile-friendly, and conversion-focused.
              </p>
            </div>
            <ul className="space-y-3.5 text-slate-700 text-base">
              {whyChooseList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">{item.title}</strong>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
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
      {/* 3. FULL SIZE BANNER 1: BRING YOUR BRAND TO LIFE ONLINE                     */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.webDesignFullSize}
            alt="Bring your brand to life online"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Bring your brand to life online
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Creating online environments that attract, engage, and uplift the users.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Design My Website
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR WEB DEVELOPMENT FEATURES (6 CARDS - White Background)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Web Development Features
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
            Are you searching for a responsive, creative website design for your business? Contact{" "}
            <span className="font-semibold text-blue-600">Capyngen</span> right now and get affordable, tailor-made solutions.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CAPYNGEN WEBSITE DESIGN PROCESS (9 STEPS)                               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Capyngen Website Design Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              At Capyngen, we combine creativity, strategy, and technology to deliver websites that really work. Our organized process guarantees every project is orderly, transparent, and results-driven.
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
      {/* 6. WHY CAPYNGEN IS THE BEST WEBSITE DESIGN COMPANY (6 CARDS)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Capyngen is the Best Website Design Company
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Capyngen shines out of the pack by creatively combining art, science, and strategy to create websites that produce tangible business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionDifferentColorData1.map((item, idx) => (
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
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. KEY FEATURES OF OUR WEBSITE DESIGN SERVICES (Split White Section)       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.webDesign10}
                alt="Key Features of Our Website Design Services"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Key Features of Our Website Design Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At Capyngen, our website design services are specifically made to bring about a positive impact, functionality, and value for the long term.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefitsData.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#f8fafc] border border-slate-200 rounded-none">
                  <h4 className="font-bold text-slate-900 text-base mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INDUSTRIES WE SERVE (8 CARDS)                                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Serve
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Our web design and development services span a wide variety of industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cardsSectionSliderData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 flex flex-col rounded-none shadow-xl overflow-hidden group"
              >
                <div className="h-40 overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4
                    className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-slate-400 text-sm">
            We create websites compliant with your industry and business objectives regardless of your niche.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FULL SIZE BANNER 2: BEAUTIFUL WEBSITES THAT TELL YOUR STORY            */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.webDesignFullSize2}
            alt="Beautiful websites that tell your story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Beautiful websites that tell your story
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We create responsive, innovative, and impactful websites for any brand.
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
        desc="Find quick answers regarding our website design workflow, turnaround times, and technologies."
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
              Ready to Build Your Website?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Crave a stylish, scalable, and captivating website? Acquire Capyngen's corporate website design services and e-commerce website design services to grow your business online.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Get in Touch Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebSiteDesign;
