"use client";

import React, { useRef, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";

interface StepData {
  img: string;
  title: string;
  description: string;
}

interface MobileStepsCardsProps {
  stepsData: StepData[];
}

const MobilePaymentStepsSlider: React.FC<MobileStepsCardsProps> = ({
  stepsData,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const leftOffset = 12; // left-3 (Tailwind'de 3 = 12px)

    // İlk kartın sol kenarı left-3 (12px) hizasında olacak
    const startX = -currentIndex * step + leftOffset;
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
        x: -currentIndex * newStep + leftOffset,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const leftOffset = 12; // left-3 (12px)

    // Yeni index hesapla
    let newIndex = direction === "left" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= stepsData.length) newIndex = 0; // Sona gelirse başa dön
    if (newIndex < 0) newIndex = stepsData.length - 1; // Baştaysa sona git

    const targetX = -newIndex * step + leftOffset;

    gsap.to(container, {
      x: targetX,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        setCurrentIndex(newIndex);
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
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="slider-card flex-shrink-0 w-[min(85vw,320px)]"
          >
            <div className="flex flex-col gap-2 h-[280px] bg-white rounded-lg shadow-md">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-[170px] object-cover rounded-t-lg"
              />
              <div className="p-3 flex flex-col gap-1">
                <h4 className="text-[#1A1A2E] font-semibold text-base">
                  {step.title}
                </h4>
                <p className="text-[#1A1A2E] text-sm line-clamp-2">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Slider noktaları */}
      <div className="absolute bottom-0 left-3 mx-1 flex gap-1">
        {stepsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-[#FF007A] w-6"
                : "bg-gray-400/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobilePaymentStepsSlider;
