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
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/web-development#webpage",
  url: "https://www.capyngen.com/web-development",
  name: "Web Development Services | Best Website Development Company in India",
  description:
    "We offer professional web development services to build fast and scalable websites. Choose the best website development company in India for your business needs.",
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
    url: "https://www.capyngen.com/assets/webDevFullSize-BP-l_Fzm.png",
    caption: "Web Development Services by Capyngen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/web-development#service",
  name: "Web Development Services | Best Website Development Company in India",
  description:
    "We offer professional web development services to build fast and scalable websites. Choose the best website development company in India for your business needs.",
  url: "https://www.capyngen.com/web-development",
  serviceType: "Web Development Services",
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
    url: "https://www.capyngen.com/assets/webDevFullSize-BP-l_Fzm.png",
    caption: "Web Development Services by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development involves front-end, back-end, and full-stack development to ensure functionality, performance, and user experience of websites.",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of professional website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional website development helps build trust, attract visitors, increase engagement, and convert visitors into customers.",
      },
    },
    {
      "@type": "Question",
      name: "What services are included in website development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development services include custom web development, responsive design, CMS integration, web application development, e-commerce solutions, SEO, and website maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website development timelines typically range from 3 to 12 weeks, depending on project complexity and requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen offer custom web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen provides fully customized web development solutions tailored to your brand, business goals, and content requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide responsive web design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All websites we develop are fully responsive and optimized for desktop, tablet, and mobile devices.",
      },
    },
    {
      "@type": "Question",
      name: "Which CMS platforms do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with popular CMS platforms including WordPress, Shopify, Joomla, Drupal, and other platforms based on project needs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop e-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop feature-rich e-commerce websites with secure payment gateways, product management, and seamless checkout experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide web application development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build interactive and scalable web applications designed to support modern business processes.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure SEO-friendly website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow SEO best practices such as clean code, fast loading speed, optimized images, meta tags, and schema markup.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate third-party APIs and tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We integrate third-party tools including CRM systems, analytics platforms, payment gateways, and marketing software.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer website maintenance services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our website maintenance services include regular updates, backups, security monitoring, and ongoing technical support.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Capyngen considered the best website development company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen combines creative design, modern technologies, and business expertise to deliver reliable, scalable, and high-quality website development services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop multilingual websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop multilingual and internationalized websites to help businesses reach a global audience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer landing page development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We create conversion-focused landing pages optimized for marketing campaigns and lead generation.",
      },
    },
  ],
};

const WebDevelopment = () => {
  const faqItems = [
    {
      question: "What is website development?",
      answer:
        "Website development is a website development process that entails front-end, back-end, and full-stack development as well as functionality, performance, and user experience of websites by the best website development company in India.",
    },
    {
      question: "What is the significance of professional website development?",
      answer:
        "An expertly created site is an apparatus that can boost trust, lure possible visitors, raise the extent of involvement and raise the tally of customers among the visitors via the best website development services.",
    },
    {
      question: "Which services do website development services entail?",
      answer:
        "The services to be included are: custom web development company in India, responsive design, CMS integration, web application development, e-commerce solutions, SEO, and maintenance.",
    },
    {
      question: "What is the time taken to create a site?",
      answer:
        "The timeline of its development varies depending on the level of difficulty but the average time of developing a typical business website is between 3-12 weeks with the company of website development in Gurgaon.",
    },
    {
      question: "Is Capyngen able to deal with custom web development?",
      answer:
        "Of course! We develop websites that are entirely your brand and business, which fit your persona and content, being the best website development company in Gurgaon.",
    },
    {
      question: "Do you offer responsive web design?",
      answer:
        "Definitely. Every single site is tailored to the desktop, tablet, and mobile devices to ensure that the users have a hassle-free experience.",
    },
    {
      question: "Which CMS platforms do you interact with?",
      answer:
        "We work with WordPress, Shopify, Joomla, and Drupal, and other platforms, and select only the one where your needs will be the most satisfied.",
    },
    {
      question: "Are you able to come up with e-commerce websites?",
      answer:
        "Yes, we are offering ecommerce web developer best website development services and the key aspects of it are easy payment options, product list, and ease of checkout.",
    },
    {
      question: "Do you provide web application development?",
      answer:
        "Yes, we produce business web applications that are interactive and scaled to meet business processes today.",
    },
    {
      question:
        "What is your strategy to make sure to develop SEO-friendly content?",
      answer:
        "Clean code, fast loading, optimised images, meta tags, and schema markup are some of the elements that are used by our developers in their projects.",
    },
    {
      question: "Is it able to integrate third-party APIs and tools?",
      answer:
        "Yes, we incorporate CRMs, analytics, payment gateways, marketing platforms, and other third-party sales.",
    },
    {
      question: "Are you offering Web maintenance services?",
      answer:
        "Yes, we do regular updates, backups, security monitoring, and continual technical support.",
    },
    {
      question: "Why is Capyngen the best website development company?",
      answer:
        "We offer creative inspiration, the newest technology, and business skills to provide high-quality, reliable, and scalable best website development services as the best website development company in India.",
    },
    {
      question: "Do you have the ability to create multilingual websites?",
      answer:
        "Yes, we support multilingual and internationalisation apps to help companies increase the number of customers around the globe.",
    },
    {
      question: "Is landing page development available?",
      answer:
        "Naturally, we make marketing-oriented, campaign-optimised landing pages that are appealing to leads and transform visitors into buyers.",
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
        "Our solutions are based on the latest frameworks and tools of a good web site.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Cost-effective, dependable, and scalable solutions",
      description:
        "High-quality web development services of the best quality to startups, SMEs, and enterprises.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Experienced Team That Creates User-Friendly Designs",
      description:
        "Our team will ensure that it develops user-friendly, mobile sites, and interactive websites.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Focus on Safety, Quickness and SEO-Optimized Websites",
      description:
        "The Internet will make your brand more visible as your site will be quick, secure, and search engine optimized.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Greater Brand Awareness and Trustworthiness",
      description:
        "Professional websites that reflect your brand will contribute to winning the trust of your audience.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Higher Customer Interaction and Loyalty",
      description:
        "Sites are designed to improve web traffic and customer satisfaction.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis & Planning",
      description:
        "Exploring your business goals, market niche, and project needs.",
    },
    {
      step: "Step 02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes and visual mockups of customer validation.",
    },
    {
      step: "Step 03",
      title: "Front-End & Back-End Development",
      description:
        "Designing websites capable of responsiveness, scaling and functionality.",
    },
    {
      step: "Step 04",
      title: "Quality Assurance & Testing",
      description:
        "Ensuring that the websites run smoothly in cross-browers and devices without any errors.",
    },
    {
      step: "Step 05",
      title: "Launch & Deployment",
      description:
        "Placing your web site online in full functionality and security.",
    },
    {
      step: "Step 06",
      title: "Maintenance & Support",
      description:
        "Regular updates, backups, and uninterrupted technical support.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "HTML/CSS & JavaScript Development",
      description:
        "At Capyngen, the Best website development company in Gurgaon, we do not create templates and make your websites, but make a custom-built site that suits the individual needs of your brand. We begin afresh and make a lightweight, blistering-fast site without affecting maximum performance and smooth user experience.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "WordPress Development",
      description:
        "The team of web designers in this case can easily design extremely versatile and user-friendly websites of any type of business to be either a blog, portfolio or corporate site. Capyngen is a webite development company in Gurgaon and strives to present you with a website that is not only easy to manage but also one that is appealing and converts your visitors.",
      icon: <FaWordpressSimple className="text-4xl text-white" />,
    },
    {
      title: "Shopify & E-commerce Platforms",
      description:
        "We have simplified it by giving you quality, sales-driven online stores where one can browse smoothly, use secure online payment options and make check-outs within a short period of time. The e-commerce sites of Capyngen, the Best website development company in India, are designed to generate more revenues and customer satisfaction.",
      icon: <FaShoppingCart className="text-4xl text-white" />,
    },
    {
      title: "React & Angular Development",
      description:
        "Capyngen builds interactive, lively web-based applications that capture the essence of your business idea. Our React and Angular technologies are a promise that we will deliver the attractive and modern online experiences to the representatives of your brand, regardless of their device, computer, tablet, or smartphone.",
      icon: <FaReact className="text-4xl text-white" />,
    },
    {
      title: "PHP & Laravel Development",
      description:
        "Capyngen, the Custom web development company in India is busy in designing powerful and scalable back-end systems that will be in your company during the next several years. In this way, it will not only be a stable site but your site will also be capable of easily supporting any upgrading.",
      icon: <FaLaravel className="text-4xl text-white" />,
    },
    {
      title: "CMS & Custom Solutions",
      description:
        "What we do is the use of platforms like Joomla, Drupal along with other similar platforms so as to provide to you fully customized CMSs solutions that best suit your requirements. The tailor-made aspect of the Capyngen, the best website development company in Gurgaon, ensures that you have complete access, flexibility, and convenience of operating your business.",
      icon: <FaCubes className="text-4xl text-white" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Custom Website Development",
      description:
        "Of course you would have been central to the building of your site. We will therefore assist you with projecting your business goals and dreams by making a spectacle.",
      image: assets.webDev2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Mobile-Friendliness & Responsive Design",
      description:
        "The Capyngen the Best website development company in India which is as great as that of a desktop or a mobile device.",
      image: assets.webDev3,
      cardBg: "bg-green-100",
    },
    {
      title: "E-commerce Development",
      description:
        "The most comfortable shopping browsers are the ones you make like the walkthrough that the customers love to shop to see what you have on sale with CSE fuels and installations in operation to expand its sales.",
      image: assets.webDev4,
      cardBg: "bg-yellow-100",
    },
    {
      title: "CMS Development",
      description:
        "WordPress, Drupal, Joomla among others are the content management systems that developers employ in developing user friendly and effective web management solutions.",
      image: assets.webDev5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Web Application Development",
      description:
        "Being one of the leading Website development company in Gurgaon, we offer the development of interactive and scalable conversation projects.",
      image: assets.webDev6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Provide the sites which even when disconnected to the internet are as quick in operations as the native mobile applications.",
      image: assets.webDev7,
      cardBg: "bg-red-100",
    },
    {
      title: "API Integration Services",
      description:
        "Integrations API are methods that not only the website CRMs but also outsiders i.e. payment gateway as well as other software that collaborate with your business to perform with optimal efficiency.",
      image: assets.webDev8,
      cardBg: "bg-blue-100",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Capyngen, Custom web development company in India is specializing in Support and maintenance services and this is going to ensure that not only will your site be safe, but it will also be updated to the latest and fastest Kit with unique warranties and will upgrade more quickly than what one would have with regular services.",
      image: assets.webDev9,
      cardBg: "bg-green-100",
    },
    {
      title: "Performance Optimization",
      description:
        "Get rid of all your superfluous disk images, JavaScript, and caching will help to make your site load at hyperspeed and, therefore, offer great user experience.",
      image: assets.webDev10,
      cardBg: "bg-yellow-100",
    },
    {
      title: "SEO-Friendly Development",
      description:
        "Design websites that under the SEO friendly development are initiating and finishing the series by adhering to the most viable practice that Google will place it on a better ranking on its natural match result and therefore will be in a position to attract more visitors.",
      image: assets.webDev11,
      cardBg: "bg-pink-100",
    },
    {
      title: "UI/UX Design Services",
      description:
        "Creation of beautiful convenient use and trust-building applications will increase the participation of the users and create a lasting impression.",
      image: assets.webDev12,
      cardBg: "bg-purple-100",
    },
    {
      title: "Multilingual & Internationalization Support",
      description:
        "Multi-language websites enable the companies to post their messages near the globe and still have someone present there to accept their message in the appropriate language.",
      image: assets.webDev13,
      cardBg: "bg-red-100",
    },
    {
      title: "Cloud-Based Web Solutions",
      description:
        "Secure and scalable cloud platforms can be used to provide better performance, reliability and flexibility.",
      image: assets.webDev14,
      cardBg: "bg-pink-100",
    },
    {
      title: "Landing Page Development",
      description:
        "Create the high conversion landing pages of the promotion, which will initiate the lead, demand and effectively make sales.",
      image: assets.webDev15,
      cardBg: "bg-purple-100",
    },
    {
      title: "Analytics and Marketing Tools",
      description:
        "Keeping track of your performance with the use of the numerous tools like Google Analytics, Hotjar and integrating CRM that will make the process of strategy planning much easier.",
      image: assets.webDev16,
      cardBg: "bg-red-100",
    },
  ];

  const cardsSectionSliderData1 = [
    {
      title: "Startups & Small Businesses",
      desc: "Affordable website development company in Gurgaon: We provide affordable web developing company services to small businesses.",
      image: assets.webDev17,
      textColor: "text-white",
    },
    {
      title: "E-commerce & Retail",
      desc: "We offer a full e-commerce best website development service to ensure that you make more sales.",
      image: assets.webDev18,
      textColor: "text-white",
    },
    {
      title: "Healthcare & Education",
      desc: "Websites that are easy to use and trustworthy in Healthcare and education institutions.",
      image: assets.webDev19,
      textColor: "text-white",
    },
    {
      title: "Real Estate & Travel",
      desc: "Websites that are pleasing to the eye and easy to use.",
      image: assets.webDev20,
      textColor: "text-white",
    },
    {
      title: "Corporate Enterprises",
      desc: "Professional web solutions that are scalable to large organisations.",
      image: assets.webDev21,
      textColor: "text-white",
    },
    {
      title: "Trading Sites",
      desc: "Simple, quick and reliable business trading platforms.",
      image: assets.webDev22,
      textColor: "text-white",
    },
  ];

  useSplitTextAnimation("h1");

  return (
    <div className="relative">
      <Helmet>
        <title>
          Web Development Services | Best Website Development Company in India
        </title>
        <meta
          name="description"
          content="We offer professional web development services to build fast and scalable websites. Choose the best website development company in India for your business needs."
        />
        <meta
          name="keywords"
          content="Web Development, Best website development company in India"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BannerRollingGallery autoplay={true} pauseOnHover={true} />
      <div className="relative z-10">
        <TopRatedCompany
          title="Why Does Web Development Matter Today?"
          description={[
            "Capyngen believes that the online presence is not a luxury anymore, but a necessity that allows a business to grow. It is the companies that choose to employ our services in the creation of their professional websites, which become the most trusted among their target audience and draw more visitors and increase the level of their interaction, which makes Capyngen the Best website development company in India.",
            `The fact that your business is a startup or a big conglomerate does not matter; the services provided by us Custom web development company in India operate with the sole purpose of making your brand recognisable among others. Capyngen site is your online success with all the elements, including appealing layouts, feature-rich functionality, and all of them are carefully-designed to provide you with an easy and alluring user experience by a Custom web development company in India.`,
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
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          textSize="text-md"
        />
        <FullSizeImageSection
          backgroundImage={assets.webDevFullSize}
          title="Transform your online presence with Capyngen"
          description="Our company is determined to offer the best website development services that are of high quality and maintain clients."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSectionImage
          heading="Our Web Development Features"
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
          description={[
            <>
              Build the Online Presence of Your Ideas using the Best Website
              Development Services! Contact Capyngen which is the best website
              development company in India to provide you with customized
              solutions to web development through an expert and quality best
              website development solutions ensuring that your business grows
              and your audience is attracted. Our{" "}
              <a href="https://www.capyngen.com/application-solutions">
                application solutions in Gurgaon
              </a>{" "}
              complement perfect website development for comprehensive digital
              transformation.
            </>,
          ]}
          buttonText="Book Expert Consulting Now!"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSection
          heading="Why Choose Capyngen for Web Development?"
          services={cardsSectionData2}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
        />
        <CardsSectionSlider
          heading="Industries We Serve"
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
          title="Ready to Stand Out Online? Contact Capyngen Now!"
          description={[
            "To get a resource of a website development company in Gurgaon that would fit your small business, including e-commerce and a mobile-friendly site that will be in line with your brand, contact Capyngen the best website development company in India.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="Our Development Process"
          desc="We have a strict and quality development process, which helps us to provide strong, error-free, and high-performance mobile applications. Every stage will be carefully carried out by our team to make it the most efficient and business-impacting one."
          steps={steps}
        />
        <FullSizeImageSection
          backgroundImage={assets.webDevFullSize2}
          title="Create powerful websites that perform"
          description="Design Effective Websites that Work with Best Website Development Company.
We would primarily focus on your business; therefore, we ensure that your site is responsive, fast, and scalable.
"
          buttonText="Get Started"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <TechStack
          heading="Transform Your Web Development and Consulting with Our Expert Tech Stack"
          categories={techStack}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          description={[
            "Would you like to have a site that would make your business grow? Therefore, in the case of custom website development company in India or professional best website development services, contact Capyngen, the best website development company in India!",
          ]}
          textSize="text-2xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default WebDevelopment;
