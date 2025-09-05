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

const AppDevelopment = () => {
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
      title: "Casino Game App App",
      desc: "Launch captivating casino game Appsites with secure payment gateways, real-time gaming experiences, and engaging user interfaces that keep players returning for more.",
    },
    {
      title: "App App like CandyAI",
      desc: "RichestSoft develops high-end and user-friendly App apps, such as Candy AI, and other AR VR dating apps, using advanced AI algorithms and reliable frameworks.",
    },
    {
      title: "Educational Appsites",
      desc: "Deliver interactive learning experiences with educational Appsites designed by our App development company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Appsites",
      desc: "Showcase your work with visually compelling portfolio Appsites crafted by our App development services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Appsites",
      desc: "Promote deals effectively with custom offer Appsites built by our App development company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Appsites",
      desc: "Create dynamic listing Appsites with advanced search functionalities and filters developed by our Appsite development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Appsites",
      desc: "Build informative wiki Appsites with collaborative tools and easy content management using our comprehensive App development solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Appsites",
      desc: "Drive sales with robust e-commerce Appsites designed by our App development company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Appsites",
      desc: "Support your cause with engaging non-profit Appsites, developed by our App development services, that enhance donor engagement and effectively communicate your mission.",
    },
    {
      title: "Entertainment Appsite Development",
      desc: "Engage audiences with dynamic entertainment and OTT Appsites featuring multimedia integration, interactive features, and responsive design, all tailored to your brand's unique needs.",
    },
    {
      title: "Event Appsite Development",
      desc: "Seamlessly manage events with custom event Appsites that offer ticketing systems, live streaming, and real-time updates, enhancing attendee experiences and engagement.",
    },
    {
      title: "Consulting Appsite Development",
      desc: "Establish your consulting brand online with professional Appsites that showcase your expertise, client testimonials, and service offerings, designed to convert visitors into clients.",
    },
  ];
  const servicesData = [
    {
      title: "Custom Enterprise App Portals",
      desc: "Our App development company designs enterprise App portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced App development services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
    },
    {
      title: "Cloud-Based App Applications",
      desc: "Our Appsite development company specializes in creating cloud-based App applications that offer high availability, scalability, and secure access for global enterprises.",
    },
    {
      title: "Enterprise CMS Development",
      desc: "Simplify content management with our custom-built enterprise CMS solutions, which offer powerful features and flexibility for effortlessly managing large volumes of content.",
    },
    {
      title: "Data Analytics Dashboards",
      desc: "Utilize our App development solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our Appsite development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <Banner
          title="App Development"
          overlayBg="bg-black/60"
          backgroundImage={assets.appDevelopment}
          description="Unlock the Power of App Presence with our Professional Appsite Designing Service! Elevate Your Online Presence with Stunning Appsite Designs."
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <TopRatedCompany
          title="Top-Rated App Development Company"
          description={[
            `RichestSoft provides top-notch and oriented App development solutions to our clients after a proper analysis is completed. Our expert App developers undergo various tests for the project through well-structured planning or strategy to ensure the quality of the product is exclusive. We offer our client's project superior functionality, clarity, and great dynamism, which will facilitate the user's experience on your Appsite.`,
            `RichestSoft has a team of innovators, problem solvers, and out-of-box thinkers who have been delivering top-notch App development services since 2007. We ensure that your Appsite is functional and easy for users to rank highly in Google. Being the best App development company in India, we provide best-in-class App development services.`,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />

        <BenefitsSection
          heading="App Development Solutions We Offer"
          desc="A App page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages. At RichestSoft, we design and program the App pages best adapted to the different needs of each project. From strategic and rigorous thinking, we define and execute the Internet strategy with in-depth analysis. We focus on and effectively solve the challenges of each project with innovative answers."
          benefits={solutionsData}
        />
        <HowWeWork />
        <WhyChoose />
        <BenefitsSection
          heading="App Development Services We Offer"
          desc="Partner with RichestSoft for enterprise-level App development services, delivering custom solutions, API integration, cloud-based apps, and advanced e-commerce platforms that drive business growth and efficiency."
          benefits={servicesData}
          reverse
        />
        <TechnologiesCarousel
          title="App Development Technologies We Use"
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

export default AppDevelopment;
