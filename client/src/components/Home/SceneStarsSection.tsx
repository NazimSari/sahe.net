"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import SceneCards from "../SceneCards";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SceneStarsSection() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#scene-stars h3", { type: "lines" });
    const paragraphSplit = SplitText.create("#scene-stars p", {
      type: "lines",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scene-stars",
        start: "top 50%",
      },
    });

    // Başlık ve paragraf animasyonlarını paralel başlat
    scrollTimeline
      .from(titleSplit.lines, {
        opacity: 0,
        duration: 3,
        yPercent: 800,
        ease: "expo.out",
        stagger: 0.2, // Satırların hafif aralıklı gelmesi için
      })
      .from(
        paragraphSplit.lines,
        {
          opacity: 0,
          duration: 2, // Paragrafın süresini biraz kısalttık
          yPercent: 50,
          ease: "expo.out",
          stagger: 0.1, // Paragraf satırları daha hızlı aralıkla gelir
        },
        "-=2.5" // <h3> animasyonuyla 2.5 saniye örtüşme (paralel başlatma)
      );
  }, []);
  return (
    <>
      <section id="scene-stars" className="mx-auto  my-16">
        <div className="container mx-auto p-4 md:p-0">
          <div className="flex max-w-[80vw] items-center justify-between">
            <div className="flex flex-col gap-4  justify-center">
              <h3 className="md:text-4xl text-2xl ml-2 font-bold text-[#1A1A2E] md:leading-snug">
                Sahnenin Yıldızları
              </h3>
              <p
                id="scene-paragraf"
                className="text-[#1A1A2E] text-sm md:text-base ml-2"
              >
                En iyi müzisyenleri bul, güvenli şekilde rezerve et ve sahneyi
                hazırla! Etkinliğin <br /> için her şey birkaç tık uzağında.
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
          <div className="mt-8">
            <SceneCards />
          </div>
        </div>
      </section>
    </>
  );
}
