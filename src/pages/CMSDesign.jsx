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
import Banner14 from "../components/Banner14";
import GetStarted from "../components/GetStarted";
import CardsSection from "../components/CardsSection";
import { FaCode, FaShoppingCart, FaWordpressSimple } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const CMSDesign = () => {
  const faqItems = [
    {
      question: "What is CMS design?",
      answer:
        "CMS design basically is the creation of content management systems that are user-friendly, scalable, and secure in order to manage websites, apps, and digital platforms efficiently.",
    },
    {
      question: "Why do I need a CMS for my website?",
      answer:
        "Content management systems make content creation much easier, taking less time and thus improving the general workflow of teams.",
    },
    {
      question: "Do you offer custom CMS designs?",
      answer:
        "Indeed, Capyngen crafts CMS solutions that are fully tailored to fit your business needs as well as the workflow and design requirements.",
    },
    {
      question: "Which CMS platforms do you work with?",
      answer:
        "We work on WordPress, Drupal, Joomla, Magento, and even fully custom-built CMS platforms to create the right fit for enterprises and startups.",
    },
    {
      question: "Is website performance better when CMS is designed properly?",
      answer:
        "Absolutely, optimized CMS design increases site speed, makes navigation more user and thus ensures hassle-free content updates and scalability.",
    },
    {
      question: "Are CMS and mobile applications integrated?",
      answer:
        "We definitely make the CMS platforms mobile-friendly and also integrate the apps for uninterrupted content management while on the move.",
    },
    {
      question: "Is CMS with Capyngen secure?",
      answer:
        "Yes, we pay special attention in access control data encryption as well as the fulfillment of security standards for enterprise CMS all over the world.",
    },
    {
      question: "Is it possible to manage multiple websites with one CMS?",
      answer:
        "Yes, the CMS we designed provides multi-site management and at the same time there is a central control from where the publishing of all web properties can be done.",
    },
    {
      question: "Do you offer CMS support and maintenance?",
      answer:
        "We maintain and service your CMS platform whenever necessary and also provide continuous support to it.",
    },
    {
      question: "How long does it take to build a CMS?",
      answer:
        "Usually, depending on factors like the complexity of the project and the level of customization, the time for CMS projects to be completely designed and rolled out is between 4 and 10 weeks.",
    },
    {
      question:
        "Is Capyngen able to connect 3rd-party applications with a CMS?",
      answer:
        "Yes, we don't just make CRM, marketing, and analytics tools work with your CMS but also e-commerce and other tools for maximum functionality and connection.",
    },
    {
      question: "Do you design CMS that are friendly to SEO?",
      answer:
        "Yes, our CMS are built in a way that they follow SEO best practices and thus enjoy fast indexing, better rankings, and more visibility.",
    },
    {
      question: "Is it possible for non-technical users to operate the CMS?",
      answer:
        "Definitely! Our CMS interfaces are super user-friendly thus content management is really a breeze for those who are non-technically inclined.",
    },
    {
      question: "Do you have any solutions for enterprise CMS?",
      answer:
        "Yes, Capyngen develops powerful and scalable CMS platforms for big organizations thus making sure that the system is always efficient and content is securely managed.",
    },
    {
      question: "Why choose Capyngen for CMS design?",
      answer:
        "With worldwide experience, dedicated designers and an emphasis on user-friendliness, Capyngen does not only provide content management solutions that are simple to use but also boost productivity.",
    },
  ];
  const solutionsData = [
    {
      title: "Innovation & Problem-Solving",
      desc: "Experienced in developing creative solutions to complex technical challenges, improving efficiency and performance across systems.",
    },
    {
      title: "CMS Design & Optimization",
      desc: "Skilled in designing and implementing user-friendly, scalable content management systems that enhance workflow efficiency and content delivery.",
    },
    {
      title: "Suitable Solutions",
      desc: "Custom CMS development that is in line with your company’s goals.",
    },
    {
      title: "Responsive & Scalable",
      desc: "Designs that are mobile-ready for any platform.",
    },
    {
      title: "Intelligent Content Management",
      desc: "Simplified operations and convenient content updates.",
    },
    {
      title: "Continuous Operation",
      desc: "Provision of all needs like training, updates, and continuous optimization.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Responsive CMS Design",
      description:
        "You can be confident that your CMS-based website will be great looking on all different types of devices. Our responsive CMS design service makes sure that the information is suitable for desktop computers, tablets, and smartphones.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "CMS UI/UX Design",
      description:
        "Get users hooked with simple browsing, quick loading, and non-disturbing transitions that are some features of our CMS UI/UX design services specifically made for franchise customer satisfaction.",
      icon: <FaWordpressSimple className="text-4xl text-white" />,
    },
    {
      title: "CMS Design and Creation",
      description:
        "Our CMS design and services are the ones that cover from CMS installation to the complete customization of the digital ecosystem.",
      icon: <FaShoppingCart className="text-4xl text-white" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Assess Requirements",
      description:
        "Find out how your business works and what you need from CMS",
    },
    {
      step: "Step 02",
      title: "UI/UX Planning & Platform Selection",
      description:
        "Create user-friendly and responsive interfaces. Decide on the best CMS (WordPress, Drupal, Joomla, etc.)",
    },
    {
      step: "Step 03",
      title: "Custom Design",
      description:
        "Create CMS templates and features that are specifically for your business.",
    },
    {
      step: "Step 04",
      title: "Integration",
      description: "Install the required plugins, APIs, and tools.",
    },
    {
      step: "Step 05",
      title: "Testing & Optimization",
      description: "Verify the speed, security, and performance.",
    },
    {
      step: "Step 06",
      title: "Launch & Support",
      description: "Support after the release and ongoing improvement.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          CMS Design | Custom CMS Web Design & UI/UX Services – Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen offers custom CMS design solutions that combine functionality and style. Get expert CMS web design and UI/UX services to manage content with ease."
        />
        <meta
          name="keywords"
          content="CMS Design | Custom CMS Web Design & UI/UX Services – Capyngen"
        />
      </Helmet>
      <div className="lg:sticky inset-0">
        <Banner14
          imageSrc={assets.cms1}
          imageAlt="Blockchain development illustration"
          title="Simplify Your Content Using a"
          highlighted="Professional CMS Design"
          subtitle=""
          description="Get the most out of your company using content management systems that are secure, intelligent, and scalable for the web, mobile, and enterprise applications."
          reverse={false}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Request a free consultation"
          description={[
            "Discuss with Capyngen’s CMS design specialists the design of content management systems that are safe, scalable, and user-friendly for your business.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Best CMS website Design services"
          description={[
            `Capyngen provides innovative CMS design services of the highest quality that enable companies to manage, grow, and simplify their online digital presence. Our skilled designers and developers create personalized CMS design solutions that are the perfect match for your distinctive needs — be it websites, apps, or enterprise platforms. Bearing in mind the responsive CMS design, user-friendly UI/UX, and smooth operation, we certify that your content management system will be of great performance and easy to use.`,
            `Experience the benefits of a great CMS design that will make your work simpler, better use of resources and create exciting digital experiences. In case you require services for CMS web design, CMS UI/UX design, or complete CMS development and design, Capyngen will stand by your side like a true partner.`,
          ]}
          image={assets.cms2}
          isHidden={true}
          background={assets.patternBg1}
        />
        <GetStarted
          reverse={true}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="CMS Website Design Solutions for Scalable & User-Friendly Digital Experiences"
          description={[
            `Custom CMS website design solutions from Capyngen allow you to change the way your business processes through digital experiences that are user-friendly. Our CMS professionals guarantee that the designs are extendable, mobile-friendly, and efficient for sustainable growth.`,
            <>
              <h2 className="text-4xl font-bold mb-5">Custom CMS Design</h2>
              <p>
                Capyngen’s custom CMS design solutions allow you to not only
                manage and update your website content with ease but also to
                expand your platform with your business and maintain the steady
                operation of your business while effectively meeting your
                business objectives.
              </p>
            </>,
          ]}
          image={assets.cms3}
        />
        <CardsSection
          heading="CMS Web Design Services"
          subheading="We offer CMS Web Design services which mainly focus on combining a clean layout, the latest user interfaces, and responsive features to keep your audience engaged and achieve fantastic outcomes."
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
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
          title="Experience a Demo"
          description={[
            "Feel our bespoke CMS solutions and understand how Capyngen can make your content flow, publishing, and team collaboration seamless.",
          ]}
          buttonText="Book a Demo"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="Our Working Process"
          desc="We follow a well-defined process to provide the top CMS design services to businesses:"
          steps={steps}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Get in touch with our CMS Designers"
          description={[
            "Meet our international CMS design team to develop platforms that are easy for enterprises and that help with content creation, management, and updates. ",
          ]}
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <BenefitsSection
          heading="Reasons to Choose Capyngen for CMS Design?"
          desc=""
          benefits={solutionsData}
          footerNote=""
          image={assets.cms4}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Do You Need the Best CMS Design Services for Your Company?"
          description={[
            "Get a team of professional CMS experts visiting your business to deliver clients tailored CMS web design solutions that are fast, secure, and engaging.",
          ]}
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default CMSDesign;
