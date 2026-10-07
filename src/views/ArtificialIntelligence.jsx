import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  FaBuilding,
  FaHeartbeat,
  FaIndustry,
  FaRocket,
  FaShoppingCart,
  FaUniversity,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import TechnologiesCarousel from "../components/TechnologiesCarousel";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/artificial-intelligence-services#webpage",
  url: "https://www.capyngen.com/artificial-intelligence-services",
  name: "Artificial Intelligence Solutions | AI-Powered Development",
  description:
    "Transform your business with Capyngen’s artificial intelligence solutions. We build smart AI-powered applications and development services for every industry.",
  inLanguage: "en",
  keywords: "Artificial Intelligence Solutions | AI-Powered Development",
  isPartOf: {
    "@type": "WebSite",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "Artificial Intelligence, Artificial intelligence solutions, AI development services, Artificial intelligence applications, AI-powered solutions, AI software development, Artificial intelligence technology, AI consulting services",
  name: "Artificial Intelligence Solutions | AI-Powered Development",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  url: "https://www.capyngen.com/artificial-intelligence-services",
  description:
    "Transform your business with Capyngen’s artificial intelligence solutions. We build smart AI-powered applications and development services for every industry.",
  keywords: "Artificial Intelligence Solutions | AI-Powered Development",
  offers: {
    "@type": "Offer",
    url: "https://www.capyngen.com/contact",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  category: "Artificial Intelligence Services",
  serviceOutput:
    "Transform your business with Capyngen’s artificial intelligence solutions. We build smart AI-powered applications and development services for every industry.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Is Artificial Intelligence (AI)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Artificial Intelligence is the technology that allows machines to carry out tasks that usually require human intelligence such as learning, logical thinking, problem-solving, and decision-making.",
      },
    },
    {
      "@type": "Question",
      name: "How Can Artificial Intelligence Help My Business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI helps businesses automate tasks, gather and analyze data to identify patterns, make accurate decisions, improve customer relationships through personalized services, and calculate expenses efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "What Are Some Artificial Intelligence Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI-powered tools such as automation systems, predictive analytics, chatbots, and intelligent applications are designed to solve business challenges effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What Industries Can Benefit The Most From AI Technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI benefits sectors like healthcare, finance, retail, manufacturing, real estate, education, travel, and logistics by enabling automation, personalization, and data-driven decision-making.",
      },
    },
    {
      "@type": "Question",
      name: "What Are The Most Popular Artificial Intelligence Applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular AI applications include chatbots, recommendation engines, image recognition, predictive maintenance, fraud detection, voice assistants, and automated data processing.",
      },
    },
    {
      "@type": "Question",
      name: "Do You Provide AI Development Services For Startups And Enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides AI development solutions tailored for startups and enterprises to foster innovation and business growth.",
      },
    },
    {
      "@type": "Question",
      name: "In What Way Can AI Improve The Customer Experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI enhances customer experience through personalized recommendations, 24/7 chatbots, predictive suggestions, and smarter, more engaging communication.",
      },
    },
    {
      "@type": "Question",
      name: "How Machine Learning Is Necessary For AI Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Machine learning is a key component of AI that enables systems to learn from data, recognize patterns, and make decisions with minimal human intervention.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI Be Integrated With The Business Systems That Are Already in Place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AI can be seamlessly integrated with existing software, CRM, ERP, or websites to enhance performance without major modifications.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI Suitable For Small Businesses As Well?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. AI helps small and medium businesses increase efficiency by automating repetitive tasks and offering actionable marketing and data insights.",
      },
    },
    {
      "@type": "Question",
      name: "How Long Does It Take To Develop An AI-Powered Solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development timelines depend on the project’s complexity, available data, and customization, but typically AI solutions are completed within 3 to 6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do You Provide AI Consulting Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen offers full AI consulting services including business requirement analysis, opportunity identification, and AI strategy development.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI Secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with proper security protocols, AI systems adhere to strict standards ensuring data protection and regulatory compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What Are The Factors That Make Capyngen's AI Unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen combines advanced AI technology with business-focused strategies, offering custom development, smooth integration, and ongoing support for sustainable growth.",
      },
    },
    {
      "@type": "Question",
      name: "How To Get Started With AI For My Business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start by booking a consultation with Capyngen’s AI experts. We’ll define your goals and create a simple, clear AI implementation plan tailored to your business.",
      },
    },
  ],
};

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
    },
    {
      title: "Custom AI Development",
      description:
        "The development of AI applications is tailored to startups, enterprises, and other areas.",
      image: assets.ai3,
    },
    {
      title: "AI-Powered Insights",
      description:
        "Accelerate the data-driven decision-making process with the aid of AI-powered tools.",
      image: assets.ai4,
    },
    {
      title: "Cost-Effective Automation",
      description:
        "Use AI software development to cut down on your operational costs.",
      image: assets.ai5,
    },
    {
      title: "Scalable & Reliable",
      description:
        "Leverage strong artificial intelligence technology as a tool to boost your business.",
      image: assets.ai6,
    },
    {
      title: "Future-Ready AI",
      description:
        "Integrate the future of AI with your operations and position yourself ahead of the pack.",
      image: assets.ai7,
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Startups & SMEs",
      description:
        "AI development that is compatible with the budget of early-stage businesses.",
      icon: <FaRocket className="text-3xl text-blue-400" />,
    },
    {
      title: "Enterprises",
      description:
        "The launch and practical applications of AI technologies that significantly improve existing enterprise systems.",
      icon: <FaBuilding className="text-3xl text-blue-400" />,
    },
    {
      title: "Healthcare",
      description:
        "The implementation of AI-powered solutions in diagnostics applications, patient management, and predictive analytics.",
      icon: <FaHeartbeat className="text-3xl text-blue-400" />,
    },
    {
      title: "Retail & E-commerce",
      description:
        "AI for product recommendations, inventory management, and customer profiles that are unique to every customer.",
      icon: <FaShoppingCart className="text-3xl text-blue-400" />,
    },
    {
      title: "Manufacturing",
      description:
        "Custom AI applications are designed for industries to not only optimize their production but also quality control.",
      icon: <FaIndustry className="text-3xl text-blue-400" />,
    },
    {
      title: "Finance & Banking",
      description:
        "With the help of AI software solutions, automate processes, and detect fraud activities.",
      icon: <FaUniversity className="text-3xl text-blue-400" />,
    },
  ];

  const steps = [
    {
      title: "Discovery & Requirement Analysis",
      description:
        "Get a clear understanding of business needs, the nature of the target audience, and the objectives.",
    },
    {
      title: "Strategy & Roadmap",
      description:
        "Formulate AI plans to come alongside the challenges faced by the respective industry.",
    },
    {
      title: "Development & Integration",
      description:
        "Manufacture AI software that meets a particular need and connect them with your current programs and operations.",
    },
    {
      title: "Testing & Optimization",
      description:
        "Verify AI solutions for effectiveness, precision, and security.",
    },
    {
      title: "Deployment & Support",
      description:
        "Make scalable AI systems accessible to users, with indefinite support and updates.",
    },
    {
      title: "Monitoring & Continuous Improvement",
      description:
        "Track performance and retrain or refine AI models as needed for long-term success.",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Proven Expertise",
      text: "We have the track record of providing top artificial intelligence solutions for businesses all over the globe.",
    },
    {
      title: "Custom Solutions",
      text: "The AI which we build for your business will be targeted specifically on your needs.",
    },
    {
      title: "Affordable & Scalable",
      text: "We deliver services in AI for startups as well as big companies without making any compromise on quality.",
    },
    {
      title: "Dedicated Support",
      text: "We provide continuous guidance and AI consulting services to you for the achievement of your goals.",
    },
    {
      title: "Future-Ready AI",
      text: "Use the technology of artificial intelligence to always be a step ahead of the market trends.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Artificial Intelligence Services – Best AI Solutions Company in India
        </title>
        <meta
          name="description"
          content="Professional Artificial Intelligence services in India. We provide AI solutions, machine learning models, and automation to transform your business."
        />
        <meta
          name="keywords"
          content="artificial intelligence services, top artificial intelligence company in gurgaon, AI solutions company India, machine learning services, AI automation, professional AI solutions, artificial intelligence company in India"
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
      {/* 1. HERO SECTION (APPLE-STYLE MINIMALIST TECH HERO)                        */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[90vh] lg:min-h-screen text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800/80 overflow-hidden bg-[#030712]"
        aria-label="Artificial Intelligence Services Hero"
      >
        {/* Ambient Top Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
        
        {/* Subtle Tech Grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              {/* Tech Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-slate-700/60 bg-slate-900/60 backdrop-blur-md rounded-none text-xs font-mono text-blue-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                NEXT-GEN AI & MACHINE LEARNING
              </div>

              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Best Artificial Intelligence Services in India
              </h1>

              <p className="text-blue-400 text-lg sm:text-xl font-medium mb-4">
                Delivering Intelligent AI Solutions, Machine Learning Models & Business Automation
              </p>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-normal">
                Capyngen creates futuristic artificial intelligence applications and AI-enabled solutions to accelerate innovation, reduce operational overhead, and drive scalable enterprise growth with custom AI development and consulting.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-8 rounded-none transition-colors duration-150 shadow-lg text-base"
                >
                  Explore AI Solutions
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-3.5 px-7 rounded-none transition-colors duration-150 text-base"
                >
                  Book AI Consultation
                </Link>
              </div>

              {/* Quick Tech Badges */}
              <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Custom Models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Real-time Inference</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>

            {/* Right Graphic: Showcase with floating glass chips */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="w-full max-w-[540px] xl:max-w-[600px] relative">
                {/* Floating Glassmorphic Chip Top */}
                <div className="hidden sm:flex items-center gap-3 absolute -top-6 -left-6 z-20 border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-none shadow-2xl">
                  <div className="w-8 h-8 rounded-none bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <BrainCircuit className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">99.4% Model Precision</div>
                    <div className="text-[11px] text-slate-400">Enterprise-Grade ML Pipeline</div>
                  </div>
                </div>

                {/* Main Showcase Image */}
                <div className="relative border border-slate-800 bg-[#070e1d] p-3 shadow-2xl rounded-none overflow-hidden">
                  <img
                    src={assets.ai1}
                    alt="Artificial Intelligence Development Solutions"
                    className="w-full h-auto object-cover rounded-none"
                  />
                </div>

                {/* Floating Glassmorphic Chip Bottom */}
                <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-6 z-20 border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-none shadow-2xl">
                  <div className="w-8 h-8 rounded-none bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">Autonomous AI Agents</div>
                    <div className="text-[11px] text-slate-400">Zero-Latency Cloud Execution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT IS AI & STRATEGIC VALUE (SPLIT LIGHT SECTION)                      */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.ai2}
                alt="AI Development & Strategic Automation"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Transforming Business Operations with AI
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Artificial Intelligence is the technology that allows machines to carry out tasks that usually require human intelligence—such as continuous learning, logical reasoning, predictive forecasting, and real-time decision-making.
              </p>
              <p>
                By automating repetitive tasks, identifying complex data trends, and personalizing user interactions, Capyngen equips your organization to reduce operational costs and maximize business velocity.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Personalized Recommendations</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Payment Fraud Detection</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Dynamic Pricing Optimization</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Visual & Voice Recognition</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule AI Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FULL SIZE BANNER 1: BRING INTELLIGENCE TO YOUR BUSINESS                 */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.aiFullSize}
            alt="Bring intelligence to your business"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Bring intelligence to your business
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our efforts are focused on creating AI-powered business solutions that bring automation and improvement to your operations.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Explore AI Tools
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR AI SERVICES (7 CARDS - White Background)                            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our AI Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We engineer specialized artificial intelligence capabilities tailored to your exact industry requirements and technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            {benefitsData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-sm relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BENEFITS & FEATURES (6 CARDS WITH VISUAL ASSETS)                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits & Features
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Discover how our cutting-edge AI architectures drive tangible business advantages across every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-48 mb-6 overflow-hidden border border-slate-800 rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FULL SIZE BANNER 2: SMARTER DECISIONS POWERED BY AI                    */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.aiFullSize2}
            alt="Smarter decisions powered by AI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Smarter decisions powered by AI
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We offer a wide range of tools such as chatbots and analytics that are designed to become more intelligent and handle complex tasks autonomously over time.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRIES WE SERVE (6 Dark Cards)                                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Serve
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              From high-growth startups to enterprise corporations, our AI software implementations transform key sectors globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. OUR AI PROCESS (6 Step Cards)                                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              How Our AI Process Works
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A structured and methodical development pipeline that delivers production-ready artificial intelligence reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-400 mb-3 tracking-wider">
                    PHASE 0{idx + 1}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. TECHNOLOGIES CAROUSEL                                                  */}
      {/* ========================================================================= */}
      <TechnologiesCarousel
        title="Artificial Intelligence Technologies We Use"
        description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
        technologies={technologies}
      />

      {/* ========================================================================= */}
      {/* 10. WHY CHOOSE CAPYNGEN FOR AI (SPLIT LIGHT SECTION)                      */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen for AI Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We engineer purpose-built AI solutions that integrate seamlessly with your current software ecosystem, empowering your team to operate smarter and scale faster.
            </p>

            <div className="space-y-4 pt-2">
              {whyChoosePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">{point.title}</strong>
                    <span className="text-slate-600"> – {point.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.ai8}
                alt="Why Choose Capyngen for AI"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. GET STARTED / CALL TO ACTION BANNER                                   */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#030712] text-white border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Transform Your Business with AI-Powered Solutions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Implement custom artificial intelligence with the help of Capyngen to increase efficiency, automate complexity, and lead in your industry.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl text-base"
            >
              Book your AI Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default ArtificialIntelligence;
