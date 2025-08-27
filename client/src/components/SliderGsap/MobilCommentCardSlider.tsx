// components/Cards/MobileCommentCardSlider.tsx
"use client";

import { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import MobilCommentCard from "../Cards/MobilCommentCard";

type Comment = {
  name: string;
  date: string;
  comment: string;
};

interface MobileCommentCardSliderProps {
  comments: Comment[];
}

export default function MobilCommentCardSlider({
  comments,
}: MobileCommentCardSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(comments.length); // orta setten başla

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const leftOffset = 12;

    const startX = -(currentIndexRef.current * step) + leftOffset;
    gsap.set(container, { x: startX });

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
  }, [comments]);

  const slideTo = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector(".slider-card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const leftOffset = 12;

    direction === "left"
      ? (currentIndexRef.current += 1)
      : (currentIndexRef.current -= 1);

    const targetX = -(currentIndexRef.current * step) + leftOffset;

    gsap.to(container, {
      x: targetX,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        if (!containerRef.current) return;
        let currentX = gsap.getProperty(containerRef.current, "x") as number;
        const totalWidth = step * comments.length;

        if (currentIndexRef.current >= comments.length * 2) {
          currentIndexRef.current -= comments.length;
          gsap.set(containerRef.current, { x: currentX + totalWidth });
        } else if (currentIndexRef.current < comments.length) {
          currentIndexRef.current += comments.length;
          gsap.set(containerRef.current, { x: currentX - totalWidth });
        }
      },
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slideTo("left"),
    onSwipedRight: () => slideTo("right"),
    delta: 10,
    trackMouse: true,
  });

  const { ref: swipeRef, ...swipeHandlers } = handlers;

  return (
    <div className="w-full relative h-[320px] flex items-center overflow-hidden">
      <div
        ref={(node) => {
          containerRef.current = node;
          swipeRef(node);
        }}
        className="flex gap-4 absolute will-change-transform"
        {...swipeHandlers}
      >
        {[...comments, ...comments, ...comments].map((c, i) => (
          <div
            key={i}
            className="slider-card flex-shrink-0 w-[min(85vw,320px)]"
          >
            <MobilCommentCard name={c.name} date={c.date} comment={c.comment} />
          </div>
        ))}
      </div>
    </div>
  );
}
