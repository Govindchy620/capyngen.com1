import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ChevronRight,
  Check,
} from "lucide-react";
import {
  FaAndroid,
  FaApple,
  FaMobileAlt,
  FaCode,
  FaCheckCircle,
  FaCogs,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaUserFriends,
  FaClock,
  FaSmile,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import appDevHeroBg from "../assets/App Development service/1.png";
import appDevPhoneMockup from "../assets/App Development service/2.png";
import FAQSection2 from "../components/FAQSection2";
import TechStack from "../components/TechStack";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/app-development#webpage",
  url: "https://www.capyngen.com/app-development",
  name: "App Development Company – India’s Best Mobile App Development Company",
  description:
    "Boost your business with India’s leading App Development Company – expert mobile app development services that are secure, scalable, and feature-rich.",
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
    url: "https://www.capyngen.com/assets/appDevFullSize-DC2Xspjb.png",
    caption: "Mobile App Development Services by Capyngen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/app-development#service",
  name: "App Development Company – India’s Best Mobile App Development Company",
  description:
    "Boost your business with India’s leading App Development Company – expert mobile app development services that are secure, scalable, and feature-rich.",
  url: "https://www.capyngen.com/app-development",
  serviceType: "Mobile App Development Services",
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
    url: "https://www.capyngen.com/assets/appDevFullSize-DC2Xspjb.png",
    caption: "Mobile App Development Services by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Capyngen provide for app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen offers comprehensive mobile app development services including Android, iOS, cross-platform, custom app development, enterprise app solutions, app testing, and ongoing app maintenance services.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose Capyngen as my app development company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen has a team of experienced app developers known for building secure, scalable, and user-friendly applications that help businesses achieve their goals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop custom Android applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As a leading Android app development company in India, we provide custom Android app development services for startups, SMEs, and enterprises.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer iPhone and iOS app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a trusted iOS app development company delivering high-quality applications for iPhone and iPad devices.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop cross-platform mobile applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialize in cross-platform app development, creating applications compatible with both Android and iOS platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer enterprise application development solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide flexible and scalable enterprise app development solutions designed to streamline complex business processes.",
      },
    },
    {
      "@type": "Question",
      name: "What is mobile application testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile application testing involves identifying bugs, security issues, usability problems, and performance gaps to ensure high-quality app performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide app maintenance services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our app maintenance services include regular updates, bug fixes, performance monitoring, and feature enhancements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a mobile application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The app development timeline depends on project complexity and typically ranges between 6 and 16 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate APIs and third-party services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate APIs and third-party services such as payment gateways, analytics tools, and CRM systems.",
      },
    },
    {
      "@type": "Question",
      name: "Are your applications secure and scalable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Security and scalability are core priorities in all our custom app development solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop e-commerce mobile applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop feature-rich e-commerce mobile applications for online stores with seamless shopping experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen provide app strategy and consulting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer end-to-end mobile app consulting including strategy planning, development, testing, deployment, and ongoing support.",
      },
    },
  ],
};

const AppDevelopment = () => {
  const faqItems = [
    {
      question: "What are Capyngen Services with regards to app Development?",
      answer:
        "Our best app development services in Gurgaon that are under our mobile app development umbrella include Android, iOS, cross-platform, custom app development services, enterprise app solutions, testing, as well as app maintenance services.",
    },
    {
      question: "Why would I choose Capyngen to be my app development company?",
      answer:
        "The Capyngen consists of knowledgeable professional app developers, it has the benefits of a holistic skill base, and it is reputed to develop extremely secure scalable user friendly applications which enable the accomplishment of business objectives, as the Best Mobile App Development Company in India.",
    },
    {
      question: "Can you create tailor made android applications?",
      answer:
        "Exactly! As a top Android app development company in India, we provide custom android app development services to startups, SMEs and enterprises.",
    },
    {
      question: "Do you deal with the development of iPhone apps?",
      answer:
        "Yes, we are an iOS application development firm that is trustworthy and provides quality apps on such devices as iPhone and iPad.",
    },
    {
      question: "Do you develop cross-platform applications?",
      answer:
        "Yes, as a pioneer in cross platform app development we develop apps, which are compatible both in Android and iOS.",
    },
    {
      question: "Have you any enterprise application plans?",
      answer:
        "Yes, we do possess the most adaptable enterprise app development solutions to encounter difficulties in business procedures and business operations.",
    },
    {
      question: "What is mobile application testing?",
      answer:
        "Testing of mobile applications is the procedure of thoroughly screening mobile applications on bugs, security, usability and performance glitches. Mobile Application Testing services are offered by Capyngen in addition to the normal workflow offered by the Best app development service provider in India.",
    },
    {
      question: "Are you provided with app maintenance services?",
      answer:
        "Of course, we will have regular updates, bug fixing, feature addition, and monitoring of the performance, which are part of our services of maintaining the application.",
    },
    {
      question: "What is the time taken to develop the app?",
      answer:
        "The time frame of development is largely a factor of the complexity of the app, and in most of the apps, it is between 6 and 16 weeks.",
    },
    {
      question:
        "Can you connect APIs and other third-party resources to my application?",
      answer:
        "Indeed, we merge your app and payment gateways, analytics, and CRM services.",
    },
    {
      question: "Are your applications secure and easily scalable?",
      answer:
        "Of course. The table is always on security and scalability whenever we are talking about our custom app solutions of the Best mobile app development company in Gurgaon.",
    },
    {
      question: "Do you create e-commerce apps?",
      answer:
        "We are among the largest eCommerce app development firms in India and are focused on eCommerce applications of online stores where one can shop with ease.",
    },
    {
      question:
        "Can Capyngen provide a helping hand and participate in creating the app strategy?",
      answer:
        "Indeed, we present end-to-end consulting, strategy, development, testing, and support on the mobile applications as the Best Mobile App Development Company in India.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Android App Development",
      description:
        "As Top Android app development company in India, we build responsive and user-friendly apps that are Android-specific. Our services entail designing tailor-made solutions of Android app development, which incorporate all the requirements in terms of features, functionality and graphics to fulfil your business needs with the best app development services in Gurgaon.",
      icon: <FaAndroid className="text-3xl text-emerald-400" />,
    },
    {
      title: "iOS App Development",
      description:
        "The thing is that we are the most trusted company in terms of iOS app development. We provide apps that are easy and work well flawlessly, in addition to providing happy service and a high level of security to iPhone and iPad users.",
      icon: <FaApple className="text-3xl text-slate-100" />,
    },
    {
      title: "Cross-Platform App Development",
      description:
        "Services of our cross platform application development company allows you to publish your app on different platforms only with a single base of codes, so it is not only you who save time but also money and on top of that, you retain a sustained experience.",
      icon: <FaMobileAlt className="text-3xl text-cyan-400" />,
    },
    {
      title: "Custom App Development",
      description:
        "As the Best app development service provider in India, we not only do custom app development of services but also of enterprise app development solutions, which match your business processes, workflow and unique requirements perfectly.",
      icon: <FaCode className="text-3xl text-blue-400" />,
    },
    {
      title: "Mobile Application Testing",
      description:
        "All this is contained in our mobile application testing services; we provide all that users would require of a testing team that will ensure that the apps are bug-free, secure, and furthermore that it works perfectly across devices.",
      icon: <FaCheckCircle className="text-3xl text-teal-400" />,
    },
    {
      title: "App Maintenance Services",
      description:
        "Our services include the best app maintenance services, which essentially ensure that your apps are updated, are safe and run as smoothly as any other user would like. This also comes with the provision of some features of the apps to be used longer, and with the elimination of bugs.",
      icon: <FaCogs className="text-3xl text-indigo-400" />,
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Scalable Solutions",
      description:
        "We will design your application in such a way that it is able to support the growth and expansion of your business.",
      icon: <FaExpandArrowsAlt className="text-3xl text-blue-600" />,
    },
    {
      title: "Enhanced Security",
      description:
        "Ensure the privacy and compliance of your data of users are achieved.",
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    },
    {
      title: "User-Friendly Design",
      description: "Give your customers convenient and interactive interfaces.",
      icon: <FaUserFriends className="text-3xl text-blue-600" />,
    },
    {
      title: "Cost-Effective Development",
      description:
        "Reduce your development time and maximize on your investment.",
      icon: <FaClock className="text-3xl text-blue-600" />,
    },
    {
      title: "Cross-Platform Reach",
      description: "Both Android and iOS-compatible applications.",
      icon: <FaMobileAlt className="text-3xl text-blue-600" />,
    },
    {
      title: "Improved Engagement & Retention",
      description:
        "Give your customers easy to use and smooth service and hence gain loyalty towards you and thereby Best Mobile App Development Company in India.",
      icon: <FaSmile className="text-3xl text-blue-600" />,
    },
  ];

  const techStack = [
    {
      title: "Frontend / Mobile",
      items: [
        {
          name: "React Native",
          icon: assets.react,
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "Swift (iOS)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        },
        {
          name: "Kotlin (Android)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
        {
          name: "Angular",
          icon: assets.angular,
        },
        {
          name: "Vue.js",
          icon: assets.vuejs,
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: assets.nodejs || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Python (Django/Flask)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
        },
        {
          name: "Java (Spring)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "PHP (Laravel)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          name: "Go",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        },
      ],
    },
    {
      title: "Platforms",
      items: [
        {
          name: "iOS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
        },
        {
          name: "Android",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        {
          name: "Windows",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
        },
      ],
    },
    {
      title: "Database & Cloud",
      items: [
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "MongoDB",
          icon: assets.mongodb || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          icon: assets.mysql || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: assets.postgresql,
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      ],
    },
    {
      title: "UI/UX Design",
      items: [
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Adobe XD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
        },
      ],
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Be aware of your objectives, your targeted audience of the app and the functionality of the app.",
    },
    {
      step: "Step 02",
      title: "UI/UX Design",
      description: "Creating attractive user interfaces.",
    },
    {
      step: "Step 03",
      title: "Frontend & Backend Development",
      description:
        "Develop scalable, secure and responsive applications to client needs.",
    },
    {
      step: "Step 04",
      title: "Testing",
      description:
        "Testing of the quality of the app by using end-to-end mobile application.",
    },
    {
      step: "Step 05",
      title: "Deployment",
      description:
        "Launch the software in Google Play Store, Apple App Store, or deploy it on the enterprise platforms.",
    },
    {
      step: "Step 06",
      title: "Maintenance & Support",
      description:
        "The application of continuous updates and maintenance of the application to remain stable over time.",
    },
  ];

  const servicesData = [
    {
      image: assets.appDev3,
      title: "Experience with different platforms",
      desc: "Android, iPhone, and cross-platform solutions.",
    },
    {
      image: assets.appDev4,
      title: "A team of professional app developers",
      desc: "A team that is also experienced in delivering what you require, which includes the reliable and scalable apps at an affordable price as the Top Mobile App Development Company in India.",
    },
    {
      image: assets.appDev5,
      title: "Custom and enterprise solutions",
      desc: "Applications that suit the company objectives.",
    },
    {
      image: assets.appDev6,
      title: "Testing of Mobile Applications",
      desc: "Make it absolutely functional, safe and fast.",
    },
    {
      image: assets.appDev7,
      title: "Service of App Maintenance",
      desc: "Periodic update, feature enhancement and constant upkeep.",
    },
    {
      image: assets.appDev8,
      title: "Affordable and Return On Investment (ROI) focussed",
      desc: "Get the largest impact without overthrowing your investment in the best app development services in Gurgaon.",
    },
  ];

  return (
    <div className="relative font-sans text-slate-900 bg-white selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          App Development Company – India’s Best Mobile App Development Company
        </title>
        <meta
          name="description"
          content="Boost your business with India’s leading App Development Company – expert mobile app development services that are secure, scalable, and feature-rich."
        />
        <meta
          name="keywords"
          content="App DevApp Development, Best Mobile App Development Company in India"
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
      {/* 1. HERO SECTION (Sharp Edges / Zero Rounded Corners / Clean Tech Look)     */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[88vh] bg-gradient-to-b from-[#070e1d] via-[#09152e] to-[#070e1d] text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden"
        aria-label="Instant App Development Company – Get India’s #1 Trusted Mobile App Service Banner"
      >
        {/* Subtle Background Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Description, CTA, Services */}
            <div className="lg:col-span-7 text-left">
              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Instant{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  App Development Company
                </span>{" "}
                – Get India’s #1 Trusted Mobile App Service
              </h1>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl font-normal">
                Android, iOS and cross-platform solutions Android, iOS and
                cross-platform mobile apps of the Best Mobile App Development
                Company in India are scalable, secure and easy to use. As one of the{" "}
                <a
                  href="https://www.capyngen.com/application-solutions"
                  className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors"
                >
                  Best application solutions in Gurgaon
                </a>
                , Capyngen delivers future-ready products that align with your
                business goals.
              </p>

              {/* Sharp CTA Button */}
              <div className="mb-10">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
                >
                  Let's Build Your App
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>

              {/* 4 Service Badges (Strictly Sharp / rounded-none) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "Native App Development",
                  "Multi-Platform Application Development",
                  "Enterprise Mobile Solutions",
                  "App Maintenance & Support",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 bg-[#0b162c] hover:bg-[#0f1f3d] border border-slate-800 hover:border-slate-700 px-4 py-3 rounded-none transition-colors duration-200"
                  >
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Image Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[560px] xl:max-w-[600px] h-[480px] sm:h-[540px] flex items-center justify-center overflow-hidden">
                <img
                  src={assets.appDevBanner || appDevHeroBg}
                  alt="Capyngen Mobile App Development Services Showcase"
                  className="w-full h-full object-cover object-bottom drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 1: Introduction to App Development (Split Layout, Sharp)       */}
      {/* ========================================================================= */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
              <h2
                className="text-slate-900 leading-[1.2] tracking-tight text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Introduction to{" "}
                <span className="text-blue-600">App Development</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                Mobile applications in the contemporary digital world have become an essential tool to the business to attract customers, maximise revenues and streamline business processes. Its scope is vast: it is between start-ups and big organisations. Being a well-thought-out app keeps you afloat.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                Capyngen is the best Mobile App Development Company in India that you can rely on in the provision of the on-demand consulting app development service, enterprise app development services and cross-platform mobile apps that are secure, scalable, and easy to use.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                When you use the services of our team of professional app developers, you receive high-quality mobile app development services that result in an improved user experience, greater engagement, and increased ROI of the Top Mobile App Development Company in India.
              </p>
            </div>

            {/* Right Visual Image (Full box cover, sharp edges, edge-to-edge) */}
            <div className="lg:col-span-5 flex">
              <div className="border border-slate-300 bg-slate-950 shadow-xl rounded-none w-full overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] group relative">
                <img
                  src={appDevPhoneMockup}
                  alt="Mobile App Development Dashboard Mockup - Capyngen"
                  className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 2: Our App Development Services (6 Cards Grid)                 */}
      {/* ========================================================================= */}
      <section id="services-section" className="py-20 lg:py-28 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-16">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our App Development Services
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4">
              Comprehensive native and multi-platform app engineering designed for high availability, security, and exceptional retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#0b1329] border border-slate-800 hover:border-blue-500 p-8 flex flex-col justify-between transition-all duration-300 rounded-none hover:-translate-y-1 shadow-lg"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />
                
                <div>
                  <div className="w-14 h-14 bg-[#101b38] border border-slate-700 flex items-center justify-center rounded-none mb-6 group-hover:border-blue-500 group-hover:bg-blue-600/10 transition-colors">
                    {item.icon}
                  </div>
                  
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-800/80">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 group-hover:text-blue-300"
                  >
                    Discuss Solution
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FULL-SIZE INTERSTITIAL IMAGE SECTION 1                                */}
      {/* ========================================================================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
        style={{
          backgroundImage: `url(${assets.appDevFullSize})`,
        }}
      >
        <div className="absolute inset-0 bg-[#070e1d]/85" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Build apps that users love
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The Best Mobile App Development Company in India, our team, comprised of highly-skilled designers and developers, will be able to develop intuitive and fast mobile applications in both iOS and Android platforms.
          </p>
          <div className="pt-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all shadow-xl"
            >
              Build My App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 3: Benefits of Our App Development Services (6 Bento Grid)     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-16">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits of Our App Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 rounded-none flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-6 w-14 h-14 bg-blue-50/80 border border-blue-100 flex items-center justify-center rounded-none group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                    <span className="text-blue-600 group-hover:text-white transition-colors">
                      {benefit.icon}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 4: Why use Capyngen for Mobile Application Development        */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-16">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why use Capyngen for Mobile Application Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 rounded-none flex flex-col group"
              >
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative rounded-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
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
      {/* 7. SECTION 5: Development Process (Steps 01 - 06)                         */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-16">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our App Development Process
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Our methodology of development is strict and high standard to produce a strong, error-free, and high-performance mobile application. Every step is carefully implemented by our team to have optimum efficiency and business influence out of the Best mobile app development company in Gurgaon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 p-8 rounded-none relative group hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {st.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 6: Tech Stack (White Background)                              */}
      {/* ========================================================================= */}
      <div className="bg-white border-b border-slate-200">
        <TechStack
          theme="light"
          heading="Transform Your Mobile Development and Consulting with Our Expert Tech Stack"
          subheading="We have an excellent array of innovative solutions that deliver the best quality and functionality as a Best app development service provider in India with our advanced and diverse tech stack.."
          categories={techStack}
        />
      </div>

      {/* ========================================================================= */}
      {/* 9. FULL-SIZE INTERSTITIAL IMAGE SECTION 2                                */}
      {/* ========================================================================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
        style={{
          backgroundImage: `url(${assets.appDevFullSize2})`,
        }}
      >
        <div className="absolute inset-0 bg-[#070e1d]/85" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Turn your app idea into reality
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            And we are the team that will make your mobile vision come true, starting with the very first mock-up all the way to the very last product deployment as the top Android app development company in India..
          </p>
          <div className="pt-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all shadow-xl"
            >
              CONTACT US <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ SECTION (Sharp, Clean Accordion)                                  */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />

      {/* ========================================================================= */}
      {/* 11. SECTION 7: Get Started Action Banner (At Very Bottom)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#0a192f] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to Build Your Market-Dominating Mobile Application?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              In need of enterprise application development or custom application development? Contact Capyngen, one of the leading cross-platform application development firms and expand your internet presence with a trusted{" "}
              <a
                href="https://www.capyngen.com/web-development"
                className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors"
              >
                Website development company Gurgaon
              </a>{" "}
              and top Mobile App Development Company in India.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-10 rounded-none transition-all shadow-xl"
            >
              Reach Out to Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
