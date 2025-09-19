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
import { LifeBuoy, Sparkles } from "lucide-react";
import BusinessValueStats from "../components/BusinessValueStats";
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

const DevOpsSolutions = () => {
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
  const technologies = [
    { name: "JavaScript", logo: assets.js },
    { name: "Python", logo: assets.python },
    { name: "CSS3", logo: assets.css3 },
    { name: "C++", logo: assets.cplusplus },
    { name: "PHP", logo: assets.php },
    { name: "React", logo: assets.react },
    { name: "Vue.js", logo: assets.vuejs },
    { name: "AngularJS", logo: assets.angular },
    { name: "JQuery", logo: assets.jquery },
    { name: "Next.js", logo: assets.nextjs },
    { name: "MongoDB", logo: assets.mongodb },
    { name: "MySQL", logo: assets.mysql },
    { name: "PostgreSQL", logo: assets.postgresql },
    { name: "Node.js", logo: assets.nodejs },
    { name: "Laravel", logo: assets.laravel },
    { name: "Express.js", logo: assets.expressjs },
    { name: "Azure", logo: assets.azure },
    { name: "AWS", logo: assets.aws },
    { name: "Google Cloud", logo: assets.googlecloud },
  ];
  const solutionsData = [
    {
      title: "Casino Game Web App",
      desc: "Launch captivating casino game websites with secure payment gateways, real-time gaming experiences, and engaging user interfaces that keep players returning for more.",
    },
    {
      title: "Web App like CandyAI",
      desc: "RichestSoft develops high-end and user-friendly web apps, such as Candy AI, and other AR VR dating apps, using advanced AI algorithms and reliable frameworks.",
    },
    {
      title: "Educational Websites",
      desc: "Deliver interactive learning experiences with educational websites designed by our DevOps Solutions company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with visually compelling portfolio websites crafted by our DevOps Solutions services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Websites",
      desc: "Promote deals effectively with custom offer websites built by our DevOps Solutions company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Websites",
      desc: "Create dynamic listing websites with advanced search functionalities and filters developed by our website development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Websites",
      desc: "Build informative wiki websites with collaborative tools and easy content management using our comprehensive DevOps Solutions solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Drive sales with robust e-commerce websites designed by our DevOps Solutions company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Websites",
      desc: "Support your cause with engaging non-profit websites, developed by our DevOps Solutions services, that enhance donor engagement and effectively communicate your mission.",
    },
    {
      title: "Entertainment Website Development",
      desc: "Engage audiences with dynamic entertainment and OTT websites featuring multimedia integration, interactive features, and responsive design, all tailored to your brand's unique needs.",
    },
    {
      title: "Event Website Development",
      desc: "Seamlessly manage events with custom event websites that offer ticketing systems, live streaming, and real-time updates, enhancing attendee experiences and engagement.",
    },
    {
      title: "Consulting Website Development",
      desc: "Establish your consulting brand online with professional websites that showcase your expertise, client testimonials, and service offerings, designed to convert visitors into clients.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Ideation and Concept",
      description:
        "Our team refines your app ideas, ensuring a clear, viable concept that meets market needs.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Market Research",
      description:
        "We conduct thorough market research to understand trends, competition, and target audience, providing actionable insights to guide the app development process.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Technology Stack Selection",
      description:
        "Our experts advise on the best technologies, frameworks, and tools for app development.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "UX/UI Design",
      description:
        "We craft intuitive, engaging UX/UI designs that enhance user satisfaction.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Prototyping and MVP",
      description:
        "Our team develops prototypes and MVPs to validate concepts and minimize risks.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Project Management",
      description:
        "We provide project management services, ensuring timely delivery and risk management.",
      icon: <FaTasks className="text-4xl" />,
    },
    {
      title: "UX/UI Design",
      description:
        "We craft intuitive, engaging UX/UI designs that enhance user satisfaction.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Prototyping and MVP",
      description:
        "Our team develops prototypes and MVPs to validate concepts and minimize risks.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Project Management",
      description:
        "We provide project management services, ensuring timely delivery and risk management.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Ideation and Concept",
      description:
        "Our team refines your app ideas, ensuring a clear, viable concept that meets market needs.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Market Research",
      description:
        "We conduct thorough market research to understand trends, competition, and target audience, providing actionable insights to guide the app development process.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Technology Stack Selection",
      description:
        "Our experts advise on the best technologies, frameworks, and tools for app development.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "UX/UI Design",
      description:
        "We craft intuitive, engaging UX/UI designs that enhance user satisfaction.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Prototyping and MVP",
      description:
        "Our team develops prototypes and MVPs to validate concepts and minimize risks.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Project Management",
      description:
        "We provide project management services, ensuring timely delivery and risk management.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];
  const servicesData = [
    {
      title: "Custom Enterprise Web Portals",
      desc: "Our DevOps Solutions company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced DevOps Solutions services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
    },
    {
      title: "Cloud-Based Web Applications",
      desc: "Our website development company specializes in creating cloud-based web applications that offer high availability, scalability, and secure access for global enterprises.",
    },
    {
      title: "Enterprise CMS Development",
      desc: "Simplify content management with our custom-built enterprise CMS solutions, which offer powerful features and flexibility for effortlessly managing large volumes of content.",
    },
    {
      title: "Data Analytics Dashboards",
      desc: "Utilize our DevOps Solutions solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <Banner
          title="DevOps Solutions"
          overlayBg="bg-black/60"
          backgroundImage={assets.devops}
          description="Unlock the Power of Web Presence with our Professional Appsite Designing Service! Elevate Your Online Presence with Stunning Appsite Designs."
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <BusinessValueStats
          title="Drive Business Value With The Right Technology Partner"
          subtitle="Schedule Appointment"
          ctaText="Speak with an Expert →"
          stats={[
            { value: 50, suffix: "%", label: "Faster Deployment" },
            { value: 99.9, suffix: "%", label: "Uptime Achieved" },
            {
              value: 85,
              suffix: "%",
              label: "Improvement in Software Quality",
            },
            {
              value: 100,
              suffix: "+",
              label: "Successful DevOps Implementations",
            },
            { value: 60, suffix: "%", label: "Increase in Team Productivity" },
          ]}
          backgroundColor="bg-[#0a1b2e]"
          textColor="text-white"
          highlightColor="text-red-500"
        />
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionData2}
          headColor="text-white"
          sectionBg="bg-blue-900"
          cardBg="bg-transparent"
          hoverBg="shadow-xl hover:shadow-lg hover:shadow-white transition-all"
          textColor="text-white"
          hoverTextColor=""
        />
        <GetStarted
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Guiding Your App Vision from Concept to Launch with Expert Consulting and Proven Strategies"
          description="Our expert consulting team provides end-to-end support, from initial concept through to successful launch, ensuring every aspect of your app development is meticulously handled."
          buttonText="Contact Us"
          image={assets.getStarted}
        />
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionData1}
          cardBg="bg-gray-50"
          hoverBg=""
          textColor="text-gray-800"
          hoverTextColor=""
        />
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionData2}
          headColor="text-black"
          sectionBg="bg-white"
          cardBg="bg-transparent"
          hoverBg="border border-gray-100 hover:border-black hover:scale-105 transition-all"
          textColor="text-black"
          hoverTextColor=""
        />
        <TopRatedCompany
          title="Top-Rated DevOps Solutions Company"
          description={[
            `RichestSoft provides top-notch and oriented DevOps Solutions solutions to our clients after a proper analysis is completed. Our expert web developers undergo various tests for the project through well-structured planning or strategy to ensure the quality of the product is exclusive. We offer our client's project superior functionality, clarity, and great dynamism, which will facilitate the user's experience on your website.`,
            `RichestSoft has a team of innovators, problem solvers, and out-of-box thinkers who have been delivering top-notch DevOps Solutions services since 2007. We ensure that your website is functional and easy for users to rank highly in Google. Being the best DevOps Solutions company in India, we provide best-in-class DevOps Solutions services.`,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />
        <BenefitsSection
          heading="DevOps Solutions Solutions We Offer"
          desc="A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages. At RichestSoft, we design and program the web pages best adapted to the different needs of each project. From strategic and rigorous thinking, we define and execute the Internet strategy with in-depth analysis. We focus on and effectively solve the challenges of each project with innovative answers."
          benefits={solutionsData}
        />
        <HowWeWork />
        <CardsSection
          heading="DevOps Services and Solutions Procedure We Follow"
          subheading="Our DevOps services and solutions procedure ensures a seamless transition to automated, scalable, and secure operations, from assessment and planning to continuous integration, monitoring, and compliance tailored to your business needs."
          services={cardsSectionData2}
          headColor="text-white"
          height="h-80"
          sectionBg="bg-gray-800"
          cardBg="bg-gray-700"
          hoverBg=""
          textColor="text-white"
          hoverTextColor=""
        />
        <GetStarted
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Guiding Your App Vision from Concept to Launch with Expert Consulting and Proven Strategies"
          description="Our expert consulting team provides end-to-end support, from initial concept through to successful launch, ensuring every aspect of your app development is meticulously handled."
          buttonText="Contact Us"
        />
        <WhyChoose />
        <BenefitsSection
          heading="DevOps Solutions Services We Offer"
          desc="Partner with RichestSoft for enterprise-level DevOps Solutions services, delivering custom solutions, API integration, cloud-based apps, and advanced e-commerce platforms that drive business growth and efficiency."
          benefits={servicesData}
          reverse
        />
        <TechnologiesCarousel
          title="DevOps Solutions Technologies We Use"
          description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
          technologies={technologies}
        />
        <OurServices />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default DevOpsSolutions;
