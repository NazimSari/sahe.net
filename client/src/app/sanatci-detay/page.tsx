"use client";
import BagIcon from "@/components/icons/BagIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import UserIcon from "@/components/icons/UserIcon";
import VehicleIcon from "@/components/icons/VehicleIcon";
import { Button } from "@/components/ui/button";

import DetailsTab from "@/components/DetailsTab";
import { happyhourData, sanatciDetayData } from "@/lib/data";
import DetailsPriceCard from "@/components/DetailsPriceCard";
import { Check } from "lucide-react";
import { FaStar, FaUserCircle, FaDotCircle } from "react-icons/fa";
import StepsSection from "@/components/Home/StepsSection";
import SceneCards from "@/components/SceneCards";

export default function SanatciDetayPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-4 lg:pt-16 pt-28 bg-[url('/page3.jpg')] bg-cover bg-center flex items-center min-h-screen w-full">
        <div className="container mx-auto bg-[#160317]/50 rounded-2xl xl:py-20 py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 h-full w-full">
            {/* Görsel Kısmı */}
            <div className="w-full lg:w-1/2 max-w-[550px] aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="/rock-music.jpg"
                alt="Arser Orkestrası"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metin ve Bilgi Kısmı */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2 justify-center">
              <div className="flex flex-col gap-4 text-[#f5f5f5]">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Arser Orkestrası
                </h1>
                <p className="text-sm sm:text-base lg:text-xl font-semibold max-w-md leading-relaxed">
                  Efsanevi Gitar Soloları ve Patlayıcı Sahne Enerjisiyle
                  Tanışın!
                </p>
              </div>

              {/* İkonlar ve Bilgiler */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <VehicleIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm lg:text-lg">
                      Seyahat Mesafesi
                    </p>
                    <p className="text-[#858585] font-semibold text-sm lg:text-base">
                      1400 KM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <UserIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm lg:text-lg">
                      Profil Tipi
                    </p>
                    <p className="text-[#858585] font-semibold text-sm lg:text-base">
                      Grup (4-6 Kişi)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm lg:text-lg">
                      Ortalama Hizmet Süresi
                    </p>
                    <p className="text-[#858585] font-semibold text-sm lg:text-base">
                      150 Dakika
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BagIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm lg:text-lg">
                      Performans Tecrübesi
                    </p>
                    <p className="text-[#858585] font-semibold text-sm lg:text-base">
                      15 Yıl
                    </p>
                  </div>
                </div>
              </div>

              {/* Butonlar */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="flex-1 bg-[#FF007A] py-3 text-sm sm:text-base">
                  Hemen İzle
                </Button>
                <Button className="flex-1 bg-[#FF007A] py-3 text-sm sm:text-base">
                  Teklif Al
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160317]">
        <div className="container mx-auto py-16">
          <div className="flex flex-col lg:flex-row">
            <DetailsTab sanatciDetayData={sanatciDetayData} />
            <DetailsPriceCard sanatciDetayData={sanatciDetayData} />
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5]">
        <div className="container mx-auto py-16">
          <div className="flex flex-col gap-4 justify-center mb-10">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#040519] md:leading-snug">
              Arser Orkestrası Sahnesi
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#040519] text-sm md:text-base max-w-xl ml-2"
            >
              Grubunun canlı performansları, stüdyo kayıtları ve özel videoları
              burada! Her video, grubun tarzını ve yeteneğini yansıtıyor. Hemen
              izle, ritme kapıl!
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center p-3 md:p-0">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/y-ythWgSf1s?si=B5zVxRtRlsf8M6cY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/fN5hSvu1dzw?si=wUz3QERaALFPBAn0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/cAnOt74e9_Q?si=bAqT4JdYpKXGr3AY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/6POZlJAZsok?si=gzVsel4lOgWBuHDX"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/nIN3IE3DHqc?si=MYJKUFAJWWIekcNM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/wG1Siv_B_h8?si=pjQTgaKCe6Yh_Y8X"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160317]">
        <div className="container mx-auto py-8 md:py-16 px-4">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-evenly items-center">
            <div className="flex flex-col items-center gap-3 md:gap-5">
              <div className="relative border border-[#FF007A] rounded-full aspect-square w-[120px] md:w-[150px] lg:w-[200px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="text-[#FF007A] text-2xl  lg:text-4xl font-semibold">
                    100%
                  </p>
                </div>
              </div>
              <p className="text-[#f5f5f5] text-center text-sm md:text-base">
                Tekliflere Yanıt Verme Oranı
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-5">
              <div className="relative border border-[#FF007A] rounded-full aspect-square w-[120px] md:w-[150px] lg:w-[200px]">
                <div className="absolute lg:hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Check className="text-[#FF007A]" size={48} strokeWidth={3} />
                </div>
                <div className="absolute hidden lg:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Check className="text-[#FF007A]" size={80} strokeWidth={3} />
                </div>
              </div>
              <p className="text-[#f5f5f5] text-center text-sm md:text-base">
                Kimlik Onaylı
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-5">
              <div className="relative border border-[#FF007A] rounded-full aspect-square w-[120px] md:w-[150px] lg:w-[200px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="text-[#FF007A]  lg:text-3xl font-semibold">
                    5 Saat
                  </p>
                </div>
              </div>
              <p className="text-[#f5f5f5] text-center text-sm md:text-base">
                Ortalama Cevap Verme Süresi
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160317]">
        <div className="container mx-auto py-8 md:py-16 px-4">
          <div className="flex flex-col md:flex-row items-center gap-4  mb-10">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Değerlendirmeler{" "}
            </h3>
            <p className="flex text-[#FF007A] items-center lg:text-2xl md:text-lg gap-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}{" "}
              <span className="text-[#f5f5f5] mt-1">(5)</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-[#f5f5f5] flex flex-col md:flex-row items-center md:gap-8 gap-2 p-4 rounded-xl">
              <div className="flex flex-col justify-center gap-2">
                <FaUserCircle className="h-16 w-16 md:h-20 md:w-20 text-gray-300" />
                <p className="text-center text-sm md:text-base">Mehmet</p>
              </div>
              <div>
                <p className="text-sm md:text-base">
                  16.10.2016 tarihinde Piyalepaşa Hilton Otel'de yaptığımız
                  düğün etkinliğimizde hem repertuvar hemde muhteşem
                  performanslarından dolayı ARSER ORKESTRASI'na çok teşekkür
                  ederiz
                </p>
                <div className="flex items-center gap-2 mt-3 md:mt-0">
                  <span className="text-[#FF007A] text-xs md:text-sm">
                    16.05.2021
                  </span>
                  <span className="flex text-[#FF007A] items-center text-xs md:text-sm">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] flex flex-col md:flex-row items-center md:gap-8 gap-2 p-4 rounded-xl">
              <div className="flex flex-col justify-center gap-2">
                <FaUserCircle className="h-16 w-16 md:h-20 md:w-20 text-gray-300" />
                <p className="text-center text-sm md:text-base">Selin</p>
              </div>
              <div>
                <p className="text-sm md:text-base">
                  Umduğumuzdan fazla eğlendik siz de özel günlerinizde sıra dışı
                  bi eğlence diyorsanız Arser Grup &Orkestra yı seçebilirsiniz.
                </p>
                <div className="flex items-center gap-2 mt-3 md:mt-0">
                  <span className="text-[#FF007A] text-xs md:text-sm">
                    16.05.2021
                  </span>
                  <span className="flex text-[#FF007A] items-center text-xs md:text-sm">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5]">
        <div className="container mx-auto py-8 md:py-16 px-4">
          <StepsSection />
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center gap-6">
              <span>
                <FaDotCircle className="text-3xl" />
              </span>
              <p className="max-w-5xl md:text-base text-sm">
                Rezervasyonun onaylanması için havuz hesaba yaptığınız hizmet
                bedeli etkinlik başarıyla gerçekleştikten sonra herhangi bir
                şikayet bildiriminde bulunulmazsa sanatçıya gönderilmektedir.
                Rezervasyonu takiben iptal koşullarına uygun olarak gerekirse
                cayma hakkınızı da kullanabilirsiniz.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <span>
                <FaDotCircle className="text-3xl" />
              </span>
              <p className="max-w-5xl md:text-base text-sm">
                <span className="font-semibold">14 Gün Cayma Hakkı:</span>{" "}
                Rezervasyon tamamlandıktan sonra iptal koşulları ile çelişmemek
                kaydıyla takip eden 14 gün içerisinde cayma hakkınızı
                kullanabilirsiniz. İptal koşullarıyla ilgili daha fazlası
                için tıklayın!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160317]">
        <div className="container mx-auto py-16">
          <div className="flex flex-col gap-4 justify-center mb-10">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Benzer Saheneler
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Ruhuna Dokunan Ritimleri Yakala! Sana hitap eden benzer müzik
              gruplarıyla tanış, sahnede yeni favorilerini keşfet.
            </p>
          </div>
          <div className="mt-8">
            <SceneCards data={happyhourData} />
          </div>
        </div>
      </section>
    </main>
  );
}
