"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Volume2, Brain, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import SafeSpline from "./SafeSpline";

interface AIVoiceDemoProps {
    learnMoreHref?: string;
}

const AIVoiceDemo = ({ learnMoreHref }: AIVoiceDemoProps) => {
    const [status, setStatus] = useState<"idle" | "listening" | "speaking">("idle");
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        // Initialize speech synthesis
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance("Hello! I am InnVox AI. I can handle your customer calls, schedule appointments, and answer questions 24/7. How can I help you scale your business today?");
        u.rate = 1.0;
        u.pitch = 1.0;
        u.volume = 1.0;

        u.onstart = () => setStatus("speaking");
        u.onend = () => setStatus("idle");

        utteranceRef.current = u;

        return () => {
            synth.cancel();
        };
    }, []);



    const handleStart = () => {
        if (status === "speaking") {
            window.speechSynthesis.cancel();
            setStatus("idle");
        } else {
            if (utteranceRef.current) {
                window.speechSynthesis.speak(utteranceRef.current);
            }
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-gray text-gray-200 dark:text-white mb-4"
                >
                    Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">InnVox AI</span>
                </motion.h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Got a question? Ask InnVox AI - it knows our services, process, and how we can help your business.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative bg-black rounded-[40px] p-8 md:p-16 overflow-hidden border border-gray-800 shadow-2xl"
            >
                {/* Background Gradients */}
                <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Status Text with Fade IN/OUT */}
                <div className="flex justify-center mb-12 h-8">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={status}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-gray-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2"
                        >
                            {status === "idle" && "Ready to chat with InnVox"}
                            {status === "speaking" && <><Volume2 className="w-4 h-4 animate-pulse text-blue-400" /> Speaking...</>}
                        </motion.span>
                    </AnimatePresence>
                </div>

                {/* Spline 3D Model */}
                <div className="relative h-[400px] w-full flex items-center justify-center mb-8 -mt-20">
                    <SafeSpline scene="https://prod.spline.design/Zg4pQXj0ygKIyp-F/scene.splinecode" />
                    {/* Overlay to hide Spline badge */}
                    <div className="absolute bottom-2 right-2 w-36 h-12 bg-black z-50 pointer-events-none" />
                </div>

                {/* Action Button */}
                <div className="flex justify-center relative z-20">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStart}
                        className={`
                    group relative px-8 py-4 rounded-full flex items-center gap-3 
                    font-bold text-lg transition-all duration-300
                    ${status === "speaking"
                                ? "bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30"
                                : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 ring-1 ring-blue-400"}
                `}
                    >
                        {status === "speaking" ? (
                            <>Stop Conversation</>
                        ) : (
                            <>
                                <Mic className="w-5 h-5 group-hover:animate-bounce" /> Start Conversation
                            </>
                        )}
                    </motion.button>
                </div>

            </motion.div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-16 px-4">
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center">
                    <Brain className="w-8 h-8 text-purple-600 mb-4" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Knows everything about us</h3>
                    <p className="text-sm text-gray-500">Answers service, process, and project questions instantly.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center">
                    <Clock className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Available 24/7</h3>
                    <p className="text-sm text-gray-500">Handles questions even when your team is offline.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center">
                    <ShieldCheck className="w-8 h-8 text-green-600 mb-4" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Gives instant answers</h3>
                    <p className="text-sm text-gray-500">Turns common queries into faster, cleaner conversations.</p>
                </div>
            </div>

            {learnMoreHref && (
                <div className="mt-12 text-center">
                    <Link
                        href={learnMoreHref}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
                    >
                        Explore Full AI Solutions <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AIVoiceDemo;
