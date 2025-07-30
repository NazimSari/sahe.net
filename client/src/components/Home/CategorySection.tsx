import React from "react";
import CategorySlider from "../SliderGsap/CategorySlider";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function CategorySection() {
  return (
    <>
      <div className="mx-auto container h-[30vh]">
        <div className="flex flex-col gap-4 h-full justify-center">
          <h3 className="md:text-4xl text-2xl ml-2 font-bold text-[#1A1A2E] md:leading-snug">
            Etkinliğini sahneye taşıyacak <br /> sanatçıları keşfet
          </h3>
          <p className="text-[#1A1A2E] text-sm md:text-base ml-2">
            Hayalindeki etkinliği gerçeğe dönüştür! En yetenekli müzisyenlerle{" "}
            tanış ve <br />
            sahneye kendi hikayeni taşı.
          </p>
        </div>
      </div>
      <div className="w-full bg-[#040519]">
        <CategorySlider />
      </div>
      <div className="w-full bg-[#f5f5f5]">
        <div className="mx-auto container h-[15vh] p-3 md:p-0">
          <div className="flex gap-4 h-full items-center w-fit">
            <Button className="cursor-pointer px-8 ">Üye Olun</Button>
            <span className="flex items-center ml-3 text-[#FF007A] font-semibold cursor-pointer">
              {" "}
              Daha Fazlası İçin{" "}
              <ChevronRight size={20} className="text-[#FF007A] mt-1" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
