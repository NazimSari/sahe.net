"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import MusicTypeSlider from "../SliderGsap/MusicTypeSlider";
import MobilMusicTypeSlider from "../SliderGsap/MobilMusicTypeSlider";

export default function MusicTypeSection() {
  const handleScroll = () => {
    const heroSection = document.getElementById(
      "hero-section"
    ) as HTMLDivElement | null;
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="w-full bg-[#040519]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 h-full justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug md:mt-16 mt-8">
              Her Zevke Uygun Ritimler!
            </h3>
            <p className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2">
              Pop, caz, rock veya klasik… Etkinliğin için mükemmel müzik türünü
              seç en iyi müzisyenlerle anını unutulmaz kıl!
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <MusicTypeSlider />
        </div>
        <div className="md:hidden">
          <MobilMusicTypeSlider />
        </div>
        <div className="mx-auto container pb-16">
          <div className="flex gap-4 h-full items-center w-fit p-3 md:p-0">
            <Button
              variant="outline"
              className="cursor-pointer px-8"
              onClick={handleScroll}
            >
              Ön Kayıt
            </Button>
            <span className="flex items-center ml-3 text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer">
              {" "}
              Daha Fazlası İçin{" "}
              <ChevronRight size={20} className="text-[#FF007A] mt-1" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
