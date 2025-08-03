"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SubscriptionSection() {
  const handleScroll = () => {
    const heroSection = document.getElementById(
      "hero-section"
    ) as HTMLDivElement | null;
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="w-full py-16 bg-[url('/abonelik.jpg')] bg-cover bg-top">
      <div className="container mx-auto h-full">
        <div className="flex flex-col gap-6 h-full justify-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold text-[#040519] md:leading-snug">
              Festival ve Etkinlik Haberleri
            </h3>
            <p className="text-[#040519] text-sm md:text-base max-w-4xl text-center">
              En yeni festivaller, mekanlardaki sanatçı haberleri ve özel
              etkinlikler parmaklarının ucunda! Üye ol, müziğin ritmini kaçırma
              ve topluluğumuzun bir parçası ol.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto gap-5">
            <Input
              placeholder="E-posta adresinizi girin"
              className="p-6 border-1 border-[#040519] placeholder:text-[#040519] text-[#040519] font-semibold focus:border-[#FF007A]"
            />
            <Button
              onClick={handleScroll}
              size={"lg"}
              className="cursor-pointer w-fit"
            >
              Ön Kayıt
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
