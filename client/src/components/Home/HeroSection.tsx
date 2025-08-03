"use client";
import React from "react";
import MemberForm from "../MemberForm";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function HeroSection() {
  useGSAP(() => {
    // SplitText ile metni böl
    const heroSplit = new SplitText("#hero-title", { type: "words" });
    const heroParagraph = new SplitText("#hero-paragraph", { type: "lines" });

    // GSAP varsayılan ayarları
    gsap.set("#hero-title", { opacity: 1 }); // Başlangıçta CSS ile opacity: 0 ayarlandığı için geri getiriyoruz
    gsap.set("#hero-paragraph", { opacity: 1 });
    gsap.set("#hero-forms > *", { opacity: 1 });
    gsap.set("#hero-forms, #hero-forms *", {
      opacity: 1,
      visibility: "visible",
    });

    const tl = gsap.timeline();

    tl.fromTo(
      heroSplit.words,
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
      }
    );

    tl.from(
      heroParagraph.lines,
      {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      },
      0
    );

    tl.from(
      "#hero-forms form, #hero-forms form *", // Form ve tüm iç elemanları hedefle
      {
        opacity: 0,
        yPercent: 50,
        duration: 1.8,
        ease: "expo.out",
      },
      "-=1.5"
    );
  }, []);

  return (
    <>
      <main className="bg-[#040519] w-full pt-20 xl:pt-0">
        <section
          id="hero-section"
          className="mx-auto container my-16 md:my-10 p-2"
        >
          <div className="flex justify-between items-center h-full">
            <div className="flex flex-col justify-center  gap-5">
              <h1
                id="hero-title"
                className="lg:text-6xl md:text-5xl text-4xl  max-w-6xl font-bold text-[#f5f5f5] opacity-0 z-10" // Başlangıçta görünmez
              >
                Etkinlikleriniz İçin Sanatçılara Ulaşmanın En Kolay Yolu
              </h1>
              <p
                id="hero-paragraph"
                className="text-[#f5f5f5] font-semibold xl:text-xl md:text-lg sm:text-base text-sm max-w-4xl leading-relaxed opacity-0 z-10" // Başlangıçta görünmez
              >
                Müzisyenlerin buluştuğu en iyi online platforma hoş geldin! Her
                türlü etkinlik için müzisyenleri kolayca bul, iletişime geç ve
                hemen rezervasyon yap.
              </p>
              <div id="hero-forms" className="mt-10 opacity-0 z-10">
                <p className="text-slate-400 text-sm mb-2">
                  *Sanatçı ve mekan ön kayıt formu
                </p>
                <MemberForm />
              </div>
            </div>
            <div className="hidden lg:flex mt-16 md:mt-10">
              <div className="w-full h-full">
                <img
                  src="/hero.png"
                  alt="hero image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 lg:hidden z-0">
            <img
              src="/hero.png"
              alt="hero image"
              className="w-full  h-[50vh] object-cover object-top opacity-30"
            />
          </div>
        </section>
      </main>
    </>
  );
}
