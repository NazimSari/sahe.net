"use client";

import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import { mekanDetaySayfasiHaftalikProgramData } from "@/lib/data";
import MobilVenueDetailsPageThisWeekInfoCard from "../Cards/MobilVenueDetailsPageThisWeekInfoCard";

export default function MobilVenueDetailsPageThisWeekSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(mekanDetaySayfasiHaftalikProgramData.length); // Ortadaki setten başla

  // Başlangıç pozisyonu
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth; // kart genişliğini DOM’dan al
    const gap = 16;
    const step = cardWidth + gap;
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth - cardWidth) / 2;

    const startX = -(currentIndexRef.current * step - centerOffset);
    gsap.set(container, { x: startX });
  }, []);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth; // her swipe’de güncel genişlik alınıyor
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
      ease: "power2.inOut",
      onComplete: () => {
        if (!containerRef.current) return;
        let currentX = gsap.getProperty(containerRef.current, "x") as number;
        const totalWidth = step * mekanDetaySayfasiHaftalikProgramData.length;

        // Sonsuz kaydırma resetleme
        if (
          currentIndexRef.current >=
          mekanDetaySayfasiHaftalikProgramData.length * 2
        ) {
          currentIndexRef.current -=
            mekanDetaySayfasiHaftalikProgramData.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (
          currentIndexRef.current < mekanDetaySayfasiHaftalikProgramData.length
        ) {
          currentIndexRef.current +=
            mekanDetaySayfasiHaftalikProgramData.length;
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
    <div className="w-full relative h-[375px] flex items-center">
      <div
        ref={(node) => {
          containerRef.current = node;
          swipeRef(node);
        }}
        className="flex gap-4 absolute will-change-transform"
        style={{ transform: "translateZ(0)" }}
        {...swipeHandlers}
      >
        {[
          ...mekanDetaySayfasiHaftalikProgramData,
          ...mekanDetaySayfasiHaftalikProgramData,
          ...mekanDetaySayfasiHaftalikProgramData,
        ].map((item, index) => (
          <div
            key={index}
            className="slider-card flex-shrink-0 w-[min(80vw,275px)]"
          >
            <MobilVenueDetailsPageThisWeekInfoCard
              name={item.name}
              day={item.day}
              time={item.time}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
