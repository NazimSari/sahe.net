"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import MusicTypeSlider from "../SliderGsap/MusicTypeSlider";
import MobilMusicTypeSlider from "../SliderGsap/MobilMusicTypeSlider";
import { LoaderLink } from "../Loader/LoaderLink";

export default function MusicTypeSection() {
  const handleScroll = () => {
    const heroSection = document.getElementById(
      "hero-section"
    ) as HTMLDivElement | null;
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="w-full bg-[#040519] mb-16">
        <div className="container mx-auto px-2">
          <div className="flex flex-col gap-4 h-full justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug md:mt-16 mt-8">
              Her Zevke Uygun Ritimler!
            </h3>
            <p className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2">
              Pop, caz, rock veya klasik… Etkinliğin için mükemmel müzik türünü
              seç en iyi sanatçılarla anını unutulmaz kıl!
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
          <div className="flex gap-4 h-full items-center w-fit px-2">
            <Button
              variant="outline"
              className="cursor-pointer px-8"
              onClick={handleScroll}
            >
              Ön Kayıt
            </Button>
            <LoaderLink
              href="/muzik-turleri"
              className="flex items-center ml-3 text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer"
            >
              {" "}
              Tümünü Gör
              <ChevronRight size={16} className="text-[#FF007A] mt-0.5 ml-2" />
            </LoaderLink>
          </div>
        </div>
      </section>
    </>
  );
}
