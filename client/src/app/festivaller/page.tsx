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
import { useRouter } from "next/navigation";
import DemoModal from "@/components/Modals/DemoModal";

export default function FestivalPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();
  const handleShowResults = () => {
    setIsModalOpen(true); // Butona tıklanınca modal açılır
  };

  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-2 pt-16 sm:pt-20 bg-[url('/page4.webp')] bg-cover bg-bottom flex items-center min-h-screen w-full">
        <div className="container mx-auto flex flex-col justify-center gap-6 py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-tight max-w-4xl">
              Tüm Festivaller Tek Çatı Altında!
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f5f5] leading-snug max-w-4xl">
              Müziğin Ritmini Yakala, En İyi Etkinlikleri Keşfet
            </h2>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl font-semibold text-[#f5f5f5] max-w-4xl leading-relaxed">
              Türkiye’nin dört bir yanındaki müzik festivallerini ve
              etkinliklerini keşfet! Rock’tan elektroniğe, cazdan popa, her
              zevke hitap eden festival duyurularına göz at, biletini kap ve
              unutulmaz anlar yaşa. Hemen favori festivalini bul ve müziğin
              coşkusuna katıl!
            </p>
          </div>
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <Input
                placeholder="Ara..."
                className="w-full sm:flex-1 bg-[#f5f5f5] md:py-6 "
              />
              <Button
                onClick={handleShowResults}
                className="hidden sm:flex w-full sm:w-1/3 md:py-6  bg-[#040519] text-[#FF007A] border text-sm sm:text-base cursor-pointer"
              >
                Sonuçları Göster
              </Button>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                      placeholder="Etkinlik Türü"
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
                <Popover>
                  <PopoverTrigger asChild>
                    <div
                      role="button"
                      tabIndex={0}
                      className="py-2 sm:py-1 md:py-3 bg-[#f5f5f5] w-full text-[#040519]/55 text-sm sm:text-base border rounded-md px-4 text-left cursor-pointer"
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
              <Button
                onClick={handleShowResults}
                className="sm:hidden py-3 bg-[#040519] text-[#FF007A] border  text-sm cursor-pointer"
              >
                Sonuçları Göster
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] pt-16 sm:pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {festivalData.map((item, index) => (
            <div key={index} className="py-6">
              <div className="flex w-full gap-4 sm:gap-6">
                <div className="hidden md:flex w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FF007A] flex-col items-center justify-center rounded-lg text-[#f5f5f5] font-semibold">
                  <p className="text-xs sm:text-sm lg:text-base">{item.day}</p>
                  <p className="text-xs sm:text-sm lg:text-base">
                    {item.month}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full">
                  <div className="relative w-full h-60 sm:w-44 sm:h-44 lg:w-48 lg:h-48 flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="md:hidden absolute top-2 left-2 w-12 h-12 bg-[#FF007A] flex flex-col items-center justify-center rounded-lg text-[#f5f5f5] font-semibold">
                      <p className="text-xs">{item.day}</p>
                      <p className="text-xs">{item.month}</p>
                    </div>
                  </div>
                  <div className="text-[#f5f5f5] flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 w-full">
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span>
                          <FaLocationDot />
                        </span>
                        <p className="text-xs sm:text-sm text-gray-400 font-semibold">
                          {item.location}
                        </p>
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-4 sm:justify-center">
                      <Button className="border border-[#FF007A] bg-transparent text-[#FF007A] cursor-pointer py-2 text-sm sm:text-base">
                        Biletini Al
                      </Button>
                      <Button
                        className="border border-[#f5f5f5] bg-transparent text-[#f5f5f5] cursor-pointer py-2 text-sm sm:text-base"
                        onClick={() =>
                          router.push(`/festival-detay/${item.slug}`)
                        }
                      >
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
        <div className="mt-6 px-4 sm:px-6 lg:px-8">
          <PaginationComp />
        </div>
      </section>
      <SubscriptionSection />
      <DemoModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        closeButtonText="Tamam"
      />
    </main>
  );
}
