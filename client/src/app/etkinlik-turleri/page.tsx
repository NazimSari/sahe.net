import Filter from "@/components/Filters/Filter";
import Banner from "@/components/Home/Banner";
import StepsSection from "@/components/Home/PaymentStepsSection";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import MobilFilter from "@/components/Filters/MobilFilter";
import NewArtistSlider from "@/components/SliderGsap/NewArtistSlider";
import MobilArtistSlider from "@/components/SliderGsap/MobilArtistSlider";
import { dataSources, eventTypesSlider } from "@/lib/data";
import Link from "next/link";
import InfoCard from "@/components/Cards/InfoCard";
import MobileInfoCardSwipeSlider from "@/components/SliderGsap/MobileInfoCardSwipeSlider";

export default function EtkinlikTurleri() {
  return (
    <main className="bg-[#040519] min-h-screen w-full overflow-hidden">
      <section className="p-4 pt-16 sm:pt-20 bg-[url('/page2.webp')] bg-cover bg-center flex items-center min-h-screen w-full">
        <div className="container mx-auto flex flex-col justify-center gap-8 py-8">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-tight max-w-4xl">
              Tarzına Uygun Etkinlik Sanatçılarını Keşfet
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
      {/* İlk 4 Kategori Section'ı */}
      {eventTypesSlider.slice(0, 4).map((etkinlik) => {
        const dataSource = dataSources[etkinlik.slug];
        if (!dataSource) return null; // Veri kaynağı yoksa atla

        return (
          <section
            key={etkinlik.slug}
            className={`w-full py-16 ${
              ["dogum-gunu", "baby-shower", "ozel-cekim"].includes(
                etkinlik.slug
              )
                ? "bg-[#f5f5f5]"
                : "bg-[#160317]"
            }`}
          >
            <div className="container mx-auto">
              <div className="flex flex-col gap-4 justify-center">
                <h3
                  className={`md:text-4xl text-2xl max-w-2xl ml-2 font-bold md:leading-snug ${
                    ["dogum-gunu", "baby-shower", "ozel-cekim"].includes(
                      etkinlik.slug
                    )
                      ? "text-[#040519]"
                      : "text-[#f5f5f5]"
                  }`}
                >
                  {etkinlik.title}
                </h3>
                <p
                  id="scene-paragraf"
                  className={`text-sm md:text-base max-w-xl ml-2 ${
                    ["dogum-gunu", "baby-shower", "ozel-cekim"].includes(
                      etkinlik.slug
                    )
                      ? "text-[#040519]"
                      : "text-[#f5f5f5]"
                  }`}
                >
                  {etkinlik.description}
                </p>
              </div>
              <div className="mt-8 hidden md:block">
                <InfoCard data={dataSource} type="artist" />
              </div>
              <div className="mt-8 md:hidden">
                <MobileInfoCardSwipeSlider data={dataSource} type="artist" />
              </div>
              <div className="text-center mt-5 font-semibold underline decoration-[#FF007A] decoration-2">
                <Link
                  href={`/etkinlik-turleri/${etkinlik.slug}`}
                  className={
                    ["dogum-gunu", "baby-shower", "ozel-cekim"].includes(
                      etkinlik.slug
                    )
                      ? "text-[#040519]"
                      : "text-[#f5f5f5]"
                  }
                >
                  Daha Fazla Gör
                </Link>
              </div>
            </div>
          </section>
        );
      })}
      {/* Aramıza Yeni Katılanlar */}
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
          <NewArtistSlider />
        </div>
        <div className="md:hidden">
          <MobilArtistSlider />
        </div>
      </section>

      {/* Geri Kalan Kategori Section'ları */}
      {eventTypesSlider.slice(4).map((etkinlik) => {
        const dataSource = dataSources[etkinlik.slug];
        if (!dataSource) return null; // Veri kaynağı yoksa atla

        return (
          <section
            key={etkinlik.slug}
            className={`w-full py-16 ${
              ["dj-performans", "ozel-cekim"].includes(etkinlik.slug)
                ? "bg-[#f5f5f5]"
                : "bg-[#160317]"
            }`}
          >
            <div className="container mx-auto">
              <div className="flex flex-col gap-4 justify-center">
                <h3
                  className={`md:text-4xl text-2xl max-w-2xl ml-2 font-bold md:leading-snug ${
                    ["dj-performans", "ozel-cekim"].includes(etkinlik.slug)
                      ? "text-[#040519]"
                      : "text-[#f5f5f5]"
                  }`}
                >
                  {etkinlik.title}
                </h3>
                <p
                  id="scene-paragraf"
                  className={`text-sm md:text-base max-w-xl ml-2 ${
                    ["dj-performans", "ozel-cekim"].includes(etkinlik.slug)
                      ? "text-[#040519]"
                      : "text-[#f5f5f5]"
                  }`}
                >
                  {etkinlik.description}
                </p>
              </div>
              <div className="mt-8 hidden md:block">
                <InfoCard data={dataSource} type="artist" />
              </div>
              <div className="mt-8 md:hidden">
                <MobileInfoCardSwipeSlider data={dataSource} type="artist" />
              </div>
              <div className="text-center mt-5 font-semibold underline decoration-[#FF007A] decoration-2">
                <Link
                  href={`/etkinlik-turleri/${etkinlik.slug}`}
                  className={
                    ["dj-performans", "ozel-cekim"].includes(etkinlik.slug)
                      ? "text-[#040519]"
                      : "text-[#f5f5f5]"
                  }
                >
                  Daha Fazla Gör
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Banner ve Diğer Section'lar */}
      <section className="w-full bg-[#f5f5f5]">
        <StepsSection />
      </section>
      <Banner />
      <SubscriptionSection />
    </main>
  );
}
