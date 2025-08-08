import Countdown from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import React from "react";

export default function FestivalDetayPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="bg-[url('/page5.jpg')] bg-cover bg-center flex flex-col justify-center items-center min-h-screen  w-full gap-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 justify-center items-center mt-16">
            <p className="md:text-base text-xs px-4 py-2 rounded-lg font-semibold bg-[#f5f5f5]">
              KüçükÇiftlik Park İstanbul
            </p>
            <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold text-[#f5f5f5] leading-tight">
              İstanbul Yaz Rüzgarı Festivali
            </h1>
          </div>
        </div>
        <div className=" bg-[#160317]/70 w-full h-32 flex items-center justify-center">
          <Countdown />
        </div>
        <div>
          <button className="px-4 py-3 rounded-lg font-semibold bg-[#f5f5f5] hover:bg-[#040519] hover:text-[#f5f5f5] border hover:border-[#FF007A] transition duration-300 ease-in-out cursor-pointer md:w-2xl md:text-lg text-sm">
            Rezervasyon Yap
          </button>
        </div>
      </section>
    </main>
  );
}
