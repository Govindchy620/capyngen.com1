import { assets } from "../assets/assets";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import BenefitsSection from "../components/BenefitsSection";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import TopRatedCompany from "../components/TopRatedCompany";
import Banner8 from "../components/Banner8";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import {
  FaHandsHelping,
  FaSearch,
  FaTags,
  FaPalette,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import CardsSectionSlider from "../components/CardsSectionSlider";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/website-design#webpage",
  url: "https://www.capyngen.com/website-design",
  name: "Website Design Services | Creative & Responsive Web Design",
  description:
    "Boost your brand with Capyngen’s website design services. We deliver creative, custom, and responsive websites that are fast, affordable, and built to impress.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
      width: 250,
      height: 80,
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/webDesign--l8DQpZ8.png",
    width: 1200,
    height: 800,
    caption: "Website Design Services by Capyngen",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Services",
        item: "https://www.capyngen.com/services",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Website Design",
        item: "https://www.capyngen.com/website-design",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design and Development Services",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.instagram.com/capyngen",
      "https://www.linkedin.com/company/capyngen",
      "https://twitter.com/capyngen",
    ],
  },
  url: "https://www.capyngen.com/website-design",
  description:
    "Capyngen offers professional website design and development services that help businesses create engaging, responsive, and SEO-friendly websites to boost online presence and conversions.",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Design & Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Design",
          description:
            "Tailor-made website designs focused on brand identity, performance, and user engagement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Responsive Web Design",
          description:
            "Fully responsive designs optimized for desktop, tablet, and mobile devices.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WordPress & CMS Development",
          description:
            "CMS-based website development for easy management, scalability, and flexibility.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Design",
          description:
            "High-converting landing page design that drives leads and sales for businesses.",
        },
      },
    ],
  },
  image: "https://www.capyngen.com/assets/webDesign--l8DQpZ8.png",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/website-design#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website Design Services are the services that include the creation of professional, responsive, and user-friendly websites that represent your brand and are in line with your business objectives.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I hire the best website design company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The company that is right for you is the one that guarantees you top-notch designs, smooth and responsive functionalities that pull customer traffic and engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What are Custom Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom Website Design Services mean the creation of one-of-a-kind and tailor-made websites that represent your brand and are designed to achieve your business objectives.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Responsive Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we make sure that your website has perfect functionality on desktops, tablets, and smartphones so that every user gets the best experience.",
      },
    },
    {
      "@type": "Question",
      name: "What are Creative Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creative Website Design Services are those that attract users by offering interactive, modern, and visually engaging designs and at the same time help your brand to be unique.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer Corporate Website Design Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, we create professional and scalable corporate websites that generate trust and loyalty for companies and B2B businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build E-commerce websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer E-commerce Website Design Services that comprise the set-up of secure and easy-to-use online stores that are optimized for conversions and provide a seamless shopping experience for customers.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to design a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on the level of difficulty, timelines can be different; still, the majority of the projects range between 3 and 8 weeks depending on features and customizations.",
      },
    },
    {
      "@type": "Question",
      name: "Are your website designs SEO-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without any doubt! Our website designs comply with SEO standards, which, in turn, make it easier for web pages to be found by increasing their loading speed and ranking in search engines.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide affordable website design services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen is the creative affordable website design service provider that is characterized by high quality, creativity, and performance besides being budget-friendly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide website redesign services to update your site, make it user-friendly, and increase user interaction.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services comprise all the necessary continuous updates, security monitoring, and technical support for your website.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are the perfect fit for the needs of startups, SMEs, corporate enterprises, e-commerce businesses, and organizations across healthcare, education, real estate, and much more.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate third-party tools into my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, we can. We bring in different tools like CRMs, analytics tools, payment gateways, and other platforms to enhance the functionality and performance of your website.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen as the best website design company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Combining creativity, technology, and business tactics, Capyngen takes the trust of Indian businesses to create tailor-made, responsive, and scalable website design services across India.",
      },
    },
  ],
};

const WebSiteDesign = () => {
  const faqItems = [
    {
      question: "What are Website Design Services?",
      answer:
        "Website Design Services are the services that include the creation of professional, responsive, and user-friendly websites that represent your brand and are in line with your business objectives.",
    },
    {
      question: "Why should I hire the best website design company?",
      answer:
        "The company that is right for you is the one that guarantees you top-notch designs, smooth and responsive functionalities that pull customer traffic and engagement.",
    },
    {
      question: "What are Custom Website Design Services?",
      answer:
        "Custom Website Design Services mean the creation of one-of-a-kind and tailor-made websites that represent your brand and are designed to achieve your business objectives.",
    },
    {
      question: "Do you provide Responsive Website Design Services?",
      answer:
        "Yes, we make sure that your website has perfect functionality on desktops, tablets, and smartphones so that every user gets the best experience.",
    },
    {
      question: "What are Creative Website Design Services?",
      answer:
        "Creative Website Design Services are those that attract users by offering interactive, modern, and visually engaging designs and at the same time help your brand to be unique.",
    },
    {
      question: "Do you offer Corporate Website Design Services?",
      answer:
        "Of course, we create professional and scalable corporate websites that generate trust and loyalty for companies and B2B businesses.",
    },
    {
      question: "Can you build E-commerce websites?",
      answer:
        "Yes, we offer E-commerce Website Design Services that comprise the set-up of secure and easy-to-use online stores that are optimized for conversions and provide a seamless shopping experience for customers.",
    },
    {
      question: "How long does it take to design a website?",
      answer:
        "Based on the level of difficulty, timelines can be different; still, the majority of the projects range between 3 and 8 weeks depending on features and customizations are completed.",
    },
    {
      question: "Are your website designs SEO-friendly?",
      answer:
        "Without any doubt! Our website designs comply with SEO standards, which, in turn, make it easier for web pages to be found by increasing their loading speed, and ranking in search engines.",
    },
    {
      question: "Do you provide affordable website design services?",
      answer:
        "Yes, Capyngen is the creative affordable website design service provider that is characterized by high quality, creativity, and performance besides being budget-friendly.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we give web redesign services to update your site, make it user-friendly, and increase user interaction.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Our services comprise all the necessary continuous updates, and security monitoring, as well as technical support for your website.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We are the perfect fit for the needs of startups, SMEs, corporate enterprises, e-commerce businesses, and organizations across healthcare, education, real estate, and much more.",
    },
    {
      question: "Can you integrate third-party tools into my website?",
      answer:
        "Of course, we can. We bring in different tools like CRMs, analytics tools, payment gateways, and other platforms to better the functionality and performance of your website.",
    },
    {
      question:
        "Why choose Capyngen as the best website design company in India?",
      answer:
        "Combining creativity, technology, and business tactics, Capyngen takes the trust of Indian businesses to create tailor-made, responsive, and scalable website design services across the length and breadth of India.",
    },
  ];
  const benefitsData = [
    {
      title: "Custom Design",
      desc: "Tailor-made layouts that simply flaunt your brand identity.",
    },
    {
      title: "Responsive Design",
      desc: "Easy access to your website and users can even navigate through it on their mobile phones, tablets, as well as desktops.",
    },
    {
      title: "Creative UI/UX",
      desc: (
        <span>
          Trendy, entertaining, and easy-to-navigate{" "}
          <Link to={"/ui-ux-design"}>UI/UX design</Link> interfaces that
          visitors find irresistible to leave.
        </span>
      ),
    },
    {
      title: "E-commerce Solutions",
      desc: "Online stores that are safe, sufficient in terms of capacity, and are customer conversion-focused in order to increase sales.",
    },
    {
      title: "Corporate Solutions",
      desc: "The professional as well as the scalable designs that are capable of having a positive influence on your company image.",
    },
    {
      title: "SEO Integration",
      desc: "All the elements come together to facilitate search rankings e.g. structure, meta tags, and of content.",
    },
    {
      title: "Performance Optimization",
      desc: "User experience gets better with a very fast loading of the website and functionalities which are so smooth.",
    },
    {
      title: "Analytics & Tracking",
      desc: "Tools that are fully integrated to effectively capture the data of visitors, their activities on the website, and the performance of the website.",
    },
    {
      title: "Ongoing Support",
      desc: "Regular maintenance, timely updates, and long-term technical assistance are available.",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Research",
      description:
        "Getting to know your brand, audience, and objectives to create a strong base.",
    },
    {
      step: "Step 02",
      title: "Strategy & Planning",
      description:
        "Working out details of the site structure, user flow, and key features for a clear plan.",
    },
    {
      step: "Step 03",
      title: "Wireframing & UI Design",
      description:
        "Creating simple layouts and impressive visuals that reflect your ideas.",
    },
    {
      step: "Step 04",
      title: "Development",
      description:
        "Making websites that are fast, safe, and responsive with the latest technology from the designs.",
    },
    {
      step: "Step 05",
      title: "Content Integration",
      description:
        "Incorporating SEO-friendly text, interactive media, and attractive CTAs.",
    },
    {
      step: "Step 06",
      title: "Testing & Quality Assurance",
      description:
        "Checking that the performance is good on all browsers and devices.",
    },
    {
      step: "Step 07",
      title: "Launch",
      description: "Easy installation and going live without any trouble.",
    },
    {
      step: "Step 08",
      title: "Analytics & Optimization",
      description:
        "Monitoring user behavior and making your website better for continuous growth.",
    },
    {
      step: "Step 09",
      title: "Ongoing Support & Maintenance",
      description:
        "Regular updates, tracking, and patches to keep your site at its best.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Custom Website Design Services",
      description:
        "We make websites that are one-of-a-kind and show off your brand’s identity. Nothing is standard, even the smallest detail is to ensure your business gets noticed online.",
      image: assets.webDesign3,
      cardBg: "bg-blue-100",
    },

    {
      title: "Responsive Website Design Services",
      description:
        "It doesn’t matter whether someone is visiting your site on a desktop computer, tablet, or mobile phone; it will always be perfect for them and hence a quick and trouble-free user experience.",
      image: assets.webDesign4,
      cardBg: "bg-green-100",
    },
    {
      title: "Creative Website Design Services",
      description:
        "Website designs are modern, eye-catching, and user-friendly that attract new visitors and make them stay on the site for a longer period of time.",
      image: assets.webDesign5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Corporate Website Design Services",
      description:
        "Websites that are designed professionally and are scalable get you loved by your customers and hence, your business becomes more powerful.",
      image: assets.webDesign6,
      cardBg: "bg-pink-100",
    },
    {
      title: "E-commerce Website Design Services",
      description:
        "Online stores that are safe, simple to use with easy and quick checkout are designed just to increase your selling.",
      image: assets.webDesign7,
      cardBg: "bg-purple-100",
    },
    {
      title: "Landing Page Design Services",
      description:
        "Landing pages with high conversion rates are made to be the source of leads, sign-ups, and get the targeted audience to take the desired next step.",
      image: assets.webDesign8,
      cardBg: "bg-red-100",
    },
  ];
  const cardsSectionDifferentColorData1 = [
    {
      title: "Hands-On Experience",
      description:
        "The company has the know-how of years and a commendable record of success in creating high-performing websites from diverse sectors.",
      icon: (
        <FaHandsHelping className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#1e3a8a] to-[#1e40af] hover:from-[#1d4ed8] hover:to-[#2563eb]", // deep to vibrant blue
    },
    {
      title: "SEO-Compatible Method",
      description:
        "Good quality programming, quick loading times, and search-friendly structures that increase your online visibility.",
      icon: (
        <FaSearch className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#111827] to-[#374151] hover:from-[#1f2937] hover:to-[#4b5563]", // black to gray
    },
    {
      title: "Cheap Web Design Services",
      description:
        "The customer gets tailor-made solutions in every way, including the price, that do not slightly compromise the quality.",
      icon: (
        <FaTags className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-blue-500 to-[#1e293b] hover:from-blue-500 hover:to-blue-500", // navy black to slate gray
    },
    {
      title: "Bright Side of Design",
      description:
        "Just the right combination of contemporary beauty and customer-centric practicality.",
      icon: (
        <FaPalette className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#374151] to-[#6b7280] hover:from-[#4b5563] hover:to-[#9ca3af]", // mid gray to light gray
    },
    {
      title: "Action-Oriented Campaigns",
      description:
        "It is precisely the kind of design that strongly engages the audience, turns visitors into contacts, and eventually to conversions.",
      icon: (
        <FaBullhorn className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#1e293b] to-[#3b82f6] hover:from-[#2563eb] hover:to-[#60a5fa]", // dark navy to bright blue
    },
    {
      title: "Always There for You",
      description:
        "Our crew, from scheduling to post-launch, is totally committed to smooth communication and continuous support.",
      icon: (
        <FaUsers className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#0f172a] to-[#4b5563] hover:from-[#1e293b] hover:to-[#6b7280]", // dark slate to gray
    },
  ];
  const cardsSectionSliderData1 = [
    {
      title: "E-commerce & Retail",
      desc: "",
      image: assets.webDesign11,
      textColor: "text-white",
    },
    {
      title: "Healthcare & Wellness",
      desc: "",
      image: assets.webDesign12,
      textColor: "text-white",
    },
    {
      title: "Education & E-learning",
      desc: "",
      image: assets.webDesign13,
      textColor: "text-white",
    },
    {
      title: "Real Estate",
      desc: "",
      image: assets.webDesign14,
      textColor: "text-white",
    },
    {
      title: "IT & Software",
      desc: "",
      image: assets.webDesign15,
      textColor: "text-white",
    },
    {
      title: "Corporate & Enterprise Solutions",
      desc: "",
      image: assets.webDesign16,
      textColor: "text-white",
    },
    {
      title: "Travel & Hospitality",
      desc: "",
      image: assets.webDesign17,
      textColor: "text-white",
    },
    {
      title: "Startups & Entrepreneurs",
      desc: "",
      image: assets.webDesign18,
      textColor: "text-white",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Website Design Services | Creative & Responsive Web Design
        </title>
        <meta
          name="description"
          content="Boost your brand with Capyngen’s website design services. We deliver creative, custom, and responsive websites that are fast, affordable, and built to impress."
        />
        <meta
          name="keywords"
          content="Website Design Services | Creative & Responsive Web Design"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Banner8
        titleMain="Website Design"
        titlePrefix=""
        titleSuffix="That Works for Your Business"
        description={
          <>
            <span>
              The world sees your business through your website.{" "}
              <Link to={"/"}>Capyngen</Link> has the solution for you - Website
              Design Services, which combine eye-catching design, clever
              technology, and a clear strategy. We don’t just build websites
              that look beautiful, they also function. Are you looking for a
              corporate website, a visually engaging portfolio, or an{" "}
              <Link to={"/ecommerce-solutions"}>e-commerce</Link>
              site that attracts and retains customers? Our team is on a mission
              to deliver your brand the right amount of visibility in the
              digital space.
            </span>
          </>
        }
        imageSrc={assets.webDesign1}
        imageAlt="Ecommerce Design Illustration"
        bgColor="bg-gray-900"
        iconColor="bg-blue-700"
        reverse={false}
      />
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Do you need the professional services of a web designer? Then contact Capyngen, the best website design company in India, and get tailor-made website design services which take your brand to the next level.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Why Choose Capyngen for Website Design Services?"
          description={[
            <>
              <p>
                We at Capyngen are not just a service provider - we are your
                digital growth partner. Through our expertise and the skilled
                team, we develop websites that are visually attractive, easy to
                navigate, mobile-friendly, and conversion-focused.
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
                {[
                  {
                    title: "Custom Website Designs",
                    text: " that reflect your brand concept.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Fully Responsive Layouts",
                    text: " to ensure that the user can get the same experience on any device.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Creative & Modern Interfaces",
                    text: " that attract more attention to your brand.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Corporate Web Solutions",
                    text: " to a professional online identity that is both strong and reliable.",
                    color: "text-blue-500",
                  },
                  {
                    title: (
                      <>
                        <Link to={"/ecommerce-design"}>
                          E-commerce Website Designs
                        </Link>
                      </>
                    ),
                    text: " that are not only scalable but also redirect to increase your revenue.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Recognized by the Industry",
                    text: " as One of the Best Website Designers.",
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
            </>,
          ]}
          image={assets.webDesign2}
          background={assets.patternBg1}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[3/4]"
        />
        <CardsSectionImage
          heading="Our Web Development Features"
          subheading=""
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
          title=""
          description={[
            "Are you searching for the services of a responsive or creative website design for your company? Contact Capyngen right now and get the affordable and best website design services directed towards your requirements.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="Capyngen Website Design Process"
          desc="At Capyngen, we combine creativity, strategy, and technology to deliver websites that really work. Our organized process guarantees every project to be orderly, open, and results-driven:"
          steps={steps}
        />
        <FullSizeImageSection
          backgroundImage={assets.webDesignFullSize}
          title="Bring your brand to life online"
          description="Creating online environments that attract, engage, and uplift the users."
          buttonText="Design My Website"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSection
          heading="Why Capyngen is the Best Website Design Company"
          subheading="Capyngen shines out of the pack by creatively combining the art, the science, and the strategy to create websites that merely are not visually striking — but also produce tangible outcomes. This is why we are the first preference of decision-makers in startups, SMEs, and enterprises:"
          services={cardsSectionDifferentColorData1}
          cardBg=""
          headColor="text-white"
          sectionBg="bg-black"
          hoverBg=""
          height="h-72"
          textColor="text-white"
          hoverTextColor="transition-all"
        />
        <GetStarted
          reverse={true}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "To become one of the Best Website Design Companies, Capyngen has had to fuse creative thinking, the latest technology, and a sound commercial approach to build a solid reputation that spans the digital domain. The company is recognized as a leader in providing digital experiences that make a difference in the lives of startups, SMEs and enterprises, and hence, they trust them for such engagements.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          image={assets.getStarted}
          backgroundVideo={assets.backgroundVideo}
        />
        <BenefitsSection
          heading="Key Features of Our Website Design Services"
          desc="At Capyngen, our website design services are specifically made to bring about a positive impact, functionality, and value for the long term. Here are our unique selling points:"
          benefits={benefitsData}
          image={assets.webDesign10}
          footerNote=""
        />
        <FullSizeImageSection
          backgroundImage={assets.webDesignFullSize2}
          title="Beautiful websites that tell your story"
          description="We create responsive, innovative, and impactful websites for any brand."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSectionSlider
          heading="Industries We Serve"
          subheading="Our web design and development services span a variety of industries, namely:"
          cardBg="bg-transparent"
          hoverBg=" hover:bg-blue-50"
          textColor="text-gray-800"
          hoverTextColor=""
          textSize="text-xl"
          sectionBg="bg-black/90"
          height="h-78"
          headColor="text-white"
          services={cardsSectionSliderData1}
          footerNote="We create websites compliant with your industry and business objectives regardless of your niche."
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Crave a stylish, expandable, and captivating website? Acquire Capyngen's corporate website design services and e-commerce website design services to be the first in the line to grow your business online from the best website design company.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default WebSiteDesign;
