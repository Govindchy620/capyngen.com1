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
import IndustryServices from "../components/IndustryServices";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/smm#webpage",
  url: "https://www.capyngen.com/smm",
  name: "Social Media Marketing | Grow Your Brand Online – Capyngen",
  description:
    "Boost your brand presence with Capyngen’s social media marketing services. Engage, grow, and convert your audience across all major social platforms today!",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/smm#service",
  name: "Social Media Marketing (SMM) Services",
  serviceType:
    "Social Media Strategy, Social Media Management, Social Media Advertising",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Boost your brand presence with Capyngen’s social media marketing services. Engage, grow, and convert your audience across all major social platforms today!:contentReference[oaicite:1]{index=1}",
  url: "https://www.capyngen.com/smm",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/smm7-DS4W0H5s.png",
    caption: "Social Media Marketing | Grow Your Brand Online – Capyngen",
  },
  offers: {
    "@type": "Offer",
    price: "Custom",
    priceCurrency: "INR",
    availability: "InStock",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/smm#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is social media marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media marketing is the process of promoting a company's products, services, or brand via social media platforms like Facebook, Instagram, LinkedIn, and Twitter to increase awareness and user engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Why is social media marketing important for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media marketing helps businesses build brand awareness, reach target audiences, and increase traffic and sales using affordable tools that level the playing field for small and large companies alike.",
      },
    },
    {
      "@type": "Question",
      name: "What services does a social media marketing agency provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media agencies provide services such as social media management, advertising campaigns, content creation, data analysis, and strategic planning.",
      },
    },
    {
      "@type": "Question",
      name: "Can social media marketing help small businesses grow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Well-planned social media campaigns can help small businesses gain visibility, attract new customers, and generate leads in a cost-effective way.",
      },
    },
    {
      "@type": "Question",
      name: "What is social media advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media advertising involves paying for promotional posts or media placements to reach a specific target audience and achieve defined marketing goals.",
      },
    },
    {
      "@type": "Question",
      name: "How do social media management services work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media management includes the full marketing process from content planning and creation to ad campaign execution, performance tracking, and reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen handle social media promotion for enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen works with leading enterprises worldwide to deliver data-driven and high-impact social media campaigns using expert strategy and resources.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms do you cover for social media marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen provides marketing services for Facebook, Instagram, LinkedIn, Twitter, YouTube, and other emerging social platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from social media marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Results vary by campaign, but most clients see noticeable engagement and traffic increases within 1–3 months, while long-term brand authority develops over time.",
      },
    },
    {
      "@type": "Question",
      name: "Can social media marketing increase website traffic and sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Targeted social media marketing can drive high-quality traffic to your website and boost conversions by promoting offers and engaging audiences.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide analytics and reporting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We track and report metrics such as engagement, reach, clicks, and ROI to assess the success of each campaign and inform ongoing strategy.",
      },
    },
    {
      "@type": "Question",
      name: "How do you create effective social media content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We create engaging social media content using detailed research, trending topics, strong visuals, and data-driven creative strategies to attract and retain audiences.",
      },
    },
    {
      "@type": "Question",
      name: "Can social media marketing integrate with other digital marketing efforts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our social media campaigns integrate seamlessly with SEO, email marketing, and paid advertising for a unified digital marketing strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Are social media marketing services suitable for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Social media is a cost-effective tool for startups to build brand visibility, grow audiences, and attract new customers quickly.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen social media marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply contact Capyngen to schedule a consultation, and we’ll build a customized social media marketing strategy tailored to your business goals.",
      },
    },
  ],
};

const SMM = () => {
  const faqItems = [
    {
      question: "How long does it take for funds to show in my wallet?",
      answer:
        "The time it takes for funds to appear in your wallet depends on the deposit method. Most funding methods are instantaneous.",
    },
    {
      question: "What is the minimum deposit requirement?",
      answer:
        "PrimeForex Markets requires no minimum deposit, however, a minimum amount may be required by your preferred funding method.",
    },
    {
      question: "Are there any fees associated with depositing funds?",
      answer: "No, PrimeForex Markets charges no fees for depositing funds.",
    },
    {
      question: "What is social media marketing?",
      answer:
        "It is promoting goods, services or brands of a company via social media channels namely Facebook, Instagram, LinkedIn, Twitter and so on to arouse awareness and/or participation of the user.",
    },
    {
      question: "Why is social media marketing important for businesses?",
      answer:
        "Social media helps promote businesses by using technologies that were once exclusive to large companies. It enables small businesses to build relationships, drive traffic and sales, and create engaging content for target audiences.",
    },
    {
      question: "What services does a social media marketing agency provide?",
      answer:
        "Services include social media management, ad campaigns, content generation, data interpretation, and strategy development.",
    },
    {
      question: "Can social media marketing help small businesses grow?",
      answer:
        "Yes. Strategically planned campaigns help small businesses gain visibility among potential customers, making it a cost-effective way to generate leads.",
    },
    {
      question: "What is social media advertising?",
      answer:
        "It refers to paying for the promotion of media or content to reach a specific target audience and achieve marketing goals.",
    },
    {
      question: "How do social media management services work?",
      answer:
        "They handle the entire marketing cycle—from content planning and production to running ad campaigns and analyzing results.",
    },
    {
      question: "Can Capyngen handle social media promotion for enterprises?",
      answer:
        "Yes. We work with top-tier clients worldwide to deliver effective social media campaigns using our expertise and resources.",
    },
    {
      question: "Which platforms do you cover for social media marketing?",
      answer:
        "We offer services on Facebook, Instagram, LinkedIn, Twitter, YouTube, and emerging social networks.",
    },
    {
      question:
        "How long does it take to see results from social media marketing?",
      answer:
        "Results in engagement and traffic typically appear within 1–3 months, while brand authority builds gradually.",
    },
    {
      question:
        "Can social media marketing increase website traffic and sales?",
      answer:
        "Yes. Targeted traffic and promotional offers through social media marketing can increase website visits and sales.",
    },
    {
      question: "Do you provide analytics and reporting?",
      answer:
        "Yes. We monitor key performance indicators like engagement, reach, clicks, and ROI to evaluate campaign success.",
    },
    {
      question: "How do you create effective social media content?",
      answer:
        "We conduct detailed research, follow current trends, use appealing visuals, and apply data-driven strategies to craft engaging posts.",
    },
    {
      question:
        "Can social media marketing integrate with other digital marketing efforts?",
      answer:
        "Yes. Our campaigns can be integrated with SEO, email marketing, and paid advertising for a cohesive digital strategy.",
    },
    {
      question: "Are social media marketing services suitable for startups?",
      answer:
        "Yes. Social media promotion is a cost-effective tool for startups to build brand awareness and attract customers quickly.",
    },
    {
      question:
        "How can I get started with Capyngen social media marketing services?",
      answer:
        "Please arrange a time with us to begin crafting a personalized social media marketing plan tailored to your business goals.",
    },
  ];
  const servicesData = [
    {
      image: assets.smm3,
      title: "Content Personalization",
      desc: "Making posts more suitable for your followers' likes and dislikes.",
    },
    {
      image: assets.smm4,
      title: "Storytelling Marketing",
      desc: "Gaining the audience's sympathy by offering them stories to read.",
    },
    {
      image: assets.smm5,
      title: "Hashtag Campaigns",
      desc: "Raising visibility through partnering with trending hashtags.",
    },
    {
      image: assets.smm6,
      title: "Video First Strategy",
      desc: "Employing reels, shorts, and live sessions to draw attention.",
    },
    {
      image: assets.smm7,
      title: "Paid + Organic Mix",
      desc: "Working social media advertising and organic content side by side.",
    },
    {
      image: assets.smm8,
      title: "Data-Driven Optimization",
      desc: "Keeping an eye on the numbers and making good use of them to increase performance.",
    },
  ];
  const solutionsData = [
    {
      title: "Social Media Strategy & Planning",
      desc: (
        <>
          <p>
            We come up with a strategy specifically tailored to your brand
            objectives, the current trends in the industry, and customer
            behaviour.
          </p>
          <p className="py-5">Incorporates:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Competitor analysis</li>
            <li>
              Platform selection (Facebook, Instagram, LinkedIn, Twitter,
              YouTube, TikTok, etc.)
            </li>
            <li>Content calendar planning</li>
            <li>Hashtag and trend research</li>
          </ul>
        </>
      ),
    },
    {
      title: "Social Media Management Services",
      desc: (
        <>
          <p>
            Running social media accounts needs both regularity and good ideas.
            Our social media management services make sure your brand stays
            alive and attractive on all the social media platforms.
          </p>
          <p className="py-5">We Handle:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Content creation (posts, stories, reels, graphics, videos)</li>
            <li>Content scheduling and publishing</li>
            <li>Community management (comments, DMs, queries)</li>
            <li>Brand reputation monitoring</li>
          </ul>
        </>
      ),
    },
    {
      title: "Social Media Advertising",
      desc: (
        <>
          <p>
            Paid advertisements are the quickest way to get noticed. Our social
            media advertising specialists set up very focused ads so as to get
            the maximum return of investment.
          </p>
          <p className="py-5">
            The services we provide under the advertisement umbrella are:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>Facebook & Instagram Ads</li>
            <li>LinkedIn Sponsored Content</li>
            <li>YouTube Ads</li>
            <li>Twitter (X) Ads</li>
            <li>Retargeting campaigns</li>
          </ul>
          <p className="pt-5">
            With paid promotions, you reach the right audience at the right
            time.
          </p>
        </>
      ),
    },
    {
      title: "Creative Content Production",
      desc: (
        <>
          <p>
            Social media is the medium, but content is the mainstay of promotion
            through social media. To engage and entice, we produce captivating
            visuals and copy that reflect with your target market.
          </p>
          <p className="py-5">The content we make are:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Graphics & infographics</li>
            <li>Short-form videos & reels</li>
            <li>GIFs & animations</li>
            <li>Blogs & captions</li>
            <li>User-generated content campaigns</li>
          </ul>
        </>
      ),
    },
    {
      title: "Influencer Marketing & Collaborations",
      desc: (
        <>
          <p>
            Social media personalities have the ability to tremendously
            influence customers' decision-making process. We as a social media
            marketing agency, link your brand to the influencers that will
            increase your reach.
          </p>
          <p className="py-5">We do this by:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Finding influencers who are relevant to the targeted niche</li>
            <li>Handling influencer partnerships</li>
            <li>Monitoring How Well Your Campaign Works</li>
          </ul>
        </>
      ),
    },
    {
      title: "Analytics & Reporting",
      desc: (
        <>
          <p>
            Almost all the campaigns that we have are based on data. We deliver
            comprehensive reports to our clients which include various metrics
            of the performance such as the number of people reached, engagement,
            clicks, and conversions.
          </p>
          <p className="pt-3">
            We use this information to get an improved return on our
            investments.
          </p>
        </>
      ),
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Research & Audit",
      description:
        "Getting to know your brand inside and out, identifying the competition.",
    },
    {
      step: "Step 02",
      title: "Strategy Development",
      description: "Decide on the content and the advertising plan.",
    },
    {
      step: "Step 03",
      title: "Content Creation",
      description: "Making posts, videos, and campaigns come to life.",
    },
    {
      step: "Step 04",
      title: "Execution",
      description: "Posting, managing ads, and communicating with users.",
    },
    {
      step: "Step 05",
      title: "Monitoring & Reporting",
      description: "Evaluating results and fine-tuning the campaigns.",
    },
    {
      step: "Step 06",
      title: "Continuous Improvement",
      description:
        "Adapt strategies based on analytics for ongoing growth and better ROI.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Social Media Marketing | Grow Your Brand Online – Capyngen
        </title>
        <meta
          name="description"
          content="Boost your brand presence with Capyngen’s social media marketing services. Engage, grow, and convert your audience across all major social platforms today!"
        />
        <meta
          name="keywords"
          content="Social Media Marketing | Grow Your Brand Online – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Banner15 />
      <FullSizeImageSection
        backgroundImage={assets.smmFullSize}
        title="Connect, engage, and grow online"
        description="We are managing your social media presence to create communities that are fond of your brand."
        buttonText="Grow My Audience"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <div className="pt-10 bg-black"></div>
      <TopRatedCompany
        title="Importance of Social Media Marketing"
        description={[
          <>
            <p>
              If you are pondering the significance of social media marketing,
              below are some factors out of many why firms are prepared to
              allocate their resources in social media marketing:
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
              {[
                {
                  title: "Massive Audience Reach",
                  text: "The number of social media users globally is in excess of 5 billion.",
                  color: "text-blue-500",
                },
                {
                  title: "Cost-Effective Promotion",
                  text: "A more affordable way compared to traditional advertising methods.",
                  color: "text-blue-500",
                },
                {
                  title: "Targeted Advertising",
                  text: "The ad can be customized to be more appealing to the age, location, likes, and behavior.",
                  color: "text-blue-500",
                },
                {
                  title: "Brand Visibility",
                  text: "Through regular social media advertising, brand loyalty is established.",
                  color: "text-blue-500",
                },
                {
                  title: "Customer Engagement",
                  text: "Communicate with customers whenever you want.",
                  color: "text-blue-500",
                },
                {
                  title: "Increased Conversions",
                  text: "Social proof along with feedback is a significant factor that buyers consider before making decisions.",
                  color: "text-blue-500",
                },
              ].map(({ title, text, color }, idx) => (
                <li
                  key={idx}
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  <strong className={`${color} drop-shadow-md`}>{title}</strong>{" "}
                  – {text}
                </li>
              ))}
            </ul>
          </>,
        ]}
        image={assets.smm1}
        background={assets.patternBg1}
        isHidden="hidden"
      />
      <BenefitsSection
        heading="Our Social Media Marketing Services"
        desc="As a leading social media marketing company, we provide end-to-end solutions tailored to your business needs."
        benefits={solutionsData}
        image={assets.smm2}
        footerNote=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Amplify Your Brand on Social Media"
        description={[
          "Use the social media marketing services to increase your interactions, reach, and your turnover by collaborating with Capyngen, a top social media marketing agency, and utilizing social media marketing services.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />
      <IndustryServices
        heading="Top Social Media Marketing Tactics"
        subheading="Our company does not rely on lucky shots, that's for sure. Our strategies are a product of creative minds, numbers, and trends. Some of the main social media marketing approaches we make use of are here:"
        cardBg="bg-gray-700"
        cardText="text-white"
        cardDescText="text-white"
        services={servicesData}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="Why Choose Us as Your Social Media Marketing Partner?"
        description={[
          <>
            <p>
              There is no limit to the number of agencies in the market.
              However, the five points below are what make us stand out:
            </p>
            <ul className="list-disc list-inside space-y-2 py-4 text-lg max-w-3xl mx-auto">
              <li className={` relative pl-4`}>
                We don't use ready-made plans – Our customized strategies are as
                unique as your business.
              </li>
              <li className={` relative pl-4`}>
                We have a vibrant and inventive team – Our designers, writers,
                and strategists work in harmony.
              </li>
              <li className={` relative pl-4`}>
                We have credibility through the demonstration of our skill –
                Years of experience in local and foreign markets, leading to
                diverse industry bases.
              </li>
            </ul>
            <p>
              As soon as you join us,you are not simply hiring a social media
              marketing agency but rather you are getting a growth partner.
            </p>
          </>,
        ]}
        image={assets.smm9}
      />
      <HowWeWork
        heading="Our Social Media Marketing Process"
        desc="We follow a tried and tested, step-by-step approach to bring about the success of our campaigns:"
        steps={steps}
      />
      <FullSizeImageSection
        backgroundImage={assets.smmFullSize2}
        title="Make your brand go viral"
        description="One of the most effective ways to increase brand awareness is through a creative campaign that attracts new followers and retains the existing ones."
        buttonText="CONTACT US"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <TopRatedCompany
        title=""
        description={[
          `The world is all about social interactions and your brand needs to keep up with that trend. Social media marketing is simply not the numbers game that most people think it is. The main goal in that marketing is to gain trust, increase the interactions and, finally, sales.`,
          `Our social media marketing agency is a perfect blend of creative ideas, analytics-based strategy, and targeted social media ads that you get by selecting us.`,
          `It does not make a difference whether you are a young company or an already existing brand; our social media management services will be the key to your sustainable growth by regular and effective social media promotion.`,
        ]}
        image={assets.smm10}
        isHidden={true}
        background={assets.patternBg1}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Get a Social Media Consultation"
        description={[
          "Figuring out the most efficient social media marketing tactics specifically tailored for your business to result in maximum impact and growth.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default SMM;
