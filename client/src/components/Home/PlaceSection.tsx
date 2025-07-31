import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PlaceSection() {
  return (
    <section className="mx-auto my-16 w-full">
      <div className="container mx-auto p-4 md:p-0">
        <div className="flex max-w-[80vw] items-center justify-between">
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
          <Link
            href="/#festivals"
            className="border border-[#FF007A] px-8 py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300"
          >
            <span className="flex items-center ml-3">
              {" "}
              Daha Fazlası İçin <ChevronRight size={20} className="mt-1" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-2 mt-10">
          <div className="col-span-2 row-span-4 relative">
            <img
              src="/canli-music.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/5 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/7 z-10 flex flex-col">
              <h4 className="text-[#FF007A] text-2xl font-semibold">
                Canlı Müzik Mekanları
              </h4>
            </div>
          </div>
          <div className="col-start-3 row-span-2 relative">
            <img
              src="/roof.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
              <h4 className="text-[#FF007A] text-xl font-semibold">
                Roof Top Mekanlar
              </h4>
            </div>
          </div>
          <div className="col-start-3 row-start-3 row-span-2 relative">
            <img
              src="/kokteyl.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
              <h4 className="text-[#FF007A] text-xl font-semibold">
                Kokteyl Mekanları
              </h4>
            </div>
          </div>
          <div className="col-start-4 row-start-1 row-span-2 relative">
            <img
              src="/beach.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
              <h4 className="text-[#FF007A] text-xl font-semibold">
                Beach Club
              </h4>
            </div>
          </div>
          <div className="col-start-4 row-start-3 row-span-2 relative">
            <img
              src="/vip-dj.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
              <h4 className="text-[#FF007A] text-xl font-semibold">
                Vip Dj Bars
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
