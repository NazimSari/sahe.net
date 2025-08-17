"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ArtistSliderCard from "./ArtistSliderCard";
import { artistsSlider } from "@/lib/data";

export default function ArtistSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.scrollWidth / 3;

    tl.current = gsap.to(container, {
      x: `-=${width}`,
      ease: "none",
      duration: 30,
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % width}px`,
      },
    });

    return () => {
      tl.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    tl.current?.timeScale(0.2); // çok yavaşlat
  };

  const handleMouseLeave = () => {
    tl.current?.timeScale(1); // normale döndür
  };
  return (
    <div className="relative">
      <div className="w-full relative h-[40vh] flex items-center">
        <div
          ref={containerRef}
          className="flex gap-4 absolute will-change-transform"
          style={{ transform: "translateZ(0)" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...artistsSlider, ...artistsSlider, ...artistsSlider].map(
            (item, index) => (
              <ArtistSliderCard
                key={index}
                path={item.imageUrl}
                name={item.name}
                category={item.category}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
