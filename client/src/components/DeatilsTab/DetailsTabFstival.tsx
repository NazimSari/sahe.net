"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { festivalDetayData } from "@/lib/data";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DetailsTabFstival() {
  const [selectedTab, setSelectedTab] = useState("genel-bakis");

  return (
    <div className="w-full lg:w-2/3 p-3">
      {/* Orta ve büyük ekranlar için Tabs */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="hidden lg:block"
      >
        <TabsList className="grid w-full grid-cols-4 gap-2 h-12 bg-transparent ">
          <TabsTrigger value="genel-bakis" className="md:text-lg text-sm">
            Genel Bakış
          </TabsTrigger>
          <TabsTrigger value="festival-programi" className="md:text-lg text-sm">
            Festival Programı
          </TabsTrigger>
          <TabsTrigger value="sanatcilar" className="md:text-lg text-sm">
            Sanatçılar
          </TabsTrigger>
          <TabsTrigger value="olanaklar" className="md:text-lg text-sm">
            Mekan ve Olanaklar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="genel-bakis">
          <div className="flex flex-col gap-5">
            <p className="text-[#f5f5f5]">{festivalDetayData.description}</p>
            <Separator className="my-4" />
            <p className="text-[#f5f5f5] flex items-center">
              <span className="font-semibold text-lg w-36">Tarih: </span>
              {festivalDetayData.date}
            </p>
            <Separator className="my-4" />
            <p className="text-[#f5f5f5] flex items-center">
              <span className="font-semibold text-lg w-36">Yer: </span>
              {festivalDetayData.location}
            </p>
            <Separator className="my-4" />
            <p className="text-[#f5f5f5] flex items-center">
              <span className="font-semibold text-lg w-36">Müzik Türü: </span>
              {festivalDetayData.musicType}
            </p>
            <Separator className="my-4" />
            <p className="text-[#f5f5f5] flex items-center">
              <span className="font-semibold text-lg w-36">
                Bilet Fiyatları:{" "}
              </span>
              {festivalDetayData.price}
            </p>
            <Separator className="my-4" />
            <p className="text-[#f5f5f5] flex items-center">
              <span className="font-semibold text-lg w-36">Yaş Sınırı: </span>
              {festivalDetayData.age}
            </p>
          </div>
        </TabsContent>
        <TabsContent value="festival-programi">
          <div className="">
            {festivalDetayData.program.map((dayItem: any, i: number) => (
              <div
                key={i}
                className="border-b border-gray-700 pb-4 last:border-b-0"
              >
                {/* Gün Başlığı */}
                <h3 className="text-gray-400 font-semibold text-base my-3">
                  {dayItem.day}
                </h3>

                {/* Etkinlik Listesi */}
                <ul className="space-y-1">
                  {dayItem.events.map((event: any, j: number) => (
                    <li
                      key={j}
                      className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#040519] p-3 rounded-lg"
                    >
                      {/* Saat */}
                      <span className="text-gray-400 text-sm md:text-base">
                        {event.time}
                      </span>

                      {/* Sanatçı */}
                      <span className="text-[#f5f5f5] font-medium md:text-base">
                        {event.artist}
                      </span>

                      {/* Tür */}
                      <span className="text-gray-500 text-sm md:text-base italic">
                        {event.genre}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="sanatcilar">
          <div className="text-[#f5f5f5] divide-y divide-gray-700">
            {festivalDetayData.singers.map((artist: any, i: number) => (
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
        </TabsContent>
        <TabsContent value="olanaklar">
          <div className="flex">
            <ul className="list-disc list-inside space-y-2 text-[#f5f5f5] w-1/2">
              {festivalDetayData.amenities.map(
                (item: string, index: number) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
            <div className="w-full">
              {/* Harita iframe */}
              {festivalDetayData.locationUrl && (
                <div className="mt-4 w-full h-72 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={festivalDetayData.locationUrl}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0"
                  ></iframe>
                </div>
              )}

              {/* Alternatif olarak link */}
              {festivalDetayData.locationUrl && (
                <a
                  href={festivalDetayData.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-blue-400 underline"
                >
                  Haritada Aç
                </a>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      {/* Küçük ekranlar için Accordion ile içerik gösterimi */}
      <div className="lg:hidden">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Genel Bakış
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-[#f5f5f5] mb-3">
                {festivalDetayData.description}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Tarih: </span>
                {festivalDetayData.date}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Adres: </span>
                {festivalDetayData.location}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Müzik Türü: </span>
                {festivalDetayData.musicType}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Bilet Fiyatları: </span>
                {festivalDetayData.price}
              </p>
              <p className="text-[#f5f5f5] flex items-center gap-2">
                <span className="font-semibold">Yaş Sınırı: </span>
                {festivalDetayData.age}
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Festival Programı
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-6 text-balance">
              {festivalDetayData.program.map((dayItem: any, i: number) => (
                <div key={i} className="border-b border-gray-700 pb-4">
                  {/* Gün Başlığı */}
                  <h3 className="text-gray-400 font-semibold text-base mb-3">
                    {dayItem.day}
                  </h3>

                  {/* Etkinlik Listesi */}
                  <ul className="space-y-2">
                    {dayItem.events.map((event: any, j: number) => (
                      <li
                        key={j}
                        className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#040519] p-3 rounded-lg"
                      >
                        {/* Saat */}
                        <span className="text-gray-400 text-sm md:text-base">
                          {event.time}
                        </span>

                        {/* Sanatçı */}
                        <span className="text-[#f5f5f5] font-medium md:text-base">
                          {event.artist}
                        </span>

                        {/* Tür */}
                        <span className="text-gray-500 text-sm md:text-base italic">
                          {event.genre}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                Sanatçılar
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-[#f5f5f5] divide-y divide-gray-700">
                {festivalDetayData.singers.map((artist: any, i: number) => (
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
                Mekan ve Olanaklar
              </p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="flex flex-col md:flex-row">
                <ul className="list-disc list-inside space-y-2 text-[#f5f5f5] md:w-1/2">
                  {festivalDetayData.amenities.map(
                    (item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <div className="w-full">
                  {/* Harita iframe */}
                  {festivalDetayData.locationUrl && (
                    <div className="mt-4 w-full h-72 rounded-xl overflow-hidden shadow-md">
                      <iframe
                        src={festivalDetayData.locationUrl}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="border-0"
                      ></iframe>
                    </div>
                  )}

                  {/* Alternatif olarak link */}
                  {festivalDetayData.locationUrl && (
                    <a
                      href={festivalDetayData.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-sm text-blue-400 underline"
                    >
                      Haritada Aç
                    </a>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
