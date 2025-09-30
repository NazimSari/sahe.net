"use client";
import React from "react";
import MemberForm from "../MemberForm";
import MenifestModal from "../Modals/MenifestModal";

export default function HeroSection() {
  return (
    <main className="bg-[#040519] w-full pt-20">
      <section
        id="hero-section"
        className="mx-auto container my-16 md:my-10 p-4"
      >
        <div className="flex justify-between items-center h-full">
          <div className="flex flex-col justify-center  gap-5">
            <h1
              id="hero-title"
              className="lg:text-6xl md:text-5xl text-4xl  max-w-6xl font-bold text-[#f5f5f5]  z-10"
            >
              Sanatçılar ve Müzisyenler İçin Ön Kayıt Formu
            </h1>
            <p
              id="hero-paragraph"
              className="text-[#f5f5f5] font-semibold xl:text-xl md:text-lg sm:text-base text-sm max-w-4xl leading-relaxed  z-10"
            >
              Sahne.net, yalnızca müzikalitesi yüksek santçılara alan açan tek
              platform. Eğer siz de bu ayrıcalıklı sahnede yer almak
              istiyorsanız, ön kayıt formunu doldurun.
            </p>
            <div id="hero-forms" className="mt-10  z-10">
              <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-2">
                <MenifestModal />
              </div>
              <MemberForm />
            </div>
          </div>
          <div className="hidden lg:flex mt-16 md:mt-10">
            <div className="w-full h-full">
              <img
                src="/hero.webp"
                alt="hero image"
                className="w-full h-full object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 lg:hidden z-0 pointer-events-none">
          <img
            src="/hero.webp"
            alt="hero image"
            className="w-full  h-[50vh] object-cover object-top opacity-30"
          />
        </div>
      </section>
    </main>
  );
}
