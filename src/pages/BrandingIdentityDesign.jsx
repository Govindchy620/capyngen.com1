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
import Banner5 from "../components/Banner5";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSection from "../components/CardsSection";
import {
  FaAppStore,
  FaBuilding,
  FaIndustry,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPuzzlePiece,
} from "react-icons/fa";

const BrandingIdentityDesign = () => {
  const faqItems = [
    {
      question: "What are branding design services?",
      answer:
        "In order to develop a cohesive brand identity, these services incorporate logo design, visual identity, packaging, stationery, and digital branding.",
    },
    {
      question: "Why is branding important for businesses?",
      answer:
        "Among the benefits of strong branding are increased recognition, customer loyalty, and competition in the market.",
    },
    {
      question: "Does Capyngen provide global branding services?",
      answer:
        "Capyngen is a professional branding design company that serves clients all over the world. Through their services, businesses can go international.",
    },
    {
      question: "Can you design logos for startups?",
      answer:
        "Of course! We do tailor-made branding works both for startups and for existing companies.",
    },
    {
      question: "Do you create brand guidelines?",
      answer:
        "Yes, we assist with brand guidelines in order to achieve correct brand usage across all forums.",
    },
    {
      question: "Can you design packaging and collateral?",
      answer:
        "Indeed, the team is available to accomplish a task of packaging design, or create your business cards, brochures, and stationery for you.",
    },
    {
      question: "Do you handle digital branding?",
      answer:
        "Yes, all-inclusive Web design, social media graphics, and getting online campaigns ready for a digital appearance are parts of digital branding.",
    },
    {
      question: "How long does branding design take?",
      answer:
        "Just about 4–8 weeks, it really depends on the size of the worldwide launch and the intricacy of the design work.",
    },
    {
      question: "Do you offer rebranding services?",
      answer:
        "Absolutely! The company Capyngen provides top-notch rebranding solutions for those businesses that want change.",
    },
    {
      question: "Are your designs research-backed?",
      answer:
        "Indeed, each project comes with market and competitor research that facilitates creating a brand strategy.",
    },
    {
      question: "Do you ensure cross-platform consistency?",
      answer:
        "Yes, no matter what platform you use - digital, print, or social media - we make sure that everything is harmonized.",
    },
    {
      question:
        "Can you handle multilingual branding for international markets?",
      answer:
        "Yes, Capyngen provides branding design services to the widest possible audience regardless of their location and language.",
    },
    {
      question: "Do you offer ongoing brand support?",
      answer:
        "Yes, we are always here ready to help through brand updates and offering expert advice to remain at the leading edge.",
    },
    {
      question: "Can Capyngen help improve marketing ROI through branding?",
      answer:
        "Definitely, a well thought out and professionally done brand can increase customer interaction, sales, and overall campaign productivity.",
    },
    {
      question:
        "How do I get started with Capyngen’s branding design services?",
      answer:
        "Take a look at the schedule on our website and pick a time that works for you to receive a free consultation to share your ideas and business needs.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Logo Design",
      description:
        "One-of-a-kind designs that immediately are the names of products and services the brand is recognizable and are also a familiar occurrence in the matter of trust.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Visual Identity",
      description:
        "Design elements such as the colors, fonts, icons, and images used for all the channels in order to keep the look uniform.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "Brand Guidelines",
      description:
        "A rule book that assists in the performance of close-knit communities in print, web, and social media.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Packaging Design",
      description:
        "Beautiful packages for the customers, who at the same time are the mirror of your brand.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Stationery & Collateral Design",
      description:
        "Business cards, brochures, and promotional materials are designed.",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "Digital Branding",
      description:
        "The digital avenues like your website, social media, and campaign that make your online presence simple and easy to follow.",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Richly articulated designs",
      description:
        "Brand market research leads to brand identities that connect with the most suitable target group.",
      icon: <FaPuzzlePiece className="text-4xl text-white" />,
    },
    {
      title: "Tailored Solutions",
      description:
        "The designs are personalized and crafted with the opposite personality and intrinsic objectives of the brand.",
      icon: <FaLaptopCode className="text-4xl text-white" />,
    },
    {
      title: "Creative Expertise",
      description:
        "One of the primary reasons for the longevity of innovative concepts in the memory of the visual users is that they are creatively designed.",
      icon: <FaAppStore className="text-4xl text-white" />,
    },
    {
      title: "Cross-Platform Consistency",
      description:
        "A brand identity both visually and conceptually standardized across all media such as digital, print, and social media platforms.",
      icon: <FaMoneyBillWave className="text-4xl text-white" />,
    },
    {
      title: "Strategic Approach",
      description:
        "A brand’s story and business goals are the anchor of every design evolved.",
      icon: <FaBuilding className="text-4xl text-white" />,
    },
    {
      title: "Worldwide Experience",
      description:
        "Capyngen is the solution to branding requests from different parts of the world.",
      icon: <FaIndustry className="text-4xl text-white" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Research",
      description:
        "Dig into the business, target market, and competitors to construct a proper foundation.",
    },
    {
      step: "Step 02",
      title: "Strategy Development",
      description: "Decide on brand position, communication, and visuals.",
    },
    {
      step: "Step 03",
      title: "Creative Conceptualization",
      description:
        "Begin and refine the ideas of logos, typography, and color palettes.",
    },
    {
      step: "Step 04",
      title: "Design Execution",
      description:
        "Create brand guidelines, stationery, and digital collateral with final assets.",
    },
    {
      step: "Step 05",
      title: "Brand Implementation",
      description:
        "Use the new brand identity on websites, social media, packaging, and marketing.",
    },
    {
      step: "Step 06",
      title: "Ongoing Support",
      description:
        "Regular updates and coaching to keep your brand fresh anywhere on the globe, that is Benefits of Professional Branding Design",
    },
    {
      step: "Step 07",
      title: "Enhanced Credibility",
      description:
        "A brand that is consistent and designed professionally worldwide will gain the trust of the diverse global community.",
    },
    {
      step: "Step 08",
      title: "Higher Engagement",
      description:
        "Attractive designs entice and involve the audience's attention span.",
    },
    {
      step: "Step 09",
      title: "Stronger Loyalty",
      description:
        "Customers' emotional attachment to the brand that in turn energizes the process of advocacy among them.",
    },
    {
      step: "Step 10",
      title: "Market Leadership",
      description:
        "Become the trendsetter instead of the follower in your area.",
    },
    {
      step: "Step 11",
      title: "Improved ROI",
      description:
        "Branding which is coherent strengthens promotional activities resulting in increased conversion rates.",
    },
    {
      step: "Step 12",
      title: "Global Brand Presence",
      description:
        "With Capyngen, your brand will be able to attract the audience not only here but there also in diverse cultures and geographies.",
    },
  ];
  const cardsSectionImageData2 = [
    {
      title: "Minimalist Design",
      description:
        "Neat and straightforward visuals effectively deliver the message.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Bold Typography",
      description:
        "Hard-to-find fonts are a good way to grab people's attention towards your brand.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "Vibrant Color Palettes",
      description: "Colors that trigger feelings and memory.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Custom Illustrations",
      description:
        "Greeting cards for your brand with which no other company can match.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Dynamic Logos",
      description:
        "Logos which are flexible for both printed and virtual worlds.",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "Interactive Digital Branding",
      description:
        "The use of motion graphics and animations for grabbing the attention of consumers makes the digital branding process easier and more effective.",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Banner5
        title={
          <>
            Branding Design Services :
            <span className="text-cyan-400">
              Revamp Your Identity, Revive Your Followers
            </span>
          </>
        }
        description="Capyngen's branding design services, a branding professional who is always ready to come up with fresh, simple, and globally consistent brand identities. As a result, we can represent companies of every size, from the mere idea stage to the establishment of a multinational corporation, to be able to create brand identities that are not only eye-catching but also cross geographical borders."
        primaryBtnText="Get started"
        primaryBtnLink="#"
        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
      />
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-white hover:scale-105"
          buttonTextColor="text-black"
          title=""
          description={[
            "Become the sensation of the world with Capyngen's professional branding design services. Unleash the original logo, digital branding, and packaging that fit your style spot now!",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Why branding design matters?"
          description={[
            `Social media, ads, and the 24/7 news cycle have not only changed the way people communicate but also the speed of the modern world. Moreover, a brand is nothing but a brand name in this frenzy of interconnectedness where the brand is the customer loyalty is the narrative, the emotion, and the entire customer's experience. Capyngen's branding design services help international clients to systematically and creatively discover their unique identities and thus differentiate in a deep and lasting way as well as to cultivate loyalty to the brand. A company with a harmonized visual identity is able to differentiate itself from other competitors, become valued by customers, and even take the marketing to higher levels of engagement and conversions.`,
          ]}
          image={assets.whyChooseUs}
          isHidden={true}
          imageHeight="aspect-[1/1]"
          background={assets.patternBg1}
        />
        <CardsSectionImage
          heading="What are branding design services?"
          subheading="It is not only the visual attractiveness of design products by Capyngen that makes them stand out but also the inclusion of a full range of branding solutions."
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <TopRatedCompany
          title="Why your business needs branding design?"
          description={[
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
                {[
                  {
                    title: "Create a Lasting First Impression",
                    text: "You, together with your audience, are better able to see and remember each other due to professional branding.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Establish Brand Awareness and Loyalty",
                    text: "Done right, branding will not only increase the recognizability of the business but also the trust of the customers.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Communicate Values Clearly",
                    text: "As the brand's mission and personality become evident just by the style and presentation of the designs.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Stand Out from Competitors",
                    text: "Great looking and well-differentiated brands will not get lost even in a saturated market.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Amplify Marketing Impact",
                    text: "Strong and creative branding will lead to higher engagements, conversions, and ROI.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Global Reach",
                    text: "Your brand is able to communicate with foreign markets due to Capyngen's international know-how.",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    <strong className={`${color} drop-shadow-md`}>
                      {title}
                    </strong>{" "}
                    – {text}
                  </li>
                ))}
              </ul>
            </>,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[3/4]"
        />
        <CardsSection
          heading="What makes professional branding design services stand out?"
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-gray-900"
          cardBg="border-2 border-white shadow-2xl shadow-gray-800"
          hoverBg=""
          height="h-72"
          textColor="text-white"
          hoverTextColor=""
          headColor="text-white"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-white hover:scale-105"
          buttonTextColor="text-black"
          title=""
          description={[
            "Want tailored branding solutions that make a mark? Partner up with Capyngen, a branding design services leader from all over the globe, and lift your brand presence to the following level.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="Our Branding Design Process"
          desc=""
          steps={steps}
        />
        <CardsSectionImage
          heading="Branding Design Trends for 2025"
          subheading=""
          services={cardsSectionImageData2}
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
          buttonColor="bg-white hover:scale-105"
          buttonTextColor="text-black"
          title=""
          description={[
            "Develop a brand identity that is memorable, consistent, and interesting with Capyngen’s branding design services. Call us for a free consultation today!",
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

export default BrandingIdentityDesign;
