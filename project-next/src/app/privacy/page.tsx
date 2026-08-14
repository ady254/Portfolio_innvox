"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-4">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
          <p className="text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-12">
            This policy is written to comply with the Digital Personal Data
            Protection Act, 2023 (DPDPA) of India, and the Information
            Technology Act, 2000.
          </p>

          <div className="space-y-12 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Who we are (Data Fiduciary)</h2>
              <p className="text-gray-600">
                InnVox (“we”, “our”, “us”) is the Data Fiduciary responsible for
                personal data collected through innvox.in and related services.
                We are a digital agency based in New Delhi, India, offering web
                development, AI automation, WhatsApp systems, and marketing.
              </p>
              <p className="text-gray-600 mt-4">
                Contact for privacy requests:{" "}
                <a href="mailto:innvox.in.official@gmail.com" className="text-blue-600 hover:underline">
                  innvox.in.official@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Notice before collection</h2>
              <p className="text-gray-600 mb-4">
                Before or at the time we collect personal data, we tell you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>What data we collect</li>
                <li>Why we collect it (specified purpose)</li>
                <li>How you can withdraw consent</li>
                <li>How to complain or contact our grievance officer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Personal data we collect</h2>
              <p className="text-gray-600 mb-4">
                We collect only what is needed to respond to you and deliver our
                services (data minimisation):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Inquiry data:</strong> name, email, phone number,
                  country/location, service interest, and message content
                </li>
                <li>
                  <strong>Project data:</strong> business details you share so we
                  can scope and deliver work
                </li>
                <li>
                  <strong>Communication data:</strong> emails, WhatsApp messages,
                  and call notes related to your inquiry
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type, and
                  basic usage logs needed for security and site performance
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                We do not collect special category or children’s data through
                this website. Our services are intended for persons aged 18 and
                above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Purpose of processing</h2>
              <p className="text-gray-600 mb-4">
                We use personal data only for these specified purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Responding to project inquiries and scheduling calls</li>
                <li>Preparing proposals, contracts, and delivering services</li>
                <li>Sending project-related communication you requested</li>
                <li>Securing our website and preventing abuse</li>
                <li>
                  Marketing only if you separately consent (you may refuse)
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                We do not use contact-form data for unrelated profiling, sale, or
                advertising without a new, specific consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Legal basis — consent</h2>
              <p className="text-gray-600 mb-4">
                For website inquiry forms, processing is based on your consent.
                Consent must be free, specific, informed, unconditional, and
                unambiguous. By ticking the consent box and submitting the form,
                you agree that InnVox may process the details you entered to
                reply to you.
              </p>
              <p className="text-gray-600">
                You may withdraw consent at any time by emailing{" "}
                <a href="mailto:innvox.in.official@gmail.com" className="text-blue-600 hover:underline">
                  innvox.in.official@gmail.com
                </a>
                . Withdrawal does not affect processing already completed
                lawfully before the withdrawal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. How inquiry data is sent</h2>
              <p className="text-gray-600">
                When you submit the contact form, your details are placed into
                an email addressed to InnVox (
                <a href="mailto:innvox.in.official@gmail.com" className="text-blue-600 hover:underline">
                  innvox.in.official@gmail.com
                </a>
                ) so we can read and reply. That email is sent through your
                device’s email application. We do not sell this information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Sharing with others</h2>
              <p className="text-gray-600 mb-4">
                InnVox does not sell personal data. We may share data only with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Team members who need it to respond or deliver the project</li>
                <li>
                  Service providers acting as Data Processors (hosting, email,
                  analytics) under confidentiality and purpose limits
                </li>
                <li>Authorities if required by Indian law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Storage, security and retention</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access to inquiry emails is limited to authorised InnVox staff</li>
                <li>We use HTTPS on innvox.in so data in transit is encrypted</li>
                <li>
                  We keep inquiry data only as long as needed to respond, deliver
                  services, meet legal records, or until you ask us to erase it
                </li>
                <li>
                  After the purpose is complete, we delete or anonymise data
                  unless a law requires us to keep it
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                No method of electronic storage is perfectly secure. We take
                reasonable safeguards as required of a Data Fiduciary under DPDPA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Your rights as a Data Principal</h2>
              <p className="text-gray-600 mb-4">
                Under DPDPA, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access a summary of personal data we hold about you</li>
                <li>Ask for correction of inaccurate or incomplete data</li>
                <li>Ask for erasure of data that is no longer needed</li>
                <li>Withdraw consent</li>
                <li>Nominate another person to exercise rights in case of death or incapacity</li>
                <li>Raise a grievance with us, and then with the Data Protection Board of India if unresolved</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Send requests to{" "}
                <a href="mailto:innvox.in.official@gmail.com" className="text-blue-600 hover:underline">
                  innvox.in.official@gmail.com
                </a>
                . We aim to respond within a reasonable period, and in any case
                without undue delay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Children</h2>
              <p className="text-gray-600">
                InnVox does not knowingly process personal data of children
                (under 18 years) through this website. If you believe we have
                received such data, contact us and we will delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Cross-border transfer</h2>
              <p className="text-gray-600">
                InnVox is based in India. If tools we use store data outside
                India, we will do so only as permitted under DPDPA, including
                any government restrictions on transfer to specified countries.
                By submitting an inquiry you understand your data may be
                processed in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Cookies</h2>
              <p className="text-gray-600 mb-4">
                We may use essential cookies for site function and, where used,
                analytics cookies to understand page performance. You can block
                cookies in your browser. Analytics cookies that identify you
                will not run without a lawful basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Grievance Officer</h2>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-gray-600">
                <p className="font-semibold text-gray-900 mb-2">Grievance Officer — InnVox</p>
                <p>Email: <a href="mailto:innvox.in.official@gmail.com" className="text-blue-600 hover:underline">innvox.in.official@gmail.com</a></p>
                <p>Address: New Delhi, India</p>
                <p className="mt-3 text-sm">
                  If you are not satisfied after we respond, you may approach
                  the Data Protection Board of India as provided under DPDPA.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Policy updates</h2>
              <p className="text-gray-600">
                We may update this policy when our practices or the law change.
                The “Last updated” date at the top will change. Continued use of
                the website after an update means you should review the new
                notice. Material changes to how we process data already
                collected will be communicated where required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Contact</h2>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-gray-600">
                <p>
                  InnVox ·{" "}
                  <a href="mailto:innvox.in.official@gmail.com" className="text-blue-600 hover:underline">
                    innvox.in.official@gmail.com
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <Link href="/" className="text-blue-600 hover:underline">
                    https://innvox.in
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Privacy;
