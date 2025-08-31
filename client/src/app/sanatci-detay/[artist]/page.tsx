"use client";
import BagIcon from "@/components/icons/BagIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import UserIcon from "@/components/icons/UserIcon";
import VehicleIcon from "@/components/icons/VehicleIcon";
import { Button } from "@/components/ui/button";
import {
  commentsData,
  dataSources,
  mekanDetaySayfasiVideoData,
  sanatciDetayData,
} from "@/lib/data";
import { Check } from "lucide-react";
import { FaStar, FaDotCircle } from "react-icons/fa";
import StepsSection from "@/components/Home/PaymentStepsSection";
import DetailsTabArtist from "@/components/DeatilsTab/DetailsTabArtist";
import DetailsPriceCardArtist from "@/components/DeatilsPriceCard/DetailsPriceCardArtist";
import { useParams, notFound } from "next/navigation";
import { EventData } from "@/lib/data";
import InfoCard from "@/components/Cards/InfoCard";
import MobileInfoCardSwipeSlider from "@/components/SliderGsap/MobileInfoCardSwipeSlider";
import MobileVideoSlider from "@/components/SliderGsap/MobilVideoSlider";
import CommentsSection from "@/components/CommentSection";
import MobilCommentCardSlider from "@/components/SliderGsap/MobilCommentCardSlider";
import SuperArtistBadge from "@/components/SuperArtistBadge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { BookingCalendar } from "@/components/BookingCalendar";
import { Separator } from "@/components/ui/separator";

export default function SanatciDetayPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const params = useParams();
  const artistSlug = params.artist as string;

  // Tüm dataSources içinde sanatçıyı ara
  let sanatci: EventData | null = null;
  for (const category in dataSources) {
    const found = dataSources[category].find((s) => s.slug === artistSlug);
    if (found) {
      sanatci = found;
      break;
    }
  }

  if (!sanatci) {
    notFound();
  }

  // dataSources'dan rastgele 6 sanatçı al
  const displayArtists = Object.values(dataSources).flat().slice(4, 8);
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-4 lg:pt-16 pt-28 bg-[url('/page3.jpg')] bg-cover bg-center flex items-center min-h-screen w-full">
        <div className="container mx-auto bg-[#160317]/50 rounded-2xl xl:py-20 py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 h-full w-full">
            {/* Görsel Kısmı */}
            <div className="w-full relative lg:w-1/2 lg:max-w-[600px] md:aspect-[16/9] lg:aspect-[3/4]  xl:aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={sanatci.url}
                alt={sanatci.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-3">
                {sanatci.isSuperArtist && <SuperArtistBadge />}
              </div>
            </div>

            {/* Metin ve Bilgi Kısmı */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2 justify-center">
              <div className="flex flex-col gap-4 text-[#f5f5f5]">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  {sanatci.name}
                </h1>
                <p className="text-sm sm:text-base xl:text-lg font-semibold leading-relaxed">
                  {sanatci.description}
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex-1 bg-[#FF007A] hover:bg-[#f5f5f5] hover:text-[#FF007A] py-3 text-sm sm:text-base cursor-pointer">
                      Rezervasyon Yap
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>{sanatci.name} için rezervasyon</DialogTitle>
                    <div className="w-full flex justify-center mt-4">
                      <BookingCalendar
                        unavailableDates={sanatci.unavailableDates ?? []}
                        onSelectDate={(date) => setSelectedDate(date)}
                      />
                    </div>
                    {selectedDate && (
                      <p className="text-sm mt-2">
                        Seçilen Tarih:{" "}
                        <b>{selectedDate.toLocaleDateString()}</b>
                      </p>
                    )}
                  </DialogContent>
                </Dialog>
                <Button className="flex-1 bg-[#FF007A] hover:bg-[#f5f5f5] hover:text-[#FF007A] py-3 text-sm sm:text-base cursor-pointer">
                  Teklif Al
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#160317]">
        <div className="container mx-auto py-16 xl:px-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <DetailsTabArtist sanatciDetayData={sanatciDetayData} />
            <DetailsPriceCardArtist sanatciDetayData={sanatciDetayData} />
          </div>
        </div>
      </section>
      <section className="bg-[#160317]">
        <div className="container mx-auto md:pb-16">
          <div className="flex flex-col gap-4 justify-center md:mb-10">
            <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              {sanatci.name} Sahnesi
            </h3>
            <p
              id="scene-paragraf"
              className="text-[#f5f5f5] text-sm md:text-base max-w-xl ml-2"
            >
              Grubunun canlı performansları, stüdyo kayıtları ve özel videoları
              burada! Her video, grubun tarzını ve yeteneğini yansıtıyor. Hemen
              izle, ritme kapıl!
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
      <section className="bg-[#160317]">
        <div className="container mx-auto pb-16 md:py-16 px-4">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-evenly">
            {/* 1. Kart */}
            <div className="flex flex-col items-center gap-3 md:gap-5 flex-shrink-0">
              <div
                className="relative border border-[#FF007A] rounded-full aspect-square 
                        w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px]"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <p className="text-[#FF007A] text-lg sm:text-2xl lg:text-4xl font-semibold">
                    100%
                  </p>
                </div>
              </div>
              <p className="text-[#f5f5f5] text-center text-sm md:text-base">
                Tekliflere Yanıt Verme Oranı
              </p>
            </div>

            {/* 2. Kart */}
            <div className="flex flex-col items-center gap-3 md:gap-5 flex-shrink-0">
              <div
                className="relative border border-[#FF007A] rounded-full aspect-square 
                        w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px]"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Check
                    className="text-[#FF007A] sm:hidden"
                    size={28} // mobil default
                    strokeWidth={3}
                  />
                  <Check
                    className="text-[#FF007A] sm:block hidden"
                    size={48} // mobil default
                    strokeWidth={3}
                  />
                </div>
              </div>
              <p className="text-[#f5f5f5] text-center text-sm md:text-base">
                Kimlik Onaylı
              </p>
            </div>

            {/* 3. Kart */}
            <div className="flex flex-col items-center gap-3 md:gap-5 flex-shrink-0">
              <div
                className="relative border border-[#FF007A] rounded-full aspect-square 
                        w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px]"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <p className="text-[#FF007A] text-base sm:text-lg lg:text-3xl font-semibold text-center sm:text-start">
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
      <section className="bg-[#f5f5f5]">
        <div className="container mx-auto py-8 md:py-16 px-4">
          <StepsSection />
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center md:gap-4 gap-2">
              <span className="hidden md:block">
                <FaDotCircle className="text-2xl" />
              </span>
              <p className="max-w-5xl md:text-base text-sm">
                Rezervasyonun onaylanması için havuz hesaba yaptığınız hizmet
                bedeli etkinlik başarıyla gerçekleştikten sonra herhangi bir
                şikayet bildiriminde bulunulmazsa sanatçıya gönderilmektedir.
                Rezervasyonu takiben iptal koşullarına uygun olarak gerekirse
                cayma hakkınızı da kullanabilirsiniz.
              </p>
            </div>
            <div className="flex items-center md:gap-4 gap-2">
              <span className="hidden md:block">
                <FaDotCircle className="text-2xl" />
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
        <div className="container mx-auto md:py-16 pt-16">
          <div className="flex flex-col gap-4 justify-center md:mb-10">
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
          <div className="mt-8 hidden md:block">
            <InfoCard data={displayArtists} type="artist" />
          </div>
          <div className="md:hidden">
            <MobileInfoCardSwipeSlider data={displayArtists} type="artist" />
          </div>
        </div>
      </section>
    </main>
  );
}
