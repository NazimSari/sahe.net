"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import {
  beachClubData,
  canliMuzikData,
  djbarsData,
  kokteylBarData,
  rooftopData,
} from "@/lib/data";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import HangoutInfoCards from "@/components/Cards/HangoutInfoCards";
import MobilHangoutInfoSlider from "@/components/SliderGsap/MobilHangoutInfoSlider";

export default function MekanPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-4 pt-16 sm:pt-20 bg-[url('/page10.jpg')] bg-cover  bg-top flex items-center min-h-screen w-full">
        <div className="container mx-auto flex flex-col justify-center gap-8 py-8">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-tight max-w-4xl">
              Şehrin En Seçkin Mekanlarını Keşfedin
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl font-semibold text-[#f5f5f5] max-w-4xl leading-relaxed">
              Canlı müzikten VIP DJ performanslarına, kokteyl barlardan beach
              clublara kadar aradığınız tüm mekanlar burada! Kategorilere göz
              atın ve size en uygun yeri keşfedin.
            </p>
          </div>
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
      </section>
      <section className="w-full bg-[#160317] pt-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Canlı Müzik Mekanları
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Cazdan latin ezgilerine, akustik performanslardan ünlü
              sanatçılara… Özenle seçilmiş canlı müzik mekanlarında, ritmin ve
              atmosferin büyüsüne kapılın!
            </p>
          </div>
          <div className="mt-6 hidden md:block">
            <HangoutInfoCards data={canliMuzikData} />
          </div>
          <div className="mt-6 md:hidden">
            <MobilHangoutInfoSlider data={canliMuzikData} />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-8 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Beach Clublar
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Altın kumlar, serin kokteyller ve gün boyu süren müzik… Şehrin en
              prestijli beach clublarında, lüks ve eğlenceyi bir arada yaşayın.
            </p>
          </div>
          <div className="mt-6 hidden md:block">
            <HangoutInfoCards data={beachClubData} />
          </div>
          <div className="mt-6 md:hidden">
            <MobilHangoutInfoSlider data={beachClubData} />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-8 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Kokteyl Mekanları
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Usta mixologların imzasını taşıyan özel kokteyller… Şehrin en
              zarif mekanlarında, her yudumda farklı bir hikâyeye yolculuk edin.
            </p>
          </div>
          <div className="mt-6 hidden md:block">
            <HangoutInfoCards data={kokteylBarData} />
          </div>
          <div className="mt-6 md:hidden">
            <MobilHangoutInfoSlider data={kokteylBarData} />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-8 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              VIP DJ Mekanları
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Dünyaca ünlü DJ’lerin sahne aldığı, enerjisi yüksek geceler… Özel
              tasarlanmış VIP alanlarda, ritmin kalbine dokunan bir deneyim
              yaşayın.
            </p>
          </div>
          <div className="mt-6 hidden md:block">
            <HangoutInfoCards data={djbarsData} />
          </div>
          <div className="mt-6 md:hidden">
            <MobilHangoutInfoSlider data={djbarsData} />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-8 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Roof Top Mekanlar
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Gökyüzüne en yakın noktada, zarif ambiyanslar ve eşsiz şehir
              manzaralarıyla dolu roof toplarda, özel anlar ve unutulmaz geceler
              sizi bekliyor.
            </p>
          </div>
          <div className="mt-6 hidden md:block">
            <HangoutInfoCards data={rooftopData} />
          </div>
          <div className="mt-6 md:hidden">
            <MobilHangoutInfoSlider data={rooftopData} />
          </div>
        </div>
      </section>
      <SubscriptionSection />
    </main>
  );
}
