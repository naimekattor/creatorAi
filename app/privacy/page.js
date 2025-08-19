import CTABanner from "../../components/cta-banner";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#4D4D4D]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 ">
            <span className="text-blue-400">Privacy</span> Policy
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <p className="text-[#4D4D4D] mb-6">
                <strong>Effective Date:</strong> [Insert Date]
                <br />
                Thank you for visiting [Your Website Name] (&quot;we&quot;,
                &quot;our&quot;, &quot;us&quot;). Your privacy is important to
                us. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your personal information when you visit or
                interact with our website [www.yourwebsite.com] (the
                &quot;Site&quot;).
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                1. Information We Collect
              </h2>
              <p className="text-[#4D4D4D] mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-[#4D4D4D] space-y-2 ml-4">
                <li>
                  <strong>Personal Information:</strong> such as your name,
                  email address, phone number, etc. (only when you submit it
                  voluntarily, e.g., through contact forms or account
                  registration).
                </li>
                <li>
                  <strong>Usage Data:</strong> including your IP address,
                  browser type, device type, pages visited, time spent on the
                  site, and other analytical data.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> we may use
                  cookies to enhance your experience, analyze site traffic, and
                  improve our services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                2. How We Use Your Information
              </h2>
              <p className="text-[#4D4D4D] mb-4">
                We may use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-[#4D4D4D] space-y-2 ml-4">
                <li>To provide and maintain our website.</li>
                <li>
                  To respond to your inquiries or provide customer support.
                </li>
                <li>
                  To send you updates, newsletters, or promotional materials
                  (you can opt out).
                </li>
                <li>
                  To analyze and improve the performance and content of our
                  site.
                </li>
                <li>To detect and prevent fraudulent or illegal activity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                3. Sharing Your Information
              </h2>
              <p className="text-[#4D4D4D] mb-4">
                We do not sell your personal data. We may share your information
                with:
              </p>
              <ul className="list-disc list-inside text-[#4D4D4D] space-y-2 ml-4">
                <li>
                  <strong>Service Providers:</strong> who assist in operating
                  our site or servicing you.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> if required by law or to
                  protect our rights.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                4. Your Rights and Choices
              </h2>
              <p className="text-[#4D4D4D] mb-4">You may have the right to:</p>
              <ul className="list-disc list-inside text-[#4D4D4D] space-y-2 ml-4">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Opt out of marketing communications.</li>
                <li>
                  To exercise any of these rights, contact us at:
                  [your@email.com]
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                5. Security
              </h2>
              <p className="text-[#4D4D4D] mb-4">
                We take reasonable precautions to protect your personal
                information. However, no method of transmission over the
                Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                6. Third-Party Links
              </h2>
              <p className="text-[#4D4D4D] mb-4">
                Our website may contain links to other websites. We are not
                responsible for their privacy practices or content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                7. Children&apos;s Privacy
              </h2>
              <p className="text-[#4D4D4D] mb-4">
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-[#4D4D4D] mb-4">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &quot;Effective
                Date&quot;.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#4D4D4D]">
                9. Contact Us
              </h2>
              <p className="text-[#4D4D4D]">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
                <br />
                [your@email.com] [Your Address, City, Country]
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <CTABanner />
      </div>
    </div>
  );
}
