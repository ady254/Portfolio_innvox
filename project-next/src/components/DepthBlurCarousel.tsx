"use client";

import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

interface DepthBlurCarouselProps {
  images: string[];
  className?: string;
  onActiveIndexChange?: (index: number) => void;
  onCenterClick?: (index: number) => void;
}

function useCarouselDimensions() {
  const [dims, setDims] = useState({
    itemWidth: 500,
    itemHeight: 285,
    sideItemWidth: 320,
    sideItemHeight: 280,
    gap: 64,
    minHeight: 400,
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setDims({
          itemWidth: 260,
          itemHeight: 165,
          sideItemWidth: 180,
          sideItemHeight: 140,
          gap: 28,
          minHeight: 260,
        });
      } else if (w < 768) {
        setDims({
          itemWidth: 320,
          itemHeight: 200,
          sideItemWidth: 220,
          sideItemHeight: 170,
          gap: 40,
          minHeight: 300,
        });
      } else if (w < 1024) {
        setDims({
          itemWidth: 400,
          itemHeight: 240,
          sideItemWidth: 280,
          sideItemHeight: 220,
          gap: 52,
          minHeight: 340,
        });
      } else {
        setDims({
          itemWidth: 500,
          itemHeight: 285,
          sideItemWidth: 320,
          sideItemHeight: 280,
          gap: 64,
          minHeight: 400,
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return dims;
}

function PremiumSmearCard({
  src,
  index,
  total,
  smoothScroll,
  itemWidth,
  itemHeight,
  sideItemWidth,
  sideItemHeight,
  gap,
  maxRotation,
  borderRadius,
}: {
  src: string;
  index: number;
  total: number;
  smoothScroll: MotionValue<number>;
  itemWidth: number;
  itemHeight: number;
  sideItemWidth: number;
  sideItemHeight: number;
  gap: number;
  maxRotation: number;
  borderRadius: number;
}) {
  const localOffset = useTransform(smoothScroll, (v) => {
    let linearBase = index - v;
    let mapped = ((linearBase % total) + total) % total;
    if (mapped > total / 2) mapped -= total;
    return mapped;
  });

  const absOffset = useTransform(localOffset, Math.abs);
  const cardWidth = useTransform(absOffset, [0, 1], [itemWidth, sideItemWidth], {
    clamp: true,
  });
  const cardHeight = useTransform(absOffset, [0, 1], [itemHeight, sideItemHeight], {
    clamp: true,
  });
  const marginLeft = useTransform(cardWidth, (w) => -w / 2);
  const marginTop = useTransform(cardHeight, (h) => -h / 2);

  const x = useTransform(localOffset, (o) => {
    const a = Math.abs(o);
    const s = Math.sign(o);
    const centerToNext = itemWidth / 2 + gap + sideItemWidth / 2;
    const sideToSide = sideItemWidth + gap;
    if (a === 0) return 0;
    if (a <= 1) return s * centerToNext * a;
    return s * (centerToNext + (a - 1) * sideToSide * 0.85);
  });

  const z = useTransform(absOffset, (a) => -a * 200);
  const rotateY = useTransform(localOffset, (o) =>
    Math.sign(o) * Math.min(Math.abs(o) * 35, maxRotation)
  );
  const zIndex = useTransform(absOffset, (a) => 1000 - Math.round(a * 10));
  const visibilityOpacity = useTransform(absOffset, [0, 5, 7], [1, 1, 0]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        marginLeft,
        marginTop,
        width: cardWidth,
        height: cardHeight,
        rotateY,
        x,
        z,
        zIndex,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius,
          opacity: visibilityOpacity,
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)",
        }}
      />
    </motion.div>
  );
}

const DepthBlurCarousel = ({
  images,
  className = "",
  onActiveIndexChange,
  onCenterClick,
}: DepthBlurCarouselProps) => {
  const dims = useCarouselDimensions();
  const renderItems = useMemo(() => {
    const pool = images.length > 0 ? images : ["/blob.webp"];
    const items: string[] = [];
    while (items.length < 18) items.push(...pool);
    return items;
  }, [images]);

  const poolLength = images.length || 1;
  const totalItems = renderItems.length;
  const scrollTarget = useRef(0);
  const rawScroll = useMotionValue(0);
  const snapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const lastTap = useRef(0);

  const smoothScroll = useSpring(rawScroll, {
    stiffness: 180,
    damping: 100,
    mass: 1,
    restDelta: 0.001,
  });

  const notifyIndex = useCallback(
    (target: number) => {
      const rounded = ((Math.round(target) % poolLength) + poolLength) % poolLength;
      onActiveIndexChange?.(rounded);
    },
    [onActiveIndexChange, poolLength]
  );

  useEffect(() => {
    const unsub = smoothScroll.on("change", (v) => notifyIndex(v));
    return () => unsub();
  }, [smoothScroll, notifyIndex]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta =
      Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY * 0.8;
    scrollTarget.current += delta * 0.004;
    rawScroll.set(scrollTarget.current);
    if (snapTimeout.current) clearTimeout(snapTimeout.current);
    snapTimeout.current = setTimeout(() => {
      scrollTarget.current = Math.round(scrollTarget.current);
      rawScroll.set(scrollTarget.current);
      notifyIndex(scrollTarget.current);
    }, 150);
  };

  const handlePan = (_: unknown, info: { delta: { x: number } }) => {
    scrollTarget.current += -info.delta.x * 0.005;
    rawScroll.set(scrollTarget.current);
    if (snapTimeout.current) clearTimeout(snapTimeout.current);
  };

  const handlePanEnd = (_: unknown, info: { velocity: { x: number } }) => {
    scrollTarget.current += -info.velocity.x * 0.0015;
    scrollTarget.current = Math.round(scrollTarget.current);
    rawScroll.set(scrollTarget.current);
    notifyIndex(scrollTarget.current);
  };

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 350 && onCenterClick) {
      const idx =
        ((Math.round(scrollTarget.current) % poolLength) + poolLength) %
        poolLength;
      onCenterClick(idx);
    }
    lastTap.current = now;
  };

  return (
    <div
      ref={mountRef}
      className={`w-full relative ${className}`}
      style={{
        minHeight: dims.minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: 400,
        overflow: "hidden",
      }}
    >
      <motion.div
        onWheel={handleWheel}
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        onTap={handleTap}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 50,
          cursor: "grab",
          touchAction: "pan-y",
        }}
        whileTap={{ cursor: "grabbing" }}
      />

      <div
        style={{
          position: "relative",
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
        }}
      >
        {renderItems.map((src, i) => (
          <PremiumSmearCard
            key={`card-${i}`}
            src={src}
            index={i}
            total={totalItems}
            smoothScroll={smoothScroll}
            itemWidth={dims.itemWidth}
            itemHeight={dims.itemHeight}
            sideItemWidth={dims.sideItemWidth}
            sideItemHeight={dims.sideItemHeight}
            gap={dims.gap}
            maxRotation={90}
            borderRadius={16}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[20%] md:w-[25%] z-[60]"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[20%] md:w-[25%] z-[60]"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        }}
      />
    </div>
  );
};

export default DepthBlurCarousel;
