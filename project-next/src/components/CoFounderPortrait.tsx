"use client";

import Image from "next/image";

type CoFounderPortraitProps = {
  src?: string;
  name?: string;
  role?: string;
  className?: string;
  showCaption?: boolean;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "w-28 h-28 sm:w-32 sm:h-32",
  md: "w-40 h-40 sm:w-48 sm:h-48",
  lg: "w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72",
};

export default function CoFounderPortrait({
  src = "/cofounder.png",
  name,
  role = "Co-Founder",
  className = "",
  showCaption = true,
  variant = "light",
  size = "md",
}: CoFounderPortraitProps) {
  const ringClass =
    variant === "dark"
      ? "ring-gray-700/80 group-hover:ring-blue-500/40"
      : "ring-gray-200 group-hover:ring-blue-500/50";

  return (
    <div className={`group flex flex-col items-center ${className}`}>
      <div
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden ring-1 ${ringClass} transition-all duration-500`}
      >
        <Image
          src={src}
          alt={name ? `${name}, ${role}` : role}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 160px, 288px"
        />
      </div>

      {showCaption && (name || role) && (
        <div className="mt-5 text-center">
          {name && (
            <p
              className={`text-sm font-semibold tracking-wide ${
                variant === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {name}
            </p>
          )}
          {role && (
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gray-500">
              {role}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
