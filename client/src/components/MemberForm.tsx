"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MemberForm() {
  return (
    <>
      <form className="max-w-3xl">
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Adınız Soyadınız"
            className="flex-1 md:p-6 p-3 text-[#f5f5f5] md:text-base text-sm  min-w-0"
          />
          <Input
            placeholder="E Posta Adresiniz"
            className="flex-1 md:p-6 p-3 text-[#f5f5f5] md:text-base text-sm  min-w-0"
          />
        </div>
        <div className="flex flex-col mt-2">
          <Select>
            <SelectTrigger className="mt-4 p-6  text-[#f5f5f5] w-full">
              <SelectValue placeholder="Etkinlik Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Müzik</SelectLabel>
                <SelectItem value="enstruman">Enstrüman</SelectItem>
                <SelectItem value="solist">Solist</SelectItem>
                <SelectItem value="dj">Dj Performans</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Mekan</SelectLabel>
                <SelectItem value="roofbar">Roof Bar</SelectItem>
                <SelectItem value="kokteyl">Kokteyl Bar</SelectItem>
                <SelectItem value="canlimuzik">Canlı Müzik</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            className="md:p-6 p-3 text-base bg-[#FF007A] hover:bg-[#ff007b8b] cursor-pointer transition-all duration-200"
            size={"lg"}
            variant="default"
          >
            Rezervasyon Yap
          </Button>
        </div>
      </form>
    </>
  );
}
