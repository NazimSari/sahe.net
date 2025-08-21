"use client";

import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";

interface HangoutData {
  img: string;
  title: string;
  isLarge?: boolean;
}

interface MobileHangoutCardsProps {
  hangoutData: HangoutData[];
}

const MobileHangoutSlider: React.FC<MobileHangoutCardsProps> = ({
  hangoutData,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(hangoutData.length); // Orta setten başla

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
  }, [hangoutData]);

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
        const totalWidth = step * hangoutData.length;

        // Sonsuz kaydırma için pozisyon resetle
        if (currentIndexRef.current >= hangoutData.length * 2) {
          // Çok sağa gitti → orta sete al
          currentIndexRef.current -= hangoutData.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (currentIndexRef.current < hangoutData.length) {
          // Çok sola gitti → orta sete al
          currentIndexRef.current += hangoutData.length;
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
    <div className="w-full relative h-[360px] flex items-center overflow-hidden">
      <div
        ref={(node) => {
          containerRef.current = node;
          swipeRef(node);
        }}
        className="flex gap-4 absolute will-change-transform"
        style={{ transform: "translateZ(0)" }}
        {...swipeHandlers}
      >
        {[...hangoutData, ...hangoutData, ...hangoutData].map(
          (hangout, index) => (
            <div
              key={index}
              className="slider-card flex-shrink-0 w-[min(85vw,320px)]"
            >
              <div className="relative h-[300px] bg-[#040519] rounded-tl-2xl rounded-tr-2xl shadow-md">
                <img
                  src={hangout.img}
                  alt={hangout.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
                <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
                  <h4 className="text-[#FF007A] text-lg font-semibold">
                    {hangout.title}
                  </h4>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MobileHangoutSlider;
