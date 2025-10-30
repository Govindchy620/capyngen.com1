import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-24 bg-black text-gray-100 antialiased p-6 flex items-start justify-center">
      <article className="w-full max-w-[90vw] bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg p-6 md:p-10">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-md text-gray-300">
            At Capyngen, which can be reached at{" "}
            <a
              className="text-indigo-300 hover:underline"
              href="https://www.capyngen.com"
            >
              www.capyngen.com
            </a>
            , we consider your privacy as one of the most important things. This
            Privacy Policy details the manner in which we gather, utilize, and
            protect your personal data when you come to our site or employ our
            digital services.
          </p>
          <p className="mt-2 text-md text-gray-300">
            Your consent to the terms provided in this policy is presumed when
            you access or use our site. If you disagree, kindly refrain from
            using our website.
          </p>
        </header>

        <section className="space-y-6 text-gray-200 leading-relaxed">
          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you use our website or services, we might gather information
              about you that falls under the following categories:
            </p>

            <ul className="pl-5 mt-2 list-disc text-gray-300 space-y-3">
              <li>
                <strong>Personal Information:</strong> Your name, email address,
                phone number, company name, as well as any other information you
                provide when filling out a contact form or inquiring about a
                project.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, operating
                system, referring site URL, pages visited, and time spent on
                pages.
              </li>
              <li>
                <strong>Cookies & Tracking Technologies:</strong> Cookies,
                analytics tools, and similar technologies to enhance user
                experience and deliver targeted content.
              </li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              2. How We Use Your Information
            </h2>
            <p>Capyngen employs your personal and usage information to:</p>
            <ul className="pl-5 mt-2 list-disc text-gray-300 space-y-2">
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Respond to inquiries, project requests, or support needs.</li>
              <li>Send updates or promotional materials (if you opt-in).</li>
              <li>Improve user experience, functionality, and security.</li>
              <li>
                Comply with legal obligations and protect against fraudulent
                activities.
              </li>
            </ul>
          </div>

          {/* 3. Security */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              3. How We Protect Your Data
            </h2>
            <p>
              We prioritize your data security by using secure servers,
              encryption technologies, and industry-standard administrative,
              technical, and physical safeguards.
            </p>
            <p className="mt-2">
              Access is restricted to authorized personnel under strict
              confidentiality agreements. However, no online system is 100%
              secure, and we cannot guarantee complete security.
            </p>
          </div>

          {/* 4. Sharing */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              4. Sharing Your Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal data. We may share
              limited information only with:
            </p>
            <ul className="pl-5 mt-2 list-disc text-gray-300 space-y-2">
              <li>
                Essential partners or service providers (hosting, analytics,
                etc.).
              </li>
              <li>
                Parties bound by confidentiality and data protection agreements.
              </li>
            </ul>
            <p className="mt-2">
              We may also disclose information if legally required or necessary
              to protect rights, security, or the public.
            </p>
          </div>

          {/* 5. Cookies */}
          <div>
            <h2 className="text-xl font-medium mb-2">5. Cookies Policy</h2>
            <p>We use cookies to:</p>
            <ul className="pl-5 mt-2 list-disc text-gray-300 space-y-2">
              <li>Remember user preferences and settings.</li>
              <li>Analyze site traffic and performance.</li>
              <li>Deliver relevant content and improve services.</li>
            </ul>
            <p className="mt-2">
              You can disable cookies via your browser settings. Some site
              features may not work if disabled.
            </p>
          </div>

          {/* 6. Third-party Links */}
          <div>
            <h2 className="text-xl font-medium mb-2">6. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites not operated by
              us. We are not responsible for their content or privacy practices.
              Review their privacy policies before sharing information.
            </p>
          </div>

          {/* 7. Rights */}
          <div>
            <h2 className="text-xl font-medium mb-2">7. Your Privacy Rights</h2>
            <p>You may have the right to:</p>
            <ul className="pl-5 mt-2 list-disc text-gray-300 space-y-2">
              <li>Access, correct, or delete your personal data.</li>
              <li>Withdraw consent for promotional communications.</li>
              <li>Request details of the data we store about you.</li>
              <li>Restrict or object to certain data processing activities.</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{" "}
              <a
                className="text-indigo-300 hover:underline"
                href="mailto:info@capyngen.com"
              >
                info@capyngen.com
              </a>
              .
            </p>
          </div>

          {/* 8. Children */}
          <div>
            <h2 className="text-xl font-medium mb-2">8. Children’s Privacy</h2>
            <p>
              Our services are not intended for children under 13. If you
              believe a child has submitted data, contact us and we will remove
              it.
            </p>
          </div>

          {/* 9. Updates */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              9. Updates to This Privacy Policy
            </h2>
            <p>
              We may update this policy periodically. Changes will be posted on
              this page with an updated “Last Updated” date. Please review
              periodically.
            </p>
          </div>

          {/* 10. Contact */}
          <div>
            <h2 className="text-xl font-medium mb-2">10. Contact Us</h2>
            <p>If you have questions or concerns, contact us:</p>
            <ul className="pl-5 mt-2 list-disc text-gray-300 space-y-2">
              <li>
                📧 Email:{" "}
                <a
                  className="text-indigo-300 hover:underline"
                  href="mailto:info@capyngen.com"
                >
                  info@capyngen.com
                </a>
              </li>
              <li>
                🌐 Website:{" "}
                <a
                  className="text-indigo-300 hover:underline"
                  href="https://www.capyngen.com"
                >
                  www.capyngen.com
                </a>
              </li>
            </ul>
            <p className="mt-3">
              Capyngen is committed to maintaining transparency, trust, and
              integrity in every digital interaction. Your privacy matters — and
              we’re here to protect it.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
