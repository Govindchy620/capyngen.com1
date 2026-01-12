import React from "react";
import { assets } from "../assets/assets";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import TopRatedCompany from "../components/TopRatedCompany";
import GetStarted from "../components/GetStarted";
import {
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import TechnologiesCarousel from "../components/TechnologiesCarousel";
import Banner3 from "../components/Banner3";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/custom-ai-solutions#webpage",
  url: "https://www.capyngen.com/custom-ai-solutions",
  name: "Best Custom AI Solutions Company in Gurgaon | Capyngen",
  description:
    "Capyngen is the best custom AI solutions company in Gurgaon, delivering scalable AI solutions that automate processes, boost efficiency, and drive business growth.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/customAi2--gOEWS8G.png",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/custom-ai-solutions#service",
  name: "Best Custom AI Solutions Company in Gurgaon | Capyngen",
  description:
    "Capyngen provides custom AI solutions that help businesses automate processes, enhance efficiency, and drive sustainable growth with scalable artificial intelligence solutions.",
  url: "https://www.capyngen.com/custom-ai-solutions",
  serviceType: "Custom AI Solutions",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/customAi2--gOEWS8G.png",
    caption: "Custom AI Solutions by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/custom-ai-solutions#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the custom AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom AI solutions are specifically tailored to meet the unique needs of each business. They help integrate and optimize artificial intelligence applications across various business processes.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen provide AI consulting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides expert AI consulting services, assessing business needs and recommending the most effective AI strategies and solutions for implementation.",
      },
    },
    {
      "@type": "Question",
      name: "Is it in your power to launch enterprise AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen delivers enterprise-grade AI solutions for large-scale industrial and technological operations across the globe.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of sectors do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen serves a wide range of sectors including finance, healthcare, retail, logistics, telecommunications, and other large enterprises worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "Are you involved in AI software development projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen is a leader in AI software development, creating intelligent, user-centric systems that enhance business efficiency and innovation.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen capable of developing AI-powered apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen develops AI-powered mobile and web applications that leverage advanced algorithms to deliver smart, efficient, and adaptive performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide predictive analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, predictive analytics is one of our core AI services, enabling businesses to anticipate trends, forecast outcomes, and make data-driven decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI be utilized to automate my business processes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our AI-driven automation tools streamline repetitive workflows, enhance productivity, and reduce operational costs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design and develop NLP and chatbot models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen develops NLP and chatbot models that understand and process human language, providing intelligent, conversational experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of custom AI development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of custom AI development depends on project complexity, scalability, and features. For an accurate quote, please contact Capyngen’s AI consulting team.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The development timeline depends on project scope, but typically ranges from 12 to 24 weeks for enterprise-grade AI solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available for ongoing AI support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides continuous support, maintenance, and updates for deployed AI systems to ensure long-term success and stability.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen integrate AI with existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen offers seamless AI integration services for ERP, CRM, and other enterprise platforms to enhance overall functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Are you the provider of computer vision solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen offers advanced computer vision and image recognition services designed for intelligent automation and smart analytics.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen a worldwide AI development company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen is a global AI development company offering AI consulting and development services to clients across multiple countries and industries.",
      },
    },
  ],
};

const CustomAiSolution = () => {
  const faqItems = [
    {
      question: "What are the custom AI solutions?",
      answer:
        "Custom AI solutions are tailored to the specific needs of your business and are designed to facilitate and optimize the application of AI in the company.",
    },
    {
      question: "Does Capyngen provide AI consulting services?",
      answer:
        "Under no circumstances, without any doubt, yes we do. A part of our service is to do a comprehensive assessment of your business needs and suggest the best AI solutions.",
    },
    {
      question: "Is it in your power to launch enterprise AI solutions?",
      answer:
        "Definitely, Capyngen is the supplier of enterprise AI solutions for heavy-duty electronic machinery and industrial units across the globe.",
    },
    {
      question: "What kind of sectors do you specialize in?",
      answer:
        "We take care of the needs of such industries as finance, healthcare, retail, logistics, telecommunications, and many more big companies globally.",
    },
    {
      question: "Are you involved in AI software development projects?",
      answer:
        "Of course, we are the front-runners in AI software development and we create the whole AI system with the user in mind.",
    },
    {
      question: "Is Capyngen capable of developing AI-powered apps?",
      answer:
        "Indubitably, our AI app development solutions can generate and maintain various AI-driven mobile and web applications.",
    },
    {
      question: "Do you provide predictive analytics?",
      answer:
        "Indeed, predictive analytics is one of the core custom AI solutions that enable the business to foresee the market trend and minimize the risks.",
    },
    {
      question: "Can AI be utilized to automate my business processes?",
      answer:
        "Yes, that is exactly what our AI-driven automation tools do, namely, the simplification of routine workflows and the raising of productivity levels.",
    },
    {
      question: "Do you design and develop NLP and chatbot models?",
      answer:
        "Indeed, the technology behind NLP is the root of all intelligent chatbots, it also finds the tone of voice in texts, and processes text.",
    },
    {
      question: "What is the cost of custom AI development?",
      answer:
        "Costs are variable including but not limited to complexity, scalability. To get the cost of custom AI development, you will have to get in touch with us to request a quote.",
    },
    {
      question: "How long does it take to develop AI solutions?",
      answer:
        "The timeline for any given project is highly dependent on the size of that project; usually, it is between 12 and 24 weeks for a solution to be considered enterprise-grade.",
    },
    {
      question: "Are you available for the ongoing AI support?",
      answer:
        "Definitely, we do. We provide enterprise AI solutions along with the deployment, monitoring, and continuous upgrading of such solutions to our clients.",
    },
    {
      question: "Can Capyngen integrate AI with existing systems?",
      answer:
        "Yes, the ERP, CRM, and other platform integration is just another facet of our AI services.",
    },
    {
      question: "Are you the provider of computer vision solutions?",
      answer:
        "Yes, computer vision and image recognition are among the services to be requested for smart analytics and automation.",
    },
    {
      question: "Is Capyngen a worldwide AI development company?",
      answer:
        "Sure thing! We are a custom AI solutions company that offers consulting services as well as solutions to clients all over the world.",
    },
  ];

  const technologies = [
    {
      name: "Python",
      logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg",
    },
    {
      name: "PyTorch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png",
    },
    {
      name: "JavaScript",
      logo: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo-1024x640.png",
    },
    {
      name: "Node.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "React",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "FastAPI",
      logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
    },
    {
      name: "Docker",
      logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1234px-Kubernetes_logo_without_workmark.svg.png?20190926210707",
    },
    {
      name: "AWS",
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg",
    },
    {
      name: "Azure",
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure.svg",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    },
    { name: "Redis", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
    {
      name: "OpenCV",
      logo: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png",
    },
    {
      name: "Scikit-learn",
      logo: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png",
    },
    {
      name: "Jupyter",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1280px-Jupyter_logo.svg.png?20190118024747",
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Making Decisions Based on Data",
      description:
        "With AI, even raw data can be turned into valuable insights for decision-making.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Automation & Productivity",
      description:
        "The use of AI-powered automation can help simplify the execution of repetitive works within various departments of organizations.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Customer Experience Improvement",
      description:
        "By tailoring a client's needs and using your customer base's behavior to forecast future needs greatly the loyalty will be enhanced.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Cost Optimization",
      description:
        "Drive the use of AI-based systems to increase the utilization rate of your resources and decrease your operation costs.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Risk Management",
      description:
        "AI can provide a forecast of potential threats and trends, which will allow a proactive administration of the situation.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Enterprise AI Solutions That Are Scalable",
      description:
        "Solutions by far have been able to extend the reach as far as your business needs all over the world.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Machine Learning Solutions",
      description:
        "You can easily use machine learning technology to collect data, recognize patterns and make true predictions in order to improve your company's performance.",
      image: assets.customAi2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "You can implement an AI-powered chatbot to make communication between the customer and your company easier and quicker. Besides this, there is sentiment analysis and intelligent text processing.",
      image: assets.customAi3,
      cardBg: "bg-pink-100",
    },
    {
      title: "Predictive Analytics",
      description:
        "Take the lead by turning your data into insightful forecasts, risk management plans, and making strategic decisions.",
      image: assets.customAi4,
      cardBg: "bg-green-100",
    },
    {
      title: "AI-Powered Automation",
      description:
        "The workflow that is normally done in a slow and complicated way can be automated by the help of AI, and this will allow you to have efficiency increased, productivity boosted and in general a good working environment.",
      image: assets.customAi5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Computer Vision & Image Recognition",
      description:
        "Smart technologies behind the scenes can simply take photos of us, find our faces, and even help us analyze what’s in the picture.",
      image: assets.customAi6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Recommendation & Personalization Engines",
      description:
        "Help the companies to keep the customers coming back by providing them with the offer which is specifically suitable for them and their likes thus making the engagement strong and fruitful.",
      image: assets.customAi7,
      cardBg: "bg-red-100",
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis & Consultation",
      description:
        "Get to know your business goals, difficulties and AI necessities.",
    },
    {
      step: "Step 02",
      title: "Strategy & Solution Design",
      description:
        "Develop an AI plan properly structured for your company's goals and objectives.",
    },
    {
      step: "Step 03",
      title: "Data Collection & Preparation",
      description:
        "Start collecting, cleaning, and preparing the datasets that you want to use in order to train your AI models.",
    },
    {
      step: "Step 04",
      title: "AI Model Development",
      description:
        "Create, train, and cast off machine learning or AI algorithms for greater exactness.",
    },
    {
      step: "Step 05",
      title: "Integration & Testing",
      description:
        "Effortlessly insert AI solutions into old systems and carry out various tests.",
    },
    {
      step: "Step 06",
      title: "Deployment, Support & Continuous Improvement",
      description:
        "Introduce, watch over, and upgrade AI models without stopping for a long time.",
    },
  ];

  useSplitTextAnimation("h1");

  return (
    <div className="relative">
      <Helmet>
        <title>Best Custom AI Solutions Company in Gurgaon | Capyngen</title>
        <meta
          name="description"
          content="Capyngen is the best custom AI solutions company in Gurgaon, delivering scalable AI solutions that automate processes, boost efficiency, and drive business growth."
        />
        <meta
          name="keywords"
          content="Best custom AI solutions Company in Gurgaon, custom AI solutions"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="lg:sticky inset-0">
        <Banner3
          title="Instant Best custom AI solutions Company in Gurgaon– Get India’s #1 Trusted custom AI solutions"
          subtitle="Tap into better decision-making, streamline your business activities, and foster innovation by using Capyngen’s bespoke AI solutions designed to meet your business requirements globally."
          backgroundImage={assets.customAi1}
          overlayColor="bg-black"
          diagonalShape="polygon(0 0, 100% 0, 100% 40%, 0 100%)"
        />
      </div>
      <div className="relative z-10">
        <GetStarted
          reverse={true}
          backgroundColor="bg-gradient-to-br from-gray-900 to-gray-600"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          sectionBg="bg-black"
          title="Best Custom AI Solutions for Businesses"
          description={[
            <span>
              <Link to={"/"}>Capyngen</Link> is a global AI software company
              that creates AI-powered solutions for businesses that want to
              automate their workflows, make decisions based on data, and
              discover new business potentials. We design AI solutions that fit
              any business, from startups to multinational corporations, to make
              a quantifiable difference.
            </span>,
          ]}
          image={assets.customAiSolution}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Get in touch with the best AI development company for a free consultation and discover the possible applications of enterprise AI, machine learning, and custom AI services in your business.",
          ]}
          textSize="text-2xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSection
          heading="Why Pick Unique AI Solutions for Your Enterprise"
          subheading={
            <>
              <p>
                By investing in bespoke AI solutions, your company will be able
                to outrun the competition by getting and maintaining operational
                efficiency as well as providing one-to-one customer experiences.
              </p>
              <h3 className="text-5xl font-semibold mt-8 my-4">
                Advantages of AI Adoption in Business:
              </h3>
            </>
          }
          services={cardsSectionData2}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-br from-[#000]/90 to-gray-800/90 hover:bg-gradient-to-tl hover:-translate-y-1 transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-white/30"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          textSize="text-md"
          height="h-72"
        />
        <FullSizeImageSection
          backgroundImage={assets.customAiFullSize}
          title="Empower your business with AI"
          description="Use artificial intelligence as a business tool to simplify, speed up, and revolutionize your company."
          buttonText="Explore AI Solutions"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSectionImage
          heading="Our Custom AI Services Tailored for Your Needs"
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          hoverBg="hover:bg-gray-200"
          textSize="text-md"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Obtain a personalized AI solution from Capyngen"
          description={[
            "Turn on the power of intelligent decisions, simplifying the execution of your operations and accelerating business expansion with the use of custom-made AI services. ",
          ]}
          textSize="text-xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork heading="How We Develop Custom AI Solutions" steps={steps} />
        <FullSizeImageSection
          backgroundImage={assets.customAiFullSize2}
          title="Build intelligent solutions for smarter growth"
          description="Our team builds bespoke AI models that help the client to use less resources and make better decisions."
          buttonText="Build With Us"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <TechnologiesCarousel
          title="Custom AI Solution Technologies We Use"
          description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
          technologies={technologies}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Make your business the beneficiary of Capyngen’s custom AI solutions "
          description={[
            "increase effectiveness, deepen your understanding, and carry out AI-powered automation that matches your requirements.",
          ]}
          textSize="text-xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default CustomAiSolution;
