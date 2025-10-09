import React from "react";
import Banner16 from "../components/Banner16";
import { assets } from "../assets/assets";
import BenefitsSection from "../components/BenefitsSection";

const CpgDistribution = () => {
  const solutionsData = [
    {
      title: "IT and Web Solutions",
      desc: (
        <>
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
                <strong className={`${color} drop-shadow-md`}>{title}</strong> –{" "}
                {text}
              </li>
            ))}
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
  return (
    <div>
      <Banner16 />
      <BenefitsSection
        heading="Reasons why digital transformation is necessary for CPG distributors"
        desc="The consumer packaged goods (CPG) sector is particularly dependent on the fast movement of stocks, well-functioning supply chains, and brand visibility. Consumers who opt for digital channels demand simple ordering processes, live product availability, and an easy-to-use delivery tracking system. By the fusion of Digital Marketing Solution For CPG industry. Capyngen is allowing distributors around the globe to not only simplify their workflows and boost their revenue but also to establish a closer relationship with retailers and consumers."
        benefits={solutionsData}
        image={assets.blockchainDevelopment}
        footerNote=""
      />
    </div>
  );
};

export default CpgDistribution;
