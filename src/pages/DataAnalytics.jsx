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
import Banner5 from "../components/Banner5";
import CardsSection from "../components/CardsSection";
import {
  FaTachometerAlt,
  FaUsersCog,
  FaChartPie,
  FaCloud,
  FaDatabase,
  FaBrain,
  FaTools,
  FaLayerGroup,
  FaChartBar,
} from "react-icons/fa";
import CardsSectionSlider from "../components/CardsSectionSlider";
import GetStarted from "../components/GetStarted";

const DataAnalytics = () => {
  const faqItems = [
    {
      question: "What is Data Analytics?",
      answer:
        "Data Analytics is the practice of examining data in its native format to recognize trends, insights, and other characteristics useful for decision making in business.",
    },
    {
      question: "Why is Data Analytics important for businesses?",
      answer:
        "Just informative decision making by the organization is the output of data analytics which in turn enriches the organization process besides enhancing it further, identifying new opportunities and also taking care of the customers.",
    },
    {
      question: "What types of Data Analytics services do you offer?",
      answer:
        "We provide the major analytics services with the addition of descriptive, diagnostic, predictive and prescriptive analytics coupled with cloud-based and on-demand analytics services.",
    },
    {
      question: "Can small businesses benefit from Data Analytics?",
      answer:
        "Surely, even small businesses will be able to take advantage of data analytics to optimize their operations, improve their marketing strategies and get a leg up.",
    },
    {
      question: "What industries can use your Data Analytics services?",
      answer:
        "Almost any industry that needs to make sense out of their data can benefit from the Data Analytics services such as finance, health, retail, manufacturing, logistics, education, etc.",
    },
    {
      question: "Do you provide cloud-based Data Analytics services?",
      answer:
        "Yes, we do offer secured and scalable cloud-based analytics solutions that provide real-time data processing and enable you to access the insights.",
    },
    {
      question: "What is the role of AI in Data Analytics?",
      answer:
        "Artificial Intelligence augments analytics by presenting predictive insights, automation, pattern recognition, and personalized suggestions.",
    },
    {
      question: "Can you integrate Data Analytics into existing systems?",
      answer:
        "The different systems which are related to business like Enterprise Resource Planning, Customer Relationship Management software, Business Intelligence, and other platforms can be connected to our solutions for analytics.",
    },
    {
      question: "Do you offer real-time analytics??",
      answer:
        "Ours is a real-time solution that comes with dashboards and reporting facilities to let you keep an eye on your business anytime, anywhere.",
    },
    {
      question: "How can Data Analytics improve marketing strategies?",
      answer:
        "The use of analytics facilitates the understanding of consumer buying behavior, audience segmentation, campaign optimization, and efficient monitoring of the return on investment.",
    },
    {
      question: "Do you provide custom Data Analytics solutions?",
      answer:
        "Of course, we are the ones who customize analytics according to your industry, business needs, and data infrastructure.",
    },
    {
      question: "Can Data Analytics help in risk management?",
      answer:
        "Of course, risk prediction and even risk prescriptions that are enabled by analytics can assist in accomplishing risk identifications, preventing the occurrence of fraud, and also facilitation of decision-making.",
    },
    {
      question: "Do you offer Data Analytics consulting services?",
      answer:
        "Yes, Our Professionals serve as a guide to businesses in formulating strategy, choosing the right technology, executing, and improving analytics processes.",
    },
    {
      question: "How long does it take to implement Data Analytics solutions?",
      answer:
        "The period of implementation depends on the complexity of the data, project scope, and customization, and it mostly takes weeks to months.",
    },
    {
      question:
        "Do you provide post-deployment support for analytics solutions?",
      answer:
        "We do public and private monitoring, maintenance, and updates that guarantee prime performance of analytics systems that we sell.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Customer-Facing Analytics Platforms",
      description:
        "Interactive dashboards, real-time reporting, and insights specially designed for strategic decision-making are just some of the features you can offer to your business stakeholders.",
      icon: <FaTachometerAlt className="text-4xl" />,
    },
    {
      title: "Admin & Management Panels",
      description:
        "You can control every detail of data sources, integration pipelines, and analytics configurations, including the optimized workflows and the reliable data governance point.",
      icon: <FaUsersCog className="text-4xl" />,
    },
    {
      title: "Custom Analytics Services",
      description:
        "While doing the predictive part in a more advanced manner with AI, eventually business will be driven to the best scenarios for which, mixed with your ideas, we will provide custom analytics services as per your requirement.",
      icon: <FaChartPie className="text-4xl" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Cloud-Based Analytics Services",
      description:
        "The cloud transition of your analytics will keep you from being limited by a lack of capacity and will allow you to have access to your business intelligence securely and at any time, from any place, in most cases by just using your smart device and the internet.",
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Big Data Processing",
      description:
        "When data grows to enormous sizes, we handle it highly efficiently by essentially changing the raw part into the usable one which could be done by complex algorithms.",
      icon: <FaDatabase className="text-4xl" />,
    },
    {
      title: "Predictive & Prescriptive Analytics",
      description:
        "Being able to decide correctly ahead of time and thereby anticipate the future´s demands, will be enabled by the usage of the most advanced types of AI and ML models that can, without interruption, merge with your data pipelines.",
      icon: <FaBrain className="text-4xl" />,
    },
    {
      title: "Custom Data Analytics Solutions",
      description:
        "Specific designs that precisely match the needs of your field, including dashboards, KPIs, and reports that are most important to you.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Business Intelligence Integration",
      description:
        "One simple and efficient platform for combining data from diverse origins, thus, facilitating decision-making and the better running of operations.",
      icon: <FaLayerGroup className="text-4xl" />,
    },
    {
      title: "Real-Time Data Visualization",
      description:
        "Interactive dashboards and visualization tools that transform raw data into meaningful insights, enabling quicker and more informed decisions.",
      icon: <FaChartBar className="text-4xl" />,
    },
  ];
  const cardsSectionSliderData1 = [
    {
      title: "Retail & E-Commerce",
      desc: "Customer behavioral analysis, inventory management, sales analysis.",
      image: assets.eCommerceSolution,
      textColor: "text-white",
    },
    {
      title: "Healthcare",
      desc: "Patient data analytics, healthcare process optimization, predictive health analytics.",
      image: assets.websiteDesign,
      textColor: "text-white",
    },
    {
      title: "Finance & Banking",
      desc: "Financial risk control, fraud detection, and investment advisory.",
      image: assets.customAiSolution,
      textColor: "text-white",
    },
    {
      title: "Education",
      desc: "Analysis of student engagement and academic output, enrollment monitoring, etc.",
      image: assets.customAiSolution,
      textColor: "text-white",
    },
    {
      title: "Manufacturing",
      desc: "Complete supply chain visibility, production process streamlining, predictive maintenance.",
      image: assets.customAiSolution,
      textColor: "text-white",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Gathering",
      description:
        "Know how your business excels, what data sources are there, and what KPIs need to be met.",
    },
    {
      step: "Step 02",
      title: "Data Collection & Integration",
      description:
        "Bring together data from numerous platforms, and make sure it is accurate, is reliable, and is complete.",
    },
    {
      step: "Step 03",
      title: "Analytics & Insights Generation",
      description:
        "Introduce dashboards, prediction models, and up-to-the-minute reporting as decision-makers require.",
    },
    {
      step: "Step 04",
      title: "Testing & Quality Assurance",
      description:
        "Data visualization accuracy, data solution’s standard and_speed, checked here Deployment & Support",
    },
    {
      step: "Step 05",
      title: "Deployment & Support",
      description:
        "Offer cloud data analytics services on the market, along with routine maintenance, upgrades, and feature additions.",
    },
    {
      step: "Step 06",
      title: "Continuous Improvement & Optimization",
      description:
        "Regularly analyze performance metrics to identify opportunities for refining analytics models and processes, ensuring your data solutions evolve with your business needs.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <Banner5
          title={
            <>
              Make Better Decisions with{" "}
              <span className="text-cyan-400">Data & Analytics Solutions</span>
            </>
          }
          description="The potential of data to change your business is at your fingertips. Capyngen provides complete data analytics services and cloud solutions that enable organizations to make quicker, smarter, and data-driven decisions. The professional team of us will guide any company ranging from a startup to an enterprise in uncovering the valuable insights that will accelerate their business growth, improve the utilization of the supply chain, and increase the benefits to the highest extent of their business."
          primaryBtnText="Get started"
          primaryBtnLink="#"
          image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <CardsSection
          heading="Our Data & Analytics Deliverables"
          subheading="Capyngen’s data analytics services are designed to help you simplify your data processes, uncover actionable insights, and ultimately, make informed business decisions. The solutions we offer are not only scalable and customizable, but they are also cloud-ready."
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gray-800 hover:bg-gray-900 transition-all duration-400 ease-in-out hover:shadow-2xl hover:shadow-gray-700/70 hover:-translate-y-2"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height="h-78"
        />
        <CardsSection
          heading="Data & Analytics Services We Offer"
          subheading=""
          services={cardsSectionData2}
          sectionBg="bg-blue-900"
          headColor="text-white"
          cardBg="bg-blue-900 border border-white transition-all duration-400"
          hoverBg=" hover:border-black"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height="h-86"
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

        <TopRatedCompany
          title="Why Choose Capyngen as Your Data & Analytics Partner"
          description={[
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
                {[
                  {
                    title: "Expert Team",
                    text: "Certified in cloud data analytics services, BI, and predictive modeling.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Tailored Solutions",
                    text: "We build data analytics programs that attract your industry.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Flexible & Problem-free",
                    text: "Solutions made to cope with increased datasets and changing business requirements.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Data-Driven Decisions",
                    text: "Convert dull data into the user-friendly forms that encourage growth and save time.",
                    color: "text-blue-500",
                  },
                  {
                    title: "India's Premier Analytics Company",
                    text: "Honored for providing excellent data analytics services in a variety of fields.",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    <strong className={`${color} drop-shadow-md`}>
                      {title}
                    </strong>{" "}
                    – {text}
                  </li>
                ))}
              </ul>
            </>,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[1/1]"
        />

        <HowWeWork heading="How Our AI Process Works" desc="" steps={steps} />
        <TopRatedCompany
          reverse={true}
          title="Advanced Technologies We Integrate"
          description={[
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
                {[
                  {
                    title: "AI & Machine Learning",
                    text: "For forecasting and recommending actions through analytics.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Cloud Computing",
                    text: "Client-friendly, secure, and adaptable cloud-based business intelligence products.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Data Visualization Tools",
                    text: "Interactive reporting with Power BI, Tableau, and in-house implementations.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Big Data Frameworks",
                    text: "Technologies such as Hadoop, Spark, and scalable data pipelines.",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    <strong className={`${color} drop-shadow-md`}>
                      {title}
                    </strong>{" "}
                    – {text}
                  </li>
                ))}
              </ul>
            </>,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[1/1]"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Start Your Data-Driven Transformation Today"
          buttonText="Get Started"
          description={[
            "Associate with Capyngen to avail top-grade data analytics solutions, which not only optimize your business operations but also open a wide variety of growth opportunities. Just ask for a no-charge demonstration and know how with our tailor-made data analytics.",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />

        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default DataAnalytics;
