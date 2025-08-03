import React from "react";

const stepsData = [
  {
    title: "Sanatçını Bul",
    description:
      "Düğün, nişan veya partin için en iyi sanatçıları keşfet! Profilleri incele, filtrelerle seç, bir tıkla iletişime geç ve hızlıca rezervasyon yap.",
    img: "/sanatci-bul.png",
  },
  {
    title: "Rezervasyon Yap",
    description:
      "Düğün, nişan veya partin için en iyi sanatçıları keşfet! Profilleri incele, filtrelerle seç, bir tıkla iletişime geç ve hızlıca rezervasyon yap.",
    img: "/rezervasyon-yap.png",
  },
  {
    title: "Güvenli Ödeme",
    description:
      "Ödemelerin güvenli platformumuz üzerinden yapılır. Etkinliğin onaylanana kadar paran güvence altında.",
    img: "/guvenli-odeme.png",
  },
  {
    title: "Sahnede Unutulmaz Anlar",
    description:
      "Müzisyenin hazır, etkinlik günün geldi! Hayalindeki performansı yaşa, anılarını müzikle taçlandır.",
    img: "/unutulmaz-anlar.png",
  },
];
export default function StepsSection() {
  return (
    <section className="mx-auto my-16">
      <div className="container mx-auto p-4 md:p-0">
        <div className="flex flex-col gap-4 h-full justify-center">
          <h3 className="md:text-4xl text-2xl max-w-2xl ml-2 font-bold text-[#1A1A2E] md:leading-snug md:mt-16 mt-8">
            4 Adımda Sahneni Kur!
          </h3>
          <p className="text-[#1A1A2E] text-sm md:text-base max-w-xl ml-2">
            En iyi müzisyenleri bul, güvenli şekilde rezerve et ve sahneyi
            hazırla! Etkinliğin için her şey birkaç tık uzağında.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {stepsData.map((step, index) => (
            <div key={index} className="flex flex-col gap-2 h-[400px]">
              <div className="relative w-full h-full">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-black/50 rounded-b-lg z-0"></div>
                <div className="absolute bottom-0 left-2 right-2 h-1/3 z-10 flex flex-col items-center">
                  <h4 className="text-[#f5f5f5] font-semibold text-lg sm:text-xl">
                    {step.title}
                  </h4>
                  <p className="text-[#f5f5f5] text-sm sm:text-base text-center line-clamp-3 mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
