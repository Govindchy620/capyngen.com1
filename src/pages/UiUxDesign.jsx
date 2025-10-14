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
import Banner7 from "../components/Banner7";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import IndustryServices from "../components/IndustryServices";

const UiUxDesign = () => {
  const faqItems = [
    {
      question: "What is UI/UX design?",
      answer:
        "UI/UX design involves the creation of user interfaces and experiences that are not only visually appealing but also intuitive and easy to navigate.",
    },
    {
      question: "Why is UI/UX a matter of businesses?",
      answer:
        "Good UI/UX leads engagement, thus retaining the users and enhancing conversions.",
    },
    {
      question: "Are you offering mobile app UI/UX design services?",
      answer:
        "Definitely, we build attractive and responsive interfaces for iOS and Android apps.",
    },
    {
      question:
        "Is it possible for you to design websites that follow UI/UX best practices?",
      answer:
        "Indeed, our website UI/UX design services guarantee a smooth user journey and better user interaction.",
    },
    {
      question: "Do you deliver custom UI/UX design services in India?",
      answer:
        "Yes, we design personalized UI/UX solutions that are in line with your company requirements.",
    },
    {
      question: "What sorts of businesses are your clients?",
      answer:
        "Health care, banking, online shopping, education, travel, hotel business, SaaS, and others.",
    },
    {
      question: "What instruments do you use for UI/UX design?",
      answer:
        "Figma, Sketch, Adobe XD, InVision, Zeplin, Marvel, and Axure RP.",
    },
    {
      question: "Are UX audits and optimization services offered by you?",
      answer:
        "Sure. We check the interface for usability and engagement and then optimize it.",
    },
    {
      question:
        "Is it possible for Capyngen to improve accessibility in designs?",
      answer:
        "Definitely. We strive to make all digital products accessible and compliant with the standards.",
    },
    {
      question:
        "Do you give the user experience constant attention and improvement?",
      answer:
        "Yes. We analyze user habits and tweak the layout to the best solution.",
    },
    {
      question: "Are your UI/UX services affordable for startups?",
      answer:
        "Yes. We provide reasonably priced UI UX design services without slimming off quality.",
    },
    {
      question: "What is the time span for a UI/UX design project?",
      answer:
        "Schedules for projects are different but most will fall between 3–8 weeks of duration based on their complexity.",
    },
    {
      question: "Do you connect designs with development teams?",
      answer:
        "Yeah. We arrange for the easy design handoff along with detailed instructions for developers.",
    },
    {
      question: "Can you make interactive prototypes?",
      answer:
        "Most definitely. We design interactive prototypes that allow users to go through the flow before developers do the actual coding.",
    },
    {
      question: "How can I get started with Capyngen UI/UX design services?",
      answer:
        "The very first step is to really understand your need by booking a free consultation then custom design plan are delivered to you.",
    },
  ];
  const servicesData = [
    {
      image: assets.uiUx9,
      title: "Enhanced User Engagement & Retention",
      desc: "Develop user-focused and interactive experiences that attract users back, thereby increasing loyalty and long-lasting engagement.",
    },
    {
      image: assets.uiUx10,
      title: "Improved Conversion Rates",
      desc: "Wisely chosen layouts and workflows motivate visitors to take specific actions, boosting sales, sign-ups, and overall engagement.",
    },
    {
      image: assets.uiUx11,
      title: "Intuitive, Responsive, and Accessible Design",
      desc: "Deliver smooth experiences across all devices, ensuring usability for everyone—including users with disabilities.",
    },
    {
      image: assets.uiUx12,
      title: "Faster Load Times & Optimized Performance",
      desc: "Quick-loading apps with seamless navigation reduce bounce rates and enhance user satisfaction.",
    },
    {
      image: assets.uiUx13,
      title: "Scalable Architecture for Growth",
      desc: "Build platforms that can handle increased traffic, new features, and expansion without compromising performance or stability.",
    },
    {
      image: assets.uiUx14,
      title: "Strong Branding & Visual Identity",
      desc: "Design consistent and visually appealing interfaces that clearly communicate your brand values and leave a lasting impression.",
    },
    {
      image: assets.uiUx15,
      title: "Seamless Integration with Tools & Services",
      desc: "Connect your app with CRMs, payment gateways, analytics, and other third-party services to create a unified ecosystem.",
    },
    {
      image: assets.uiUx16,
      title: "Data-Driven Decision Making",
      desc: "Use analytics and user behavior insights to refine UI/UX, marketing strategies, and product offerings.",
    },
    {
      image: assets.uiUx17,
      title: "Security & Privacy Compliance",
      desc: "Protect user data and build trust by adhering to industry standards, regulations, and cybersecurity best practices.",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Gathering & User Research",
      description:
        "Define business goals, user needs, and lifestyle of the target audience to guide every design decision. By doing so, the end product will be in harmony with both the goals and the user's expectations.",
    },
    {
      step: "Step 02",
      title: "Information Architecture & Wireframes",
      description:
        "Arrange the information and depict the user-flows to have navigation easily understandable. Wireframes act as a user's cross-platform journey map ensuring that the movement is fast and logical.",
    },
    {
      step: "Step 03",
      title: "Visual & Interaction Design",
      description:
        "Creating the designs that are not only attractive but also easy to use significantly contributes to increased user engagement and guidance. The interaction part of the product is being made user-friendly by the company to improve the WebApp experience as a whole.",
    },
    {
      step: "Step 04",
      title: "Prototyping & User Testing",
      description:
        "Creating working models and asking real users for their opinions. The test is to check the correctness of the designer's decisions and to identify shortcomings that can be fixed before the coding stage.",
    },
    {
      step: "Step 05",
      title: "Design Handoff & Implementation",
      description:
        "Work and communicate effectively with developers to have an easy integration and successful implementation. The product will be the one that works in the same way as the design and looks exactly like the design.",
    },
    {
      step: "Step 06",
      title: "Continuous UX Improvement",
      description:
        "Observe users‘ behavior and suggestions for the iterative updating of the design. Regular improvements increase the site's usability, users' engagement and conversion rates with time.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "User Research & Analysis",
      description: "Get to know your users, their behaviors, and preferences.",
      image: assets.uiUx3,
      cardBg: "bg-blue-100",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Visualize app and website layouts before the coding process.",
      image: assets.uiUx4,
      cardBg: "bg-green-100",
    },
    {
      title: "Visual & Interaction Design",
      description:
        "Make the user interface visually attractive and interactive.",
      image: assets.uiUx5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Mobile & Web UI/UX Design",
      description:
        "Create apps and websites that are compatible with all devices and are user-friendly.",
      image: assets.uiUx6,
      cardBg: "bg-pink-100",
    },
    {
      title: "UX Audit & Optimization",
      description: "Locate the problem areas and improve usability.",
      image: assets.uiUx7,
      cardBg: "bg-purple-100",
    },
    {
      title: "Accessibility & Usability Design",
      description:
        "Designing digital products that are accessible and easy to use for the entire user base.",
      image: assets.uiUx8,
      cardBg: "bg-red-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="lg:sticky inset-0">
        <Banner7 />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative lg:z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Book a Consultation"
          description={["Discuss your project with our UI/UX experts."]}
          textSize="text-2xl"
          buttonText="Book a Consultation"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What Are UI/UX Design?"
          description={[
            `UI (User Interface) and UX (User Experience) design refer to the creation of visually attractive, user-friendly, and simple-to-navigate interfaces. The former revolves around the appearance and structure of applications or websites whereas the latter aims at giving a hassle-free and delightful experience.`,
            `One of the reasons why Capyngen is the most sought after company for UI UX design services in India is that their expert team delivers tailor-made solutions that make web and mobile platforms more user-friendly, engaging, and result-oriented.`,
          ]}
          image={assets.uiUx2}
          isHidden={true}
          imageHeight="aspect-[1/1]"
          background={assets.patternBg1}
        />
        <CardsSectionImage
          heading="UI/UX Design Services We Offer"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <p className="bg-gray-800 pb-5 text-white w-full text-2xl text-center">
          Our UI UX design services India are customized to support businesses
          in increasing their{" "}
          <span className="font-semibold text-blue-500">engagement</span>,{" "}
          <span className="font-semibold text-blue-500">satisfaction</span>, and{" "}
          <span className="font-semibold text-blue-500">retention</span>.
        </p>
        <HowWeWork heading="Our UI/UX Design Process" desc="" steps={steps} />
        <IndustryServices
          heading="Why use Capyngen for Mobile Application Development"
          subheading=""
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={servicesData}
        />
        <TopRatedCompany
          title="Why to Choose Capyngen for UI/UX Design"
          description={[
            <>
              <p className="mb-3 font-semibold">
                Importance of Cybersecurity in Modern Businesses
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    text: "Knowledge of mobile, and web UI UX design service",
                    color: "text-blue-500",
                  },
                  {
                    text: "Original designs centering on end-users for startups and companies with vast business volume",
                    color: "text-blue-500",
                  },
                  {
                    text: "Delivery anywhere in the world at prices that are attractive and solutions that can be scaled up or down",
                    color: "text-blue-500",
                  },
                  {
                    text: "Concentration on engagement, retention, and conversions",
                    color: "text-blue-500",
                  },
                  {
                    text: "Committed group with up-to-date equipment and design methods",
                    color: "text-blue-500",
                  },
                  {
                    text: "Reliability in the production of user-friendly digital interactions across the globe",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </>,
          ]}
          image={assets.uiUx18}
          isHidden={true}
          background={assets.patternBg1}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Explore Design Packages"
          description={["Choose the right plan for your business."]}
          textSize="text-2xl"
          buttonText="Explore"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default UiUxDesign;
