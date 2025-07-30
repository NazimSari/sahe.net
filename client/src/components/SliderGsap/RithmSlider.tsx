"use client";

import React, { useEffect, useRef } from "react";
import SliderCard from "./SliderCard";
import gsap from "gsap";

const rithmSlider = [
  { path: "/dugun-orkestra.jpg", name: "Düğün Orkestrası" },
  { path: "/etnik-music.jpg", name: "Etnik Müzik" },
  { path: "/jazz-music.jpg", name: "Jazz Müzik" },
  { path: "/rock-music.jpg", name: "Rock Müzik" },
  { path: "/dj-performans.jpg", name: "Elektronik Müzik" },
  { path: "/latin-perkusyon.jpg", name: "Latin Perküsyon" },
];

export default function RithmSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.scrollWidth / 3;

    tl.current = gsap.to(container, {
      x: `+=${width}`,
      ease: "none",
      duration: 30,
      repeat: -1,
      modifiers: {
        x: (x) => {
          const parsedX = parseFloat(x);
          return `${(((parsedX % width) + width) % width) - width}px`;
        },
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
    <div className="w-full relative h-[40vh] flex items-center">
      <div
        ref={containerRef}
        className="flex gap-4 absolute will-change-transform"
        style={{ transform: "translateZ(0)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...rithmSlider, ...rithmSlider, ...rithmSlider].map((item, index) => (
          <SliderCard key={index} path={item.path} name={item.name} />
        ))}
      </div>
    </div>
  );
}
