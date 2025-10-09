import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import SeoToolsSection from "../components/SeoToolsSection";
import SeoStatsSection from "../components/SeoStatsSection";
import Timeline from "../components/Timeline";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import StartupAgency from "../components/StartupAgency";
import SeoAgency from "../components/SeoAgency";
import {
  FaBuilding,
  FaTasks,
  FaStore,
  FaPuzzlePiece,
  FaMoneyBillWave,
  FaCogs,
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
  FaCheckCircle,
  FaProjectDiagram,
  FaRobot,
  FaCloud,
} from "react-icons/fa";
import {
  FaUserTie,
  FaHome,
  FaGavel,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import IndustryServices from "../components/IndustryServices";
import TypesWeDevelop from "../components/TypesWeDevelop";
import { assets } from "../assets/assets";
import Banner6 from "../components/Banner6";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import Banner11 from "../components/Banner11";
import TechStack from "../components/TechStack";
import CardsSectionSlider from "../components/CardsSectionSlider";

const HighTech = () => {
  const faqItems = [
    {
      question: "What are IT solutions for the high-tech industry?",
      answer:
        "Such solutions are products and services based on particular needs consisting of software, AI, cloud, and cybersecurity. Solutions based on technology take from four pillars of technical progress: AI, cloud, cybersecurity, and software. This can help companies increase productivity, scalability, and novelty.",
    },
    {
      question: "How can Gen AI solutions for high-tech improve operations?",
      answer:
        "Essentially by letting the AI-driven system handle all the mundane tasks. But that isn’t all — research is getting faster because of the data-processing power and real-world simulations. In addition, through intelligent automation, design and testing have become faster and more efficient.",
    },
    {
      question: "What is the role of cloud platforms for high-tech companies?",
      answer:
        "The cloud can solve major operational challenges and enable digital transformation. It offers scalability, agility, and efficiency, helping teams work seamlessly while deploying digital systems globally.",
    },
    {
      question: "How important is cybersecurity for high-tech businesses?",
      answer:
        "It is extremely important. Cybersecurity ensures the protection of sensitive intellectual property, proprietary code, and customer data from cyber threats and data breaches.",
    },
    {
      question:
        "What type of software solutions do you develop for high-tech companies?",
      answer:
        "We build enterprise-grade applications, IoT systems, data analytics platforms, and AI tools — all designed to enhance productivity, innovation, and growth for companies in the high-tech sector.",
    },
    {
      question:
        "Do you support digital transformation for established tech enterprises?",
      answer:
        "Yes. We modernize legacy systems, migrate operations to the cloud, and empower enterprises with AI and automation to drive efficiency and innovation.",
    },
    {
      question: "Can Capyngen handle large-scale cloud migrations?",
      answer:
        "Absolutely. We have extensive experience implementing hybrid and multi-cloud infrastructures for high-tech enterprises with seamless scalability and uptime.",
    },
    {
      question: "What makes Capyngen’s cybersecurity approach unique?",
      answer:
        "Our zero-trust framework grants minimal access to users while our encryption-first approach secures all data. Combined with real-time threat tracking, this ensures maximum protection against potential cyber risks.",
    },
    {
      question: "How do Gen AI and analytics contribute to R&D in high-tech?",
      answer:
        "They accelerate R&D timelines, enhance quality, and generate innovative product ideas by leveraging both historical and live data for predictive insights.",
    },
    {
      question: "Does Capyngen offer support after project completion?",
      answer:
        "Yes. We provide ongoing maintenance, performance monitoring, and system upgrades to keep your software and cloud infrastructure secure, efficient, and scalable.",
    },
  ];
  const servicesData = [
    {
      image: assets.bg1,
      title: "Operational Agility",
      desc: "Experience rapid execution and increased efficiency through the implementation of advanced digital transformation technologies.",
    },
    {
      image: assets.bg1,
      title: "Enhanced Security",
      desc: "Protect your company’s valuable resources and data with our enterprise-grade cybersecurity solutions built for high-tech infrastructures.",
    },
    {
      image: assets.bg1,
      title: "Data-Driven Decision-Making",
      desc: "Leverage analytics and automation to make real-time, informed decisions across R&D, manufacturing, and customer engagement processes.",
    },
    {
      image: assets.bg1,
      title: "Reduced Costs with Cloud Efficiency",
      desc: "Migrate to our high-value cloud platforms to lower infrastructure costs while improving performance, uptime, and operational reliability.",
    },
    {
      image: assets.bg1,
      title: "Innovation Through Gen AI",
      desc: "Utilize AI models for data generation, predictive simulation, and prototype testing—empowering teams to innovate faster and smarter.",
    },
    {
      image: assets.bg1,
      title: "Sustainable Scalability",
      desc: "Deploy adaptive IT systems that scale automatically with your business growth, user base expansion, and future innovations.",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      image: assets.bg1,
      title: "Electronics & Semiconductor Manufacturing",
      desc: "Use AI-driven insights to predict defects, optimize yield, and enhance the overall semiconductor manufacturing process.",
    },
    {
      image: assets.bg1,
      title: "Telecommunication Providers",
      desc: "Adopt cloud-based platforms to boost service delivery speed, scalability, and customer experience for telecom operations.",
    },
    {
      image: assets.bg1,
      title: "AI & Robotics Firms",
      desc: "Empower AI and robotics innovations with advanced ML frameworks and automation tools for greater accuracy and flexibility.",
    },
    {
      image: assets.bg1,
      title: "Aerospace & Defense Tech",
      desc: "Build and maintain secure, compliant digital systems adhering to the highest cybersecurity and operational standards.",
    },
    {
      image: assets.bg1,
      title: "Consumer Technology Companies",
      desc: "Transform the customer journey—from product design to after-sales support—through seamless digital transformation solutions.",
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
  const cardsSectionImageData1 = [
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Create AI systems that process vast data sets, automate decision-making, and deliver predictive insights using Gen AI technologies tailored for high-tech industries.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Cloud Engineering & Modernization",
      description:
        "Transform your digital infrastructure with our cloud platforms for high-tech enterprises — ensuring agility, scalability, and effortless deployment.",
      image: assets.customAiSolution,
      cardBg: "bg-green-100",
    },
    {
      title: "Cybersecurity & Compliance Systems",
      description:
        "Rely on enterprise-grade cybersecurity built with robust encryption, real-time threat detection, and compliance audits to safeguard R&D and intellectual property data.",
      image: assets.customAiSolution,
      cardBg: "bg-purple-100",
    },
    {
      title: "IoT & Edge Computing",
      description:
        "Enhance operational efficiency, predictive maintenance, and innovation by enabling real-time connectivity across devices and systems.",
      image: assets.customAiSolution,
      cardBg: "bg-pink-100",
    },
    {
      title: "Software Solutions for High-Tech",
      description:
        "Develop state-of-the-art, custom software that simplifies workflows, boosts development productivity, and reduces time-to-market for your products.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Data Analytics & Intelligence Platforms",
      description:
        "Turn raw data into strategic insights with AI-powered dashboards, big data mining, and real-time visualization tools for informed decision-making.",
      image: assets.customAiSolution,
      cardBg: "bg-orange-100",
    },
  ];
  const marketingCards = [
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-1.jpg",
      alt: "Christmas background 3D cartoon",
      text: "SEO & Content",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-2.jpg",
      alt: "A beautiful glowing flower",
      text: "Social Media Marketing",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-3.jpg",
      alt: "A magical leopard",
      text: "Paid Advertising",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-4.jpg",
      alt: "A female 3D cartoon holding a wrapped gift box",
      text: "Email Campaigns",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Domain-Specific Expert",
      description:
        "We completely understand the challenges that come with high-tech companies. These, in reality, include rapid innovation cycles, complex data landscapes, and stringent protection demands. Our high-tech software solutions aim to keep pace with the pace and precision of your own operations.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Security-First Approach",
      description:
        "The more threats that emerge in the cyber world, the more efficacious becomes our hi-tech cyber security as a protection that maintains systems, data, and our clients' intellectual property in safety from all harm. Our offerings encompass next-gen encryption, zero-trust architecture, and standards of compliance like ISO 27001 and GDPR.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Scalable Cloud Platforms",
      description:
        "By utilizing our cloud platform for high tech businesses, it becomes extremely simple to operate globally in terms of integration, scalability, and real-time collaboration. Whichever it is, whether it is a hybrid or a multi-cloud, we guarantee performance and reliability on all fronts.",
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Intelligent Innovation with Gen AI",
      description:
        "Gen AI solutions for hi-tech by Capyngen utilize AI for workflow automation, predictive analysis, and accelerated design-to-production cycles — transforming the way tech companies innovate and create products.",
      icon: <FaRobot className="text-4xl" />,
    },
    {
      title: "End-to-End Integration",
      description:
        "We ensure that the transition from your previous systems to new applications and technologies is seamless. Our adaptable architecture strategy offers a unified, future-ready digital ecosystem.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Proven Track Record",
      description:
        "With results that matter, Capyngen has consistently delivered scalable solutions that accelerate, secure, and optimize operations for startups and global tech enterprises alike.",
      icon: <FaCheckCircle className="text-4xl" />,
    },
  ];

  return (
    <div className="">
      <Banner11
        heading=" Driving the High-Tech Industry"
        highlight="Intelligent IT Solutions"
        description="By making the technologies, software, and products easy to use, safe, and dynamic to meet changing demands from markets, we not only engineer the future of the high-tech industry but also assist in the evolution and success of our businesses."
        cards={marketingCards}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Get in touch with us for a no-charge consultation."
        description={[
          "It is we who, as a High-tech Industry (HTI) based IT solutions provider, create and design the next-gen IT solutions that lead to smart systems, reliable infrastructure, and high-end software, thus, the customer's seamless and cutting-edge experience is attained.",
        ]}
        buttonText="Get in Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        reverse={false}
        title="Capyngen New Technologies and Solutions are Shaping the High-Tech Industry"
        description={[
          <>
            <p>
              The development of the high-tech sector is facilitated by
              Automation, cloud computing, Internet of Things (IoT), and
              Artificial Intelligence, and these are the transformations that
              paved the way for the industry. Businesses, though, need to not
              only catch up but also stay a step or two ahead of their
              competitors with fast, smart, secure, and adaptive digital
              ecosystems.
            </p>
            <p className="pt-4">
              Capyngen is the best partner for the IT solutions in the high-tech
              industry. The company's data-driven approach to engineering
              excellence, transforms tech giants into start-ups in the blink of
              an eye. We have the skills that can fit the customization of
              software for electronics, semiconductor, telecommunications, AI
              platforms, and emerging tech verticals just what you have been
              looking for.
            </p>
            <p className="pt-4">
              True high-tech software is software that is digitally engineered
              in high-tech firms' applications, i.e., Gen AI-driven platforms,
              cloud-native infrastructure, etc. This is software that we build.
            </p>
          </>,
        ]}
        image={assets.whyChooseUs}
        background={assets.patternBg1}
        isHidden="hidden"
      />
      <CardsSection
        heading="Why Global Technology Leaders Trust Capyngen"
        subheading=""
        services={cardsSectionData2}
        sectionBg="bg-gray-900"
        headColor="text-white"
        cardBg="bg-black border border-white transition-all duration-400"
        hoverBg=" hover:-translate-y-2"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
      />
      <CardsSectionImage
        heading="High-Tech Software Solution Development"
        subheading="Modern Tech Stack for Healthcare & Fitness Solutions"
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Would you consider innovating differently?"
        description={[
          "If you want to know how our IT solutions for the smart high-tech industry can be the key to your organization’s capacity to innovate and competitiveness in the global market then schedule a free strategy session with Capyngen.",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <IndustryServices
        heading="Empowering the High-Tech Industry Through Digital Transformation"
        subheading=""
        services={servicesData}
      />
      <CardsSectionSlider
        heading="Industries We Empower in the High-Tech Ecosystem"
        subheading=""
        cardBg="bg-transparent"
        hoverBg=" hover:bg-blue-50"
        textColor="text-gray-800"
        hoverTextColor=""
        textSize="text-xl"
        sectionBg="bg-black/90"
        height="h-78"
        headColor="text-white"
        services={cardsSectionSliderData1}
      />
      <TechStack
        heading="Modern Tech Stack for High-Tech IT Solutions"
        subheading=""
        categories={techStack}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Ready to Lead the Future of High-Tech Innovation?"
        description={[
          "How about Capyngen’s IT solutions for the high-tech industry making a difference in your enterprise with automation, AI, cloud, and cybersecurity? Get in touch with us to start creating the future.",
        ]}
        buttonText="Get a Free Consultation"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default HighTech;
