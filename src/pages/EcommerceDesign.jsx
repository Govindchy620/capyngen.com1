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
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaDatabase,
  FaPuzzlePiece,
  FaAppStore,
  FaMoneyBillWave,
  FaBuilding,
  FaIndustry,
  FaCheckCircle,
  FaDraftingCompass,
  FaRocket,
  FaExchangeAlt,
} from "react-icons/fa";

const EcommerceDesign = () => {
  const faqItems = [
    {
      question: "What is e-commerce design?",
      answer:
        "E-commerce design revolves around creating a beautiful, easy to navigate, and responsive online store as a way to improve the buying experience.",
    },
    {
      question: "Why is e-commerce design important?",
      answer:
        "A good design will, among other things, increase customer engagement, provide higher conversions, decrease bounce rates, and also create a strong brand.",
    },
    {
      question: "Can you create custom e-commerce designs?",
      answer:
        "Yes, our team builds tailor-made online stores that are specifically designed to reflect both your brand and business ambitions.",
    },
    {
      question: "Which platforms do you design for?",
      answer:
        "We are creating the designs on platforms like Shopify, Magento, WooCommerce, OpenCart, PrestaShop, and custom CMS.",
    },
    {
      question: "Do you provide mobile-friendly designs?",
      answer:
        "Definitely, every one of our e-commerce designs is responsive and fully optimized for cell phones and tablets.",
    },
    {
      question: "Can you redesign an existing e-commerce store?",
      answer:
        "Of course, we provide the services related to the redesign for issues like basic features, improvement of looks, and user experience in general.",
    },
    {
      question: "Do you integrate UI/UX best practices?",
      answer:
        "Definitely, our designs are in accordance with industry standards that ensure users have an easy time navigating, are accessible as well as providing a smooth shopping journey.",
    },
    {
      question: "Can you create designs for international stores?",
      answer:
        "Exactly, we offer solutions for e-commerce that are both multilingual and multi-currency considering the global audience.",
    },
    {
      question: "How do you ensure fast-loading websites?",
      answer:
        "We do a good job of making sure that the images, scripts, and layouts that are used are working well and have almost no loading time.",
    },
    {
      question: "Do you provide design mockups before development?",
      answer:
        "Definitely, we give wireframes and prototypes for the client's approval before starting full-scale development.",
    },
    {
      question: "Can your designs improve conversion rates?",
      answer:
        "The answer is Yes. Along with other best practices, we are focusing on product layout, call-to-action placement, and checkout optimization.",
    },
    {
      question: "Are SEO considerations included in e-commerce design?",
      answer:
        "Yes, the designs we make have structures that are friendly to SEO, and also include on-page optimization, that gives visibility in the search engines.",
    },
    {
      question: "Do you integrate payment gateways in your designs?",
      answer:
        "Definitely, our designs are allowing a smooth integration with multiple and secure payment gateways.",
    },
    {
      question: "Can your designs handle large product catalogs?",
      answer:
        "Yes, we craft e-commerce websites in such a way that they are scalable and thus capable of holding thousands of products without any difficulties.",
    },
    {
      question: "Do you provide post-launch support for your designs?",
      answer:
        "Of course, we provide the service that includes maintenance, updates, and the continuous optimization of designs so that your shop remains current.",
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
  const cardsSectionData = [
    {
      title: "Ecommerce Website Design",
      description:
        "The visually attractive ecommerce website design services can power up an online business. The experts of ecommerce website designing craft responsive, user-friendly, and high-converting websites that are equally suitable for startups and enterprises.Ecommerce UI Design",
      icon: <FaPaintBrush className="text-4xl text-white" />,
    },
    {
      title: "Ecommerce App UI Design",
      description:
        "Be reachable by an app instead of a website if you have a smart ecommerce mobile app design. Beautiful Android and iOS apps go with seamless ecommerce app UI design and together they elevate the engagement and loyalty.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Ecommerce Database Design",
      description:
        "Help an online store to operate at its best using secure ecommerce database design. The scalable, efficient, and reliable databases support smooth transactions, and data management.",
      icon: <FaDatabase className="text-4xl text-white" />,
    },
    {
      title: "Custom Ecommerce Solutions",
      description:
        "Custom e-commerce website design solutions that are specifically tailored to a brand's requirements are the perfect fit. The platforms that are designed are not only flexible and scalable but also designed for growth and conversions.",
      icon: <FaPuzzlePiece className="text-4xl text-white" />,
    },
    {
      title: "Ecommerce Web Design Services",
      description:
        "Ecommerce web design services are a perfect match of creativity and technology. The websites are all mobile-responsive, fast, and optimized for user experience and search engines.",
      icon: <FaLaptopCode className="text-4xl text-white" />,
    },
    {
      title: "Ecommerce Mobile App Design",
      description:
        "Increase the number of people who can find your store by mobile app design. The cross-platform apps offer advanced features such as push notifications, personalized dashboards, and seamless payment gateways that allow for easy integration with your store.",
      icon: <FaAppStore className="text-4xl text-white" />,
    },
    {
      title: "Affordable Ecommerce Website Design",
      description:
        "Reasonable but professional, affordable ecommerce website design services provide customers with high-quality solutions. With the right plan and good management, startups and small businesses can build powerful online stores that fit their budgets.",
      icon: <FaMoneyBillWave className="text-4xl text-white" />,
    },
    {
      title: "Enterprise Ecommerce Solutions",
      description:
        "Give enterprises the best service of e-commerce design for businesses. The end-to-end services of e-commerce website design come with the incorporation of analytics, performance optimization, and advanced UI/UX strategies.",
      icon: <FaBuilding className="text-4xl text-white" />,
    },
    {
      title: "Industries Transformed with Ecommerce Design Solutions",
      description:
        "Customized ecommerce design services empower businesses from all corners of the globe to create cutting-edge web and mobile platforms that foster engagement, increase sales, and surpass customer expectations.",
      icon: <FaIndustry className="text-4xl text-white" />,
    },
  ];
  const features = [
    {
      icon: <FaCheckCircle className="w-10 h-10 text-blue-500" />,
      title: "Proof & MVP",
      description:
        "Create and test Minimum Viable Products for ideas validation purposes through custom e-commerce website design solutions to target concepts and attract investors.",
    },
    {
      icon: <FaDraftingCompass className="w-10 h-10 text-blue-500" />,
      title: "Prototype Development",
      description:
        "Fabricate working prototypes of ecommerce web design and ecommerce mobile app design to exhibit innovation and ease of use.",
    },
    {
      icon: <FaRocket className="w-10 h-10 text-blue-500" />,
      title: "Launch Strategy",
      description:
        "Utilize data-driven product release methods for maximum exposure, participation, and conversions through ecommerce website design services.",
    },
    {
      icon: <FaExchangeAlt className="w-10 h-10 text-blue-500" />,
      title: "Flexible models",
      description:
        "For scalable, cost-effective, and quality ecommerce design solutions, you can either go for the time and material or fixed price models.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Banner8
        titleMain="Ecommerce Design"
        titlePrefix="Professional"
        titleSuffix="Transforms Your Digital Store"
        description={`A professionally designed store is the best way to let your products
                and services shine through. In short, the process of ecommerce UI
                design, ecommerce app UI design, and ecommerce database design turns
                out to be a story of creating eye-popping as well as high-functional
                platforms that create engagement, convert sales and turn the
                business into rake revenue. The best part of your next endeavor
                could be teaming up with an established ecommerce website designing
                company.`}
        imageSrc={assets.eCommerceDesign}
        imageAlt="Ecommerce Design Illustration"
        bgColor="bg-gray-900"
        iconColor="bg-blue-700"
        reverse={false}
      />
      <GetStarted
        reverse={false}
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
        reverse={false}
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
        reverse={false}
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
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default EcommerceDesign;
