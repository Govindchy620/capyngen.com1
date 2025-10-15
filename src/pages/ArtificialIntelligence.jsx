import React from "react";
import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import OurServices from "../components/OurServices";
import HowWeWork from "../components/HowWeWork";
import WhyChoose from "../components/WhyChoose";
import TechnologiesCarousel from "../components/TechnologiesCarousel";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import BenefitsSection from "../components/BenefitsSection";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import TopRatedCompany from "../components/TopRatedCompany";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import IndustryServices from "../components/IndustryServices";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSection from "../components/CardsSection";
import {
  FaAppStore,
  FaBuilding,
  FaHeartbeat,
  FaIndustry,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPuzzlePiece,
  FaRocket,
  FaShoppingCart,
  FaUniversity,
} from "react-icons/fa";
import Banner9 from "../components/Banner9";

const ArtificialIntelligence = () => {
  const faqItems = [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "Artificial Intelligence is the tech that will allow machines to carry out tasks that usually call for human intelligence like teaching, logical thinking, problem-solving, and decision-making.",
    },
    {
      question: "How can AI benefit my business?",
      answer:
        "AI helps companies execute tasks that can be automated, gather information in a way that makes it easier to draw patterns, make correct decisions based on the collected data, improve the relationship with customers through the provision of individual services and calculate expenses.",
    },
    {
      question: "What types of AI services do you offer?",
      answer:
        "These are AI-powered technological tools fashioned for the purpose of solving business problems, e.g., automation tools, predictive analytics, chatbots, and intelligent applications.",
    },
    {
      question:
        "Is it possible that AI would be integrated into those systems that already exist?",
      answer:
        "Yes, AI systems can be easily merged with your existing software, CRM, ERP, or website to upgrade without making big changes.",
    },
    {
      question: "Are you offering AI for mobile and web apps?",
      answer:
        "Yes, we build AI-driven mobile and web apps for custom user experiences.",
    },
    {
      question: "What industries can benefit from AI?",
      answer:
        "The use of AI spans different sectors e.g. healthcare, finance, retail, manufacturing, real estate, education, travel, and logistics where automation, personalization, and data analysis are some of the major fields of activity.",
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer:
        "The deadline will depend on the difficulty of the problem, the available data, and the customization that is required, but in most cases, AI solutions are ready within 3–6 months.",
    },
    {
      question: "Is it safe that AI is integrated with my data?",
      answer:
        "Yes, when accompanied with the correct protocols, AI systems do comply with all rigorous security standards to protect private data and also conform to regulations.",
    },
    {
      question: "Is it possible for AI to improve customer support?",
      answer:
        "Artificial intelligence enables custom-fitted services, chatbots that are accessible at all times, predictive suggestions, and smarter communication that attracts more user satisfaction.",
    },
    {
      question: "Do you provide AI consulting services?",
      answer:
        "Yes, Capyngen has a complete package of AI consulting that includes business requirement analysis, opportunity identification, development of the AI strategy that is most suitable, and so on.",
    },
    {
      question: "Can AI help with business analytics?",
      answer:
        "Definitely, AI-enabled analytics assists with providing actionable insights, forecasting trends, and making decisions all based on the data.",
    },
    {
      question: "Is AI suitable for small businesses?",
      answer:
        "Definitely, AI solutions can be a great help to small and medium businesses as they can make the companies more efficient by automating repetitive tasks and providing insights for marketing and data.",
    },
    {
      question: "Do you provide custom AI development?",
      answer:
        "Yes, Capyngen is the provider of AI development solutions that are adaptable to the requirements of startups as well as large corporations, the main purpose being to encourage their innovation and growth.",
    },
    {
      question: "Can AI help in marketing?",
      answer:
        "Yes, AI can help in understanding consumer's patterns, campaign optimization, writing of the content in a more personalized way and getting better that investment will result.",
    },
    {
      question: "Do you offer post-deployment AI support?",
      answer:
        "Sure, we offer continuous supervision, upkeep, and regular updates to make sure your AI system is as good as it was when it was first launched.",
    },
    {
      question:
        "What are the most popular Artificial Intelligence applications?",
      answer:
        "Among the most popular application areas of AI are chatbots, recommendation engines, image recognition, predictive maintenance, fraud detection, voice assistants, and automated data processing.",
    },
    {
      question: "How is machine learning necessary for AI solutions?",
      answer:
        "Machine learning is a fundamental part of AI, which makes the software easy for the system to learn from the data, spot the patterns, and make judgments that require less human intervention.",
    },
    {
      question: "What are the factors that make Capyngen's AI unique?",
      answer:
        "We employ not only cutting-edge AI technology but also business-driven tactics, thus, we offer custom development, smooth integration as well as constant support for eco-friendly growth.",
    },
    {
      question: "The way to business AI",
      answer:
        "Perhaps, you can first get a consultation with one of our experts. We will lay down your targets and find the best AI strategies to apply in a simple way through a clear implementation plan.",
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
      image: assets.ai2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Custom AI Development",
      description:
        "The development of AI applications is tailored to startups, enterprises, and other areas.",
      image: assets.ai3,
      cardBg: "bg-green-100",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Accelerate the data-driven decision-making process with the aid of AI-powered tools.",
      image: assets.ai4,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cost-Effective Automation",
      description:
        "Use AI software development to cut down on your operational costs.",
      image: assets.ai5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Scalable & Reliable",
      description:
        "Leverage strong artificial intelligence technology as a tool to boost your business.",
      image: assets.ai6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Future-Ready AI",
      description:
        "Integrate the future of AI with your operations and position yourself ahead of the pack.",
      image: assets.ai7,
      cardBg: "bg-red-100",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Startups & SMEs",
      description:
        "AI development that is compatible with the budget of early-stage businesses.",
      icon: <FaRocket className="text-4xl text-indigo-600" />,
    },
    {
      title: "Enterprises",
      description:
        "The launch and practical applications of AI technologies that significantly improve existing enterprise systems.",
      icon: <FaBuilding className="text-4xl text-indigo-600" />,
    },
    {
      title: "Healthcare",
      description:
        "The implementation of AI-powered solutions in diagnostics applications, patient management, and predictive analytics.",
      icon: <FaHeartbeat className="text-4xl text-indigo-600" />,
    },
    {
      title: "Retail & E-commerce",
      description:
        "AI for product recommendations, inventory management, and customer profiles that are unique to every customer.",
      icon: <FaShoppingCart className="text-4xl text-indigo-600" />,
    },
    {
      title: "Manufacturing",
      description:
        "Custom AI applications are designed for industries to not only optimize their production but also quality control.",
      icon: <FaIndustry className="text-4xl text-indigo-600" />,
    },
    {
      title: "Finance & Banking",
      description:
        "With the help of AI software solutions, automate processes, and detect fraud activities.",
      icon: <FaUniversity className="text-4xl text-indigo-600" />,
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
        "Make scalable AI systems accessible to users, with indefinite support and updates.",
    },
    {
      step: "Step 06",
      title: "Monitoring & Continuous Improvement",
      description:
        "Track performance and retrain or refine AI models as needed for long-term success.",
    },
  ];

  useSplitTextAnimation("h1");

  return (
    <div className="relative">
      <div className="md:sticky inset-0">
        <Banner9 />
      </div>
      <div className="relative z-10">
        <BenefitsSection
          heading="Our AI Services"
          benefits={benefitsData1}
          reverse={false}
          image={assets.ai1}
        />
        <CardsSectionImage
          heading="Benefits & Features"
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          hoverBg="hover:bg-gray-200"
          textSize="text-md"
        />
        <CardsSection
          heading="Industries We Serve"
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
          headColor="text-white"
          hoverBg="hover:bg-gray-700"
          textColor="text-white"
          textSize="text-md"
          height=""
        />
        <HowWeWork heading="How Our AI Process Works" steps={steps} />
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
          image={assets.ai8}
          background={assets.patternBg1}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[1/1]"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Transform Your Business with AI-Powered Solutions"
          buttonText="Book your AI Consultation"
          description={[
            "Implement custom artificial intelligence with the help of Capyngen, to increase your efficiency and sign the path of innovation.",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
