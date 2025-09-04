"use client";

import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import { Clock, MapPin } from "lucide-react";
import { LoaderLink } from "../Loader/LoaderLink";

interface SingerData {
  url: string;
  name: string;
  category: string[];
  slug: string;
  venue: string;
  hour: string;
  description: string;
}

interface MobileToNightSingerCardSliderProps {
  singerData: SingerData[];
}

const MobileToNightSingerSlider: React.FC<
  MobileToNightSingerCardSliderProps
> = ({ singerData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(singerData.length); // Orta setten başla

  useEffect(() => {
    if (!containerRef.current || singerData.length === 0) {
      console.error("Container ref or singerData is missing");
      return;
    }

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) {
      console.error("No element with class 'slider-card' found");
      return;
    }

    const cardWidth = card.clientWidth || 320;
    const gap = 16;
    const step = cardWidth + gap;
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth - cardWidth) / 2;

    // Başlangıç pozisyonu: 0. index, merkeze hizalı
    const startX = -(currentIndexRef.current * step - centerOffset);
    gsap.set(container, { x: startX });

    // Resize olduğunda yeniden hizala
    const handleResize = () => {
      if (!containerRef.current) return;
      const newCard = containerRef.current.querySelector(
        ".slider-card"
      ) as HTMLElement;
      if (!newCard) return;

      const newCardWidth = newCard.clientWidth || 320;
      const newStep = newCardWidth + gap;
      const newViewportWidth = window.innerWidth;
      const newCenterOffset = (newViewportWidth - newCardWidth) / 2;
      gsap.set(containerRef.current, {
        x: -(currentIndexRef.current * newStep - newCenterOffset),
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [singerData]);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current || singerData.length === 0) {
      console.error("Container ref or singerData is missing");
      return;
    }

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) {
      console.error("No element with class 'slider-card' found");
      return;
    }

    const cardWidth = card.clientWidth || 320;
    const gap = 16;
    const step = cardWidth + gap;
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth - cardWidth) / 2;

    // Index güncelle
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
        const total = singerData.length;

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

  const handlers = useSwipeable({
    onSwipedLeft: () => slideTo("left"),
    onSwipedRight: () => slideTo("right"),
    delta: 10,
    trackMouse: true, // Test için true, mobilde false yapabilirsin
    preventScrollOnSwipe: true,
  });
  const { ref: swipeRef, ...swipeHandlers } = handlers;

  return (
    <div className="w-screen relative h-[50vh] flex items-center overflow-hidden">
      <div
        ref={(node) => {
          containerRef.current = node;
          swipeRef(node);
        }}
        className="flex gap-4 absolute will-change-transform"
        style={{ transform: "translateZ(0)" }}
        {...swipeHandlers}
      >
        {[...singerData, ...singerData, ...singerData].map((singer, index) => (
          <LoaderLink
            href={`/sanatci-detay/${singer.slug}`}
            key={index}
            className="slider-card flex-shrink-0 w-[min(85vw,320px)] h-[48vh]"
          >
            <div className="relative h-full bg-[#040519] rounded-md shadow-md">
              <img
                src={singer.url}
                alt={singer.name}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />
              <span className="absolute top-3 left-3 text-[#160317] px-3 py-1 bg-[#f5f5f5] rounded-lg text-sm font-semibold z-10">
                {singer.category}
              </span>
              <div className="absolute bottom-3 left-2 text-[#f5f5f5] font-semibold text-center z-10 whitespace-nowrap">
                <div className="text-[#f5f5f5] text-sm font-semibold">
                  <p className="flex items-center gap-2">
                    <MapPin size={16} color="#FF007A" strokeWidth={3} />
                    {singer.venue}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={16} color="#FF007A" strokeWidth={3} />
                    <span>{singer.hour}</span>
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex justify-center items-center">
                <p className="text-[#f5f5f5] text-3xl font-semibold">
                  {singer.name}
                </p>
              </div>
            </div>
          </LoaderLink>
        ))}
      </div>
    </div>
  );
};

export default MobileToNightSingerSlider;
