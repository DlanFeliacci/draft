"use client";

import React, { useRef, useEffect } from "react";
import { useLenis } from "lenis/react";

const lerp = (start, end, factor) => start + (end - start) * factor;

export default function ParallaxImage({ src, alt }) {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const animate = () => {
      if (imageRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );

        if (
          Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01
        ) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  useLenis(({ scroll }) => {
    if (!bounds.current) return;

    // Calculate relative scroll position
    const relativeScroll = scroll - bounds.current.top;

    // Apply parallax effect in both directions
    targetTranslateY.current = relativeScroll * 0.2;
  });

  return (
    <img
      src={src}
      alt={alt}
      ref={imageRef}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
      }}
    />
  );
}