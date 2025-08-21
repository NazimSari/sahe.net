"use client";

import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";

interface FestivalData {
  img: string;
  title: string;
  description: string;
  day: string;
  month: string;
}

interface MobileFestivalCardsProps {
  festivalData: FestivalData[];
}

const MobileFestivalCardSlider: React.FC<MobileFestivalCardsProps> = ({
  festivalData,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(festivalData.length); // Orta setten başla

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const leftOffset = 12; // left-3 (12px)

    // Başlangıç pozisyonu: 0. index, left-3 hizasında
    const startX = -(currentIndexRef.current * step) + leftOffset;
    gsap.set(container, { x: startX });

    // Resize olduğunda yeniden hizala
    const handleResize = () => {
      if (!containerRef.current) return;
      const newCard = containerRef.current.querySelector(
        ".slider-card"
      ) as HTMLElement;
      if (!newCard) return;

      const newCardWidth = newCard.clientWidth;
      const newStep = newCardWidth + gap;
      gsap.set(containerRef.current, {
        x: -(currentIndexRef.current * newStep) + leftOffset,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [festivalData]);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const leftOffset = 12; // left-3 (12px)

    // Index güncelle
    if (direction === "left") {
      currentIndexRef.current += 1;
    } else {
      currentIndexRef.current -= 1;
    }

    const targetX = -(currentIndexRef.current * step) + leftOffset;

    gsap.to(container, {
      x: targetX,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        if (!containerRef.current) return;
        let currentX = gsap.getProperty(containerRef.current, "x") as number;
        const totalWidth = step * festivalData.length;

        // Sonsuz kaydırma için pozisyon resetle
        if (currentIndexRef.current >= festivalData.length * 2) {
          // Çok sağa gitti → orta sete al
          currentIndexRef.current -= festivalData.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (currentIndexRef.current < festivalData.length) {
          // Çok sola gitti → orta sete al
          currentIndexRef.current += festivalData.length;
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
    <div className="w-full relative h-[420px] flex items-center overflow-hidden">
      <div
        ref={(node) => {
          containerRef.current = node;
          swipeRef(node);
        }}
        className="flex gap-4 absolute will-change-transform"
        style={{ transform: "translateZ(0)" }}
        {...swipeHandlers}
      >
        {[...festivalData, ...festivalData, ...festivalData].map(
          (festival, index) => (
            <div
              key={index}
              className="slider-card flex-shrink-0 w-[min(85vw,320px)]"
            >
              <div className="flex flex-col gap-2 h-[360px] bg-[#040519] rounded-tl-2xl rounded-tr-2xl shadow-md">
                <div className="relative w-full h-[200px]">
                  <img
                    src={festival.img}
                    alt={festival.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <div className="h-12 w-12 bg-[#FF007A] rounded-lg flex flex-col items-center justify-center font-semibold text-xs text-[#f5f5f5]">
                      <p>{festival.day}</p>
                      <p>{festival.month}</p>
                    </div>
                    <h4 className="text-[#f5f5f5] font-semibold text-lg">
                      {festival.title}
                    </h4>
                  </div>
                  <p className="text-[#f5f5f5] text-sm line-clamp-3">
                    {festival.description}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MobileFestivalCardSlider;
