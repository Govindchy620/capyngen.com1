import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import OurServices from "../components/OurServices";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import AppTypesSection from "../components/AppTypesSection";
import CardsSection from "../components/CardsSection";
import {
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";
import GetStarted from "../components/GetStarted";
import TechStack from "../components/TechStack";
import AppDevHero from "../components/AppDevHero";

const AppDevelopment = () => {
  const faqItems = [
    {
      question: "How long does it take for funds to show in my wallet?",
      answer:
        "The time it takes for funds to appear in your wallet depends on the deposit method. Most funding methods are instantaneous. ",
    },
    {
      question: "What is the minimum deposit requirement?",
      answer:
        "PrimeForex Markets requires no minimum deposit, however, a minimum amount may be required by your preferred funding method. ",
    },
    {
      question: "Are there any fees associated with depositing funds?",
      answer: "No, PrimeForex Markets charges no fees for depositing funds.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Ideation & Conceptualization",
      description:
        "We refine your app ideas, ensuring they are innovative, market-ready, and aligned with your business goals.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Market Research & Analysis",
      description:
        "We analyze trends, study competitors, and define target audiences to position your app strategically.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Technology Stack Selection",
      description:
        "Our team recommends the best frameworks, tools, and platforms for building scalable and future-proof applications.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "UX/UI Design",
      description:
        "We design visually stunning, user-friendly interfaces that enhance engagement and maximize user retention.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Prototyping and MVP",
      description:
        "Validate your idea quickly with an MVP, gather user feedback, and optimize features before the final launch.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Project Management",
      description:
        "Our agile approach ensures timely delivery, resource allocation, and transparency at every stage.",
      icon: <FaTasks className="text-4xl" />,
    },
    {
      title: "Quality Assurance",
      description:
        "We conduct rigorous testing to eliminate bugs and ensure flawless performance.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Deployment Strategy",
      description:
        "From app store submission to launch campaigns, we handle every detail to ensure smooth deployment.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Post-Launch Support",
      description:
        "Capyngen offers ongoing support, updates, and feature enhancements to keep your app ahead of the competition.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Healthcare",
      description:
        "Mobile solutions for telemedicine, patient management, health monitoring, and appointment scheduling, enabling efficient and secure healthcare delivery.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Banking & Finance",
      description:
        "Apps for mobile banking, financial management, investment tracking, and payment processing, delivering secure, fast, and reliable financial services.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Real Estate",
      description:
        "Digital platforms for property listings, virtual tours, agent-client communication, and property management, creating seamless and interactive real estate experiences.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Automotive",
      description:
        "Applications to track vehicles, schedule maintenance, and integrate smart features, ensuring optimized fleet management and enhanced user engagement.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "E-commerce",
      description:
        "Mobile apps for browsing, secure payments, and personalized recommendations, driving higher conversions and customer satisfaction.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Oil & Gas",
      description:
        "Apps for real-time monitoring, equipment management, and data analytics, boosting operational efficiency, safety, and productivity.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];
  const cardsSectionData3 = [
    {
      title: "Custom AI Solutions",
      description:
        "Implement AI tailored to your goals, enabling intelligent insights, predictive analytics, and optimized app performance.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "AI-Powered Chatbots",
      description:
        "Integrate chatbots to automate customer interactions, accelerate response times, and deliver exceptional support.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "AI Feature Integration",
      description:
        "Add smart AI capabilities such as personalized recommendations, adaptive algorithms, and intelligent search to boost engagement and usability.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Utilize cloud platforms for scalable computing, seamless data processing, and resilient app performance across all devices.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "IoT Connectivity",
      description:
        "Develop IoT-enabled apps to link devices, capture real-time data, and automate operational workflows across industries.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Blockchain Solutions",
      description:
        "Employ blockchain for secure, transparent, and tamper-proof transactions, perfect for applications requiring high integrity and trust.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];
  const cardsSectionData4 = [
    {
      title: "On-Demand Apps",
      description:
        "Build apps for taxi booking, food and grocery delivery, logistics, flowers, entertainment, and advanced AI-driven platforms.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Education & Learning Apps",
      description:
        "Develop platforms for STEM, language learning, skill enhancement, audiobooks, and specialized educational solutions.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Real Estate Apps",
      description:
        "Create apps for property listings, agent management, tenant-landlord communication, auctions, investments, and virtual/metaverse real estate experiences.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Healthcare Apps",
      description:
        "Design apps for doctor booking, medicine delivery, diagnosis assistance, home health care, telemedicine, and pharmacy services.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Automotive Apps",
      description:
        "Develop solutions for vehicle diagnostics, control systems, fuel management, navigation, and smart parking services.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "IoT & Smart Device Apps",
      description:
        "Integrate IoT for real-time connectivity, automation, and seamless interaction across devices.",
      icon: <FaTasks className="text-4xl" />,
    },
    {
      title: "Gaming Apps",
      description:
        "Craft AAA games, strategy and role-playing games, blockchain gaming, casino apps, and educational gaming platforms.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Travel & Hospitality Apps",
      description:
        "Deliver apps for ticketing, hotel bookings, travel insurance, translation tools, deals, and property rentals.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Social Media Apps",
      description:
        "Bring your digital platform to life with precision, security, and a seamless user experience.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];
  const techStack = [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
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
          name: "Python",
          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        },
      ],
    },
    {
      title: "Platforms",
      items: [
        {
          name: "iOS",
          icon: "https://cdn.worldvectorlogo.com/logos/ios-1.svg",
        },
        {
          name: "Android",
          icon: "https://cdn.worldvectorlogo.com/logos/android-4.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          name: "MongoDB",
          icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "Oracle",
          icon: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
        },
      ],
    },
    {
      title: "UI/UX",
      items: [
        {
          name: "Adobe XD",
          icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        },
        {
          name: "InVision",
          icon: "https://cdn.worldvectorlogo.com/logos/invision-1.svg",
        },
      ],
    },
  ];
  const cardsSectionDifferentColorData = [
    {
      title: "Uncompromising Quality",
      description:
        "We apply rigorous development standards to ensure every app is robust, secure, and high-performing.",
      icon: <FaLightbulb className="text-5xl" />,
      cardBg: "bg-red-100",
    },
    {
      title: "Immediate, Proactive Support",
      description:
        "Our experts provide real-time assistance across multiple channels, ensuring your operations run smoothly at all times.",
      icon: <FaChartLine className="text-5xl" />,
      cardBg: "bg-blue-100",
    },
    {
      title: "Optimized Cost Efficiency",
      description:
        "We provide top-tier solutions at competitive investment levels, maximizing ROI without compromising quality.",
      icon: <FaCogs className="text-5xl" />,
      cardBg: "bg-purple-100",
    },
    {
      title: "Deep Technical Expertise",
      description:
        "Our team builds apps on a solid, scalable foundation, leveraging advanced technologies to ensure long-term reliability.",
      icon: <FaLightbulb className="text-5xl" />,
      cardBg: "bg-gray-100",
    },
    {
      title: "Outcome-Focused Delivery",
      description:
        "We drive projects to timely completion with measurable results, guaranteeing your objectives are met efficiently.",
      icon: <FaChartLine className="text-5xl" />,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Trust & Reliability",
      description:
        "We foster long-term client partnerships, delivering consistent performance and maintaining absolute transparency.",
      icon: <FaCogs className="text-5xl" />,
      cardBg: "bg-green-100",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "UI Strategy",
      description:
        "Design intuitive and high-performance user interfaces for iOS and Android platforms, enhancing usability and engagement.",
    },
    {
      step: "Step 02",
      title: "Requirement Analysis",
      description:
        "Thoroughly gather and analyze client requirements to create a precise and actionable development roadmap.",
    },
    {
      step: "Step 03",
      title: "Wireframing",
      description:
        "Develop detailed wireframes and mockups that visualize app structure, flow, and functionality before development.",
    },
    {
      step: "Step 04",
      title: "Development",
      description:
        "Implement the application using state-of-the-art tools and frameworks, adhering to industry best practices and quality standards.",
    },
    {
      step: "Step 05",
      title: "Testing & QA",
      description:
        "Perform comprehensive testing to ensure flawless performance, security, and reliability across all devices.",
    },
    {
      step: "Step 06",
      title: "Handover & Deployment",
      description:
        "Deliver the fully tested app with seamless deployment, ready for launch and end-user adoption.",
    },
  ];
  const slides = [
    {
      image: assets.appDevelopment,
      title: "Building Scalable & Secure Apps",
      description:
        "We design, develop, and launch apps that fuel business growth with innovation and reliability.",
    },
    {
      image: assets.appDevelopment,
      title: "Your Vision, Our Expertise",
      description:
        "From idea to launch, our app development solutions are tailored to your business needs.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <AppDevHero slides={slides} />;
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <AppTypesSection />
        <CardsSection
          heading="Our Consulting Process"
          subheading="Our consulting process can help you see your app in a new light. At Capyngen, we don't just build apps; we also aid you every step of the way. You may be confident that you'll get professional guidance from the idea stage to the launch with our mobile app development consulting services."
          services={cardsSectionData1}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 rounded-3xl hover:scale-98"
          textColor="text-white"
          hoverTextColor=""
        />
        <GetStarted
          backgroundColor="bg-gray-900"
          textColor="text-white"
          buttonColor="bg-blue-900 hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Comprehensive Guidance for Transforming Your Mobile App Vision from Initial Concept to Successful Launch"
          description="Our seasoned consulting team provides comprehensive, end-to-end mobile application development solutions, converting innovative concepts into high-impact, enterprise-grade digital platforms. From strategic ideation to flawless deployment, every stage is meticulously orchestrated to deliver maximum operational and business value."
          buttonText="Contact Us"
        />
        <CardsSection
          heading="Transform Industries with Advanced Mobile App Development Consulting"
          subheading="Unlock the potential of state-of-the-art mobile applications across diverse industries, enhancing operational efficiency, streamlining processes, and driving measurable growth and innovation."
          services={cardsSectionData2}
          headColor="text-white"
          sectionBg="bg-gray-900"
          cardBg="bg-transparent"
          hoverBg="shadow-xl hover:shadow-lg hover:shadow-white transition-all"
          textColor="text-white"
          hoverTextColor=""
        />
        <TechStack
          heading="Transform Your Mobile Development and Consulting with Our Expert Tech Stack"
          subheading="With our diverse and cutting-edge tech stack, we build innovative solutions that meet the highest standards of quality and functionality."
          categories={techStack}
        />
        <CardsSection
          heading="Harnessing Advanced Technologies for High-Performance Mobile Apps"
          subheading="Leverage the power of advanced technologies to transform your mobile applications into robust, secure, and high-performing digital solutions. Our consulting expertise ensures your apps are designed for maximum efficiency, scalability, and business impact."
          services={cardsSectionData3}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
          hoverTextColor=""
        />
        <GetStarted
          backgroundColor="bg-gray-900"
          textColor="text-white"
          buttonColor="bg-blue-900 hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Future-Proof Your App with Advanced Technology Solutions"
          description="Elevate your application’s capabilities through our expert technology integration services. From AI-driven intelligence to secure blockchain solutions, we provide end-to-end innovations that ensure your app remains robust, scalable, and ahead of the market."
          buttonText="Contact Us"
        />

        <HowWeWork
          heading="Mobile App Development Process"
          desc="We follow a rigorous, high-standard development methodology to deliver robust, error-free, and high-performance mobile applications. Our team ensures each stage is meticulously executed for maximum efficiency and business impact."
          steps={steps}
        />
        <CardsSection
          heading="Comprehensive Mobile App Development & Consulting for All Types of App"
          subheading="We provide high-caliber mobile app development and expert consulting for startups and enterprises, delivering end-to-end solutions that transform ideas into robust, scalable, and market-ready applications."
          services={cardsSectionData4}
          sectionBg="bg-gray-900"
          cardBg="border-2 border-white shadow-2xl shadow-gray-800"
          hoverBg=""
          textColor="text-white"
          hoverTextColor=""
          headColor="text-white"
        />
        <CardsSection
          heading="Why Partner with Us for Elite Mobile App Development Consulting"
          subheading="We deliver strategic, high-impact mobile app solutions that redefine business performance and unlock future growth potential. Our approach combines innovation, precision, and expertise to craft apps that truly stand out."
          services={cardsSectionDifferentColorData}
          height="h-76"
          sectionBg="bg-gray-900"
          headColor="text-white"
          cardBg="bg-gray-50"
          hoverBg=""
          cardHeadSize="text-2xl"
          textSize="text-lg"
          textColor="text-gray-800"
          hoverTextColor=""
        />
        <OurServices />
        <GetStarted
          backgroundColor="bg-gray-900"
          textColor="text-white"
          buttonColor="bg-blue-900 hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Premium Mobile Application Development Consulting Services"
          description={[
            "We go beyond conventional app development, offering comprehensive consulting and end-to-end solutions, which makes us one of the top mobile app development service providers in the industry.",
            "Our team of expert developers delivers high-quality applications across Android, iOS, and cross-platform environments, leveraging the latest technologies and industry best practices. Every project is executed with precision, efficiency, and scalability.",
            "With our highly skilled full-stack developers, we design apps for exceptional performance, maximum user engagement, and optimized downloads on Google Play Store and Apple App Store.",
          ]}
          image={assets.appDevelopment}
          reverse={true}
        />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default AppDevelopment;
