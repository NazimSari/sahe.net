"use client";

import React, { useRef, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";

interface InstagramPost {
  id: number;
  title: string;
  src: string;
}

interface InstagramSliderProps {
  posts: InstagramPost[];
}

const MobilInstagramSlider: React.FC<InstagramSliderProps> = ({ posts }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(posts.length); // Ortadan başla
  const currentIndexRef = useRef(posts.length);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;

    // Ekranın merkezini hesapla
    const screenWidth = window.innerWidth;
    const centerOffset = (screenWidth - cardWidth) / 2; // Kartın ekranın tam ortasında başlaması için ofset

    const startX = -(currentIndexRef.current * step) + centerOffset;
    gsap.set(container, { x: startX });

    const handleResize = () => {
      if (!containerRef.current) return;
      const newCard = containerRef.current.querySelector(
        ".slider-card"
      ) as HTMLElement;
      if (!newCard) return;

      const newCardWidth = newCard.clientWidth;
      const newStep = newCardWidth + gap;
      const newScreenWidth = window.innerWidth;
      const newCenterOffset = (newScreenWidth - newCardWidth) / 2;

      gsap.set(containerRef.current, {
        x: -(currentIndexRef.current * newStep) + newCenterOffset,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [posts]);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const screenWidth = window.innerWidth;
    const centerOffset = (screenWidth - cardWidth) / 2; // Ekranın merkezine hizalama

    if (direction === "left") {
      currentIndexRef.current += 1;
    } else {
      currentIndexRef.current -= 1;
    }

    const targetX = -(currentIndexRef.current * step) + centerOffset;

    gsap.to(container, {
      x: targetX,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        if (!containerRef.current) return;
        let currentX = gsap.getProperty(containerRef.current, "x") as number;
        const totalWidth = step * posts.length;

        if (currentIndexRef.current >= posts.length * 2) {
          currentIndexRef.current -= posts.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (currentIndexRef.current < posts.length) {
          currentIndexRef.current += posts.length;
          gsap.set(containerRef.current, { x: currentX - totalWidth });
        }

        setActiveIndex(currentIndexRef.current);
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
    <div className="w-full relative h-[70vh] flex items-center overflow-hidden">
      <div
        ref={(node) => {
          containerRef.current = node;
          swipeRef(node);
        }}
        className="flex gap-4 absolute will-change-transform"
        style={{ transform: "translateZ(0)" }}
        {...swipeHandlers}
      >
        {[...posts, ...posts, ...posts].map((post, index) => {
          const isActive = index === activeIndex; // aktif kart

          return (
            <div
              key={index}
              className={`slider-card w-[min(80vw,230px)] bg-black rounded-xl overflow-hidden aspect-[9/18] flex items-center justify-center transition-transform duration-300 ${
                isActive ? "scale-100 opacity-100" : "scale-90 opacity-70"
              }`}
            >
              <blockquote
                className="instagram-media w-full h-full !max-w-full"
                data-instgrm-permalink={post.src}
                data-instgrm-version="14"
              ></blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobilInstagramSlider;
