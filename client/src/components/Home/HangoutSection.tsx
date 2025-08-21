import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import HangoutCards from "../Cards/HangoutCards";
import { hangoutSectionData } from "@/lib/data";
import MobileHangoutSlider from "../SliderGsap/MobilHangoutSlider";

const HangoutSection: React.FC = () => {
  return (
    <section className="mx-auto my-16 pb-16 w-full">
      <div className="container mx-auto md:p-0">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#1A1A2E] md:leading-snug">
              Bu Akşam Nereye Gidelim?
            </h3>
            <p className="text-[#1A1A2E] text-sm md:text-base max-w-xl ml-2">
              Canlı müzikle coşmak, VIP bir DJ partisinde dans etmek ya da sakin
              bir kokteyl gecesi mi istiyorsun? Türkiye’nin en iyi mekanlarını
              senin için derledik. Ruh haline göre bir kategori seç, geceyi
              unutulmaz kıl!
            </p>
          </div>
          <div className="hidden lg:block border border-[#FF007A] py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
            <Link href="/mekanlar">
              <span className="flex items-center ml-3">
                Tümünü Gör
                <ChevronRight size={20} className="mt-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 md:gap-3 mt-10 px-2">
          {hangoutSectionData.map((hangout, index) => (
            <HangoutCards key={index} hangout={hangout} />
          ))}
        </div>
        {/* Mobil ekranlarda MobileHangoutCardSlider */}
        <div className="md:hidden mt-8">
          <MobileHangoutSlider hangoutData={hangoutSectionData} />
        </div>
        <div className="lg:hidden border w-fit mt-5 border-[#FF007A] py-2 ml-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
          <Link href="/mekanlar">
            <span className="flex items-center ml-3">
              Tümünü Gör <ChevronRight size={16} className="mt-0.5 ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HangoutSection;
