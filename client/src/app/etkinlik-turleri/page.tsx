import SceneCards from "@/components/SceneCards";
import SliderCard from "@/components/SliderCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React from "react";

export default function EtkinlikTurleri() {
  return (
    <main className="bg-[#040519] min-h-screen w-full">
      <section className="p-2 bg-[url('/page2.jpg')] bg-cover bg-center min-h-screen h-full w-full">
        <div className="container mx-auto flex flex-col gap-4 justify-evenly min-h-screen">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="lg:text-6xl md:text-5xl text-4xl  max-w-4xl font-bold text-[#f5f5f5] leading-tight">
              Tarzına Uygun Müzik Gruplarını Keşfet
            </h1>
            <p className="text-[#f5f5f5] font-semibold xl:text-xl md:text-lg sm:text-base text-sm max-w-4xl leading-relaxed">
              Rock’tan caza, pop’tan metale, her türden müzik grubunu bir arada
              bulabileceğin yerdesin! Kategorilere göz at, tarzını seç ve sana
              en uygun grupları keşfet. Etkinliklerin için mükemmel performansı
              bulmak ya da yeni favori grubunu dinlemek için şimdi aramaya
              başla!
            </p>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <Input
                placeholder="Ara..."
                className="max-w-5xl p-6 bg-[#f5f5f5]"
              />
              <Button className="cursor-pointer w-1/3 p-6 bg-[#040519] text-[#FF007A] border hover:text-white">
                Sonuçları Göster
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Select>
                <SelectTrigger className="mt-4 p-6 bg-[#f5f5f5] w-1/5">
                  <SelectValue
                    placeholder="Şehir"
                    className="bg-[#f5f5f5] text-[#040519]"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="mt-4 p-6  bg-[#f5f5f5] w-1/5">
                  <SelectValue placeholder="Etkinlik Türleri" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="mt-4 p-6  bg-[#f5f5f5] w-1/5">
                  <SelectValue placeholder="Müzik Türleri" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="mt-4 p-6  bg-[#f5f5f5] w-1/5">
                  <SelectValue placeholder="Müzik Grupları" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="mt-4 p-6  bg-[#f5f5f5] w-1/5">
                  <SelectValue placeholder="DJ’ler" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <Select>
                <SelectTrigger className="mt-4 p-6 bg-[#f5f5f5] w-1/5">
                  <SelectValue
                    placeholder="Enstrüman"
                    className="bg-[#f5f5f5] text-[#040519]"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="mt-4 p-6  bg-[#f5f5f5] w-1/5">
                  <SelectValue placeholder="Fiyatlar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="mt-4 p-6  bg-[#f5f5f5] w-1/5">
                  <SelectValue placeholder="Koşullar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="mt-4 p-6  bg-[#f5f5f5] w-1/5">
                  <SelectValue placeholder="Belgeler" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="mt-4 p-6  bg-[#f5f5f5] w-1/5">
                  <SelectValue placeholder="Solist" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enstruman">Enstrüman</SelectItem>
                  <SelectItem value="solist">Solist</SelectItem>
                  <SelectItem value="dj">Dj Performans</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
            <SceneCards />
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
            <SceneCards />
          </div>
          <div className="text-center mt-5">
            <Link href="/etkinlik-turleri" className="text-[#040519]">
              Daha Fazla Gör
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] py-16">
        <div className="container mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h3 className="md:text-4xl text-2xl  ml-2 font-bold text-[#f5f5f5] md:leading-snug">
              Aramıza Yeni Katılanlar{" "}
            </h3>
            <p className="text-[#f5f5f5] text-sm md:text-base text-center ml-2">
              Platformumuzun en yeni sanatçılarını ve onların özgün eserlerini
              keşfedin!
            </p>
          </div>
          <div className="p-3">
            <SliderCard />
          </div>
        </div>
      </section>
    </main>
  );
}
