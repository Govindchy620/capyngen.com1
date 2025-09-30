import React from "react";
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
import Banner from "../components/Banner";
import CardsSection from "../components/CardsSection";
import {
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import Banner3 from "../components/Banner3";

const CustomAiSolution = () => {
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
      desc: "Deliver interactive learning experiences with educational websites designed by our Custom AI Solution company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with visually compelling portfolio websites crafted by our Custom AI Solution services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Websites",
      desc: "Promote deals effectively with custom offer websites built by our Custom AI Solution company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Websites",
      desc: "Create dynamic listing websites with advanced search functionalities and filters developed by our website development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Websites",
      desc: "Build informative wiki websites with collaborative tools and easy content management using our comprehensive Custom AI Solution solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Drive sales with robust e-commerce websites designed by our Custom AI Solution company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Websites",
      desc: "Support your cause with engaging non-profit websites, developed by our Custom AI Solution services, that enhance donor engagement and effectively communicate your mission.",
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
  const servicesData = [
    {
      title: "Custom Enterprise Web Portals",
      desc: "Our Custom AI Solution company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced Custom AI Solution services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
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
      desc: "Utilize our Custom AI Solution solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
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
  const cardsSectionImageData1 = [
    {
      title: "AI Integration In Software",
      description:
        "Richestsoft develops software with AI-integrated services that are equipped with NLP, machine learning, speech recognition, data collection, etc., from deep learning to generative AI implementation our dedicated AI developers deliver the best in the industry.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "AI Integration In Applications",
      description:
        "Get high-end AI integration for detailed user analysis and customized services.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "AI Integration in CRM",
      description:
        "Enhance customer understanding with predictive analysis and actionable insights.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "AI Integration In Software",
      description:
        "Richestsoft develops software with AI-integrated services that are equipped with NLP, machine learning, speech recognition, data collection, etc., from deep learning to generative AI implementation our dedicated AI developers deliver the best in the industry.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "AI Integration In Applications",
      description:
        "Get high-end AI integration for detailed user analysis and customized services.",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "AI Integration in CRM",
      description:
        "Enhance customer understanding with predictive analysis and actionable insights.",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
    },
  ];
  const cardsSectionImageData2 = [
    {
      title: "AI Integration In Software",
      description:
        "Richestsoft develops software with AI-integrated services that are equipped with NLP, machine learning, speech recognition, data collection, etc., from deep learning to generative AI implementation our dedicated AI developers deliver the best in the industry.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "AI Integration In Applications",
      description:
        "Get high-end AI integration for detailed user analysis and customized services.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "AI Integration in CRM",
      description:
        "Enhance customer understanding with predictive analysis and actionable insights.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      title: "Forex",
      desc: "Trade 70+ major, minor and exotic currency pairs.",
      image: assets.customAiSolution,
      textColor: "text-white",
    },
    {
      title: "Shares",
      desc: "Trade stocks of the most popular listed companies in the world.",
      image: assets.customAiSolution,
      textColor: "text-white",
    },
    {
      title: "Metals",
      desc: "Trade Gold, Silver, Platinum and other metals.",
      image: assets.customAiSolution,
      textColor: "text-white",
    },
    {
      title: "Commodities",
      desc: "Trade commodities such as Oil, Gas, Corn and Sugar.",
      image: assets.customAiSolution,
      textColor: "text-white",
    },
  ];
  const cardsSectionDifferentColorData = [
    {
      title: "Quality Assurance",
      description:
        "Our developers use prominent app development solutions ensuring better quality of product is delivered.",
      icon: <FaLightbulb className="text-4xl" />,
      cardBg: "bg-red-100",
    },
    {
      title: "Real Time Support",
      description:
        "We offer full range of support for our clients in real-time: phone, e-mail, and online.",
      icon: <FaChartLine className="text-4xl" />,
      cardBg: "bg-blue-100",
    },
    {
      title: "Cost Effectiveness",
      description:
        "We provide affordable and superb quality services that fit your budget.",
      icon: <FaCogs className="text-4xl" />,
      cardBg: "bg-purple-100",
    },
    {
      title: "Quality Assurance",
      description:
        "Our developers use prominent app development solutions ensuring better quality of product is delivered.",
      icon: <FaLightbulb className="text-4xl" />,
      cardBg: "bg-gray-100",
    },
    {
      title: "Real Time Support",
      description:
        "We offer full range of support for our clients in real-time: phone, e-mail, and online.",
      icon: <FaChartLine className="text-4xl" />,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cost Effectiveness",
      description:
        "We provide affordable and superb quality services that fit your budget.",
      icon: <FaCogs className="text-4xl" />,
      cardBg: "bg-green-100",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Strategic Planning",
      description:
        "Our web development company starts with a comprehensive investigation and planning phase to make sure that our services fit with your business goals and target audience.",
    },
    {
      step: "Step 02",
      title: "Custom Design & Prototyping",
      description:
        "As a top web development firm, we make unique designs and prototypes that are personalized to your business identity. We offer web development solutions that are both visually appealing and user-friendly.",
    },
    {
      step: "Step 03",
      title: "Front-End Development",
      description:
        "Our web development services focus on front-end development and employ the latest technology to create responsive, dynamic, and visually attractive websites that are optimized for performance and user experience.",
    },
    {
      step: "Step 04",
      title: "Back-End Development",
      description:
        "Our web development firm focuses on strong back-end development, which means we can make web development solutions that are safe, scalable, and efficient, and that can handle complex tasks and manage data smoothly.",
    },
    {
      step: "Step 05",
      title: "Quality Assurance & Testing",
      description:
        "Our web development services include strict quality assurance and testing processes to make sure your site meets the greatest requirements for performance, security, and ease of use.",
    },
    {
      step: "Step 06",
      title: "Deployment & Ongoing Maintenance",
      description:
        "After the website is up and running, our website creation firm will keep it up to date, safe, and completely optimized for continued success.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <Banner3
          title="Custom AI Solutions for a Faster Business Growth"
          subtitle="Tap into better decision-making, streamline your business activities, and foster innovation by using Capyngen’s bespoke AI solutions designed to meet your business requirements globally.Tap into better decision-making, streamline your business activities, and foster innovation by using Capyngen’s bespoke AI solutions designed to meet your business requirements globally."
          backgroundImage={assets.customAiSolution}
          overlayColor="bg-black"
          diagonalShape="polygon(0 0, 100% 0, 100% 40%, 0 100%)"
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionData1}
          cardBg="bg-transparent"
          hoverBg=" hover:bg-blue-50"
          textColor="text-gray-800"
          hoverTextColor=""
          textSize="text-xl"
          height="h-78"
        />

        <TopRatedCompany
          title="Top-Rated Custom AI Solution Company"
          description={[
            `RichestSoft provides top-notch and oriented Custom AI Solution solutions to our clients after a proper analysis is completed. Our expert web developers undergo various tests for the project through well-structured planning or strategy to ensure the quality of the product is exclusive. We offer our client's project superior functionality, clarity, and great dynamism, which will facilitate the user's experience on your website.`,
            `RichestSoft has a team of innovators, problem solvers, and out-of-box thinkers who have been delivering top-notch Custom AI Solution services since 2007. We ensure that your website is functional and easy for users to rank highly in Google. Being the best Custom AI Solution company in India, we provide best-in-class Custom AI Solution services.`,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />
        <CardsSectionImage
          heading="AI Integration Services"
          subheading="We help businesses harness AI in software, apps, and CRM solutions."
          services={cardsSectionImageData1}
          sectionBg="bg-gray-50"
          cardBg=""
          hoverBg="hover:bg-gray-200"
        />
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-transparent"
          headColor="text-white"
          hoverBg=" hover:bg-gray-400"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-xl"
          height="h-78"
        />
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionData1}
          sectionBg="bg-blue-100"
          cardBg="bg-transparent"
          headColor="text-black"
          hoverBg=" hover:bg-blue-200"
          textColor="text-black"
          hoverTextColor=""
          textSize="text-xl"
          height="h-78"
        />

        <BenefitsSection
          heading="Custom AI Solution Solutions We Offer"
          desc="A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages. At RichestSoft, we design and program the web pages best adapted to the different needs of each project. From strategic and rigorous thinking, we define and execute the Internet strategy with in-depth analysis. We focus on and effectively solve the challenges of each project with innovative answers."
          benefits={solutionsData}
        />
        <CardsSectionSlider
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          cardBg="bg-transparent"
          hoverBg=" hover:bg-blue-50"
          textColor="text-gray-800"
          hoverTextColor=""
          textSize="text-xl"
          height="h-78"
          services={cardsSectionSliderData1}
        />
        <HowWeWork
          heading="Comprehensive Web Development Process"
          desc="Capyngen offers a whole web development process, from initial exploration and planning to design, development, testing, and deployment. This ensures that you get custom, high-performing solutions that help you reach your business goals."
          steps={steps}
        />
        <WhyChoose />
        <CardsSectionImage
          heading="AI Integration Services"
          subheading="We help businesses harness AI in software, apps, and CRM solutions."
          services={cardsSectionImageData2}
          sectionBg="bg-gray-50"
          cardBg=""
          hoverBg="hover:bg-gray-200"
        />
        <BenefitsSection
          heading="Custom AI Solution Services We Offer"
          desc="Partner with RichestSoft for enterprise-level Custom AI Solution services, delivering custom solutions, API integration, cloud-based apps, and advanced e-commerce platforms that drive business growth and efficiency."
          benefits={servicesData}
          reverse
        />
        <CardsSection
          heading="Why Choose RichestSoft As Your AI Development Company"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionDifferentColorData}
          sectionBg="bg-gray-100"
          cardBg=""
          headColor="text-black"
          hoverBg=" hover:bg-gray-400"
          textColor="text-black"
          hoverTextColor=""
          textSize="text-xl"
          height="h-78"
        />
        <TechnologiesCarousel
          title="Custom AI Solution Technologies We Use"
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

export default CustomAiSolution;
