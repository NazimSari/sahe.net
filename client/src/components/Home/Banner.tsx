"use client";

import React from "react";
import { ContainerTextFlipDemo } from "../Banner/ContainerText";
import { Button } from "../ui/button";

export default function Banner() {
  const handleScroll = () => {
    const heroSection = document.getElementById(
      "hero-section"
    ) as HTMLDivElement | null;
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full mx-auto py-32 flex flex-col justify-center items-center bg-[#160317]">
      <ContainerTextFlipDemo />
      <div className="flex flex-col gap-5 items-center justify-center md:mt-4">
        <p className="text-[#f5f5f5] font-semibold md:text-2xl sm:text-base text-sm">
          Şimdi üye ol, sanatın sınırları aşsın!
        </p>
        <Button
          onClick={handleScroll}
          className="border bg-transparent border-[#FF007A] px-8 py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300 w-fit"
        >
          <span className="flex items-center"> Ön Kayıt</span>
        </Button>
      </div>
    </div>
  );
}
