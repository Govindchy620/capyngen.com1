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
import Banner3 from "../components/Banner3";
import Banner8 from "../components/Banner8";
import GetStarted from "../components/GetStarted";
import {
  FaCheckCircle,
  FaDraftingCompass,
  FaExchangeAlt,
  FaRocket,
} from "react-icons/fa";
import CardsSectionImage from "../components/CardsSectionImage";

const PPC = () => {
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
  const solutionsData = [
    {
      title: "Google Ads Management",
      desc: (
        <>
          <p>
            We develop and execute Google Ads that deliver targeted visitors and
            make the most of the return on investment.
          </p>
          <p className="py-5">
            The Google PPC we provide has the following services:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>Search Ads (for intent-based searches)</li>
            <li>Display Ads (for brand visibility)</li>
            <li>Shopping Ads (for e-commerce stores)</li>
            <li>Video Ads (on YouTube)</li>
            <li>Remarketing Ads (to re-attract lost visitors)</li>
          </ul>
        </>
      ),
    },
    {
      title: "Social Media PPC Advertising",
      desc: (
        <>
          <p>
            Social media platforms are the places where customers are mostly
            found. Our social media ad campaigns make it possible for brands to
            reach the right audience.
          </p>
          <p className="py-5">The platforms we are good at are:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Facebook & Instagram Ads</li>
            <li>LinkedIn Ads (perfect for B2B businesses)</li>
            <li>Twitter (X) Ads</li>
            <li>TikTok Ads</li>
            <li>Influencer-supported promotions</li>
          </ul>
        </>
      ),
    },
    {
      title: "PPC Management Services",
      desc: (
        <>
          <p>
            Just having ads is not enough—what brings the outcomes is optimizing
            them. Our PPC management services guarantee that your campaigns will
            always be at their peak.
          </p>
          <p className="py-5">We handle:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Keyword research & targeting</li>
            <li>Ad copy creation & A/B testing</li>
            <li>Bid strategy optimization</li>
            <li>Landing page optimization</li>
            <li>Conversion tracking & reporting</li>
          </ul>
        </>
      ),
    },
    {
      title: "E-commerce PPC Advertising",
      desc: (
        <>
          <p>
            Pay-per-click (PPC) advertising campaigns have become essential to
            the survival of online stores. We help e-commerce brands to increase
            their sales by effectively targeting and re-marketing their
            audience.
          </p>
          <p className="py-5">The e-commerce PPC we bring to the table are:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Google Shopping Ads</li>
            <li>Amazon PPC</li>
            <li>Dynamic product retargeting</li>
            <li>Marketplace paid ads (Flipkart, Myntra, etc.)</li>
          </ul>
        </>
      ),
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Business Analysis",
      description:
        "Decoding your objectives, the market, and your competitors.",
    },
    {
      step: "Step 02",
      title: "Keyword Research",
      description: "Sourcing high-converting low-cost keywords.",
    },
    {
      step: "Step 03",
      title: "Campaign Setup",
      description:
        "Ad groups, targeting, and bidding are all part of campaign design.",
    },
    {
      step: "Step 04",
      title: "Ad Creation",
      description: "Beautifully merging the promotional text with visual.",
    },
    {
      step: "Step 05",
      title: "Launch & Monitoring",
      description:
        "Campaigns can be implemented and tracked simultaneously with real-time monitoring.",
    },
    {
      step: "Step 06",
      title: "Optimization",
      description:
        "Changing the bids, targeting, and creatives in accordance with the results achieved.",
    },
  ];
  const features = [
    {
      icon: <FaCheckCircle className="w-10 h-10 text-blue-500" />,
      title: "Expert Team",
      description:
        "Google Ads & Meta Ads are the areas where our professionals have gotten their certifications.",
    },
    {
      icon: <FaDraftingCompass className="w-10 h-10 text-blue-500" />,
      title: "Personalized Strategies",
      description: "Always tailored campaigns adjusted to your needs.",
    },
    {
      icon: <FaRocket className="w-10 h-10 text-blue-500" />,
      title: "Results Measured by Data",
      description: "Making decisions with the help of analytics only.",
    },
    {
      icon: <FaExchangeAlt className="w-10 h-10 text-blue-500" />,
      title: "Comprehensive Performance Metrics",
      description:
        "Get consistent reports from easy-to-understand charts and tables highlighting ROI.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "SEO",
      description: "A slow process that fosters credibility.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Social Media Marketing",
      description:
        "Good brand visibility; however, it may not always bring immediate revenue.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "PPC Marketing",
      description:
        "Makes real-time customer contacts and provides accountable ROI.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <Banner8
          titleMain="Pay-Per-Click Advertising Services"
          titlePrefix=""
          titleSuffix="That Drive Instant Results"
          description={
            <>
              <p className="text-lg">
                The need for quick and top-notch leads is the main focus of any
                business to grow in the digital market of today. Though SEO and
                content marketing are effective in the long run, businesses
                still require visibility that is instant and that they are able
                to track their return on investment. It is just the case where
                Pay-Per-Click (PPC) advertising would act as a solution.
              </p>
              <p className="text-lg">
                Being the top PPC agency, we are the experts in doing PPC ad
                campaigns that perform well and bring in the right set of
                visitors, lead to the generation of leads and the creation of
                grounds for taking up the conversions further. It does not
                matter whether you are a startup or an already-existing brand,
                the services provided to you by our PPC advertising are ways
                which assist you to keep ahead of your rivals.
              </p>
            </>
          }
          imageSrc={assets.eCommerceDesign}
          imageAlt="Ecommerce Design Illustration"
          bgColor="bg-gray-900"
          iconColor="bg-blue-700"
          reverse={false}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <TopRatedCompany
          title="What is Pay-Per-Click Advertising?"
          description={[
            <>
              <p>
                Pay-per-click is an online advertising channel where marketers
                are charged a certain amount each time their ad is clicked. In
                this way, companies can be present on search engines as well as
                on social media platforms, thus attracting visitors and
                potential customers without having to wait for organic results.
              </p>
              <p className="pt-4">Some of the main PPC platforms are:</p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-4 text-gray-300">
                {[
                  {
                    title: "Google Ads (Search, Display, Shopping, YouTube)",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "Microsoft Ads (Bing Ads)",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "Meta Ads (Facebook & Instagram Ads)",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "LinkedIn Sponsored Content",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "Twitter (X) Ads",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "E-commerce Ads (Amazon, Flipkart, etc.)",
                    text: "",
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
                    {text}
                  </li>
                ))}
              </ul>
              <p className="pt-4">
                The perfect PPC management services allow you to deliver the
                right message to the right audience at the right time.
              </p>
            </>,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
          isHidden="hidden"
        />
        <TopRatedCompany
          title="Why Choose Pay-Per-Click Marketing?"
          reverse={true}
          description={[
            <>
              <p>
                If you would like to know the reason for businesses to heavily
                invest in pay-per-click marketing, here it is:
              </p>
              <p className="pt-4">Some of the main PPC platforms are:</p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-4 text-gray-300">
                {[
                  {
                    title: "Instant Visibility",
                    text: "Be on top of Google within a few hours.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Highly Targeted Campaigns",
                    text: "Ads may be displayed according to keywords, demographics, interests, and behavior.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Budget Control",
                    text: "You are the one to set the amount of money you want to spend daily, weekly, or monthly.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Measurable ROI",
                    text: "Every click, impression, and conversion can be tracked.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Better Conversions",
                    text: "PPC ads are directed at people who are already looking for your product/service.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Scalable Marketing",
                    text: "Go ahead with a small budget and gradually increase your campaigns as they gain success.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Competitive Advantage",
                    text: "Reach the top of the search results before your competitors.",
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
                    - {text}
                  </li>
                ))}
              </ul>
              <p className="pt-4">
                This is why PPC advertising services are considered to be the
                most efficient paid marketing solutions.
              </p>
            </>,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
          isHidden="hidden"
        />
        <BenefitsSection
          heading="Our Pay-Per-Click Advertising Services"
          desc="As a PPC company that is results-focused, we provide paid advertising services from start to finish that are specifically designed to meet the goals of your business."
          benefits={solutionsData}
          image={assets.blockchainBanner1}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Remarketing & Retargeting Campaigns"
          description={[
            "Most visitors don’t make a purchase or convert on their first visit. Our remarketing campaigns are designed to keep bringing them back until they decide to buy or get in touch with you.",
            "Hence you are always in touch with the leads which matter the most to you.",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="How We Develop Custom AI Solutions"
          desc=""
          steps={steps}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Benefits of Working With a PPC Company"
          description={[
            "By collaborating with a professional Pay-per-click company, you are guaranteed expert advice, the best return on investment, and an advantage over your rivals.",
            <>
              <p>The benefits that come with it are:</p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-4 ">
                <li
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  Certified PPC professionals are at your disposal
                </li>
                <li
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  The most effective tools for the industry & analytics
                </li>
                <li
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  The conversion rates escalate
                </li>
                <li
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  Unproductive ad spend is minimized
                </li>
              </ul>
              <p>
                Besides, there is a more significant return on investment due to
                the continuous optimization
              </p>
            </>,
          ]}
          image={assets.getStarted}
        />
        <WhyChoose
          heading="Why Choose  Us"
          intro="Demonstrated Practice – Successfully running up to 10K+ PPC campaigns."
          features={features}
        />
        <CardsSectionImage
          heading="Pay-Per-Click Advertising vs. Other Promotion Channels"
          subheading={
            <>
              <p>
                Though methods like SEO, content creation, and social media are
                successful for the long haul, PPC provides agility and
                pinpoint-targeting that no other means offer.
              </p>
              <p className="">
                The most powerful digital strategy is a combination of{" "}
                <span className="text-blue-500 font-semibold text-2xl">
                  PPC
                </span>{" "}
                +{" "}
                <span className="text-blue-500 font-semibold text-2xl">
                  SEO
                </span>{" "}
                +{" "}
                <span className="text-blue-500 font-semibold text-2xl">
                  Social Media.
                </span>
                .
              </p>
            </>
          }
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
          title="Conclusion"
          description={[
            "Waiting for months to see results is not a luxury one can afford in the digital arena. This, however, is the reason why many companies resort to pay-per-click campaigns; as they offer immediate exposure, accurate targeting, and measurable ROI.",
            "Regardless of whether you are a small business or a big corporation, our PPC management services will enable you to conceive and effectively carry out PPC ad campaigns that will boost your business substantially.",
            "If you’re searching for a trusted PPC company that offers top-notch pay per click advertising in India and globally, you’ve come to the right place.",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default PPC;
