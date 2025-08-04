"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

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

const getWrappedIndex = (index: number, length: number) => {
  return (index + length) % length;
};

const SliderCard = () => {
  const [centerIndex, setCenterIndex] = useState(2);
  const directionRef = useRef<"left" | "right">("right");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNext = () => {
    directionRef.current = "right";
    setCenterIndex((prev) => (prev + 1) % artists.length);
  };

  const handlePrev = () => {
    directionRef.current = "left";
    setCenterIndex((prev) => (prev - 1 + artists.length) % artists.length);
  };

  useEffect(() => {
    const total = artists.length;

    for (let i = 0; i < total; i++) {
      const ref = cardRefs.current[i];
      if (!ref) continue;

      const relativePos = getWrappedIndex(i - centerIndex, total);

      let visualIndex = i - centerIndex;
      if (visualIndex > total / 2) visualIndex -= total;
      if (visualIndex < -total / 2) visualIndex += total;

      const scale = visualIndex === 0 ? 1 : 0.7;
      const x = visualIndex * 180;
      const zIndex = 10 - Math.abs(visualIndex);

      const fromX = directionRef.current === "right" ? 300 : -300;

      if (visualIndex === 0) {
        gsap.fromTo(
          ref,
          { x: fromX, opacity: 0, scale: 0.6 },
          { x, scale, opacity: 1, duration: 0.02, zIndex, ease: "power4.out" }
        );
      } else {
        gsap.to(ref, {
          x,
          scale,
          opacity: Math.abs(visualIndex) <= 2 ? 1 : 0,
          duration: 0.2,
          zIndex,
          ease: "power3.out",
        });
      }
    }
  }, [centerIndex]);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Container – sadece slider ve oklar */}
      <div className="relative w-[800px] h-[400px] flex items-center justify-center mx-auto">
        {/* Sol ok - slider container'ın sol dışına konumlandırılıyor */}
        <button
          onClick={handlePrev}
          className="absolute -left-40 z-50 p-2 bg-white shadow-md rounded-full hover:bg-zinc-100 transition cursor-pointer"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Kartlar */}
        {artists.map((artist, i) => {
          const isCenter = i === centerIndex;

          return (
            <div
              key={artist.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onClick={() => {
                if (isCenter) {
                  console.log("Tıklanan artist:", artist.name);
                  // Buraya yönlendirme, modal vs. koyabilirsin
                }
              }}
              className={`absolute w-[300px] h-[400px] bg-white shadow-xl rounded-xl overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ${
                isCenter
                  ? "cursor-pointer"
                  : "pointer-events-none cursor-default"
              }`}
            >
              <Image
                src={artist.imageUrl}
                alt={artist.name}
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 bg-black/60 w-full text-white text-center p-2">
                <p className="text-sm">{artist.category}</p>
                <h3 className="text-lg font-bold">{artist.name}</h3>
              </div>
            </div>
          );
        })}

        {/* Sağ ok */}
        <button
          onClick={handleNext}
          className="absolute -right-40 z-50 p-2 bg-white shadow-md rounded-full hover:bg-zinc-100 transition cursor-pointer"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
