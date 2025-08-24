"use client";

import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import VenuesSectionMobileSwipeCard from "../Cards/VenuesSectionMobileSwipeCard";

interface VenueData {
  img: string;
  title: string;
  isLarge?: boolean;
}

interface MobileVenueSliderProps {
  venueData: VenueData[];
}

const VenuesSectionMobilSwipeSlider: React.FC<MobileVenueSliderProps> = ({
  venueData,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(venueData.length); // Orta setten başla

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
  }, [venueData]);

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
        const totalWidth = step * venueData.length;

        // Sonsuz kaydırma için pozisyon resetle
        if (currentIndexRef.current >= venueData.length * 2) {
          // Çok sağa gitti → orta sete al
          currentIndexRef.current -= venueData.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (currentIndexRef.current < venueData.length) {
          // Çok sola gitti → orta sete al
          currentIndexRef.current += venueData.length;
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
        {[...venueData, ...venueData, ...venueData].map((venue, index) => (
          <VenuesSectionMobileSwipeCard
            key={index}
            venue={venue}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default VenuesSectionMobilSwipeSlider;
