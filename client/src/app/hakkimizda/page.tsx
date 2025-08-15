import React from "react";

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="p-2 pt-16 sm:pt-20 bg-[url('/12.jpg')] bg-cover bg-center flex items-center h-[600px] w-full">
        <div className="container mx-auto flex flex-col justify-center gap-6 py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-tight max-w-4xl">
              Hakkımızda
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl font-semibold text-[#f5f5f5] max-w-4xl leading-relaxed">
              Sahne performansınızı Türkiye'nin her şehrinde ve yurtdışında
              geniş kitlelere ulaştırarak, sahne sanatçıları ve müzisyenlerin
              fark edilmesini destekliyoruz.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] pt-16 sm:pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 p-2">
            <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center">
              <h3 className="md:text-4xl text-2xl  font-bold text-[#f5f5f5] md:leading-snug">
                Müziğin Dijital Köprüsü
              </h3>
              <p
                id="scene-paragraf"
                className="text-[#f5f5f5] text-sm md:text-base"
              >
                Türkiye’nin dört bir yanındaki yetenekli sanatçılar ve
                müzisyenler, eserlerini sergileme konusunda sıkça engellerle
                karşılaşıyor. Sahne.Net, bu görünürlük sorununa son vererek
                sanatçıları müzikseverlerle buluşturan güçlü bir dijital köprü
                sunuyor.
              </p>
              <p className="text-[#f5f5f5] text-sm md:text-base">
                Zaman ve mekân sınırlarını ortadan kaldıran bu köprü,
                Türkiye’nin her köşesinden profesyonel sahne performanslarını
                keşfetmek isteyen müzik tutkunlarını bir araya getiriyor.
              </p>
            </div>
            <div className="w-full h-[300px] md:w-1/2 md:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://st2.depositphotos.com/4327059/6356/v/450/depositphotos_63567575-stock-illustration-colorful-music-background.jpg"
                alt="resim"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] pt-16 sm:pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center order-1 md:order-2">
              <h3 className="text-2xl md:text-4xl font-bold text-[#f5f5f5] md:leading-snug">
                Türkiye'nin en yüksek müzikaliteye sahip sahnesi
              </h3>
              <p
                id="scene-paragraf"
                className="text-[#f5f5f5] text-sm md:text-base"
              >
                Sanatçı ve müzisyen veritabanımız; müzikalitesi yüksek, müziğe
                tutkuyla bağlı ve müzikseverlerin beklentilerini karşılayacak
                sahne performansı sergileyen profesyonellerden oluşuyor. Pop,
                rock, caz gibi tüm ana tarzlarda sanatçıların yanı sıra;
                saksafoncu, piyanist, tenor, kemancı ve vokal gibi birçok
                yetenekli müzisyen Sahne.Net sahnesinde yer alıyor. Türkiye’nin
                en yüksek müzikaliteye sahip sahnesini sunmaktan gurur
                duyuyoruz.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden order-2 md:order-1">
              <img
                src="https://st2.depositphotos.com/1006188/7803/v/600/depositphotos_78033210-stock-illustration-dancing-people-silhouettes.jpg?_gl=1*5ypicl*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwkvbEBhApEiwAKUz6--eqXeVD_K2xGWP6TSaUyq7Ai_Up8KuR9JmAqaYgrsaWc0lsvBA7NxoCCdIQAvD_BwE&gbraid=0AAAAACw2pLmyJy7J9HEBKobNjj1USXTHS"
                alt="resim"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] pt-16 sm:pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
              <h3 className="md:text-4xl text-2xl  font-bold text-[#f5f5f5] md:leading-snug">
                Topluluğumuz
              </h3>
              <p
                id="scene-paragraf"
                className="text-[#f5f5f5] text-sm md:text-base"
              >
                Türkiye’de canlı müziği geliştirme misyonu Sahne.Net tarafından
                somutlaştırılıyor. Özenle seçilmiş ve incelenmiş müzikalitesi
                yüksek profiller arasında sanatçı ve müzisyenleri bulmak,
                rezervasyon yapmak ve onlarla çalışmak için oluşturulmuş harika
                bir platformuz. Yetenekli, tutkulu ve birbirinden farklı müzikal
                karakterleri bir araya getirerek ilham veren bir topluluk inşa
                ediyoruz.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://st.depositphotos.com/1093689/2785/v/600/depositphotos_27857803-stock-illustration-party-get-together-to-celebrate.jpg"
                alt="resim"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#160317] pt-16 sm:pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden order-2 md:order-1">
                <img
                  src="https://st2.depositphotos.com/1004989/43621/v/450/depositphotos_436215212-stock-illustration-colorful-handprint-vector-illustration.jpg"
                  alt="resim"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center order-1 md:order-2">
                <h3 className="text-2xl md:text-4xl font-bold text-[#f5f5f5] md:leading-snug">
                  Sınır Tanımıyoruz
                </h3>
                <p
                  id="scene-paragraf"
                  className="text-[#f5f5f5] text-sm md:text-base"
                >
                  Sahne performansınızı, Türkiye’nin tüm şehirlerinde ve
                  yurtdışında farklı ülkelerde çok daha geniş kitlelere
                  ulaştırıyoruz. Sahne sanatçılarına ve müzisyenlere destek
                  veriyor, onların fark edilmesini sağlıyoruz. Bizim için
                  gökyüzü bile sınır değil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
