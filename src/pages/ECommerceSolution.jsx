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
import CardsSectionGrid from "../components/CardsSectionGrid";
import { ShoppingCart, CreditCard, Smartphone, Store } from "lucide-react";
import CardsSection from "../components/CardsSection";
import {
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
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
import Banner5 from "../components/Banner5";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import IndustryServices from "../components/IndustryServices";
import TechStack from "../components/TechStack";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

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
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an e-commerce solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An e-commerce solution is a complete system that enables businesses to sell products or services online. It includes website design and development, payment integration, marketing tools, and ongoing support.",
      },
    },
    {
      "@type": "Question",
      name: "Why do I need an e-commerce solutions website for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An e-commerce solutions website allows your business to sell 24/7, reach global customers, reduce operating costs, and provide a seamless shopping experience that increases conversions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide both Android and iOS mobile e-commerce applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen develops secure and high-performance Android and iOS mobile e-commerce applications using Flutter, React Native, and native technologies.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen develop a multi-vendor marketplace like Amazon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We build scalable multi-vendor marketplaces where multiple sellers can list and sell products, similar to platforms like Amazon or Flipkart.",
      },
    },
    {
      "@type": "Question",
      name: "Which payment gateways can be integrated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We integrate leading global and local payment gateways such as Stripe, PayPal, Razorpay, and others to ensure fast and secure transactions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide SEO and digital marketing services for e-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We implement SEO strategies and digital marketing services to improve search rankings, attract traffic, and increase conversions for e-commerce websites.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen help build a globally accessible e-commerce store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our e-commerce solutions support global access with multi-currency, multi-language functionality, and international shipping options.",
      },
    },
    {
      "@type": "Question",
      name: "How much time is required to develop an e-commerce solutions website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-commerce development typically takes between 3 to 8 weeks, depending on customization requirements and project scope.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide maintenance after the website goes live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer ongoing support and maintenance to ensure your e-commerce platform runs smoothly, securely, and stays up to date.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate CRM and ERP systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate CRM and ERP systems to streamline business operations and improve data management within your e-commerce platform.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer subscription-based e-commerce models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop subscription and membership-based e-commerce solutions with recurring billing for products, services, and SaaS businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries do you serve with e-commerce solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve a wide range of industries including retail, food, healthcare, education, travel, hospitality, and B2B wholesale.",
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
      cardBg: "bg-blue-100",
    },

    {
      title: "Improved Conversion Rates",
      description:
        "The primary determinant of encouraging visitors to follow the desired action is the ability to select layouts and workflows that are efficient in engaging the visitors and, hence, increasing sales, sign-ups, and leads. Call-to-actions and convincing design elements are strategically placed, which brings the conversions to the next level.",
      image: assets.eCommSol4,
      cardBg: "bg-green-100",
    },
    {
      title: "Intuitive, Responsive, and Accessible Design",
      description:
        "Ensure that the user experience is also good on other devices, such as those of a disabled user. Focusing on creating accessibility expands your audience and reinforces your brand image with the help of ecommerce website design.",
      image: assets.eCommSol5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Faster Load Times & Optimized Performance",
      description:
        "Quick loading of pages, easy navigation and effective apps reduce referred visits that exit instantly. Enhanced performance optimality leads to enhanced user delight and longer sessions.",
      image: assets.eCommSol6,
      cardBg: "bg-pink-100",
    },
    {
      title: "Scalable Architecture for Growth",
      description:
        "Design changes that could accommodate additional traffic, new functionality and larger geographical aspects without quality reduction. Scalable systems provide the opportunity of business to expand in a stable manner and without having to redesign the platform.",
      image: assets.eCommSol7,
      cardBg: "bg-purple-100",
    },
    {
      title: "Strong Branding & Visual Identity",
      description:
        "Attractive, customary designs convey the ideals of the company to its consumers in a clean and rather memorable way. A single visual identity is central to recognition and trust by users.",
      image: assets.eCommSol8,
      cardBg: "bg-red-100",
    },
    {
      title: "Seamless Integration with Tools & Services",
      description:
        "Integrate any third-party services to create a fully fledged ecosystem, including: connect CRMs, payment gateways, analytics or any other third-party services. Integration ensures there is efficiency in operations and improved user experience.",
      image: assets.eCommSol9,
      cardBg: "bg-blue-100",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "You can make UX and UI better, enhance the marketing approach, and enhance the products with the help of analytics and knowledge of how people behave. The daily optimisation will involve the users even more, and their loyalty will rise, which will result in the overall enhancement of the ROI.",
      image: assets.eCommSol10,
      cardBg: "bg-green-100",
    },
    {
      title: "Security & Privacy Compliance",
      description:
        "Install all security controls that comply with the industry requirements and the optimal cybersecurity standards to protect the data of the users. Compliance and earning the confidence of the users will ensure that your platform is not only credible but also secure for everyone who will use it.",
      image: assets.eCommSol11,
      cardBg: "bg-yellow-100",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "CRM & ERP Systems",
      description:
        "Enhance the efficiency of business data flowing to improve its management.",
      icon: <FaReact className="text-4xl text-white" />,
    },
    {
      title: "AI-Powered Product Suggestions",
      description: (
        <>
          Make more sales with smart product recommendations using{" "}
          <a
            href="https://www.capyngen.com/custom-ai-solutions"
            className="text-blue-500 font-semibold"
          >
            Top AI software solutions in Gurgaon
          </a>
          .
        </>
      ),
      icon: <FaLaravel className="text-4xl text-white" />,
    },
    {
      title: "Chatbots for Support",
      description:
        "Allow chatbots to provide immediate assistance and increase the level of customer satisfaction.",
      icon: <FaCubes className="text-4xl text-white" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "B2C (Business to Consumer) Stores",
      description:
        "They are online retail stores that are direct and are designed to sell products to the end consumers.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "B2B (Business to Business) Platforms",
      description:
        "These are scalable e-commerce services that are created to fulfil the requirements of wholesale and enterprise.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Multi-Vendor Marketplaces",
      description:
        "Several sellers are allowed to post their products on your platform and sell them.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Subscription-Based Ecommerce",
      description:
        "It is an ideal billing model when it comes to recurring transactions like sub boxes and membership transactions.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Dropshipping Stores",
      description:
        "One can begin an e-commerce business by using a little money and having no inventory.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Social Commerce Solutions",
      description:
        "Selling on social media is possible with the assistance of built-in shopping capabilities.",
      icon: <FaHeart className="text-4xl" />,
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
          icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
        },
        { name: "Wix", icon: "https://cdn.worldvectorlogo.com/logos/wix.svg" },
        {
          name: "Squarespace",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Squarespace_Logo.png?20130318145354",
        },
        {
          name: "Webflow",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Webflow_logo_2023.svg/1600px-Webflow_logo_2023.svg.png?20231006234957",
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
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        },
        {
          name: "PHP (Laravel)",
          icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
        },
        {
          name: "Python (Django)",
          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
      ],
    },
    {
      title: "Databases",
      items: [
        {
          name: "MongoDB",
          icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          name: "MySQL",
          icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        },
      ],
    },
    {
      title: "UI/UX & Design",
      items: [
        {
          name: "Figma",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
        {
          name: "Adobe XD",
          icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
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

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Smart E-Commerce Solutions – India’s Leading E-Commerce Solution
          Provider
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
      <div className="">
        <Banner5
          title={
            <>
              <span className="text-2xl md:text-4xl">
                Instant Smart E-Commerce Solutions{" "}
              </span>
              <span className="text-blue-600">
                {" "}
                – Get India’s #1 Trusted E-Commerce Platform
              </span>
            </>
          }
          description="Bring together, build, and flourish your online store using the effective and user-friendly e-commerce solutions offered by Capyngen, bearing in mind the modern business dynamics as a major e-commerce business solutions company."
          primaryBtnText="Start your Store Today"
          primaryBtnLink="/contact-us"
          image={assets.eCommSol1}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Jump-start your e-commerce business using Capyngen easy to use e-commerce solutions. We not just design, develop and market, but we also transport you and your store to the other side of the world to enable you prosper as the best ecommerce platform in India to grow scalable.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Why Your Business Needs an E-Commerce Solution"
          description={[
            <span>
              No longer is it sufficient to possess an ecommerce platform, that
              one can depend on, but now it is necessary as a professional
              e-commerce solutions. Through an effective business plan of a
              ecommerce website development solutions, your business can:
            </span>,
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "",
                    text: "Reaching out to a global market and making sales any day of the week, and at any time of the day or night.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Reducing your business costs as opposed to the normal shops.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Creating customer trust via secure payments.x",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Proper management of stocks and orders.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Providing the customers with a chance to enjoy a fast and convenient shopping experience.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Climbing or descending your ecommerce business without hustling when you make.",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    <strong className={`${color} drop-shadow-md`}>
                      {title}
                    </strong>
                    {text}
                  </li>
                ))}
              </ul>
              <p>
                The e-commerce solutions that are available to Capyngen for the
                e-commerce will be matched with your company goals towards the
                e-commerce solutions for businesses, whether you are a new
                entrant in the market or intend to expand to other international
                markets.
              </p>
            </>,
          ]}
          image={assets.eCommSol2}
          isHidden={true}
          background={assets.patternBg1}
        />
        <CardsSectionImage
          heading="E-Commerce Solutions Services We Offer"
          subheading="We develop an all-inclusive array of E commerce solutions services, which are business-specific and are based on the size of the business, including:"
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <CardsSection
          heading="Types of E-Commerce Solutions"
          subheading="Capyngen offers flexible e-commerce software solutions packages that suit any business model, using our ecommerce development company experience:"
          services={cardsSectionData2}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
          hoverTextColor=""
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Book a Free Consultation"
          description={[
            "Arrange an appointment with our online business specialists to know more about our eCommerce development services that will transform your business. You can easily share with us your online victory.",
          ]}
          buttonText="Book Now"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSection
          heading="Smart Integrations That Power Your Store"
          subheading="This is what Capyngen will connect your ecommerce website development with highly impactful resources to enhance the performance of your site:"
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height="h-72"
        />
        <IndustryServices
          heading="E-Commerce Marketing Made Simple"
          subheading={
            <>
              Capyngen information based marketing is the way your E commerce
              solutions services can make contact with the appropriate audience
              with the use of{" "}
              <a
                href="https://www.capyngen.com/digital-marketing"
                className="text-blue-500 font-semibold"
              >
                digital marketing services
              </a>
              :
            </>
          }
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={servicesData}
        />
        <BenefitsSection
          heading="Benefits of Choosing Capyngen’s E-Commerce Solutions"
          desc="Customer Friendliness experience to the customers, quick, user-friendly, and easy-to-use shops that enhance contact with the customers."
          benefits={solutionsData}
          footerNote=""
          image={assets.eCommSol18}
        />
        <TechStack
          heading="Technologies Capyngen Uses for Ecommerce Mobile Apps"
          subheading=""
          categories={techStack}
        />
        <FullSizeImageSection
          backgroundImage={assets.eCommSolFullsize}
          title="Build your online store with confidence"
          description="Our company is the ideal firm that can launch a new best ecommerce platfrom that is easy to use, secure and expandable."
          buttonText="Launch My Store"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <HowWeWork
          heading="E-Commerce Solutions Process"
          desc=""
          steps={steps}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Why Capyngen is the Right Partner for E-Commerce Growth"
          description={[
            "Capyngen is a global enterprise E commerce solutions company that start-ups, small and medium-sized businesses, as well as large corporate organisations rely on. We are highly experienced and skilled in e-commerce website development solutions and e-commerce applications development, hence we can work out e-commerce solutions that are not only scalable and well-protected but also future-proof. Therefore, when it comes to opening your very first online store or even trying to connect with the foreign markets in e-commerce, Capyngen will continue to remain the optimal choice in the context of your rapid expansion.",
          ]}
          buttonText="Contact Us"
          image={assets.getStarted}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Scale Your Ecommerce Business"
          description={[
            "You can put your every finger on your mouth when using Capyngen e-commerce solutions to build your business- Fast websites, secure check out, marketing tools and support.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default ECommerceSolution;
