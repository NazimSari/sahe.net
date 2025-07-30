"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import SceneCards from "../SceneCards";

gsap.registerPlugin(ScrollTrigger);

export default function SceneStarsSection() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#scene-stars h3", { type: "lines" });
    const paragraphSplit = SplitText.create("#scene-paragraf", {
      type: "lines",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scene-stars",
        start: "top 80%",
      },
    });
    scrollTimeline.from(titleSplit.lines, {
      opacity: 0,
      duration: 3,
      yPercent: 800,
      ease: "expo.out",
    });
    scrollTimeline.from(paragraphSplit.lines, {
      opacity: 0,
      duration: 2,
      yPercent: 200,
      ease: "expo.out",
    });
  }, []);
  return (
    <>
      <section id="scene-stars" className="mx-auto container mt-16">
        <div className="flex flex-col gap-4 h-full justify-center">
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
        <div className="mt-8">
          <SceneCards />
        </div>
      </section>
    </>
  );
}
