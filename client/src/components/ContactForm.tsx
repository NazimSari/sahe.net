import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <Input
          placeholder="Adınız Soyadınız"
          className="flex-1 md:p-4 p-3 text-[#f5f5f5] md:text-base text-sm"
        />
        <Input
          placeholder="E Mail Adresiniz"
          className="flex-1 md:p-4 p-3 text-[#f5f5f5] md:text-base text-sm"
        />
        <Textarea
          style={{ height: "230px" }}
          placeholder="Mesajınız"
          className="md:p-4 p-3 text-[#f5f5f5] md:text-base text-sm resize-none"
        />
        <Button className="flex-1 bg-[#FF007A] hover:bg-[#f5f5f5] hover:text-[#FF007A] py-3 text-sm sm:text-base cursor-pointer">
          Gönder
        </Button>
      </form>
    </div>
  );
}
