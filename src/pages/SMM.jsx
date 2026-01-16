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
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/smm#webpage",
  url: "https://www.capyngen.com/smm",
  name: "Social Media Marketing | Grow Your Brand Online – Capyngen",
  description:
    "Boost your brand presence with Capyngen's social media marketing services. Engage, grow, and convert your audience across all major social platforms today!",
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
    "Boost your brand presence with Capyngen's social media marketing services. Engage, grow, and convert your audience across all major social platforms today!:contentReference[oaicite:1]{index=1}",
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
      name: "What is the time it takes for the money to appear in my wallet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The amount of time the funds would take to reach your wallet would be determined by the mode of deposit. The majority of the funding strategies are immediate.",
      },
    },
    {
      "@type": "Question",
      name: "What much the minimum deposit needed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PrimeForex Markets does not have a minimum deposit, but you might need at least some minimum amount depending on the way you fund the account.",
      },
    },
    {
      "@type": "Question",
      name: "Does it have any charges on the deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, PrimeForex Markets does not charge any fee on deposits.",
      },
    },
    {
      "@type": "Question",
      name: "What is social media marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is marketing goods, services or brands of a business through social media platforms, namely Facebook, Instagram, LinkedIn, Twitter, etc, to create awareness and/or involvement of the user with the help of viral social media campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of social media marketing to business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media is effective in marketing companies as it utilises technologies that previously were only available to big organisations. It helps small businesses form new relationships, promote traffic and sales, and produce interesting content for the target groups with the help of social media services in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are some of the services offered by a social media marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The services will be social media marketing services, ad campaigns, content generation, data interpretation and strategy development offered by a leading social media agency in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "Is social media marketing effective for the growth of small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Planned campaigns are one of the effective strategies of small businesses to be known by potential customers, and this is a cost-effective method of creating leads through the best social media services in India.",
      },
    },
    {
      "@type": "Question",
      name: "What is social media advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is a kind of paying for the promotion of media content to a target audience to attain the objectives of marketing using social media services in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are the operations of the social media management services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are in charge of the complete marketing process, content planning, and production, as well as ad campaigns and outcome analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen capable of social media promotion of enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have high-level clients across the world, and we provide services to them in terms of effective social media marketing services, utilizing our knowledge and resources.",
      },
    },
    {
      "@type": "Question",
      name: "What social media marketing platforms do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services are available on Facebook, Instagram, LinkedIn, Twitter, YouTube, and social networks that are emerging featuring the best social media marketing services in India.",
      },
    },
    {
      "@type": "Question",
      name: "After social media marketing, what is the time to notice the results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagement results and traffic are expected within 1-3 months, whereas brand authority will become developed over time.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible that social media marketing will boost traffic and sales of the website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Social media services in India can boost target traffic and promotional offers to the websites and the sales.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer analytics and reporting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We track such KPIs as engagement, reach, clicks, and ROI to assess the success of campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "What are the effective content creation strategies on social media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do an in-depth research, track the latest trends, rely on attractive images, and implement data-oriented methods to create exciting posts with a help of Top social media marketing services in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to have social media marketing to integrate with the other online marketing activities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SEO, email marketing and paid advertising may be incorporated into our campaigns to have a unified digital strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Is social media marketing services appropriate in startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. social media services in India is an economical solution that start ups can use to create brand awareness and get customers within a short time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to begin with Capyngen social media marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have scheduled an appointment with you to start developing a unique social media marketing strategy that suits your business objectives using the best social media marketing agency in gurgaon.",
      },
    },
  ],
};

const SMM = () => {
  const faqItems = [
    {
      question:
        "What is the time it takes for the money to appear in my wallet?",
      answer:
        "The amount of time the funds would take to reach your wallet would be determined by the mode of deposit. The majority of the funding strategies are immediate.",
    },
    {
      question: "What much the minimum deposit needed?",
      answer:
        "PrimeForex Markets does not have a minimum deposit, but you might need at least some minimum amount depending on the way you fund the account.",
    },
    {
      question: "Does it have any charges on the deposit?",
      answer: "No, PrimeForex Markets does not charge any fee on deposits.",
    },
    {
      question: "What is social media marketing?",
      answer:
        "It is marketing goods, services or brands of a business through social media platforms, namely Facebook, Instagram, LinkedIn, Twitter, etc, to create awareness and/or involvement of the user with the help of viral social media campaigns.",
    },
    {
      question: "What is the importance of social media marketing to business?",
      answer:
        "Social media is effective in marketing companies as it utilises technologies that previously were only available to big organisations. It helps small businesses form new relationships, promote traffic and sales, and produce interesting content for the target groups with the help of social media services in India.",
    },
    {
      question:
        "What are some of the services offered by a social media marketing agency?",
      answer:
        "The services will be social media marketing services, ad campaigns, content generation, data interpretation and strategy development offered by a leading social media agency in Gurgaon.",
    },
    {
      question:
        "Is social media marketing effective for the growth of small businesses?",
      answer:
        "Yes. Planned campaigns are one of the effective strategies of small businesses to be known by potential customers, and this is a cost-effective method of creating leads through the best social media services in India.",
    },
    {
      question: "What is social media advertising?",
      answer:
        "It is a kind of paying for the promotion of media content to a target audience to attain the objectives of marketing using social media services in India.",
    },
    {
      question:
        "What are the operations of the social media management services?",
      answer:
        "They are in charge of the complete marketing process, content planning, and production, as well as ad campaigns and outcome analysis.",
    },
    {
      question: "Is Capyngen capable of social media promotion of enterprises?",
      answer:
        "Yes. We have high-level clients across the world, and we provide services to them in terms of effective social media marketing services, utilizing our knowledge and resources.",
    },
    {
      question: "What social media marketing platforms do you use?",
      answer:
        "Our services are available on Facebook, Instagram, LinkedIn, Twitter, YouTube, and social networks that are emerging featuring the best social media marketing services in India.",
    },
    {
      question:
        "After social media marketing, what is the time to notice the results?",
      answer:
        "Engagement results and traffic are expected within 1-3 months, whereas brand authority will become developed over time.",
    },
    {
      question:
        "Is it possible that social media marketing will boost traffic and sales of the website?",
      answer:
        "Yes. Social media services in India can boost target traffic and promotional offers to the websites and the sales.",
    },
    {
      question: "Do you offer analytics and reporting?",
      answer:
        "Yes. We track such KPIs as engagement, reach, clicks, and ROI to assess the success of campaigns.",
    },
    {
      question:
        "What are the effective content creation strategies on social media?",
      answer:
        "We do an in-depth research, track the latest trends, rely on attractive images, and implement data-oriented methods to create exciting posts with a help of Top social media marketing services in Gurgaon.",
    },
    {
      question:
        "Is it possible to have social media marketing to integrate with the other online marketing activities?",
      answer:
        "Yes. SEO, email marketing and paid advertising may be incorporated into our campaigns to have a unified digital strategy.",
    },
    {
      question: "Is social media marketing services appropriate in startups?",
      answer:
        "Yes. social media services in India is an economical solution that start ups can use to create brand awareness and get customers within a short time.",
    },
    {
      question:
        "What is the best way to begin with Capyngen social media marketing services?",
      answer:
        "We have scheduled an appointment with you to start developing a unique social media marketing strategy that suits your business objectives using the best social media marketing agency in gurgaon.",
    },
  ];
  const servicesData = [
    {
      image: assets.smm3,
      title: "Content Personalization",
      desc: "Posting content that would be liked and disliked by your followers.",
    },
    {
      image: assets.smm4,
      title: "Storytelling Marketing",
      desc: "The appeal to the audience to sympathise with them by providing them with stories to read.",
    },
    {
      image: assets.smm5,
      title: "Hashtag Campaigns",
      desc: "Creating awareness by collaboration with trending hashtags.",
    },
    {
      image: assets.smm6,
      title: "Video First Strategy",
      desc: "Use of reels, shorts and live sessions to attract attention.",
    },
    {
      image: assets.smm7,
      title: "Paid + Organic Mix",
      desc: "Organic content and Social media advertising should work simultaneously.",
    },
    {
      image: assets.smm8,
      title: "Data-Driven Optimization",
      desc: "Monitoring the figures and utilizing them well to boost output utilizing the Best network solutions services in gurgaon.",
    },
  ];
  const solutionsData = [
    {
      title: "Social Media Strategy & Planning",
      desc: (
        <>
          <p>
            When we create a strategy, it is custom-made to your brand goals,
            the prevailing trends in the industry and consumer behaviour where
            we are providing the top social media marketing services in Gurgaon.
          </p>
          <p className="py-5 font-semibold">Incorporates:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Competitor analysis</li>
            <li>
              Selection of platform (Facebook, Instagram, LinkedIn, Twitter,
              YouTube, TikTok, and so on)
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
            The operation of social media accounts requires frequency and
            inspiration. With best social media services in India, our social
            media management services ensure that your brand remains alive and
            attractive in all the social media platforms.
          </p>
          <p className="py-5 font-semibold">We Handle:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Creation of content (posts, stories, reels, graphics, videos)
            </li>
            <li>Planning and publishing of content</li>
            <li>Community management (reviews, DMs, inquiries)</li>
            <li>Monitoring of brand reputation</li>
          </ul>
        </>
      ),
    },
    {
      title: "Social Media Advertising",
      desc: (
        <>
          <p>
            Advertisements that are paid are the most rapid means to be heard.
            Our advertising gurus in social media establish highly targeted
            advertisements in order to achieve the highest ROI in terms of
            strategic social media campaigns as well as value growth.
          </p>
          <p className="py-5 font-semibold">
            Under the advertisement umbrella, the services that we offer are:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>Facebook & Instagram Ads</li>
            <li>LinkedIn Sponsored Content</li>
            <li>YouTube Ads</li>
            <li>Twitter (X) Ads</li>
            <li>Retargeting campaigns</li>
          </ul>
          <p className="pt-5">
            Paid promotion allows reaching the target audience when it is
            necessary and via social media services in India.
          </p>
        </>
      ),
    },
    {
      title: "Creative Content Production",
      desc: (
        <>
          <p>
            The primary instrument of promotion using social media is content;
            however, the medium is social media. In a bid to capture and
            attract, we create exciting visuals and copy that resonate with your
            target market with the support of the best social media marketing
            agency in Gurgaon.
          </p>
          <p className="py-5 font-semibold">The content we make is:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Graphics & infographics</li>
            <li>Short-form videos & reels</li>
            <li>GIFs & animations</li>
            <li>Blogs & captions</li>
            <li>Campaigns of user-generated content</li>
          </ul>
        </>
      ),
    },
    {
      title: "Influencer Marketing & Collaborations",
      desc: (
        <>
          <p>
            The influence of social media personalities on the decision-making
            process of customers may be tremendous. As a gurgaon based social
            media agency, we associate your brand with influencers who will help
            you reach more.
          </p>
          <p className="py-5 font-semibold">We do this by:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Identifying the influencers who will be relevant to the target
              niche
            </li>
            <li>Managing the influencer partnerships</li>
            <li>The Evaluation of How Your Campaign is Working</li>
          </ul>
        </>
      ),
    },
    {
      title: "Analytics & Reporting",
      desc: (
        <>
          <p>
            Our data-based campaigns are almost all based on data. We provide
            detailed reports to our customers that encompass different measures
            of performance, including the number of people that were reached,
            engaged, clicked, and converted.
          </p>
          <p className="pt-3">
            This is the information that we apply in achieving a better return
            on our investments using the best crm service design tools.
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
        "Learning your brand in and out, determining your competition.",
    },
    {
      step: "Step 02",
      title: "Strategy Development",
      description: "Make decisions on the content and the advertisement plan.",
    },
    {
      step: "Step 03",
      title: "Content Creation",
      description: "Creating posts, videos, and campaigns will become real.",
    },
    {
      step: "Step 04",
      title: "Execution",
      description:
        "Posting, administration of advertisements, and interaction with the users.",
    },
    {
      step: "Step 05",
      title: "Monitoring & Reporting",
      description: "Measuring the outcomes and optimising the campaigns.",
    },
    {
      step: "Step 06",
      title: "Continuous Improvement",
      description:
        "Adjust tactics on analytics to grow continuously and enhance ROI.",
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
          content="Boost your brand presence with Capyngen's social media marketing services. Engage, grow, and convert your audience across all major social platforms today!"
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
      {/* <TopRatedCompany
        title="Connect, engage, and grow online"
        description={[
          `We are operating your social media so as to establish communities that are appreciative of your brand, as well as to provide the best social media marketing services in India that result in engagement.`,
        ]}
        image={assets.smm1}
        isHidden={true}
        background={assets.patternBg1}
      />
      <TopRatedCompany
        reverse={true}
        title="Importance of Social Media Marketing"
        description={[
          `Social Media Marketing (SMM) is a process that is directed at promoting products, services, or brands through social media. It entails creating appealing content, running sponsored campaigns and creating a positive rapport with the target market. Brand is ensured by the community social network structure:`,
          <>
            <ul className="list-disc list-inside space-y-2">
              <li>Targets the right audience.</li>
              <li>Holds the summit of the adversaries.</li>
              <li>Earn confidence and the name.</li>
              <li>Pulls the sales and right leads.</li>
            </ul>
            <br />
            <p>
              More precisely, the social media services in India are the new
              means of reaching your consumers via your brand, backed by the
              social media campaigns that facilitate the growth.
            </p>
          </>,
        ]}
        image={assets.smm10}
        imageHeight="aspect-[1/1]"
        isHidden={true}
        background={assets.patternBg1}
      /> */}
      <FullSizeImageSection
        backgroundImage={assets.smmFullSize}
        title="Connect, engage, and grow online"
        description="We are operating your social media so as to establish communities that are appreciative of your brand, as well as to provide the best social media marketing services in India that result in engagement."
        buttonText="Grow My Audience"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <div className="pt-10 bg-black"></div>
      <TopRatedCompany
        title="Importance of Social Media Marketing"
        description={[
          `In case you are contemplating the importance of social media marketing, some of the reasons why companies are willing to invest their resources in social media marketing that as presented by a reliable social media agency in Gurgaon, include:`,
          <>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
              {[
                {
                  title: "Large Reach of the Audience",
                  text: "There are over 5 billion users of social media in the world.",
                  color: "text-blue-500",
                },
                {
                  title: "Cost-Effective Promotion",
                  text: "It is cheaper than the conventional advertising strategies.",
                  color: "text-blue-500",
                },
                {
                  title: "Targeted Advertising",
                  text: "The advert will be tailored to look more attractive to the age, location, likes, and behaviour.",
                  color: "text-blue-500",
                },
                {
                  title: "Brand Visibility",
                  text: "Brand loyalty is achieved through frequent social media services in India.",
                  color: "text-blue-500",
                },
                {
                  title: "Customer Engagement",
                  text: "Add and Behave with customers as frequently as you desire.",
                  color: "text-blue-500",
                },
                {
                  title: "High Conversion Rate",
                  text: "Feedback and Social proof is a major factor that buyers put into consideration prior to making their decisions.",
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
        desc="Being one of the top Best marketing agency in Gurgaon, we offer all-in-one solutions to your business requirements with the help of potent social media marketing services."
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
          <>
            Through the social media services in India, you can expand your
            interactions, reach, and turnover and apply the proven social media
            marketing services through <Link to={"/"}>Capyngen</Link>, a social
            media agency in Gurgaon.
          </>,
        ]}
        backgroundVideo={assets.backgroundVideo}
      />
      <IndustryServices
        heading="Top Social Media Marketing Tactics"
        subheading="We are not using some lucky shots in our company. Our strategies are a combination of creative minds, figures and trends. The principal social media marketing strategies that we utilise include the following:"
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
              The market does not have a limit on the number of agencies. But
              the following 5 points are what we boast of:
            </p>
            <p className="py-4">
              Ready-made strategies are not used here, we design tailor-made
              strategies to fit your business.
            </p>
            <p>
              Our designers, writers, and strategists co-ordinate well and we
              have a dynamic and creative team.
            </p>
            <p className="py-4">
              Our credibility is on the basis of our prowess, which is proven by
              Years of experience in local and foreign markets, giving rise to
              varying industry bases.
            </p>
            <p>
              Not only do you not just hire a social media marketing company
              when you are with us, but you are getting a growth partner.
            </p>
          </>,
        ]}
        image={assets.smm9}
      />
      <HowWeWork
        heading="Our Social Media Marketing Process"
        desc="Our campaigns are conducted in a proven step-by-step fashion, which will ensure the success thereof:"
        steps={steps}
      />
      <FullSizeImageSection
        backgroundImage={assets.smmFullSize2}
        title="Make your brand go viral"
        description="A creative campaign, which can attract new followers and keep the existing ones with the help of social media services in India, is one of the best approaches to increasing brand awareness."
        buttonText="CONTACT US"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <TopRatedCompany
        title=""
        description={[
          `The world is synonymous with social interactions and your brand must follow the same trend. Social media marketing is not the number game that most individuals would assume. The overall aim in marketing is to win the trust, augment the interactions, and ultimately increase sales.`,
          <>
            The social media marketing company is a flawless combination of
            creative thinking, analytical approach and targeted advertisements.
            Whether you are a young firm or an already existing brand, it does
            not matter; our social media services in India will be the key to
            your sustainable growth.
          </>,
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
          "It will be difficult to determine the most effective social media marketing services that are particularly designed to suit your business to achieve maximum impact and growth using the best social media services in India.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default SMM;
