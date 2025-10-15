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
  FaCommentsDollar,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaHeadset,
  FaTools,
} from "react-icons/fa";
import CardsSectionImage from "../components/CardsSectionImage";
import { Helmet } from "react-helmet-async";

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
  const solutionsData = [
    {
      title: "E-commerce Consulting",
      desc: "Expert support helps businesses adopt more effective e-commerce website design services strategies, improve UX, and reach higher conversions with less effort.",
      icon: <FaCommentsDollar className="text-3xl text-blue-800" />,
    },
    {
      title: "E-commerce Security",
      desc: "Store data and user information are guarded with innovative security solutions, secure payment integrations, and constant monitoring that assures online transactions' safety.",
      icon: <FaShieldAlt className="text-3xl text-gray-800" />,
    },
    {
      title: "E-commerce Implementation",
      desc: "The installation of tailor-made e-commerce website design solutions, apps, and third-party services is carried out without hindering the existing platform's services and is aimed at increasing the functionality and user-friendliness of the platform.",
      icon: <FaCloudUploadAlt className="text-3xl text-blue-700" />,
    },
    {
      title: "E-commerce Help Desk Services",
      desc: "A support system which is always available for solving e-commerce website and mobile app design-related problems is the kind which ensures easy store operations as well as the satisfaction of customers.",
      icon: <FaHeadset className="text-3xl text-gray-900" />,
    },
    {
      title: "E-commerce Management & Support",
      desc: "Support and management continue to be available for e-commerce websites and apps so that the platforms are not only run efficiently and updated but also perform optimally all the time.",
      icon: <FaTools className="text-3xl text-blue-900" />,
    },
    {
      title: "E-commerce Migration",
      desc: "The transfer of e-commerce websites, apps, and databases to new platforms or upgraded systems has been made smooth and efficient with minimal service interruption and maximum reliability.",
      icon: <FaExchangeAlt className="text-3xl text-gray-700" />,
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
        "Fabricate working prototypes of e-commerce web design and e-commerce mobile app design to exhibit innovation and ease of use.",
    },
    {
      icon: <FaRocket className="w-10 h-10 text-blue-500" />,
      title: "Launch Strategy",
      description:
        "Utilize data-driven product release methods for maximum exposure, participation, and conversions through e-commerce website design services.",
    },
    {
      icon: <FaExchangeAlt className="w-10 h-10 text-blue-500" />,
      title: "Flexible models",
      description:
        "For scalable, cost-effective, and quality e-commerce design solutions, you can either go for the time and material or fixed price models.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "E-commerce Website Design",
      description:
        "The visually appealing e-commerce website design services are like fuel for an online business. Experts create responsive, user-friendly, and high-converting websites suitable for both startups and enterprises.",
      image: assets.eCommDesign4,
      cardBg: "bg-blue-100",
    },
    {
      title: "E-commerce UI Design",
      description:
        "See e-commerce design solutions by Capyngen at work and get a glimpse of potential user engagement. Stunning UI can augment online sales and improve customer retention.",
      image: assets.eCommDesign5,
      cardBg: "bg-green-100",
    },
    {
      title: "E-commerce App UI Design",
      description:
        "Smart e-commerce mobile app designs for Android and iOS ensure smooth, intuitive shopping experiences that increase engagement and customer loyalty.",
      image: assets.eCommDesign6,
      cardBg: "bg-yellow-100",
    },
    {
      title: "E-commerce Database Design",
      description:
        "Efficient and secure database design ensures scalability, smooth transactions, and reliable store performance, providing a seamless customer experience.",
      image: assets.eCommDesign7,
      cardBg: "bg-pink-100",
    },
    {
      title: "Custom E-commerce Solutions",
      description:
        "Tailored e-commerce solutions designed to fit your brand’s exact needs. Flexible, scalable, and optimized for conversions and business growth.",
      image: assets.eCommDesign8,
      cardBg: "bg-purple-100",
    },
    {
      title: "E-commerce Web Design Services",
      description:
        "A perfect blend of art and science—mobile-responsive, fast-loading, and optimized websites built for exceptional user experience and SEO.",
      image: assets.eCommDesign9,
      cardBg: "bg-red-100",
    },
    {
      title: "E-commerce Mobile App Design",
      description:
        "Cross-platform mobile app designs with features like push notifications, personalized dashboards, and secure payment gateways for better customer engagement.",
      image: assets.eCommDesign10,
      cardBg: "bg-blue-100",
    },
    {
      title: "Affordable E-commerce Website Design",
      description:
        "Budget-friendly yet premium solutions for startups and small businesses, delivering high-quality, scalable, and well-administered online stores.",
      image: assets.eCommDesign11,
      cardBg: "bg-green-100",
    },
    {
      title: "Enterprise E-commerce Solutions",
      description:
        "Comprehensive enterprise-grade e-commerce services, including analytics, performance optimization, and advanced UI/UX strategies for end-to-end digital success.",
      image: assets.eCommDesign12,
      cardBg: "bg-yellow-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          E-commerce Design | Website, App & UI Design Services – Capyngen
        </title>
        <meta
          name="description"
          content="Enhance your online store with Capyngen’s e-commerce design expertise. We offer custom website, app UI, and database design solutions to boost your sales."
        />
        <meta
          name="keywords"
          content="E-commerce Design | Website, App & UI Design Services – Capyngen"
        />
      </Helmet>
      <Banner8
        titleMain="Best E-Commerce Design"
        titlePrefix="Transform Your Digital Store with"
        titleSuffix=""
        description={`We design and develop innovative e-commerce websites and apps for companies all over the world. Our services include user-friendly e-commerce UI design, responsive e-commerce web design, and scalable e-commerce database design. Request a Free Consultation - Contact Capyngen's e-commerce design experts for transforming your online store or mobile app into a visually appealing, top-selling platform.`}
        imageSrc={assets.eCommDesign1}
        imageAlt="E-commerce Design Illustration"
        bgColor="bg-gray-900"
        iconColor="bg-blue-700"
        reverse={false}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Get a Free Consultation"
        description={[
          "Talk to Capyngen’s e-commerce design experts to create a visually stunning, high-converting online store or mobile app.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="E-Commerce Design Transforms Your Digital Store"
        description={[
          `A professionally designed store is the best way to let your products and services shine through. Simply put, the combination of e-commerce UI design, e-commerce app UI design and e-commerce database design is nothing short of a saga of putting forth visually stunning as well as high-functional user engagement platforms that convert sales and grow business. One of the best things about your next adventure would have been possibly partnering up with an already established e-commerce website designing company.`,
        ]}
        image={assets.eCommDesign2}
        isHidden={true}
        imageHeight="aspect-[1/1]"
        background={assets.patternBg1}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Choose Capyngen  to Get Best E-commerce Design"
        description={[
          "By using e-commerce design ideas that mirror brand goals accurately, you are able to transform online businesses practically. Working on your mobile app UI with Capyngen will definitely result in great designs; furthermore, they are also going to be involved in everything from concept to finalization along with you.",
        ]}
        image={assets.eCommDesign3}
      />
      <CardsSectionImage
        heading="Designing E-commerce Solutions That Drive Sales"
        subheading="Achieve major success with e-commerce design services that are both accurate and creative. The team is one of the top e-commerce website designing companies, designs, the startups' and enterprise businesses' scalable, and aesthetically pleasing platforms, thereby attracting both engagement, and revenue growth."
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
        title="Empowering Growth Through E-commerce Design Partnerships"
        description={[
          "The top e-commerce design experts are the core of a network, which, as a whole, collaborates on, and brings up, your online business. You get the innovative solutions that allow increased sales, lead to improved user experience, and give you the digital marketplace competitive advantage, delivered by the team of experts made up of UI/UX specialists and mobile app designers.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />

      <WhyChoose
        heading="E-commerce Solutions by Expert Designers"
        intro="Custom e-commerce website design solutions are accompanied with market validation, user testing, scalable architecture, launch strategy, and customer feedback integration. Make your online store or app available for testing by investors and refine it so as to be a high-performing conversion-driven e-commerce platform."
        features={features}
      />

      <BenefitsSection
        heading="Flexible engagement models"
        desc={[
          "Flexible engagement models are not a one-size-fits-all solution but rather be adjusted according to the specific needs of each e-commerce project. These models guarantee smooth partnership, low costs, and timely delivery, thus becoming the e-commerce website design solution that tailors the clients' needs and gives the highest quality results for online stores and mobile apps.",
          <>
            <h3 className="text-4xl text-white font-semibold">
              Worldwide acclaimed by businesses
            </h3>
          </>,
          "Solutions for e-commerce design and development have been the power source behind green brands ranging from startups to large global enterprises turning digital outlets and their mobile apps to reign over the online competitive market by engaging target audiences, sales promotions, and growth accelerator strategies.",
        ]}
        benefits={solutionsData}
      />

      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Contact Our Designers"
        description={[
          "Connect with our global e-commerce design team to build custom web and mobile platforms that increase conversions and drive growth.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default EcommerceDesign;
