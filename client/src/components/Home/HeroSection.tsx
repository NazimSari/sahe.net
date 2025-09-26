"use client";
import React from "react";
import MemberForm from "../MemberForm";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import MenifestModal from "../Modals/MenifestModal";
import { HeroContainerTextFlip } from "../Banner/HeroContainerTextFlip";

export default function HeroSection() {
  return (
    <>
      <main className="bg-[#040519] w-full pt-20 xl:pt-0 pl-2">
        <section
          id="hero-section"
          className="mx-auto container my-16 md:my-10 p-2"
        >
          <div className="flex justify-between items-center h-full">
            <div className="flex flex-col justify-center  gap-5">
              <h1
                id="hero-title"
                className="lg:text-6xl md:text-5xl text-4xl  max-w-6xl font-bold text-[#f5f5f5]"
              >
                Etkinlikleriniz İçin Sanatçılara Ulaşmanın En Kolay Yolu
              </h1>
              <div
                id="hero-paragraph"
                className="text-[#f5f5f5] font-semibold xl:text-xl md:text-lg sm:text-base text-sm max-w-4xl leading-relaxed"
              >
                <HeroContainerTextFlip
                  words={["Müzisyenlerin", "Sanatçıların"]}
                  interval={5000}
                />{" "}
                buluştuğu en iyi online platforma hoş geldin! Her türlü etkinlik
                için{" "}
                <HeroContainerTextFlip
                  words={["müzisyenleri", "sanatçıları"]}
                  interval={3000}
                  startDelay={2000} // ✅ 1 saniye gecikmeli başlar
                />{" "}
                kolayca bul, iletişime geç ve hemen rezervasyon yap.
              </div>

              <div id="hero-forms" className="mt-10">
                <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-4">
                  <p className="text-[#f5f5f5] text-base">
                    <span className="text-[#FF007A] text-2xl">*</span>Sanatçı ve
                    müzisyen ön kayıt formu
                  </p>
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
    </>
  );
}
