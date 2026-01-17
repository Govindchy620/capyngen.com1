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
        "Custom AI solutions are specific to the business requirements and are aimed at aiding and streamlining the use of AI within the organization.",
    },
    {
      question: "Is Capyngen an AI consulting services company?",
      answer:
        "In no case, without any doubt, yes, we do. One of the services that we offer is the thorough evaluation of your business requirements and recommending the best custom AI solutions in India.",
    },
    {
      question: "Do you have the ability to deploy enterprise AI solutions?",
      answer:
        "Indeed, Capyngen is the AI solutions provider of enterprise AI solutions to heavy-duty electronic machines and industrial units worldwide.",
    },
    {
      question: "Which types of industries are you specialized in?",
      answer:
        "We cater to the needs of other industries, including finance, health care, retail, logistics, telecommunication and numerous other large companies in the world.",
    },
    {
      question: "Do you work on AI software development services projects?",
      answer:
        "Naturally, we are the leaders in AI software development services, and we build the entire AI system taking into consideration the user.",
    },
    {
      question:
        "Does Capyngen have the capabilities of creating AI-based applications?",
      answer:
        "Undoubtedly, our AI app development solutions would be able to develop and support different AI-driven mobile and web applications.",
    },
    {
      question: "Do you offer predictive analytics?",
      answer:
        "In fact, the ability of the business to predict the market trend and mitigate the risks is one of the essential custom AI solutions, which is called predictive analytics.",
    },
    {
      question: "Is it possible to use AI to automate my business processes?",
      answer:
        "It is precisely what our AI automation solutions are capable of, that is, the streamlining of regular workflows and an increase in the level of productivity.",
    },
    {
      question: "Do you create and develop NLP and chatbot models?",
      answer:
        "All intelligent chatbots are indeed the child of the technology behind NLP, which determines the tone of voice in the texts and processes the text.",
    },
    {
      question:
        "How much does it cost to custom AI development company services?",
      answer:
        "Variable costs consist of complexity, scalability, and other costs. You will need to contact us to request a quote to obtain the price of a custom AI development company.",
    },
    {
      question: "What is the time to come up with AI solutions?",
      answer:
        "The timeframe of any particular project is very reliant on the size of the project; traditionally, there are 12 to 24 weeks before a solution can be regarded as enterprise-grade.",
    },
    {
      question: "Do you have time in terms of the current AI support?",
      answer:
        "Definitely, we do. Our business is to offer enterprises AI solutions as well as their implementation, monitoring, and ongoing upgrades.",
    },
    {
      question:
        "Does Capyngen have the option of integrating AI into the already existing systems?",
      answer:
        "The integration of the ERP, CRM, and other platforms is, of course, another aspect of our AI solution development.",
    },
    {
      question: "Do you provide solutions for computer vision?",
      answer:
        "Yes, one of the services that are going to be ordered in smart analytics and automation is computer vision and image recognition services.",
    },
    {
      question: "Does Capyngen operate globally as an AI development company?",
      answer:
        "Sure thing! We are a custom AI solutions company that provides services to clients around the globe, both in consulting and solutions.",
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
      title: "Usage of Data to make decisions",
      description:
        "Even raw data may be transformed into significant information to make a decision with the help of AI.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Automation & Productivity",
      description:
        "The applications of AI automation solutions can facilitate the process of simplifying the implementation of repetitive work in other departments of organizations.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Customer Experience Enhancement",
      description:
        "The loyalty will be significantly increased by adapting to the needs of a client, and the behavior of your customer base will help to build a prediction of the needs that a client may have.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Cost Optimization",
      description:
        "Encourage the adoption of AI-based systems technologies in order to maximize the use of your assets and reduce the number of operations.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Risk Management",
      description:
        "The forecast of possible threats and trends can be given with the help of AI that will enable an active management of the situation.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Scalable AI Solutions within the Enterprise",
      description:
        "Solutions that are offered by AI solutions provider have to this day been able to reach farther as far as your business requires it to all across the globe.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Machine Learning Solutions",
      description:
        "With machine learning technology, you can conveniently gather information, identify trends and make real-life forecasts as a way of enhancing the performance of your company. custom machine learning solutions offered by custom AI development company.",
      image: assets.customAi2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "One of the things you can do is to install an AI-powered chatbot that will simplify and speed up the communication between the customer and your company. In addition to this, there is the intelligent text processing and sentiment analysis.",
      image: assets.customAi3,
      cardBg: "bg-pink-100",
    },
    {
      title: "Predictive Analytics",
      description:
        "Those who lead the pack should transform their data into insightful forecasts, risk management plans and make strategic decisions.",
      image: assets.customAi4,
      cardBg: "bg-green-100",
    },
    {
      title: "AI-Powered Automation",
      description:
        "The processes that are usually performed in a slow and complex manner can be automated with the assistance of custom AI automation and this will enable you to have efficiency increase, productivity increase and generally a good working environment.",
      image: assets.customAi5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Computer Vision & Image Recognition",
      description:
        "The technologies that work behind the scenes can merely capture photos of us, identify our faces and even assist us to analyze what is in the picture.",
      image: assets.customAi6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Recommendation/Personalization Engines",
      description:
        "Get the companies to retain the customers by offering them the offer that is particularly fitting to them and their preferences hence making the interaction effective and successful.",
      image: assets.customAi7,
      cardBg: "bg-red-100",
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis & Consultation",
      description:
        "Be familiar with business objectives, challenges and AI requirements.",
    },
    {
      step: "Step 02",
      title: "Strategy & Solution Design",
      description:
        "Design an AI strategy that is adequately aligned with the goals and objectives of your firm.",
    },
    {
      step: "Step 03",
      title: "Data Collection & Preparation",
      description:
        "Begin gathering, washing, and processing the data sets that you desire to use to train your machine learning models.",
    },
    {
      step: "Step 04",
      title: "AI Model Development",
      description:
        "Design, educate, and discard the machine learning or AI algorithms to achieve a higher level of precision.",
    },
    {
      step: "Step 05",
      title: "Integration & Testing",
      description:
        "Easily add AI solutions to the existing systems and run several tests. Combine with a custom Android app development or iOS software development company.",
    },
    {
      step: "Step 06",
      title: "Deployment, Support & Continuous Improvement",
      description:
        "Train, monitor, and continuously enhance AI models, not least in the short term.",
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
          subtitle="Enhance your decision-making process, simplify your business operations, and be innovative using custom AI solutions tailored to the needs of your business across the world, by Capyngen."
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
            "Capyngen is a worldwide AI development company that develops AI-powered solutions for businesses wishing to automate their operations, make decisions based on facts and identify unexplored business opportunities. We create custom AI solutions for business that are applicable to all sizes of business, whether a startup or a multinational company, to make a measurable change.",
          ]}
          image={assets.customAiSolution}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Contact the best custom AI solutions Company in Gurgaon and receive a free consultation and find out how your enterprise AI solutions, machine learning, and custom AI services can be applied in the business.",
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
                Investing in custom AI solutions will help your company to
                surpass the competition, as it will not only achieve operational
                efficiency and customer experiences on a one-on-one level, but
                will also be able to retain them.
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
          description="Artificial intelligence is used as a business tool to streamline, accelerate, and transform the company."
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
            "Activate the strength of intuitive choices, which will make it easier to conduct your business and speed up the growth of the business using custom-made AI services.",
          ]}
          textSize="text-xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="How We Develop Custom AI Solutions"
          desc={
            <>
              Our powerful and quality development procedure produces powerful,
              mistake-free and performance AI software solutions. Every phase in
              our team is carefully implemented to achieve the highest degree of
              efficiency and business influence. AI solution development by the
              experts of AI software development follows modern best practices
              similar to those used by the{" "}
              <a href="https://www.capyngen.com/devops-solutions">
                Best devops solutions provider
              </a>
              , ensuring reliability, observability, and continuous delivery.
            </>
          }
          steps={steps}
        />
        <FullSizeImageSection
          backgroundImage={assets.customAiFullSize2}
          title="Build intelligent solutions for smarter growth"
          description="Our team develops custom AI models that assist the client in utilising fewer resources and make more suitable decisions."
          buttonText="Build With Us"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <TechnologiesCarousel
          title="Custom AI Solution Technologies We Use"
          description="We produce effective online experiences to make businesses rise. We are a group that is creative, strategic, and technology-minded to develop innovative and usable solutions."
          technologies={technologies}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Make your business the beneficiary of Capyngen’s custom AI solutions"
          description={[
            <>
              Grow your productivity, expand your knowledge and implement
              AI-powered automation that suits your needs. As a{" "}
              <a href="https://www.capyngen.com/crm-management-software">
                Top crm development company
              </a>{" "}
              would do for customer data, robust AI layers on top of existing
              platforms unlock deeper insights and smarter workflows.
            </>,
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
