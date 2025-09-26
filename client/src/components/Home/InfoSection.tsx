"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { LoaderLink } from "../Loader/LoaderLink";

export default function InfoSection() {
  const handleScroll = () => {
    const heroSection = document.getElementById(
      "hero-section"
    ) as HTMLDivElement | null;
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="mx-auto py-32 w-full bg-[#040519]">
      <div className="container w-full mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-4 justify-center lg:justify-between items-center h-full text-center lg:text-left">
          {/* Başlık */}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] leading-snug max-w-2xl">
            Oksijeni Müzik Olanların Sahnesi!
          </h3>

          {/* Açıklama + Butonlar */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-5 max-w-xl">
            <p className="text-[#f5f5f5] text-sm md:text-lg leading-relaxed">
              Biz, sanatçıların yeteneklerini dünyaya duyurabileceği,
              dinleyicilerin ise unutulmaz müzik deneyimleri yaşayabileceği bir
              platform yaratıyoruz. Her nota, bir bağ kurar; her ritim, bir
              hikaye anlatır. Sen de bu hikayenin parçası ol!
            </p>

            <div className="flex  items-center gap-4 w-fit">
              <Button
                onClick={handleScroll}
                variant="outline"
                className="cursor-pointer px-8"
              >
                Ön Kayıt
              </Button>
              <LoaderLink
                href={"/hakkimizda"}
                className="flex items-center text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer"
              >
                Daha Fazlası İçin{" "}
                <ChevronRight
                  size={16}
                  className="text-[#FF007A] mt-0.5 ml-2"
                />
              </LoaderLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
