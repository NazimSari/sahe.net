"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { FaLocationDot } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { festivalData } from "@/lib/data";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import { PaginationComp } from "@/components/PaginationComp";

export default function FestivalPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-2 bg-[url('/page4.jpg')] bg-cover bg-bottom flex items-center h-[100vh] md:min-h-screen  w-full">
        <div className="container mx-auto flex flex-col justify-center gap-8 h-full">
          <div className="flex flex-col gap-4 justify-center mt-16">
            <h1 className="lg:text-6xl md:text-5xl text-4xl  max-w-4xl font-bold text-[#f5f5f5] leading-tight">
              Tüm Festivaller Tek Çatı Altında!
            </h1>
            <h2 className="md:text-3xl text-2xl max-w-4xl  font-bold text-[#f5f5f5] md:leading-snug">
              Müziğin Ritmini Yakala, En İyi Etkinlikleri Keşfet
            </h2>
            <p className="text-[#f5f5f5] font-semibold xl:text-xl md:text-lg sm:text-base text-sm max-w-4xl leading-relaxed">
              Türkiye’nin dört bir yanındaki müzik festivallerini ve
              etkinliklerini keşfet! Rock’tan elektroniğe, cazdan popa, her
              zevke hitap eden festival duyurularına göz at, biletini kap ve
              unutulmaz anlar yaşa. Hemen favori festivalini bul ve müziğin
              coşkusuna katıl!
            </p>
          </div>
          <div className="md:mt-8">
            <div className="flex gap-1 items-center">
              <Input
                placeholder="Ara..."
                className="max-w-5xl md:py-6 bg-[#f5f5f5]"
              />
              <Button className="cursor-pointer hidden sm:flex w-1/3 md:py-6 bg-[#040519] text-[#FF007A] border hover:text-white">
                Sonuçları Göster
              </Button>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row md:items-center  gap-3">
                <Select>
                  <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-2/5">
                    <SelectValue
                      placeholder="Şehir"
                      className="bg-[#f5f5f5] text-[#040519]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enstruman">Enstrüman</SelectItem>
                    <SelectItem value="solist">Solist</SelectItem>
                    <SelectItem value="dj">Dj Performans</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-2/5">
                    <SelectValue
                      placeholder="Etkinlik Türü"
                      className="bg-[#f5f5f5] text-[#040519]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enstruman">Enstrüman</SelectItem>
                    <SelectItem value="solist">Solist</SelectItem>
                    <SelectItem value="dj">Dj Performans</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-2/5">
                    <SelectValue
                      placeholder="Müzik Türü"
                      className="bg-[#f5f5f5] text-[#040519]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enstruman">Enstrüman</SelectItem>
                    <SelectItem value="solist">Solist</SelectItem>
                    <SelectItem value="dj">Dj Performans</SelectItem>
                  </SelectContent>
                </Select>
                {/* Popover Takvim */}
                <Popover>
                  <PopoverTrigger asChild>
                    <div
                      role="button"
                      tabIndex={0}
                      className="mt-4 py-2 md:py-3 bg-[#f5f5f5] w-full md:w-2/5 text-[#040519]/55 text-sm border rounded-md px-4 text-left cursor-pointer"
                    >
                      {date
                        ? format(date, "d MMMM yyyy", { locale: tr })
                        : "Tarih Seçiniz"}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="rounded-md border shadow w-full"
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button className="cursor-pointer sm:hidden md:py-6 bg-[#040519] text-[#FF007A] border hover:text-white">
                Sonuçları Göster
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] pb-16">
        <div className="container mx-auto p-3">
          {festivalData.map((item, index) => (
            <div key={index} className="pb-6">
              <div className="flex w-full gap-3">
                <div className="lg:w-16 lg:h-16 w-12 h-12 bg-[#FF007A] flex flex-col items-center justify-center rounded-lg text-[#f5f5f5] font-semibold">
                  <p className="text-sm lg:text-base">{item.day}</p>
                  <p className="text-sm lg:text-base">{item.month}</p>
                </div>
                <div className="flex items-center gap-6 w-full">
                  <div className="w-38 h-38 lg:w-45 lg:h-45">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-[#f5f5f5] flex justify-between gap-5 h-full w-full">
                    <div className="flex flex-col">
                      <h3 className="font-semibold lg:text-2xl text-xl mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-5">
                        <span>
                          <FaLocationDot />
                        </span>
                        <p className="lg:text-sm text-xs font-semibold text-gray-400">
                          {item.location}
                        </p>
                      </div>
                      <p className="text-sm md:text-base">{item.description}</p>
                    </div>
                    <div className="flex flex-col gap-4 justify-center">
                      <Button className="border border-[#FF007A] bg-transparent text-[#FF007A]">
                        Biletini Al
                      </Button>
                      <Button className="border border-[#f5f5f5] bg-transparent text-[#f5f5f5]">
                        Hemen İncele
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-6" />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <PaginationComp />
        </div>
      </section>
      <SubscriptionSection />
    </main>
  );
}
