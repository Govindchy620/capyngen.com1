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
import Banner2 from "../components/Banner2";
import Banner6 from "../components/Banner6";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import IndustryServices from "../components/IndustryServices";
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

const ApplicationSolutions = () => {
  const faqItems = [
    {
      question: "What are application solutions?",
      answer:
        "Application solutions are systems that utilize software to solve business problems and increase business through Web, Mobile, and Cloud-based solutions.",
    },
    {
      question: "Why should businesses invest in custom application solutions?",
      answer:
        "Custom solutions allow the businesses to be more specific, and optimized, and offer more functionalities than the general ones, thus giving an enterprise a competitive advantage.",
    },
    {
      question: "Does Capyngen offer enterprise application solutions?",
      answer:
        "Absolutely. We develop applications with the scalability and reliability of enterprise-grade systems for intricate business processes.",
    },
    {
      question: "What technologies do you use for app development?",
      answer:
        "We mainly use technologies such as React, Node.js, Flutter, AWS, and Kubernetes for smooth running and scalability of applications of our clients.",
    },
    {
      question: "Do you develop mobile and web applications?",
      answer:
        "Certainly. We design and develop applications for mobile devices as well as for the web according to the needs of you.",
    },
    {
      question: "Can Capyngen build cloud-native apps?",
      answer:
        "Exactly. We are experts in providing cloud solutions that are not only scalable and flexible but also cost-effective.",
    },
    {
      question: "Do you modernize legacy applications?",
      answer:
        "A definite Yes. In fact, we take the old software which is no longer useful and upgrade it to new standards of business and technology application.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with different industries such as the medical, financial, commercial, educational, entertainment, software, and telecommunication sectors.",
    },
    {
      question: "Are your applications secure and scalable?",
      answer:
        "Certainly. We strictly adhere to rigorous security standards and also build every product to be scalable in the long run.",
    },
    {
      question: "Do you offer SaaS application development?",
      answer:
        "Yes. We create cloud-hosted SaaS applications that help businesses deliver recurring services.",
    },
    {
      question: "Can your applications integrate with existing systems?",
      answer:
        "Yes. We design APIs for easy synchronization of your application with other platforms and software.",
    },
    {
      question: "How long does it take to build an application?",
      answer:
        "The timelines depend on the complexity of the project, but generally, the duration is between 4-10 weeks.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes. We give full support in the form of maintenance and updates after you have put the application into operation.",
    },
    {
      question: "Are your solutions suitable for startups and enterprises?",
      answer:
        "Indeed. Capyngen can be the perfect partner for businesses of any size, from early-stage ventures to multinational companies, in delivering the most efficient application solutions.",
    },
    {
      question: "How can I get started with Capyngen?",
      answer:
        "Take the time to set up a no-cost consultation with us. Our team would be thrilled to work with you to devise feasible application solutions for your enterprise.",
    },
  ];
  const servicesData = [
    {
      image: assets.bg1,
      title: "Web Application Development",
      desc: "We create slick, secure, and purpose-built web applications that are tailored to meet your business goals. We work as a digital marketing agency to help organizations rank better on the search engine pages, increase their user base, and thus, enhance their business.",
    },
    {
      image: assets.bg1,
      title: "Mobile Application Development",
      desc: "We build top-performing native and cross-mobile apps for iOS and Android. Every app is designed to work without any issues, with contemporary styling, and also with great user engagement.",
    },
    {
      image: assets.bg1,
      title: "Enterprise Application Solutions",
      desc: "We provide stable and extensible business suites to smooth communication in bureaucratic giant business enterprises. These computer-based co-operative enhancements increase productivity, employee interaction, and are an excellent discipline for long-term development.",
    },
    {
      image: assets.bg1,
      title: "Cloud-Native Applications",
      desc: "Our cloud-native apps offer freedom of feature usage, simple updates, and quick overall performance. Given that they are based on top cloud platforms, they enable companies to grow quickly and efficiently.",
    },
    {
      image: assets.bg1,
      title: "Custom Software Solutions",
      desc: "We compose software precisely for your specifically intricate corporate products and services. If you think about that as an innovation, security, and foresight company at the same time, our custom software guarantees customer loyalty for a long time.",
    },
    {
      image: assets.bg1,
      title: "E-Commerce Applications",
      desc: "We develop fully functional, engaging digital shops and bazaars that generate growth and quick turnover. In every step of the way of the user's journey, the main aim is the smooth functioning of the checkout process.",
    },
    {
      image: assets.bg1,
      title: "SaaS (Software as a Service) Applications",
      desc: "We produce SaaS applications that are easily scalable and secure with subscription models that are user-friendly and very flexible. The cloud-based products are not only easy to handle but also budget-friendly and best suited for fast development.",
    },
    {
      image: assets.bg1,
      title: "Cross-Platform Application Development",
      desc: "We create software that one can install on any device, whether it is a smartphone, tablet, laptop, or desktop computer, allowing the user to experience the same user flow and functionality. In this way, the user will have the same experience independently from the platform, and there is not even a need to develop an additional app.",
    },
    {
      image: assets.bg1,
      title: "API Development & Integration",
      desc: "Good API developers present a true connector for your chosen software and potential associated applications so that data is shared easily, faster communication networks are created, and business operations are improved. This partly allows you to access your data in a much easier way and also exchange information among various other different company operations.",
    },
    {
      image: assets.bg1,
      title: "Legacy Application Modernization",
      desc: "We integrate new technology to legacy software so as to upgrade the software to deliver in terms of speed, safety, and user-friendliness. Consequently, this will quite possibly maintain and solve the issue of usability/harmonizing with today’s standards thought to be based on developments in the tech.",
    },
    {
      image: assets.bg1,
      title: "CRM & ERP Application Solutions",
      desc: "We develop CRM and ERP software systems that consist of integrated business logic and data related to customer interactions. These tools empower strategy formulation by refining the decision-making process, enhancing operational efficiency, and adapting to the trend of building stronger client-company connections.",
    },
    {
      image: assets.bg1,
      title: "AI-Powered Applications",
      desc: "We create artificially intelligent application solutions that embrace the usage of AI (Artificial Intelligence) and ML (Machine Learning). Such software helps companies to save time, give predictive analysis, and also that way be abreast with the competition.",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Get to know your business goals, challenges, and user expectations more thoroughly. We dissect every detail to visualize the right path that signals the application to meet your goals. This stage sets the base for a triumphant and scalable solution.",
    },
    {
      step: "Step 02",
      title: "UI/UX Design",
      description:
        "Design of engaging, intuitive, aesthetically pleasing, and easy-to-use interfaces that draw your users. The main focus is on easy navigation, current styles, and the accessibility of any user. Besides beautifying the app, great design contributes to satisfying and retaining users.",
    },
    {
      step: "Step 03",
      title: "Development & Integration",
      description:
        "Secure and high-performing applications are developed which are tailored to your business needs. Our development process guarantees trouble-free integration with third-party tools, databases, and APIs. We put the major focus on clean code, scalability, and long-term stability.",
    },
    {
      step: "Step 04",
      title: "Testing & QA",
      description:
        "Every aspect of the app is tested to achieve perfection in function and high performance. Besides security, compatibility, and speed, we also test the application's usability to deliver a stable one. The QA team confirms that every last detail of the product meets the pinnacle of quality standards in the industry.",
    },
    {
      step: "Step 05",
      title: "Deployment & Support",
      description:
        "We facilitate the smooth and easy installation of your app on all platforms and different environments. The continued help supported by the technical team is for solving problems and keeping everything running smoothly. In addition to the easy deployment, you also have the access to support at any time for the period of your assistance.",
    },
    {
      step: "Step 06",
      title: "Continuous Optimization",
      description:
        "Not even a second after deployment do we stop from keeping the app on its point of excellence. Jointly with user feedback, app performance analysis, and the use of new technologies, we boost your scalability and UX. This guarantees your app to always be the market competitor at its fastest and most future-ready state.",
    },
  ];
  const slidesData = [
    {
      image: assets.creativeAgencyFAQ,
      heading: "Custom Application Solutions to Power Your Business Growth",
      description: (
        <>
          <p>
            We create and develop scalable applications that are specifically
            designed to meet your unique business requirements, whether it be
            through a web or mobile platform.
          </p>
          <p className="mt-3">
            Capyngen is an application solution company that leads the market
            globally, offering businesses timely and impactful digital products
            to drive their transformation journey. We are proficient in
            enterprise application solutions, custom application solutions,
            cloud application solutions, and mobile and web application
            solutions for contemporary business advancement.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.creativeAgencyFAQ,
      heading: "Transform Your Business with Custom Applications",
      description: (
        <>
          <p>
            Become the creator of the future with safe, stable, and scalable
            applications powered by Capyngen. We are not only helping businesses
            grow but doing it smarter and quicker out of the box.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.creativeAgencyFAQ,
      heading: "Top-Rated Application Solutions Company",
      description: (
        <>
          <p>
            Capyngen is known as one of the best app solutions providers
            companies that produce software that is ahead of the time for
            startups, enterprises, and global brands. Our team utilizes current
            technologies and follows successful strategies to develop safe,
            scalable, and user-friendly applications. No matter if you are
            looking for tailor-made application solutions for enterprises or
            high-end cloud-native applications, the experts of Capyngen would be
            glad to turn your ideas into reality.
          </p>
        </>
      ),
      price: "",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Web Application Development",
      description:
        "Develop custom and attractive web applications that are designed to increase your online visibility and customer engagement. Boost your productivity, scalability, and ensure smooth digital interactions.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Mobile Application Development",
      description:
        "Design speedy and user-friendly mobile applications that help you interact with customers while they are on the move. We are with you every step of the way the project becomes a functional, stylish, and user-friendly app.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "Enterprise Application Solutions",
      description:
        "Build dependable software solutions that adjust to intricate business scenarios. Make company processes efficient and boost the use of employees with tools customized for your enterprise and its needs.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Cloud-Native Applications",
      description:
        "Exploit the cloud and make your company more efficient and adaptable. Install applications that are scalable, safe, and cheap, and that develop with your.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Custom Software Solutions",
      description:
        "Enjoy software designed exclusively for your business to solve your particular problems. We are the facelift of a dead concept in software, actually delivering innovative and reliable solutions.",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "E-Commerce Applications",
      description:
        "Create complete e-commerce sites that attract buyers and foster their loyalty. We build smooth and easy online shopping, from product browsing to checkout processes.",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
    },
    {
      title: "SaaS Applications",
      description:
        "Provide SaaS platforms that are scalable and safe and that can be adjusted to your budget. Make subscription-based software accessible, and keep it continuously up and running at high performance.",
      image: assets.customAiSolution,
      cardBg: "bg-indigo-100",
    },
    {
      title: "Cross-Platform Development",
      description:
        "Get the use of applications to the maximum and enjoy the same high-standard performance on every device. We develop programs that are compatible with iOS, Android, and web-based platforms.",
      image: assets.careersAbout1,
      cardBg: "bg-teal-100",
    },
    {
      title: "API Development & Integration",
      description:
        "Link several systems without complications by using powerful and secure API integrations. Make interactions among platforms simple and quick so that you can have better workflows.",
      image: assets.appDevelopment,
      cardBg: "bg-orange-100",
    },
    {
      title: "Legacy Modernization",
      description:
        "Overhaul aging software into modern, effective solutions. Make the software faster, more secure, more user-friendly, and keep all the old stuff in place.",
      image: assets.customAiSolution,
      cardBg: "bg-lime-100",
    },
    {
      title: "CRM & ERP Solutions",
      description:
        "Transform your day to day work processes with high tech CRM and ERP systems. Empower your company with CRM and ERP technologies that will automate workflows, improve data management, and multiply the productivity of your team.",
      image: assets.careersAbout1,
      cardBg: "bg-amber-100",
    },
    {
      title: "AI-Powered Applications",
      description:
        "Install intelligent AI-enabled applications that can learn and improve themselves. Support greater decision-making with the help of AI that will simplify processes and enrich customer experience.",
      image: assets.appDevelopment,
      cardBg: "bg-cyan-100",
    },
  ];
  const cardsSectionData1 = [
    {
      title:
        "Skills in creating tailored, cloud, mobile, and web app solutions.",
      description: "",
      icon: <FaPuzzlePiece className="text-4xl text-white" />,
    },
    {
      title:
        "Complete development services covering every stage from concept to implementation.",
      description: "",
      icon: <FaLaptopCode className="text-4xl text-white" />,
    },
    {
      title: "Highly skilled development and design team.",
      description: "",
      icon: <FaAppStore className="text-4xl text-white" />,
    },
    {
      title:
        "Ability to operate worldwide with security at the level of large enterprises.",
      description: "",
      icon: <FaMoneyBillWave className="text-4xl text-white" />,
    },
    {
      title:
        "Concentration on invention, expandability, and user-friendliness.",
      description: "",
      icon: <FaBuilding className="text-4xl text-white" />,
    },
    {
      title:
        "Used by corporates all over the globe to solve application problems.",
      description: "",
      icon: <FaIndustry className="text-4xl text-white" />,
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <CreativeAgencyFAQ
          slides={slidesData}
          slideDuration={4000}
          headingClass="text-4xl md:text-5xl font-extrabold mb-6"
          descClass="text-lg leading-relaxed mb-8 text-gray-300"
          buttonGradient="from-blue-500 to-purple-600"
          priceLabel=""
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <IndustryServices
          heading="Application Solutions We Offer"
          subheading="We offer a comprehensive suite of business application solutions centered around varied industry requirements:"
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={servicesData}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Book Your Free Consultation Today"
          description={[
            "Have a chat with one of our knowledgeable staff and identify the finest application development solutions tailor-made for your firm. Our next powerful venture is waiting to be built.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Benefits of Our Application Solutions"
          description={[
            `Custom application-building services from Capyngen result in business wins that can be quantitatively measured:`,
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "Increased Efficiency and Productivity",
                    text: "These effects are a result of the simplification of the workflow and the automation of the tasks.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Boost in Customer Engagement",
                    text: "By creating user-friendly apps, organizations improve relationships with customers.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Safe, Scalable, and Future-Oriented Apps",
                    text: "Such apps are designed with latest tech to be compatible with your business.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Shorter Route to Sales",
                    text: "This is accomplished by the rapid development of your business keeping it ahead in the market with the competitors.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Integration Without Any Hassle",
                    text: "Users can easily access their current systems or even get the tools from the third party.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Solutions that are Affordable",
                    text: "The strategy of optimized development can help companies save on operational costs.",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    <strong className={`${color} drop-shadow-md`}>
                      {title}
                    </strong>
                    {text}
                  </li>
                ))}
              </ul>
              <p>
                The business best application solutions of Capyngen are
                formulated to create a powerful impression that lasts.
              </p>
            </>,
          ]}
          image={assets.whyChooseUs}
          isHidden={true}
          background={assets.patternBg1}
        />
        <HowWeWork
          heading="Our Application Development Process"
          desc="We adhere to a transparent and well-organized process from start to finish to guarantee that every application meets the highest standards:"
          steps={steps}
        />
        <CardsSectionImage
          heading="Application Solutions Services We Offer"
          subheading="Capyngen delivers application development services from start to finish which are the solutions that enable the businesses to widen their horizons and take the next step further:"
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
          title="Start Your Digital Transformation Journey"
          description={[
            "Capyngen builds tailored app solutions for the corporate world that are fun to use and make the company grow faster, up to the global level.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSection
          heading="Why Choose Capyngen for Application Solutions"
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
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default ApplicationSolutions;
