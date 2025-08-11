"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filter() {
  return (
    <>
      <div className="flex gap-1 items-center">
        <Input
          placeholder="Ara..."
          className="max-w-5xl md:py-6 bg-[#f5f5f5]"
        />
        <Button className="cursor-pointer hidden sm:flex w-1/3 md:py-6 bg-[#040519] text-[#FF007A] border hover:text-white">
          Sonuçları Göster
        </Button>
      </div>
      <div className="w-full flex flex-col  gap-3">
        <div className="flex flex-col sm:flex-row md:items-center  gap-3">
          <Select>
            <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-1/5">
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
            <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue placeholder="Etkinlik Türü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue placeholder="Müzik Türü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue placeholder="Gruplar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue placeholder="DJ’ler" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col sm:flex-row md:items-center gap-3">
          <Select>
            <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue
                placeholder="Enstrüman"
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
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue placeholder="Fiyatlar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue placeholder="Koşullar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue placeholder="Belgeler" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/5">
              <SelectValue placeholder="Solist" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="cursor-pointer sm:hidden md:py-6 bg-[#040519] text-[#FF007A] border hover:text-white">
          Sonuçları Göster
        </Button>
      </div>
    </>
  );
}
