"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

interface SlideButtonProps {
  label?: string;
  successLabel?: string;
  onComplete: () => void;
  className?: string;
}

const SlideButton = ({
  label = "Slide to Join Community",
  successLabel = "Welcome aboard!",
  onComplete,
  className = "",
}: SlideButtonProps) => {
  const [completed, setCompleted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);

  const fillWidth = useTransform(x, [0, maxDrag || 1], ["0%", "100%"]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const track = trackRef.current.offsetWidth;
        setMaxDrag(Math.max(track - 64, 0));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleDragEnd = () => {
    if (x.get() >= maxDrag * 0.85) {
      x.set(maxDrag);
      setCompleted(true);
      setTimeout(onComplete, 400);
    } else {
      x.set(0);
    }
  };

  return (
    <div
      ref={trackRef}
      className={`relative w-full max-w-md h-16 rounded-full overflow-hidden select-none ${className}`}
      style={{ touchAction: "none" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full shadow-lg shadow-green-500/25" />

      <motion.div
        className="absolute inset-y-1 left-1 rounded-full bg-white/25"
        style={{ width: fillWidth }}
      />

      <motion.span
        className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm sm:text-base tracking-wide pointer-events-none pl-16 pr-4"
        animate={{ opacity: completed ? 0 : 1 }}
      >
        {label}
      </motion.span>

      <motion.span
        className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm sm:text-base gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: completed ? 1 : 0 }}
      >
        <Check className="w-5 h-5" /> {successLabel}
      </motion.span>

      {!completed && (
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: maxDrag }}
          dragElastic={0.05}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="absolute top-1 left-1 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6 text-green-600" />
        </motion.div>
      )}

      {completed && (
        <div className="absolute top-1 right-1 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
          <Check className="w-6 h-6 text-green-600" />
        </div>
      )}
    </div>
  );
};

export default SlideButton;
