"use client";

import Link from "next/link";
import CategorySlider from "../SliderGsap/CategorySlider";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function CategorySection() {
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
              Etkinliğini sahneye taşıyacak sanatçıları keşfet
            </h3>
            <p className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2">
              Hayalindeki etkinliği gerçeğe dönüştür! En yetenekli müzisyenlerle{" "}
              tanış ve sahneye kendi hikayeni taşı.
            </p>
          </div>
        </div>
        <CategorySlider />
        <div className="mx-auto container pb-16">
          <div className="flex gap-4 h-full items-center w-fit p-3 md:p-0">
            <Button
              onClick={handleScroll}
              variant="outline"
              className="cursor-pointer px-8"
            >
              Ön Kayıt
            </Button>
            <Link
              href="/etkinlik-turleri"
              className="flex items-center ml-3 text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer"
            >
              {" "}
              Tümünü Gör
              <ChevronRight size={20} className="text-[#FF007A] mt-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
