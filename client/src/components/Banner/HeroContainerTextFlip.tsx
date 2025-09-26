"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface HeroContainerTextFlipProps {
  words?: string[];
  interval?: number;
  startDelay?: number; // ✅ yeni prop
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function HeroContainerTextFlip({
  words = ["duyur", "sergile", "paylaş", "büyüt"],
  interval = 3000,
  startDelay = 0, // ✅ default 0
  className,
  textClassName,
  animationDuration = 700,
}: HeroContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // ✅ En uzun kelimenin genişliğini hesapla
  useEffect(() => {
    if (!textRef.current) return;

    let maxWidth = 0;
    words.forEach((word) => {
      const span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.position = "absolute";
      span.style.whiteSpace = "nowrap";
      span.style.fontSize = getComputedStyle(textRef.current!).fontSize;
      span.style.fontWeight = getComputedStyle(textRef.current!).fontWeight;
      span.innerText = word;
      document.body.appendChild(span);
      maxWidth = Math.max(maxWidth, span.scrollWidth);
      document.body.removeChild(span);
    });

    setWidth(maxWidth);
  }, [words]);

  // ✅ Kelime değiştirme - startDelay eklendi
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, interval);

      return () => clearInterval(intervalId);
    }, startDelay);

    return () => clearTimeout(timeoutId);
  }, [words, interval, startDelay]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block text-[#FF007A] font-semibold",
        className
      )}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
