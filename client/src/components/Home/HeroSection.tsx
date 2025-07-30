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
    <main className="bg-[#040519]">
      <section className=" mx-auto container h-screen bg-[url('/hero.png')] bg-cover bg-end p-2">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full">
          <div className="md:col-span-8 flex flex-col justify-center gap-5">
            <h1
              id="hero-title"
              className="md:text-7xl sm:text-4xl text-3xl font-bold text-[#f5f5f5] opacity-0" // Başlangıçta görünmez
            >
              Etkinlikleriniz İçin Sanatçılara Ulaşmanın <br />
              En Kolay Yolu
            </h1>
            <p
              id="hero-paragraph"
              className="text-[#f5f5f5] md:font-semibold md:text-xl sm:text-base text-sm leading-relaxed opacity-0" // Başlangıçta görünmez
            >
              Müzisyenlerin buluştuğu en iyi online platforma hoş geldin! Her
              türlü etkinlik için <br />
              müzisyenleri kolayca bul, iletişime geç ve hemen rezervasyon yap.
            </p>
            <div id="hero-forms" className="mt-10 opacity-0">
              <MemberForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
