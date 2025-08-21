"use client";
import SceneCards from "../Cards/SceneCards";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { sahneData } from "@/lib/data";
import MobileSceneSlider from "../SliderGsap/MobilSceneSlider";

export default function SceneStarsSection() {
  return (
    <>
      <section id="scene-stars" className="mx-auto  my-16">
        <div className="container mx-auto md:p-0">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4  justify-center">
              <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#1A1A2E] md:leading-snug">
                Sahnenin Yıldızları
              </h3>
              <p
                id="scene-paragraf"
                className="text-[#1A1A2E] text-sm md:text-base max-w-xl ml-2"
              >
                En iyi müzisyenleri bul, güvenli şekilde rezerve et ve sahneyi
                hazırla! Etkinliğin için her şey birkaç tık uzağında.
              </p>
            </div>
            <div className="hidden md:block border border-[#FF007A] py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
              <Link href="/#festivals">
                <span className="flex items-center ml-3">
                  {" "}
                  Daha Fazlası İçin <ChevronRight size={20} className="mt-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-8 hidden md:block">
            <SceneCards data={sahneData} />
          </div>
          <div className="mt-8 md:hidden">
            <MobileSceneSlider data={sahneData} />
          </div>
          <div className="md:hidden border w-fit mt-5 border-[#FF007A] py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
            <Link href="/#festivals">
              <span className="flex items-center ml-3">
                {" "}
                Daha Fazlası İçin <ChevronRight size={20} className="mt-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
