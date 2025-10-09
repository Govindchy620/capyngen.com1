import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import SeoToolsSection from "../components/SeoToolsSection";
import SeoStatsSection from "../components/SeoStatsSection";
import Timeline from "../components/Timeline";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import StartupAgency from "../components/StartupAgency";
import SeoAgency from "../components/SeoAgency";
import {
  FaBuilding,
  FaTasks,
  FaStore,
  FaPuzzlePiece,
  FaMoneyBillWave,
  FaCogs,
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
} from "react-icons/fa";
import {
  FaUserTie,
  FaHome,
  FaGavel,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import IndustryServices from "../components/IndustryServices";
import TypesWeDevelop from "../components/TypesWeDevelop";
import { assets } from "../assets/assets";
import Banner6 from "../components/Banner6";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";

const Education = () => {
  const faqItems = [
    {
      question: "What is a Learning Management System (LMS)?",
      answer:
        "A learning management system is a digital platform that handles the management, provision, and tracking of educational content, assessments, and learning activities online.",
    },
    {
      question: "Can you develop a custom LMS for our institution?",
      answer:
        "Definitely, Capyngen is a company that produces custom e-learning software solutions that are aimed at matching the requirements of your institution.",
    },
    {
      question: "Do you offer mobile apps along with LMS?",
      answer:
        "Yes, we develop educational mobile applications that are compatible with LMS, and these are for students, teachers, and administrators.",
    },
    {
      question: "Are your education solutions cloud-based?",
      answer:
        "Yes, we provide cloud-based services for business intelligence and analytics that are reliable for remote learning without any hitches.",
    },
    {
      question: "Is your LMS suitable for universities and large institutions?",
      answer:
        "Indeed. As we specialize in LMS development, we are capable of catering to all schools, ranging from small institutions to universities.",
    },
    {
      question: "Can you integrate our existing ERP with your LMS?",
      answer:
        "Of course. Our school ERP solutions work smoothly with both new and existing LMS platforms.",
    },
    {
      question: "Do you offer data analytics with the LMS?",
      answer:
        "Yes, we offer tailored data analytics services with the goal of tracking and enhancing learning outcomes.",
    },
    {
      question:
        "Is the LMS secure and compliant with data privacy regulations?",
      answer:
        "Yes, our software is compliant with the General Data Protection Regulation, Family Educational Rights and Privacy Act, and other educational data privacy standards.",
    },
    {
      question: "Do you support virtual classrooms?",
      answer:
        "Definitely. We offer virtual classroom software that allows the students to take part in activities and communicate with each other in real-time.",
    },
    {
      question: "Can teachers upload and manage content easily?",
      answer:
        "Yes, our LMS provides user-friendly interfaces for uploading and managing course materials with minimal effort.",
    },
    {
      question: "Do you provide training for using the LMS?",
      answer:
        "Yes, Capyngen is available for faculty and administrative onboarding and training.",
    },
    {
      question: "Is your LMS mobile responsive?",
      answer:
        "Yes, our LMS as well as virtual classrooms are designed to be compatible with desktops, tablets, and smartphones without any issues.",
    },
    {
      question: "Can students access courses offline?",
      answer:
        "Yes, with the help of our mobile applications, we enable offline access to selected course content.",
    },
    {
      question: "How long does it take to deploy the LMS?",
      answer:
        "The deployment period is contingent on the level of customization; however, standard solutions can be operational within 4–8 weeks.",
    },
    {
      question: "Do you offer post-deployment support?",
      answer:
        "Yes, we allow technical assistance, maintenance, and updates on a daily basis even after the deployment period.",
    },
  ];
  const servicesData = [
    {
      image: assets.bg1,
      title: "Learning Management System (LMS) Development",
      desc: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Custom LMS platforms for K-12, and higher education institutions.
            </li>
            <li>
              Grading, assessments, attendance, and virtual classroom features
              seamlessly integrated.
            </li>
            <li>Student and faculty apps with responsive design.</li>
          </ul>
        </>
      ),
    },
    {
      image: assets.bg1,
      title: "Cloud Solutions for Education",
      desc: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Safe and secure cloud storage for educational records and learning
              materials.
            </li>
            <li>
              Online education platform development that adjusts to the
              institution’s size.
            </li>
            <li>Simple ERP and third-party tool compatibility.</li>
          </ul>
        </>
      ),
    },
    {
      image: assets.bg1,
      title: "Data Analytics & Insights",
      desc: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Visualize student performance and engagement data, updated
              instantly.
            </li>
            <li>
              Use of advanced statistical models and algorithms to predict
              learning outcomes.
            </li>
            <li>
              Provision of access and control through the setting up of roles
              and permissions in dashboards and users of the education field
              manage them.
            </li>
          </ul>
        </>
      ),
    },
  ];
  const typesData = [
    {
      icon: <FaBuilding />,
      title: "Upgraded and engaging learning experiences",
      desc: "",
    },
    {
      icon: <FaUserFriends />,
      title: "Real-time data and knowledge for making choices",
      desc: "",
    },
    {
      icon: <FaGavel />,
      title: "More efficient administration and less paperwork",
      desc: "",
    },
    {
      icon: <FaHome />,
      title: "Cloud-based, secure, and scalable IT infrastructure",
      desc: "",
    },
    {
      icon: <FaUserTie />,
      title:
        "The implementation of high-level security for the protection of sensitive data",
      desc: "",
    },
    {
      icon: <FaGlobe />,
      title:
        "On top of that, there is the easy integration that comes with the use of educational ERP software.",
      desc: "",
    },
  ];
  const slidesData = [
    {
      id: 1,
      title: "Creative and Technical IT Solutions for the Educational Sector",
      subtitle:
        "Offering educational organizations digital tools, cloud services and data-driven learning management System that are futuristic and versatile.",
      image: assets.applicationSolution,
      ctaText: "Explore Projects",
      ctaLink: "#projects",
    },
    {
      id: 2,
      title: "Seamless Performance",
      subtitle: "Mobile-first, future-ready solutions.",
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920",
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
  ];
  const cardsSectionData2 = [
    {
      title:
        "Old IT infrastructures and software that have been around forever",
      description: "",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title:
        "The tricky process of securely managing the huge volumes of student data that educational institutions have",
      description: "",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title:
        "Remote learning technologies that are hard to access or not accessible at all",
      description: "",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title:
        "Low student involvement and retention in digital learning environments",
      description: "",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title:
        "Complicated administration workflows and reliance on manual processes",
      description: "",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Absence of integrated analytics and reporting tools",
      description: "",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Deep knowledge of the EdTech area and LMS development",
      description: "",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title:
        "Complete support — from the development of the strategy to the actual implementation",
      description: "",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Open, adaptable, and forward-looking solutions",
      description: "",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title:
        "A complete range of IT consulting services for educational institutions",
      description: "",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title:
        "The track record of success with schools, colleges, and EdTech startups",
      description: "",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title:
        "Experience around the world with education strategies targeted at specific areas",
      description: "",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
    },
  ];

  return (
    <div className="">
      <Banner6
        slides={slidesData}
        autoplay={true}
        autoplaySpeed={4000}
        showDots={true}
        textColor="text-white"
        arrowColor="text-white"
        bgHover="hover:bg-white/20"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Start Your Digital Transformation"
        description={[
          "Dim your competition and revitalize your institution with the help of Capyngen's LMS and eLearning solutions. Have a free consultation and discover innovation now!",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title=""
        description={[
          <>
            <p>
              Capyngen is an Education IT solutions company that is one of the
              main causes of the digital transformation of the educational
              system all over the globe, which includes schools, colleges, and
              universities. Through our fantastic work in the construction of
              custom Learning Management Systems (LMS), cloud-based platforms
              for remote learning, and online education platforms that assure
              students' active participation and facilitate administration, we
              have earned wide recognition across India and several other
              countries in the world.
            </p>
            <p className="my-5">
              eLearning app development and a virtual classroom are two of our
              products that are very helpful in learning innovation, expansion,
              and modernization, and these are the reasons that brought us this
              fame.
            </p>
            <h3 className="text-2xl font-semibold">Highlights:</h3>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
              {[
                {
                  title: "",
                  text: "Complete digitalization of education system at the school, college and university level",
                  color: "text-blue-500",
                },
                {
                  title: "",
                  text: "Frictionless adoption and implementation of Learning Management Systems",
                  color: "text-blue-500",
                },
                {
                  title: "",
                  text: "Seeing students' advancement through learning with numbers and facts driven by data",
                  color: "text-blue-500",
                },
              ].map(({ title, text, color }, idx) => (
                <li
                  key={idx}
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  {text}
                </li>
              ))}
            </ul>
          </>,
        ]}
        image={assets.whyChooseUs}
        background={assets.patternBg1}
        isHidden="hidden"
      />
      <CardsSection
        heading="Education Sector Challenges"
        subheading="There are multiple educational-operational and technology challenges that educational institutions need to deal with. These challenges include a range of issues such as:"
        services={cardsSectionData2}
        headColor="text-white"
        cardBg="bg-gray-700"
        sectionBg="bg-gray-900"
        hoverBg="hover:bg-blue-800 hover:scale-98"
        textColor="text-white"
        hoverTextColor=""
      />
      <IndustryServices
        heading="Transforming Education with IT Innovation"
        subheading="Capyngen provides complete IT solutions to revamp educational institutions:"
        services={servicesData}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Book Your Personalized Demo"
        description={[
          "Gain first-hand experience of futuristic education IT solutions with Capyngen. Arrange a live LMS demo, and find out how we can revolutionize your learning ecosystem.",
        ]}
        buttonText="Book Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <TypesWeDevelop
        heading="Benefits of Choosing Capyngen"
        subheading="By partnering with Capyngen, you bring a whole new dimension to your education ecosystem that is visible through the following benefits:"
        buttonText="Let's Contact"
        image="https://via.placeholder.com/300x550.png" // replace with actual phone image
        types={typesData}
      />
      <CardsSectionImage
        heading="Why Capyngen?"
        subheading="Capyngen is known as a reliable partner for education IT consulting and therefore:"
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
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Transform Your Institution with Capyngen IT Solutions"
        description={["Get a personalized demo or consultation today."]}
        textSize="text-2xl"
        buttonText="Work With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default Education;
