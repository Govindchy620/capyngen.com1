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
          "Every institution needs to compete highly to stay relevant and competitive in a constantly evolving environment. This is why Capyngen LMS and eLearning solutions supported by IT solutions for education industry can help you to outdo your competition and revitalise your institution. Free consultation and become innovative now!",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title=""
        description={[
          <>
            <p>
              Capyngen is an IT solutions firm that happens to be one of the key
              contributors to the digital transformation of the educational
              system across the world, covering schools, colleges, and
              universities. In our amazing development of our own Learning
              Management Systems (LMS), cloud-based systems to enable remote
              learning, and online education platforms that guarantee the active
              involvement of students as well as enable management, we have
              gained the world wide recognition in India and in a number of
              other countries in the world. Our solutions have gained confidence
              as the best IT solutions for education industry, as well as the
              best IT services in education sector in India. Our products
              include eLearning app development and a virtual classroom; these
              are quite useful in learning innovation, expansion, and
              modernisation, and this is the reason that earned us this fame. We
              are also an IT solution provider for education industry in Gurgaon
              and offer scalable and secure digital ecosystems.
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
                  text: "Full digitalisation of the education system at school, college and university levels through IT solution for education sector in India.",
                },
                {
                  text: "Learning management systems can be adopted and implemented with ease.",
                },
                {
                  text: " The progress of the students in learning with numbers and facts is fuelled by the IT solutions for education industry.",
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
        subheading="Educational institutions have several educational-operational and technology issues that they must address. These are the issues that involve:"
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
        subheading="Capyngen offers full IT solutions to upgrade educational institutions and assists the top IT services in education sector in India:"
        services={servicesData}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Book Your Personalised Demo"
        description={[
          "Get first-hand exposure to Capyngen IT's futuristic education solutions. Schedule a live LMS demonstration and discover how we will transform the learning ecosystem of IT solutions for education industry.",
        ]}
        buttonText="Book Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <TypesWeDevelop
        heading="Benefits of Choosing Capyngen"
        subheading="With Capyngen, you integrate an additional layer of success to your education system that can be seen through the following advantages:"
        buttonText="Let's Contact"
        image={assets.education5}
        types={typesData}
      />
      <CardsSectionImage
        heading="Why Capyngen?"
        subheading="Capyngen can be referred to as a trusted education IT consulting partner, and hence:"
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
        description={["Request a customised demo or consultation."]}
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
