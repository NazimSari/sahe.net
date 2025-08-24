"use client";
import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import { EventData } from "@/lib/data";
import MobileInfoCard from "../Cards/MobileInfoCard";

interface SceneCardsProps {
  data: EventData[];
  type: "artist" | "venue";
}

const MobileInfoCardSwipeSlider: React.FC<SceneCardsProps> = ({
  data,
  type,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(data.length); // ortadaki setten başla

  useEffect(() => {
    if (!containerRef.current || data.length === 0) {
      console.error("Container ref or data is missing");
      return;
    }

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) {
      console.error("No element with class 'slider-card' found");
      return;
    }

    const cardWidth = card.clientWidth || 250;
    const gap = 16;
    const step = cardWidth + gap;
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth - cardWidth) / 2;

    const startX = -(currentIndexRef.current * step - centerOffset);
    gsap.set(container, { x: startX });
  }, [data]);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current || data.length === 0) {
      console.error("Container ref or data is missing");
      return;
    }

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) {
      console.error("No element with class 'slider-card' found");
      return;
    }

    const cardWidth = card.clientWidth || 250;
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
        const total = data.length;

        if (currentIndexRef.current >= total * 2) {
          currentIndexRef.current -= total;
          gsap.set(container, {
            x: -(currentIndexRef.current * step - centerOffset),
          });
        } else if (currentIndexRef.current < total) {
          currentIndexRef.current += total;
          gsap.set(container, {
            x: -(currentIndexRef.current * step - centerOffset),
          });
        }
      },
    });
  };

  // swipe ayarları
  const handlers = useSwipeable({
    onSwipedLeft: () => slideTo("left"),
    onSwipedRight: () => slideTo("right"),
    delta: 10,
    trackMouse: true, // test için true, mobilde false yapabilirsin
    preventScrollOnSwipe: true,
  });
  const { ref: swipeRef, ...swipeHandlers } = handlers;

  return (
    <div className="w-screen relative h-[60vh] flex items-center overflow-hidden">
      <div
        ref={(node) => {
          containerRef.current = node;
          swipeRef(node);
        }}
        className="flex gap-4 absolute will-change-transform"
        {...swipeHandlers}
      >
        {[...data, ...data, ...data].map((item, index) => (
          <MobileInfoCard key={index} item={item} type={type} />
        ))}
      </div>
    </div>
  );
};

export default MobileInfoCardSwipeSlider;
