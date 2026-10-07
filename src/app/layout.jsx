import "../index.css";

export const metadata = {
  metadataBase: new URL("https://www.capyngen.com"),
  title: "Capyngen - Your Trusted IT Solutions & Digital Innovation Partner.",
  description:
    "We build scalable software, high-performance websites, cloud systems, and digital experiences that help businesses grow smarter with technology-driven innovation.",
  authors: [{ name: "Capyngen Pvt. Ltd." }],
  publisher: "Capyngen",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "7AWvh6hgWGBQSrrwrOwPl_cLAFT9n448yTW79sRa1qs",
  },
  openGraph: {
    title: "Capyngen - Your Trusted IT Solutions & Digital Innovation Partner.",
    description:
      "We build scalable software, high-performance websites, cloud systems, and digital experiences that help businesses grow smarter with technology-driven innovation.",
    url: "https://www.capyngen.com/",
    siteName: "Capyngen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.capyngen.com/capyngen3d.png",
        alt: "Capyngen - Innovative IT Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capyngen - IT Solution Company | IT Services and Solutions",
    description:
      "Empowering brands with smart IT solutions, scalable websites, and performance-driven digital marketing. #BuildGrowScale with Capyngen.",
    images: [
      "https://pbs.twimg.com/profile_banners/1528344499520516097/1761494135/1080x360",
    ],
    site: "@capyngen",
    creator: "@capyngen",
  },
  icons: {
    icon: "/capyngen3d.png",
  },
  alternates: {
    canonical: "https://www.capyngen.com/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Capyngen",
  url: "https://www.capyngen.com/",
  logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  sameAs: [
    "https://x.com/capyngen",
    "https://www.instagram.com/capyngen_official/",
    "https://www.linkedin.com/company/capyngen",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://t.contentsquare.net" />
        <link rel="preconnect" href="https://cdn.taboola.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NB2SNHDC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=870013968909327&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
