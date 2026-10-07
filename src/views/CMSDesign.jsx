import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { FaCode, FaShoppingCart, FaWordpressSimple } from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/cms-website-design#webpage",
  url: "https://www.capyngen.com/cms-website-design",
  name: "CMS Design | Custom CMS Web Design & UI/UX Services – Capyngen",
  description:
    "Capyngen offers custom CMS design solutions that combine functionality and style. Get expert CMS web design and UI/UX services to manage content with ease.",
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
      caption: "Capyngen",
    },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/cms-website-design#service",
  name: "CMS Design & Development Services",
  serviceType: "CMS Design, CMS Customization, CMS UI/UX",
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
    "Capyngen offers custom CMS design solutions that combine functionality and style. Get expert CMS web design and UI/UX services to manage content with ease.",
  url: "https://www.capyngen.com/cms-website-design",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/cms1-tulX0Vc_.png",
    caption: "CMS Design | Custom CMS Web Design & UI/UX Services – Capyngen",
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
  "@id": "https://www.capyngen.com/cms-website-design#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CMS design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CMS design refers to the creation of content management systems that are user-friendly, scalable, and secure for managing websites, apps, and digital platforms efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "Why do I need a CMS for my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CMS simplifies content creation, editing, and publishing, saving time and improving the overall workflow for teams and website administrators.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer custom CMS designs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides fully customized CMS design solutions tailored to match your business needs, workflows, and branding requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Which CMS platforms do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in CMS platforms such as WordPress, Drupal, Joomla, Magento, and custom-built CMS systems for both startups and enterprises.",
      },
    },
    {
      "@type": "Question",
      name: "Is website performance better when CMS is designed properly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a well-optimized CMS improves website performance, enhances speed, provides smoother navigation, and ensures easy scalability.",
      },
    },
    {
      "@type": "Question",
      name: "Are CMS and mobile applications integrated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen ensures CMS platforms are mobile-friendly and can integrate seamlessly with mobile apps for easy content management on the go.",
      },
    },
    {
      "@type": "Question",
      name: "Is CMS with Capyngen secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we implement robust security features like access control, encryption, and compliance with global enterprise security standards.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to manage multiple websites with one CMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our CMS solutions support multi-site management with centralized control for publishing and content distribution across multiple web properties.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer CMS support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides ongoing CMS maintenance, upgrades, and technical support to ensure smooth operation and security.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a CMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The typical CMS design and development timeline ranges from 4 to 10 weeks, depending on the project’s complexity and level of customization.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen able to connect 3rd-party applications with a CMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen integrates CRMs, eCommerce systems, analytics, marketing tools, and other third-party applications with your CMS for maximum functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design CMS that are friendly to SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our CMS solutions are built following SEO best practices to ensure fast indexing, better search rankings, and higher visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for non-technical users to operate the CMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our CMS interfaces are designed to be intuitive and easy-to-use, allowing non-technical users to manage content effortlessly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have any solutions for enterprise CMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen develops scalable and robust CMS solutions for large enterprises, ensuring secure and efficient content management.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen for CMS design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen offers global expertise, experienced designers, and a user-first approach to deliver CMS solutions that enhance productivity and simplify content management.",
      },
    },
  ],
};

const CMSDesign = () => {
  const faqItems = [
    {
      question: "What is CMS design?",
      answer:
        "CMS design basically is the creation of content management systems that are user-friendly, scalable, and secure in order to manage websites, apps, and digital platforms efficiently.",
    },
    {
      question: "Why do I need a CMS for my website?",
      answer:
        "Content management systems make content creation much easier, taking less time and thus improving the general workflow of teams.",
    },
    {
      question: "Do you offer custom CMS designs?",
      answer:
        "Indeed, Capyngen crafts CMS solutions that are fully tailored to fit your business needs as well as the workflow and design requirements.",
    },
    {
      question: "Which CMS platforms do you work with?",
      answer:
        "We work on WordPress, Drupal, Joomla, Magento, and even fully custom-built CMS platforms to create the right fit for enterprises and startups.",
    },
    {
      question: "Is website performance better when CMS is designed properly?",
      answer:
        "Absolutely, optimized CMS design increases site speed, makes navigation more user-friendly, and thus ensures hassle-free content updates and scalability.",
    },
    {
      question: "Are CMS and mobile applications integrated?",
      answer:
        "We definitely make the CMS platforms mobile-friendly and also integrate the apps for uninterrupted content management while on the move.",
    },
    {
      question: "Is CMS with Capyngen secure?",
      answer:
        "Yes, we pay special attention to access control, data encryption, as well as the fulfillment of security standards for enterprise CMS all over the world.",
    },
    {
      question: "Is it possible to manage multiple websites with one CMS?",
      answer:
        "Yes, the CMS we designed provides multi-site management and at the same time there is a central control from where the publishing of all web properties can be done.",
    },
    {
      question: "Do you offer CMS support and maintenance?",
      answer:
        "We maintain and service your CMS platform whenever necessary and also provide continuous support to it.",
    },
    {
      question: "How long does it take to build a CMS?",
      answer:
        "Usually, depending on factors like the complexity of the project and the level of customization, the time for CMS projects to be completely designed and rolled out is between 4 and 10 weeks.",
    },
    {
      question:
        "Is Capyngen able to connect 3rd-party applications with a CMS?",
      answer:
        "Yes, we don't just make CRM, marketing, and analytics tools work with your CMS but also e-commerce and other tools for maximum functionality and connection.",
    },
    {
      question: "Do you design CMS that are friendly to SEO?",
      answer:
        "Yes, our CMS are built in a way that they follow SEO best practices and thus enjoy fast indexing, better rankings, and more visibility.",
    },
    {
      question: "Is it possible for non-technical users to operate the CMS?",
      answer:
        "Definitely! Our CMS interfaces are super user-friendly thus content management is really a breeze for those who are non-technically inclined.",
    },
    {
      question: "Do you have any solutions for enterprise CMS?",
      answer:
        "Yes, Capyngen develops powerful and scalable CMS platforms for big organizations thus making sure that the system is always efficient and content is securely managed.",
    },
    {
      question: "Why choose Capyngen for CMS design?",
      answer:
        "With worldwide experience, dedicated designers and an emphasis on user-friendliness, Capyngen does not only provide content management solutions that are simple to use but also boost productivity.",
    },
  ];

  const solutionsData = [
    {
      title: "Innovation & Problem-Solving",
      desc: "Experienced in developing creative solutions to complex technical challenges, improving efficiency and performance across systems.",
    },
    {
      title: "CMS Design & Optimization",
      desc: "Skilled in designing and implementing user-friendly, scalable content management systems that enhance workflow efficiency and content delivery.",
    },
    {
      title: "Suitable Solutions",
      desc: "Custom CMS development that is aligned strictly with your company’s long-term operational goals.",
    },
    {
      title: "Responsive & Scalable",
      desc: "Modern layouts and administration portals that are mobile-ready across every platform and screen resolution.",
    },
    {
      title: "Intelligent Content Management",
      desc: "Simplified administrative workflows, structured taxonomies, and instant multi-channel content publishing.",
    },
    {
      title: "Continuous Operation",
      desc: "Comprehensive onboarding, documentation, regular patches, and continuous performance optimization.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Responsive CMS Design",
      description:
        "You can be confident that your CMS-based website will look exceptional across all devices. Our responsive CMS design ensures layouts adapt automatically for desktops, tablets, and smartphones.",
      icon: <FaCode className="text-3xl text-blue-400" />,
    },
    {
      title: "CMS UI/UX Design",
      description:
        "Keep users and administrators engaged with intuitive browsing, quick loading times, and clean editorial workflows designed for frictionless daily operation.",
      icon: <FaWordpressSimple className="text-3xl text-blue-400" />,
    },
    {
      title: "CMS Design & Customization",
      description:
        "Our comprehensive CMS design services span custom theme creation, headless CMS implementations, and complete digital ecosystem integrations.",
      icon: <FaShoppingCart className="text-3xl text-blue-400" />,
    },
  ];

  const steps = [
    {
      title: "Assess Requirements",
      description:
        "Understand your editorial workflows, user roles, content hierarchy, and technical integration requirements.",
    },
    {
      title: "UI/UX Planning & Platform Selection",
      description:
        "Create responsive wireframes and select the ideal CMS architecture (WordPress, Headless, Drupal, or Custom).",
    },
    {
      title: "Custom Design",
      description:
        "Craft bespoke UI components, editorial page templates, and dynamic layout blocks tailored to your brand.",
    },
    {
      title: "Integration",
      description:
        "Connect necessary APIs, CRM workflows, database systems, and third-party marketing tools seamlessly.",
    },
    {
      title: "Testing & Optimization",
      description:
        "Rigorously verify load speed, role-based access permissions, SEO schemas, and multi-device usability.",
    },
    {
      title: "Launch & Support",
      description:
        "Execute flawless production deployment, provide administrator training, and deliver ongoing maintenance.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          CMS Website Design Services – Best CMS Design Company in India
        </title>
        <meta
          name="description"
          content="Professional CMS website design services in India. We create custom, responsive, and user-friendly CMS websites to manage your business efficiently"
        />
        <meta
          name="keywords"
          content="CMS website design, cms website development company in gurgaon, CMS design services, CMS website development India, custom CMS websites, responsive CMS design, Custom CMS Development Services, professional CMS services"
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
        aria-label="CMS Website Design Banner"
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
                Best CMS Website Design Services{" "}
                <span className="text-blue-500">
                  Delivering Custom, Responsive, and User-Friendly Platforms
                </span>
              </h1>

              <div className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                <p>
                  Get the most out of your digital presence using content management systems that are secure, intelligent, and scalable for web, mobile, and enterprise platforms. Empower non-technical teams to publish faster and manage content effortlessly.
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
                  src={assets.cms1}
                  alt="CMS Website Design Services Illustration"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SPLIT INTRO SECTION: BEST CMS WEBSITE DESIGN SERVICES                   */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.cms2}
                alt="Best CMS Website Design Services by Capyngen"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Best CMS Website Design Services
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Capyngen provides innovative CMS design services of the highest quality that enable companies to manage, grow, and simplify their digital presence. Our skilled designers and developers create personalized CMS design solutions tailored to your distinctive operational needs — whether websites, apps, or complex multi-site enterprise networks.
              </p>
              <p>
                With responsive design, user-friendly editorial workflows, and seamless integrations, we ensure your content management system delivers peak speed, ironclad security, and effortless daily administration.
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
      {/* 3. SPLIT SECTION 2: SCALABLE & USER-FRIENDLY DIGITAL EXPERIENCES           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              CMS Solutions for Scalable Digital Experiences
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Custom CMS website design solutions from Capyngen allow you to streamline organizational processes through digital interfaces that are intuitive for non-technical team members.
              </p>
              <p>
                Manage and update your website content with ease while expanding your platform in lockstep with business growth.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Request Custom CMS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.cms3}
                alt="Custom CMS Design"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FULL SIZE BANNER 1: SIMPLIFY CONTENT MANAGEMENT                         */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.cmsFullSize}
            alt="Simplify content management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Simplify content management
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our designs for CMS platforms are user-friendly, modular, and engineered to scale with your content demands.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Manage Content
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CMS WEB DESIGN SERVICES (3 Dark Cards)                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              CMS Web Design Services
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We offer CMS Web Design services focused on clean layouts, modern user interfaces, and responsive features to keep your audience engaged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {/* 6. OUR CMS WORKING PROCESS (6 Steps)                                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Working Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We follow a well-defined process to deliver high-performance, easy-to-use CMS design solutions:
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
      {/* 7. REASONS TO CHOOSE CAPYNGEN FOR CMS DESIGN (Split White Section)         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.cms4}
                alt="Reasons to Choose Capyngen for CMS Design"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Reasons to Choose Capyngen for CMS Design
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Experience the benefits of world-class CMS architecture tailored precisely to make your content workflows faster and more efficient.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutionsData.map((item, idx) => (
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
      {/* 8. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Find quick answers regarding our CMS design solutions, supported platforms, and enterprise security."
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
              Do You Need the Best CMS Design Services for Your Company?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Get a team of professional CMS experts to deliver tailored CMS web design solutions that are fast, secure, and engaging.
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

export default CMSDesign;
