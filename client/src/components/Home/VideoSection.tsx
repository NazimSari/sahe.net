import React from "react";

export default function VideoSection() {
  return (
    <section className="mx-auto pb-16 md:py-20 w-full bg-[#160317]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="relative aspect-video w-full lg:w-1/2 order-2 lg:order-1">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/1ABuUM9d7vw?si=rdQAydDfvpNQIls8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] leading-snug max-w-2xl">
              Müzik Dünyasının Dijital Köprüsü
            </h3>
            <p className="text-[#f5f5f5] text-sm md:text-lg leading-relaxed">
              Müzik artık sadece sahnede değil, dijitalde de hayat buluyor! Bu
              videoda, sahne.net’in sanatçılar ve müzikseverler için nasıl yeni
              bir buluşma noktası oluşturduğunu keşfedeceksiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
