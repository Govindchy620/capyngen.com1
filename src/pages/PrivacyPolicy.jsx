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
            At Capyngen, accessible from{" "}
            <a
              className="text-indigo-300 hover:underline"
              href="https://www.capyngen.com"
            >
              www.capyngen.com
            </a>
            , your privacy is one of our top priorities. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you visit our website or use our services.
          </p>
        </header>

        <section className="space-y-6 text-gray-200 leading-relaxed">
          <div>
            <h2 className="text-xl font-medium mb-2">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information from you:</p>
            <ul className="pl-5 mt-2 list-disc text-gray-300">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, and other contact details you
                provide through forms or inquiries.
              </li>

              <li className="mt-3">
                <strong>Usage Data:</strong> Information about how you interact
                with our website — such as pages visited, time spent, and
                browser type.
              </li>

              <li className="mt-3">
                <strong>Cookies &amp; Tracking Technologies:</strong> To improve
                user experience and analyze site performance.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="pl-5 mt-2 list-disc text-gray-300">
              <li>Provide, operate, and improve our services.</li>
              <li className="mt-2">
                Communicate with you regarding inquiries, projects, or updates.
              </li>
              <li className="mt-2">
                Send marketing or promotional materials (only if you have opted
                in).
              </li>
              <li className="mt-2">
                Enhance user experience and website performance.
              </li>
              <li className="mt-2">
                Comply with legal obligations and protect against fraud or
                misuse.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              3. How We Protect Your Data
            </h2>
            <p>
              We use secure servers and industry-standard measures to keep your
              personal data safe. Access is restricted to authorized personnel
              only. However, please note that no method of transmission over the
              internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              4. Sharing Your Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal data. We may share
              limited information with trusted partners or third-party tools
              (e.g., analytics, hosting) who assist in website operations — all
              bound by confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">5. Cookies Policy</h2>
            <p>Capyngen uses cookies to:</p>
            <ul className="pl-5 mt-2 list-disc text-gray-300">
              <li>Remember user preferences</li>
              <li className="mt-2">Improve website performance</li>
              <li className="mt-2">
                Analyze visitor behavior for better content and services
              </li>
            </ul>
            <p className="mt-3">
              You can disable cookies through your browser settings, but some
              parts of the site may not function properly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">6. Third-Party Links</h2>
            <p>
              Our website may contain links to other websites. We are not
              responsible for their privacy practices, so please review their
              policies before sharing personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="pl-5 mt-2 list-disc text-gray-300">
              <li>Access, update, or delete your personal data.</li>
              <li className="mt-2">
                Withdraw consent for marketing communications at any time.
              </li>
              <li className="mt-2">
                Request details of the data we hold about you.
              </li>
            </ul>
            <p className="mt-3">
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

          <div>
            <h2 className="text-xl font-medium mb-2">8. Children’s Privacy</h2>
            <p>
              Our website and services are not directed toward children under
              the age of 13. We do not knowingly collect personal information
              from minors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              9. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated “Last Updated” date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <ul className="pl-5 mt-2 list-disc text-gray-300">
              <li>
                📧 Email:{" "}
                <a
                  className="text-indigo-300 hover:underline"
                  href="mailto:info@capyngen.com"
                >
                  info@capyngen.com
                </a>
              </li>
              <li className="mt-2">
                🌐 Website:{" "}
                <a
                  className="text-indigo-300 hover:underline"
                  href="https://www.capyngen.com"
                >
                  www.capyngen.com
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer className="mt-8 text-sm text-gray-400">
          This document is provided for informational purposes and is not legal
          advice.
        </footer>
      </article>
    </main>
  );
}
