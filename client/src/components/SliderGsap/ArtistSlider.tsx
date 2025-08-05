"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ArtistSliderCard from "./ArtistSliderCard";

interface Artist {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
}

const artists: Artist[] = [
  { id: 1, name: "Artist 1", category: "Pop", imageUrl: "/dj-performans.jpg" },
  { id: 2, name: "Artist 2", category: "Rock", imageUrl: "/rock-music.jpg" },
  { id: 3, name: "Artist 3", category: "Jazz", imageUrl: "/jazz-music.jpg" },
  {
    id: 4,
    name: "Artist 4",
    category: "Hip-Hop",
    imageUrl: "/latin-perkusyon.jpg",
  },
  { id: 5, name: "Artist 5", category: "Electronic", imageUrl: "/nefes.jpg" },
];

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
          {[...artists, ...artists, ...artists].map((item, index) => (
            <ArtistSliderCard
              key={index}
              path={item.imageUrl}
              name={item.name}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
