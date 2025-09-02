"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Input değişimlerini yönet
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basit doğrulama: Tüm alanlar dolu mu?
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Lütfen gerekli alanları doldurun!");
      setLoading(false);
      return;
    }

    // E-posta format doğrulama
    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail(formData.email)) {
      toast.error("Geçerli bir e-posta adresi girin!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/contact/contact-message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error(
          "Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin!"
        );
        setLoading(false);
        return;
      }
      const data = await response.json();
      toast.success("Mesajınız başarıyla gönderildi!");
      setFormData({ name: "", email: "", message: "" }); // Formu sıfırla
      setLoading(false);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Bir hata oluştu, lütfen tekrar deneyin!";
      toast.error(errorMessage);
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          name="name"
          placeholder="Adınız Soyadınız"
          value={formData.name}
          onChange={handleChange}
          required
          className="flex-1 md:p-4 p-3 text-[#f5f5f5] md:text-base text-sm"
        />
        <Input
          name="email"
          placeholder="E Mail Adresiniz"
          value={formData.email}
          onChange={handleChange}
          required
          className="flex-1 md:p-4 p-3 text-[#f5f5f5] md:text-base text-sm"
        />
        <Textarea
          style={{ height: "230px" }}
          name="message"
          placeholder="Mesajınız"
          value={formData.message}
          onChange={handleChange}
          required
          className="md:p-4 p-3 text-[#f5f5f5] md:text-base text-sm resize-none"
        />
        <Button
          type="submit"
          className="flex-1 bg-[#FF007A] hover:bg-[#f5f5f5] hover:text-[#FF007A] py-3 text-sm sm:text-base cursor-pointer"
        >
          {loading ? "Gönderiliyor..." : "Gönder"}
        </Button>
      </form>
    </div>
  );
}
