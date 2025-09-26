"use client";
import { ChevronRight, Star } from "lucide-react";
import { sahneData } from "@/lib/data";
import InfoCard from "../Cards/InfoCard";
import MobileInfoCardSwipeSlider from "../SliderGsap/MobileInfoCardSwipeSlider";
import { LoaderLink } from "../Loader/LoaderLink";

export default function StageStarsSection() {
  return (
    <>
      <section id="scene-stars" className="mx-auto  my-16">
        <div className="container mx-auto px-2 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4  justify-center">
              <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#1A1A2E] md:leading-snug">
                Sahnenin Yıldızları
              </h3>
              <div
                id="scene-paragraf"
                className="text-[#1A1A2E] text-sm md:text-base max-w-xl ml-2"
              >
                <span className="bg-yellow-400 px-2 py-1 rounded-lg font-semibold">
                  Sahnenin Yıldızı
                </span>{" "}
                rozetine sahip en çok ilgi gören sanatçılar burada..
                Performanslarıyla sahnenin yıldızlarını şimdi keşfet!
              </div>
            </div>
            <div className="hidden md:block border border-[#FF007A] py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
              <LoaderLink href="/etkinlik-turleri/dugun">
                <span className="flex items-center ml-3">
                  {" "}
                  Daha Fazlası İçin{" "}
                  <ChevronRight size={16} className="mt-0.5" />
                </span>
              </LoaderLink>
            </div>
          </div>
          <div className="mt-8 hidden md:block">
            <InfoCard data={sahneData} type="artist" />
          </div>
          <div className="md:hidden">
            <MobileInfoCardSwipeSlider data={sahneData} type="artist" />
          </div>
          <div className="md:hidden border w-fit  border-[#FF007A] py-2 ml-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
            <LoaderLink href="/etkinlik-turleri/dugun">
              <span className="flex items-center ml-3">
                {" "}
                Daha Fazlası İçin <ChevronRight size={16} className="mt-0.5" />
              </span>
            </LoaderLink>
          </div>
        </div>
      </section>
    </>
  );
}
