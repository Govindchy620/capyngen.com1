import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Layers,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cpu,
  Shield,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Workflow,
  Sparkles,
  Zap,
  TrendingUp,
  Settings,
  Boxes,
  Code2,
  Puzzle,
  Building2,
  Check,
} from "lucide-react";
import { assets } from "../assets/assets";
import appHeroBg from "../assets/application/1.png";
import appLegacyImg from "../assets/application/2.png";
import appArchitectureImg from "../assets/application/3.png";
import appCloudImg from "../assets/application/4.png";
import appModernImg from "../assets/application/5.png";
import TechStack from "../components/TechStack";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/application-solutions#webpage",
  url: "https://www.capyngen.com/application-solutions",
  name: "Best Application Solutions for Business – India’s Top Custom Application Solutions",
  description:
    "Get India’s top Custom Application Solutions for businesses – secure, scalable, and tailored to your needs for seamless digital transformation.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/applicationSolution5-BrBtAszh.png",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/application-solutions#service",
  name: "Best Application Solutions for Business – India’s Top Custom Application Solutions",
  description:
    "Get India’s top Custom Application Solutions for businesses – secure, scalable, and tailored to your needs for seamless digital transformation.",
  url: "https://www.capyngen.com/application-solutions",
  serviceType: "Custom Application Solutions",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/applicationSolution5-BrBtAszh.png",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are application solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Application solutions are software systems designed to solve business challenges and support growth through web, mobile, and cloud-based custom application solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Why should businesses invest in custom application solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom application solutions provide greater flexibility, functionality, and optimization compared to generic software, giving businesses a competitive advantage.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen offer enterprise application solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen delivers scalable and reliable enterprise application solutions designed to handle complex business processes.",
      },
    },
    {
      "@type": "Question",
      name: "Which technologies do you use for application development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use modern technologies including React, Node.js, Flutter, AWS, and Kubernetes to build scalable and high-performance applications.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop both mobile and web applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design and develop both mobile apps (iOS & Android) and web applications based on your business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen build cloud-native applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialize in building cloud-native applications that are scalable, resilient, and cost-effective.",
      },
    },
    {
      "@type": "Question",
      name: "Do you modernize legacy applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We upgrade and modernize legacy systems to improve performance, security, and scalability.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve healthcare, finance, retail, education, entertainment, logistics, and telecommunications industries.",
      },
    },
    {
      "@type": "Question",
      name: "Are your applications secure and scalable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We implement robust security protocols and design architectures to scale with your business growth.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer SaaS application development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build subscription-based SaaS platforms with multi-tenant architecture and secure payment integrations.",
      },
    },
    {
      "@type": "Question",
      name: "Can your applications integrate with existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our applications are built with custom APIs to seamlessly integrate with your existing software and tools.",
      },
    },
    {
      "@type": "Question",
      name: "How long does application development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development timelines generally range from 4 to 10 weeks depending on project scope and complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer continuous monitoring, updates, and maintenance services after launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We collaborate with startups as well as large enterprises to deliver effective application solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get started by scheduling a free consultation. Our team will recommend the best application development solutions for your business.",
      },
    },
  ],
};

const ApplicationSolutions = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const faqItems = [
    {
      question: "What are application solutions?",
      answer:
        "Application solutions refer to systems where the software is used to address business issues and grow the business by Web, Mobile, and Cloud-based custom application solutions.​",
    },
    {
      question:
        "Why then consider investing in custom application solutions by businesses?",
      answer:
        "The general one does not provide as many functionalities, which allows the enterprise to be a competitive advantage through application development services by being more specific and more optimized.​",
    },
    {
      question:
        "Does enterprise application solutions are offered by Capyngen?",
      answer:
        "Absolutely. As the application development company, we create application solutions that are scalable with the reliability of enterprise-level systems when it comes to complex business processes.​",
    },
    {
      question: "Which technologies do you apply to develop apps?",
      answer:
        "The primary technologies that we employ to run the application solutions smoothly and scale to our clients are mainly React, Node.js, Flutter, AWS, and Kubernetes.​",
    },
    {
      question: "Do you create mobile as well as web applications?",
      answer:
        "Certainly. We create and build applications to both the mobile devices and the web based on your application solutions in Gurgaon requirements.​",
    },
    {
      question: "Is Capyngen able to construct cloud-native applications?",
      answer:
        "Exactly. We specialize in offering cloud application solutions which are scalable, flexible and cost effective through global applications solution approach.​",
    },
    {
      question: "Do you upgrade old applications?",
      answer:
        "A definite Yes. We modernise old software to suit new levels of business and technology application solutions.​",
    },
    {
      question: "What are your served industries?",
      answer:
        "In the best application solutions for business, we deal with medical, financial, commercial, educational, entertainment, software, and telecommunication sectors.​",
    },
    {
      question: "Do you have secure and scalable applications?",
      answer:
        "Certainly. We use strict security requirements and develop scalable products for application solutions.​",
    },
    {
      question: "Does it offer SaaS application development?",
      answer:
        "Yes. We develop cloud-based solutions of SaaS applications that assist companies in providing recurring services using an app development company in India.​",
    },
    {
      question: "Is your application able to work with existing systems?",
      answer:
        "Yes. Our APIs are designed to be synchronised with other platforms and software through application management services easily.​",
    },
    {
      question: "What is the duration of the construction of an application?",
      answer:
        "The timelines are dependent on the complexity of the project, ranging from 4 to 10 weeks in application development services.​",
    },
    {
      question: "Do you provide after-sales services?",
      answer:
        "Yes. Our services also include full support services in maintenance and upgrades after deploying custom application solutions.​",
    },
    {
      question:
        "Do you have solutions that are appropriate to startups and enterprises?",
      answer:
        "Indeed. We collaborate with small or even large-scale businesses to provide effective application solutions.​",
    },
    {
      question: "What should I do in order to start with Capyngen?",
      answer:
        "Establish a free consultation with us to come up with the best application development solutions for your business.​",
    },
  ];

  const servicesData = [
    {
      image: assets.applicationSolution4,
      title: "Web Application Development",
      desc: "We develop slick, secure and also purpose built web applications according to your business objectives that will enable enhancing search rankings and user base as global applications solution providers.",
    },
    {
      image: assets.applicationSolution5,
      title: "Mobile Application Development",
      desc: "Our services in the custom Android app development and iOS software development company can create high-performing native and cross-platform mobile applications with a modern and stylish look and substantial engagement.​​",
    },
    {
      image: assets.applicationSolution6,
      title: "Enterprise Application Solutions",
      desc: "Both Business suites (stable and extendable) to enhance communication, productivity and interaction with employees through application management services.",
    },
    {
      image: assets.applicationSolution7,
      title: "Cloud-Native Applications",
      desc: "Cloud-based applications with the ability of freedom of features, easy upgrades, and fast computing, such that application solutions in Gurgaon could grow exponentially.​",
    },
    {
      image: assets.applicationSolution8,
      title: "Custom Software Solutions",
      desc: "India Custom software to meet the complex corporate requirements, guaranteeing innovations, assurance, and client retention as the App development company in India.​",
    },
    {
      image: assets.applicationSolution9,
      title: "E-Commerce Applications",
      desc: "Complete online stores dedicated to easy user experiences and checkout.",
    },
    {
      image: assets.applicationSolution10,
      title: "SaaS (Software as a Service) Applications",
      desc: "Budget-friendly, fast to develop, scalable, and secure subscription-based cloud applications.",
    },
    {
      image: assets.applicationSolution12,
      title: "App Development on a cross-platform",
      desc: "Software offers a uniform experience to users regardless of the devices without multiple apps.",
    },
    {
      image: assets.applicationSolution13,
      title: "Development and integration of API",
      desc: "Design of an API that allows the exchange of data easily and facilitates access to better business operations.",
    },
    {
      image: assets.applicationSolution14,
      title: "Application modernisation: Legacy applications",
      desc: "Modifying the old software to achieve modern standards in terms of speed, safety, and ease of use.",
    },
    {
      image: assets.applicationSolution15,
      title: "CRM and ERP Solution applications",
      desc: "CRM and ERP systems that improve business intelligence and relationships with clients.",
    },
    {
      image: assets.applicationSolution16,
      title: "AI-Powered Applications",
      desc: "Smart AI and ML systems that assist companies in spending less time and predicting.",
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Learn business requirements, issues and user expectations in order to establish a platform of scalable custom application solutions.​",
    },
    {
      step: "Step 02",
      title: "UI/UX Design",
      description:
        "Develop attractive, user-friendly, and user retention interfaces.",
    },
    {
      step: "Step 03",
      title: "Development & Integration",
      description:
        "As an application development company, we develop secure, high performance applications that integrate readily with third-party tools and databases.",
    },
    {
      step: "Step 04",
      title: "Testing & QA",
      description:
        "Carry out comprehensive testing in order to verify functionality, security, compatibility and high performance.",
    },
    {
      step: "Step 05",
      title: "Deployment & Support",
      description:
        "Install programs effectively and offer continuous technical maintenance and support through application mangement services.​",
    },
    {
      step: "Step 06",
      title: "Optimization in Permanence",
      description:
        "Ensure the excellence of apps through performance analysis, user feedback, and tech updates to be competitive.",
    },
  ];

  const benefitsData = [
    {
      title: "More Efficiency and Productivity",
      text: "Automation of tasks and workflow.",
      icon: <Zap className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Increase in Customer Interaction",
      text: "Easy-to-use apps enhance customer relationships.",
      icon: <TrendingUp className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: "Secure, Scale-able, and Future Orientated Applications",
      text: "Built using the latest technology to support businesses.",
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "Shorter Route to Sales",
      text: "Fast business development before competitors.",
      icon: <Workflow className="w-5 h-5 text-cyan-500" />,
    },
    {
      title: "Integration With No Ado",
      text: "Easily access existing systems or third-party applications.",
      icon: <Boxes className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Low-priced solutions",
      text: "Optimized development uses less on operations.",
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    },
  ];

  const whyChooseCards = [
    {
      title: "Competencies to develop customised, cloud, mobile and web application solutions.",
      icon: <Puzzle className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "A total development package, which takes a product through all development phases.",
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "A highly qualified development and design team at Apps Solutions company.",
      icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
    },
    {
      title: "The capability to perform on a global scale and be as secure as big companies.",
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
    },
    {
      title: "Focus on invention, expandability and user-friendliness.",
      icon: <Building2 className="w-8 h-8 text-amber-400" />,
    },
    {
      title: (
        <>
          Application software services for solving problems of the corporates
          worldwide, and digital growth support that rivals even the{" "}
          <Link
            to="/digital-marketing"
            className="text-cyan-400 font-semibold underline hover:text-cyan-300"
          >
            Best digital marketing services Provider
          </Link>{" "}
          in impact on revenue.
        </>
      ),
      icon: <Layers className="w-8 h-8 text-purple-400" />,
    },
  ];

  const slidesData = [
    {
      image: assets.applicationSolution1,
      heading:
        "Instant Custom Application Solutions – Get India’s #1 Trusted Business Application Service",
      description: (
        <>
          <p>
            As the best application development company, we develop scalable
            custom application solutions that meet your business's unique
            requirements, whether on web or mobile.​{" "}
          </p>
          <p className="mt-3">
            Capyngen is a global leader in providing effective digital products,
            such as enterprise, cloud and mobile applications, and the best
            application development solutions.​
          </p>
        </>
      ),
    },
    {
      image: assets.applicationSolution2,
      heading: "Transform Your Business with Custom Applications",
      description: (
        <>
          <p>
            Develop secure, reliable, and scalable applications with Capyngen to
            make your business smarter and faster with our Apps Solutions
            company knowledge.​
          </p>
        </>
      ),
    },
    {
      image: assets.applicationSolution3,
      heading: "Top-Rated Application Solutions Company",
      description: (
        <>
          <p>
            Application development services. We deploy the use of modern
            technologies and strategies to provide safe, scalable, customised
            application solutions to start-ups, enterprises and global brands.
            Capyngen also partners with you as a strategic{" "}
            <a
              href="https://www.capyngen.com/consulting"
              className="text-blue-400 font-semibold underline hover:text-cyan-300"
            >
              consulting services provider
            </a>
            , helping you align technology with long-term business goals.
          </p>
        </>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slidesData.length]);

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Best Application Solutions for Business – India’s Top Custom
          Application Solutions
        </title>
        <meta
          name="description"
          content="Get India’s top Custom Application Solutions for businesses – secure, scalable, and tailored to your needs for seamless digital transformation."
        />
        <meta
          name="keywords"
          content="Best application solutions for business, application solutions"
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
      {/* 1. HERO SECTION (Full Screen min-h-screen / Sharp Edges / 3 Slides Slider) */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-screen text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slidesData[activeSlide].image})`,
        }}
        aria-label="Application Solutions Banner"
      >
        {/* Dark Tech Gradient Overlay for Crystal Clear Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b17] via-[#070e1d]/90 to-[#050b17]/75 backdrop-blur-[1px]" />

        {/* Subtle Background Tech Grid Lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl text-left">
            {/* Top Tag */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 sm:w-12 bg-slate-400" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-slate-300 font-bold">
                WHAT WE DO <span className="text-blue-400 mx-1">/</span> SERVICES
              </span>
              <div className="h-[1px] flex-1 max-w-xs bg-slate-600/50" />
            </div>

            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.14] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {slidesData[activeSlide].heading}
            </h1>

            <div className="text-slate-200 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl font-normal space-y-3">
              {slidesData[activeSlide].description}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Sharp Navigation Tabs / Indicators */}
            <div className="flex items-center gap-3 mt-10">
              {slidesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                    activeSlide === idx
                      ? "w-12 bg-blue-500 shadow-sm"
                      : "w-6 bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES WE OFFER (12 SERVICES GRID)                                   */}
      {/* ========================================================================= */}
      <section id="services-section" className="py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
              COMPREHENSIVE SPECTRUM
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Application Solutions We Offer
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              We complete a package of business application solutions with the focus on the diverse industry needs, with application software services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((svc, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between rounded-none overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BOOK YOUR FREE CONSULTATION CALLOUT (MID-PAGE STRIP)                   */}
      {/* ========================================================================= */}
      <section className="bg-[#09152e] text-white py-10 lg:py-12 border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-4xl text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold">
              COLLABORATIVE STRATEGY
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Book Your Free Consultation Today
            </h3>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Talk to one of our brilliant employees and define the best application solutions that suit your company as the best application solutions for business. Another mighty project is in the process of construction.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Book Your Consultation Now
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BENEFITS OF OUR APPLICATION SOLUTIONS                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="border border-slate-200 bg-white p-3 shadow-xl rounded-none">
              <img
                src={assets.applicationSolution17}
                alt="Benefits of Our Application Solutions by Capyngen"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed rounded-none font-medium">
              The Capyngen application solutions, which are best used in the business, are developed in a way that leaves a lasting impression that is lasting.
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              QUANTIFIABLE METRICS
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits of Our Application Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Client-built custom application solution, Capyngen business wins can be quantitatively measured as follows:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefitsData.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8fafc] border border-slate-200 p-5 rounded-none hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white border border-slate-200 rounded-none shadow-sm">
                      {benefit.icon}
                    </div>
                    <h3
                      className="text-base font-bold text-slate-900"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-11 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FULL SIZE IMAGE SECTION: SMART APPLICATIONS                            */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.applicationSolFullSize}
            alt="Smart applications for modern businesses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest px-3 py-1 bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 rounded-none inline-block font-bold">
            MODERN PLATFORMS
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Smart applications for modern businesses
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are fervent about developing software that is scalable and efficient, and that fulfils the requirements of the business in the 21st century by providing end-to-end application development services.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Discover More
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR APPLICATION DEVELOPMENT PROCESS (6 STEPS)                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3 font-bold">
              DELIVERY LIFECYCLE
            </span>
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Application Development Process
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Our process is transparent and well structured from start to end to ensure that all application solutions are of the best standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 p-8 flex flex-col justify-between hover:border-blue-500 transition-all duration-300 rounded-none relative group shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />

                <div>
                  <h3
                    className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors"
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
      {/* 7. WHY CHOOSE CAPYNGEN FOR APPLICATION SOLUTIONS                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
              WHY PARTNER WITH US
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen for Application Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-8 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between rounded-none shadow-sm hover:shadow-xl group"
              >
                <div>
                  <div className="w-14 h-14 bg-slate-900 text-cyan-400 flex items-center justify-center mb-6 rounded-none group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
                    {card.title}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> CAPYNGEN ASSURANCE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TECH STACK SHOWCASE                                                    */}
      {/* ========================================================================= */}
      <div className="bg-white border-b border-slate-200">
        <TechStack
          heading="Enterprise Frameworks & Cloud Services"
          subheading="Accelerating development with industry-proven tools and scalable infrastructure."
          theme="light"
        />
      </div>

      {/* ========================================================================= */}
      {/* 9. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Explore answers regarding our custom applications, SaaS architecture, timeline, and enterprise SLAs."
        items={faqItems}
      />

      {/* ========================================================================= */}
      {/* 10. DIGITAL TRANSFORMATION CALLOUT (Bottom Final CTA - below FAQs)         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold">
              ENTERPRISE ROADMAP
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Start Your Digital Transformation Journey
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Capyngen develops custom application solutions collabors to the business community, which are enjoyable to access and help the company develop more quickly, as high as worldwide, with the best application development solutions.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationSolutions;
