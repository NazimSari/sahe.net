"use client";

import React, { useRef, useEffect, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(videoData.length); // Ortadan başla
  const currentIndexRef = useRef(videoData.length);

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
  }, [videoData]);

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
        const totalWidth = step * videoData.length;

        if (currentIndexRef.current >= videoData.length * 2) {
          currentIndexRef.current -= videoData.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (currentIndexRef.current < videoData.length) {
          currentIndexRef.current += videoData.length;
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
        {[...videoData, ...videoData, ...videoData].map((video, index) => {
          const isActive = index === activeIndex; // aktif kartı belirle

          return (
            <div
              key={index}
              className={`slider-card w-[min(80vw,230px)] bg-white min-h-[400px] rounded-xl shadow-lg ${
                isActive ? "scale-100" : "scale-90 opacity-70"
              } transition-transform duration-300`}
            >
              <div className="relative rounded-xl">
                <iframe
                  className="w-full aspect-[9/16] object-cover"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    pointerEvents: isActive ? "auto" : "none", // sadece aktif kart tıklanabilir
                  }}
                ></iframe>
              </div>
              {/* <div className="h-16 flex items-center justify-center p-2">
                <p>{video.title}</p>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileVideoSlider;
