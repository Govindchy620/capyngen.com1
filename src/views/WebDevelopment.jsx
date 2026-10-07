import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Code2,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  Layout,
  FileCode,
  Gauge,
} from "lucide-react";
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
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import BannerRollingGallery from "../components/BannerRollingGallery";
import TechStack from "../components/TechStack";

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

  const cardsSectionData1 = [
    {
      title: "HTML/CSS & JavaScript Development",
      description:
        "At Capyngen, the Best website development company in Gurgaon, we do not create templates and make your websites, but make a custom-built site that suits the individual needs of your brand. We begin afresh and make a lightweight, blistering-fast site without affecting maximum performance and smooth user experience.",
      icon: <FaCode className="text-3xl text-blue-400" />,
    },
    {
      title: "WordPress Development",
      description:
        "The team of web designers in this case can easily design extremely versatile and user-friendly websites of any type of business to be either a blog, portfolio or corporate site. Capyngen is a webite development company in Gurgaon and strives to present you with a website that is not only easy to manage but also one that is appealing and converts your visitors.",
      icon: <FaWordpressSimple className="text-3xl text-blue-400" />,
    },
    {
      title: "Shopify & E-commerce Platforms",
      description:
        "We have simplified it by giving you quality, sales-driven online stores where one can browse smoothly, use secure online payment options and make check-outs within a short period of time. The e-commerce sites of Capyngen, the Best website development company in India, are designed to generate more revenues and customer satisfaction.",
      icon: <FaShoppingCart className="text-3xl text-blue-400" />,
    },
    {
      title: "React & Angular Development",
      description:
        "Capyngen builds interactive, lively web-based applications that capture the essence of your business idea. Our React and Angular technologies are a promise that we will deliver the attractive and modern online experiences to the representatives of your brand, regardless of their device, computer, tablet, or smartphone.",
      icon: <FaReact className="text-3xl text-blue-400" />,
    },
    {
      title: "PHP & Laravel Development",
      description:
        "Capyngen, the Custom web development company in India is busy in designing powerful and scalable back-end systems that will be in your company during the next several years. In this way, it will not only be a stable site but your site will also be capable of easily supporting any upgrading.",
      icon: <FaLaravel className="text-3xl text-blue-400" />,
    },
    {
      title: "CMS & Custom Solutions",
      description:
        "What we do is the use of platforms like Joomla, Drupal along with other similar platforms so as to provide to you fully customized CMSs solutions that best suit your requirements. The tailor-made aspect of the Capyngen, the best website development company in Gurgaon, ensures that you have complete access, flexibility, and convenience of operating your business.",
      icon: <FaCubes className="text-3xl text-blue-400" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Custom Website Development",
      description:
        "Of course you would have been central to the building of your site. We will therefore assist you with projecting your business goals and dreams by making a spectacle.",
      image: assets.webDev2,
    },
    {
      title: "Mobile-Friendliness & Responsive Design",
      description:
        "The Capyngen the Best website development company in India which is as great as that of a desktop or a mobile device.",
      image: assets.webDev3,
    },
    {
      title: "E-commerce Development",
      description:
        "The most comfortable shopping browsers are the ones you make like the walkthrough that the customers love to shop to see what you have on sale with CSE fuels and installations in operation to expand its sales.",
      image: assets.webDev4,
    },
    {
      title: "CMS Development",
      description:
        "WordPress, Drupal, Joomla among others are the content management systems that developers employ in developing user friendly and effective web management solutions.",
      image: assets.webDev5,
    },
    {
      title: "Web Application Development",
      description:
        "Being one of the leading Website development company in Gurgaon, we offer the development of interactive and scalable conversation projects.",
      image: assets.webDev6,
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Provide the sites which even when disconnected to the internet are as quick in operations as the native mobile applications.",
      image: assets.webDev7,
    },
    {
      title: "API Integration Services",
      description:
        "Integrations API are methods that not only the website CRMs but also outsiders i.e. payment gateway as well as other software that collaborate with your business to perform with optimal efficiency.",
      image: assets.webDev8,
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Capyngen, Custom web development company in India is specializing in Support and maintenance services and this is going to ensure that not only will your site be safe, but it will also be updated to the latest and fastest Kit with unique warranties and will upgrade more quickly than what one would have with regular services.",
      image: assets.webDev9,
    },
    {
      title: "Performance Optimization",
      description:
        "Get rid of all your superfluous disk images, JavaScript, and caching will help to make your site load at hyperspeed and, therefore, offer great user experience.",
      image: assets.webDev10,
    },
    {
      title: "SEO-Friendly Development",
      description:
        "Design websites that under the SEO friendly development are initiating and finishing the series by adhering to the most viable practice that Google will place it on a better ranking on its natural match result and therefore will be in a position to attract more visitors.",
      image: assets.webDev11,
    },
    {
      title: "UI/UX Design Services",
      description:
        "Creation of beautiful convenient use and trust-building applications will increase the participation of the users and create a lasting impression.",
      image: assets.webDev12,
    },
    {
      title: "Multilingual & Internationalization Support",
      description:
        "Multi-language websites enable the companies to post their messages near the globe and still have someone present there to accept their message in the appropriate language.",
      image: assets.webDev13,
    },
    {
      title: "Cloud-Based Web Solutions",
      description:
        "Secure and scalable cloud platforms can be used to provide better performance, reliability and flexibility.",
      image: assets.webDev14,
    },
    {
      title: "Landing Page Development",
      description:
        "Create the high conversion landing pages of the promotion, which will initiate the lead, demand and effectively make sales.",
      image: assets.webDev15,
    },
    {
      title: "Analytics and Marketing Tools",
      description:
        "Keeping track of your performance with the use of the numerous tools like Google Analytics, Hotjar and integrating CRM that will make the process of strategy planning much easier.",
      image: assets.webDev16,
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Expertise in the latest technologies",
      description:
        "Our solutions are based on the latest frameworks and tools of a good web site.",
      icon: <FaTools className="text-3xl text-blue-500" />,
    },
    {
      title: "Cost-effective, dependable, and scalable solutions",
      description:
        "High-quality web development services of the best quality to startups, SMEs, and enterprises.",
      icon: <FaDollarSign className="text-3xl text-blue-500" />,
    },
    {
      title: "Experienced Team That Creates User-Friendly Designs",
      description:
        "Our team will ensure that it develops user-friendly, mobile sites, and interactive websites.",
      icon: <FaUsers className="text-3xl text-blue-500" />,
    },
    {
      title: "Focus on Safety, Quickness and SEO-Optimized Websites",
      description:
        "The Internet will make your brand more visible as your site will be quick, secure, and search engine optimized.",
      icon: <FaShieldAlt className="text-3xl text-blue-500" />,
    },
    {
      title: "Greater Brand Awareness and Trustworthiness",
      description:
        "Professional websites that reflect your brand will contribute to winning the trust of your audience.",
      icon: <FaBullhorn className="text-3xl text-blue-500" />,
    },
    {
      title: "Higher Customer Interaction and Loyalty",
      description:
        "Sites are designed to improve web traffic and customer satisfaction.",
      icon: <FaHeart className="text-3xl text-blue-500" />,
    },
  ];

  const cardsSectionSliderData1 = [
    {
      title: "Startups & Small Businesses",
      desc: "Affordable website development company in Gurgaon: We provide affordable web developing company services to small businesses.",
      image: assets.webDev17,
    },
    {
      title: "E-commerce & Retail",
      desc: "We offer a full e-commerce best website development service to ensure that you make more sales.",
      image: assets.webDev18,
    },
    {
      title: "Healthcare & Education",
      desc: "Websites that are easy to use and trustworthy in Healthcare and education institutions.",
      image: assets.webDev19,
    },
    {
      title: "Real Estate & Travel",
      desc: "Websites that are pleasing to the eye and easy to use.",
      image: assets.webDev20,
    },
    {
      title: "Corporate Enterprises",
      desc: "Professional web solutions that are scalable to large organisations.",
      image: assets.webDev21,
    },
    {
      title: "Trading Sites",
      desc: "Simple, quick and reliable business trading platforms.",
      image: assets.webDev22,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Requirement Analysis & Planning",
      description:
        "Exploring your business goals, market niche, and project needs.",
      icon: <FileCode className="w-5 h-5 text-blue-400" />,
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes and visual mockups of customer validation.",
      icon: <Layout className="w-5 h-5 text-blue-400" />,
    },
    {
      step: "03",
      title: "Front-End & Back-End Development",
      description:
        "Designing websites capable of responsiveness, scaling and functionality.",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
    },
    {
      step: "04",
      title: "Quality Assurance & Testing",
      description:
        "Ensuring that the websites run smoothly in cross-browers and devices without any errors.",
      icon: <Gauge className="w-5 h-5 text-blue-400" />,
    },
    {
      step: "05",
      title: "Launch & Deployment",
      description:
        "Placing your web site online in full functionality and security.",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description:
        "Regular updates, backups, and uninterrupted technical support.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    },
  ];

  const techStack = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: assets.react },
        { name: "Angular", icon: assets.angular },
        { name: "Vue.js", icon: assets.vuejs },
        { name: "Next.js", icon: assets.nextjs },
        {
          name: "Svelte",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Flutter (Web)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: assets.nodejs },
        { name: "Python (Django/Flask)", icon: assets.python },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
        },
        {
          name: "Java (Spring)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        { name: "PHP (Laravel)", icon: assets.laravel },
        {
          name: "Go",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        },
        {
          name: ".NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        },
      ],
    },
    {
      title: "Platforms",
      items: [
        {
          name: "iOS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
        },
        {
          name: "Android",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        { name: "React Native", icon: assets.react },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: assets.mongodb },
        { name: "MySQL", icon: assets.mysql },
        { name: "PostgreSQL", icon: assets.postgresql },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "Oracle",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      ],
    },
    {
      title: "UI/UX",
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

  return (
    <div className="relative overflow-x-hidden bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
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

      {/* ========================================================================= */}
      {/* 1. ORIGINAL 3D ROLLING GALLERY HERO (With Sharp Edges / rounded-none)     */}
      {/* ========================================================================= */}
      <BannerRollingGallery autoplay={true} pauseOnHover={true} />

      {/* ========================================================================= */}
      {/* 2. SECTION 1: Why Does Web Development Matter Today?                      */}
      {/* ========================================================================= */}
      <section className="pt-6 sm:pt-8 lg:pt-12 pb-16 lg:pb-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-stretch">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 lg:space-y-6 flex flex-col justify-center">
              <h2
                className="text-slate-900 leading-[1.2] tracking-tight text-2xl sm:text-3xl lg:text-[36px] xl:text-[42px] font-bold"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Does{" "}
                <span className="text-blue-600">Web Development</span>{" "}
                Matter Today?
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                Capyngen believes that the online presence is not a luxury anymore, but a necessity that allows a business to grow. It is the companies that choose to employ our services in the creation of their professional websites, which become the most trusted among their target audience and draw more visitors and increase the level of their interaction, which makes Capyngen the Best website development company in India.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                The fact that your business is a startup or a big conglomerate does not matter; the services provided by us Custom web development company in India operate with the sole purpose of making your brand recognisable among others. Capyngen site is your online success with all the elements, including appealing layouts, feature-rich functionality, and all of them are carefully-designed to provide you with an easy and alluring user experience by a Custom web development company in India.
              </p>
            </div>

            {/* Right Visual Image (Full box cover, sharp edges, edge-to-edge) */}
            <div className="lg:col-span-5 flex">
              <div className="border border-slate-300/80 bg-slate-900 shadow-2xl rounded-none w-full overflow-hidden flex items-center justify-center min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] group">
                <img
                  src={assets.webDevFullSize2}
                  alt="Why Web Development Matters Today - Capyngen"
                  className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 2: Our Web Development Services (6 Services)                   */}
      {/* ========================================================================= */}
      <section id="services-section" className="py-20 lg:py-28 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          
          <div className="max-w-3xl mb-16">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Web Development Services
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4">
              End-to-end web engineering designed to deliver blistering speed, absolute reliability, and measurable digital growth.
            </p>
          </div>

          {/* 6 Cards Grid (Strictly sharp rounded-none) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#0b1329] border border-slate-800 hover:border-blue-500 p-8 flex flex-col justify-between transition-all duration-300 rounded-none hover:-translate-y-1 shadow-lg"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />

                <div>
                  <div className="w-14 h-14 bg-[#101b38] border border-slate-700 flex items-center justify-center rounded-none mb-6 group-hover:border-blue-500 group-hover:bg-blue-600/10 transition-colors">
                    {service.icon}
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-800/80">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 group-hover:text-blue-300"
                  >
                    Discuss Solution
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 3: Transform Your Online Presence Banner                       */}
      {/* ========================================================================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
        style={{
          backgroundImage: `url(${assets.webDevFullSize})`,
        }}
      >
        <div className="absolute inset-0 bg-[#070e1d]/85" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Transform your online presence with Capyngen
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our company is determined to offer the best website development services that are of high quality and maintain clients.
          </p>

          <div className="pt-4">
            <Link
              to="/contact-us"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 inline-flex items-center gap-2 rounded-none shadow-xl"
            >
              CONTACT US
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 4: Our Web Development Features (15 Features from Assets)      */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          
          <div className="max-w-3xl mb-16">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Web Development Features
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4">
              Comprehensive web solutions designed for high performance, security, and scalability.
            </p>
          </div>

          {/* 15 Features Grid with Real Graphics from Assets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((feat, index) => (
              <div
                key={index}
                className="border border-slate-200 bg-white hover:border-slate-800 transition-all duration-300 rounded-none flex flex-col shadow-sm hover:shadow-xl group"
              >
                {/* Feature Graphic Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 rounded-none">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-none"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 5: Consulting Banner 1 (GetStarted 1 with Video)              */}
      {/* ========================================================================= */}
      <section className="relative py-20 bg-[#070e1d] text-white overflow-hidden border-b border-slate-800">
        {assets.backgroundVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-25 -z-0"
            autoPlay
            loop
            muted
            playsInline
            src={assets.backgroundVideo}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e1d] via-[#070e1d]/90 to-[#070e1d]/80 -z-0" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl space-y-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Build the Online Presence of Your Ideas using the Best Website Development Services!
            </h2>

            <div className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Contact Capyngen which is the best website development company in India to provide you with customized solutions to web development through an expert and quality best website development solutions ensuring that your business grows and your audience is attracted. Our{" "}
                <a
                  href="https://www.capyngen.com/application-solutions"
                  className="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors"
                >
                  application solutions in Gurgaon
                </a>{" "}
                complement perfect website development for comprehensive digital transformation.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/contact-us"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 inline-flex items-center gap-3 rounded-none shadow-xl"
              >
                Book Expert Consulting Now!
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION 6: Why Choose Capyngen for Web Development? (cardsSectionData2) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#0b1329] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          
          <div className="max-w-3xl mb-16">
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen for Web Development?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4">
              We engineer mission-critical digital products backed by rigorous engineering and transparent partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-all duration-300 rounded-none flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="w-14 h-14 bg-[#101b38] border border-slate-700 flex items-center justify-center rounded-none mb-6 group-hover:border-blue-500 group-hover:bg-blue-600/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
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
      {/* 8. SECTION 7: Industries We Serve (Real Graphics from Assets)              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          
          <div className="max-w-3xl mb-16">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4">
              Custom web applications tailored to the specific business workflows and security standards of diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionSliderData1.map((ind, index) => (
              <div
                key={index}
                className="relative overflow-hidden border border-slate-300 bg-slate-900 rounded-none group shadow-md hover:shadow-xl transition-all duration-300 h-96 flex flex-col justify-end p-8"
              >
                {/* Real Graphic Background */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none opacity-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1d] via-[#070e1d]/70 to-transparent" />

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3
                    className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {ind.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION 8: Ready to Stand Out Online? (GetStarted 2 Banner)           */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="p-8 sm:p-12 lg:p-16 bg-[#0b1329] border border-slate-800 rounded-none flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Ready to Stand Out Online? Contact Capyngen Now!
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                To get a resource of a website development company in Gurgaon that would fit your small business, including e-commerce and a mobile-friendly site that will be in line with your brand, contact Capyngen the best website development company in India.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact-us"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 inline-flex items-center gap-3 rounded-none shadow-xl"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION 9: Our Development Process (steps - 6 Steps)                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          
          <div className="max-w-3xl mb-16">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Development Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              We have a strict and quality development process, which helps us to provide strong, error-free, and high-performance mobile applications. Every stage will be carefully carried out by our team to make it the most efficient and business-impacting one.
            </p>
          </div>

          {/* Process Timeline Steps (Strictly Sharp) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, index) => (
              <div
                key={index}
                className="p-8 border border-slate-200 bg-white hover:border-slate-800 transition-all duration-300 rounded-none shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-4xl font-black text-slate-200 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {st.step}
                    </span>
                    <div className="w-10 h-10 bg-slate-100 flex items-center justify-center rounded-none group-hover:bg-blue-600/10">
                      {st.icon}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {st.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. SECTION 10: Create powerful websites that perform (Banner 2)         */}
      {/* ========================================================================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[480px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
        style={{
          backgroundImage: `url(${assets.webDevFullSize2})`,
        }}
      >
        <div className="absolute inset-0 bg-[#070e1d]/85" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Create powerful websites that perform
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Design Effective Websites that Work with Best Website Development Company. We would primarily focus on your business; therefore, we ensure that your site is responsive, fast, and scalable.
          </p>

          <div className="pt-4">
            <Link
              to="/contact-us"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 inline-flex items-center gap-2 rounded-none shadow-xl"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. SECTION 11: Tech Stack (Original Category Boxes with Working Icons)    */}
      {/* ========================================================================= */}
      <div className="bg-[#070e1d] border-b border-slate-800">
        <TechStack
          heading="Transform Your Web Development and Consulting with Our Expert Tech Stack"
          categories={techStack}
        />
      </div>

      {/* ========================================================================= */}
      {/* 13. SECTION 12: Consulting Banner 3 (GetStarted 3)                       */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#0b1329] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="p-8 sm:p-12 lg:p-16 bg-[#070e1d] border border-slate-800 rounded-none flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Would you like to have a site that would make your business grow?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Therefore, in the case of custom website development company in India or professional best website development services, contact Capyngen, the best website development company in India!
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact-us"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 inline-flex items-center gap-3 rounded-none shadow-xl"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. SECTION 13: Frequently Asked Questions (15 FAQs)                     */}
      {/* ========================================================================= */}
      <div className="bg-white">
        <FAQSection2 items={faqItems} bgColor="bg-white" />
      </div>

    </div>
  );
};

export default WebDevelopment;
