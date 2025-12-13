import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen pt-24 bg-black text-gray-100 antialiased p-6 flex items-start justify-center">
      <article className="w-full max-w-[90vw] bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg p-6 md:p-10">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-md text-gray-300">
            Welcome to Capyngen! These Terms and Conditions (“Terms”) govern
            your use of our website —{" "}
            <a
              className="text-indigo-300 hover:underline"
              href="https://www.capyngen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.capyngen.com
            </a>{" "}
            — and all related services, products, and digital solutions offered
            by Capyngen (“we,” “our,” “us”).
          </p>
          <p className="mt-2 text-md text-gray-300">
            By accessing or using our website, you agree to comply with these
            Terms. If you do not agree, please discontinue using our site and
            services.
          </p>
        </header>

        <section className="space-y-6 text-gray-200 leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-medium mb-2">1. Use of the Website</h2>
            <p>
              If​‍​‌‍​‍‌​‍​‌‍​‍‌ you access this site, it's your responsibility
              to ensure that:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                You are at least 18 years old, or using the site under parental
                or guardian supervision.
              </li>
              <li>You agree to follow all applicable laws and these Terms.</li>
            </ul>
            <p className="mt-2">You are not allowed to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Perform unlawful, fraudulent, or harmful activities.</li>
              <li>
                Attempt to compromise the website’s security or performance.
              </li>
              <li>
                Copy, modify, or distribute website content without written
                permission from Capyngen.
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              2. Intellectual Property Rights
            </h2>
            <p>
              All content on this site is the intellectual property of Capyngen
              or its licensors — including text, images, graphics, logos,
              videos, code, and designs.
            </p>
            <p className="mt-2">
              You may not reproduce, modify, or redistribute any material
              without written permission. Unauthorized use may violate copyright
              and other applicable laws.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              3. Services and Pricing
            </h2>
            <p>Capyngen provides:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Website and Web Application Development</li>
              <li>CMS / Headless CMS Integrations</li>
              <li>UI/UX Design & Digital Marketing</li>
            </ul>
            <p className="mt-2">
              Pricing and timelines depend on project requirements. We may
              modify or discontinue any service without prior notice.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              4. Client Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Provide accurate information necessary to complete the project.
              </li>
              <li>Review work promptly and share feedback.</li>
              <li>Pay invoices as agreed.</li>
            </ul>
            <p className="mt-2">
              Failure to comply may delay or suspend services.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              5. Payments and Refunds
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Payment terms are defined in individual project agreements.
              </li>
              <li>Late payments may cause delays or extra charges.</li>
              <li>Refunds depend on work progress and project status.</li>
            </ul>
            <p className="mt-2">
              Capyngen may withhold deliverables until all dues are cleared.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              6. Third-Party Tools and Integrations
            </h2>
            <p>
              We may use third-party tools or software. We are not responsible
              for their performance or issues arising from their use.
            </p>
            <p className="mt-2">
              Clients must review and accept third-party terms when required.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              7. Limitation of Liability
            </h2>
            <p>Capyngen is not liable for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Indirect or consequential damages</li>
              <li>Downtime, data loss, or third-party failures</li>
              <li>
                Errors caused by inaccurate or incomplete client information
              </li>
            </ul>
            <p className="mt-2">
              Maximum liability is limited to the amount paid for the specific
              service.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              8. Warranties and Disclaimers
            </h2>
            <p>
              All services are provided “as is” without warranties. We do not
              guarantee error-free, uninterrupted service or virus-free access.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-medium mb-2">9. Confidentiality</h2>
            <p>
              Capyngen maintains strict confidentiality regarding client
              information unless required by law.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-medium mb-2">10. Termination</h2>
            <p>
              We may restrict access or terminate services if a user violates
              these Terms, engages in unethical activity, or fails to pay
              invoices.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-xl font-medium mb-2">11. Indemnification</h2>
            <p>
              You agree to indemnify Capyngen against claims arising from misuse
              of services, violation of these Terms, or infringement of
              third-party rights.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              12. Links to Other Websites
            </h2>
            <p>
              Our site may include external links for convenience. Capyngen is
              not responsible for external content or policies.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              13. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of India. Jurisdiction —
              Delhi NCR, India.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="text-xl font-medium mb-2">
              14. Updates to These Terms
            </h2>
            <p>
              We may revise these Terms periodically. Continued use of this site
              implies acceptance of updated Terms.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h2 className="text-xl font-medium mb-2">15. Contact Us</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Email:{" "}
                <a
                  className="text-indigo-300 hover:underline"
                  href="mailto:info@capyngen.com"
                >
                  info@capyngen.com
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  className="text-indigo-300 hover:underline"
                  href="https://www.capyngen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.capyngen.com
                </a>
              </li>
            </ul>
            <p className="mt-4">
              Capyngen — Building trust through innovation, transparency, and
              excellence.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
