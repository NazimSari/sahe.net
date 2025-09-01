import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import FestivalCards from "../Cards/FestivalCards";
import { festivalSectionData } from "@/lib/data";
import MobileFestivalCardSlider from "../SliderGsap/MobilFestivalCardSlider";

const FestivalSection: React.FC = () => {
  return (
    <section className="mx-auto my-16 w-full">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 justify-center px-2">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#1A1A2E] md:leading-snug">
              Müziğin Ritmini Yakala!
            </h3>
            <p className="text-[#1A1A2E] text-sm md:text-base max-w-xl ml-2">
              Türkiye’nin ve dünyanın en iyi müzik festivalleri burada! Rock’tan
              caza, elektronik müzikten popa, unutulmaz anlar yaşayacağın
              etkinlikleri keşfet. Takvimini hazırla, müziğin tadını çıkar!
            </p>
          </div>
          <div className="hidden md:block border border-[#FF007A] py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
            <Link href="/festivaller">
              <span className="flex items-center ml-3">
                Tümünü Gör <ChevronRight size={20} className="mt-1" />
              </span>
            </Link>
          </div>
        </div>
        {/* Geniş ekranlarda FestivalCards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-2">
          {festivalSectionData.map((festival, index) => (
            <FestivalCards key={index} festival={festival} />
          ))}
        </div>
        {/* Mobil ekranlarda MobileFestivalCards */}
        <div className="md:hidden mt-8">
          <MobileFestivalCardSlider festivalData={festivalSectionData} />
        </div>
        <div className="md:hidden border w-fit mt-3 border-[#FF007A] py-2 ml-3 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
          <Link href="/festivaller">
            <span className="flex items-center ml-3">
              Tümünü Gör <ChevronRight size={16} className="mt-0.5 ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
