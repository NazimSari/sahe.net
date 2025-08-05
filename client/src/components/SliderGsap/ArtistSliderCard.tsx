"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";
import Link from "next/link";

interface CardProps {
  path: string;
  name: string;
  category: string;
}

const ArtistSliderCard: React.FC<CardProps> = ({ path, name, category }) => {
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
    <>
      <div className="w-[60vw] max-w-[250px] aspect-auto overflow-hidden">
        {/* Görsel alanı */}
        <div className="relative w-full h-[350px] group rounded-lg overflow-hidden">
          <Image
            src={path}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-300"
          />

          {/* Overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black opacity-0 pointer-events-none"
          ></div>

          {/* Buton */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Link
              href={`/artist/${category}`}
              ref={buttonRef}
              className="bg-white font-semibold text-sm px-3 py-2 rounded-lg flex items-center gap-1 opacity-0 translate-y-2  hover:opacity-75"
            >
              <span>İncele</span>
            </Link>
          </div>
        </div>

        {/* Alt kısım - her zaman görünen metin */}
        <div className="mt-2 flex flex-col justify-center items-center">
          <p className="text-[#f5f5f5] text-xs">{category}</p>
          <h3 className="text-sm font-semibold mt-2 text-[#f5f5f5]">{name}</h3>
        </div>
      </div>
    </>
  );
};

export default ArtistSliderCard;
