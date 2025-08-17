"use client";

import React, { useRef, useEffect } from "react";
import SliderCard from "./SliderCard";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";

const categoriesSlider = [
  { path: "/dugun.jpg", name: "Düğün" },
  { path: "/ozel-cekim.jpg", name: "Özel Çekim" },
  { path: "/baby-shower.jpg", name: "Bebek Partisi" },
  { path: "/happy-hour.jpg", name: "Mutlu Saatler" },
  { path: "/dj-performans.jpg", name: "DJ Performansı" },
  { path: "/dogum-gunu.jpg", name: "Doğum Günü" },
];

export default function MobilSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0); // Aktif kartın indeksini tut

  // Başlangıç pozisyonunu ayarla
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth =
      container.querySelector(".slider-card")?.clientWidth || 250;
    const gap = 16; // gap-4 = 16px
    const totalWidth = (cardWidth + gap) * categoriesSlider.length; // Tek setin genişliği
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth - cardWidth) / 2; // Ekranın ortasına hizalamak için ofset

    // Başlangıç pozisyonunu orta sete ve ilk kartın ortasına ayarla
    const initialX = -(totalWidth + centerOffset);
    gsap.set(container, { x: initialX });
  }, []);

  // Kartı ekranın ortasına hizala ve sonsuz kaydırmayı yönet
  const centerCard = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth =
      container.querySelector(".slider-card")?.clientWidth || 250;
    const gap = 16; // gap-4 = 16px
    const totalWidth = (cardWidth + gap) * categoriesSlider.length; // Tek setin genişliği
    const viewportWidth = window.innerWidth;
    const centerOffset = (viewportWidth - cardWidth) / 2; // Ekranın ortasına hizalamak için ofset

    // Aktif kart indeksini güncelle
    if (direction === "left") {
      currentIndexRef.current = currentIndexRef.current + 1;
    } else {
      currentIndexRef.current = currentIndexRef.current - 1;
    }

    // Aktif kartın pozisyonunu hesapla (orta setten)
    const activeCardOffset =
      (cardWidth + gap) *
      ((currentIndexRef.current % categoriesSlider.length) +
        categoriesSlider.length);
    const targetX = -(activeCardOffset - centerOffset);

    gsap.to(container, {
      x: targetX,
      duration: 0.3,
      ease: "power2.out",
      onUpdate: () => {
        // Animasyon sırasında pozisyonu kontrol et
        if (containerRef.current) {
          const currentX = gsap.getProperty(
            containerRef.current,
            "x"
          ) as number;
          if (currentX < -totalWidth * 2) {
            gsap.set(containerRef.current, { x: currentX + totalWidth });
            currentIndexRef.current -= categoriesSlider.length;
          } else if (currentX > -totalWidth) {
            gsap.set(containerRef.current, { x: currentX - totalWidth });
            currentIndexRef.current += categoriesSlider.length;
          }
        }
      },
    });
  };

  // Swipe handlers for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => centerCard("left"),
    onSwipedRight: () => centerCard("right"),
    trackMouse: false, // Only track touch events
    delta: 10, // Minimum swipe distance
  });

  // handlers içinden ref'i hariç tut
  const { ref, ...swipeHandlers } = handlers;

  return (
    <div className="w-full relative h-[40vh] flex items-center overflow-hidden">
      <div
        ref={(node) => {
          containerRef.current = node; // containerRef'e atama
          ref(node); // useSwipeable'a atama
        }}
        className="flex gap-4 absolute will-change-transform"
        style={{ transform: "translateZ(0)" }}
        {...swipeHandlers} // ref hariç diğer handler'ları yay
      >
        {[...categoriesSlider, ...categoriesSlider, ...categoriesSlider].map(
          (item, index) => (
            <div key={index} className="slider-card">
              <SliderCard path={item.path} name={item.name} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
