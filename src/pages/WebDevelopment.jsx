import React from "react";
import { assets } from "../assets/assets";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import TopRatedCompany from "../components/TopRatedCompany";
import GetStarted from "../components/GetStarted";
import {
  FaCode,
  FaWordpressSimple,
  FaShoppingCart,
  FaReact,
  FaLaravel,
  FaCubes,
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import BannerRollingGallery from "../components/BannerRollingGallery";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import TechStack from "../components/TechStack";
import ScrollRevealEffect from "../components/ScrollRevealEffect";

const WebDevelopment = () => {
  const faqItems = [
    {
      question: "What is website development?",
      answer:
        "Website development is a process of creating and maintaining websites which include front-end, back-end, and full-stack development along with ensuring functionality, performance, and user experience.",
    },
    {
      question: "Why is professional website development important?",
      answer:
        "A professionally developed website is a tool that can enhance trust, attract potential visitors, improve the level of engagement, and increase the number of customers among the visitors.",
    },
    {
      question: "What services are included in website development services?",
      answer:
        "Services covered are: custom website design, responsive design, CMS integration, web application development, e-commerce solutions, SEO, and ongoing maintenance.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The development period depends on the complexity but the general duration of standard business websites usually falls between 3–12 weeks.",
    },
    {
      question: "Can Capyngen handle custom website development?",
      answer:
        "Of course! We create websites that are totally your brand and business that meets your persona and content.",
    },
    {
      question: "Do you provide responsive website design?",
      answer:
        "Definitely. All websites are designed to be compatible with desktops, tablets, and mobile devices so that users can have a trouble-free experience.",
    },
    {
      question: "What CMS platforms do you work with?",
      answer:
        "We use WordPress, Shopify, Joomla, Drupal, and various other platforms and only choose the one that meets your needs the best.",
    },
    {
      question: "Can you develop e-commerce websites?",
      answer:
        "Yes, we provide ecommerce web developer services with the main features such as convenient payment methods, catalog of products, and easy checkout process.",
    },
    {
      question: "Do you offer web application development?",
      answer:
        "Yes, we make business web applications that are interactive and scalable for today’s business processes.",
    },
    {
      question: "How do you ensure SEO-friendly development?",
      answer:
        "Our developers utilize clean coding, fast loading speeds, optimized images, meta tags, and schema markup in their projects.",
    },
    {
      question: "Can you integrate third-party APIs and tools?",
      answer:
        "Yes, we integrate CRMs, analytics tools, payment gateways, marketing platforms, and other third-party services.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we provide regular updates, backups, security monitoring, and ongoing technical support.",
    },
    {
      question: "What makes Capyngen the best website development company?",
      answer:
        "We combine creative inspiration, the latest technology, and business acumen to deliver high-quality, dependable, and scalable website development services.",
    },
    {
      question: "Can you build multilingual websites?",
      answer:
        "Yes, we offer support for multilingual and internationalization apps to assist firms in expanding their customer base all over the world.",
    },
    {
      question: "Do you offer landing page development?",
      answer:
        "Of course, we create marketing-driven, optimized-for-campaign landing pages that attract leads and convert visitors into customers.",
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
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          name: "Svelte",
          icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
        },
        {
          name: "Flutter (Web)",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
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
          name: "Python (Django/Flask)",
          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java (Spring)",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP (Laravel)",
          icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
        },
        {
          name: "Go",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
        },
        {
          name: ".NET",
          icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
        },
      ],
    },
    {
      title: "Platforms",
      items: [
        {
          name: "iOS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
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
          icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
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
          name: "Oracle",
          icon: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.worldvectorlogo.com/logos/redis.svg",
        },
      ],
    },
    {
      title: "UI/UX",
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

  const cardsSectionData2 = [
    {
      title: "Expertise in the latest technologies",
      description:
        "We implement solutions using the newest frameworks and tools for a solid website.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Cost-effective, dependable, and scalable solutions",
      description:
        "Web development services of excellent quality for startups, SMEs, and enterprises.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Experienced Team That Creates User-Friendly Designs",
      description:
        "Our team guarantees the creation of intuitive, mobile-friendly, and interactive websites.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Focus on Safety, Quickness and SEO-Optimized Websites",
      description:
        "Your brand will be more visible on the Internet as your website will be fast, safe, and optimized for search engines.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Greater Brand Awareness and Trustworthiness",
      description:
        "Professional websites that mirror your brand will help you gain the trust of your audience.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Higher Customer Interaction and Loyalty",
      description:
        "Websites are created to enhance conversions and user satisfaction.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis & Planning",
      description:
        "Deep diving into your business objectives, target market, and project requirements.",
    },
    {
      step: "Step 02",
      title: "Design & Prototyping",
      description:
        "Developing wireframes and visual mockups for customer validation.",
    },
    {
      step: "Step 03",
      title: "Front-End & Back-End Development",
      description:
        "Crafting websites that are responsive, scalable, and functional.",
    },
    {
      step: "Step 04",
      title: "Quality Assurance & Testing",
      description:
        "Checking for smooth running of the websites across browsers and devices with no errors.",
    },
    {
      step: "Step 05",
      title: "Launch & Deployment",
      description:
        "Putting your website on the internet with complete functionality and safety.",
    },
    {
      step: "Step 06",
      title: "Maintenance & Support",
      description:
        "Periodic updates, backups, and continuous technical support.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "HTML/CSS & JavaScript Development",
      description:
        "At Capyngen, we don't build websites with templates; instead, every website is tailor-made to match the unique needs of your brand. We start from scratch and complete a lightweight, lightning-fast website without compromising maximum performance and a seamless user experience.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "WordPress Development",
      description:
        "The squad of developers here can, with no trouble, create highly flexible, user-friendly websites for every kind of business - whether it be a blog, portfolio, or corporate site. Capyngen works to give you a website that is both easy to handle and designed to attract and convert your visitors.",
      icon: <FaWordpressSimple className="text-4xl text-white" />,
    },
    {
      title: "Shopify & E-commerce Platforms",
      description:
        "We make it easy for you by delivering trusted, sales-oriented online stores with smooth browsing, safe payment methods, and quick checkout processes. The e-commerce websites of Capyngen are built to increase revenues and customer happiness.",
      icon: <FaShoppingCart className="text-4xl text-white" />,
    },
    {
      title: "React & Angular Development",
      description:
        "Capyngen constructs vibrant, interactive web applications that reflect the core of your business idea. We guarantee with our React and Angular technologies the delivery of enticing, up-to-date web experiences for the users of your brand, no matter their device, computer, tablet, or smartphone.",
      icon: <FaReact className="text-4xl text-white" />,
    },
    {
      title: "PHP & Laravel Development",
      description:
        "The team at Capyngen is hard at work designing strong and scalable back-end systems that will suit your company’s needs for years to come. Thus, your website will not only be stable, but it will also be able to easily accommodate any upgrades.",
      icon: <FaLaravel className="text-4xl text-white" />,
    },
    {
      title: "CMS & Custom Solutions",
      description:
        "The use of platforms such as Joomla, Drupal, as well as other similar ones, is what we do in order to deliver fully personalized CMS solutions that fit your needs perfectly. The customized nature of Capyngen makes sure that you get full access, adaptability, and convenience in running your business.",
      icon: <FaCubes className="text-4xl text-white" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Custom Website Development",
      description:
        "Naturally your site would have been built around you without a doubt. We will thus help you project your business objectives and dreams by creating a spectacular.",
      image: assets.webDev2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Responsive & Mobile-Friendly Design",
      description:
        "The company Capyngen is wonderful in delivering an experience that is the same as great as the one on a desktop or a mobile device.",
      image: assets.webDev3,
      cardBg: "bg-green-100",
    },
    {
      title: "E-commerce Development",
      description:
        "The easiest shopping browsers are the ones you create just like the walkthrough which customers love to use to explore your products and installations running CSE fuels to grow sales.",
      image: assets.webDev4,
      cardBg: "bg-yellow-100",
    },
    {
      title: "CMS Development",
      description:
        "WordPress, Drupal, Joomla, and other platforms are the content management systems developers use to create user-friendly and effective website management solutions.",
      image: assets.webDev5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Web Application Development",
      description:
        "As a premier Indian web application development company, we provide the creation of interactive and escalable conversation projects.",
      image: assets.webDev6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Offer the websites that even without having the internet connection are as fast in performance as the native mobile apps are.",
      image: assets.webDev7,
      cardBg: "bg-red-100",
    },
    {
      title: "API Integration Services",
      description:
        "API integrations are ways which make not only the website CRMs but also externals i.e. payment gateways plus other software working together with your business to run at peak level.",
      image: assets.webDev8,
      cardBg: "bg-blue-100",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Support and maintenance services of Capyngen will not only make your site be safe but also will keep it up to date with the fastest Kit with exclusive warranties, upgrades faster than those experienced in regular services.",
      image: assets.webDev9,
      cardBg: "bg-green-100",
    },
    {
      title: "Performance Optimization",
      description:
        "Remove all your unnecessary disk images, JavaScript, and caching will serve to make your website load at lightning speed and thus to provide excellent user experience.",
      image: assets.webDev10,
      cardBg: "bg-yellow-100",
    },
    {
      title: "SEO-Friendly Development",
      description:
        "Create websites that on the SEO-friendly development are starting and completing the sequence by following the best practice that is Google will put it on a higher position of its organic match results and thus will be able to draw more visitors.",
      image: assets.webDev11,
      cardBg: "bg-pink-100",
    },
    {
      title: "UI/UX Design Services",
      description:
        "Making stunning ease of use and confidence building applications will raise user engagement and leave a long-lasting memory.",
      image: assets.webDev12,
      cardBg: "bg-purple-100",
    },
    {
      title: "Multilingual & Internationalization Support",
      description:
        "Websites in multi-languages let companies put out their messages close to the world and still have someone there to receive them in the right language.",
      image: assets.webDev13,
      cardBg: "bg-red-100",
    },
    {
      title: "Cloud-Based Web Solutions",
      description:
        "Using secure and scalable cloud platforms allow for better performance, reliability, and flexibility.",
      image: assets.webDev14,
      cardBg: "bg-pink-100",
    },
    {
      title: "Landing Page Development",
      description:
        "Develop the promotion’s high-conversion landing pages that start gathering leads, demand, and efficiently generate sales.",
      image: assets.webDev15,
      cardBg: "bg-purple-100",
    },
    {
      title: "Integration with Analytics & Marketing Tools",
      description:
        "Monitoring your site’s performance through the implementation of various tools such as Google Analytics, Hotjar, alongside CRM integrations which make strategizing a whole lot easier.",
      image: assets.webDev16,
      cardBg: "bg-red-100",
    },
  ];

  const cardsSectionSliderData1 = [
    {
      title: "Startups & Small Businesses",
      desc: "We offer affordable website development services for small businesses.",
      image: assets.webDev17,
      textColor: "text-white",
    },
    {
      title: "E-commerce & Retail",
      desc: "We provide complete ecommerce website development services to help you increase your sales.",
      image: assets.webDev18,
      textColor: "text-white",
    },
    {
      title: "Healthcare & Education",
      desc: "User-friendly and reliable websites for healthcare and education institutions.",
      image: assets.webDev19,
      textColor: "text-white",
    },
    {
      title: "Real Estate & Travel",
      desc: "Visually attractive and user-friendly websites.",
      image: assets.webDev20,
      textColor: "text-white",
    },
    {
      title: "Corporate Enterprises",
      desc: "Custom website designs that are scalable for large organizations.",
      image: assets.webDev21,
      textColor: "text-white",
    },
    {
      title: "Trading Sites",
      desc: " Easy to use, fast, and dependable platforms for trading businesses.",
      image: assets.webDev22,
      textColor: "text-white",
    },
  ];

  useSplitTextAnimation("h1");

  return (
    <div className="relative">
      <BannerRollingGallery autoplay={true} pauseOnHover={true} />
      <div className="relative z-10">
        <TopRatedCompany
          title="Why Web Development Matters Today?"
          description={[
            `Capyngen is convinced that a strong online presence is not a mere luxury any more, but rather a must-have for the expansion of a business. The companies that decide to use our services for the development of their professional websites are the ones that become the most trusted by their target audience, attract more visitors, and raise the level of their engagement.`,
            `It does not matter whether your company is a startup or a large conglomerate, the services offered by us in the field of custom website development work with the sole objective of getting your brand noticed out of the crowd. Capyngen website is your online success is ensured by every component starting from visually attractive layouts to feature-rich functionality, all of which are meticulously designed to give you a smooth and a captivating user experience.`,
            <p key="equation" className="text-2xl font-bold text-cyan-400 mt-6">
              Web Development ={" "}
              <span className="text-purple-400">Technology</span> +{" "}
              <span className="text-pink-400">Creativity</span> +{" "}
              <span className="text-green-400">Strategy</span>
            </p>,
          ]}
          image={assets.webDev1}
          isHidden={true}
          background={assets.patternBg1}
        />
        <CardsSection
          heading="Our Web Development Services"
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          textSize="text-md"
        />
        <CardsSectionImage
          heading="Our Web Development Features"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          description={[
            "Create the online representation of your ideas, that speaks volumes! Reach out to the top web development company in India, Capyngen, for tailored web development solutions by an expert and quality web development services that increase your business and attract the audience.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSection
          heading="Why Choose Capyngen for Web Development?"
          subheading=""
          services={cardsSectionData2}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
        />
        <CardsSectionSlider
          heading="Industries We Serve"
          subheading=""
          cardBg="bg-transparent"
          hoverBg=" hover:bg-blue-50"
          textColor="text-gray-800"
          textSize="text-xl"
          sectionBg="bg-black/90"
          height="h-78"
          headColor="text-white"
          services={cardsSectionSliderData1}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          description={[
            "Have you prepared to be noticed on the Internet? Contact Capyngen in order to receive a website development service that suits your small business which includes e-commerce and a mobile-friendly website that matches your brand.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork heading="Our Development Process" desc="" steps={steps} />
        <TechStack
          heading="Transform Your Web Development and Consulting with Our Expert Tech Stack"
          subheading=""
          categories={techStack}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          description={[
            "Do you want a website that will help your business grow? So, for custom website services and professional website development, get in touch with Capyngen, the best website development company in India!",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default WebDevelopment;
