"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chairImgRef = useRef<HTMLDivElement>(null);
  const doctorImgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const chairImg = chairImgRef.current;
    const doctorImg = doctorImgRef.current;
    const overlay = overlayRef.current;
    if (!container || !chairImg || !doctorImg || !overlay) return;

    function onScroll() {
      const rect = container.getBoundingClientRect();
      const totalHeight = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));

      if (progress <= 0.35) {
        const p = progress / 0.35;
        const scale = 1 + p * 2;
        chairImg.style.transform = "scale(" + scale + ")";
        chairImg.style.borderRadius = (32 - p * 32) + "px";
        chairImg.style.filter = "brightness(" + (1 + p * 0.2) + ")";
        doctorImg.style.opacity = "0";
        doctorImg.style.transform = "scale(1) translateX(0%)";
        overlay.style.opacity = "0";
      } else if (progress <= 0.65) {
        const p = (progress - 0.35) / 0.30;
        const rotation = p * 360;
        chairImg.style.transform = "scale(3) rotateY(" + rotation + "deg)";
        chairImg.style.borderRadius = "0px";
        chairImg.style.filter = "brightness(" + (1.2 - p * 0.2) + ")";
        doctorImg.style.opacity = p > 0.5 ? String((p - 0.5) / 0.5) : "0";
        doctorImg.style.transform = "scale(1) translateX(0%)";
        overlay.style.opacity = "0";
      } else {
        const p = (progress - 0.65) / 0.35;
        chairImg.style.transform = "scale(" + (3 - p * 2.4) + ")";
        chairImg.style.borderRadius = (p * 32) + "px";
        chairImg.style.filter = "brightness(1) opacity(" + (1 - p) + ")";
        doctorImg.style.opacity = "1";
        const scale = 1 - p * 0.5;
        const translateX = p * 50;
        doctorImg.style.transform = "scale(" + scale + ") translateX(" + translateX + "%)";
        doctorImg.style.transformOrigin = "right center";
        overlay.style.opacity = String(Math.min(p * 2, 1));
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={chairImgRef}
          className="absolute inset-0 will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <Image
            src="/smile-elevated/hero-clinic.jpg"
            alt="Cabinet dentaire Dr Dardar Karim"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          ref={doctorImgRef}
          className="absolute inset-0 will-change-transform"
          style={{ opacity: 0, transformOrigin: "right center" }}
        >
          <Image
            src="/dr-dardar-karim-consultation.jpg"
            alt="Dr Dardar Karim en consultation"
            fill
            className="object-cover"
          />
        </div>
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0,
            background: "linear-gradient(to right, rgba(240,248,255,0.95) 0%, rgba(240,248,255,0.4) 50%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
