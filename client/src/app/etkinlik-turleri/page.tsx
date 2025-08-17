import Filter from "@/components/Filters/Filter";
import Banner from "@/components/Home/Banner";
import StepsSection from "@/components/Home/StepsSection";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import MobilFilter from "@/components/Filters/MobilFilter";
import SceneCards from "@/components/Cards/SceneCards";
import ArtistSlider from "@/components/SliderGsap/ArtistSlider";
import {
  babyshowerData,
  djData,
  dogumGunuData,
  happyhourData,
  ozelcekimData,
  sahneData,
} from "@/lib/data";

import Link from "next/link";
import React from "react";
import MobilArtistSlider from "@/components/SliderGsap/MobilArtistSlider";

export default function EtkinlikTurleri() {
  return (
    <main className="bg-[#040519] min-h-screen w-full overflow-hidden">
      <section className="p-4 pt-16 sm:pt-20 bg-[url('/page2.jpg')] bg-cover bg-center flex items-center min-h-screen w-full">
        <div className="container mx-auto flex flex-col justify-center gap-8 py-8">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-tight max-w-4xl">
              Tarzına Uygun Müzik Gruplarını Keşfet
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl font-semibold text-[#f5f5f5] max-w-4xl leading-relaxed">
              Rock’tan caza, pop’tan metale, her türden müzik grubunu bir arada
              bulabileceğin yerdesin! Kategorilere göz at, tarzını seç ve sana
              en uygun grupları keşfet. Etkinliklerin için mükemmel performansı
              bulmak ya da yeni favori grubunu dinlemek için şimdi aramaya
              başla!
            </p>
          </div>
          <div className="hidden sm:block">
            <Filter />
          </div>
          <div className="sm:hidden">
            <MobilFilter />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Düğün Etkinlikleri
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Aşkınızı müziğin büyüsüyle kutlayın! Düğün etkinlikleriniz için en
              iyi müzik gruplarını keşfedin, romantik ve enerjik anlar yaratın.
            </p>
          </div>
          <div className="mt-8">
            <SceneCards data={sahneData} />
          </div>
          <div className="text-center mt-2">
            <Link href="/etkinlik-turleri" className="text-[#f5f5f5]">
              Daha Fazla Gör
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f5f5f5] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#040519] md:leading-snug">
              Doğum Günü Etkinlikleri
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#040519] text-sm md:text-base max-w-xl ml-2"
            >
              Doğum günün sıradan olmasın! En eğlenceli müzik gruplarıyla
              partini unutulmaz kıl. Tarzını seç, ritme kapıl ve yeni yaşını
              coşkuyla kutla!
            </p>
          </div>
          <div className="mt-8">
            <SceneCards data={dogumGunuData} />
          </div>
          <div className="text-center mt-5">
            <Link href="/etkinlik-turleri" className="text-[#040519]">
              Daha Fazla Gör
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-20 md:py-16">
        <div className="container mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h3 className="md:text-4xl text-2xl px-2 font-bold text-center text-[#f5f5f5] md:leading-snug">
              Aramıza Yeni Katılanlar{" "}
            </h3>
            <p className="text-[#f5f5f5] text-sm md:text-base text-center mb-16 md:mb-12">
              Platformumuzun en yeni sanatçılarını ve onların özgün eserlerini
              keşfedin!
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <ArtistSlider />
        </div>
        <div className="md:hidden">
          <MobilArtistSlider />
        </div>
      </section>
      <section className="w-full bg-[#f5f5f5] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#040519] md:leading-snug">
              Baby Shower Etkinlikleri
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#040519] text-sm md:text-base max-w-xl ml-2"
            >
              Anne adayları için unutulmaz anlar… Baby Shower etkinliklerimizle,
              bu özel günü sevdiklerinizle birlikte eğlenceli ve şık bir
              kutlamaya dönüştürün!
            </p>
          </div>
          <div className="mt-8">
            <SceneCards data={babyshowerData} />
          </div>
          <div className="text-center mt-5">
            <Link href="/etkinlik-turleri" className="text-[#040519]">
              Daha Fazla Gör
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Happy Hour Etkinlikleri
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              İş çıkışı stresini atmak isteyenler için keyifli bir mola!
              Lezzetli ikramlar ve müzik eşliğinde sosyalleşmenin tam zamanı.
            </p>
          </div>
          <div className="mt-8">
            <SceneCards data={happyhourData} />
          </div>
          <div className="text-center mt-2">
            <Link href="/etkinlik-turleri" className="text-[#f5f5f5]">
              Daha Fazla Gör
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f5f5f5] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#040519] md:leading-snug">
              DJ Performansı
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#040519] text-sm md:text-base max-w-xl ml-2"
            >
              Zarif bir atmosferde, özenle seçilmiş setler… DJ
              performanslarımızla geceye ritmini ve şıklığını katıyoruz.
            </p>
          </div>
          <div className="mt-8">
            <SceneCards data={djData} />
          </div>
          <div className="text-center mt-5">
            <Link href="/etkinlik-turleri" className="text-[#040519]">
              Daha Fazla Gör
            </Link>
          </div>
        </div>
      </section>
      <Banner />
      <section className="w-full bg-[#f5f5f5] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#040519] md:leading-snug">
              Özel Çekimler
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#040519] text-sm md:text-base max-w-xl ml-2"
            >
              Her karede zarafet, her sahnede duygu… Özel çekimlerimizle bu
              unutulmaz anları estetik ve sanatsal bir dokunuşla
              ölümsüzleştiriyoruz.
            </p>
          </div>
          <div className="mt-8">
            <SceneCards data={ozelcekimData} />
          </div>
          <div className="text-center mt-5">
            <Link href="/etkinlik-turleri" className="text-[#040519]">
              Daha Fazla Gör
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f5f5f5]">
        <StepsSection />
      </section>
      <SubscriptionSection />
    </main>
  );
}
