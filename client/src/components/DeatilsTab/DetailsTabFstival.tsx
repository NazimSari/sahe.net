"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { festivalDetayData } from "@/lib/data";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DetailsTabFstival() {
  const [selectedTab, setSelectedTab] = useState("genel-bakis");

  return (
    <div className="w-full lg:w-2/3 p-3">
      {/* Küçük ekranlar için Select */}
      <div className="block lg:hidden">
        <Select
          value={selectedTab}
          onValueChange={setSelectedTab}
          defaultValue="genel-bakis"
        >
          <SelectTrigger className="w-full text-[#f5f5f5] bg-[#160317]">
            <SelectValue placeholder="Genel Bakış" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="genel-bakis">Genel Bakış</SelectItem>
            <SelectItem value="festival-programi">Festival Programı</SelectItem>
            <SelectItem value="sanatcılar">Sanatçılar</SelectItem>
            <SelectItem value="olanaklar">Mekan ve Olanaklar</SelectItem>
          </SelectContent>
        </Select>
      </div>
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
              {festivalDetayData.tur}
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
      </Tabs>
      {/* Küçük ekranlar için Select ile içerik gösterimi */}
      <div className="lg:hidden">
        {selectedTab === "genel-bakis" && (
          <div className="mt-4">
            <div className="p-2">
              <p className="text-[#f5f5f5] text-sm sm:text-base leading-relaxed">
                {festivalDetayData.description}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Tarih:{" "}
                </span>
                {festivalDetayData.date}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Yer:{" "}
                </span>
                {festivalDetayData.location}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Müzik Türü:{" "}
                </span>
                {festivalDetayData.tur}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Bilet Fiyatları:{" "}
                </span>
                {festivalDetayData.price}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Yaş Sınırı:{" "}
                </span>
                {festivalDetayData.age}
              </p>
            </div>
          </div>
        )}
        {selectedTab === "festival-programi" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{festivalDetayData.program}</p>
            </div>
          </div>
        )}
        {selectedTab === "sanatcilar" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{festivalDetayData.singers}</p>
            </div>
          </div>
        )}
        {selectedTab === "tur" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{festivalDetayData.tur}</p>
            </div>
          </div>
        )}
        {selectedTab === "olanaklar" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{festivalDetayData.amenities}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
