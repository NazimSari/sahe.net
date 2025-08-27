"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mekanDetayData } from "@/lib/data";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DetailsTabPlace() {
  const [selectedTab, setSelectedTab] = useState("genel-bakis");

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_3fr] gap-4">
      {/* 1. Kolon: Sol tarafta dikey TabsList */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full hidden lg:block"
      >
        <TabsList className="flex flex-col gap-2 h-auto bg-transparent">
          <TabsTrigger
            value="genel-bakis"
            className="md:text-lg text-sm text-left py-2 px-4 w-full "
          >
            Genel Bakış
          </TabsTrigger>
          <TabsTrigger
            value="etkinlikler"
            className="md:text-lg text-sm text-left py-2 px-4 w-full "
          >
            Etkinlikler ve Haftalık Program
          </TabsTrigger>
          <TabsTrigger
            value="sanatcilar"
            className="md:text-lg text-sm text-left py-2 px-4 w-full "
          >
            Sanatçılar ve Performanslar
          </TabsTrigger>
          <TabsTrigger
            value="food-drinks"
            className="md:text-lg text-sm text-left py-2 px-4 w-full "
          >
            Yiyecek ve İçecek
          </TabsTrigger>
          <TabsTrigger
            value="olanaklar"
            className="md:text-lg text-sm text-left py-2 px-4 w-full "
          >
            Olanaklar
          </TabsTrigger>
          <TabsTrigger
            value="rezervasyon"
            className="md:text-lg text-sm text-left py-2 px-4 w-full "
          >
            Rezervasyon ve Giriş
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* 2. Kolon: Ortada TabsContent */}
      <div className="w-full hidden lg:block">
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="py-4"
        >
          <TabsContent value="genel-bakis">
            <div className="flex flex-col gap-5">
              <p className="text-[#f5f5f5]">{mekanDetayData.description}</p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold w-48">Çalışma Saatleri: </span>
                {mekanDetayData.worksHours}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold  w-48">Adres: </span>
                {mekanDetayData.address}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold  w-48">Telefon: </span>
                {mekanDetayData.phone}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold  w-48">Müzik Türü: </span>
                {mekanDetayData.tur}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold  w-48">Bilet Fiyatları: </span>
                {mekanDetayData.price}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold  w-48">Yaş Sınırı: </span>
                {mekanDetayData.age}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="etkinlikler">
            <div className="p-6">
              <ul className="text-[#f5f5f5] space-y-2">
                {mekanDetayData.program.map((item: any, i: number) => (
                  <li
                    key={i}
                    className="grid grid-cols-3 gap-4 border-b border-gray-700 py-2 last:border-b-0"
                  >
                    <span>{item.day}</span>
                    <span>{item.artist}</span>
                    <span className="text-right">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="sanatcilar">
            <div className="p-6">
              <div className="text-[#f5f5f5] divide-y divide-gray-700">
                {mekanDetayData.singers.map((artist: any, i: number) => (
                  <div key={i} className="py-4 last:pb-0 last:border-b-0">
                    {/* İsim ve Tür */}
                    <h3 className="text-xl font-bold">{artist.name}</h3>
                    <p className="text-sm text-gray-400">
                      {artist.genre} • {artist.type}
                    </p>

                    {/* Açıklama */}
                    <p className="mt-2">{artist.description}</p>

                    {/* Linkler */}
                    <div className="flex gap-4 mt-3 text-[#FF007A] underline">
                      {artist.links.instagram && (
                        <a
                          href={artist.links.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Instagram
                        </a>
                      )}
                      {artist.links.spotify && (
                        <a
                          href={artist.links.spotify}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Spotify
                        </a>
                      )}
                      {artist.links.youtube && (
                        <a
                          href={artist.links.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          YouTube
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="food-drinks">
            <div className="p-6">
              {/* Menü linki (opsiyonel) */}
              {mekanDetayData.menuLink && (
                <a
                  href={mekanDetayData.menuLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-[#f5f5f5] hover:bg-gray-800 transition"
                  aria-label="Restoranın menüsünü kendi sitesinde aç"
                >
                  📖 Menüyü Sitede Gör
                </a>
              )}

              {/* Swipe alanı */}
              <div className="relative mt-3">
                {/* sağda hafif gradient, swipe yönü ipucu */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900/80 to-transparent rounded-r-xl" />

                <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory">
                  {mekanDetayData.foodDrink.map((img: string, i: number) => (
                    <div
                      key={i}
                      className="min-w-[80%] md:min-w-[40%] snap-center flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Menü görseli ${i + 1}`}
                        loading="lazy"
                        className="w-full h-76 object-cover rounded-xl shadow-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="olanaklar">
            <div className="p-6">
              <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
                {mekanDetayData.amenities.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="rezervasyon">
            <div className="p-6">
              {/* Rezervasyon */}
              <a
                href={`tel:${mekanDetayData.reservationPhone}`}
                className="inline-block bg-[#f5f5f5] text-[#040519] hover:bg-[#040519] hover:text-[#f5f5f5] font-semibold px-4 py-2 rounded-lg w-max transition"
              >
                📞 Rezervasyon: {mekanDetayData.reservationPhone}
              </a>

              {/* Harita iframe */}
              {mekanDetayData.locationUrl && (
                <div className="mt-4 w-full h-72 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={mekanDetayData.locationUrl}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0"
                  ></iframe>
                </div>
              )}

              {/* Alternatif olarak link */}
              {mekanDetayData.locationUrl && (
                <a
                  href={mekanDetayData.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-blue-400 underline"
                >
                  Haritada Aç
                </a>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Küçük ekranlar için accordion içerik gösterimi */}
      <div className="lg:hidden p-3">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Genel Bakış
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-[#f5f5f5]">{mekanDetayData.description}</p>
              <p className="text-[#f5f5f5] flex items-center gap-2 mt-2">
                <span className="font-semibold gap-2">Çalışma Saatleri: </span>
                {mekanDetayData.worksHours}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2 mt-1">
                <span className="font-semibold gap-2">Adres: </span>
                {mekanDetayData.address}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2 mt-1">
                <span className="font-semibold gap-2">Telefon: </span>
                {mekanDetayData.phone}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2 mt-1">
                <span className="font-semibold gap-2">Müzik Türü: </span>
                {mekanDetayData.musicType}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2 mt-1">
                <span className="font-semibold gap-2">Bilet Fiyatları: </span>
                {mekanDetayData.price}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2 my-2 mt-1">
                <span className="font-semibold gap-2">Yaş Sınırı: </span>
                {mekanDetayData.age}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Etkinlikler ve Haftalık Program
              </p>
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <ul className="text-[#f5f5f5] space-y-2">
                {mekanDetayData.program.map((item: any, i: number) => (
                  <li
                    key={i}
                    className="grid grid-cols-3 gap-4 border-b border-gray-700 py-2 last:border-b-0"
                  >
                    <span>{item.day}</span>
                    <span>{item.artist}</span>
                    <span className="text-right">{item.time}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Sanatçılar ve Performanslar
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="text-[#f5f5f5] divide-y divide-gray-700">
                {mekanDetayData.singers.map((artist: any, i: number) => (
                  <div key={i} className="py-2 last:pb-0 last:border-b-0">
                    {/* İsim ve Tür */}
                    <h3 className="text-base font-bold">{artist.name}</h3>
                    <p className="text-sm text-gray-400">
                      {artist.genre} • {artist.type}
                    </p>

                    {/* Açıklama */}
                    <p className="mt-2 text-sm">{artist.description}</p>

                    {/* Linkler */}
                    <div className="flex gap-4 mt-3 text-[#FF007A] underline">
                      {artist.links.instagram && (
                        <a
                          href={artist.links.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Instagram
                        </a>
                      )}
                      {artist.links.spotify && (
                        <a
                          href={artist.links.spotify}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Spotify
                        </a>
                      )}
                      {artist.links.youtube && (
                        <a
                          href={artist.links.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          YouTube
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Yiyecek ve İçecek Menüsü
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4">
              {/* Menü linki (opsiyonel) */}
              {mekanDetayData.menuLink && (
                <a
                  href={mekanDetayData.menuLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-[#f5f5f5] hover:bg-gray-800 transition"
                  aria-label="Restoranın menüsünü kendi sitesinde aç"
                >
                  📖 Menüyü Sitede Gör
                </a>
              )}

              {/* Swipe alanı */}
              <div className="relative">
                {/* sağda hafif gradient, swipe yönü ipucu */}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900/80 to-transparent rounded-r-xl" />

                <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory">
                  {mekanDetayData.foodDrink.map((img: string, i: number) => (
                    <div
                      key={i}
                      className="min-w-[80%] md:min-w-[40%] snap-center flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Menü görseli ${i + 1}`}
                        loading="lazy"
                        className="w-full h-76 object-cover rounded-xl shadow-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                İmkanlar
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul className="list-disc list-inside text-[#f5f5f5] space-y-2">
                {mekanDetayData.amenities.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Rezervasyon ve Yol Tarifi
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {/* Rezervasyon */}
                <a
                  href={`tel:${mekanDetayData.reservationPhone}`}
                  className="inline-block bg-[#f5f5f5] text-[#040519] hover:bg-[#040519] hover:text-[#f5f5f5] font-semibold px-4 py-2 rounded-lg w-max transition"
                >
                  📞 Rezervasyon: {mekanDetayData.reservationPhone}
                </a>

                {/* Harita iframe */}
                {mekanDetayData.locationUrl && (
                  <div className="mt-4 w-full h-72 rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src={mekanDetayData.locationUrl}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="border-0"
                    ></iframe>
                  </div>
                )}

                {/* Alternatif olarak link */}
                {mekanDetayData.locationUrl && (
                  <a
                    href={mekanDetayData.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-sm text-blue-400 underline"
                  >
                    Haritada Aç
                  </a>
                )}
              </AccordionContent>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
