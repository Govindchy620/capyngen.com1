import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import {
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import customAiHeroBanner from "../assets/Custom AI Solutions Service/banner.png";
import FAQSection2 from "../components/FAQSection2";

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
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "PyTorch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Redis",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "OpenCV",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    },
    {
      name: "Scikit-learn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },
    {
      name: "Jupyter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Usage of Data to make decisions",
      description:
        "Even raw data may be transformed into significant information to make a decision with the help of AI.",
      icon: <FaLightbulb className="text-3xl" />,
    },
    {
      title: "Automation & Productivity",
      description:
        "The applications of AI automation solutions can facilitate the process of simplifying the implementation of repetitive work in other departments of organizations.",
      icon: <FaChartLine className="text-3xl" />,
    },
    {
      title: "Customer Experience Enhancement",
      description:
        "The loyalty will be significantly increased by adapting to the needs of a client, and the behavior of your customer base will help to build a prediction of the needs that a client may have.",
      icon: <FaCogs className="text-3xl" />,
    },
    {
      title: "Cost Optimization",
      description:
        "Encourage the adoption of AI-based systems technologies in order to maximize the use of your assets and reduce the number of operations.",
      icon: <FaLaptopCode className="text-3xl" />,
    },
    {
      title: "Risk Management",
      description:
        "The forecast of possible threats and trends can be given with the help of AI that will enable an active management of the situation.",
      icon: <FaProjectDiagram className="text-3xl" />,
    },
    {
      title: "Scalable AI Solutions within the Enterprise",
      description:
        "Solutions that are offered by AI solutions provider have to this day been able to reach farther as far as your business requires it to all across the globe.",
      icon: <FaTasks className="text-3xl" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Machine Learning Solutions",
      description:
        "With machine learning technology, you can conveniently gather information, identify trends and make real-life forecasts as a way of enhancing the performance of your company. custom machine learning solutions offered by custom AI development company.",
      image: assets.customAi2,
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "One of the things you can do is to install an AI-powered chatbot that will simplify and speed up the communication between the customer and your company. In addition to this, there is the intelligent text processing and sentiment analysis.",
      image: assets.customAi3,
    },
    {
      title: "Predictive Analytics",
      description:
        "Those who lead the pack should transform their data into insightful forecasts, risk management plans and make strategic decisions.",
      image: assets.customAi4,
    },
    {
      title: "AI-Powered Automation",
      description:
        "The processes that are usually performed in a slow and complex manner can be automated with the assistance of custom AI automation and this will enable you to have efficiency increase, productivity increase and generally a good working environment.",
      image: assets.customAi5,
    },
    {
      title: "Computer Vision & Image Recognition",
      description:
        "The technologies that work behind the scenes can merely capture photos of us, identify our faces and even assist us to analyze what is in the picture.",
      image: assets.customAi6,
    },
    {
      title: "Recommendation/Personalization Engines",
      description:
        "Get the companies to retain the customers by offering them the offer that is particularly fitting to them and their preferences hence making the interaction effective and successful.",
      image: assets.customAi7,
    },
  ];

  const steps = [
    {
      title: "Requirement Analysis & Consultation",
      description:
        "Be familiar with business objectives, challenges and AI requirements.",
    },
    {
      title: "Strategy & Solution Design",
      description:
        "Design an AI strategy that is adequately aligned with the goals and objectives of your firm.",
    },
    {
      title: "Data Collection & Preparation",
      description:
        "Begin gathering, washing, and processing the data sets that you desire to use to train your machine learning models.",
    },
    {
      title: "AI Model Development",
      description:
        "Design, educate, and discard the machine learning or AI algorithms to achieve a higher level of precision.",
    },
    {
      title: "Integration & Testing",
      description:
        "Easily add AI solutions to the existing systems and run several tests. Combine with a custom Android app development or iOS software development company.",
    },
    {
      title: "Deployment, Support & Continuous Improvement",
      description:
        "Train, monitor, and continuously enhance AI models, not least in the short term.",
    },
  ];

  return (
    <div className="relative font-sans text-slate-900 bg-white selection:bg-blue-600 selection:text-white">
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

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Background Image + Dark Overlay + Sharp Minimalist Look)  */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[85vh] lg:min-h-[88vh] text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${customAiHeroBanner || assets.customAi1})`,
        }}
        aria-label="Custom AI Solutions Banner"
      >
        {/* Dark Tech Gradient Overlay for Crystal Clear Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b17] via-[#070e1d]/90 to-[#050b17]/80 backdrop-blur-[1px]" />
        
        {/* Subtle Tech Grid Lines */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl text-left">
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.14] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Instant{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Best custom AI solutions Company in Gurgaon
              </span>
              – Get India’s #1 Trusted custom AI solutions
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-3xl font-normal">
              Enhance your decision-making process, simplify your business operations, and be innovative using custom AI solutions tailored to the needs of your business across the world, by Capyngen.
            </p>

            <div>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
              >
                Get started
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 1: Best Custom AI Solutions for Businesses (Clean White Bg)    */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2
                className="text-slate-900 leading-[1.18] tracking-tight text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Best Custom AI Solutions for{" "}
                <span className="text-blue-600">
                  Businesses
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Capyngen is a worldwide AI development company that develops AI-powered solutions for businesses wishing to automate their operations, make decisions based on facts and identify unexplored business opportunities. We create custom AI solutions for business that are applicable to all sizes of business, whether a startup or a multinational company, to make a measurable change.
              </p>

              {/* Consultation Callout Panel */}
              <div className="bg-[#f8fafc] border-l-4 border-blue-600 border border-slate-200 p-6 sm:p-7 rounded-none shadow-sm">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                  Contact the best custom AI solutions Company in Gurgaon and receive a free consultation and find out how your enterprise AI solutions, machine learning, and custom AI services can be applied in the business.
                </p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-none transition-all duration-300 shadow-md group text-sm sm:text-base tracking-wide"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image (Border-free, clean, sharp, rounded-none) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-none">
                <img
                  src={assets.customAiSolution}
                  alt="Best Custom AI Solutions for Businesses - Capyngen"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 3: Why Pick Unique AI Solutions for Your Enterprise            */}
      {/* ========================================================================= */}
      <section id="services-section" className="py-20 lg:py-28 bg-[#0a1122] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mb-14">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Pick Unique AI Solutions for Your Enterprise
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Investing in custom AI solutions will help your company to surpass the competition, as it will not only achieve operational efficiency and customer experiences on a one-on-one level, but will also be able to retain them.
            </p>
            <h3
              className="text-xl sm:text-2xl font-semibold text-white mt-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Advantages of AI Adoption in Business:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#0d172e] border border-slate-800 hover:border-blue-500 p-8 flex flex-col justify-between transition-all duration-300 rounded-none hover:-translate-y-1 shadow-lg"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />
                
                <div>
                  <div className="w-14 h-14 bg-[#101b38] border border-slate-700 flex items-center justify-center rounded-none mb-6 group-hover:border-blue-500 group-hover:bg-blue-600/10 transition-colors text-blue-400">
                    {item.icon}
                  </div>
                  
                  <h4
                    className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FULL-SIZE INTERSTITIAL IMAGE SECTION 1                                */}
      {/* ========================================================================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
        style={{
          backgroundImage: `url(${assets.customAiFullSize})`,
        }}
      >
        <div className="absolute inset-0 bg-[#070e1d]/85" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Empower your business with AI
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Artificial intelligence is used as a business tool to streamline, accelerate, and transform the company.
          </p>
          <div className="pt-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all shadow-xl"
            >
              Explore AI Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 4: Our Custom AI Services Tailored for Your Needs (6 Cards)    */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-16">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Custom AI Services Tailored for Your Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 rounded-none flex flex-col group"
              >
                <div className="h-56 w-full overflow-hidden bg-slate-100 relative rounded-none border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-start">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION 5: Obtain a personalized AI solution from Capyngen             */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Obtain a personalized AI solution from Capyngen
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Activate the strength of intuitive choices, which will make it easier to conduct your business and speed up the growth of the business using custom-made AI services.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 6: How We Develop Custom AI Solutions (Clean Steps)            */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#091122] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mb-16">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              How We Develop Custom AI Solutions
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Our powerful and quality development procedure produces powerful, mistake-free and performance AI software solutions. Every phase in our team is carefully implemented to achieve the highest degree of efficiency and business influence. AI solution development by the experts of AI software development follows modern best practices similar to those used by the{" "}
              <a
                href="https://www.capyngen.com/devops-solutions"
                className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors"
              >
                Best devops solutions provider
              </a>
              , ensuring reliability, observability, and continuous delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#0d1830] border border-slate-800 p-8 rounded-none relative group hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-start"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />
                
                <h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {st.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FULL-SIZE INTERSTITIAL IMAGE SECTION 2                                */}
      {/* ========================================================================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
        style={{
          backgroundImage: `url(${assets.customAiFullSize2})`,
        }}
      >
        <div className="absolute inset-0 bg-[#070e1d]/85" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Build intelligent solutions for smarter growth
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our team develops custom AI models that assist the client in utilising fewer resources and make more suitable decisions.
          </p>
          <div className="pt-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all shadow-xl"
            >
              Build With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION 7: Custom AI Solution Technologies We Use (Clean White Bg)     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-16">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Custom AI Solution Technologies We Use
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              We produce effective online experiences to make businesses rise. We are a group that is creative, strategic, and technology-minded to develop innovative and usable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 rounded-none group"
              >
                <div className="w-14 h-14 bg-white border border-slate-200 flex items-center justify-center rounded-none mb-3 p-2.5 shadow-sm group-hover:border-blue-500 group-hover:scale-105 transition-all">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="max-h-full max-w-full object-contain rounded-none"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FAQ SECTION (Clean Accordion)                                         */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />

      {/* ========================================================================= */}
      {/* 12. SECTION 8: Action Banner (At Very Bottom, below FAQs)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#070e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Make your business the beneficiary of Capyngen’s custom AI solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Grow your productivity, expand your knowledge and implement AI-powered automation that suits your needs. As a{" "}
              <a
                href="https://www.capyngen.com/crm-management-software"
                className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors"
              >
                top crm development company
              </a>{" "}
              would do for customer data, robust AI layers on top of existing platforms unlock deeper insights and smarter workflows.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-10 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomAiSolution;
