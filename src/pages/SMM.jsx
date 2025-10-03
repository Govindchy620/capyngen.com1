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
import Banner8 from "../components/Banner8";
import { LifeBuoy, Sparkles } from "lucide-react";
import GetStarted from "../components/GetStarted";
import CardsSection from "../components/CardsSection";
import {
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";
import Banner15 from "../components/Banner15";

const SMM = () => {
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
      desc: "Deliver interactive learning experiences with educational websites designed by our SMM company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with visually compelling portfolio websites crafted by our SMM services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Websites",
      desc: "Promote deals effectively with custom offer websites built by our SMM company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Websites",
      desc: "Create dynamic listing websites with advanced search functionalities and filters developed by our website development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Websites",
      desc: "Build informative wiki websites with collaborative tools and easy content management using our comprehensive SMM solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Drive sales with robust e-commerce websites designed by our SMM company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Websites",
      desc: "Support your cause with engaging non-profit websites, developed by our SMM services, that enhance donor engagement and effectively communicate your mission.",
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
      desc: "Our SMM company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced SMM services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
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
      desc: "Utilize our SMM solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Social Media Marketing Services",
      description:
        "Amplify your brand with finely targeted social media marketing services, designed around the preferences of your audience and the goals of your business.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Social Media Promotion",
      description:
        "Utilize the power of social media promotion to spread the word of your brand through various techniques like organic reach, influencer marketing, and paid campaigns.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Social Media Management Services",
      description:
        "Save time managing accounts with social media management services that guarantee regular posting, community engagement, and performance tracking.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Social Media Advertising",
      description:
        "Reach your goals quickly by social media advertising, bettering campaign to raise traffic, conversions, and ROI.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Custom Social Media Campaigns",
      description:
        "Creating personal campaigns that are your brand's and your audience's to healthily communicate the results are measurable and online visibility is enhanced.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Affordable Social Media Marketing Services",
      description:
        "Though priced reasonably, social media marketing services are always professional and effective in helping startups and small businesses create a high impact in the market within their budget.",
      icon: <FaTasks className="text-4xl" />,
    },
    {
      title: "Enterprise Social Media Solutions",
      description:
        "Detailed planning for corporations includes data measurement, efficiency, and creative social media marketing, carried out by a professional social media marketing agency for enterprises.",
      icon: <FaTasks className="text-4xl" />,
    },
    {
      title: "Industries Transformed with Social Media Marketing",
      description:
        "Businesses across the globe are enabled by bespoke social media marketing to boost their presence, attract the audience, and garner tangible growth in their respective markets.",
      icon: <FaTasks className="text-4xl" />,
    },
    {
      title: "Social Media Collaborations for Business Empowerment",
      description:
        "Professionals in social media marketing of the highest caliber team up to improve your digital visibility. The mix of content creators, strategists, and advertising specialists energizes your brand with campaigns that lead to the growth of engagement, audience, and brand awareness.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Banner15 />
      <TopRatedCompany
        title="Professional social media marketing is the key to a business transformation"
        description={[
          `One of the main benefits of social media is the potential it possesses to be a driver of business growth and a key element in the whole company business strategy. The best social media marketing strategies and the professional social media agency for enterprises ensure that the campaigns lead to the audience getting attracted, creating a community, and generating substantial results.`,
        ]}
        image={assets.whyChooseUs}
        background={assets.patternBg1}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="Get the Win with a Social Media Marketing Agency Partner"
        description={[
          "Use social media marketing that matches with company objectives to bring a change to your digital presence. Team up with one of the leading agencies in social media marketing, to make your campaigns successful on Facebook, Instagram, LinkedIn, Twitter, and TikTok where they can get the most attention and interaction.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="Designing Social Media Marketing Campaigns That Convert"
        description={[
          "Grow your business through social media advertising and campaigns that are innovative, targeted, and result-oriented. Being one of the top social media marketing firms, we create scalable projects for startups and enterprises that aim to bring in new followers, interaction, and revenue.",
        ]}
        image={assets.getStarted}
      />
      <CardsSection
        heading="Social Media Marketing Services"
        subheading=""
        services={cardsSectionData2}
        headColor="text-white"
        sectionBg="bg-gray-900"
        cardBg="bg-transparent"
        hoverBg="shadow-xl hover:shadow-lg hover:shadow-white transition-all"
        textColor="text-white"
        hoverTextColor=""
        height="h-96"
        textSize="text-lg"
      />
      <BenefitsSection
        heading="SMM Solutions We Offer"
        desc="A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages. At RichestSoft, we design and program the web pages best adapted to the different needs of each project. From strategic and rigorous thinking, we define and execute the Internet strategy with in-depth analysis. We focus on and effectively solve the challenges of each project with innovative answers."
        benefits={solutionsData}
      />
      <HowWeWork />
      <WhyChoose />
      <BenefitsSection
        heading="SMM Services We Offer"
        desc="Partner with RichestSoft for enterprise-level SMM services, delivering custom solutions, API integration, cloud-based apps, and advanced e-commerce platforms that drive business growth and efficiency."
        benefits={servicesData}
        reverse
      />
      <TechnologiesCarousel
        title="SMM Technologies We Use"
        description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
        technologies={technologies}
      />
      <OurServices />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default SMM;
