import ContactForm from "@/components/ContactForm";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import React from "react";

export default function IletisimPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-4 lg:pt-16 pt-28 bg-[url('/page3.jpg')] bg-cover bg-center flex items-center min-h-screen w-full">
        <div className="container mx-auto bg-[#160317]/50 rounded-2xl xl:py-20 py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 h-full w-full">
            {/* Form Kısmı */}
            <div className="w-full lg:w-1/2 max-w-[550px] rounded-xl order-2 lg:order-1">
              <ContactForm />
            </div>
            {/* Metin ve Bilgi Kısmı */}
            <div className="flex flex-col gap-5 h-full w-full lg:w-1/2 order-1 lg:order-2">
              <div className="flex flex-col gap-4 text-[#f5f5f5] items-center md:items-start md:ml-24">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Bize Ulaşın!
                </h1>
                <p className="text-sm sm:text-base lg:text-xl font-semibold max-w-md">
                  Mesajınızı Merakla Bekliyoruz!
                </p>
              </div>

              {/* İkonlar ve Bilgiler */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                <div className="flex flex-col items-center  gap-3">
                  <PhoneIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm text-center lg:text-lg">
                      Telefon Numarası
                    </p>
                    <p className="text-[#858585] text-center font-semibold text-sm lg:text-base">
                      0232 001 06 24
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center  gap-3">
                  <MailIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm text-center lg:text-lg">
                      E Posta Adresi
                    </p>
                    <p className="text-[#858585] text-center font-semibold text-sm lg:text-base">
                      sahne@sahne.net
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center  gap-3">
                  <WhatsappIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm text-center lg:text-lg">
                      Whatsapp
                    </p>
                    <p className="text-[#858585] text-center font-semibold text-sm lg:text-base">
                      +0532 512 12 12
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center  gap-3">
                  <LocationIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[#f5f5f5] flex-shrink-0" />
                  <div>
                    <p className="text-[#f5f5f5] text-sm text-center lg:text-lg">
                      Office
                    </p>
                    <p className="text-[#858585] text-center font-semibold text-sm lg:text-base">
                      Kadıköy/İstanbul
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
