"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mekanDetayData } from "@/lib/data";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DetailsTabPlace() {
  const [selectedTab, setSelectedTab] = useState("genel-bakis");

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_3fr] gap-4">
      {/* Küçük ekranlar için Select */}
      <div className="block lg:hidden p-2">
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
            <SelectItem value="etkinlikler">
              Etkinlikler ve Haftalık Program
            </SelectItem>
            <SelectItem value="sanatcilar">
              Sanatçılar ve Performanslar
            </SelectItem>
            <SelectItem value="food-drinks">Yiyecek ve İçecek</SelectItem>
            <SelectItem value="olanaklar">Olanaklar</SelectItem>
            <SelectItem value="calisma-saatleri">Çalışma Saatleri</SelectItem>
            <SelectItem value="rezervasyon">Rezervasyon ve Giriş</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
            value="calisma-saatleri"
            className="md:text-lg text-sm text-left py-2 px-4 w-full "
          >
            Çalışma Saatleri
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
                <span className="font-semibold text-lg w-36">Yer: </span>
                {mekanDetayData.address}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold text-lg w-36">Tel: </span>
                {mekanDetayData.phone}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold text-lg w-36">Müzik Türü: </span>
                {mekanDetayData.tur}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold text-lg w-36">
                  Bilet Fiyatları:{" "}
                </span>
                {mekanDetayData.price}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center">
                <span className="font-semibold text-lg w-36">Yaş Sınırı: </span>
                {mekanDetayData.age}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="etkinlikler">
            <div className="p-6">
              <div className="p-0">
                <p className="text-gray-600">{mekanDetayData.tur}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sanatcilar">
            <div className="p-6">
              <div className="p-0">
                <p className="text-gray-600">{mekanDetayData.category}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="food-drinks">
            <div className="p-6">
              <div className="p-0">
                <p className="text-gray-600">{mekanDetayData.foodDrink}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="olanaklar">
            <div className="p-6">
              <div className="p-0">
                <p className="text-gray-600">{mekanDetayData.amenities}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="calisma-saatleri">
            <div className="p-6">
              <div className="p-0">
                <p className="text-gray-600">{mekanDetayData.worksHours}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="rezervasyon">
            <div className="p-6">
              <div className="p-0">
                <p className="text-gray-600">{mekanDetayData.reservation}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Küçük ekranlar için Select ile içerik gösterimi */}
      <div className="lg:hidden">
        {selectedTab === "genel-bakis" && (
          <div className="mt-4">
            <div className="p-2">
              <p className="text-[#f5f5f5] text-sm sm:text-base leading-relaxed">
                {mekanDetayData.description}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Tel:{" "}
                </span>
                {mekanDetayData.phone}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Yer:{" "}
                </span>
                {mekanDetayData.address}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Müzik Türü:{" "}
                </span>
                {mekanDetayData.tur}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Bilet Fiyatları:{" "}
                </span>
                {mekanDetayData.price}
              </p>
              <Separator className="my-4" />
              <p className="text-[#f5f5f5] flex items-center text-sm sm:text-base gap-2">
                <span className="text-[#f5f5f5] font-semibold sm:w-20">
                  Yaş Sınırı:{" "}
                </span>
                {mekanDetayData.age}
              </p>
            </div>
          </div>
        )}
        {selectedTab === "etkinlikler" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{mekanDetayData.program}</p>
            </div>
          </div>
        )}
        {selectedTab === "sanatcilar" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{mekanDetayData.singers}</p>
            </div>
          </div>
        )}
        {selectedTab === "food-drinks" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{mekanDetayData.foodDrink}</p>
            </div>
          </div>
        )}
        {selectedTab === "olanaklar" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{mekanDetayData.amenities}</p>
            </div>
          </div>
        )}
        {selectedTab === "calisma-saatleri" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{mekanDetayData.worksHours}</p>
            </div>
          </div>
        )}
        {selectedTab === "rezervasyon" && (
          <div className="p-6 mt-4">
            <div className="p-0">
              <p className="text-gray-600">{mekanDetayData.reservation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
