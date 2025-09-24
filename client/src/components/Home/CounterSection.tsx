"use client";

import { useEffect, useState } from "react";
import { SparklesCore } from "../ui/sparkles";
import { ContainerTextFlipDemo } from "../Banner/ContainerText";
import { ContainerTextFlip } from "../Banner/ContainerTextFlip ";

export default function CounterSection() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchCounter = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/counter`
        );
        const data = await res.json();
        setCount(data.value);
      } catch (err) {
        console.error("Sayaç verisi alınamadı", err);
      }
    };

    fetchCounter();
  }, []);

  return (
    <div className="h-[22rem] md:h-[25rem] relative w-full bg-[#040519] flex flex-col  items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-col items-center md:text-6xl sm:text-4xl text-3xl font-black gap-5">
        <h3 className="text-[#f5f5f5] text-center">
          Aramıza Katılan Müzikalitesi Yüksek
        </h3>
        <ContainerTextFlip words={["Sanatçılar", "Müzisyenler"]} />
        <div className="text-[#FF007A] text-6xl md:text-8xl text-center flex gap-1">
          {count!
            .toString()
            .split("")
            .map((digit: string, index: number) => (
              <p
                key={index}
                className="px-5 py-2 rounded-md bg-[#f5f5f5]"
                style={{
                  // kutunun açık renk gölgeleri
                  boxShadow: `
                            /* içe doğru koyu gölgeler */
                            inset -3px -3px 5px rgba(0,0,0,0.3),
                            inset 3px -3px 5px rgba(0,0,0,0.3),
                            inset -3px 3px 5px rgba(0,0,0,0.3),
                            inset 3px 3px 5px rgba(0,0,0,0.3)
                          `,
                  // rakamların koyu gölgesi
                  textShadow: "3px 3px 8px rgba(0,0,0,0.5)",
                }}
              >
                {digit}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
