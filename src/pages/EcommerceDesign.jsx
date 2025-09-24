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
import { LifeBuoy, Sparkles, Users } from "lucide-react";
import Banner8 from "../components/Banner8";
import GetStarted from "../components/GetStarted";
import CardsSection from "../components/CardsSection";
import {
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";

const EcommerceDesign = () => {
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
      title: "Ecommerce Consulting",
      desc: "Expert support helps businesses adopt more effective ecommerce website design services strategies, improve UX, and reach higher conversions with less effort.",
    },
    {
      title: "Ecommerce Security",
      desc: "Store data and user information are guarded with innovative security solutions, secure payment integrations, and constant monitoring that assures online transactions' safety.",
    },
    {
      title: "Ecommerce Implementation",
      desc: "The installation of tailor-made e-commerce website design solutions, apps, and third-party services is carried out without hindering the existing platform's services and is aimed at increasing the functionality and user-friendliness of the platform.",
    },
    {
      title: "Ecommerce Help Desk Services",
      desc: "A support system which is always available for solving e-commerce website and mobile app design-related problems is the kind which ensures easy store operations as well as the satisfaction of customers.",
    },
    {
      title: "Ecommerce Management & Support",
      desc: "Support and management continue to be available for ecommerce websites and apps so that the platforms are not only run efficiently and updated but also perform optimally all the time.",
    },
    {
      title: "Ecommerce Migration",
      desc: "The transfer of ecommerce websites, apps, and databases to new platforms or upgraded systems has been made smooth and efficient with minimal service interruption and maximum reliability.",
    },
  ];
  const servicesData = [
    {
      title: "Custom Enterprise Web Portals",
      desc: "Our E-Commerce Design company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced E-Commerce Design services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
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
      desc: "Utilize our E-Commerce Design solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];
  const cardsSectionData = [
    {
      title: "Ecommerce Website Design",
      description:
        "The visually attractive ecommerce website design services can power up an online business. The experts of ecommerce website designing craft responsive, user-friendly, and high-converting websites that are equally suitable for startups and enterprises.Ecommerce UI Design",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Ecommerce App UI Design",
      description:
        "Be reachable by an app instead of a website if you have a smart ecommerce mobile app design. Beautiful Android and iOS apps go with seamless ecommerce app UI design and together they elevate the engagement and loyalty.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Ecommerce Database Design",
      description:
        "Help an online store to operate at its best using secure ecommerce database design. The scalable, efficient, and reliable databases support smooth transactions, and data management.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Custom Ecommerce Solutions",
      description:
        "Custom e-commerce website design solutions that are specifically tailored to a brand's requirements are the perfect fit. The platforms that are designed are not only flexible and scalable but also designed for growth and conversions.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Ecommerce Web Design Services",
      description:
        "Ecommerce web design services are a perfect match of creativity and technology. The websites are all mobile-responsive, fast, and optimized for user experience and search engines.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Ecommerce Mobile App Design",
      description:
        "Increase the number of people who can find your store by mobile app design. The cross-platform apps offer advanced features such as push notifications, personalized dashboards, and seamless payment gateways that allow for easy integration with your store.",
      icon: <FaTasks className="text-4xl" />,
    },
    {
      title: "Affordable Ecommerce Website Design",
      description:
        "Reasonable but professional, affordable ecommerce website design services provide customers with high-quality solutions. With the right plan and good management, startups and small businesses can build powerful online stores that fit their budgets.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Enterprise Ecommerce Solutions",
      description:
        "Give enterprises the best service of e-commerce design for businesses. The end-to-end services of e-commerce website design come with the incorporation of analytics, performance optimization, and advanced UI/UX strategies.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Industries Transformed with Ecommerce Design Solutions",
      description:
        "Customized ecommerce design services empower businesses from all corners of the globe to create cutting-edge web and mobile platforms that foster engagement, increase sales, and surpass customer expectations.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];
  const features = [
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Proof & MVP",
      description:
        "Create and test Minimum Viable Products for ideas validation purposes through custom e-commerce website design solutions to target concepts and attract investors.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Prototype Development",
      description:
        "Fabricate working prototypes of ecommerce web design and ecommerce mobile app design to exhibit innovation and ease of use.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Launch Strategy",
      description:
        "Utilize data-driven product release methods for maximum exposure, participation, and conversions through ecommerce website design services.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Flexible models",
      description:
        "For scalable, cost-effective, and quality ecommerce design solutions, you can either go for the time and material or fixed price models.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Banner8 />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="Partner with a Company for Successful Ecommerce!"
        description={[
          "Revolutionize online businesses by using ecommerce design ideas that are the perfect reflection of brand goals. YouTube will be creating an excellent UI mobile app and web design if you share your concept with them, along with other things such as making the concept flawless.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />

      <CardsSection
        heading="Designing Ecommerce Solutions That Drive Sales"
        subheading="Winning big with ecommerce design services that are precise and creative. As the top ecommerce website designing company, the team creates the startups' and enterprise businesses' scalable and aesthetically pleasing platforms to attract engagement and revenue growth."
        services={cardsSectionData}
        sectionBg="bg-gray-900"
        cardBg="border-2 border-white shadow-2xl shadow-gray-800"
        hoverBg=""
        height="h-96"
        textColor="text-white"
        hoverTextColor=""
        headColor="text-white"
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="Empowering Growth Through Ecommerce Design Partnerships"
        description={[
          "Top ecommerce design professionals constitute a network that collaborates on elevating your online business. The team of experts comprising UI/UX specialists and mobile app designers delivers you innovative solutions that lead to increased sales, improved user experience, and a competitive edge in digital marketplace.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />

      <WhyChoose
        heading="Ecommerce Solutions, Investor-Ready, by Designers That Are Experts"
        intro="Custom e-commerce website design solutions are accompanied with market validation, user testing, scalable architecture, launch strategy, and customer feedback integration. Make your online store or app available for testing by investors and refine it so as to be a high-performing conversion-driven ecommerce platform."
        features={features}
      />

      <BenefitsSection
        heading="Flexible engagement models"
        desc={[
          "Flexible engagement models are not a one-size-fits-all solution but rather be adjusted according to the specific needs of each ecommerce project. These models guarantee smooth partnership, low costs, and timely delivery, thus becoming the e-commerce website design solution that tailors the clients' needs and gives the highest quality results for online stores and mobile apps.",
          "Solutions for ecommerce design and development have been the power source behind green brands ranging from startups to large global enterprises turning digital outlets and their mobile apps to reign over the online competitive market by engaging target audiences, sales promotions, and growth accelerator strategies.",
        ]}
        benefits={solutionsData}
      />
      <TechnologiesCarousel
        title="E-Commerce Design Technologies We Use"
        description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
        technologies={technologies}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="Get in touch with one of the most reputable Ecommerce Design Professionals right now!"
        description={[
          "Willing to take your online business to the next level? Get in touch with a premier ecommerce design consultant to benefit from his personal expertise and guidance on tailor-made e-commerce website design solutions, mobile apps, and web platforms. The high-end and conversion-driven online store of your dreams can be a reality as early as today!",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />
      <OurServices />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default EcommerceDesign;
