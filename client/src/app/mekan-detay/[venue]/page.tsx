"use client";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Music, UserRoundX } from "lucide-react";
import DetailsTabPlace from "@/components/DeatilsTab/DetailsTabPlace";
import { FaStar } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  commentsData,
  dataSources,
  EventData,
  mekanDetaySayfasiVideoData,
} from "@/lib/data";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import { notFound, useParams } from "next/navigation";
import MobilVenueDetailsPageThisWeekSlider from "@/components/SliderGsap/MobilVenueDeatilsPageThisWeekSlider";
import VenueDetailsPageThisWeekCard from "@/components/Cards/VenueDetailsPageThisWeekCard";
import MobileVideoSlider from "@/components/SliderGsap/MobilVideoSlider";
import CommentsSection from "@/components/CommentSection";
import MobilCommentCardSlider from "@/components/SliderGsap/MobilCommentCardSlider";
import InfoCard from "@/components/Cards/InfoCard";
import MobileInfoCardSwipeSlider from "@/components/SliderGsap/MobileInfoCardSwipeSlider";

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
            <div className="w-full lg:w-1/2 lg:max-w-[600px] md:aspect-[16/9] lg:aspect-[3/4]  xl:aspect-[4/3] overflow-hidden rounded-xl">
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
          <div className="flex flex-col xl:grid lg:grid-cols-[3fr_1fr] gap-4">
            {/* 1. ve 2. kolon */}
            <DetailsTabPlace />
            {/* 3.kolon */}

            <div className="w-full  lg:w-full mx-auto flex flex-col xl:gap-3  px-2 mt-10 xl:mt-0">
              <h3 className="text-2xl font-semibold text-[#f5f5f5] text-center md:mb-3">
                Bu Hafta Sahnede
              </h3>
              <div className="hidden xl:flex">
                <VenueDetailsPageThisWeekCard />
              </div>
              <div className="w-full xl:hidden">
                <MobilVenueDetailsPageThisWeekSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160317] md:pb-10">
        <div className="container mx-auto pb-6">
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
          <div className="hidden md:flex flex-col gap-4 justify-center p-3 md:p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mekanDetaySayfasiVideoData.map((video) => (
                <div key={video.id} className="relative aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <MobileVideoSlider videoData={mekanDetaySayfasiVideoData} />
          </div>
        </div>
      </section>
      <section className="bg-[#160317] pb-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:gap-4 gap-2 mb-2">
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
          <div className="hidden md:block">
            <CommentsSection />
          </div>
          <div className="md:hidden">
            <MobilCommentCardSlider comments={commentsData} />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317]">
        <div className="container mx-auto pb-16">
          <div className="flex flex-col gap-4 justify-center">
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
      <section className="w-full bg-[#160317] pb-16">
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
          <div className="mt-8 hidden md:block">
            <InfoCard data={displayArtists} type="artist" />
          </div>
          <div className="mt-8 md:hidden">
            <MobileInfoCardSwipeSlider data={displayArtists} type="artist" />
          </div>
        </div>
      </section>
      <SubscriptionSection />
    </main>
  );
}
