interface EventData {
  name: string;
  url: string;
  description: string;
  category: string;
  badgeText?: string; // Opsiyonel, çünkü badgeText her zaman zorunlu değil
}

export const sahneData: EventData[] = [
  {
    name: "Kamil Aydınlı",
    url: "/kamil.jpg",
    description:
      "Pop ve funk’ın enerjik birleşimi! Düğün ve partiler için mükemmel.",
    category: "Rock",
    badgeText: "İstanbul",
  },
  {
    name: "Micheal Tartum",
    url: "/micheal.jpg",
    description:
      "Elektronik ritimlerle dans pistini ateşler. Özel etkinliklerin aranan ismi!",
    category: "Jazz",
    badgeText: "Ankara",
  },
  {
    name: "Group Brooke",
    url: "/brooklin.jpg",
    description:
      "Sert ritimler, güçlü sahne! Festivaller ve partiler için hazır.",
    category: "Rock",
    badgeText: "Antalya",
  },
  {
    name: "Group Nefes",
    url: "/nefes.jpg",
    description: "Zarif klasik müzikle nişan ve davetlere sınıf katar.",
    category: "Enstrümantal",
    badgeText: "İzmir",
  },
];

export const dogumGunuData: EventData[] = [
  {
    name: "Elif Kaya",
    url: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBzaW5nZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Romantik melodilerden eğlenceli ritmlere… Elif, doğum günü kutlamalarınıza duyguyu ve enerjiyi aynı anda getiriyor. Canlı performansıyla geceye renk katmak isteyenler için birebir!",
    category: "Canlı Müzik",
    badgeText: "Ankara",
  },
  {
    name: "Mert Uslu",
    url: "https://images.unsplash.com/photo-1584778672056-82fb68242666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxldmVudHMlMjBhbm5vdW5jZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Doğum günü enerjisini en iyi şekilde yansıtmak Mert’in işi! Eğlenceli sunumları ve profesyonel duruşuyla hem çocuklara hem yetişkinlere özel kutlamalarda tam aradığınız isim.",
    category: "Etkinlik Sunucusu",
    badgeText: "İstanbul",
  },
  {
    name: "Kerem Yıldız",
    url: "https://images.unsplash.com/photo-1572208131938-22179274932c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFuaW1hdG9yJTIwY2xvd258ZW58MHx8MHx8fDI%3D",
    description:
      "Özellikle çocuk doğum günlerinin neşe kaynağı! Kerem; yüz boyama, mini şovlar ve oyunlarla küçük misafirlere unutulmaz anlar yaşatıyor.",
    category: "Animasyon",
    badgeText: "İzmir",
  },
  {
    name: "Can Demir",
    url: "https://images.unsplash.com/photo-1504376626428-15e04b55193b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFjdXN0aWslMjBzaW5nZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Canlı müziğin sade ama etkileyici hali… Can, akustik repertuarıyla doğum günü organizasyonlarını sıcak ve samimi bir atmosfere dönüştürüyor. Hem ev partileri hem butik etkinlikler için ideal!",
    category: "Akustik Performans",
    badgeText: "Antalya",
  },
];

export const babyshowerData: EventData[] = [
  {
    name: "Elif Naz",
    url: "https://images.unsplash.com/photo-1565562183660-62c4a72ab233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGFjdXN0aWslMjBzaW5nZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Yumuşak tınılar, huzur veren melodiler… Elif Naz, Baby Shower davetlerinize zarif bir müzik dokunuşu katıyor. Anne adayları için duygusal anlara fon olacak canlı performanslar sunuyor.",
    category: "Akustik Vokal",
    badgeText: "Ankara",
  },
  {
    name: "Ayça Mutlu",
    url: "https://images.unsplash.com/photo-1544654935-036f583c952a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG9yZ2FuaXplcnxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Balonlar, masa süslemeleri, tema detayları… Ayça, hayalinizdeki Baby Shower’ı A'dan Z'ye tasarlıyor. Minimalden gösterişli konsepte kadar her zevke hitap ediyor.",
    category: "Organizasyon",
    badgeText: "İstanbul",
  },
  {
    name: "Melis Efe",
    url: "https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGlzdHxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Farklı ve özel bir dokunuş arayanlar için… Melis, etkinlik sırasında misafirlerin canlı illüstrasyonlarını yapıyor ve ortaya çıkan eserlerle unutulmaz bir anı köşesi oluşturuyor.",
    category: "Organizasyon",
    badgeText: "İstanbul",
  },
  {
    name: "Emir Saruhan",
    url: "https://images.unsplash.com/photo-1525204016358-717c1c37382f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGFjdXN0aWslMjBzaW5nZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Sakinlik, zarafet ve müzik bir arada… Emir, Baby Shower etkinliklerinize akustik gitarı ve huzur veren sesiyle eşlik ediyor. Duygusal anlara anlam katan canlı performansıyla fark yaratıyor.",
    category: "Akustik ",
    badgeText: "İzmir",
  },
];

export const happyhourData: EventData[] = [
  {
    name: "Derya Aksoy",
    url: "https://images.unsplash.com/photo-1686242585398-6a069e7eb7c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGolMjBmZW1hbGV8ZW58MHx8MHx8fDI%3D",
    description:
      "Yumuşak geçişler, cool ritimler… Derya, Happy Hour atmosferine uygun chill, deep house ve lounge setleriyle gecenize müzikal bir şıklık katıyor.",
    category: "Dj-Lounge",
    badgeText: "Ankara",
  },
  {
    name: "Bora Yüce",
    url: "https://images.unsplash.com/flagged/photo-1569231290150-9c6200705c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNheG9waG9uZXxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Canlı saksafon tınılarıyla anın ruhunu yakalayın. Bora, özellikle kokteyl saatlerinde ambiyansı bir üst seviyeye taşıyan performansıyla unutulmaz bir deneyim sunuyor.",
    category: "Saksafon Performans",
    badgeText: "İstanbul",
  },
  {
    name: "Simge Aral",
    url: "https://images.unsplash.com/photo-1555084415-b708df0fef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJhcm1haWR8ZW58MHx8MHx8fDI%3D",
    description:
      "Tatlar kadar sunum da önemli! Simge, özel tariflerle hazırladığı özgün kokteyller ve şık bar sunumlarıyla Happy Hour partilerinizi lezzetle taçlandırıyor.",
    category: "Kokteyl Bar",
    badgeText: "Antalya",
  },
  {
    name: "Cem Deniz",
    url: "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxhY291c3RpYyUyMHRyaW98ZW58MHx8MHx8fDI%3D",
    description:
      "Ne çok gürültülü, ne çok sakin... Cem ve ekibi, canlı akustik performanslarıyla Happy Hour buluşmalarına sıcak ve davetkâr bir hava katıyor.",
    category: "Akustik Trio",
    badgeText: "İzmir",
  },
];

export const djData: EventData[] = [
  {
    name: "DJ Mira",
    url: "https://images.unsplash.com/photo-1669030565211-3f09bbe16782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGolMjBzZXRzfGVufDB8fDB8fHwy",
    description:
      "Zarif geçişler, atmosferik soundlar… DJ Mira, butik etkinliklerden lüks davetlere kadar her ortamda lounge ve deep house setleriyle geceye sofistike bir hava katıyor.",
    category: "Deep House & Lounge",
    badgeText: "Ankara",
  },
  {
    name: "DJ Rüzgar",
    url: "https://images.unsplash.com/photo-1541126274323-dbac58d14741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGp8ZW58MHx8MHx8fDI%3D",
    description:
      "Enerji mi lazım? DJ Rüzgar, en sevilen Türkçe pop parçalar ve ritmik geçişlerle herkesi piste çekiyor. Doğum günü, parti ve açık hava etkinliklerinde tam bir atmosfer kurucu.",
    category: "Pop & Türkçe Hits",
    badgeText: "İstanbul",
  },
  {
    name: "DJ Lena",
    url: "https://images.unsplash.com/photo-1642344741786-97a10415a0ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRqJTIwZmVtYWxlfGVufDB8fDB8fHwy",
    description:
      "Sınırları aşan ritimler… DJ Lena, Afrobeat ve global ezgilerle farklı bir deneyim sunuyor. Alternatif müzik sevenler için eşsiz bir set deneyimi.",
    category: "Afrobeat & World Music",
    badgeText: "Bursa",
  },
  {
    name: "DJ Arda K",
    url: "https://images.unsplash.com/photo-1599423424751-54e0c1187a02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGp8ZW58MHx8MHx8fDI%3D",
    description:
      "Sınırları aşan ritimler… DJ Lena, Afrobeat ve global ezgilerle farklı bir deneyim sunuyor. Alternatif müzik sevenler için eşsiz bir set deneyimi.",
    category: "Club & Techno Set",
    badgeText: "Eskişehir",
  },
];
export const ozelcekimData: EventData[] = [
  {
    name: "Selin Aras",
    url: "https://images.unsplash.com/photo-1506105496842-dd8d1b18bb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaGVyJTIwZmVtYWxlfGVufDB8fDB8fHwy",
    description:
      "Doğallık ve zarafet bir arada… Selin, özel günlerinizi ve samimi anlarınızı estetik karelerle ölümsüzleştiriyor. Özellikle Baby Shower, doğum günü ve nişan çekimleri için tercih ediliyor.",
    category: "Fotoğraf & Portre Çekimi",
    badgeText: "İstanbul",
  },
  {
    name: "Can Eren",
    url: "https://images.unsplash.com/photo-1593806061006-bee8dc30fdee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlZWxzJTIwc2hvb3RlcnxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Anı sadece kaydetmek yetmez, hissettirmek gerekir… Can, sosyal medya uyumlu dikey videolar, reels ve aftermovie’lerle etkinliklerinize profesyonel bir dokunuş katıyor.",
    category: "Video & Reels Prodüksiyon",
    badgeText: "İstanbul",
  },
  {
    name: "Naz Su",
    url: "https://images.unsplash.com/photo-1648662199460-34b7597ba771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlciUyMGZlbWFsZXxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Farklı bir şey arıyorsan, doğru yerdesin. Naz; temalı arka planlar, styling ve yaratıcı yönlendirmelerle özgün kareler yaratıyor. Özellikle stilize Baby Shower ve arkadaş grubu çekimleri için birebir.",
    category: "Konsept & Tematik Çekim",
    badgeText: "Ankara",
  },
  {
    name: "Emir Can",
    url: "https://images.unsplash.com/photo-1596913799254-c261205fe191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5hbG9nJTIwdmlkZW8lMjBzaG9vdGluZ3xlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Estetikte sadelik arayanlara özel... Emir, analog kamera ve film efektli dijital çekimlerle nostaljik ve duygusal kareler sunuyor. Sanat ve duygu dolu bir çekim deneyimi için ideal.",
    category: "Analog & Film Tarzı Çekimler",
    badgeText: "Adana",
  },
];
