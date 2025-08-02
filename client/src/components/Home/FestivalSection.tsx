import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const festivalData = [
  {
    title: "Zeytinli Rock Festivali",
    description:
      "Muğla’da rock müzik coşkusu! Efsane gruplar ve genç yeteneklerle dolu bu festival, yazın en enerjik etkinliği.",
    img: "/zeytinli-festival.jpg",
    month: "NİS",
    day: "26",
  },
  {
    title: "İstanbul Müzik Festivali",
    description:
      "İstanbul’un tarihi mekanlarında klasik müzik, opera ve çağdaş eserlerle buluş! 53. yılında bu festival, müzik tutkunlarını bir araya...",
    img: "/istanbul-festival.jpeg",
    month: "TEM",
    day: "31",
  },
  {
    title: "Antalya Akra Jazz Festivali",
    description:
      "Antalya’da cazın büyüsüne kapıl! Yerli ve uluslararası sanatçılar, Akdeniz’in eşsiz atmosferinde seni bekliyor.",
    img: "/akra-festival.png",
    month: "HAZ",
    day: "16",
  },
  {
    title: "Rock n Cock Müzik Festivali",
    description:
      "Antalya’da cazın büyüsüne kapıl! Yerli ve uluslararası sanatçılar, Akdeniz’in eşsiz atmosferinde seni bekliyor.",
    img: "/rock-festival.jpeg",
    month: "AĞU",
    day: "09",
  },
];

export default function FestivalSection() {
  return (
    <section className="mx-auto my-16 w-full">
      <div className="container mx-auto p-4 md:p-0">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 justify-center">
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
            <Link href="/#festivals">
              <span className="flex items-center ml-3">
                {" "}
                Daha Fazlası İçin <ChevronRight size={20} className="mt-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {festivalData.map((festival, index) => (
            <div
              key={index}
              className="flex flex-col gap-2  bg-[#040519] overflow-hidden rounded-tl-2xl rounded-tr-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative w-full h-full">
                <img
                  src={festival.img}
                  alt={festival.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-5">
                <div className="flex gap-5 items-center">
                  <div className="h-16 w-16 bg-[#FF007A] rounded-lg flex flex-col items-center justify-center font-semibold text-sm text-[#f5f5f5]">
                    <p> {festival.day}</p>
                    <p> {festival.month} </p>
                  </div>
                  <div>
                    <h4 className="text-[#f5f5f5] text-lg font-semibold">
                      {" "}
                      {festival.title}
                    </h4>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-[#f5f5f5] text-sm">
                    {" "}
                    {festival.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
  );
}
