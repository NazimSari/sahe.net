"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
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
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  talent: string;
}

export default function MemberForm() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    talent: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Input değişimlerini yönet
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Select değişimlerini yönet
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      talent: value,
    });
  };

  // Form submit işlemi
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Basit doğrulama: Tüm alanlar dolu mu?
    if (!formData.name || !formData.email || !formData.talent) {
      toast.error("Lütfen gerekli alanları doldurun!");
      setIsLoading(false);
      return;
    }

    // E-posta format doğrulama
    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail(formData.email)) {
      toast.error("Geçerli bir e-posta adresi girin!");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/register/pre-register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error("Ön kayıt basarısız!");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      toast.success("Ön kayıt başarılı!");
      setFormData({ name: "", email: "", talent: "" }); // Formu sıfırla
      setIsLoading(false);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Bir hata oluştu, lütfen tekrar deneyin!";
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Adınız Soyadınız"
            className="flex-1 md:p-6 p-3 text-[#f5f5f5] md:text-base text-sm  min-w-0"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            placeholder="E Posta Adresiniz"
            className="flex-1 md:p-6 p-3 text-[#f5f5f5] md:text-base text-sm  min-w-0"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-2">
          <Select onValueChange={handleSelectChange} value={formData.talent}>
            <SelectTrigger className="mt-3 md:p-6 py-6 text-[#f5f5f5] w-full md:text-base text-sm min-w-0">
              <SelectValue placeholder="Yetkinliğinizi Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Müzik</SelectLabel>
                <SelectItem value="enstruman">Enstrüman</SelectItem>
                <SelectItem value="solist">Solist</SelectItem>
                <SelectItem value="dj">Dj Performans</SelectItem>
                <SelectItem value="group">Müzik Grubu</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Mekan</SelectLabel>
                <SelectItem value="canlimuzik">Canlı Müzik</SelectItem>
                <SelectItem value="roofbar">Roof Bar</SelectItem>
                <SelectItem value="kokteyl">Kokteyl Bar</SelectItem>
                <SelectItem value="beachclub">Beach Club</SelectItem>
                <SelectItem value="vipDj">Vip DJ</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Özel Çekim</SelectLabel>
                <SelectItem value="fotograf">Fotoğraf Çekimi</SelectItem>
                <SelectItem value="video">Video Çekimi</SelectItem>
                <SelectItem value="instagram">Instagram Çekimi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            disabled={isLoading}
            className="md:p-6 p-3 text-sm md:text-base bg-[#FF007A] hover:bg-[#ff007b8b] cursor-pointer transition-all duration-200 w-fit px-8 md:w-full"
            size={"lg"}
            variant="default"
            type="submit"
          >
            {isLoading ? "Gönderiliyor..." : "Ön Kayıt"}
          </Button>
        </div>
      </form>
    </>
  );
}
