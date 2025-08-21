"use client";

import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import MobilSliderCard from "../Cards/MobilSliderCard";
import { musicTypesSlider } from "@/lib/data";

export default function MobilMusicTypeSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(musicTypesSlider.length); // Ortadaki setten başla

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth =
      container.querySelector(".slider-card")?.clientWidth || 250;
    const gap = 16;
    const step = cardWidth + gap;
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth - cardWidth) / 2;

    // Başlangıç pozisyonu → orta setin ilk kartı
    const startX = -(currentIndexRef.current * step - centerOffset);
    gsap.set(container, { x: startX });
  }, []);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth - cardWidth) / 2;

    // index güncelle
    if (direction === "left") {
      currentIndexRef.current += 1;
    } else {
      currentIndexRef.current -= 1;
    }

    const targetX = -(currentIndexRef.current * step - centerOffset);

    gsap.to(container, {
      x: targetX,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        if (!containerRef.current) return;
        let currentX = gsap.getProperty(containerRef.current, "x") as number;
        const totalWidth = step * musicTypesSlider.length;

        // Sonsuz kaydırma için pozisyon resetle
        if (currentIndexRef.current >= musicTypesSlider.length * 2) {
          // Çok sağa gitti → orta sete al
          currentIndexRef.current -= musicTypesSlider.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (currentIndexRef.current < musicTypesSlider.length) {
          // Çok sola gitti → orta sete al
          currentIndexRef.current += musicTypesSlider.length;
          gsap.set(containerRef.current, { x: currentX - totalWidth });
        }
      },
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slideTo("left"),
    onSwipedRight: () => slideTo("right"),
    delta: 10,
    trackMouse: false,
  });
  const { ref: swipeRef, ...swipeHandlers } = handlers;
  return (
    <div className="w-full relative h-[40vh] flex items-center overflow-hidden">
      <div
        ref={(node) => {
          containerRef.current = node;
          swipeRef(node);
        }}
        className="flex gap-4 absolute will-change-transform"
        style={{ transform: "translateZ(0)" }}
        {...swipeHandlers}
      >
        {[...musicTypesSlider, ...musicTypesSlider, ...musicTypesSlider].map(
          (item, index) => (
            <div key={index} className="slider-card">
              <MobilSliderCard path={item.path} name={item.name} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
