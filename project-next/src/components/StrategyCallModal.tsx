"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MessageCircle, ArrowUpRight } from "lucide-react";

interface StrategyCallModalProps {
  open: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "919939711942";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi InnVox! I'd like to book a free strategy call to discuss my project."
);
const CALENDLY_URL = "https://calendly.com/itsadnanahmad5/new-meeting"; // placeholder — replace with real link

export default function StrategyCallModal({ open, onClose }: StrategyCallModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          id="strategy-call-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />

          {/* Modal Card */}
          <motion.div
            id="strategy-call-modal"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 px-8 pt-8 pb-10 text-white">
              <button
                id="strategy-call-modal-close"
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Decorative orb */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <p className="text-blue-200 text-xs font-mono uppercase tracking-widest mb-2">
                Free · No Commitment
              </p>
              <h2 className="text-2xl md:text-3xl font-black leading-tight mb-1">
                Book a Strategy Call
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                30 minutes. We analyse your business, propose a solution, and give you a ballpark quote — all for free.
              </p>

              {/* Social proof strip */}
              <div className="flex items-center gap-3 mt-5">
                {["Minara Gifting", "Sangat Motor", "Al Harmain"].map((name) => (
                  <span
                    key={name}
                    className="px-2.5 py-1 bg-white/15 rounded-full text-[10px] font-bold text-white/80 border border-white/20"
                  >
                    {name}
                  </span>
                ))}
                <span className="text-[10px] text-blue-200 font-medium">+ more</span>
              </div>
            </div>

            {/* Options */}
            <div className="px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Calendly */}
              <a
                id="strategy-call-calendly-btn"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                onClick={onClose}
              >
                <div className="w-11 h-11 bg-blue-100 group-hover:bg-blue-200 text-blue-600 rounded-xl flex items-center justify-center transition">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">Pick a Time Slot</p>
                  <p className="text-slate-500 text-xs leading-relaxed mt-0.5">
                    Choose a date & time that works for you via Calendly.
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:gap-2 transition-all">
                  Open Calendly <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* WhatsApp */}
              <a
                id="strategy-call-whatsapp-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-5 rounded-2xl border-2 border-slate-200 hover:border-green-500 hover:bg-green-50 transition-all"
                onClick={onClose}
              >
                <div className="w-11 h-11 bg-green-100 group-hover:bg-green-200 text-green-600 rounded-xl flex items-center justify-center transition">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">Chat on WhatsApp</p>
                  <p className="text-slate-500 text-xs leading-relaxed mt-0.5">
                    Message us instantly — we reply within minutes.
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-bold text-green-600 group-hover:gap-2 transition-all">
                  Open WhatsApp <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* Footer note */}
            <p className="text-center text-xs text-slate-400 pb-6 px-8">
              Prefer email? Reach us at{" "}
              <a href="mailto:innvox.in.official@gmail.com" className="text-blue-500 hover:underline">
                innvox.in.official@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
