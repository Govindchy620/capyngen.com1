//Education Page
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
        "A learning management system is an online learning industry IT solution for education industry based digital application that manages, delivers, and monitors educational material, exams, and educational activities.",
    },
    {
      question:
        "Would you be able to create a personal LMS on our institution?",
      answer:
        "Capyngen is certainly a company that manufactures bespoke e-learning software that is oriented towards fulfilling the needs of your organization and known to be the top IT services in education sector in India.",
    },
    {
      question: "Do you provide mobile applications and LMS?",
      answer:
        "Yes, we make educational mobile applications, which are compatible with LMS, and these are to students, teachers, and administrators via our IT solutions for education sector.",
    },
    {
      question: "Is your education solution cloud-based?",
      answer:
        "Yes, we offer cloud-based services of business intelligence and analytics that could be trusted to deliver remote learning with no hitch and which could be trusted to be the best IT solutions for education industry.",
    },
    {
      question:
        "Is your LMS appropriate for universities and large institutions?",
      answer:
        "Indeed. Since we deal with the LMS development, we can serve every school, both small and large, in the education sector in India.",
    },
    {
      question: "Is it possible to combine our current ERP with your LMS?",
      answer:
        "Of course. The ERP solutions of our school are compatible with both the new and the existing LMS platforms, using IT solution for education sector in India.",
    },
    {
      question: "Does it provide data analytics on the LMS?",
      answer:
        "Yes, we are providing customised data analytics services, and the aim and objective is to monitor and improve the learning outcomes supported by IT solutions for education industry.",
    },
    {
      question:
        "Does the LMS comply with and adhere to the regulations of data privacy?",
      answer:
        "Our software indeed meets the requirements of the General Data Protection Regulation, the Family Educational Rights and Privacy Act and other regulations regarding educational data privacy.",
    },
    {
      question: "Are you a proponent of virtual classrooms?",
      answer:
        "Definitely. We provide a virtual classroom program that enables the students to participate in activities and interact with other students in real-time.",
    },
    {
      question: "Is it easy to upload and manage content?",
      answer:
        "Yes, our LMS has easy platforms for uploading and handling course material with minimal effort.",
    },
    {
      question: "Do you offer any training on using the LMS?",
      answer:
        "Yes, Capyngen has an option for faculty and administration onboarding and training with IT solutions for education sector.",
    },
    {
      question: "Does your LMS work with mobile?",
      answer:
        "Yes, our LMS and virtual classrooms should be compatible with desktops, tablets, and smartphones with no problems.",
    },
    {
      question: "Does it have courses accessible offline to students?",
      answer:
        "Yes, we allow offline access to the course content of choice with the assistance of our mobile applications.",
    },
    {
      question: "What is the time to roll out the LMS?",
      answer:
        "The time of deployment depends on the degree of customisation; although standard solutions can go online in 48-8 weeks.",
    },
    {
      question: "Do you provide post-deployment assistance?",
      answer:
        "Yes, we are permitting technical support, servicing, and an update daily, even beyond the deployment period.",
    },
  ];

  const servicesData = [
    {
      image: assets.education2,
      title: "Learning Management System (LMS) Development",
      desc: (
        <ul className="list-disc pl-5">
          <li>Custom LMS in K-12 and higher education institutions.</li>
          <li>
            There was a smooth integration of grading, assessment, attendance
            and virtual classroom.
          </li>
          <li>
            {" "}
            Responsive design in a student and faculty App that is developed
            using IT solutions for education industry.
          </li>
        </ul>
      ),
    },
    {
      image: assets.education3,
      title: "Cloud Solutions for Education",
      desc: (
        <ul className="list-disc pl-5">
          <li>
            Educational student records and learning materials are stored in a
            safe and secure cloud.
          </li>
          <li>
            The development of an online education platform that is responsive
            to the size of the institution.
          </li>
          <li>
            {" "}
            Third party tool compatibility with simple ERP was facilitated by IT
            solution for education sector in India.
          </li>
        </ul>
      ),
    },
    {
      image: assets.education4,
      title: "Data Analytics & Insights",
      desc: (
        <ul className="list-disc pl-5">
          <li>
            View the performance and engagement data of students in real-time.
          </li>
          <li>
            Predicting learning outcomes with advanced statistical models and
            algorithms.
          </li>
          <li>
            They are provided with access and control by setting up roles and
            permissions in dashboards for users in the education field.
          </li>
        </ul>
      ),
    },
  ];

  const typesData = [
    {
      icon: <FaBuilding />,
      title: "Improved and interactive learning.",
      desc: "",
    },
    {
      icon: <FaUserFriends />,
      title: "On-hand information and intelligence to make decisions.",
      desc: "",
    },
    {
      icon: <FaGavel />,
      title: "Better administration and decreased paperwork.",
      desc: "",
    },
    {
      icon: <FaHome />,
      title: "Secure, scalable and cloud-based IT infrastructure.",
      desc: "",
    },
    {
      icon: <FaUserTie />,
      title: "The security measures of sensitive data are at a higher level.",
      desc: "",
    },
    {
      icon: <FaGlobe />,
      title:
        "On top of that is the ease of integration that is associated with the use of educational ERP software and the best IT solutions for education industry.",
      desc: "",
    },
  ];

  const slidesData = [
    {
      id: 1,
      title: "Reimagine Classrooms with Digital technology",
      subtitle:
        "Accelerate education growth and efficiency by deploying IT solutions for education industry and the latest digital solutions.",
      image: assets.educationBanner1,
      ctaText: "Get Started",
      ctaLink: "/contact-us",
    },
    {
      id: 2,
      title: "Building the Future of EdTech",
      subtitle:
        "Our knowledge, software and e-learning platforms enabled by IT solutions for education industry and backed by IT solutions for education sector would make the school more meaningful.",
      image: assets.educationBanner2,
      ctaText: "Contact Us",
      ctaLink: "/contact-us",
    },
    {
      id: 3,
      title: "Transform Learning with Smart Education Solutions",
      subtitle:
        "Enhance students and teachers with e-learning materials that open the gate to development and involvement with the help of an advanced IT services provider education sector technologies. ",
      image: assets.educationBanner3,
      ctaText: "Explore Now",
      ctaLink: "/contact-us",
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Half-life of IT infrastructures and obsolete software.",
      description: "",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title:
        "The most challenging part is the safe handling of the massive amount of student data that the educational institutions possess.",
      description: "",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title:
        "Education technologies that are difficult to reach or even unreachable.",
      description: "",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title:
        "Reduced engagement and retention of students in the online space.",
      description: "",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Complex administration processes and manual processes.",
      description: "",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title:
        "Lack of inbuilt analytics and reporting software, which are present throughout the education sector in India, augmented the necessity of the best IT services provider for education sector in Gurgaon.",
      description: "",
      icon: <FaHeart className="text-4xl" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title:
        "Extensive experience in the field of EdTech and development of LMS.",
      description: "",
      image: assets.education6,
      cardBg: "bg-blue-100",
    },
    {
      title:
        "Full support - from the development of the strategy to the real implementation.",
      description: "",
      image: assets.education7,
      cardBg: "bg-green-100",
    },
    {
      title: "Open, flexible and proactive solutions.",
      description: "",
      image: assets.education8,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Full spectrum of IT consulting for schools.",
      description: "",
      image: assets.education9,
      cardBg: "bg-pink-100",
    },
    {
      title:
        "The history of performance with school, college, and EdTech startups.",
      description: "",
      image: assets.education10,
      cardBg: "bg-purple-100",
    },
    {
      title:
        "The experience of education strategies in the world is directed to particular regions that are driven by the best IT services in education sector in India.",
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
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (BANNER6 - RETAINED EXACTLY AS REQUESTED)                */}
      {/* ========================================================================= */}
      <Banner6
        slides={slidesData}
        autoplay={true}
        autoplaySpeed={4000}
        showDots={true}
        textColor="text-white"
        arrowColor="text-white"
        bgHover="hover:bg-white/20"
      />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / DIGITAL TRANSFORMATION (SPLIT LIGHT SECTION)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.education1}
                alt="Education Digital Transformation"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Digital Transformation in Education & eLearning
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> is a global IT solutions provider contributing to the digital transformation of educational ecosystems worldwide, including K-12 schools, higher education universities, and innovative EdTech ventures.
              </p>
              <p>
                From custom Learning Management Systems (LMS) and cloud-based virtual classrooms to comprehensive{" "}
                <Link to="/app-development" className="text-blue-600 hover:underline font-semibold">
                  eLearning app development
                </Link>
                , we design resilient software architectures that boost student engagement and streamline institutional administration.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Full digitalization of education systems at school, college, and university levels.",
                "Seamless Learning Management System adoption and effortless interoperability.",
                "Data-driven student progress tracking powered by advanced EdTech analytics.",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-none bg-blue-600 mt-2 shrink-0" />
                  <p className="text-slate-700 text-sm sm:text-base">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Education Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EDUCATION SECTOR CHALLENGES (DARK CARDS GRID)                         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Education Sector Challenges We Solve
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Addressing operational, administrative, and technological hurdles faced by contemporary educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-blue-400 text-3xl mb-5">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TRANSFORMING EDUCATION WITH IT INNOVATION (3 LIGHT CARDS)             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Transforming Education with IT Innovation
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Capyngen delivers comprehensive software solutions designed to upgrade educational institutions into digitally connected environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-md relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-48 mb-6 border border-slate-200 overflow-hidden rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-slate-600 text-sm leading-relaxed space-y-2">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY CAPYNGEN (6 DARK CARDS WITH IMAGES)                                */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Partner with Capyngen
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We stand as a trusted education IT consulting partner, delivering end-to-end strategy, agile development, and continuous support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-48 mb-6 overflow-hidden border border-slate-800 rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BENEFITS OF CHOOSING CAPYNGEN (SPLIT LIGHT SECTION)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[480px]">
              <img
                src={assets.education5}
                alt="Education Solutions Benefits"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits of Choosing Capyngen
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              With Capyngen, you integrate an additional layer of excellence into your academic institution through resilient digital infrastructure:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {typesData.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-slate-200 bg-slate-50 flex items-start gap-4 hover:border-blue-600 transition-colors duration-150"
                >
                  <div className="text-blue-600 text-2xl mt-1 shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-slate-900 text-sm sm:text-base leading-snug"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {benefit.title}
                    </h4>
                    {benefit.desc && (
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                        {benefit.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CALL TO ACTION BANNER                                                  */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Transform Your Institution with Capyngen IT Solutions
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Every institution must innovate to stay ahead in a rapidly changing educational landscape. Request a customized demo or strategy consultation with our EdTech specialists today.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#2563eb] font-bold py-4 px-10 rounded-none shadow-lg transition-colors duration-150 shadow-xl group text-base"
              >
                Work With Us
                <span className="text-white group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default Education;
