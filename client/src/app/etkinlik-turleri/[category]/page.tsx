"use client";

import { useParams, notFound } from "next/navigation";
import { dataSources, eventTypesSlider, sahneData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SceneCards from "@/components/Cards/InfoCard";
import MobileStageSlider from "@/components/SliderGsap/MobileInfoCardSwipeSlider";

export default function EtkinlikTurleriPage() {
  const params = useParams();
  const category = params.category as string;

  // Kategori doğruluğunu kontrol et
  const etkinlik = eventTypesSlider.find((e) => e.slug === category);
  if (!etkinlik) {
    notFound();
  }

  // Seçilen kategoriye ait veriyi al
  const selectedData = dataSources[category] || [];

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#160317]">
      <section className="w-full h-[800px] my-16 px-4">
        <div className="flex flex-col lg:flex-row items-center md:justify-between h-full container mx-auto gap-5  mt-30 lg:mt-0">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col jusitfy-between gap-5">
              <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-[#f5f5f5] lg:leading-20">
                <span className="text-[#FF007A]">{etkinlik.name} </span>{" "}
                Etkinlikleriniz İçin Sanatçılarla Tanışın!
              </h1>
              <p className="text-[#f5f5f5] text-sm lg:text-lg md:text-base leading-relaxed max-w-xl">
                Sevdiklerinizle paylaşacağınız o özel günü daha da unutulmaz
                kılmak için sanatçılarla hemen iletişime geçin. En uygun müzik,
                en doğru sanatçı burada sizi bekliyor.
              </p>
              <div className="hidden md:block mt-6">
                <div className="flex flex-col sm:flex-row gap-2 items-center max-w-4xl">
                  <Input
                    placeholder="Ara..."
                    className="w-full  sm:flex-1 bg-[#f5f5f5] md:py-6 "
                  />
                  <Button className="hidden sm:flex w-full sm:w-1/3 md:py-6  bg-[#040519] text-[#FF007A] border hover:text-white text-sm sm:text-base">
                    Sonuçları Göster
                  </Button>
                </div>
                <div className="flex flex-col gap-3 mt-4 max-w-4xl">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Select>
                      <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                        <SelectValue
                          placeholder="Şehir"
                          className="text-[#040519]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enstruman">Enstrüman</SelectItem>
                        <SelectItem value="solist">Solist</SelectItem>
                        <SelectItem value="dj">Dj Performans</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                        <SelectValue
                          placeholder="Mekan Türü"
                          className="text-[#040519]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enstruman">Enstrüman</SelectItem>
                        <SelectItem value="solist">Solist</SelectItem>
                        <SelectItem value="dj">Dj Performans</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                        <SelectValue
                          placeholder="Müzik Türü"
                          className="text-[#040519]"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enstruman">Enstrüman</SelectItem>
                        <SelectItem value="solist">Solist</SelectItem>
                        <SelectItem value="dj">Dj Performans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="sm:hidden py-3 bg-[#040519] text-[#FF007A] border hover:text-white text-sm">
                    Sonuçları Göster
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[65%] overflow-hidden w-full lg:w-[50%] rounded-2xl">
            <img
              src={etkinlik.path}
              alt={`${etkinlik.name} görseli`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* mobil ekranlarda */}
          <div className="md:hidden mt-6 w-full">
            <div className="flex flex-col sm:flex-row gap-2 items-center w-full">
              <Input
                placeholder="Ara..."
                className="w-full  sm:flex-1 bg-[#f5f5f5] md:py-6 "
              />
              <Button className="hidden sm:flex w-full sm:w-1/3 md:py-6  bg-[#040519] text-[#FF007A] border hover:text-white text-sm sm:text-base">
                Sonuçları Göster
              </Button>
            </div>
            <div className="flex flex-col gap-3 mt-4 max-w-4xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Select>
                  <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                    <SelectValue
                      placeholder="Şehir"
                      className="text-[#040519]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enstruman">Enstrüman</SelectItem>
                    <SelectItem value="solist">Solist</SelectItem>
                    <SelectItem value="dj">Dj Performans</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                    <SelectValue
                      placeholder="Mekan Türü"
                      className="text-[#040519]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enstruman">Enstrüman</SelectItem>
                    <SelectItem value="solist">Solist</SelectItem>
                    <SelectItem value="dj">Dj Performans</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="md:py-6  bg-[#f5f5f5] w-full text-sm sm:text-base">
                    <SelectValue
                      placeholder="Müzik Türü"
                      className="text-[#040519]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enstruman">Enstrüman</SelectItem>
                    <SelectItem value="solist">Solist</SelectItem>
                    <SelectItem value="dj">Dj Performans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="sm:hidden py-3 bg-[#040519] text-[#FF007A] border hover:text-white text-sm">
                Sonuçları Göster
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container mx-auto">
          <div className="mt-8 hidden md:block">
            <SceneCards data={selectedData} type="artist" />
          </div>
          <div className="mt-8 md:hidden">
            <MobileStageSlider data={selectedData} type="artist" />
          </div>
        </div>
      </section>
    </main>
  );
}
