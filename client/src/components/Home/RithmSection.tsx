import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import RithmSlider from "../SliderGsap/RithmSlider";

export default function RithmSection() {
  return (
    <>
      <section id="scene-stars" className="mx-auto container h-[30vh]">
        <div className="flex flex-col gap-4 h-full justify-center">
          <h3 className="md:text-4xl text-2xl ml-2 font-bold text-[#1A1A2E] md:leading-snug">
            Her Zevke Uygun Ritimler!
          </h3>
          <p
            id="scene-paragraf"
            className="text-[#1A1A2E] text-sm md:text-base ml-2"
          >
            Pop, caz, rock veya klasik… Etkinliğin için mükemmel müzik türünü
            seç <br /> en iyi müzisyenlerle anını unutulmaz kıl!
          </p>
        </div>
      </section>
      <div className="w-full bg-[#040519]">
        <RithmSlider />
      </div>
      <section className="w-full bg-[#f5f5f5]">
        <div className="mx-auto container h-[15vh] p-3 md:p-0">
          <div className="flex gap-4 h-full items-center w-fit">
            <Button className="cursor-pointer px-8">Üye Olun</Button>
            <span className="flex items-center ml-3 text-[#FF007A] font-semibold cursor-pointer">
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
