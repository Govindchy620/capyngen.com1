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
import { ShoppingCart, CreditCard, Smartphone, Store } from "lucide-react";
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
import CardsSectionGrid from "../components/CardsSectionGrid";

const BlockchainDevelopment = () => {
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
      desc: "Deliver interactive learning experiences with educational websites designed by our Blockchain Development company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with visually compelling portfolio websites crafted by our Blockchain Development services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Websites",
      desc: "Promote deals effectively with custom offer websites built by our Blockchain Development company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Websites",
      desc: "Create dynamic listing websites with advanced search functionalities and filters developed by our website development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Websites",
      desc: "Build informative wiki websites with collaborative tools and easy content management using our comprehensive Blockchain Development solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Drive sales with robust e-commerce websites designed by our Blockchain Development company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Websites",
      desc: "Support your cause with engaging non-profit websites, developed by our Blockchain Development services, that enhance donor engagement and effectively communicate your mission.",
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
      desc: "Our Blockchain Development company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced Blockchain Development services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
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
      desc: "Utilize our Blockchain Development solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];
  const cardsSectionDifferentColorData = [
    {
      title: "Quality Assurance",
      description:
        "Our developers use prominent app development solutions ensuring better quality of product is delivered.",
      icon: <FaLightbulb className="text-4xl" />,
      cardBg: "bg-red-100 hover:bg-red-400",
    },
    {
      title: "Real Time Support",
      description:
        "We offer full range of support for our clients in real-time: phone, e-mail, and online.",
      icon: <FaChartLine className="text-4xl" />,
      cardBg: "bg-blue-100 hover:bg-blue-400",
    },
    {
      title: "Cost Effectiveness",
      description:
        "We provide affordable and superb quality services that fit your budget.",
      icon: <FaCogs className="text-4xl" />,
      cardBg: "bg-purple-100 hover:bg-purple-400",
    },
    {
      title: "Quality Assurance",
      description:
        "Our developers use prominent app development solutions ensuring better quality of product is delivered.",
      icon: <FaLightbulb className="text-4xl" />,
      cardBg: "bg-gray-100 hover:bg-gray-400",
    },
    {
      title: "Real Time Support",
      description:
        "We offer full range of support for our clients in real-time: phone, e-mail, and online.",
      icon: <FaChartLine className="text-4xl" />,
      cardBg: "bg-yellow-100 hover:bg-yellow-400",
    },
    {
      title: "Cost Effectiveness",
      description:
        "We provide affordable and superb quality services that fit your budget.",
      icon: <FaCogs className="text-4xl" />,
      cardBg: "bg-green-100 hover:bg-green-400",
    },
  ];
  const cardsSectionGridData1 = [
    {
      title: "Ecommerce App Development",
      description:
        "We create a mobile-friendly app with an ecommerce foundation to provide fantastic on-the-go access to any screen size.",
      icon: <Smartphone className="w-6 h-6 text-orange-500" />,
      iconBg: "bg-orange-100",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Increase business accommodations and user association by integrating excellent payment gateway modes into popular ecommerce schemas.",
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Responsive Shopping Application",
      description:
        "We provide you with dynamic potential from data query, analysis, and enterprise reporting to complete check-out analysis.",
      icon: <Store className="w-6 h-6 text-lime-500" />,
      iconBg: "bg-lime-100",
    },
    {
      title: "Shopping Cart Development",
      description:
        "Our well-tailored shopping cart development services enhance customer engagement and the latest business adaptations.",
      icon: <ShoppingCart className="w-6 h-6 text-red-500" />,
      iconBg: "bg-red-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <Banner
          title="Blockchain Development"
          overlayBg="bg-black/60"
          backgroundImage={assets.blockchainDevelopment}
          description="Unlock the Power of Web Presence with our Professional Appsite Designing Service! Elevate Your Online Presence with Stunning Appsite Designs."
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionDifferentColorData}
          cardBg=""
          hoverBg=""
          textColor="text-gray-800"
          hoverTextColor=""
        />
        <TopRatedCompany
          title="Top-Rated Blockchain Development Company"
          description={[
            `RichestSoft provides top-notch and oriented Blockchain Development solutions to our clients after a proper analysis is completed. Our expert web developers undergo various tests for the project through well-structured planning or strategy to ensure the quality of the product is exclusive. We offer our client's project superior functionality, clarity, and great dynamism, which will facilitate the user's experience on your website.`,
            `RichestSoft has a team of innovators, problem solvers, and out-of-box thinkers who have been delivering top-notch Blockchain Development services since 2007. We ensure that your website is functional and easy for users to rank highly in Google. Being the best Blockchain Development company in India, we provide best-in-class Blockchain Development services.`,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />
        <GetStarted
          reverse={true}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Guiding Your App Vision from Concept to Launch with Expert Consulting and Proven Strategies"
          description="Our expert consulting team provides end-to-end support, from initial concept through to successful launch, ensuring every aspect of your app development is meticulously handled."
          buttonText="Contact Us"
          image={assets.getStarted}
        />
        <CardsSectionGrid
          heading="Absolute Ecommerce Mobile App Development Solutions"
          description={[
            "We are a reliable Ecommerce application developer specializing in developing highly-scalable on-demand ecommerce development services. Our knowledgeable Ecommerce mobile app development Company services are globally renowned for providing avant-garde and reliable mobile app solutions.",
            "Our team of experts is capable of creating highly-customizable mobile solutions for business-specified Ecommerce needs.",
            "If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable Ecommerce development services.",
          ]}
          services={cardsSectionGridData1}
          reverse
        />

        <BenefitsSection
          heading="Blockchain Development Solutions We Offer"
          desc="A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages. At RichestSoft, we design and program the web pages best adapted to the different needs of each project. From strategic and rigorous thinking, we define and execute the Internet strategy with in-depth analysis. We focus on and effectively solve the challenges of each project with innovative answers."
          benefits={solutionsData}
          image={assets.blockchainDevelopment}
        />
        <HowWeWork />
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionDifferentColorData}
          cardBg=""
          hoverBg=""
          textColor="text-gray-800"
          hoverTextColor=""
        />
        <WhyChoose />
        <BenefitsSection
          heading="Blockchain Development Services We Offer"
          desc="Partner with RichestSoft for enterprise-level Blockchain Development services, delivering custom solutions, API integration, cloud-based apps, and advanced e-commerce platforms that drive business growth and efficiency."
          benefits={servicesData}
          reverse
        />
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionDifferentColorData}
          cardBg=""
          hoverBg=""
          textColor="text-gray-800"
          hoverTextColor=""
        />
        <TechnologiesCarousel
          title="Blockchain Development Technologies We Use"
          description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
          technologies={technologies}
        />
        <GetStarted
          reverse={true}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Guiding Your App Vision from Concept to Launch with Expert Consulting and Proven Strategies"
          description="Our expert consulting team provides end-to-end support, from initial concept through to successful launch, ensuring every aspect of your app development is meticulously handled."
          buttonText="Contact Us"
        />
        <OurServices />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default BlockchainDevelopment;
