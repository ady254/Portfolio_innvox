import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white">Terms & Conditions</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-12 text-lg leading-relaxed">
                        {/* 1. Acceptance of Terms */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                By accessing Innvox services, you agree to these Terms & Conditions.
                            </p>
                        </section>

                        {/* 2. Services Offered */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">2. Services Offered</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Innvox provides:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Website as a Service (WaaS)</li>
                                <li>AI chatbots</li>
                                <li>WhatsApp automation</li>
                                <li>Meta ads management</li>
                                <li>Custom software development</li>
                                <li>Maintenance & support</li>
                            </ul>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Service scope is defined per agreement.</p>
                        </section>

                        {/* 3. User Responsibilities */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">3. User Responsibilities</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Users agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Provide accurate information</li>
                                <li>Not misuse or abuse services</li>
                                <li>Not attempt hacking or reverse engineering</li>
                                <li>Follow applicable laws and platform policies</li>
                            </ul>
                        </section>

                        {/* 4. Payments & Refunds */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">4. Payments & Refunds</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Payments are milestone-based or subscription-based</li>
                                <li>Refunds are not guaranteed once work has started</li>
                                <li>Any refund terms must be agreed in writing</li>
                            </ul>
                        </section>

                        {/* 5. Intellectual Property */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">5. Intellectual Property</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Innvox retains ownership of internal tools, frameworks, and templates</li>
                                <li>Client deliverables are transferred as per agreement</li>
                                <li>No redistribution without written permission</li>
                            </ul>
                        </section>

                        {/* 6. Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">6. Limitation of Liability</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Innvox is not liable for:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Business losses</li>
                                <li>Revenue loss</li>
                                <li>AI-generated inaccuracies</li>
                                <li>Platform or API downtime</li>
                            </ul>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Liability, if any, is limited to the amount paid.</p>
                        </section>

                        {/* 7. Termination */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">7. Termination</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Innvox may suspend or terminate services for:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Policy violations</li>
                                <li>Non-payment</li>
                                <li>Illegal usage</li>
                            </ul>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Users may stop services at any time.</p>
                        </section>

                        {/* International Clients Clause */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">8. International Users</h2>
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

                        {/* 8. Governing Law */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">9. Governing Law</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                These terms are governed by the laws of India.
                                <br />
                                <strong>Jurisdiction:</strong> Indian courts only.
                            </p>
                        </section>

                    </div>
                </motion.div>
            </main>

        </div>
    );
};

export default Terms;
