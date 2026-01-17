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
      icon: <FaAndroid className="text-4xl text-white" />,
    },
    {
      title: "iOS App Development",
      description:
        "The thing is that we are the most trusted company in terms of iOS app development. We provide apps that are easy and work well flawlessly, in addition to providing happy service and a high level of security to iPhone and iPad users.",
      icon: <FaApple className="text-4xl text-white" />,
    },
    {
      title: "Cross-Platform App Development",
      description:
        "Services of our cross platform application development company allows you to publish your app on different platforms only with a single base of codes, so it is not only you who save time but also money and on top of that, you retain a sustained experience.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Custom App Development",
      description:
        "As the Best app development service provider in India, we not only do custom app development of services but also of enterprise app development solutions, which match your business processes, workflow and unique requirements perfectly.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "Mobile Application Testing",
      description:
        "All this is contained in our mobile application testing services; we provide all that users would require of a testing team that will ensure that the apps are bug-free, secure, and furthermore that it works perfectly across devices.",
      icon: <FaCheckCircle className="text-4xl text-white" />,
    },
    {
      title: "App Maintenance Services",
      description:
        "Our services include the best app maintenance services, which essentially ensure that your apps are updated, are safe and run as smoothly as any other user would like. This also comes with the provision of some features of the apps to be used longer, and with the elimination of bugs.",
      icon: <FaCogs className="text-4xl text-white" />,
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Scalable Solutions",
      description:
        "We will design your application in such a way that it is able to support the growth and expansion of your business.",
      icon: <FaExpandArrowsAlt className="text-4xl" />,
    },
    {
      title: "Enhanced Security",
      description:
        "Ensure the privacy and compliance of your data of users are achieved.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "User-Friendly Design",
      description: "Give your customers convenient and interactive interfaces.",
      icon: <FaUserFriends className="text-4xl" />,
    },
    {
      title: "Cost-Effective Development",
      description:
        "Reduce your development time and maximize on your investment.",
      icon: <FaClock className="text-4xl" />,
    },
    {
      title: "Cross-Platform Reach",
      description: "Both Android and iOS-compatible applications.",
      icon: <FaMobileAlt className="text-4xl" />,
    },
    {
      title: "Improved Engagement & Retention",
      description:
        "Give your customers easy to use and smooth service and hence gain loyalty towards you and thereby Best Mobile App Development Company in India.",
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
            Android, iOS and cross-platform solutions Android, iOS and
            cross-platform mobile apps of the Best Mobile App Development
            Company in India are scalable, secure and easy to use. As one of the
            <a
              href="https://www.capyngen.com/application-solutions
"
            >
              Best application solutions in Gurgaon
            </a>
            , Capyngen delivers future-ready products that align with your
            business goals.
          </>
        }
        services={[
          "Native App Development",
          "Multi-Platform Application Development",
          "Enterprise Mobile Solutions",
          "App Maintenance & Support",
        ]}
        imageSrc={assets.appDevBanner}
        // videoSrc={assets.heroVideo}
      />

      <TopRatedCompany
        title="Introduction to App Development"
        description={[
          `Mobile applications in the contemporary digital world have become an essential tool to the business to attract customers, maximise revenues and streamline business processes. Its scope is vast: it is between start-ups and big organisations. Being a well-thought-out app keeps you afloat.`,
          `Capyngen is the best Mobile App Development Company in India that you can rely on in the provision of the on-demand consulting app development service, enterprise app development services and cross-platform mobile apps that are secure, scalable, and easy to use.`,
          `When you use the services of our team of professional app developers, you receive high-quality mobile app development services that result in an improved user experience, greater engagement, and increased ROI of the Top Mobile App Development Company in India.`,
        ]}
        imageHeight="md:aspect-[1/1]"
        image={assets.appDev2}
        isHidden={true}
        background={assets.patternBg1}
      />
      <FullSizeImageSection
        backgroundImage={assets.appDevFullSize}
        title="Build apps that users love"
        description="The Best Mobile App Development Company in India, our team, comprised of highly-skilled designers and developers, will be able to develop intuitive and fast mobile applications in both iOS and Android platforms."
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
              Is it high time to launch your mobile app? In touch with Cayngen,
              the Best Mobile App Development Company in India and Best mobile
              app development company in Gurgaon, and make your dream a
              breathable reality with the help of our professional app
              developers.
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
          "Attempting to locate a reliable Android app development firm or iOs app development firm? Contact Capyngen and start using the scalable, secure and high-performing apps as the Best Mobile App Development Company in India.",
        ]}
        textSize="text-2xl"
        buttonText="Get in Touch"
        backgroundVideo={assets.backgroundVideo}
      />

      <TechStack
        heading="Transform Your Mobile Development and Consulting with Our Expert Tech Stack"
        subheading="We have an excellent array of innovative solutions that deliver the best quality and functionality as a Best app development service provider in India with our advanced and diverse tech stack.."
        categories={techStack}
      />

      <HowWeWork
        heading="Our App Development Process"
        desc="Our methodology of development is strict and high standard to produce a strong, error-free, and high-performance mobile application. Every step is carefully implemented by our team to have optimum efficiency and business influence out of the Best mobile app development company in Gurgaon."
        steps={steps}
      />

      <FullSizeImageSection
        backgroundImage={assets.appDevFullSize2}
        title="Turn your app idea into reality"
        description="And we are the team that will make your mobile vision come true, starting with the very first mock-up all the way to the very last product deployment as the top Android app development company in India.."
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
          <>
            In need of enterprise application development or custom application
            development? Contact Capyngen, one of the leading cross-platform
            application development firms and expand your internet presence with
            a trusted{" "}
            <a href="https://www.capyngen.com/web-development">
              Website development company Gurgaon
            </a>{" "}
            and top Mobile App Development Company in India.
          </>,
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
