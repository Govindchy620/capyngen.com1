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
} from "react-icons/fa";
import AppTypesSection from "../components/AppTypesSection";
import CardsSectionImage from "../components/CardsSectionImage";

const Consulting = () => {
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
      desc: "Deliver interactive learning experiences with educational websites designed by our Consulting company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with visually compelling portfolio websites crafted by our Consulting services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Websites",
      desc: "Promote deals effectively with custom offer websites built by our Consulting company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Websites",
      desc: "Create dynamic listing websites with advanced search functionalities and filters developed by our website development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Websites",
      desc: "Build informative wiki websites with collaborative tools and easy content management using our comprehensive Consulting solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Drive sales with robust e-commerce websites designed by our Consulting company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Websites",
      desc: "Support your cause with engaging non-profit websites, developed by our Consulting services, that enhance donor engagement and effectively communicate your mission.",
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
      desc: "Our Consulting company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced Consulting services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
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
      desc: "Utilize our Consulting solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];
  const cardsSectionGridData1 = [
    {
      title: "Business Growth Solutions",
      description:
        "Devised the tactics that opened up new revenue streams and improved SMEs' market share.",
      icon: <Smartphone className="w-6 h-6 text-orange-500" />,
      iconBg: "bg-orange-100",
    },
    {
      title: "Digital Transformation Programs",
      description:
        "Facilitated the transition of enterprises into cloud, AI, and automation by providing digital solutions for greater efficiency.",
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Startup Advisory",
      description:
        "Assisted more than 100 startups with IT and business consulting services catering to the creation of sustainable business models.",
      icon: <Store className="w-6 h-6 text-lime-500" />,
      iconBg: "bg-lime-100",
    },
    {
      title: "End-To-End Consulting Services",
      description:
        "Highly qualified consultants make successful projects for IT, business, and digital consulting that lead your organization to the top of the market. Co-ordinate with the best enterprise consulting company to access the hidden leagues of yours.",
      icon: <ShoppingCart className="w-6 h-6 text-red-500" />,
      iconBg: "bg-red-100",
    },
    {
      title: "IT Consulting Services",
      description:
        "Capyngen offers tailored IT consulting services that will revamp your IT infrastructure, make your process more efficient, and ensure your digital resilience.",
      icon: <Smartphone className="w-6 h-6 text-orange-500" />,
      iconBg: "bg-orange-100",
    },
    {
      title: "Business Consulting Solutions",
      description:
        "We offer the business consulting services at affordable rates that are primarily focused on optimizing the performance and fostering growth.",
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Digital Consulting Services",
      description:
        "Our digital consultants make use of the latest technology like AI to help business in transition to the digital world which is constantly changing.",
      icon: <Store className="w-6 h-6 text-lime-500" />,
      iconBg: "bg-lime-100",
    },
    {
      title: "Enterprise Consulting Company",
      description:
        "We lead companies to the right track of achieving efficiency, conforming to the regulations, and developing plans for the future.",
      icon: <ShoppingCart className="w-6 h-6 text-red-500" />,
      iconBg: "bg-red-100",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Strategy Consulting",
      description:
        "Such services include high-level business planning, competitive analysis, and revenue growth modeling.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Management Consulting",
      description:
        "Assistance with organizational restructuring, efficiency optimization, and leadership support.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "IT & Technology Consulting",
      description:
        "Digital transformation, IT roadmap, and infrastructure modernization are the main areas of work.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Startup Consulting",
      description:
        "Complete support for new businesses starting from ideation until execution.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Marketing Consulting",
      description:
        "Specialized in planning, executing, and optimizing marketing strategies that boost visibility, lead generation, and customer engagement in competitive industries.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Financial Advisory Consulting",
      description:
        "Provides expert financial planning, budgeting, risk management, and investment strategies tailored to support business sustainability and expansion.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
  ];
  const appTypes = [
    {
      title: "Results Are The Top Priority For Us",
      description:
        "Data-synergized-we energize our consulting strategies with insights, analytics, and tried-and-true methods that guarantee results.",
      icon: <FaApple className="text-4xl text-white" />,
    },
    {
      title: "Custom-tailored solutions",
      description:
        "Business consulting solutions are developed on a case-by-case basis.",
      icon: <FaAndroid className="text-4xl text-white" />,
    },
    {
      title: "Usable as Illustrative Models",
      description:
        "From startups to corporations, we strive to create customizable and adaptable models that demonstrate the advantages of our strategies.",
      icon: <FaVrCardboard className="text-4xl text-white" />,
    },
    {
      title: "Expert Support Round The Clock",
      description:
        "They will never fail to assist you in case of any doubts, queries, or difficulties in the situation you find yourself in.",
      icon: <FaNetworkWired className="text-4xl text-white" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "AI & Analytics Consulting",
      description:
        "Making enterprise AI-ready with predictive models and AI experimentation strategies.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },

    {
      title: "Cloud & IT Infrastructure",
      description:
        "We focus on industrial upgrading of cloud computing, data center, and storage to make your IT solution more scalable, flexible, and reliable.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Digital Business Models",
      description:
        "The program’s goal is to get traditional businesses to switch over to modern digital-first models by providing the needed help.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Gathering",
      description:
        "Identify areas for improvement, challenges, and missed opportunities in the business.",
    },
    {
      step: "Step 02",
      title: "Research & Strategy Work",
      description:
        "Build a prescriptive model that reflects the industrial norm.",
    },
    {
      step: "Step 03",
      title: "Execution & Implementation",
      description:
        "The point where you get to show off your business and even further your consulting services.",
    },
    {
      step: "Step 04",
      title: "Testing",
      description:
        "Testing and measuring strategies have a positive impact on revenue streams, brand, and so on.",
    },
    {
      step: "Step 05",
      title: "Post-Consulting Support",
      description:
        "The support provided after the completion of consulting continues indefinitely.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <Banner10 />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <TopRatedCompany
          title="Why Capyngen for Consulting Services?"
          description={[
            `Recent reports from Statista indicate that the global consulting services market is expected to go beyond $1.3 trillion by 2030 with a consistent CAGR growth. Such increase is fueled by the need for digital transformation, IT consulting, and business process optimization, which in turn points to the necessity of trustworthy consulting firms in India as well as worldwide.`,
            <p className="text-xl">
              Choosing <strong>Capyngen</strong> for consulting services means
              gaining a partner that delivers advanced generative solutions,
              leveraging cutting-edge technology and a customer-centric approach
              to help clients future-proof their strategies and operations.
            </p>,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />
        <GetStarted
          reverse={true}
          backgroundColor="bg-gray-800"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Consulting Services Company Accredited By"
          description="Capyngen has been recognized and rewarded not only by Clutch, GoodFirms, and Upwork but also by other leading industry platforms for our IT consulting services and business consulting solutions."
          buttonText="Contact Us"
          listItems={[
            "70+ Reviews on Clutch",
            "Top Rated” Title on Upwork with 100% Job Success",
            "GoodFirms: Top IT & Business Consulting Services Company",
            "Bark: Professional Digital Consulting Agency",
          ]}
        />
        <GetStarted
          reverse={true}
          backgroundColor="bg-blue-800"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Top Consulting Company in India & USA"
          description="Capyngen’s consulting professionals have a comprehensive background with IT, business, and digital consulting services. We develop inspiring and scalable solutions using the latest methodologies which are beneficial to all over in a competitive landscape. Our consulting portfolio is our client’s testimony to us."
          buttonText="Contact Us"
          image={assets.capyngen3d}
        />
        <CardsSectionGrid
          heading="Our Consulting Portfolio"
          description={[
            "Capyngen's consulting portfolio showcases a robust suite of solutions designed to empower businesses at every stage of their growth journey. Their Business Growth Solutions have enabled SMEs to unlock new revenue streams and enhance their market positioning. With a specialty in Digital Transformation, Capyngen seamlessly guides enterprises into the realms of cloud, AI, and automation—dramatically boosting operational efficiency and digital innovation. Their Startup Advisory services have already assisted over a hundred startups in establishing resilient, scalable business models through specialized IT and business consulting.",
          ]}
          services={cardsSectionGridData1}
          reverse
        />
        <CardsSection
          heading="Explore Our Consulting Models"
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-br from-[#000]/90 to-gray-800/90 hover:bg-gradient-to-tl hover:-translate-y-1 transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-white/30"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height="h-64"
        />
        <AppTypesSection
          heading="What Makes Our Consulting Services Stand Out"
          subheading1=""
          subheading2=""
          desc=""
          cardHeight="h-70"
          appTypes={appTypes}
        />
        <GetStarted
          reverse={true}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Want to Grow With the Best Consulting Company?"
          description={[
            "Think of Capyngen as your reliable consulting companion. We have an extensive experience-based team that delivers affordable IT consulting services for small businesses in India and enterprise solutions for clients anywhere in the world.",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSectionImage
          heading="The Latest Technologies We Embrace While Offering Consulting Services"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <HowWeWork
          heading="The Process of Custom Consulting"
          desc="Capyngen has a specific client-centric consulting process that considers your preferences and requirements:"
          steps={steps}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="We Are the Best Consulting Company For a Reason"
          description={[
            "Our ambition is not to settle for the basics. Capyngen is an IT consulting digital solutions company that has the expertise to deliver the highest quality. Our small business consulting services in India are just a start, as we have the customer satisfaction globe covering our client reach.",
          ]}
          image={assets.getStarted}
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default Consulting;
