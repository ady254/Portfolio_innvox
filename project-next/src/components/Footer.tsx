import React from 'react';
import LiveClock from './LiveClock';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white pt-20 pb-10 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">

                    {/* Tagline */}
                    <div className="max-w-xs">
                        <h3 className="text-xl font-semibold mb-4">Experience Digital Evolution</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            We build digital solutions that propel your business forward.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="flex flex-wrap gap-12 md:gap-24">
                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                                <li><a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a></li>
                                <li><a href="/careers" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Careers</a></li>
                                <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                                <li><a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Web Development</a></li>
                                <li><a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Marketing</a></li>
                                <li><a href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Automation</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                                <li><a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy</a></li>
                                <li><a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Live Clock */}
                <div className="mb-12 md:mb-20 border-t border-gray-200 dark:border-gray-800 pt-10">
                    <LiveClock />
                </div>

                {/* Massive Typography */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-10">
                    <h1 className="text-[15vw] md:text-[12vw] leading-none font-bold text-center tracking-tighter select-none opacity-90 dark:opacity-100">
                        <span className="text-blue-600">INN</span>VOX
                    </h1>
                    <div className="flex justify-between items-center mt-8 text-sm text-gray-500 dark:text-gray-400">
                        <p>&copy; 2025 InnVox Inc.</p>
                        <div className="flex gap-4">
                            {/* <a href="#" className="hover:text-black dark:hover:text-white transition">Twitter</a> */}
                            <a href="https://www.instagram.com/innvox.in?igsh=MWd5bDMzenAxN3Z6cw%3D%3D" className="hover:text-black dark:hover:text-white transition">Instagram</a>
                            <a href="https://www.linkedin.com/company/innvox-in/" className="hover:text-black dark:hover:text-white transition">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
