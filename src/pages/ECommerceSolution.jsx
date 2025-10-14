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

const ECommerceSolution = () => {
  const faqItems = [
    {
      question: "What is an e-commerce solution?",
      answer:
        "An e-commerce solution is a complete system that supports companies in selling their products or services over the internet. It includes website design, development, payment integration, marketing, and support.",
    },
    {
      question: "Why does my business need an e-commerce website?",
      answer:
        "An e-commerce website enables your company to make sales 24/7, reach global customers, reduce operating costs, and offer a pleasant shopping experience that boosts purchasing power.",
    },
    {
      question:
        "Do you offer a mobile e-commerce application for both Android and iOS devices?",
      answer:
        "Yes! Capyngen builds fast and reliable mobile e-commerce apps for Android and iOS using technologies like Flutter, React Native, and native languages.",
    },
    {
      question:
        "Could a platform like Capyngen be able to create a multi-vendor marketplace similar to Amazon?",
      answer:
        "Absolutely. We develop scalable multi-vendor marketplaces where multiple sellers can list and sell products, similar to Amazon or Flipkart.",
    },
    {
      question: "Which payment gateways are available for integration?",
      answer:
        "We support major global and local payment gateways including Stripe, PayPal, Razorpay, and many others for fast and reliable transactions.",
    },
    {
      question:
        "Do you provide SEO and digital marketing services for e-commerce?",
      answer:
        "Yes. We implement SEO and digital marketing strategies to improve site ranking, attract visitors, and convert them into customers effectively.",
    },
    {
      question:
        "Do you think Capyngen can help me develop my e-store to be accessible worldwide?",
      answer:
        "Indeed. Our solutions support global accessibility with features like multi-currency, multi-language, and international shipping options.",
    },
    {
      question: "How much time is needed to build an e-commerce website?",
      answer:
        "Depending on the project scope, it typically takes between 3 to 8 weeks from planning to launch.",
    },
    {
      question: "Do you assure maintenance of the project after it goes live?",
      answer:
        "Definitely. We provide ongoing support and maintenance to ensure smooth operation, security, and updates for your e-commerce store.",
    },
    {
      question: "Is it possible for you to link CRM and ERP systems together?",
      answer:
        "Yes! We integrate leading CRM and ERP platforms to streamline and enhance your business operations.",
    },
    {
      question:
        "Do you have any subscription-based models for e-commerce purposes?",
      answer:
        "Yes. We build subscription and membership platforms with recurring billing for products, services, or SaaS businesses.",
    },
    {
      question: "What types of businesses are you willing to help?",
      answer:
        "We work with a wide range of industries including retail, food, medical, education, travel, hospitality, and B2B wholesale.",
    },
    {
      question: "Will my e-commerce website be optimized for smartphones?",
      answer:
        "Yes. All our e-commerce websites are fully responsive and mobile-friendly for seamless shopping on any device.",
    },
    {
      question: "Is it possible to have my custom domain and hosting?",
      answer:
        "Yes. You can use your own domain and hosting, or we can manage it for you.",
    },
    {
      question: "How to start a project with Capyngen?",
      answer:
        "Simply book a free consultation or message our team. We'll understand your goals and craft a tailored e-commerce solution for you.",
    },
  ];
  const servicesData = [
    {
      image: assets.eCommSol12,
      title: "Search Engine Optimization (SEO)",
      desc: "Make your website be ranked at the top of Google.",
    },
    {
      image: assets.eCommSol13,
      title: "Social Media Integration",
      desc: "Get more customers and advertising your products directly on Instagram, Facebook, and LinkedIn.",
    },
    {
      image: assets.eCommSol14,
      title: "Email & SMS Campaigns",
      desc: "Revive relationships with customers and stimulate repeat purchases.",
    },
    {
      image: assets.eCommSol15,
      title: "Content Marketing",
      desc: "Gain the trust of visitors and attract the traffic with helpful content.",
    },
    {
      image: assets.eCommSol16,
      title: "Paid Advertising (PPC)",
      desc: "Get targeted traffic to your online shop right away.",
    },
    {
      image: assets.eCommSol17,
      title: "Analytics & Conversion Tracking",
      desc: "Evaluate the results and evolve effectively.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Enhanced User Engagement & Retention",
      description:
        "Start building user-centered and interactive offerings which attract users to come back thus increasing loyalty and long-term engagement. User-engagement platforms keep users discovering more about your platform and coming back regularly.",
      image: assets.eCommSol3,
      cardBg: "bg-blue-100",
    },

    {
      title: "Improved Conversion Rates",
      description:
        "Selecting layouts and workflows that engage visitors is the main factor in motivating visitors to take the desired action, thus increasing sales, sign-ups, and leads. Strategically placed call-to-actions and persuasive design elements take conversions a step further.",
      image: assets.eCommSol4,
      cardBg: "bg-green-100",
    },
    {
      title: "Intuitive, Responsive, and Accessible Design",
      description:
        "Make sure that the user experience is equally good on all devices, including those for users with disabilities. Accessibility-focused design widens your audience base and strengthens your brand image.",
      image: assets.eCommSol5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Faster Load Times & Optimized Performance",
      description:
        "Fast-loading pages, easy navigation, and efficient apps decrease visits that leave immediately. Optimized performance improves user delight and promotes longer sessions.",
      image: assets.eCommSol6,
      cardBg: "bg-pink-100",
    },
    {
      title: "Scalable Architecture for Growth",
      description:
        "Develop changes that would be able to absorb more traffic, new features, and bigger geographic features without losing quality. Scalable systems give room for businesses to grow with stability and without needing to redesign the platform.",
      image: assets.eCommSol7,
      cardBg: "bg-purple-100",
    },
    {
      title: "Strong Branding & Visual Identity",
      description:
        "Appealing, regular, designs bring across the company’s ideals to its customers in a clear and somewhat memorable manner. One visual identity at the core of recognition and trust with users.",
      image: assets.eCommSol8,
      cardBg: "bg-red-100",
    },
    {
      title: "Seamless Integration with Tools & Services",
      description:
        "Connect CRMs, payment gateways, analytics, or any other third-party services to form a complete ecosystem. Integration guarantees operational efficiency as well as a better user experience.",
      image: assets.eCommSol9,
      cardBg: "bg-blue-100",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "With the help of analytics and understanding of user behavior, you can improve UI/UX, marketing strategies, and product offerings. Optimization on a daily basis engages users further, their loyalty increases, which in turn leads to a higher overall ROI.",
      image: assets.eCommSol10,
      cardBg: "bg-green-100",
    },
    {
      title: "Security & Privacy Compliance",
      description:
        "Employ all the security measures that are in line with the industry provisions and the best cybersecurity practices to secure users' data. Adhering to compliance and gaining users' trust will make your platform reliable as well as safe for all users.",
      image: assets.eCommSol11,
      cardBg: "bg-yellow-100",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "CRM & ERP Systems",
      description:
        "Make the flow of your business data more efficient for easier management.",
      icon: <FaReact className="text-4xl text-white" />,
    },
    {
      title: "AI-Powered Product Suggestions",
      description:
        "Get more sales through intelligent suggestions of products.",
      icon: <FaLaravel className="text-4xl text-white" />,
    },
    {
      title: "Chatbots for Support",
      description:
        "Let chatbots give instant help and raise customer happiness level.",
      icon: <FaCubes className="text-4xl text-white" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "B2C (Business to Consumer) Stores",
      description:
        "These are direct online retail stores created to sell products to end customers.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "B2B (Business to Business) Platforms",
      description:
        "These are scalable ecommerce services that are developed to meet the needs of wholesale and enterprise.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Multi-Vendor Marketplaces",
      description:
        "Multiple vendors can list their products and sell them through your platform.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Subscription-Based Ecommerce",
      description:
        "This is a perfect billing model for recurring transactions such as subscription boxes and memberships.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Dropshipping Stores",
      description:
        "You can start an ecommerce business with a small amount of money and no stock.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Social Commerce Solutions",
      description:
        "With the help of integrated shopping features, you can sell directly on social media platforms.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const solutionsData = [
    {
      title: "Fast & Secure Checkout Process",
      desc: "Eliminate cart abandonment to a great extent with an effortless payment flow.",
    },
    {
      title: "Scalable & Flexible for Business Growth",
      desc: "Our ecommerce website design will be with you whether you are a small town business or take it to the international market.",
    },
    {
      title: "Increased Sales & Brand Reach",
      desc: "Make your brand visible to the targeted audience by utilizing the robust ecommerce business solutions.",
    },
    {
      title: "Advanced Integrations & Automation",
      desc: "Cut down on time and errors considerably with the implementation of smart systems.",
    },
    {
      title: "Dedicated Support & Maintenance",
      desc: "Always get the assistance of a professional, no matter where you are in the world.",
    },
  ];
  const techStack = [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
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
          name: "Python",
          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        },
      ],
    },
    {
      title: "Platforms",
      items: [
        {
          name: "iOS",
          icon: "https://cdn.worldvectorlogo.com/logos/ios-1.svg",
        },
        {
          name: "Android",
          icon: "https://cdn.worldvectorlogo.com/logos/android-4.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          name: "MongoDB",
          icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "Oracle",
          icon: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
        },
      ],
    },
    {
      title: "UI/UX",
      items: [
        {
          name: "Adobe XD",
          icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        },
        {
          name: "InVision",
          icon: "https://cdn.worldvectorlogo.com/logos/invision-1.svg",
        },
      ],
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Get a detailed insight into the business goals, target audience, and, in general, the needs of the application. Such an approach guarantees that the tailored e-commerce design and development solutions will be built on a solid foundation.",
    },
    {
      step: "Step 02",
      title: "Planning & Strategy",
      description:
        "Construct a detailed roadmap, pick the suitable technologies, and establish your milestones. With a good plan, the work keeps the project on track in terms of time and business goals.",
    },
    {
      step: "Step 03",
      title: "UI/UX Design",
      description:
        "Come up with eye-catching and user-friendly interfaces which allow users to enjoy their experience. Successful e-commerce UI/UX design is the main driver of customer engagement and conversions growing.",
    },
    {
      step: "Step 04",
      title: "Development",
      description:
        "Develop e-commerce websites or mobile apps that are sturdy, scalable, and high-performing. Our development process is centered on security, future scalability, and clean coding.",
    },
    {
      step: "Step 05",
      title: "Integration & Testing",
      description:
        "Connect APIs, payment gateways, databases, and third-party tools without any trouble. Hardcore testing is the time when they iron out any bugs which therefore should result in the flawless function, quickness, and security on all devices.",
    },
    {
      step: "Step 06",
      title: "Deployment & Maintenance",
      description:
        "The platform is going to be easily launched and will receive updates and technical assistance continually. Systematic maintenance is taking care of your e-commerce solutions to run smoothly, be fast and fully optimized.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="">
        <Banner5
          title={
            <>
              <span className="text-2xl md:text-4xl">
                Transform Your Business with{" "}
              </span>
              <span className="text-blue-600">Smart E-Commerce Solutions</span>
            </>
          }
          description="Use the efficient and intuitive e-commerce solution provided by Capyngen to construct, expand and prosper your online store keeping in mind the contemporary business trends."
          primaryBtnText="Start your Store Today"
          primaryBtnLink="#"
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
            "Get your ecommerce business up and running with Capyngen’s intuitive ecommerce solutions. We don’t only design, develop and market; we also take you and your store to the other side of the world to make you thrive.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Why Your Business Needs an E-Commerce Solution"
          description={[
            `It is no longer enough to have an ecommerce platform that you can rely on - it is now essential. By employing a well-crafted ecommerce web development plan, your enterprise is capable of:`,
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "",
                    text: "Getting in touch with a worldwide audience and selling products at any time of a day or night.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Lowering your business expenses compared to traditional stores.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Establishing customer confidence through payment systems that are safe.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Effectively controlling stocks and orders.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Giving customers the opportunity to have a quick and easy shopping experience.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Going up or down in your ecommerce business without any hustle when you gain.",
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
                The web solutions that Capyngen has for the ecommerce are
                designed to align with your business objectives, whether you are
                a newcomer to the market or planning to go abroad.
              </p>
            </>,
          ]}
          image={assets.eCommSol2}
          isHidden={true}
          background={assets.patternBg1}
        />
        <CardsSectionImage
          heading="E-Commerce Solutions Services We Offer"
          subheading="We create a comprehensive set of online store solutions that are industry-specific and depend on the size of the business, ranging from:"
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <CardsSection
          heading="Types of E-Commerce Solutions"
          subheading="Capyngen provides adaptable ecommerce software that fits any business model:"
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
            "Schedule a call with our online business experts to learn about our ecommerce development services that can revamp your enterprise. Sharing your online victory with us is made easy.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSection
          heading="Smart Integrations That Power Your Store"
          subheading="Capyngen links your ecommerce web solutions with high-impact resources to increase your site’s performance:"
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
          subheading="Capyngen data-driven marketing helps your ecommerce platform solutions to reach the right audience:"
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={servicesData}
        />
        <BenefitsSection
          heading="Benefits of Choosing Capyngen’s E-Commerce Solutions"
          desc="User-Friendly Experience for Customers – Rapid, intuitive, and simple-to-use stores that increase interaction with users."
          benefits={solutionsData}
          footerNote=""
          image={assets.eCommSol18}
        />
        <TechStack
          heading="Technologies Capyngen Uses for Ecommerce Mobile Apps"
          subheading=""
          categories={techStack}
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
            "Capyngen is a worldwide e-commerce solutions provider who is relied on by startups, small and medium-sized businesses, and large corporate companies. Our profound knowledge in e-commerce website development and e-commerce app development allows us to provide solutions that are not only scalable and secure but also future-ready. So, if you are starting your very first online store or aiming to reach out to foreign e-commerce markets, Capyngen will still be the right pick for your speedy growth.",
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
            "With Capyngen’s ecommerce web solutions, you can have everything at your fingertips to grow your business — fast websites, secure checkouts, marketing tools, and expert support.",
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
