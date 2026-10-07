import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
  FaReact,
  FaLaravel,
  FaCubes,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import ecomType1 from "../assets/Ecommerce solutions/1.png";
import ecomType2 from "../assets/Ecommerce solutions/2.png";
import ecomType3 from "../assets/Ecommerce solutions/3.png";
import ecomType4 from "../assets/Ecommerce solutions/4.png";
import ecomType5 from "../assets/Ecommerce solutions/5.png";
import ecomType6 from "../assets/Ecommerce solutions/6.png";
import FAQSection2 from "../components/FAQSection2";
import TechStack from "../components/TechStack";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/ecommerce-solutions#webpage",
  url: "https://www.capyngen.com/ecommerce-solutions",
  name: "Smart E-Commerce Solutions – India’s Leading E-Commerce Solution Provider",
  description:
    "Boost your online business with Smart E-Commerce Solutions – India’s trusted platform for creating, managing, and scaling your e-commerce store effortlessly. Fast, secure, and feature-rich.",
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
    url: "https://www.capyngen.com/assets/eCommSol7-DXwIPoOJ.png",
    caption:
      "Smart E-Commerce Solutions | Leading E-Commerce Solution Provider in India",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/ecommerce-solutions#service",
  name: "Smart E-Commerce Solutions – India’s Leading E-Commerce Solution Provider",
  description:
    "Boost your online business with Smart E-Commerce Solutions – India’s trusted platform for creating, managing, and scaling your e-commerce store effortlessly. Fast, secure, and feature-rich.",
  url: "https://www.capyngen.com/ecommerce-solutions",
  serviceType: "E-Commerce Solutions",
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
    url: "https://www.capyngen.com/assets/eCommSol7-DXwIPoOJ.png",
    caption: "Smart E-Commerce Solutions by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/ecommerce-solutions#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are e-commerce solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-commerce solutions encompass end-to-end services and platforms required to build, operate, and scale online stores, including web development, payments, and marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my business need an e-commerce website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An e-commerce website allows your business to sell 24/7, reach global markets, lower overhead costs, and provide seamless customer shopping experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop both Android and iOS e-commerce mobile apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build high-performance e-commerce mobile applications for both Android and iOS using technologies like Flutter and React Native.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen build a multi-vendor marketplace like Amazon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We create multi-vendor marketplaces where multiple sellers can register, manage catalogs, and sell goods with vendor payout automation.",
      },
    },
    {
      "@type": "Question",
      name: "Which payment gateways can be integrated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We integrate all leading payment gateways including Stripe, PayPal, Razorpay, PayU, and custom bank gateways for safe transactions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide SEO and digital marketing for e-commerce stores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We implement comprehensive SEO strategies and digital marketing campaigns to drive organic traffic, improve rankings, and boost conversions.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen help me sell globally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our global e-commerce solutions include multi-currency support, multi-language localization, and international shipping configurations.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to build an e-commerce website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost varies based on features, platform, and complexity. Timelines typically range from 3 to 8 weeks. Contact us for a detailed custom quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer continuous support, server monitoring, security updates, and performance tuning to keep your store running flawlessly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you connect CRM and ERP systems with my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We seamlessly connect popular CRM and ERP systems like Salesforce, Zoho, SAP, and HubSpot to automate your business operations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build subscription-based e-commerce models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We create automated recurring billing and subscription commerce models for physical products, digital content, and SaaS platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve fashion, electronics, FMCG, healthcare, groceries, jewelry, automotive, and B2B wholesale industries across the globe.",
      },
    },
    {
      "@type": "Question",
      name: "Is my e-commerce website optimized for mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our e-commerce websites are fully responsive and optimized for smartphones, tablets, and desktops.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own domain and hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can use your own domain and hosting, or we can manage everything for you as part of our e-commerce website development services.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start an e-commerce project with Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply book a free consultation or contact our team. We will understand your goals and create a customized e-commerce solution tailored to your business.",
      },
    },
  ],
};

const ECommerceSolution = () => {
  const faqItems = [
    {
      question: "What is an e-commerce solutions?",
      answer:
        "E-commerce solutions is a full system that helps firms to sell their services or goods online. It has professional e-commerce solutions that cover web design and development, payment solutions, marketing as well as support.",
    },
    {
      question: "Why do I need an e-commerce solutions website on my business?",
      answer:
        "The e-commerce solutions site will allow your company to sell 24/7, connect with customers all over the world, cut down on operating expenses and provide a customer with a nice shopping experience which increases their purchasing power due to ecommerce development company experience.",
    },
    {
      question:
        "Are you providing both Android and iOS mobile e-commerce solutions application?",
      answer:
        "Yes! Capyngen develops rapid and trustworthy Android and iOS mobile e-commerce solutions applications based on technologies such as Flutter, React Native, and native languages as E commerce solutions in India.",
    },
    {
      question:
        "Would such a platform as Capyngen be in a position to develop a multi-vendor marketplace such as Amazon?",
      answer:
        "Absolutely. We build multi-vendor markets that are scalable, where several sellers may list and sell their products just like Amazon or Flipkart, through ecommerce website design.",
    },
    {
      question: "What will be the payment gateways to be integrated?",
      answer:
        "We are the official partners of such big and local payment gateways as Stripe, PayPal, Razorpay, and others to provide quick and secure transactions in our e-commerce software solutions.",
    },
    {
      question:
        "Are you an e-commerce solution, SEO and digital marketing services?",
      answer:
        "Yes. To develop the e-commerce websites, we apply the strategy of SEO and the use of digital marketing services to enhance the ranking of the site, the level of visitor attraction and conversion into a customer.",
    },
    {
      question:
        "Do you believe Capyngen would assist me in building my e-store that would be accessible to the rest of the world?",
      answer:
        "Indeed. Our e-commerce solutions for businesses are accessible globally as it includes functions such as multi-currency, multi-language and international shipping.",
    },
    {
      question:
        "The amount required to develop an e-commerce solutions website?",
      answer:
        "Our eCommerce development services normally require 3 to 8 weeks to go through customisation to launch, depending on the scope of the project.",
    },
    {
      question:
        "Do you warrant the maintenance of the project once it becomes live?",
      answer:
        "Definitely. Our best ecommerce platform in India is in continuous support and maintenance to operate smoothly, securely and with updates.",
    },
    {
      question: "Can you connect CRM and ERP systems?",
      answer:
        "Yes! We combine the best CRM and ERP solutions to optimise and improve your business activities with the help of E commerce solutions services.",
    },
    {
      question:
        "Are there any subscription models of E-commerce solutions that you use?",
      answer:
        "Yes. As e-commerce solutions company, we develop subscription and membership programs with recurring billings of products, services or SaaS businesses.",
    },
    {
      question: "Which kind of businesses do you want to assist in?",
      answer:
        "Our industries of operation encompass a broad spectrum of retail, food, medical, education, travel, hospitality and B2B wholesale, deploying the solutions of ecommerce development company.",
    },
    {
      question: "Is my e-commerce solutions site optimised for smartphones?",
      answer:
        "Yes. Our e-commerce solutions websites are all fully responsive and mobile-ready to allow shopping with any device.",
    },
    {
      question: "Can I possess my own domain and hosting?",
      answer:
        "Yes. You are allowed to use your own domain and hosting, or we can do it all with our ecommerce website development solutions for creating websites.",
    },
    {
      question: "What is the project initiation with Capyngen?",
      answer:
        "Just make a free appointment or contact our staff. We will know your objectives, and we will design a customised e-commerce solutions to you.",
    },
  ];

  const servicesData = [
    {
      image: assets.eCommSol12,
      title: "Search Engine Optimization (SEO)",
      desc: "Get your website on the first page of Google.",
    },
    {
      image: assets.eCommSol13,
      title: "Social Media Integration",
      desc: "Get additional customers and promote your products directly to Instagram, Facebook, and LinkedIn.",
    },
    {
      image: assets.eCommSol14,
      title: "Email & SMS Campaigns",
      desc: "Rejuvenate customer relations and promise repeat sales.",
    },
    {
      image: assets.eCommSol15,
      title: "Content Marketing",
      desc: "Win the goodwill of visitors and draw traffic through useful material.",
    },
    {
      image: assets.eCommSol16,
      title: "Paid Advertising (PPC)",
      desc: "Attract specific attention to your online store immediately.",
    },
    {
      image: assets.eCommSol17,
      title: "Analytics & Conversion Tracking",
      desc: "Assess the outcomes and develop successfully.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Enhanced User Engagement & Retention",
      description:
        "Begin to create user-centric and interactive products that will make users revisit them, thereby raising loyalty and long-term interactions. User-engagement sites ensure that the users continue to learn more about your platform and visit regularly.",
      image: assets.eCommSol3,
    },
    {
      title: "Improved Conversion Rates",
      description:
        "The primary determinant of encouraging visitors to follow the desired action is the ability to select layouts and workflows that are efficient in engaging the visitors and, hence, increasing sales, sign-ups, and leads. Call-to-actions and convincing design elements are strategically placed, which brings the conversions to the next level.",
      image: assets.eCommSol4,
    },
    {
      title: "Intuitive, Responsive, and Accessible Design",
      description:
        "Ensure that the user experience is also good on other devices, such as those of a disabled user. Focusing on creating accessibility expands your audience and reinforces your brand image with the help of ecommerce website design.",
      image: assets.eCommSol5,
    },
    {
      title: "Faster Load Times & Optimized Performance",
      description:
        "Quick loading of pages, easy navigation and effective apps reduce referred visits that exit instantly. Enhanced performance optimality leads to enhanced user delight and longer sessions.",
      image: assets.eCommSol6,
    },
    {
      title: "Scalable Architecture for Growth",
      description:
        "Design changes that could accommodate additional traffic, new functionality and larger geographical aspects without quality reduction. Scalable systems provide the opportunity of business to expand in a stable manner and without having to redesign the platform.",
      image: assets.eCommSol7,
    },
    {
      title: "Strong Branding & Visual Identity",
      description:
        "Attractive, customary designs convey the ideals of the company to its consumers in a clean and rather memorable way. A single visual identity is central to recognition and trust by users.",
      image: assets.eCommSol8,
    },
    {
      title: "Seamless Integration with Tools & Services",
      description:
        "Integrate any third-party services to create a fully fledged ecosystem, including: connect CRMs, payment gateways, analytics or any other third-party services. Integration ensures there is efficiency in operations and improved user experience.",
      image: assets.eCommSol9,
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "You can make UX and UI better, enhance the marketing approach, and enhance the products with the help of analytics and knowledge of how people behave. The daily optimisation will involve the users even more, and their loyalty will rise, which will result in the overall enhancement of the ROI.",
      image: assets.eCommSol10,
    },
    {
      title: "Security & Privacy Compliance",
      description:
        "Install all security controls that comply with the industry requirements and the optimal cybersecurity standards to protect the data of the users. Compliance and earning the confidence of the users will ensure that your platform is not only credible but also secure for everyone who will use it.",
      image: assets.eCommSol11,
    },
  ];

  const cardsSectionData1 = [
    {
      title: "CRM & ERP Systems",
      description:
        "Enhance the efficiency of business data flowing to improve its management.",
      icon: <FaReact className="text-3xl text-cyan-400" />,
    },
    {
      title: "AI-Powered Product Suggestions",
      description: (
        <>
          Make more sales with smart product recommendations using{" "}
          <a
            href="https://www.capyngen.com/custom-ai-solutions"
            className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors"
          >
            Top AI software solutions in Gurgaon
          </a>
          .
        </>
      ),
      icon: <FaLaravel className="text-3xl text-blue-400" />,
    },
    {
      title: "Chatbots for Support",
      description:
        "Allow chatbots to provide immediate assistance and increase the level of customer satisfaction.",
      icon: <FaCubes className="text-3xl text-indigo-400" />,
    },
  ];

  const cardsSectionData2 = [
    {
      title: "B2C (Business to Consumer) Stores",
      description:
        "They are online retail stores that are direct and are designed to sell products to the end consumers.",
      icon: <FaTools className="text-3xl text-cyan-400" />,
      bgImage: ecomType1,
    },
    {
      title: "B2B (Business to Business) Platforms",
      description:
        "These are scalable e-commerce services that are created to fulfil the requirements of wholesale and enterprise.",
      icon: <FaDollarSign className="text-3xl text-cyan-400" />,
      bgImage: ecomType2,
    },
    {
      title: "Multi-Vendor Marketplaces",
      description:
        "Several sellers are allowed to post their products on your platform and sell them.",
      icon: <FaUsers className="text-3xl text-cyan-400" />,
      bgImage: ecomType3,
    },
    {
      title: "Subscription-Based Ecommerce",
      description:
        "It is an ideal billing model when it comes to recurring transactions like sub boxes and membership transactions.",
      icon: <FaShieldAlt className="text-3xl text-cyan-400" />,
      bgImage: ecomType4,
    },
    {
      title: "Dropshipping Stores",
      description:
        "One can begin an e-commerce business by using a little money and having no inventory.",
      icon: <FaBullhorn className="text-3xl text-cyan-400" />,
      bgImage: ecomType5,
    },
    {
      title: "Social Commerce Solutions",
      description:
        "Selling on social media is possible with the assistance of built-in shopping capabilities.",
      icon: <FaHeart className="text-3xl text-cyan-400" />,
      bgImage: ecomType6,
    },
  ];

  const solutionsData = [
    {
      title: "Quick and Easy Checkout System",
      desc: "Get rid of cart abandonment to a large extent, and the flow of payment with ease.",
    },
    {
      title: "Scalable & Flexible for Business Growth",
      desc: "Our e-commerce solutions in India will be by your side, whether it is for a small town business or to the global marketplace.",
    },
    {
      title: "Increased Sales & Brand Reach",
      desc: "Bring your brand to be seen by the targeted customers using the powerful professional e-commerce solutions.",
    },
    {
      title: "Advanced Integrations & Automation",
      desc: "Reduce wastes of both time and error by having smart systems in place.",
    },
    {
      title: "Dedicated Support & Maintenance",
      desc: "The use of a professional will always help you, regardless of the part of the world you are.",
    },
  ];

  const techStack = [
    {
      title: "No-Code / Low-Code Platforms",
      items: [
        {
          name: "Shopify",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
        },
        {
          name: "Wix",
          icon: "https://cdn.worldvectorlogo.com/logos/wix.svg",
        },
        {
          name: "Squarespace",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Squarespace_Logo.png?20130318145354",
        },
        {
          name: "Webflow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg",
        },
        {
          name: "Bubble",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bubble_Logo_no_code.svg/1597px-Bubble_Logo_no_code.svg.png?20210520210606",
        },
        {
          name: "BigCommerce",
          icon: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg",
        },
      ],
    },
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PHP (Laravel)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          name: "Python (Django)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
      ],
    },
    {
      title: "Databases",
      items: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      title: "UI/UX & Design",
      items: [
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Adobe XD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
        },
      ],
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Obtain a closer understanding of the business objectives, the target audience and, overall, the requirements of the application. This would ensure that the design and development solutions of tailored e-commerce solutions would be anchored on a strong platform.",
    },
    {
      step: "Step 02",
      title: "Planning & Strategy",
      description:
        "Create an extended roadmap, select the appropriate technologies, and set your milestones. The work keeps the project on schedule with regard to time and business objectives with a good plan.",
    },
    {
      step: "Step 03",
      title: "UI/UX Design",
      description:
        "Develop attractive and user-friendly interfaces that would enable users to have fun. Customer engagement and conversion growth are largely achieved by successful e-commerce UI/UX design.",
    },
    {
      step: "Step 04",
      title: "Development",
      description:
        "Create mobile apps or e-commerce websites that are durable, expansive, and efficient. Security, future scalability, clean coding are the central focus of our development process.",
    },
    {
      step: "Step 05",
      title: "Integration & Testing",
      description:
        "Integrate APIs, payment gateways, databases and third-party tools with ease. This is during hardcore testing during which they fix any bugs that hence should lead to the perfect functionality, speed, and safety of all machines.",
    },
    {
      step: "Step 06",
      title: "Deployment & Maintenance",
      description:
        "The platform will be successfully launched and will be updated and provided with technical support regularly. Systematic maintenance ensures that your e-commerce solutions are maintained in a good way to operate smoothly, to be fast and optimised to the full.",
    },
  ];

  return (
    <div className="relative font-sans text-slate-900 bg-white selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Smart E-Commerce Solutions – India’s Leading E-Commerce Solution Provider
        </title>
        <meta
          name="description"
          content="Boost your online business with Smart E-Commerce Solutions – India’s trusted platform for creating, managing, and scaling your e-commerce store effortlessly. Fast, secure, and feature-rich."
        />
        <meta name="keywords" content="E commerce solutions in india " />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Sharp Edges / Zero Rounded Corners / Clean Tech Look)     */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[85vh] bg-gradient-to-b from-[#070e1d] via-[#09152e] to-[#070e1d] text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden"
        aria-label="Smart E-Commerce Solutions Banner"
      >
        {/* Subtle Background Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Description, CTA */}
            <div className="lg:col-span-7 text-left">
              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Instant Smart E-Commerce Solutions{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  – Get India’s #1 Trusted E-Commerce Platform
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl font-normal">
                Bring together, build, and flourish your online store using the effective and user-friendly e-commerce solutions offered by Capyngen, bearing in mind the modern business dynamics as a major e-commerce business solutions company.
              </p>

              <div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
                >
                  Start your Store Today
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Graphic (Clean, Sharp, Border-free, rounded-none) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[560px] xl:max-w-[600px] h-[440px] sm:h-[480px] flex items-center justify-center overflow-hidden">
                <img
                  src={assets.eCommSol1}
                  alt="Smart E-Commerce Solutions - Capyngen"
                  className="w-full h-full object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TYPES OF E-COMMERCE SOLUTIONS (Directly Below Hero Section)            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Types of E-Commerce Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Capyngen offers flexible e-commerce software solutions packages that suit any business model, using our ecommerce development company experience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden border border-slate-300 p-8 shadow-md hover:shadow-2xl transition-all duration-300 rounded-none flex flex-col justify-end min-h-[340px] group bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                }}
              >
                {/* Dark gradient overlay for text readability and high contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1d]/95 via-[#070e1d]/80 to-[#070e1d]/50 group-hover:via-[#070e1d]/70 transition-all duration-300" />
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none z-10" />

                <div className="relative z-10">
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. JUMP-START BANNER (Clean Dark Tech Strip)                              */}
      {/* ========================================================================= */}
      <section className="py-10 lg:py-12 bg-[#09152e] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-4xl">
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              Jump-start your e-commerce business using Capyngen easy to use e-commerce solutions. We not just design, develop and market, but we also transport you and your store to the other side of the world to enable you prosper as the best ecommerce platform in India to grow scalable.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 1: Why Your Business Needs an E-Commerce Solution (Split)      */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
              <h2
                className="text-slate-900 leading-[1.2] tracking-tight text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Your Business Needs an{" "}
                <span className="text-blue-600">E-Commerce Solution</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                No longer is it sufficient to possess an ecommerce platform, that one can depend on, but now it is necessary as a professional e-commerce solutions. Through an effective business plan of a ecommerce website development solutions, your business can:
              </p>

              {/* 6 Advantage Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                {[
                  "Reaching out to a global market and making sales any day of the week, and at any time of the day or night.",
                  "Reducing your business costs as opposed to the normal shops.",
                  "Creating customer trust via secure payments.",
                  "Proper management of stocks and orders.",
                  "Providing the customers with a chance to enjoy a fast and convenient shopping experience.",
                  "Climbing or descending your ecommerce business without hustling when you make.",
                ].map((txt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                The e-commerce solutions that are available to Capyngen for the e-commerce will be matched with your company goals towards the e-commerce solutions for businesses, whether you are a new entrant in the market or intend to expand to other international markets.
              </p>
            </div>

            {/* Right Visual Image (Sharp, border-free frame, rounded-none) */}
            <div className="lg:col-span-5 flex">
              <div className="border border-slate-300 bg-slate-950 shadow-xl rounded-none w-full overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
                <img
                  src={assets.eCommSol2}
                  alt="E-Commerce Solutions by Capyngen"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 2: E-Commerce Solutions Services We Offer (9 Cards Grid)        */}
      {/* ========================================================================= */}
      <section id="services-section" className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              E-Commerce Solutions Services We Offer
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              We develop an all-inclusive array of E commerce solutions services, which are business-specific and are based on the size of the business, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, index) => (
              <div
                key={index}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 overflow-hidden shadow-xl flex flex-col justify-between group transition-all duration-300 rounded-none relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />
                
                <div className="h-52 w-full overflow-hidden bg-slate-900 relative rounded-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
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
      {/* 6. SECTION 4: Book a Free Consultation (CTA Strip)                        */}
      {/* ========================================================================= */}
      <section className="py-10 lg:py-12 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Book a Free Consultation
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Arrange an appointment with our online business specialists to know more about our eCommerce development services that will transform your business. You can easily share with us your online victory.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Book Now
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION 5: Smart Integrations That Power Your Store (3 Cards)          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0a1122] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mb-8 lg:mb-10">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Smart Integrations That Power Your Store
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              This is what Capyngen will connect your ecommerce website development with highly impactful resources to enhance the performance of your site:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, index) => (
              <div
                key={index}
                className="bg-[#0d172e] border border-slate-800 hover:border-blue-500 p-8 shadow-xl flex flex-col justify-between group transition-all duration-300 rounded-none relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />
                
                <div>
                  <div className="w-14 h-14 bg-[#101b38] border border-slate-700 flex items-center justify-center rounded-none mb-6 group-hover:border-blue-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 6: E-Commerce Marketing Made Simple (6 Cards)                   */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              E-Commerce Marketing Made Simple
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Capyngen information based marketing is the way your E commerce solutions services can make contact with the appropriate audience with the use of{" "}
              <a
                href="https://www.capyngen.com/digital-marketing"
                className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
              >
                digital marketing services
              </a>
              :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 rounded-none flex flex-col group"
              >
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative rounded-none border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION 7: Benefits of Choosing Capyngen’s E-Commerce Solutions         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits of Choosing Capyngen’s E-Commerce Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Customer Friendliness experience to the customers, quick, user-friendly, and easy-to-use shops that enhance contact with the customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 hover:border-blue-500 p-8 shadow-sm hover:shadow-xl transition-all duration-300 rounded-none flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-4 text-xs font-mono font-bold text-blue-600 tracking-wider">
                    BENEFIT 0{index + 1}
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
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
      {/* 10. FULL-SIZE INTERSTITIAL IMAGE SECTION                                  */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.eCommSolFullsize}
            alt="Build your online store with confidence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Build your online store with confidence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our company is the ideal firm that can launch a new best ecommerce platfrom that is easy to use, secure and expandable.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all shadow-xl"
          >
            Launch My Store <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. TECH STACK (Sharp Edges, Clean Logos, Light Theme)                    */}
      {/* ========================================================================= */}
      <div className="bg-white border-b border-slate-200">
        <TechStack
          heading="Technologies Capyngen Uses for Ecommerce Mobile Apps"
          categories={techStack}
          theme="light"
        />
      </div>

      {/* ========================================================================= */}
      {/* 12. SECTION 8: E-Commerce Solutions Process (Steps 01 - 06)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              E-Commerce Solutions Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 p-8 rounded-none relative group hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />
                
                <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider mb-3">
                  {st.step}
                </div>
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
      {/* 13. SECTION 9: Growth Partner Action Banner                               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#081224] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Capyngen is the Right Partner for E-Commerce Growth
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Capyngen is a global enterprise E commerce solutions company that start-ups, small and medium-sized businesses, as well as large corporate organisations rely on. We are highly experienced and skilled in e-commerce website development solutions and e-commerce applications development, hence we can work out e-commerce solutions that are not only scalable and well-protected but also future-proof. Therefore, when it comes to opening your very first online store or even trying to connect with the foreign markets in e-commerce, Capyngen will continue to remain the optimal choice in the context of your rapid expansion.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-10 rounded-none transition-all shadow-xl"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />

      {/* ========================================================================= */}
      {/* 15. SECTION 10: Scale Your Ecommerce Business (Bottom Final CTA)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Scale Your Ecommerce Business
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              You can put your every finger on your mouth when using Capyngen e-commerce solutions to build your business- Fast websites, secure check out, marketing tools and support.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerceSolution;
