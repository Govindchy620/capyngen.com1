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

const DigitalMarketing = () => {
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
  const benefitsData = [
    {
      title: "Smooth Software Team Extension",
      desc: "We emphasize strong teamwork and smooth interaction between your local and remote software development units.",
    },
    {
      title: "A Client-First Approach",
      desc: "We focus on balancing technical know-how, soft skills, and additional qualifications that you deem important.",
    },
    {
      title: "You and Your Team Stay in Sync",
      desc: "Our method for extending your App development team lets you stay involved and manage your squad directly.",
    },
    {
      title: "Relevant Candidates",
      desc: "You can hire dedicated developers who passed our assessments in technical skills, soft skills, and English.",
      highlight: true,
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div>
      <Banner
        title="Digital Marketing"
        overlayBg="bg-black/70"
        backgroundImage={assets.bg1}
        description="Unlock the Power of App Presence with our Professional Appsite Designing Service! Elevate Your Online Presence with Stunning Appsite Designs."
      />
      <HowWeWork />
      <WhyChoose />
      <TechnologiesCarousel
        title="App Development Technologies We Use"
        description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
        technologies={technologies}
      />
      <BenefitsSection
        heading="Why Leading Brands Choose Capyngen for App Development?"
        benefits={benefitsData}
      />
      <OurServices />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default DigitalMarketing;
