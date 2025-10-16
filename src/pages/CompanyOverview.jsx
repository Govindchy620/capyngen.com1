import React from "react";
import AboutSection from "../components/AboutSection";
import OurValues from "../components/OurValues";
import AtAGlance from "../components/AtAGlance";
import CustomerCountries from "../components/CustomerCountries";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import GetStarted from "../components/GetStarted";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const CompanyOverview = () => {
  const expertise = [
    {
      title: "Search Engine Optimization",
      desc: "Get your business on top of search results",
      img: assets.seo1,
    },
    {
      title: "Website Design & Development",
      desc: "Digitally accessible services that create results",
      img: assets.webdevBanner3,
    },
    {
      title: "Social Media Marketing",
      desc: "Engaged communities that grow your business",
      img: assets.smm9,
    },
    {
      title: "Pay Per Click",
      desc: "Utilize your advertising budget to the fullest potential",
      img: assets.ppc1,
    },
    {
      title: "Mobile App Development",
      desc: "Apps that users find appealing",
      img: assets.appDev2,
    },
    {
      title: "Corporate Branding",
      desc: "The company's face that gets noticed",
      img: assets.branding1,
    },
  ];
  const exploreLinks = [
    "Who we are - The team behind your achievements.",
    "Offerings - A range of digital solutions",
    "Articles - The latest trends and strategies in brief",
    "Vacant Posts - Become a part of our expanding team",
    "Reach out to us - Kick off your change here",
  ];

  return (
    <div>
      <Banner
        title="About Capyngen"
        overlayBg="bg-black/70"
        backgroundImage={assets.companyOverview3}
        description={
          <>
            <h2 className="pb-10 text-3xl md:text-5xl font-extrabold">
              Your Success Story Starts Here
            </h2>
            <p>
              At Capyngen, we don't merely sell digital marketing, we create
              digital experiences that have a practical impact on businesses and
              attract new clients.
            </p>
          </>
        }
      />
      <AboutSection />
      <section className="relative min-h-[70vh] py-20 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-blue-600/10 to-transparent"></div>

        {/* Floating glow elements (optional aesthetic accent) */}
        <div className="absolute -top-10 left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 sm:px-10 md:px-16 max-w-7xl">
          <div
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl 
          shadow-xl shadow-blue-500/10 p-8 sm:p-12 transition-transform"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Would You Like to Have a{" "}
              <span className="text-blue-400">Digital Makeover?</span>
            </h2>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
              The other people whom you have to compete with are already on the
              internet. So why not choose not simply to be present there but
              make a great success of your brand?
            </p>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Because in the digital epoch, playing the game well is not enough.
              <br className="hidden sm:block" /> You have to be{" "}
              <span className="text-blue-400 font-semibold">memorable.</span>
            </p>

            {/* Optional CTA Button */}
            <div className="mt-10">
              <button
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
              text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/30 
              transition-all duration-300 hover:scale-105"
              >
                Let’s Transform Together
              </button>
            </div>
          </div>
        </div>
      </section>
      <OurValues />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title=""
        description={[
          "Are you ready to feel the Capyngen difference? Get in touch with us and let's transform your digital marketing objectives into your most outstanding business accomplishments.",
        ]}
        textSize="text-2xl"
        buttonText="Get in Touch"
        backgroundVideo={assets.backgroundVideo}
      />{" "}
      <section className="bg-black text-white relative overflow-hidden">
        {/* gradient bg layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-900/20 to-black"></div>

        <div className="relative z-10 max-w-[90vw] mx-auto px-6 sm:px-10 md:px-16 py-20 space-y-16">
          {/* What Sets Us Apart */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              What Sets Us Apart
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              In the digital marketing world that is flooded by agencies
              promising the sky, let me tell you what is actually the difference
              of Capyngen from the rest:
              <span className="text-blue-400 font-semibold">
                {" "}
                We are the ones who make the impossible a reality.
              </span>
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mt-6">
              At Capyngen, we have become very good at the "conversion" of your
              marketing budgets into "profit" machines. Our "secret weapon"? A
              very targeted approach that is effective at raising the volume of
              quality leads without exhausting your budget.
            </p>
          </div>

          {/* Advantage Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-blue-400">
              See the Capyngen advantage:
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              We do not support standard solutions based on copy-paste. While
              competitors aim at solutions that fit the most businesses, we seek
              what makes your business different. No matter if it is your
              market, every campaign is designed from scratch, and it is
              customized for your market reality.
            </p>
          </div>

          {/* Methodology */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-400">
                Our Method — Simple Yet Powerful
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our method, although basic, is very effective. We do it by the
                means of defining your company's goals and setting the measures
                that show the success of your business. Our research team
                becomes like detectives when they are trying to figure out who
                the perfect clients are for you – what are their issues, what
                they want, and how they use the internet – in order to create
                the right content for them that they will always find helpful.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={assets.companyOverview4}
                alt="Research"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Outcome */}
          <div className="text-center bg-gradient-to-r from-blue-900/30 to-blue-900/30 p-10 rounded-3xl border border-white/20 backdrop-blur-md shadow-lg">
            <h3 className="text-3xl font-bold text-blue-300 mb-4">
              The Outcome
            </h3>
            <p className="text-gray-200 text-xl leading-relaxed font-semibold">
              Tactics that not only reach your audience, but also convince them
              to respond
            </p>
          </div>

          {/* India’s Premier Digital Marketing Powerhouse */}
          <div className="text-center mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
              India's Premier Digital Marketing Powerhouse
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Flipping the digital market with smart, strategic solutions. We
              don't just get you closer to your audience - we help you charm
              them.
            </p>
          </div>

          {/* Expertise Grid */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
              Our Expertise
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {expertise.map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center 
                hover:bg-white/20 hover:border-blue-400/50 transition-all duration-500"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-4 rounded-xl w-full h-80 object-cover shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Capyngen */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Explore Capyngen
            </h3>
            <ul className="max-w-md mx-auto space-y-4 text-left text-gray-300 text-lg">
              {exploreLinks.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center space-y-6 mt-16 bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-400">Get In Touch</h3>
            <p className="text-lg text-gray-300">
              Tower B3, Spaze I-Tech Park, Sector 49, Gurgaon
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-200 text-lg">
              <Mail className="w-5 h-5 text-blue-400" /> sales@capyngen.com
            </p>
            <p className="text-xl text-gray-200">
              Do you want to take your brand to the next level? We should talk!
              <br />A digital pivot for you starts off with just a single chat.
            </p>
            <button
              className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
            text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/30 
            transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" /> Let’s Talk
            </button>
          </div>
        </div>
      </section>
      {/* <AtAGlance />
      <CustomerCountries />
      <FAQSection2 items={faqItems} /> */}
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default CompanyOverview;
