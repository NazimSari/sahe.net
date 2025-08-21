"use client";

import ToNightSingerCards from "@/components/Cards/ToNightSingerCards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  banners,
  singerCardsDataAnkara,
  singerCardsDataIstanbul,
  singerCardsDataIzmir,
} from "@/lib/data";
import { ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function BuGeceSahnePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider(); // Temizlik
  }, []);
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#160317]">
      <section className="w-full h-[800px] my-16 lg:my-0 px-2">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full container mx-auto gap-10 mt-30 lg:mt-0">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col jusitfy-between gap-5">
              <h1 className="lg:text-7xl md:text-5xl text-4xl  font-bold text-[#f5f5f5]">
                Bu Gece <span className="text-[#FF007A]">Sahnede</span> Kim Var?
              </h1>
              <p className="text-[#f5f5f5] text-sm lg:text-lg md:text-base leading-relaxed max-w-xl">
                Gecenin ritmini belirleyen sanatçılar burada! Bu gece kim
                performans sergiliyor, hemen göz at.
              </p>
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row gap-2 items-center max-w-4xl">
                  <Input
                    placeholder="Ara..."
                    className="w-full  sm:flex-1 bg-[#f5f5f5] md:py-6 "
                  />
                  <Button className="hidden sm:flex w-full sm:w-1/3 md:py-6  bg-[#040519] text-[#FF007A] border hover:text-white text-sm sm:text-base">
                    Sonuçları Göster
                  </Button>
                </div>
                <div className="flex flex-col gap-3 mt-4 max-w-4xl">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Select>
                      <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                        <SelectValue
                          placeholder="Şehir"
                          className="text-[#040519]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enstruman">Enstrüman</SelectItem>
                        <SelectItem value="solist">Solist</SelectItem>
                        <SelectItem value="dj">Dj Performans</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                        <SelectValue
                          placeholder="Mekan Türü"
                          className="text-[#040519]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enstruman">Enstrüman</SelectItem>
                        <SelectItem value="solist">Solist</SelectItem>
                        <SelectItem value="dj">Dj Performans</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                        <SelectValue
                          placeholder="Müzik Türü"
                          className="text-[#040519]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enstruman">Enstrüman</SelectItem>
                        <SelectItem value="solist">Solist</SelectItem>
                        <SelectItem value="dj">Dj Performans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="sm:hidden py-3 bg-[#040519] text-[#FF007A] border hover:text-white text-sm">
                    Sonuçları Göster
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative h-[65%] overflow-hidden w-full lg:w-[62%] rounded-2xl"
            onMouseEnter={stopSlider}
            onMouseLeave={startSlider}
          >
            {banners.map((bannerItem, index) => (
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                key={bannerItem.id}
              >
                <div className="absolute inset-0">
                  <img
                    src={bannerItem.image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Tasarımı */}
                <div className="absolute bottom-5 right-0 bg-[#1A1A2E]/80 rounded-lg p-6 md:w-1/3 w-6/7 shadow-lg">
                  <h2 className="lg:text-2xl md:text-xl text-lg font-bold text-[#f5f5f5]">
                    {bannerItem.name}
                  </h2>
                  <p className="text-sm text-[#f5f5f5] mt-1">
                    {bannerItem.genres}
                  </p>
                  <p className="text-sm text-[#f5f5f5] mt-1">
                    Saat: {bannerItem.hour}
                  </p>
                  <p className="text-sm text-[#f5f5f5] mt-1">
                    Mekan: {bannerItem.venue}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center text-sm text-[#FF007A] font-bold cursor-pointer">
                      Rezervasyon Yap
                      <ChevronRight size={20} className="text-[#FF007A] mt-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-6  right-5  mx-1">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`sm:w-2 sm:h-2 w-1 h-1 rounded-full transition-all ml-1 ${
                    currentSlide === index
                      ? "bg-[#FF007A] sm:w-6 w-3"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container mx-auto flex flex-col gap-16 p-3">
          <div className="flex flex-col items-center lg:items-start justify-between gap-3">
            <div>
              <h3 className="xl:text-7xl mb-5 sm:text-6xl text-5xl font-bold text-[#f5f5f5] underline decoration-[#FF007A] decoration-3 ml-3">
                İstanbul
              </h3>
            </div>
            <ToNightSingerCards data={singerCardsDataIstanbul} />
          </div>
          <div className="flex flex-col items-center lg:items-start justify-between gap-3">
            <div>
              <h3 className="xl:text-7xl mb-5 sm:text-6xl text-5xl font-bold text-[#f5f5f5] underline decoration-[#FF007A] decoration-3 ml-3">
                Ankara
              </h3>
            </div>
            <ToNightSingerCards data={singerCardsDataAnkara} />
          </div>
          <div className="flex flex-col items-center lg:items-start justify-between gap-3">
            <div>
              <h3 className="xl:text-7xl mb-5 sm:text-6xl text-5xl font-bold text-[#f5f5f5] underline decoration-[#FF007A] decoration-3 ml-3">
                İzmir
              </h3>
            </div>
            <ToNightSingerCards data={singerCardsDataIzmir} />
          </div>
        </div>
      </section>
    </main>
  );
}
