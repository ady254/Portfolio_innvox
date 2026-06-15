"use client";
import React from 'react';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white">Privacy Policy</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-12 text-lg leading-relaxed">
                        {/* 1. Introduction */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">1. Introduction</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Innvox (“we”, “our”, “us”) is an AI, automation, and digital services agency based in India.
                                This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website or services.
                                <br /><br />
                                By using Innvox services, you agree to this policy.
                            </p>
                        </section>

                        {/* 2. Information We Collect */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">2. Information We Collect</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">We may collect:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li><strong>Personal details:</strong> Name, email, phone number, company name</li>
                                <li><strong>Technical data:</strong> IP address, browser type, device info</li>
                                <li><strong>Usage data:</strong> Pages visited, interactions, time spent</li>
                                <li><strong>Communication data:</strong> Forms, emails, WhatsApp, chatbot messages</li>
                            </ul>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">We only collect data that is necessary for service delivery.</p>
                        </section>

                        {/* 3. How We Use Your Data */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">3. How We Use Your Data</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Your data is used to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Provide and improve our services</li>
                                <li>Communicate regarding inquiries or projects</li>
                                <li>Enable automation, AI chatbots, and analytics</li>
                                <li>Maintain platform security and prevent misuse</li>
                                <li>Marketing purposes (only with consent)</li>
                            </ul>
                        </section>

                        {/* 4. Data Sharing */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">4. Data Sharing</h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                <p><strong>Innvox:</strong></p>
                                <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2">❌ Does not sell personal data</p>
                                    <p>✅ May share data with trusted third parties such as:</p>
                                    <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <li>Hosting providers</li>
                                        <li>Analytics tools</li>
                                        <li>Payment gateways</li>
                                        <li>API platforms (Meta, WhatsApp, cloud services)</li>
                                    </ul>
                                </div>
                                <p>All partners follow standard security practices.</p>
                            </div>
                        </section>

                        {/* 5. Data Security */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">5. Data Security</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">We implement reasonable security measures including:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Secure servers</li>
                                <li>Access control</li>
                                <li>Encryption where applicable</li>
                                <li>Regular monitoring</li>
                            </ul>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">However, no online system is 100% secure.</p>
                        </section>

                        {/* 6. Cookies */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">6. Cookies</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">We use cookies for:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Website functionality</li>
                                <li>Analytics</li>
                                <li>Performance tracking</li>
                            </ul>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">You can disable cookies in your browser settings.</p>
                        </section>

                        {/* 7. User Rights */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">7. User Rights</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Access your data</li>
                                <li>Request correction or deletion</li>
                                <li>Withdraw consent</li>
                                <li>Request data details</li>
                            </ul>
                        </section>

                        {/* 8. Children’s Privacy */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">8. Children’s Privacy</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Innvox does not knowingly collect data from individuals under 13 years of age.
                            </p>
                        </section>

                        {/* GDPR + DPDP Compliance */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">9. Data Protection & Compliance</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Innvox complies with:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                                <li>Digital Personal Data Protection Act, 2023 (India)</li>
                                <li>Information Technology Act, 2000</li>
                                <li>GDPR (for EU users) where applicable</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">We ensure that:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                                <li>Data is collected for lawful purposes only</li>
                                <li>Users can request access, correction, or deletion</li>
                                <li>Data is stored securely</li>
                                <li>Data is processed with consent or legitimate interest</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300">
                                EU users may exercise GDPR rights by contacting us at <a href="mailto:support@innvox.in" className="text-blue-600 hover:underline">support@innvox.in</a>.
                            </p>
                        </section>

                        {/* International Clients */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">10. International Users</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Innvox operates from India. If you access our services from outside India, you understand and agree that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Your data may be processed and stored in India or other jurisdictions</li>
                                <li>Local laws may differ from your country’s laws</li>
                                <li>You are responsible for compliance with local regulations</li>
                            </ul>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                By using Innvox services, you consent to cross-border data transfer as permitted by law.
                            </p>
                        </section>

                        {/* Policy Updates */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">11. Policy Updates</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                We may update this policy periodically. Changes will be reflected on this page.
                            </p>
                        </section>


                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">12. Contact</h2>
                            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                                <p className="text-gray-600 dark:text-gray-300">
                                    <span className="block mb-2"> <a href="mailto:connect@innvox.in" className="text-blue-600 hover:underline">support@innvox.in</a></span>
                                    <span className="block"> <a href="https://innvox.in" className="text-blue-600 hover:underline">https://innvox.in</a></span>
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
