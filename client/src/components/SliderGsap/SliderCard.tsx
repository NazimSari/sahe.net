"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface CardProps {
  path: string;
  name: string;
  id: number;
  slug: string;
}

const SliderCard: React.FC<CardProps> = ({ path, name, slug }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !buttonRef.current) return;

    // Overlay ve butonun başlangıç durumu
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(buttonRef.current, { y: 10, opacity: 0 });

    // GSAP timeline ile animasyon
    const tl = gsap.timeline({ paused: true });
    tl.to(overlayRef.current, {
      opacity: 0.5,
      duration: 0.3,
      ease: "power2.out",
    }).to(
      buttonRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.2" // Buton animasyonu overlay ile hafif örtüşsün
    );

    // Mouse olayları
    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    const container = overlayRef.current.parentElement;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      tl.kill();
    };
  }, []);

  return (
    <div className="relative w-[60vw] max-w-[250px] aspect-square overflow-hidden bg-white flex justify-center items-center rounded-lg">
      <Image
        src={path}
        alt={name}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 60vw, 250px"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none"
      ></div>
      <div className="absolute bottom-0 left-0 bg-black/70 h-16 w-full">
        <span className="z-50 text-white flex items-center h-full justify-center font-semibold">
          {name}
        </span>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <a
          href={`etkinlik-turleri/${slug}`}
          ref={buttonRef}
          className="bg-white font-semibold text-sm px-3 py-2 rounded-lg flex items-center gap-1 hover:opacity-75 cursor-pointer"
        >
          <span>İncele</span>
        </a>
      </div>
    </div>
  );
};

export default SliderCard;
