import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import IndustryServices from "../components/IndustryServices";
import TypesWeDevelop from "../components/TypesWeDevelop";
import { assets } from "../assets/assets";
import Banner6 from "../components/Banner6";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import FAQSection2 from "../components/FAQSection2";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import {
  FaBuilding,
  FaUserFriends,
  FaGavel,
  FaHome,
  FaUserTie,
  FaGlobe,
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/education#webpage",
  url: "https://www.capyngen.com/industries/education",
  name: "Capyngen builds powerful Learning Management Systems for modern education. From eLearning apps to virtual classroom software, we deliver smart digital solutions.",
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
    url: "https://www.capyngen.com/assets/educationBanner1-PDzu7VTt.jpg",
    width: 1200,
    height: 800,
    caption: "Education Industry Solutions by Capyngen",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Industries",
        item: "https://www.capyngen.com/industries",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Education",
        item: "https://www.capyngen.com/industries/education",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/industries/education#service",
  name: "Education IT Solutions",
  serviceType:
    "Learning Management System, eLearning Platform, Virtual Classroom Solutions",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Capyngen builds powerful Learning Management Systems for modern education. From eLearning apps to virtual classroom software, we deliver smart digital solutions.:contentReference[oaicite:0]{index=0}",
  url: "https://www.capyngen.com/industries/education",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/educationBanner1-PDzu7VTt.jpg",
    caption: "Education IT Solutions | LMS | eLearning | Virtual Classrooms",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/industries/education#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Learning Management System (LMS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Learning Management System is a digital platform that handles the management, delivery, and tracking of educational content, assessments, and learning activities online.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop a custom LMS for our institution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen develops custom e-learning software solutions tailored to meet the specific needs of your institution.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer mobile apps along with LMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop educational mobile applications that are integrated with the LMS, suitable for students, teachers, and administrators.",
      },
    },
    {
      "@type": "Question",
      name: "Are your education solutions cloud-based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer cloud-based services for business intelligence and analytics to enable smooth and reliable remote learning.",
      },
    },
    {
      "@type": "Question",
      name: "Is your LMS suitable for universities and large institutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Capyngen specializes in scalable LMS development suitable for institutions of all sizes, from small schools to universities.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate our existing ERP with your LMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our school ERP solutions integrate seamlessly with both new and existing LMS platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer data analytics with the LMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides data analytics services that help track and enhance learning outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "Is the LMS secure and compliant with data privacy regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our software complies with GDPR, FERPA, and other educational data privacy regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support virtual classrooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer virtual classroom software that allows students and teachers to interact in real time.",
      },
    },
    {
      "@type": "Question",
      name: "Can teachers upload and manage content easily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our LMS includes a user-friendly interface for uploading and managing course materials effortlessly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide training for using the LMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides onboarding and training for faculty and administrators to ensure smooth adoption.",
      },
    },
    {
      "@type": "Question",
      name: "Is your LMS mobile responsive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our LMS and virtual classrooms are fully responsive and optimized for desktop, tablet, and mobile devices.",
      },
    },
    {
      "@type": "Question",
      name: "Can students access courses offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, through our mobile applications, students can access selected course content offline.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to deploy the LMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deployment depends on customization, but standard LMS solutions can go live within 4–8 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-deployment support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides ongoing technical support, maintenance, and updates after deployment.",
      },
    },
  ],
};

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
      image: assets.education2,
      title: "Learning Management System (LMS) Development",
      desc: (
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
      ),
    },
    {
      image: assets.education3,
      title: "Cloud Solutions for Education",
      desc: (
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
      ),
    },
    {
      image: assets.education4,
      title: "Data Analytics & Insights",
      desc: (
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
            Provision of access and control through the setting up of roles and
            permissions in dashboards and users of the education field manage
            them.
          </li>
        </ul>
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
      title: "Transform Learning with Smart Education Solutions",
      subtitle:
        "Motivate students and teachers with e-learning resources that open the doors to development and engagement.",
      image: assets.educationBanner1,
      ctaText: "Get Started",
      ctaLink: "/contact-us",
    },
    {
      id: 2,
      title: "Building the Future of EdTech",
      subtitle:
        "The school can be more meaningful with our knowledge software and e-learning platforms.",
      image: assets.educationBanner2,
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    {
      id: 3,
      title: "Reimagine Classrooms with Digital technology",
      subtitle:
        "Implement AI and analytics in education to speed up growth and efficiency.",
      image: assets.educationBanner3,
      ctaText: "Explore Now",
      ctaLink: "/contact-us",
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
      image: assets.education6,
      cardBg: "bg-blue-100",
    },
    {
      title:
        "Complete support — from the development of the strategy to the actual implementation",
      description: "",
      image: assets.education7,
      cardBg: "bg-green-100",
    },
    {
      title: "Open, adaptable, and forward-looking solutions",
      description: "",
      image: assets.education8,
      cardBg: "bg-yellow-100",
    },
    {
      title:
        "A complete range of IT consulting services for educational institutions",
      description: "",
      image: assets.education9,
      cardBg: "bg-pink-100",
    },
    {
      title:
        "The track record of success with schools, colleges, and EdTech startups",
      description: "",
      image: assets.education10,
      cardBg: "bg-purple-100",
    },
    {
      title:
        "Experience around the world with education strategies targeted at specific areas",
      description: "",
      image: assets.education11,
      cardBg: "bg-red-100",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>
          Learning Management System | eLearning & Virtual Classroom Solutions
        </title>
        <meta
          name="description"
          content="Capyngen builds powerful Learning Management Systems for modern education. From eLearning apps to virtual classroom software, we deliver smart digital solutions."
        />
        <meta
          name="keywords"
          content="Learning Management System | eLearning & Virtual Classroom Solutions"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Helmet>
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
              Capyngen is an Education{" "}
              <Link to={"/"}>IT solutions company</Link> that is one of the main
              causes of the digital transformation of the educational system all
              over the globe, which includes schools, colleges, and
              universities. Through our fantastic work in the construction of
              custom Learning Management Systems (LMS), cloud-based platforms
              for remote learning, and online education platforms that assure
              students' active participation and facilitate administration, we
              have earned wide recognition across India and several other
              countries in the world.
            </p>
            <p className="my-5">
              eLearning <Link to={"/app-development"}>app development</Link> and
              a virtual classroom are two of our products that are very helpful
              in learning innovation, expansion, and modernization, and these
              are the reasons that brought us this fame.
            </p>
            <h3 className="text-2xl font-semibold">Highlights:</h3>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
              {[
                {
                  text: "Complete digitalization of education system at the school, college and university level",
                },
                {
                  text: "Frictionless adoption and implementation of Learning Management Systems",
                },
                {
                  text: "Seeing students' advancement through learning with numbers and facts driven by data",
                },
              ].map(({ text }, idx) => (
                <li
                  key={idx}
                  className="hover:scale-105 transition-transform duration-300 cursor-default relative pl-4"
                >
                  {text}
                </li>
              ))}
            </ul>
          </>,
        ]}
        image={assets.education1}
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
          <>
            Gain first-hand experience of futuristic education IT solutions with
            Capyngen. Arrange a live LMS demo, and find out how we can
            revolutionize your{" "}
            <a href="https://www.google.com/">learning ecosystem</a>.
          </>,
        ]}
        buttonText="Book Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <TypesWeDevelop
        heading="Benefits of Choosing Capyngen"
        subheading="By partnering with Capyngen, you bring a whole new dimension to your education ecosystem that is visible through the following benefits:"
        buttonText="Let's Contact"
        image={assets.education5}
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
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default Education;
