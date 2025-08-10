"use client";
import Countdown from "@/components/Countdown";
import DetailsPriceCardFestival from "@/components/DeatilsPriceCard/DetailsPriceCardFestival";
import DetailsTabFstival from "@/components/DeatilsTab/DetailsTabFstival";
import FestivalSection from "@/components/Home/FestivalSection";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FestivalDetayPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="bg-[url('/page5.jpg')] bg-cover bg-center flex flex-col justify-center items-center h-auto min-h-[60vh] md:min-h-screen w-full gap-6 md:gap-10 pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
            <p className="text-xs sm:text-sm md:text-base px-4 py-2 rounded-lg font-semibold bg-[#f5f5f5]">
              KüçükÇiftlik Park İstanbul
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold text-[#f5f5f5] leading-tight">
              İstanbul Yaz Rüzgarı Festivali
            </h1>
          </div>
        </div>
        <div className="bg-[#160317]/70 w-full h-24 md:h-32 flex items-center justify-center">
          <Countdown />
        </div>
        <div>
          <button className="px-4 py-2 sm:py-3 rounded-lg font-semibold bg-[#f5f5f5] hover:bg-[#040519] hover:text-[#f5f5f5] border hover:border-[#FF007A] transition duration-300 ease-in-out cursor-pointer text-sm sm:text-base md:text-lg md:w-2xl">
            Rezervasyon Yap
          </button>
        </div>
      </section>
      <section className="w-full bg-[#160317]">
        <div className="container mx-auto py-16 xl:px-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <DetailsTabFstival />
            <DetailsPriceCardFestival />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317]">
        <div className="container mx-auto py-16">
          <div className="flex flex-col gap-4 justify-center mb-10">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Festivalin Yıldızları Sahneye Çıkıyor!
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-3xl ml-2"
            >
              İstanbul Yaz Rüzgarı Festivali’nin ruhunu oluşturan sanatçıları
              keşfet! Yerli ve uluslararası müzik sahnesinin en parlak
              isimlerinin videolarını izle, görsellerine göz at ve onların
              hikayelerine dal. Her bir sanatçının eşsiz enerjisiyle festival
              coşkusunu şimdiden hisset!
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center p-3 md:p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/h61QG4s0I3U?si=ttnDq6KhiF9w_QgC"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/ub747pprmJ8?si=WVDdgV-WtV02TaUL"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/beGjncfEPt8?si=jxvxkeT8j7gPpiO3"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/bVRnMrl2oj8?si=A2GkJeeHF5K-_bfA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/rdlvPe959Ck?si=3XeHHNnXAUhUYgwu"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/mMfxI3r_LyA?si=4gh5vL8jO7ObtrG-"
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
      <SubscriptionSection />
      <FestivalSection />
    </main>
  );
}
