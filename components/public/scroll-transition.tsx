// Scroll transition cinematic animation
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
