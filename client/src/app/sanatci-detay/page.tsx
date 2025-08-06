"use client";
import BagIcon from "@/components/icons/BagIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import UserIcon from "@/components/icons/UserIcon";
import VehicleIcon from "@/components/icons/VehicleIcon";
import { Button } from "@/components/ui/button";

import DetailsTab from "@/components/DetailsTab";
import { sanatciDetayData } from "@/lib/data";
import DetailsPriceCard from "@/components/DetailsPriceCard";

export default function SanatciDetayPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-2 bg-[url('/page3.jpg')] bg-cover bg-center flex items-center h-[100vh] md:min-h-screen md:h-full w-full">
        <div className="container mx-auto bg-[#160317]/50 h-[80vh] rounded-2xl mt-10">
          <div className="flex flex-col md:flex-row items-center h-full w-full md:justify-evenly">
            <div className="h-[60vh] w-full  md:w-2/3 p-6 lg:w-[35vw] overflow-hidden xl:ml-8">
              <img
                src="/rock-music.jpg"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4 justify-center h-[65vh] w-full lg:w-1/2 px-4 pb-6">
              <div className="flex flex-col  gap-4 text-[#f5f5f5]">
                <h1 className="lg:text-5xl md:text-4xl text-3xl  max-w-4xl font-bold text-[#f5f5f5] leading-tight">
                  Düttürü Dünya
                </h1>
                <p className="text-[#f5f5f5] font-semibold xl:text-xl md:text-base text-sm md:max-w-lg leading-relaxed">
                  Efsanevi Gitar Soloları ve Patlayıcı Sahne Enerjisiyle
                  Tanışın!
                </p>
              </div>
              <div className="flex flex-col gap-4 justify-between w-full mt-10">
                <div className="flex w-full justify-between gap-5">
                  <div className="flex flex-col sm:flex-row sm:items-center md:gap-4 gap-2  w-1/2">
                    <VehicleIcon className="h-10 w-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#f5f5f5] flex-shrink-0" />
                    <div className="flex flex-col">
                      <p className="text-[#f5f5f5] lg:text-lg">
                        Seyahat Mesafesi
                      </p>
                      <p className="text-[#858585] font-semibold text-sm lg:text-base">
                        1400 KM
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center md:gap-4 gap-2 w-1/2 xl:w-1/3">
                    <UserIcon className="h-10 w-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#f5f5f5] flex-shrink-0" />
                    <div className="flex flex-col w-full ">
                      <p className="text-[#f5f5f5] lg:text-lg">Profil Tipi</p>
                      <p className="text-[#858585] font-semibold text-sm lg:text-base">
                        Grup (4-6 Kişi)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between gap-5">
                  <div className="flex flex-col sm:flex-row sm:items-center md:gap-4 gap-2 w-1/2">
                    <ClockIcon className="h-10 w-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#f5f5f5] flex-shrink-0" />
                    <div className="flex flex-col">
                      <p className="text-[#f5f5f5] lg:text-lg">
                        Ortalama Hizmet Süresi
                      </p>
                      <p className="text-[#858585] font-semibold text-sm lg:text-base">
                        150 Dakika
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center md:gap-4 gap-2 w-1/2 xl:w-1/3">
                    <BagIcon className="h-10 w-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#f5f5f5] flex-shrink-0" />
                    <div className="flex flex-col w-full ">
                      <p className="text-[#f5f5f5] lg:text-lg">
                        Performans Tecrübesi
                      </p>
                      <p className="text-[#858585] font-semibold text-sm lg:text-base">
                        15 Yıl
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-1">
                <Button className=" w-1/2 mt-10 bg-[#FF007A]">
                  Hemen İzle
                </Button>
                <Button className=" w-1/2 mt-10 bg-[#FF007A]">Teklif Al</Button>
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
    </main>
  );
}
