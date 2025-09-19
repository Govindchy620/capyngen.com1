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
import { HeroParallax } from "../components/HeroParallax";

const WebSiteDesign = () => {
  const faqItems = [
    {
      question: "How long does it take for funds to show in my wallet?",
      answer:
        "The time it takes for funds to appear in your wallet depends on the deposit method. Most funding methods are instantaneous. ",
    },
    {
      question: "What is the minimum deposit requirement?",
      answer:
        "PrimeForex Markets requires no minimum deposit, however, a minimum amount may be required by your preferred funding method. ",
    },
    {
      question: "Are there any fees associated with depositing funds?",
      answer: "No, PrimeForex Markets charges no fees for depositing funds.",
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
  const solutionsData = [
    {
      title: "Casino Game Web App",
      desc: "Launch captivating casino game websites with secure payment gateways, real-time gaming experiences, and engaging user interfaces that keep players returning for more.",
    },
    {
      title: "Web App like CandyAI",
      desc: "RichestSoft develops high-end and user-friendly web apps, such as Candy AI, and other AR VR dating apps, using advanced AI algorithms and reliable frameworks.",
    },
    {
      title: "Educational Websites",
      desc: "Deliver interactive learning experiences with educational websites designed by our Website Design company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with visually compelling portfolio websites crafted by our Website Design services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Websites",
      desc: "Promote deals effectively with custom offer websites built by our Website Design company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Websites",
      desc: "Create dynamic listing websites with advanced search functionalities and filters developed by our website development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Websites",
      desc: "Build informative wiki websites with collaborative tools and easy content management using our comprehensive Website Design solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Drive sales with robust e-commerce websites designed by our Website Design company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Websites",
      desc: "Support your cause with engaging non-profit websites, developed by our Website Design services, that enhance donor engagement and effectively communicate your mission.",
    },
    {
      title: "Entertainment Website Development",
      desc: "Engage audiences with dynamic entertainment and OTT websites featuring multimedia integration, interactive features, and responsive design, all tailored to your brand's unique needs.",
    },
    {
      title: "Event Website Development",
      desc: "Seamlessly manage events with custom event websites that offer ticketing systems, live streaming, and real-time updates, enhancing attendee experiences and engagement.",
    },
    {
      title: "Consulting Website Development",
      desc: "Establish your consulting brand online with professional websites that showcase your expertise, client testimonials, and service offerings, designed to convert visitors into clients.",
    },
  ];
  const servicesData = [
    {
      title: "Custom Enterprise Web Portals",
      desc: "Our Website Design company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced Website Design services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
    },
    {
      title: "Cloud-Based Web Applications",
      desc: "Our website development company specializes in creating cloud-based web applications that offer high availability, scalability, and secure access for global enterprises.",
    },
    {
      title: "Enterprise CMS Development",
      desc: "Simplify content management with our custom-built enterprise CMS solutions, which offer powerful features and flexibility for effortlessly managing large volumes of content.",
    },
    {
      title: "Data Analytics Dashboards",
      desc: "Utilize our Website Design solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Strategic Planning",
      description:
        "Our web development company starts with a comprehensive investigation and planning phase to make sure that our services fit with your business goals and target audience.",
    },
    {
      step: "Step 02",
      title: "Custom Design & Prototyping",
      description:
        "As a top web development firm, we make unique designs and prototypes that are personalized to your business identity. We offer web development solutions that are both visually appealing and user-friendly.",
    },
    {
      step: "Step 03",
      title: "Front-End Development",
      description:
        "Our web development services focus on front-end development and employ the latest technology to create responsive, dynamic, and visually attractive websites that are optimized for performance and user experience.",
    },
    {
      step: "Step 04",
      title: "Back-End Development",
      description:
        "Our web development firm focuses on strong back-end development, which means we can make web development solutions that are safe, scalable, and efficient, and that can handle complex tasks and manage data smoothly.",
    },
    {
      step: "Step 05",
      title: "Quality Assurance & Testing",
      description:
        "Our web development services include strict quality assurance and testing processes to make sure your site meets the greatest requirements for performance, security, and ease of use.",
    },
    {
      step: "Step 06",
      title: "Deployment & Ongoing Maintenance",
      description:
        "After the website is up and running, our website creation firm will keep it up to date, safe, and completely optimized for continued success.",
    },
  ];
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <HeroParallax products={products} />
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <TopRatedCompany
          title="Top-Rated Website Design Company"
          description={[
            `RichestSoft provides top-notch and oriented Website Design solutions to our clients after a proper analysis is completed. Our expert web developers undergo various tests for the project through well-structured planning or strategy to ensure the quality of the product is exclusive. We offer our client's project superior functionality, clarity, and great dynamism, which will facilitate the user's experience on your website.`,
            `RichestSoft has a team of innovators, problem solvers, and out-of-box thinkers who have been delivering top-notch Website Design services since 2007. We ensure that your website is functional and easy for users to rank highly in Google. Being the best Website Design company in India, we provide best-in-class Website Design services.`,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />

        <BenefitsSection
          heading="Website Design Solutions We Offer"
          desc="A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages. At RichestSoft, we design and program the web pages best adapted to the different needs of each project. From strategic and rigorous thinking, we define and execute the Internet strategy with in-depth analysis. We focus on and effectively solve the challenges of each project with innovative answers."
          benefits={solutionsData}
        />
        <HowWeWork
          heading="Comprehensive Web Development Process"
          desc="Capyngen offers a whole web development process, from initial exploration and planning to design, development, testing, and deployment. This ensures that you get custom, high-performing solutions that help you reach your business goals."
          steps={steps}
        />
        <WhyChoose />
        <BenefitsSection
          heading="Website Design Services We Offer"
          desc="Partner with RichestSoft for enterprise-level Website Design services, delivering custom solutions, API integration, cloud-based apps, and advanced e-commerce platforms that drive business growth and efficiency."
          benefits={servicesData}
          reverse
        />
        <TechnologiesCarousel
          title="Website Design Technologies We Use"
          description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
          technologies={technologies}
        />
        <OurServices />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default WebSiteDesign;
