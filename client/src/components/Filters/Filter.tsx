"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DemoModal from "../Modals/DemoModal";

export default function Filter() {
  const [cities, setCities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleShowResults = () => {
    setIsModalOpen(true); // Butona tıklanınca modal açılır
  };

  useEffect(() => {
    // Türkiye şehirlerini API'den çek
    fetch("https://turkiyeapi.dev/api/v1/provinces")
      .then((response) => response.json())
      .then((data) => {
        // API'den gelen şehir verilerini state'e kaydet
        setCities(data.data || []);
      })
      .catch((error) =>
        console.error("Şehirler çekilirken hata oluştu:", error)
      );
  }, []);
  return (
    <>
      <div className="flex gap-1 items-center">
        <Input
          placeholder="Ara..."
          className="max-w-5xl md:py-6 bg-[#f5f5f5]"
        />
        <Button
          onClick={handleShowResults}
          className="cursor-pointer hidden sm:flex w-1/3 md:py-6 bg-[#040519] text-[#FF007A] border"
        >
          Sonuçları Göster
        </Button>
      </div>
      <div className="w-full flex flex-col  gap-3">
        <div className="flex flex-col sm:flex-row md:items-center gap-3">
          <Select>
            <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-1/4">
              <SelectValue
                placeholder="Şehir"
                className="bg-[#f5f5f5] text-[#040519]"
              />
            </SelectTrigger>
            <SelectContent>
              {cities.length > 0 ? (
                cities.map((city: any) => (
                  <SelectItem key={city.id} value={city.name.toLowerCase()}>
                    {city.name}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="loading" disabled>
                  Şehirler yükleniyor...
                </SelectItem>
              )}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-1/4">
              <SelectValue placeholder="Etkinlik Türü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dugun">Düğün Etkinlikleri</SelectItem>
              <SelectItem value="ozel-cekim">Özel Çekim</SelectItem>
              <SelectItem value="happy-hour">Happy Hour</SelectItem>
              <SelectItem value="baby-shower">Baby Shower</SelectItem>
              <SelectItem value="dj-performans">DJ Performans</SelectItem>
              <SelectItem value="dogum-günü">Doğum Günü</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/4">
              <SelectValue placeholder="Müzik Türü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dugun-orkestrası">Düğün Orkestrası</SelectItem>
              <SelectItem value="etnik-muzik">Etnik Müzik</SelectItem>
              <SelectItem value="jazz-muzik">Jazz Müzik</SelectItem>
              <SelectItem value="rock-muzik">Rock Müzik</SelectItem>
              <SelectItem value="elektronik-muzik">Elektronik Müzik</SelectItem>
              <SelectItem value="latin-perkusyon">Latin Perküsyon</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/4">
              <SelectValue placeholder="Performans Tipi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enstruman">Enstrüman</SelectItem>
              <SelectItem value="solist">Solist</SelectItem>
              <SelectItem value="dj">Dj Performans</SelectItem>
              <SelectItem value="muzik-grup">Müzik Grubu</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col sm:flex-row md:items-center gap-3">
          <Select>
            <SelectTrigger className="mt-4 md:py-6 bg-[#f5f5f5] w-full md:w-1/4">
              <SelectValue
                placeholder="Enstrüman"
                className="bg-[#f5f5f5] text-[#040519]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="keman">Keman</SelectItem>
              <SelectItem value="gitar">Gitar</SelectItem>
              <SelectItem value="piyano">Piyano</SelectItem>
              <SelectItem value="davul">Davul</SelectItem>
              <SelectItem value="bas-gitar">Bas Gitar</SelectItem>
              <SelectItem value="saksafon">Saksafon</SelectItem>
              <SelectItem value="trampet">Trampet</SelectItem>
              <SelectItem value="flut">Flüt</SelectItem>
              <SelectItem value="tulum">Tulum</SelectItem>
              <SelectItem value="klarnet">Klarnet</SelectItem>
              <SelectItem value="cello">Çello</SelectItem>
              <SelectItem value="kemence">Kemençe</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/4">
              <SelectValue placeholder="Fiyatlar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2000-4000">2.000 - 4.000 TL</SelectItem>
              <SelectItem value="4000-6000">4.000 - 6.000 TL</SelectItem>
              <SelectItem value="6000-8000">6.000 - 8.000 TL</SelectItem>
              <SelectItem value="8000-10000">8.000 - 10.000 TL</SelectItem>
              <SelectItem value="10000+">10.000 TL ve üzeri</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/4">
              <SelectValue placeholder="Koşullar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="travel-included">Seyahat Dahil</SelectItem>
              <SelectItem value="accommodation-included">
                Konaklama Dahil
              </SelectItem>
              <SelectItem value="equipment-provided">
                Ekipman Sağlanıyor
              </SelectItem>
              <SelectItem value="acoustic-only">
                Sadece Akustik Performans
              </SelectItem>
              <SelectItem value="stage-compatible">Sahne Uyumu</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="mt-4 md:py-6  bg-[#f5f5f5] w-full md:w-1/4">
              <SelectValue placeholder="Belgeler" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tax-invoice">
                Vergi Levhası / Fatura Kesebiliyor
              </SelectItem>
              <SelectItem value="insurance">Sigorta Belgesi</SelectItem>
              <SelectItem value="contract-ready">
                Sözleşme / Kontrat Hazır
              </SelectItem>
              <SelectItem value="id-passport">Kimlik / Pasaport</SelectItem>
              <SelectItem value="references">
                Referans / Önceki Etkinlik Belgeleri
              </SelectItem>
              <SelectItem value="health-certificate">
                Sağlık Sertifikası
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={handleShowResults}
          className="cursor-pointer sm:hidden md:py-6 bg-[#040519] text-[#FF007A] border"
        >
          Sonuçları Göster
        </Button>
        <DemoModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          closeButtonText="Tamam"
        />
      </div>
    </>
  );
}
