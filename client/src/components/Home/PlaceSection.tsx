import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PlaceSection() {
  return (
    <section className="mx-auto my-16 pb-16 w-full">
      <div className="container mx-auto p-4 md:p-0">
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
          <div className="hidden md:block border border-[#FF007A] py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
            <Link href="/mekanlar">
              <span className="flex items-center ml-3">
                {" "}
                Tümünü Gör
                <ChevronRight size={20} className="mt-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 md:gap-3 mt-10">
          {/* 1. Büyük Görsel */}
          <div className="md:col-span-2 md:row-span-2 relative">
            <img
              src="/canli-music.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 sm:h-1/5 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 sm:h-1/7 h-1/6  z-10 flex flex-col">
              <h4 className="text-[#FF007A] sm:text-2xl text-lg font-semibold">
                Canlı Müzik Mekanları
              </h4>
            </div>
          </div>

          {/* 2. Roof */}
          <div className="relative">
            <img
              src="/roof.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
              <h4 className="text-[#FF007A] sm:text-2xl md:text-lg  font-semibold">
                Roof Top Mekanlar
              </h4>
            </div>
          </div>

          {/* 3. Kokteyl */}
          <div className="relative">
            <img
              src="/kokteyl.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
              <h4 className="text-[#FF007A] sm:text-2xl md:text-lg  font-semibold">
                Kokteyl Mekanları
              </h4>
            </div>
          </div>

          {/* 4. Beach */}
          <div className="relative">
            <img
              src="/beach.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
              <h4 className="text-[#FF007A] sm:text-2xl md:text-lg  font-semibold">
                Beach Club
              </h4>
            </div>
          </div>

          {/* 5. Vip Dj */}
          <div className="relative">
            <img
              src="/vip-dj.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
            <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
              <h4 className="text-[#FF007A] sm:text-2xl md:text-lg  font-semibold">
                Vip Dj Bars
              </h4>
            </div>
          </div>
        </div>

        <div className="md:hidden border w-fit mt-5 border-[#FF007A] py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300">
          <Link href="/mekanlar">
            <span className="flex items-center ml-3">
              {" "}
              Tümünü Gör <ChevronRight size={20} className="mt-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
