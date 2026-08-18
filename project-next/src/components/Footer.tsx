import React from 'react';
import Link from 'next/link';
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white pt-24 pb-10 overflow-hidden relative">
            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Massive CTA Section */}
                <div className="mb-24 md:mb-32">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">build?</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        Whether you need a full e-commerce platform, a bespoke web application, or an AI automation system, we're ready to engineer your next phase of growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <a
                            href="https://wa.me/919939711942"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:scale-105 transition-transform"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat on WhatsApp
                        </a>
                        <a
                            href="mailto:innvox.in.official@gmail.com"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Email Us
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <p className="text-sm font-medium text-gray-400">
                            Available now • We reply within 2 hours on business days
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between items-start mb-20 gap-10 border-t border-white/10 pt-16">
                    {/* Brand Info */}
                    <div className="col-span-2 lg:col-span-1 max-w-xs">
                        <h3 className="text-xl font-bold mb-4 text-white">Experience Digital Evolution</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We build digital solutions that propel your business forward. Based in India, serving globally.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold mb-6 text-white tracking-wider text-sm uppercase">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                            <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-white tracking-wider text-sm uppercase">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Digital Platform Engineering</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Data-Driven Growth Engines</Link></li>
                            <li><Link href="/ai-solutions" className="hover:text-blue-400 transition-colors">Agentic AI & Automations</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-white tracking-wider text-sm uppercase">Legal & Social</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms</Link></li>
                            <li><a href="https://www.instagram.com/innvox.in?igsh=MWd5bDMzenAxN3Z6cw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/innvox-in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* Massive Typography & Copyright */}
                <div className="border-t border-white/10 pt-10">
                    <h1 className="text-[15vw] md:text-[12vw] leading-none font-black text-center tracking-tighter select-none opacity-20">
                        <span className="text-blue-500">INN</span>VOX
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500 gap-4">
                        <p>&copy; {currentYear} InnVox Inc. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/innvox.in?igsh=MWd5bDMzenAxN3Z6cw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                            <a href="https://www.linkedin.com/company/innvox-in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
