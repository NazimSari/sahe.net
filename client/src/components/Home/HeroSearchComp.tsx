import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { CiSearch } from "react-icons/ci";

export default function HeroSearchComp() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div>
      {" "}
      <form className="max-w-3xl">
        <div className="flex flex-col gap-4 md:flex-row">
          <Select>
            <SelectTrigger className="flex-1 md:p-6 p-3 text-[#f5f5f5] md:text-base text-sm w-full">
              <SelectValue placeholder="Şehir Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="istanbul">İstanbul</SelectItem>
              <SelectItem value="ankara">Ankara</SelectItem>
              <SelectItem value="izmir">İzmir</SelectItem>
              <SelectItem value="antalya">Antalya</SelectItem>
              <SelectItem value="mugla">Muğla</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <div
                role="button"
                tabIndex={0}
                className="flex-1 p-3 bg-transparent text-white/40 w-full  text-sm sm:text-base border rounded-md px-4 text-left cursor-pointer"
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
        <div className="flex flex-col mt-2">
          <div className="relative w-full mt-3">
            <Input
              placeholder="Sanatçı, etkinlik, müzik türüne göre arayınız"
              className="md:p-6 py-6 text-[#f5f5f5] w-full md:text-base text-sm min-w-0 pr-10"
            />

            <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground cursor-pointer" />
          </div>

          <Button
            className="md:p-6 p-3 mt-5 text-sm md:text-base bg-[#FF007A] hover:bg-[#ff007b8b] cursor-pointer transition-all duration-200 px-8 w-full"
            size={"lg"}
            variant="default"
            type="submit"
          >
            Keşfet
          </Button>
        </div>
      </form>
    </div>
  );
}
