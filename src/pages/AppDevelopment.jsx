import React from "react";
import { assets } from "../assets/assets";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import CardsSection from "../components/CardsSection";
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
import GetStarted from "../components/GetStarted";
import TechStack from "../components/TechStack";
import Banner13 from "../components/Banner13";
import TopRatedCompany from "../components/TopRatedCompany";
import IndustryServices from "../components/IndustryServices";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

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
      question: "What are the Capyngen Services related to app Development?",
      answer:
        "We provide Android, iOS, cross-platform, custom app development, enterprise app solutions, testing, and app maintenance services that fall under our mobile app development umbrella.",
    },
    {
      question:
        "Why should I select Capyngen to be my app development company?",
      answer:
        "Capyngen is made up of expert app developers, has the advantages of a comprehensive skill set, and is known for delivering highly secure, scalable, user-friendly apps that facilitate the achievement of business goals.",
    },
    {
      question:
        "Is it possible for you to develop custom Android applications?",
      answer:
        "Exactly! We offer custom android app development services for startups, SMEs, and enterprises.",
    },
    {
      question: "Is it true that you handle iPhone app development?",
      answer:
        "Yes, we are an iOS app development company that is reliable and delivers high-quality apps for iPhone and iPad.",
    },
    {
      question: "Do you create cross-platform apps?",
      answer:
        "Yes, taking a leading position in cross platform app development we create apps that are compatible with both Android and iOS.",
    },
    {
      question: "Do you have any plans for developing enterprise applications?",
      answer:
        "Yes, we have the most flexible enterprise app development solutions to face challenges in business processes and workflows.",
    },
    {
      question: "What exactly is mobile application testing?",
      answer:
        "Mobile application testing is the process of exhaustively checking mobile apps for bugs, security, usability, and performance issues. Capyngen provides Mobile Application Testing services along with the regular workflow.",
    },
    {
      question: "Do you have app maintenance services?",
      answer:
        "Certainly, our app maintenance services include regular updates, bug fixing, feature expansion, and performance monitoring.",
    },
    {
      question: "How much time is required for app development?",
      answer:
        "Development timeline mainly depends on app complexity and for most of the apps, it ranges from 6 to 16 weeks.",
    },
    {
      question:
        "Is it possible for you to link APIs and other third-party resources with my app?",
      answer:
        "Sure enough, we integrate your app with payment gateways, analytics tools, CRMs, and other services.",
    },
    {
      question: "Are your apps safe and easily scalable?",
      answer:
        "Of course. Security and scalability are always on the table when we discuss our custom app solutions.",
    },
    {
      question: "Do you create e-commerce apps?",
      answer:
        "As one of the best eCommerce app development companies in India, we specialize in eCommerce apps for online stores with easy shopping experiences.",
    },
    {
      question:
        "Is it possible for Capyngen to offer assistance and take part in formulating the app strategy?",
      answer:
        "Definitely, we offer comprehensive consulting, strategy, development, testing, and support services for mobile applications.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Android App Development",
      description:
        "We as a top android app development company make responsive and user-friendly apps that are designed for Android devices. Our services involve creating custom android app development solutions that include all the necessary features plus functionality and visuals to meet your business requirements.",
      icon: <FaAndroid className="text-4xl text-white" />,
    },
    {
      title: "iOS App Development",
      description:
        "The whole point is that we stand as the most reliable iOS app development company. We offer apps that work perfectly well and easily along with giving joyful use and strong security measures to iPhone and iPad users.",
      icon: <FaApple className="text-4xl text-white" />,
    },
    {
      title: "Cross-Platform App Development",
      description:
        "The services of our cross platform app development company let you get your app on various platforms but only with one codebase, thus not only you save time but also money and at the same time you keep a continuous experience.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Custom App Development",
      description:
        "Not only do we do custom app development for services but also for enterprise app development solutions, making apps that are a perfect match for your business processes, workflows, and unique requirements.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "Mobile Application Testing",
      description:
        "Our mobile application testing services include everything that users would expect from a testing team who ensures that apps are bug-free, secure, and also that they perform flawlessly across devices.",
      icon: <FaCheckCircle className="text-4xl text-white" />,
    },
    {
      title: "App Maintenance Services",
      description:
        "We offer the best app maintenance services which basically keep your apps up to date, safe, and run smoothly just the way any user would want, this also includes giving off some of the apps features for a longer time and the removal of bugs.",
      icon: <FaCogs className="text-4xl text-white" />,
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Scalable Solutions",
      description:
        "Your application will be developed to be capable of accommodating the growth and expansion of your business.",
      icon: <FaExpandArrowsAlt className="text-4xl" />,
    },
    {
      title: "Enhanced Security",
      description:
        "Make sure the data of your users privacy and compliance are met.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "User-Friendly Design",
      description: "Provide your customers with easy and engaging interfaces.",
      icon: <FaUserFriends className="text-4xl" />,
    },
    {
      title: "Cost-Effective Development",
      description:
        "Lower your development time and make the most of your return on investment.",
      icon: <FaClock className="text-4xl" />,
    },
    {
      title: "Cross-Platform Reach",
      description:
        "Applications that are compatible with both Android and iOS.",
      icon: <FaMobileAlt className="text-4xl" />,
    },
    {
      title: "Improved Engagement & Retention",
      description:
        "Let your customers benefit from a smooth and easy to use service and thus increase their loyalty towards you.",
      icon: <FaSmile className="text-4xl" />,
    },
  ];

  const techStack = [
    {
      title: "Frontend / Mobile",
      items: [
        {
          name: "React Native",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Swift (iOS)",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg",
        },
        {
          name: "Kotlin (Android)",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        },
        {
          name: "Python (Django/Flask)",
          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java (Spring)",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP (Laravel)",
          icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
        },
        {
          name: "Go",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
        },
      ],
    },
    {
      title: "Platforms",
      items: [
        {
          name: "iOS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        },
        {
          name: "Android",
          icon: "https://cdn.worldvectorlogo.com/logos/android-4.svg",
        },
        {
          name: "Windows",
          icon: "https://cdn.worldvectorlogo.com/logos/windows-3.svg",
        },
      ],
    },
    {
      title: "Database & Cloud",
      items: [
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          name: "MySQL",
          icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.worldvectorlogo.com/logos/redis.svg",
        },
      ],
    },
    {
      title: "UI/UX Design",
      items: [
        {
          name: "Figma",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
        {
          name: "Adobe XD",
          icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
        },
      ],
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Know your goals, the people for whom the app is intended, and the app's functionality.",
    },
    {
      step: "Step 02",
      title: "UI/UX Design",
      description:
        "Designing aesthetically pleasing and easy-to-use interfaces.",
    },
    {
      step: "Step 03",
      title: "Frontend & Backend Development",
      description:
        "Create apps that are scalable, secure, and responsive to client needs.",
    },
    {
      step: "Step 04",
      title: "Testing",
      description:
        "End-to-end mobile application testing for ensuring the quality of the app.",
    },
    {
      step: "Step 05",
      title: "Deployment",
      description:
        "Start the software on Google Play Store, Apple App Store, or distribute it on enterprise platforms.",
    },
    {
      step: "Step 06",
      title: "Maintenance & Support",
      description:
        "Ongoing updates and app maintenance services for the app to stay reliable in the long run.",
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
      desc: "An experienced team that can provide you with the dependable and scalable apps you need.",
    },
    {
      image: assets.appDev5,
      title: "Custom and enterprise solutions",
      desc: "The applications that match your company objectives.",
    },
    {
      image: assets.appDev6,
      title: "Testing of Mobile Applications",
      desc: "Ensure perfect functionality, safety, and quickness.",
    },
    {
      image: assets.appDev7,
      title: "Service of App Maintenance",
      desc: "Periodic update, feature improvement, and continuous support.",
    },
    {
      image: assets.appDev8,
      title: "Affordable and Return On Investment (ROI) focussed",
      desc: "Make the biggest influence without exceeding your budget.",
    },
  ];

  useSplitTextAnimation("h1");

  return (
    <div className="relative">
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
      <Banner13
        title="Instant"
        highlight="App Development Company"
        title2=" – Get India’s #1 Trusted Mobile App Service"
        description={
          <>
            <strong>Scalable</strong>, <strong>secure</strong>, and{" "}
            <strong>user-friendly</strong> mobile applications for{" "}
            <span className="font-bold text-blue-500">Android</span>,{" "}
            <span className="font-bold text-blue-500">iOS</span>, and{" "}
            <span className="font-bold text-blue-500">cross-platform</span>{" "}
            solutions.
          </>
        }
        services={[
          "Native App Development",
          "Cross-Platform App Development",
          "Enterprise Mobile Solutions",
          "App Maintenance & Support",
        ]}
        imageSrc={assets.appDevBanner}
        // videoSrc={assets.heroVideo}
      />

      <TopRatedCompany
        title="Introduction to App Development"
        description={[
          `In the modern digital world, mobile applications have become a vital tool for businesses to attract customers, increase revenues, and simplify the business processes. The range is wide: it is from start-ups to large companies. Having an app with thoughtful design keeps you in the race.`,
          `Capyngen is an app development company india that you can count on for the on-demand consulting app development services, enterprise app development solutions, and cross-platform mobile apps that deliver security, scalability, and easy-to-use features.`,
          `By employing the services of our team of professional app developers, you get excellent mobile app development services that lead to better user experience, higher engagement, and greater return on investment.`,
        ]}
        imageHeight="md:aspect-[1/1]"
        image={assets.appDev2}
        isHidden={true}
        background={assets.patternBg1}
      />
      <FullSizeImageSection
        backgroundImage={assets.appDevFullSize}
        title="Build apps that users love"
        description="Our highly-skilled team of designers and developers can create intuitive and fast mobile applications for iOS and Android platforms."
        buttonText="Build My App"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <CardsSection
        heading="Our App Development Services"
        services={cardsSectionData1}
        headColor="text-white"
        cardBg="bg-gradient-to-br from-gray-900 to-blue-800"
        textSize="text-md"
        sectionBg="bg-gray-900"
        hoverBg="hover:from-indigo-800 hover:via-gray-800 hover:to-blue-900 hover:scale-105"
        textColor="text-white"
      />

      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        description={[
          <>
            <span>
              Is it time to get your mobile app off the ground? Contact
              <Link to={"/"}>Capyngen</Link>, a top mobile app development
              services company, and let our expert app developers turn your
              dream into a living reality.
            </span>
          </>,
        ]}
        textSize="text-2xl"
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />

      <IndustryServices
        heading="Why use Capyngen for Mobile Application Development"
        cardBg="bg-gray-700"
        cardText="text-white"
        cardDescText="text-white"
        services={servicesData}
      />

      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        description={[
          "Trying to find a trustworthy Android app development company or iOS app development company? Contact Capyngen now to get the apps that are scalable, secure, and high-performing.",
        ]}
        textSize="text-2xl"
        buttonText="Get in Touch"
        backgroundVideo={assets.backgroundVideo}
      />

      <TechStack
        heading="Transform Your Mobile Development and Consulting with Our Expert Tech Stack"
        subheading="With our diverse and cutting-edge tech stack, we build innovative solutions that meet the highest standards of quality and functionality."
        categories={techStack}
      />

      <HowWeWork heading="Our App Development Process" steps={steps} />

      <FullSizeImageSection
        backgroundImage={assets.appDevFullSize2}
        title="Turn your app idea into reality"
        description="We are the team that transforms your mobile vision into a success, from the very first mock-up to the final product deployment."
        buttonText="CONTACT US"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <CardsSection
        heading="Benefits of Our App Development Services"
        services={cardsSectionData2}
        headColor="text-white"
        sectionBg="bg-gray-900"
        cardBg="bg-transparent"
        hoverBg="shadow-xl hover:shadow-lg hover:shadow-white transition-all"
        textColor="text-white"
      />

      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        description={[
          "Looking for custom app development services or enterprise app development solutions? Reach out to Capyngen, a foremost cross-platform app development company, and grow your digital footprint.",
        ]}
        textSize="text-2xl"
        buttonText="Reach Out to Us"
        backgroundVideo={assets.backgroundVideo}
      />

      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default AppDevelopment;
