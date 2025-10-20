import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import OurServices from "../components/OurServices";
import HowWeWork from "../components/HowWeWork";
import WhyChoose from "../components/WhyChoose";
import TechnologiesCarousel from "../components/TechnologiesCarousel";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import BenefitsSection from "../components/BenefitsSection";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import TopRatedCompany from "../components/TopRatedCompany";
import {
  CreditCard,
  LifeBuoy,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";
import Banner10 from "../components/Banner10";
import GetStarted from "../components/GetStarted";
import CardsSectionGrid from "../components/CardsSectionGrid";
import CardsSection from "../components/CardsSection";
import {
  FaAndroid,
  FaApple,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
  FaNetworkWired,
  FaProjectDiagram,
  FaVrCardboard,
  FaCloud,
  FaBriefcase,
  FaServer,
  FaHandshake,
  FaDigitalOcean,
  FaBuilding,
  FaMoneyBillWave,
  FaBullhorn,
  FaChartBar,
  FaHeadset,
  FaPuzzlePiece,
  FaTrophy,
} from "react-icons/fa";
import AppTypesSection from "../components/AppTypesSection";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";

const Consulting = () => {
  const faqItems = [
    {
      question: "What are IT consulting services?",
      answer:
        "IT consulting services refer to the involvement of experts who provide advisory and implementation support for technology strategy, infrastructure, security, cloud adoption, and digital transformation. Consultants evaluate the current systems, suggest changes, and facilitate the implementation of solutions that are in line with business goals.",
    },
    {
      question: "Why should businesses hire IT consultants?",
      answer:
        "IT consultants are the specialists who bring highly specialized knowledge, industry experience, and unbiased opinions that an internal team cannot provide to a company. With their help, businesses can avoid making expensive mistakes, speed up the process of adopting new technology, make better use of their investments, and get the right guidance for difficult technology decisions.",
    },
    {
      question: "What makes Capyngen a top consulting company in India?",
      answer:
        "Capyngen is empowered with the combination of the sound experience of over the years, proven methodologies, and industry-specific expertise backed by rich services, client-centric approach, and consistent delivery of measurable results. Our client successes and awards make us stand out from the rest and lead us to be ranked one of the top consulting companies in India.",
    },
    {
      question: "Do you provide business consulting solutions beyond IT?",
      answer:
        "Indeed! Our main focus is IT consulting, yet we provide all-inclusive business consultation solutions comprising growth strategy, operational effectiveness, financial planning, market research, and organization development, all seamlessly integrated with technology recommendations.",
    },
    {
      question: "How much do consulting services cost?",
      answer:
        "The costs are dependent on various factors such as the scope of the project, duration, the level of expertise required, and the mode of engagement. We have several ways of pricing, which include hourly rates, fees for specific projects, and retainer arrangements. To receive a personalized quote that fits your budget, please get in touch with us.",
    },
    {
      question: "Can small businesses afford your consulting services?",
      answer:
        "Definitely! We provide excellent IT consulting services suitable for small businesses in India with scalable solutions that can accommodate different budgets. As an affordable business consulting agency in India, we have specially tailored packages for startups and SMBs.",
    },
    {
      question: "What industries does Capyngen serve?",
      answer:
        "Capyngen has a vast range of client base throughout the world from different industries and sectors such as healthcare, finance, manufacturing, retail, education, government, technology, hospitality, logistics, and professional services and has the knowledge of all of these industries and offers customized solutions to them.",
    },
    {
      question: "How long does a typical consulting engagement last?",
      answer:
        "The length of the engagement depends on the nature of the project. For instance, Quick assessments may take 2-4 weeks, while comprehensive transformations can span 6-12 months. We provide detailed timelines during initial discussions.",
    },
    {
      question:
        "Do you provide implementation support or just recommendations?",
      answer:
        "We are there with the client throughout the journey from coming up with the strategy to its implementation. Unlike consultants who only deliver recommendations, Capyngen equips and guides the implementation of solutions, thus assuring the successful deployment and adoption.",
    },
    {
      question: "What is digital transformation consulting?",
      answer:
        "Digital transformation consulting is a service that helps businesses update their ways of operation, use new technologies, and automate their processes. Besides that, they can introduce changes in the organization through digital transformation which may include the adoption of cloud computing, implementation of AI, redesigning the customer experience, and managing the cultural change.",
    },
    {
      question: "How do you ensure consulting recommendations are practical?",
      answer:
        "The recommendations are drawn from the thorough assessment, industry best practices, and the consideration of your resources, restrictions, and capabilities. We focus on solutions that can be implemented right away without sacrificing long-term strategic initiatives.",
    },
    {
      question: "Can you help with cloud migration?",
      answer:
        "Certainly! Our cloud consulting activities envelop migration strategy, platform selection, application assessment, data migration, security implementation, and post-migration optimization pushing for a smooth transition with less downtime.",
    },
    {
      question: "Do you provide cybersecurity consulting?",
      answer:
        "Yes, of course! We offer web security services that include risk evaluations, designing security architecture, providing guidance on compliance, planning for incident responses, training on security awareness, and offering recommendations for continuous monitoring of digital assets.",
    },
    {
      question: "What's your approach to change management?",
      answer:
        "We are fully aware that the success of technology largely depends on the people's acceptance. Our change management strategy involves stakeholder engagement, communication planning, training programs, feedback mechanisms, continuous support that ensures organization buy-in and successful transformation.",
    },
    {
      question: "How do I get started with Capyngen consulting services?",
      answer:
        "Just get in touch with us to book a free initial consultation. We will understand your issues, goals, and needs, then offer a customized consulting engagement plan that outlines the approach, duration, deliverables, and investment required.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Expert IT Advisors",
      description:
        "Our team's combined experience of the last several decades in different sectors and technologies is just amazing. As the leading management consultants, working with startups both in India and abroad, and nurturing mature enterprises, we provide strategic direction, support by hands-on expertise, and a track record of success.",
      icon: <FaLightbulb className="text-4xl text-indigo-600" />,
    },
    {
      title: "Customized Solutions",
      description:
        "We do not agree that it is appropriate to use one successful formula for all cases. Every business consulting solution will be customized to fit your industry, company, situation, challenges, and objectives. Our tailor-made strategies will ensure that they are the most relevant and effective for you.",
      icon: <FaChartBar className="text-4xl text-indigo-600" />,
    },
    {
      title: "End-to-End Support",
      description:
        "The services provided by Capyngen during your technology transformation period range from initial assessment and strategy development all the way through implementation, training, and ongoing optimization. We are not just advisors; we are partners.",
      icon: <FaNetworkWired className="text-4xl text-indigo-600" />,
    },
    {
      title: "Proven Track Record",
      description:
        "Our portfolio tells about the successful transformations of IT projects from different industries with measurable results such as cost reduction, efficiency improvement, revenue growth, and customer satisfaction enhancement. The success stories of our clients are testimonies to our proficiency to deliver.",
      icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
    },
    {
      title: "Future-Ready Technology",
      description:
        "Our goal in the market as an IT consulting firm is to be the trendsetter in the technology world. We will guide you through the adoption of the latest tools, platforms, and methods, such as cloud computing, AI, automation, and analytics, that will give your company a winning edge in the long run.",
      icon: <FaBullhorn className="text-4xl text-indigo-600" />,
    },
    {
      title: "Industry Recognition",
      description:
        "Capyngen is one of the top consulting companies in India. The company has been able to establish a solid reputation by consistently providing high-quality services, constantly coming up with new solutions, and showing unflagging commitment to customer success in a variety of markets.",
      icon: <FaMoneyBillWave className="text-4xl text-indigo-600" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "IT Strategy & Planning",
      description:
        "The creation of strategic IT roadmaps that integrate technology projects with business objectives and the overall mission of the company.",
      image: assets.consulting2,
      cardBg: "bg-blue-100",
    },

    {
      title: "Cloud Consulting",
      description:
        "A cloud uptake plan that charts the best cloud method (public, private, hybrid) for the set of requirements.",
      image: assets.consulting3,
      cardBg: "bg-green-100",
    },
    {
      title: "Cybersecurity Consulting",
      description:
        "The security risk assessment which uncovers the security gaps, threats, and possible ways of attack in the whole infrastructure.",
      image: assets.consulting4,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Digital Transformation Consulting",
      description:
        "Business process simplification by identifying the suitable RPA, AI, and workflow tools to use for the process of automation.",
      image: assets.consulting5,
      cardBg: "bg-blue-100",
    },

    {
      title: "IT Infrastructure Consulting",
      description:
        "The improvements in network architecture that make network infrastructures high-performance, secure, and scalable for growth.",
      image: assets.consulting6,
      cardBg: "bg-green-100",
    },
    {
      title: "Business Consulting Solutions",
      description:
        "Development of the growth strategy that is composed of detailed plans for market expansion, new product launches, and partnerships.",
      image: assets.consulting7,
      cardBg: "bg-yellow-100",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Assessment",
      description:
        "The discovery sessions form the core of our understanding of your IT landscape, business objectives, challenges and opportunities. These sessions include technology audits, stakeholder interviews, process mapping, and competitive analysis which together establish a foundation for strategy.",
    },
    {
      step: "Step 02",
      title: "Strategy Development",
      description:
        "The experts of our team design a tailor-made roadmap based on the assessment findings and aligned to your business goals. Such a roadmap comprises prioritized recommendations, implementation timelines, resource requirements, budget planning, and expected ROI which makes the way ahead unequivocal.",
    },
    {
      step: "Step 03",
      title: "Implementation Support",
      description:
        "We don’t just provide recommendations and leave. Our team is with yours all the way during the implementation process, offering technical expertise, project management, change management support, and generally making sure that the implementation is going on with minimal disturbance to the rest of the organization.",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      title: "E-commerce & Retail",
      desc: "",
      image: assets.webDesign11,
      textColor: "text-white",
    },
    {
      title: "Healthcare & Wellness",
      desc: "",
      image: assets.webDesign12,
      textColor: "text-white",
    },
    {
      title: "Education & E-learning",
      desc: "",
      image: assets.webDesign13,
      textColor: "text-white",
    },
    {
      title: "Real Estate",
      desc: "",
      image: assets.webDesign14,
      textColor: "text-white",
    },
    {
      title: "IT & Software",
      desc: "",
      image: assets.webDesign15,
      textColor: "text-white",
    },
    {
      title: "Corporate & Enterprise Solutions",
      desc: "",
      image: assets.webDesign16,
      textColor: "text-white",
    },
    {
      title: "Travel & Hospitality",
      desc: "",
      image: assets.webDesign17,
      textColor: "text-white",
    },
    {
      title: "Startups & Entrepreneurs",
      desc: "",
      image: assets.webDesign18,
      textColor: "text-white",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>Consulting Services | IT & Business Consulting Company</title>
        <meta
          name="description"
          content="Capyngen offers expert consulting services to drive business growth. From IT to enterprise consulting, we deliver tailored solutions for companies across India."
        />
        <meta
          name="keywords"
          content="Consulting Services | IT & Business Consulting Company"
        />
      </Helmet>
      <div className="lg:sticky inset-0">
        <Banner10
          title="Expert IT Consulting "
          highlight="That Helps Your Business Growth"
          description="The company in the world of technology and digital is advisory in this same world to different companies, especially Indian ones. We pack our consulting into Angola-customized, and the primary objective of the exercises is to make processes in businesses simpler, increase their productivity and expand their reach through the market."
          buttonAria="Start Your Project"
          services={[
            "Custom IT Consulting",
            "Business Consulting Solutions",
            "Digital Consulting Services",
            "Enterprise Consulting Company",
          ]}
          image={assets.consulting1}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Request for a Complimentary Consultation"
          description={[
            "You Experience Our Strategic Technology Solutions and Reach Your Business Growing with Us - Collaborate with One of the Top Indian IT Advisory Firms!",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <FullSizeImageSection
          backgroundImage={assets.consultingFullSize}
          title="Build your dream project with Capyngen"
          description="We help transform your ideas into powerful digital solutions with our expert web development services."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSection
          heading="Why should you choose Capyngen Consulting?"
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-br from-[#000]/90 to-gray-800/90 hover:bg-gradient-to-tl hover:-translate-y-1 transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-white/30"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Request for a Complimentary Consultation"
          description={[
            "Do you want to change your IT strategy and make it more efficient? Then, get in touch with Capyngen's expert consultants today and find out how your business can grow rapidly with a well-planned technology strategy by us!",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSectionImage
          heading="Our Comprehensive Consulting Services"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <CardsSectionSlider
          heading="Industries We Serve"
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
        <HowWeWork
          heading="How We Deliver Results - Our Consulting Approach"
          desc=""
          steps={steps}
        />
        <FullSizeImageSection
          backgroundImage={assets.consultingFullSize2}
          title="Build your dream project with Capyngen"
          description="We help transform your ideas into powerful digital solutions with our expert web development services."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Why not make use of our free IT consultation? First, our technology experts get to know your needs, then they create tailored strategies that really move your company forward and give you a return on your investment!",
          ]}
          textSize="text-2xl"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default Consulting;
