"use client";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Music, UserRoundX } from "lucide-react";
import DetailsTabPlace from "@/components/DeatilsTab/DetailsTabPlace";
import { FaFacebookSquare, FaStar, FaUserCircle } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { canliMuzikData, dataSources, EventData } from "@/lib/data";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import { notFound, useParams } from "next/navigation";

export default function MekanDetayPage() {
  const params = useParams();
  const venueSlug = params.venue as string;

  // Tüm dataSources içinde sanatçıyı ara
  let mekan: EventData | null = null;
  for (const category in dataSources) {
    const found = dataSources[category].find((s) => s.slug === venueSlug);
    if (found) {
      mekan = found;
      break;
    }
  }

  if (!mekan) {
    notFound();
  }

  // dataSources'dan rastgele 6 sanatçı al
  const displayArtists = Object.values(dataSources).flat().slice(4, 8);
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-4 lg:pt-16 pt-28 bg-[url('/page11.jpg')] bg-cover bg-center flex items-center min-h-screen w-full">
        <div className="container mx-auto bg-[#040519]/50 rounded-2xl xl:py-20 py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 h-full w-full">
            {/* Görsel Kısmı */}
            <div className="w-full lg:w-1/2 max-w-[550px] aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={mekan.url}
                alt={mekan.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metin ve Bilgi Kısmı */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2 justify-center">
              <div className="flex flex-col gap-4 text-[#f5f5f5]">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  {mekan.name}
                </h1>
                <p className="text-sm sm:text-base lg:text-xl font-semibold max-w-md leading-relaxed">
                  {mekan.description}
                </p>
              </div>

              {/* İkonlar ve Bilgiler */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm lg:text-lg">
                      İstiklal Cd. 123,
                    </p>
                    <p className="text-[#858585] font-semibold text-sm lg:text-base">
                      Beyoğlu, İstanbul
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm lg:text-lg">
                      150 kişi (İç mekan)
                    </p>
                    <p className="text-[#858585] font-semibold text-sm lg:text-base">
                      + 50 kişi (Teras)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Music className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm lg:text-lg">
                      Canlı Müzik
                    </p>
                    <p className="text-[#858585] font-semibold text-sm lg:text-base">
                      (Rock, Indie, Pop)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <UserRoundX className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm lg:text-lg">
                      Yaş Sınırı
                    </p>
                    <p className="text-[#858585] font-semibold text-sm lg:text-base">
                      19+ (Hafta Sonu 21+)
                    </p>
                  </div>
                </div>
              </div>

              {/* Butonlar */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="flex-1 bg-[#FF007A] hover:bg-[#f5f5f5] hover:text-[#FF007A] py-3 text-sm sm:text-base cursor-pointer">
                  Hemen İzle
                </Button>
                <Button className="flex-1 bg-[#FF007A] hover:bg-[#f5f5f5] hover:text-[#FF007A] py-3 text-sm sm:text-base cursor-pointer">
                  Teklif Al
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160317]">
        <div className="container mx-auto py-16">
          <div className="flex flex-col lg:grid lg:grid-cols-[3fr_1fr] gap-4">
            {/* 1. ve 2. kolon */}
            <DetailsTabPlace />
            {/* 3.kolon */}
            <div className="w-full md:w-2/3 lg:w-full mx-auto flex flex-col gap-3 lg:ml-3 p-2">
              <h3 className="text-2xl text-[#f5f5f5] text-center mb-3">
                Bu Hafta Sahnede
              </h3>
              <div className="p-2 bg-gray-100 rounded-lg">
                <div className="flex  gap-2">
                  <div className="w-30 h-30  aspect-[1/1] overflow-hidden rounded-xl">
                    <img
                      src="https://st5.depositphotos.com/3430693/72771/i/380/depositphotos_727719968-stock-photo-mixing-music-professional-equipment-showcasing.jpg"
                      alt="Arser Orkestrası"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold underline decoration-[#FF007A] decoration-2">
                      Salamanca
                    </h4>
                    <p className="text-sm">Pazartesi-Salı-Çarşamba </p>
                    <p className="text-sm">21:00-24:00</p>
                    <div className="flex gap-2 items-center mt-2">
                      <FaFacebookSquare size={20} color="#FF007A" />
                      <FaSquareInstagram size={20} color="#FF007A" />
                      <FaLinkedin size={20} color="#FF007A" />
                      <AiFillTikTok size={20} color="#FF007A" />
                      <IoLogoYoutube size={20} color="#FF007A" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <div className="flex  gap-2">
                  <div className="w-30 h-30 aspect-[1/1] overflow-hidden rounded-xl">
                    <img
                      src="https://st.depositphotos.com/1026550/4167/i/380/depositphotos_41679805-stock-photo-dj-silhouette.jpg"
                      alt="Arser Orkestrası"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold underline decoration-[#FF007A] decoration-2">
                      DJ Ernesto
                    </h4>
                    <p className="text-sm">Pazartesi-Perşembe </p>
                    <p className="text-sm">20:00-21:00</p>
                    <div className="flex gap-2 items-center mt-2">
                      <FaFacebookSquare size={20} color="#FF007A" />
                      <FaSquareInstagram size={20} color="#FF007A" />
                      <FaLinkedin size={20} color="#FF007A" />
                      <AiFillTikTok size={20} color="#FF007A" />
                      <IoLogoYoutube size={20} color="#FF007A" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <div className="flex  gap-2">
                  <div className="w-30 h-30 aspect-[1/1] overflow-hidden rounded-xl">
                    <img
                      src="https://st3.depositphotos.com/13194036/18527/i/380/depositphotos_185271722-stock-photo-black-and-white-shot-of.jpg"
                      alt="Arser Orkestrası"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold underline decoration-[#FF007A] decoration-2">
                      Engin Yurt
                    </h4>
                    <p className="text-sm">Cuma-Cumartesi </p>
                    <p className="text-sm">20:00-22:00</p>
                    <div className="flex gap-2 items-center mt-2">
                      <FaFacebookSquare size={20} color="#FF007A" />
                      <FaSquareInstagram size={20} color="#FF007A" />
                      <FaLinkedin size={20} color="#FF007A" />
                      <AiFillTikTok size={20} color="#FF007A" />
                      <IoLogoYoutube size={20} color="#FF007A" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <div className="flex  gap-2">
                  <div className="w-30 h-30 aspect-[1/1] overflow-hidden rounded-xl">
                    <img
                      src="https://st3.depositphotos.com/10638998/15080/i/380/depositphotos_150801298-stock-photo-rock-band-on-stage.jpg"
                      alt="Arser Orkestrası"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold underline decoration-[#FF007A] decoration-2">
                      Tyler Durden
                    </h4>
                    <p className="text-sm">Cuma-Cumartesi </p>
                    <p className="text-sm">22:00-24:00</p>
                    <div className="flex gap-2 items-center mt-2">
                      <FaFacebookSquare size={20} color="#FF007A" />
                      <FaSquareInstagram size={20} color="#FF007A" />
                      <FaLinkedin size={20} color="#FF007A" />
                      <AiFillTikTok size={20} color="#FF007A" />
                      <IoLogoYoutube size={20} color="#FF007A" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160317]">
        <div className="container mx-auto py-16">
          <div className="flex flex-col gap-4 justify-center mb-10">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Neon Pulse Sanatçıları Sahnede!
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-3xl ml-2"
            >
              Işıltılı sahneler, enerjik performanslar ve unutulmaz anlar…Neon
              Pulse sanatçılarının canlı performans videolarıyla enerjiyi
              önceden hissedin.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center p-3 md:p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/hN9yVnM9W68?si=w6sIApbD5UY1oGWh"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/UpxKKBLUP2g?si=ia3lyyXJN3mipgJn"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/YVkUvmDQ3HY?si=5M9hMfVVn4GCUMR2"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/EDwb9jOVRtU?si=G1Eqi1g7iS1tMNEB"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/h_D3VFfhvs4?si=yHd1WnfRi0eHTB-x"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/1V_xRb0x9aw?si=Rm9CXJVUNUflav_4"
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
                  performanslarından dolayı Neon Pulse çok teşekkür ederiz
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
                  bi eğlence diyorsanız ANeon Pulse yı seçebilirsiniz.
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
      <section className="w-full bg-[#160317]">
        <div className="container mx-auto py-16">
          <div className="flex flex-col gap-4 justify-center mb-10">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Sıkça Sorulan Sorular
            </h3>
          </div>
          <div className="p-3">
            <Accordion
              type="single"
              collapsible
              className="w-full md:w-1/2"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                    Festival alanında yiyecek-içecek getirebilir miyim?
                  </p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-[#f5f5f5]">
                    Dışarıdan yiyecek-içecek getirilmesi yasaktır, ancak alanda
                    geniş bir seçenek yelpazesi mevcut.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                    Yağmur yağarsa ne olacak?
                  </p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-[#f5f5f5]">
                    Festival açık hava etkinliği olsa da, yağmurlu hava için
                    çadırlar ve kapalı alanlar hazır.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                    Bilet iadesi yapılıyor mu?
                  </p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-[#f5f5f5]">
                    İade politikamız için web sitemizi ziyaret edin. Genellikle
                    7 gün öncesine kadar iade mümkün
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <p className="text-[#f5f5f5] md:text-xl text-lg cursor-pointer">
                    Güvenlik nasıl sağlanıyor?
                  </p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-[#f5f5f5]">
                    Profesyonel güvenlik ekibi ve sağlık personeli 7/24 alanda
                    bulunacak
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4  justify-center">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Benzer Mekanlar
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Cazdan latin ezgilerine, akustik performanslardan ünlü
              sanatçılara… Özenle seçilmiş canlı müzik mekanlarında, ritmin ve
              atmosferin büyüsüne kapılın!
            </p>
          </div>
          <div className="mt-6">
            {/* <PlaceCards data={canliMuzikData} /> */}
          </div>
        </div>
      </section>
      <SubscriptionSection />
    </main>
  );
}
