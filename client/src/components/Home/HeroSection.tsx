import Image from "next/image";
import React from "react";
import MemberForm from "../MemberForm";

export default function HeroSection() {
  return (
    <section className="mx-auto container h-screen bg-[url('/hero.png')] bg-cover bg-end">
      <div className="grid grid-cols-1 md:grid-cols-12 h-full">
        <div className="md:col-span-8 flex flex-col justify-center gap-5">
          <h1 className="text-7xl font-bold text-[#f5f5f5]">
            Etkinlikleriniz İçin Sanatçılara Ulaşmanın <br />
            En Kolay Yolu
          </h1>
          <p className="text-[#f5f5f5] font-semibold text-xl leading-relaxed">
            Müzisyenlerin buluştuğu en iyi online platforma hoş geldin! Her
            türlü etkinlik için <br />
            müzisyenleri kolayca bul, iletişime geç ve hemen rezervasyon yap.
          </p>
          <div className="mt-10">
            <MemberForm />
          </div>
        </div>
      </div>
    </section>
  );
}
