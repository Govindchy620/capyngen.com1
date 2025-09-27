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
import Banner9 from "../components/Banner9";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSection from "../components/CardsSection";
import {
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
  FaProjectDiagram,
} from "react-icons/fa";
import GetStarted from "../components/GetStarted";

const ArtificialIntelligence = () => {
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
  const benefitsData1 = [
    {
      title: "AI Consulting Services",
      desc: "Provide strategic direction to make use of AI technologies within your firm.",
    },
    {
      title: "AI Software Development",
      desc: "Creating AI software for enterprises and startups as needed.",
    },
    {
      title: "Artificial Intelligence Applications",
      desc: "Building AI-powered, industry-specific apps for the sole purpose of process automation.",
    },
    {
      title: "Machine Learning Solutions",
      desc: "Predictive analytics to facilitate data-driven decision-making through AI development services.",
    },
    {
      title: "Natural Language Processing",
      desc: "User interaction via conversation AI and the formation of easily accessible chatbots.",
    },
    {
      title: "Computer Vision Solutions",
      desc: "AI products for image recognition, detection, and automation are provided by us.",
    },
    {
      title: "Robotic Process Automation",
      desc: "Through an AI-driven process, one can streamline the organization of work and further enhance productivity.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Boost Productivity",
      description:
        "Save time with the help of AI solutions while also removing the possibility of errors.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },

    {
      title: "Custom AI Development",
      description:
        "The development of AI applications is tailored to startups, enterprises, and other areas.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Accelerate the data-driven decision-making process with the aid of AI-powered tools.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cost-Effective Automation",
      description:
        "Use AI software development to cut down on your operational costs.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "Scalable & Reliable",
      description:
        "Leverage strong artificial intelligence technology as a tool to boost your business.",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "Future-Ready AI",
      description:
        "Integrate the future of AI with your operations and position yourself ahead of the pack.",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Startups & SMEs",
      description:
        "AI development that is compatible with the budget of early-stage businesses.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Enterprises",
      description:
        "The launch and practical applications of AI technologies that significantly improve existing enterprise systems.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Healthcare",
      description:
        "The implementation of AI-powered solutions in diagnostics applications, patient management, and predictive analytics.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Retail & E-commerce",
      description:
        "AI for product recommendations, inventory management, and customer profiles that are unique to every customer.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Manufacturing",
      description:
        "Custom AI applications are designed for industries to not only optimize their production but also quality control.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Finance & Banking",
      description:
        "With the help of AI software solutions, automate processes, and detect fraud activities.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Requirement Analysis",
      description:
        "Get a clear understanding of business needs, the nature of the target audience, and the objectives.",
    },
    {
      step: "Step 02",
      title: "Strategy & Roadmap",
      description:
        "Formulate AI plans to come alongside the challenges faced by the respective industry.",
    },
    {
      step: "Step 03",
      title: "Development & Integration",
      description:
        "Manufacture AI software that meets a particular need and connect them with your current programs and operations.",
    },
    {
      step: "Step 04",
      title: "Testing & Optimization",
      description:
        "Verify AI solutions for effectiveness, precision, and security.",
    },
    {
      step: "Step 05",
      title: "Deployment & Support",
      description:
        "Make scalable AI systems accessible to the users, with an indefinite amount of support and up-gradation.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="md:sticky inset-0">
        <Banner9 />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <BenefitsSection
          heading="Our AI Services"
          desc=""
          benefits={benefitsData1}
          reverse={false}
          image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          footerNote=""
        />
        <CardsSectionImage
          heading="Benefits & Features"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <CardsSection
          heading="Industries We Serve"
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height=""
        />
        <HowWeWork heading="How Our AI Process Works" desc="" steps={steps} />
        <TechnologiesCarousel
          title="Artificial Intelligence Technologies We Use"
          description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
          technologies={technologies}
        />
        <TopRatedCompany
          title="Why Choose Capyngen for AI Services"
          description={[
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
                {[
                  {
                    title: "Proven Expertise",
                    text: "We have the track record of providing top artificial intelligence solutions for businesses all over the globe.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Custom Solutions",
                    text: "The AI which we build for your business will be targeted specifically on your needs.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Affordable & Scalable",
                    text: "We deliver services in AI for startups as well as big companies without making any compromise on quality.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Dedicated Support",
                    text: "We provide continuous guidance and AI consulting services to you for the achievement of your goals.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Future-Ready AI",
                    text: "Use the technology of artificial intelligence to always be a step ahead of the market trends.",
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
          reverse={true}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Transform Your Business with AI-Powered Solutions"
          buttonText="Book you AI Consultation"
          description={[
            "Implement custom artificial intelligence with the help of Capyngen, to increase your efficiency and sign the path of innovation.",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
