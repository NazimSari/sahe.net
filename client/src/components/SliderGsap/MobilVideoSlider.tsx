"use client";

import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";

interface VideoData {
  src: string;
  title: string;
}

interface MobileVideoSliderProps {
  videoData: VideoData[];
}

const MobileVideoSlider: React.FC<MobileVideoSliderProps> = ({ videoData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(videoData.length); // Ortadan başla

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const leftOffset = 12; // px → left-3 hizası

    // Başlangıç pozisyonu
    const startX = -(currentIndexRef.current * step) + leftOffset;
    gsap.set(container, { x: startX });

    // Resize'da yeniden hizala
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
  }, [videoData]);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const leftOffset = 12;

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
        const totalWidth = step * videoData.length;

        // Sonsuz kaydırma için reset
        if (currentIndexRef.current >= videoData.length * 2) {
          currentIndexRef.current -= videoData.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (currentIndexRef.current < videoData.length) {
          currentIndexRef.current += videoData.length;
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
        {[...videoData, ...videoData, ...videoData].map((video, index) => (
          <div
            key={index}
            className="slider-card w-[min(80vw,230px)] bg-white min-h-[400px] rounded-xl shadow-lg"
          >
            <div className="relative rounded-xl">
              <iframe
                className="w-full aspect-[9/16] object-cover"
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="h-16 flex items-center justify-center p-2">
              <p>{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileVideoSlider;
