import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MemberForm() {
  return (
    <>
      <form>
        <div className="flex gap-4">
          <Input
            placeholder="Adınız Soyadınız"
            className="max-w-sm p-6 text-[#f5f5f5]"
          />
          <Input
            placeholder="E Posta Adresiniz"
            className="max-w-sm p-6 text-[#f5f5f5]"
          />
        </div>
        <div className="flex flex-col mt-2">
          <Select>
            <SelectTrigger className="mt-4 p-6 min-w-[784px] text-[#f5f5f5]">
              <SelectValue placeholder="Etkinlik Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Etkinlik 1</SelectItem>
              <SelectItem value="2">Etkinlik 2</SelectItem>
              <SelectItem value="3">Etkinlik 3</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="mt-6 max-w-sm p-6 text-base bg-[#FF007A] hover:bg-[#ff007b8b] cursor-pointer transition-all duration-200"
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
