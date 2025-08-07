import homeAboutUs1 from "./homeAboutUs1.png";
import homeAboutUs2 from "./homeAboutUs2.png";
import team1 from "./team1.png";
import team2 from "./team2.png";
import team3 from "./team3.png";
import team4 from "./team4.png";
import homeAboutUsBg from "./homeAboutUsBg.webp";
import homeIndustries from "./homeIndustries.webp";
import testimonial1 from "./testimonial1.webp";
import testimonial2 from "./testimonial2.webp";
import testimonial3 from "./testimonial3.webp";
import testimonial4 from "./testimonial4.webp";
import testimonial5 from "./testimonial5.webp";
import whyChooseUs from "./whyChooseUs.webp";

export const assets = {
  homeAboutUs1,
  homeAboutUs2,
  team1,
  team2,
  team3,
  team4,
  homeAboutUsBg,
  homeIndustries,
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  whyChooseUs,
};

export const navItems = [
  {
    label: "WHAT WE OFFER",
    dropdown: [
      {
        title: "Software Development",
        links: [
          { label: "App Development", href: "/services/app-development" },
          { label: "Custom AI Solution", href: "/services/ai-solutions" },
          { label: "Web Development", href: "/services/web-development" },
          {
            label: "E-Commerce Solutions",
            href: "/services/ecommerce-solutions",
          },
          {
            label: "Blockchain Development",
            href: "/services/blockchain-development",
          },
          { label: "DevOps Solutions", href: "/services/devops-solutions" },
          {
            label: "Application Solutions",
            href: "/services/application-solutions",
          },
          {
            label: "CRM & Management Software",
            href: "/services/crm-management-software",
          },
        ],
      },
      {
        title: "Design",
        links: [
          { label: "UI/UX Design", href: "/services/ui-ux-design" },
          { label: "Website Design", href: "/services/website-design" },
          {
            label: "Branding & Identity Design",
            href: "/services/branding-and-identity-design",
          },
          { label: "Ecommerce Design", href: "/services/ecommerce-design" },
          { label: "CMS Design", href: "/services/cms-design" },
        ],
      },
      {
        title: "Marketing",
        links: [
          { label: "Digital Marketing", href: "/services/digital-marketing" },

          { label: "Search Engine Optimization (SEO)", href: "/services/seo" },

          { label: "Social Media Marketing (SMM)", href: "/services/smm" },
          { label: "Pay-Per-Click Advertising (PPC)", href: "/services/ppc" },
          {
            label: "Social Media Marketing",
            href: "/services/social-media-marketing",
          },
        ],
      },
      {
        title: "Advanced Technologies",
        links: [
          {
            label: "Artificial Intelligence",
            href: "/services/artificial-intelligence",
          },
          { label: "Cybersecurity", href: "/services/cybersecurity" },
          {
            label: "Network Solutions & Services",
            href: "/services/network-solutions",
          },
          {
            label: "Enterprise Solutions",
            href: "/services/enterprise-solutions",
          },
          { label: "Data & Analytics", href: "/services/data-analytics" },
        ],
      },
      {
        title: "Consulting",
        links: [{ label: "Consulting", href: "/services/consulting" }],
      },
    ],
  },
  {
    label: "INDUSTRIES",
    dropdown: [
      {
        links: [
          { label: "Banking", href: "/industries/banking" },
          { label: "Education", href: "/industries/education" },
          { label: "Capital Market", href: "/industries/capital-market" },
          { label: "Life Science", href: "/industries/life-science" },
          {
            label: "Consumer Packaged Goods & Distribution",
            href: "/industries/cpg-distribution",
          },
          {
            label: "Healthcare & Fitness",
            href: "/industries/healthcare-fitness",
          },
          {
            label: "Energy, Resources & Utilities",
            href: "/industries/energy-resources-utilities",
          },
          {
            label: "Manufacturing & Automotive",
            href: "/industries/manufacturing",
          },
          { label: "Public Service", href: "/industries/public-service" },
          { label: "E-Commerce", href: "/industries/e-commerce" },
          { label: "High Tech", href: "/industries/high-tech" },
          { label: "Travel & Logistics", href: "/industries/travel-logistics" },
          { label: "Insurance", href: "/industries/insurance" },
          {
            label: "Communication, Media & Information Services",
            href: "/industries/communication-media-it",
          },
          { label: "Real Estate", href: "/industries/real-estate" },
          { label: "Gaming", href: "/industries/gaming" },
        ],
      },
    ],
  },
  { label: "COMPANY OVERVIEW", href: "/company-overview" },
  { label: "CAREERS", href: "/careers" },
  { label: "NEWS & UPDATES", href: "/news-updates" },
  { label: "CONTACT US", href: "/contact-us" },
];
