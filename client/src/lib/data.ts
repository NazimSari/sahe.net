export interface EventData {
  name: string;
  url: string;
  description: string;
  category: string[];
  badgeText?: string;
  musicType?: string;
  slug: string;
  venue?: string;
  hour?: string;
  isSuperArtist?: boolean;
  unavailableDates?: string[];
}

interface Artist {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
}
export interface VenueData {
  img: string;
  title: string;
  isLarge?: boolean;
}

export const festivalSectionData = [
  {
    title: "Zeytinli Rock Festivali",
    description:
      "Muğla’da rock müzik coşkusu! Efsane gruplar ve genç yeteneklerle dolu bu festival, yazın en enerjik etkinliği.",
    img: "https://i.imgur.com/uEFp0X6.jpeg",
    month: "NİS",
    day: "26",
    slug: "zeytinli-rock-festivali",
  },
  {
    title: "İstanbul Müzik Festivali",
    description:
      "İstanbul’un tarihi mekanlarında klasik müzik, opera ve çağdaş eserlerle buluş! 53. yılında bu festival, müzik tutkunlarını bir araya...",
    img: "https://i.imgur.com/JiIO5BJ.jpeg",
    month: "TEM",
    day: "31",
    slug: "istanbul-muzik-festivali",
  },
  {
    title: "Antalya Akra Jazz Festivali",
    description:
      "Antalya’da cazın büyüsüne kapıl! Yerli ve uluslararası sanatçılar, Akdeniz’in eşsiz atmosferinde seni bekliyor.",
    img: "https://i.imgur.com/6AHOYwg.png",
    month: "HAZ",
    day: "16",
    slug: "akra-jazz-festivali",
  },
  {
    title: "Rock n Cock Müzik Festivali",
    description:
      "Antalya’da cazın büyüsüne kapıl! Yerli ve uluslararası sanatçılar, Akdeniz’in eşsiz atmosferinde seni bekliyor.",
    img: "https://i.imgur.com/AUCrLx7.jpeg",
    month: "AĞU",
    day: "09",
    slug: "rock-n-cock-muzik-festivali",
  },
];
export const venueSectionData: VenueData[] = [
  {
    img: "https://i.ibb.co/4wPwgFxh/canli-music.jpg",
    title: "Canlı Müzik Mekanları",
    isLarge: true,
  },
  {
    img: "https://i.ibb.co/6xhs8XF/roof.jpg",
    title: "Roof Top Mekanlar",
  },
  {
    img: "https://i.ibb.co/Kjzt8mJX/kokteyl.jpg",
    title: "Kokteyl Mekanları",
  },
  {
    img: "https://i.ibb.co/KxXjS9CB/beach.jpg",
    title: "Beach Club",
  },
  {
    img: "https://i.ibb.co/vxLnDDRG/vip-dj.jpg",
    title: "Vip Dj Bars",
  },
];
export const newArtistsSlider: Artist[] = [
  {
    id: 1,
    name: "Şenay Kara",
    category: "Pop",
    imageUrl: "https://i.ibb.co/9m1W9kDM/new1.jpg",
  },
  {
    id: 2,
    name: "Meltem Yılmaz",
    category: "Rock",
    imageUrl: "https://i.ibb.co/p67y6HMS/new2.jpg",
  },
  {
    id: 3,
    name: "Handan Candan",
    category: "Jazz",
    imageUrl: "https://i.ibb.co/y1xm9Jz/new5.jpg",
  },
  {
    id: 4,
    name: "Ice King",
    category: "Hip-Hop",
    imageUrl: "https://i.ibb.co/N6RZR9YF/new7.jpg",
  },
  {
    id: 5,
    name: "Cenk",
    category: "Electronic",
    imageUrl: "https://i.ibb.co/4nGX8k5t/new4.jpg",
  },
  {
    id: 6,
    name: "Harun Demircan",
    category: "Türkçe Pop",
    imageUrl: "https://i.ibb.co/XZxgbj3K/new6.jpg",
  },
];

export const eventTypesSlider = [
  {
    id: 1,
    path: "https://i.ibb.co/cK7mPKjD/dugun-2.jpg",
    name: "Düğün",
    slug: "dugun",
    title: "Düğün Etkinlikleri",
    description:
      "Aşkınızı müziğin büyüsüyle kutlayın! Düğün etkinlikleriniz için en iyi müzik gruplarını keşfedin, romantik ve enerjik anlar yaratın.",
  },
  {
    id: 2,
    path: "https://i.ibb.co/nXJNWVJ/ozel-cekim.jpg",
    name: "Özel Çekim",
    slug: "ozel-cekim",
    title: "Özel Çekimler",
    description:
      "Her karede zarafet, her sahnede duygu… Özel çekimlerimizle bu unutulmaz anları estetik ve sanatsal bir dokunuşla ölümsüzleştiriyoruz.",
  },
  {
    id: 3,
    path: "https://i.ibb.co/PGFBZbvr/happy-hour.jpg",
    name: "Happy Hour",
    slug: "happy-hour",
    title: "Happy Hour Etkinlikleri",
    description:
      "İş çıkışı stresini atmak isteyenler için keyifli bir mola! Lezzetli ikramlar ve müzik eşliğinde sosyalleşmenin tam zamanı.",
  },
  {
    id: 4,
    path: "https://i.ibb.co/7t8qHDVR/baby-shower.jpg",
    name: "Bebek Partisi",
    slug: "baby-shower",
    title: "Baby Shower Etkinlikleri",
    description:
      "Anne adayları için unutulmaz anlar… Baby Shower etkinliklerimizle, bu özel günü sevdiklerinizle birlikte eğlenceli ve şık bir kutlamaya dönüştürün!",
  },

  {
    id: 5,
    path: "https://i.ibb.co/Tq40sJ94/dj.jpg",
    name: "DJ Performansı",
    slug: "dj-performans",
    title: "DJ Performansı",
    description:
      "Zarif bir atmosferde, özenle seçilmiş setler… DJ performanslarımızla geceye ritmini ve şıklığını katıyoruz.",
  },
  {
    id: 6,
    path: "https://i.ibb.co/99MjF1XQ/dogum-gunu.jpg",
    name: "Doğum Günü",
    slug: "dogum-gunu",
    title: "Doğum Günü Etkinlikleri",
    description:
      "Doğum günün sıradan olmasın! En eğlenceli müzik gruplarıyla partini unutulmaz kıl. Tarzını seç, ritme kapıl ve yeni yaşını coşkuyla kutla!",
  },
];

export const musicTypesSlider = [
  {
    id: 1,
    path: "https://i.ibb.co/QvPW2PzM/dugun-orkestra.jpg",
    name: "Düğün Orkestrası",
    slug: "dugun-orkestrasi",
    title: "Düğün Orkestra Sanatçıları",
    description:
      "Düğün etkinliklerinizde en iyi orkestra sanatçılarını keşfedin, romantik ve enerjik anlar yaratın.",
  },
  {
    id: 2,
    path: "https://i.ibb.co/DgTxbchX/etnik-music.jpg",
    name: "Etnik Müzik",
    slug: "etnik-muzik",
    title: "Etnik Müzik Sanatçıları",
    description:
      "Etkinliklerinizde en iyi etnik muzik sanatçılarını keşfedin, romantik ve enerjik anlar yaratın.",
  },
  {
    id: 3,
    path: "https://i.ibb.co/zhyB137F/jazz-music.jpg",
    name: "Jazz Müzik",
    slug: "jazz-muzik",
    title: "Jazz Müzik Sanatçıları",
    description:
      "Etkinliklerinizde en iyi jazz muzik sanatçılarını keşfedin, romantik ve enerjik anlar yaratın.",
  },
  {
    id: 4,
    path: "https://i.ibb.co/TxLqB4bQ/rock-music.jpg",
    name: "Rock Müzik",
    slug: "rock-muzik",
    title: "Rock Müzik Sanatçıları",
    description:
      "Etkinliklerinizde en iyi rock muzik sanatçılarını keşfedin, romantik ve enerjik anlar yaratın.",
  },
  {
    id: 5,
    path: "https://i.ibb.co/S7mcBM6q/djperformans.jpg",
    name: "Elektronik Müzik",
    slug: "elektronik-muzik",
    title: "DJ Performans Sanatçıları",
    description:
      "Etkinliklerinizde en iyi dj performans sanatçılarını keşfedin, romantik ve enerjik anlar yaratın.",
  },
  {
    id: 6,
    path: "https://i.ibb.co/JFsgPCb8/latin-perkusyon.jpg",
    name: "Latin Perküsyon",
    slug: "latin-perkusyon",
    title: "Latin Perküsyon Sanatçıları",
    description:
      "Etkinliklerinizde en iyi latin perküsyon sanatçılarını keşfedin, romantik ve enerjik anlar yaratın.",
  },
];

export const stepsData = [
  {
    title: "Sanatçını Bul",
    description:
      "Düğün, nişan veya partin için en iyi sanatçıları keşfet! Profilleri incele, filtrelerle seç, bir tıkla iletişime geç ve hızlıca rezervasyon yap.",
    img: "/sanatci-bul.webp",
  },
  {
    title: "Rezervasyon Yap",
    description:
      "Düğün, nişan veya partin için en iyi sanatçıları keşfet! Profilleri incele, filtrelerle seç, bir tıkla iletişime geç ve hızlıca rezervasyon yap.",
    img: "/rezervasyon-yap.webp",
  },
  {
    title: "Güvenli Ödeme",
    description:
      "Ödemelerin güvenli platformumuz üzerinden yapılır. Etkinliğin onaylanana kadar paran güvence altında.",
    img: "/guvenli-odeme.webp",
  },
  {
    title: "Sahnede Unutulmaz Anlar",
    description:
      "Müzisyenin hazır, etkinlik günün geldi! Hayalindeki performansı yaşa, anılarını müzikle taçlandır.",
    img: "/unutulmaz-anlar.webp",
  },
];

export const sahneData: EventData[] = [
  {
    name: "Kamil Aydınlı",
    url: "https://i.ibb.co/ccDXZxZd/kamil.jpg",
    description:
      "Pop ve funk’ın enerjik birleşimi! Düğün ve partiler için mükemmel.",
    musicType: "Rock",
    badgeText: "İstanbul",
    category: ["Düğün", "Happy Hour", "Doğum Günü"],
    slug: "kamil-aydinli",
    isSuperArtist: true,
    unavailableDates: [
      "2025-08-31",
      "2025-09-01",
      "2025-09-05",
      "2025-09-10",
      "2025-09-11",
    ],
  },
  {
    name: "Micheal Tartum",
    url: "https://i.ibb.co/CpPqXqcx/micheal.jpg",
    description:
      "Elektronik ritimlerle dans pistini ateşler. Özel etkinliklerin aranan ismi!",
    musicType: "Jazz",
    badgeText: "Ankara",
    category: [
      "Düğün",
      "Happy Hour",
      "Doğum Günü",
      "Baby Shower, Dj Performansı",
    ],
    slug: "micheal-tartum",
    isSuperArtist: true,
    unavailableDates: ["2025-09-01", "2025-09-05", "2025-09-10"],
  },
  {
    name: "Group Brooke",
    url: "https://i.ibb.co/VnrS74K/brooklin.jpg",
    description:
      "Sert ritimler, güçlü sahne! Festivaller ve partiler için hazır.",
    musicType: "Rock",
    badgeText: "Antalya",
    category: [
      "Düğün",
      "Happy Hour",
      "Doğum Günü",
      "Baby Shower, Dj Performansı",
    ],
    slug: "group-brooke",
    isSuperArtist: false,
    unavailableDates: ["2025-09-01", "2025-09-05", "2025-09-10"],
  },
  {
    name: "Group Nefes",
    url: "https://i.ibb.co/4hpYmdq/nefes.jpg",
    description: "Zarif klasik müzikle nişan ve davetlere sınıf katar.",
    musicType: "Enstrümantal",
    badgeText: "İzmir",
    slug: "group-nefes",
    category: ["Düğün", "Happy Hour", "Doğum Günü"],
    isSuperArtist: false,
    unavailableDates: ["2025-09-01", "2025-09-05", "2025-09-10"],
  },
];

export const dogumGunuData: EventData[] = [
  {
    name: "Elif Kaya",
    url: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBzaW5nZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Romantik melodilerden eğlenceli ritmlere… Elif, doğum günü kutlamalarınıza duyguyu ve enerjiyi aynı anda getiriyor. Canlı performansıyla geceye renk katmak isteyenler için birebir!",
    category: ["Canlı Müzik", "Etkinlik Sunucusu"],
    badgeText: "Ankara",
    slug: "elif-kaya",
  },
  {
    name: "Mert Uslu",
    url: "https://images.unsplash.com/photo-1584778672056-82fb68242666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxldmVudHMlMjBhbm5vdW5jZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Doğum günü enerjisini en iyi şekilde yansıtmak Mert’in işi! Eğlenceli sunumları ve profesyonel duruşuyla hem çocuklara hem yetişkinlere özel kutlamalarda tam aradığınız isim.",
    category: ["Canlı Müzik", "Etkinlik Sunucusu"],
    badgeText: "İstanbul",
    slug: "mert-uslu",
    isSuperArtist: true,
  },
  {
    name: "Kerem Yıldız",
    url: "https://images.unsplash.com/photo-1572208131938-22179274932c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFuaW1hdG9yJTIwY2xvd258ZW58MHx8MHx8fDI%3D",
    description:
      "Özellikle çocuk doğum günlerinin neşe kaynağı! Kerem; yüz boyama, mini şovlar ve oyunlarla küçük misafirlere unutulmaz anlar yaşatıyor.",
    category: ["Animasyon"],
    badgeText: "İzmir",
    slug: "kerem-yildiz",
  },
  {
    name: "Can Demir",
    url: "https://images.unsplash.com/photo-1504376626428-15e04b55193b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFjdXN0aWslMjBzaW5nZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Canlı müziğin sade ama etkileyici hali… Can, akustik repertuarıyla doğum günü organizasyonlarını sıcak ve samimi bir atmosfere dönüştürüyor. Hem ev partileri hem butik etkinlikler için ideal!",
    category: ["Akustik Performans"],
    badgeText: "Antalya",
    slug: "can-demir",
  },
];

export const babyshowerData: EventData[] = [
  {
    name: "Elif Naz",
    url: "https://images.unsplash.com/photo-1565562183660-62c4a72ab233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGFjdXN0aWslMjBzaW5nZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Yumuşak tınılar, huzur veren melodiler… Elif Naz, Baby Shower davetlerinize zarif bir müzik dokunuşu katıyor. Anne adayları için duygusal anlara fon olacak canlı performanslar sunuyor.",
    category: ["Akustik Vokal"],
    badgeText: "Ankara",
    slug: "elif-naz",
  },
  {
    name: "Ayça Mutlu",
    url: "https://images.unsplash.com/photo-1544654935-036f583c952a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG9yZ2FuaXplcnxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Balonlar, masa süslemeleri, tema detayları… Ayça, hayalinizdeki Baby Shower’ı A'dan Z'ye tasarlıyor. Minimalden gösterişli konsepte kadar her zevke hitap ediyor.",
    category: ["Organizasyon", "Animasyon"],
    badgeText: "İstanbul",
    slug: "ayca-mutlu",
  },
  {
    name: "Melis Efe",
    url: "https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGlzdHxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Farklı ve özel bir dokunuş arayanlar için… Melis, etkinlik sırasında misafirlerin canlı illüstrasyonlarını yapıyor ve ortaya çıkan eserlerle unutulmaz bir anı köşesi oluşturuyor.",
    category: ["Organizasyon"],
    badgeText: "İstanbul",
    slug: "melis-efe",
    isSuperArtist: true,
  },
  {
    name: "Emir Saruhan",
    url: "https://images.unsplash.com/photo-1525204016358-717c1c37382f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGFjdXN0aWslMjBzaW5nZXJ8ZW58MHx8MHx8fDI%3D",
    description:
      "Sakinlik, zarafet ve müzik bir arada… Emir, Baby Shower etkinliklerinize akustik gitarı ve huzur veren sesiyle eşlik ediyor. Duygusal anlara anlam katan canlı performansıyla fark yaratıyor.",
    category: ["Akustik ", "Vokal"],
    badgeText: "İzmir",
    slug: "emir-saruhan",
  },
];

export const happyhourData: EventData[] = [
  {
    name: "Derya Aksoy",
    url: "https://images.unsplash.com/photo-1686242585398-6a069e7eb7c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGolMjBmZW1hbGV8ZW58MHx8MHx8fDI%3D",
    description:
      "Yumuşak geçişler, cool ritimler… Derya, Happy Hour atmosferine uygun chill, deep house ve lounge setleriyle gecenize müzikal bir şıklık katıyor.",
    category: ["Dj-Lounge"],
    badgeText: "Ankara",
    slug: "derya-aksoy",
  },
  {
    name: "Bora Yüce",
    url: "https://images.unsplash.com/flagged/photo-1569231290150-9c6200705c5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNheG9waG9uZXxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Canlı saksafon tınılarıyla anın ruhunu yakalayın. Bora, özellikle kokteyl saatlerinde ambiyansı bir üst seviyeye taşıyan performansıyla unutulmaz bir deneyim sunuyor.",
    category: ["Saksafon Performans"],
    badgeText: "İstanbul",
    slug: "bora-yuce",
  },
  {
    name: "Simge Aral",
    url: "https://images.unsplash.com/photo-1555084415-b708df0fef3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGJhcm1haWR8ZW58MHx8MHx8fDI%3D",
    description:
      "Tatlar kadar sunum da önemli! Simge, özel tariflerle hazırladığı özgün kokteyller ve şık bar sunumlarıyla Happy Hour partilerinizi lezzetle taçlandırıyor.",
    category: ["Kokteyl Bar"],
    badgeText: "Antalya",
    slug: "simge-aral",
  },
  {
    name: "Cem Deniz",
    url: "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxhY291c3RpYyUyMHRyaW98ZW58MHx8MHx8fDI%3D",
    description:
      "Ne çok gürültülü, ne çok sakin... Cem ve ekibi, canlı akustik performanslarıyla Happy Hour buluşmalarına sıcak ve davetkâr bir hava katıyor.",
    category: ["Akustik Trio"],
    badgeText: "İzmir",
    slug: "cem-deniz",
  },
];

export const djData: EventData[] = [
  {
    name: "DJ Mira",
    url: "https://images.unsplash.com/photo-1669030565211-3f09bbe16782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGolMjBzZXRzfGVufDB8fDB8fHwy",
    description:
      "Zarif geçişler, atmosferik soundlar… DJ Mira, butik etkinliklerden lüks davetlere kadar her ortamda lounge ve deep house setleriyle geceye sofistike bir hava katıyor.",
    category: ["Deep House & Lounge"],
    badgeText: "Ankara",
    slug: "dj-mira",
  },
  {
    name: "DJ Rüzgar",
    url: "https://images.unsplash.com/photo-1541126274323-dbac58d14741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGp8ZW58MHx8MHx8fDI%3D",
    description:
      "Enerji mi lazım? DJ Rüzgar, en sevilen Türkçe pop parçalar ve ritmik geçişlerle herkesi piste çekiyor. Doğum günü, parti ve açık hava etkinliklerinde tam bir atmosfer kurucu.",
    category: ["Pop & Türkçe Hits"],
    badgeText: "İstanbul",
    slug: "dj-ruzgar",
    isSuperArtist: true,
  },
  {
    name: "DJ Lena",
    url: "https://images.unsplash.com/photo-1642344741786-97a10415a0ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRqJTIwZmVtYWxlfGVufDB8fDB8fHwy",
    description:
      "Sınırları aşan ritimler… DJ Lena, Afrobeat ve global ezgilerle farklı bir deneyim sunuyor. Alternatif müzik sevenler için eşsiz bir set deneyimi.",
    category: ["Afrobeat & World Music"],
    badgeText: "Bursa",
    slug: "dj-lena",
  },
  {
    name: "DJ Arda K",
    url: "https://images.unsplash.com/photo-1599423424751-54e0c1187a02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGp8ZW58MHx8MHx8fDI%3D",
    description:
      "Sınırları aşan ritimler… DJ Lena, Afrobeat ve global ezgilerle farklı bir deneyim sunuyor. Alternatif müzik sevenler için eşsiz bir set deneyimi.",
    category: ["Club & Techno Set"],
    badgeText: "Eskişehir",
    slug: "dj-arda-k",
  },
];
export const ozelcekimData: EventData[] = [
  {
    name: "Selin Aras",
    url: "https://images.unsplash.com/photo-1506105496842-dd8d1b18bb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaGVyJTIwZmVtYWxlfGVufDB8fDB8fHwy",
    description:
      "Doğallık ve zarafet bir arada… Selin, özel günlerinizi ve samimi anlarınızı estetik karelerle ölümsüzleştiriyor. Özellikle Baby Shower, doğum günü ve nişan çekimleri için tercih ediliyor.",
    category: ["Fotoğraf & Portre Çekimi"],
    badgeText: "İstanbul",
    slug: "selin-aras",
  },
  {
    name: "Can Eren",
    url: "https://images.unsplash.com/photo-1593806061006-bee8dc30fdee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlZWxzJTIwc2hvb3RlcnxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Anı sadece kaydetmek yetmez, hissettirmek gerekir… Can, sosyal medya uyumlu dikey videolar, reels ve aftermovie’lerle etkinliklerinize profesyonel bir dokunuş katıyor.",
    category: ["Video & Reels Prodüksiyon"],
    badgeText: "İstanbul",
    slug: "can-eren",
  },
  {
    name: "Naz Su",
    url: "https://images.unsplash.com/photo-1648662199460-34b7597ba771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlciUyMGZlbWFsZXxlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Farklı bir şey arıyorsan, doğru yerdesin. Naz; temalı arka planlar, styling ve yaratıcı yönlendirmelerle özgün kareler yaratıyor. Özellikle stilize Baby Shower ve arkadaş grubu çekimleri için birebir.",
    category: ["Konsept & Tematik Çekim"],
    badgeText: "Ankara",
    slug: "naz-su",
  },
  {
    name: "Emir Can",
    url: "https://images.unsplash.com/photo-1596913799254-c261205fe191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5hbG9nJTIwdmlkZW8lMjBzaG9vdGluZ3xlbnwwfHwwfHx8Mg%3D%3D",
    description:
      "Estetikte sadelik arayanlara özel... Emir, analog kamera ve film efektli dijital çekimlerle nostaljik ve duygusal kareler sunuyor. Sanat ve duygu dolu bir çekim deneyimi için ideal.",
    category: ["Analog & Film Tarzı Çekimler"],
    badgeText: "Adana",
    slug: "emir-can",
  },
];

export const sanatciDetayData = {
  description:
    "2002 yılında İstanbul’da, sazının 4 usta müzisyeni tarafından kurulan Group Nefes dinleyicilerini Jazz, Latin ve Napoliten klasiklerinden, unutulmaz müzikallere; Rock’n Roll eserlerden Hicaz örneklemelere uzanan eşsiz bir yolculuğa davet ediyor. Medeniyetler şehri olan İstanbul’un tarihi zenginliğinden aldıkları ilham ile beslenen grup kendisini takip eden seçkin bir dinleyici topluluğu ile yoluna devam etmektedir. Ülke çapında birçok firmanın özel organizasyonu, lansman toplantıları olmak üzere referans listesinde sayısız seçkin düğün davet ve toplantı bulundurmaktadır. Türkiye’yi ziyaret eden misafirleri tarihi ve coğrafi güzelliği ile büyüleyen cennet vatanımızın müzikal zenginliğini göstermeyi kendimize görev bilmiş ve bu bilinçte hizmet vermeyi kendimize prensip edinmişizdir.",
  language: "Türkçe",
  createdAt: "2002",
  enstrumans: [
    "Akordeon",
    "Akustik Davul",
    "Akustik Gitar",
    "Solist",
    "Trompet",
  ],
  memberDate: "9 Şubat 2017",
  address: "İstanbul/Türkiye",
  events: ["Doğum Günü", "Happy Hour", "Baby Shower", "Düğün"],
  musicType: ["Latin", "Pop", "Jazz", "Rock", "Dans"],
  repertuvar: [
    "Sezen Aksu – Tükeneceğiz",
    "Tarkan – Kuzu Kuzu",
    "Kenan Doğulu – Tutamıyorum Zamanı",
    "Ajda Pekkan – Yakar Geçerim",
    "MFÖ – Sude",
    "Teoman – Renkli Rüyalar Oteli",
    "Barış Manço – Gibi Gibi",
    "Sertab Erener – Rengârenk",
    "Duman – Her Şeyi Yak",
    "Edis – Martılar",
  ],
  category: "",
  price: "3.000 TL - 5.000 TL",
};
export const mekanDetayData = {
  description:
    "Ritim Bar, İstanbul’un gece hayatının nabzını tutan, canlı müzik ve DJ partilerinin vazgeçilmez adresi! Beyoğlu’nun kalbinde yer alan bu enerjik mekan, rock’tan elektroniğe, indie’den popa geniş bir müzik yelpazesi sunuyor. Sıcak bir pub atmosferi, samimi sahne performansları ve dans pistinde bitmeyen eğlenceyle, Ritim Bar müzikseverlerin buluşma noktası. Haftanın her günü farklı bir vibe, her gece yeni bir hikaye!",
  address: "İstanbul/Türkiye",
  tur: "Pop, Rock, Alternatif",
  musicType: "Canlı Müzik",
  price: "3.000 TL - 5.000 TL",
  age: "18+",
  program: [
    { day: "Pazartesi", artist: "DJ Can", time: "22:00" },
    { day: "Salı", artist: "Akustik Trio", time: "21:30" },
    { day: "Çarşamba", artist: "DJ Melis", time: "23:00" },
    { day: "Perşembe", artist: "Rock Band", time: "21:00" },
    { day: "Cuma", artist: "Pop Live", time: "22:30" },
    { day: "Cumartesi", artist: "DJ Ali", time: "00:00" },
    { day: "Pazar", artist: "Jazz Night", time: "20:00" },
  ],
  foodDrink: [
    "https://st5.depositphotos.com/19194144/66543/v/600/depositphotos_665438908-stock-illustration-bar-restaurant-menu-crafted-paper.jpg",
    "https://st2.depositphotos.com/1792782/12430/v/600/depositphotos_124305286-stock-illustration-menu-restaurant-food-template.jpg",
    "https://st3.depositphotos.com/3557125/13060/v/600/depositphotos_130609060-stock-illustration-restaurant-menu-design-chalkboard-background.jpg",
  ],
  menuLink: "https://www.ritimbar.com.tr/Menu",
  phone: "0535 000 00 00",
  singers: [
    {
      name: "DJ Can",
      genre: "Elektronik / House",
      type: "DJ Set",
      time: "22:00",
      description: "Enerjik house setleriyle gecenin ritmini yükseltiyor.",
      highlights: "Tomorrowland Türkiye sahnesinde çaldı.",
      links: {
        instagram: "https://instagram.com/djcan",
        spotify: "https://spotify.com/djcan",
      },
    },
    {
      name: "Akustik Trio",
      genre: "Alternatif / Akustik",
      type: "Canlı Performans",
      time: "21:30",
      description:
        "Üç kişilik grup, akustik cover performanslarıyla keyifli bir atmosfer yaratıyor.",
      highlights: "Moda Sahnesi’nde kapalı gişe konser verdi.",
      links: {
        youtube: "https://youtube.com/akustiktrio",
      },
    },
    {
      name: "DJ Melis",
      genre: "Techno / Deep House",
      type: "DJ Set",
      time: "23:00",
      description:
        "Setlerinde underground techno ile deep house’u harmanlıyor.",
      highlights: "Berlin’de ünlü kulüp Berghain’de sahne aldı.",
      links: {
        instagram: "https://instagram.com/djmelis",
      },
    },
    {
      name: "Rock Band",
      genre: "Rock / Alternatif",
      type: "Canlı Grup",
      time: "21:00",
      description:
        "Kendi şarkıları ve rock klasiklerinin cover’larıyla sahnede.",
      highlights: "Geçen yaz Zeytinli Rock Festivali’nde sahne aldı.",
      links: {
        spotify: "https://spotify.com/rockband",
      },
    },
    {
      name: "Jazz Night Ensemble",
      genre: "Jazz / Blues",
      type: "Canlı Performans",
      time: "20:00",
      description:
        "Caz standartları ve blues parçalarıyla sakin bir kapanış sunuyor.",
      highlights: "İstanbul Caz Festivali’nde yer aldı.",
      links: {
        youtube: "https://youtube.com/jazznightensemble",
      },
    },
  ],
  amenities: ["Otopark", "Vale", "Canlı Müzik"],
  worksHours: "14:00-02:00",
  reservationPhone: "0535 000 00 00",
  locationUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.745627376184!2d4.893723577003981!3d52.3656489476455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6099569640179%3A0x5bb6611a01667b1!2sClub%20Prime!5e1!3m2!1str!2str!4v1756203626078!5m2!1str!2str",
};

export const mekanDetaySayfasiHaftalikProgramData = [
  {
    day: "Pazartesi-Salı-Çarşamba",
    name: "Salamanca",
    time: "22:00-24:00",
    img: "https://st5.depositphotos.com/3430693/72771/i/380/depositphotos_727719968-stock-photo-mixing-music-professional-equipment-showcasing.jpg",
  },
  {
    day: "Pazartesi-Perşembe",
    name: "DJ Ernesto",
    time: "21:30-23:00",
    img: "https://st.depositphotos.com/1026550/4167/i/380/depositphotos_41679805-stock-photo-dj-silhouette.jpg",
  },
  {
    day: "Cuma-Cumartesi",
    name: "Engin Yurt",
    time: "20:00-22:00",
    img: "https://st3.depositphotos.com/13194036/18527/i/380/depositphotos_185271722-stock-photo-black-and-white-shot-of.jpg",
  },
  {
    day: "Salı-Persembe",
    name: "Tyler Durden",
    time: "22:00-24:00",
    img: "https://st3.depositphotos.com/10638998/15080/i/380/depositphotos_150801298-stock-photo-rock-band-on-stage.jpg",
  },
];

export const mekanDetaySayfasiVideoData = [
  {
    id: 1,
    title: "Michael Jackson - They Don’t Care About Us",
    src: "https://www.youtube.com/embed/hN9yVnM9W68?si=w6sIApbD5UY1oGWh",
  },
  {
    id: 2,
    title: "Linkin Park - Numb",
    src: "https://www.youtube.com/embed/UpxKKBLUP2g?si=ia3lyyXJN3mipgJn",
  },
  {
    id: 3,
    title: "Eminem - Without Me",
    src: "https://www.youtube.com/embed/YVkUvmDQ3HY?si=5M9hMfVVn4GCUMR2",
  },
  {
    id: 4,
    title: "Coldplay - Fix You",
    src: "https://www.youtube.com/embed/EDwb9jOVRtU?si=G1Eqi1g7iS1tMNEB",
  },
  {
    id: 5,
    title: "Backstreet Boys - I Want It That Way",
    src: "https://www.youtube.com/embed/h_D3VFfhvs4?si=yHd1WnfRi0eHTB-x",
  },
  {
    id: 6,
    title: "Adele - Rolling in the Deep",
    src: "https://www.youtube.com/embed/1V_xRb0x9aw?si=Rm9CXJVUNUflav_4",
  },
];

export const festivalData = [
  {
    title: "İstanbul Yaz Rüzgarı Festivali",
    description:
      "İstanbul’un kalbinde, yerli ve uluslararası pop-rock sanatçılarının sahne aldığı üç günlük bir müzik şöleni. Genç yetenekler ve büyük isimler bir arada!",
    img: "https://muzik.iksv.org/i/content/26479_1_52imf-KV-web-277x395.jpg",
    month: "NİS",
    day: "26",
    location: "İstanbul",
    slug: "istanbul-yaz-ruzgari-festivali",
  },
  {
    title: "Cappadox Müzik ve Sanat Festivali",
    description:
      "Kapadokya’nın büyülü atmosferinde, balon turları ve sanat enstalasyonlarıyla zenginleşen bir festival. Elektronik ritimler ve indie melodilerle dolu bir deneyim.",
    img: "https://www.creative-flyers.com/wp-content/uploads/2022/07/Music-Festival-Poster-Design-1.jpg",
    month: "MAY",
    day: "15",
    location: "Kapadokya, Nevşehir",
    slug: "cappadox-muzik-ve-sanat-festivali",
  },
  {
    title: "İzmir Uluslararası Caz Festivali",
    description:
      "Dünyaca ünlü caz sanatçıları ve yerel yeteneklerin buluştuğu bu festival, İzmir’in tarihi dokusunda unutulmaz bir müzik ziyafeti sunuyor.",
    img: "https://st4.depositphotos.com/1536490/29098/v/600/depositphotos_290988594-stock-illustration-poster-for-a-jazz-music.jpg",
    month: "TEM",
    day: "15",
    location: "Sanat Merkezi, İzmir",
    slug: "izmir-uluslararasi-caz-festivali",
  },
  {
    title: "Antalya Gençlik Festivali",
    description:
      "Genç kitleye hitap eden bu festival, Türkiye’nin popüler rap ve pop sanatçılarını bir araya getiriyor. Enerji dolu bir yaz etkinliği!",
    img: "https://st4.depositphotos.com/2793243/24265/v/380/depositphotos_242658908-stock-illustration-hip-hop-music-ready-made.jpg",
    month: "TEM",
    day: "15",
    location: "Subaşı Tesisleri, Antalya",
    slug: "antalya-genclik-festivali",
  },
  {
    title: "Headbangers’ Weekend",
    description:
      "Metal müzik tutkunları için epik bir hafta sonu. Uluslararası ve yerel metal gruplarının sahne aldığı bu festival, adrenalini yüksek bir deneyim vadediyor.",
    img: "https://st.depositphotos.com/1807998/1420/v/380/depositphotos_14203892-stock-illustration-rock-festival-design-template.jpg",
    month: "AĞU",
    day: "3",
    location: "Life Park, İstanbul",
    slug: "headbangers-weekend",
  },
  {
    title: "Sónar İstanbul 2025",
    description:
      "Elektronik müziğin öncü isimlerini ve yenilikçi sesleri buluşturan Sónar, sanat ve teknolojiyle harmanlanmış bir festival. Beşiktaş’ta müzik ve yaratıcılık bir arada!",
    img: "https://st.depositphotos.com/1301934/1554/v/380/depositphotos_15546575-stock-illustration-music-concept-retro-poster-template.jpg",
    month: "AĞU",
    day: "12",
    location: "PSM, İstanbul",
    slug: "sonar-istanbul-2025",
  },
  {
    title: "Nefis Orman Festivali",
    description:
      "Doğayla iç içe bir festival. Yerli pop ve folk sanatçılarının akustik performanslarıyla, şehirden uzak bir müzik kaçamağı.",
    img: "https://st4.depositphotos.com/5934840/41033/v/380/depositphotos_410334678-stock-illustration-music-festival-poster-with-speaker.jpg",
    month: "TEM",
    day: "22",
    location: "Nefes Orman Sahnesi, İstanbul",
    slug: "nefis-orman-festivali",
  },
];
export const festivalDetayData = {
  description:
    "İstanbul Yaz Rüzgarı Festivali, müziğin birleştirici gücünü İstanbul’un eşsiz atmosferinde buluşturan 3 günlük bir müzik şölenidir. Pop, rock ve alternatif müzik tutkunlarını bir araya getiren bu festival, yerli ve uluslararası sanatçıların enerjik performanslarıyla unutulmaz anlar vadediyor. KüçükÇiftlik Park’ın açık hava sahnesinde, yazın en güzel günlerinde müzik, dans ve eğlence bir arada!",
  date: "20-22 Haziran 2025",
  location: "KüçükÇiftlik Park, İstanbul",
  musicType: "Pop, Rock, Alternatif",
  price: "300 TL, Kombine (3 Gün)",
  age: "16+",
  program: [
    {
      day: "20 Haziran 2025 - Cuma",
      events: [
        { time: "16:00", artist: "DJ Sunrise", genre: "Elektronik / Pop" },
        { time: "18:00", artist: "Zeynep Bastık", genre: "Pop" },
        { time: "20:00", artist: "Teoman", genre: "Rock" },
        { time: "22:00", artist: "Imagine Dragons", genre: "Alternatif Rock" },
      ],
    },
    {
      day: "21 Haziran 2025 - Cumartesi",
      events: [
        { time: "15:30", artist: "Can Ozan", genre: "Alternatif" },
        { time: "17:30", artist: "Athena", genre: "Ska / Punk Rock" },
        { time: "19:30", artist: "Mor ve Ötesi", genre: "Rock" },
        { time: "21:30", artist: "Coldplay", genre: "Alternatif / Pop Rock" },
      ],
    },
    {
      day: "22 Haziran 2025 - Pazar",
      events: [
        { time: "14:30", artist: "Edis", genre: "Pop" },
        { time: "16:30", artist: "Duman", genre: "Rock" },
        { time: "18:30", artist: "Şebnem Ferah", genre: "Rock" },
        { time: "20:30", artist: "The Killers", genre: "Alternatif Rock" },
      ],
    },
  ],
  singers: [
    {
      name: "Zeynep Bastık",
      genre: "Pop",
      type: "Canlı Performans",
      time: "18:00",
      description:
        "Türkiye’nin en sevilen pop sanatçılarından biri olan Zeynep Bastık, enerjik sahne performansı ve hit şarkılarıyla festivalin ilk gününde sahne alıyor.",
      highlights: "Spotify Global listelerinde milyonlarca dinlenmeye ulaştı.",
      links: {
        instagram: "https://instagram.com/zeynepbastik",
        spotify: "https://spotify.com/zeynepbastik",
      },
    },
    {
      name: "Teoman",
      genre: "Rock",
      type: "Canlı Performans",
      time: "20:00",
      description:
        "Türk rock müziğinin efsane ismi Teoman, unutulmaz şarkılarıyla festival sahnesinde nostalji ve coşku dolu bir akşam sunuyor.",
      highlights: "Türkiye’nin en çok dinlenen rock sanatçılarından.",
      links: {
        instagram: "https://instagram.com/teoman",
        spotify: "https://spotify.com/teoman",
      },
    },
    {
      name: "Imagine Dragons",
      genre: "Alternatif Rock",
      type: "Canlı Grup",
      time: "22:00",
      description:
        "Dünya çapında milyonlarca hayranı olan Imagine Dragons, enerjik performansı ve hit şarkılarıyla İstanbul’da unutulmaz bir gece yaşatacak.",
      highlights: "Grammy ödüllü alternatif rock grubu.",
      links: {
        youtube: "https://youtube.com/imaginedragons",
        spotify: "https://spotify.com/imaginedragons",
      },
    },
    {
      name: "Coldplay",
      genre: "Alternatif / Pop Rock",
      type: "Canlı Grup",
      time: "21:30",
      description:
        "Sahne şovları ve eşsiz repertuarıyla Coldplay, Cumartesi gecesine damga vuracak.",
      highlights: "Dünyanın en çok bilet satan gruplarından biri.",
      links: {
        instagram: "https://instagram.com/coldplay",
        spotify: "https://spotify.com/coldplay",
      },
    },
    {
      name: "Duman",
      genre: "Rock",
      type: "Canlı Grup",
      time: "16:30",
      description:
        "Türkiye’nin en sevilen rock gruplarından Duman, sahnede unutulmaz şarkılarını seslendirecek.",
      highlights: "Zeytinli Rock Festivali’nin değişmez gruplarından.",
      links: {
        youtube: "https://youtube.com/duman",
        spotify: "https://spotify.com/duman",
      },
    },
    {
      name: "Şebnem Ferah",
      genre: "Rock",
      type: "Canlı Performans",
      time: "18:30",
      description:
        "Türk rock müziğinin kraliçesi Şebnem Ferah, güçlü sesi ve şarkılarıyla festival sahnesinde olacak.",
      highlights: "30 yıllık kariyerinde sayısız ödül sahibi.",
      links: {
        instagram: "https://instagram.com/sebnemferah",
        spotify: "https://spotify.com/sebnemferah",
      },
    },
    {
      name: "Edis",
      genre: "Pop",
      type: "Canlı Performans",
      time: "14:30",
      description:
        "Pop müziğin sevilen ismi Edis, sahne enerjisi ve dans şovlarıyla festivale renk katacak.",
      highlights: "Türkiye’nin en çok dinlenen pop sanatçılarından biri.",
      links: {
        instagram: "https://instagram.com/edis",
        spotify: "https://spotify.com/edis",
      },
    },
    {
      name: "Athena",
      genre: "Ska / Punk Rock",
      type: "Canlı Grup",
      time: "17:30",
      description:
        "Enerjik sahne performansıyla Athena, festivale coşku ve eğlence katacak.",
      highlights: "Eurovision’da Türkiye’yi temsil eden rock grubu.",
      links: {
        youtube: "https://youtube.com/athena",
        spotify: "https://spotify.com/athena",
      },
    },
    {
      name: "Mor ve Ötesi",
      genre: "Rock",
      type: "Canlı Grup",
      time: "19:30",
      description:
        "Alternatif rock müziğin öncülerinden Mor ve Ötesi, sahnede unutulmaz şarkılarını seslendirecek.",
      highlights: "Türkiye’nin en önemli rock gruplarından.",
      links: {
        instagram: "https://instagram.com/morveotesi",
        spotify: "https://spotify.com/morveotesi",
      },
    },
    {
      name: "Can Ozan",
      genre: "Alternatif",
      type: "Canlı Performans",
      time: "15:30",
      description:
        "Duygusal şarkıları ve akustik performanslarıyla bilinen Can Ozan, Cumartesi gününe sakin bir başlangıç yapacak.",
      highlights: "Youtube’da milyonlarca dinlenmeye ulaştı.",
      links: {
        youtube: "https://youtube.com/canozan",
        spotify: "https://spotify.com/canozan",
      },
    },
  ],
  amenities: [
    "Ana Sahne",
    "Alternatif Sahne",
    "Yeme-İçme Stantları",
    "Vegan Seçenekler",
    "Alkol Satışı",
    "Tuvaletler",
    "Kamp Alanı",
    "VIP Alanı",
    "Telefon Şarj İstasyonları",
    "İlk Yardım Alanı",
    "Güvenlik Noktaları",
    "Otopark",
  ],
  locationUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.745627376184!2d4.893723577003981!3d52.3656489476455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6099569640179%3A0x5bb6611a01667b1!2sClub%20Prime!5e1!3m2!1str!2str!4v1756203626078!5m2!1str!2str",
};

export const canliMuzikData: EventData[] = [
  {
    name: "Distortion Bar",
    url: "https://st.depositphotos.com/1001099/4130/i/380/depositphotos_41309515-stock-photo-towns.jpg",
    description:
      "Gitarın kalbine inen riff’ler ve güçlü vokallerle dolu, enerjinin tavan yaptığı rock geceleri için Distortion Bar’a bekleniyorsunuz.",
    musicType: "Rock & Alternative",
    badgeText: "İstanbul",
    slug: "distortion-bar",
    category: ["Canli Müzik"],
  },
  {
    name: "Blue Note Terrace",
    url: "https://st5.depositphotos.com/15601592/80828/i/380/depositphotos_808289356-stock-photo-male-musician-mixed-ethnicity-attired.jpg",
    description:
      "Şehrin en zarif caz terasında, saksofon tınıları ve samimi atmosferle gecenizi unutulmaz kılın.",
    musicType: "Caz & Blues",
    badgeText: "Antalya",
    category: ["Canli Müzik"],
    slug: "blue-note-terrace",
  },
  {
    name: "Salsa Mar",
    url: "https://st.depositphotos.com/3917667/61486/i/600/depositphotos_614866790-stock-photo-aspiration-stylish-ballroom-dancers-couple.jpg",
    description:
      "Latin ritimlerinin deniz esintisiyle buluştuğu bu mekânda dans pistinde sınır tanımayın",
    musicType: "Latin & Salsa",
    badgeText: "İstanbul",
    category: ["Canli Müzik"],
    slug: "salsa-mar",
  },
  {
    name: "Luna Akustik",
    url: "https://st.depositphotos.com/19430740/55858/i/380/depositphotos_558583406-stock-photo-live-music-guitars-and-strings.jpg",
    description:
      "Ay ışığı altında, akustik ezgiler ve huzurlu bir bahçe atmosferiyle kendinizi müziğin kollarına bırakın.",
    musicType: " Akustik & Indie",
    badgeText: "Ankara",
    category: ["Canli Müzik"],
    slug: "luna-akustik",
  },
];
export const beachClubData: EventData[] = [
  {
    name: "Sunset Vibes",
    url: "https://st4.depositphotos.com/18086274/38810/i/380/depositphotos_388101346-stock-photo-descanso-beach-club-santa-catalina.jpg",
    description:
      "Gün batımının büyüsünü deniz kenarında hissedin. Yumuşak lounge müzikleri, özel kokteyller ve altın kumlar eşliğinde huzurlu bir akşam geçirin.",
    musicType: "Chill-Out & Lounge",
    badgeText: "Çeşme/İzmir",
    category: ["Beach Club"],
    slug: "sunset-vibes",
  },
  {
    name: "Wave Points",
    url: "https://st5.depositphotos.com/23957582/65536/i/380/depositphotos_655369504-stock-photo-view-petitenget-beach-kuta-bali.jpg",
    description:
      "Gün batımının büyüsünü deniz kenarında hissedin. Yumuşak lounge müzikleri, özel kokteyller ve altın kumlar eşliğinde huzurlu bir akşam geçirin.",
    musicType: "Elektronik & Deep House",
    badgeText: "Bodrum/Muğla",
    category: ["Beach Club"],
    slug: "wave-points",
  },
  {
    name: "Coral Bay",
    url: "https://static7.depositphotos.com/1043073/762/i/380/depositphotos_7628013-stock-photo-tropical-cafe.jpg",
    description:
      "Hindistan cevizi kokteylleri, reggae ritimleri ve palmiyeler altında tropikal bir tatil havası yaşayın. Coral Bay, yazın vazgeçilmezi.",
    musicType: "Tropikal & Reggae",
    badgeText: "Bodrum/Muğla",
    category: ["Beach Club"],
    slug: "coral-bay",
  },
  {
    name: "Moonlight Pier",
    url: "https://st.depositphotos.com/15199906/56425/i/380/depositphotos_564255340-stock-photo-night-beach-with-a-view.jpg",
    description:
      "Ay ışığının denize yansıdığı iskelede, akustik performanslar ve samimi bir atmosferle unutulmaz bir yaz gecesi sizi bekliyor.",
    musicType: "Akustik & Chill",
    badgeText: "Çeşme/İzmir",
    category: ["Beach Club"],
    slug: "moonlight-pier",
  },
];

export const kokteylBarData: EventData[] = [
  {
    name: "Shaker & Soul",
    url: "https://static8.depositphotos.com/1007248/808/i/380/depositphotos_8087626-stock-photo-glasses-with-cocktail.jpg",
    description:
      " Usta miksolojistlerin elinden çıkan yaratıcı kokteyller, modern dekor ve enerjik bir bar atmosferiyle Shaker & Soul sizi bekliyor.",
    musicType: "Modern Kokteyl & Mixology",
    badgeText: "İstanbul",
    category: ["Kokteyl Bar"],
    slug: "shaker-and-soul",
  },
  {
    name: "Velvet Sip",
    url: "https://static5.depositphotos.com/1001025/521/i/380/depositphotos_5219977-stock-photo-chairs-in-row-in-bar.jpg",
    description:
      "Kadife dokulu lezzetler, premium içki seçenekleri ve şık bir ortamda keyifli bir gece deneyimi.",
    musicType: "Lüks & Premium Kokteyl",
    badgeText: "Ankara",
    category: ["Kokteyl Bar"],
    slug: "velvet-sip",
  },
  {
    name: "Citrus & Chill",
    url: "https://st2.depositphotos.com/4208693/42939/i/380/depositphotos_429393606-stock-photo-young-bartender-demonstrates-the-process.jpg",
    description:
      "Tropikal meyveler ve taze aromalarla hazırlanmış ferah kokteyller, sahil esintisiyle buluşuyor.",
    musicType: "Tropikal & Ferah Kokteyl",
    badgeText: "İzmir",
    category: ["Kokteyl Bar"],
    slug: "citrus-and-chill",
  },
  {
    name: "Midnight Mule",
    url: "https://static8.depositphotos.com/1018611/963/i/380/depositphotos_9630627-stock-photo-cocktail-glass-with-drink-in.jpg",
    description:
      "Geceyi efsaneleşmiş klasik kokteyllerle taçlandırmak isteyenler için sıcak ve samimi bir bar ortamı.",
    musicType: "Klasik & İkonik Kokteyl",
    badgeText: "Antalya",
    category: ["Kokteyl Bar"],
    slug: "midnight-mule",
  },
];
export const djbarsData: EventData[] = [
  {
    name: "Neon Pulse",
    url: "https://st.depositphotos.com/2022413/4741/i/380/depositphotos_47413235-stock-photo-needle-playing-red-vinyl.jpg",
    description:
      "Neon ışıkların altında, en iyi DJ’lerin canlı performanslarıyla yüksek enerjili dans geceleri sizi bekliyor. VIP alan ayrıcalığıyla farkı yaşayın.",
    musicType: "EDM & House",
    badgeText: "İstanbul",
    category: ["DJ Bar"],
    slug: "neon-pulse",
  },
  {
    name: "Echo Lounge",
    url: "https://st3.depositphotos.com/2853475/13343/i/380/depositphotos_133430502-stock-photo-friends-dancing-in-lounge-bar.jpg",
    description:
      "Minimalist dekoru ve güçlü ses sistemiyle Echo Lounge, underground DJ setleriyle elektronik müzik tutkunlarının adresi.",
    musicType: "Techno & Deep House",
    badgeText: "İstanbul",
    category: ["DJ Bar"],
    slug: "echo-lounge",
  },
  {
    name: "Skyline Beats",
    url: "https://st.depositphotos.com/19415244/53093/i/380/depositphotos_530935970-stock-photo-mixer-headphones-nightclub.jpg",
    description:
      "Şehrin en yüksek noktasında, VIP bölümlerde ünlü DJ’ler eşliğinde trap ve hip-hop ritimleriyle unutulmaz geceler.",
    musicType: "Trap & Hip-Hop",
    badgeText: "Bursa",
    category: ["DJ Bar"],
    slug: "skyline-beats",
  },
  {
    name: "Bass Horizon",
    url: "https://static8.depositphotos.com/1055352/844/i/380/depositphotos_8444087-stock-photo-dj-playing-vinyl.jpg",
    description:
      "Güçlü baslar ve enerjik setlerle dolu, dans pistinin nabzını tutan Bass Horizon’da VIP ayrıcalığını yaşayın.",
    musicType: "Dubstep & Bass Music",
    badgeText: "Eskişehir",
    category: ["DJ Bar"],
    slug: "bass-horizon",
  },
];

export const rooftopData: EventData[] = [
  {
    name: "Sky Lounge 360",
    url: "https://st4.depositphotos.com/2853475/24695/i/380/depositphotos_246954930-stock-photo-young-happy-people-having-barbecue.jpg",
    description:
      "Şehrin panoramik manzarası eşliğinde, rahatlatıcı lounge müzikleri ve şık kokteyllerle keyif dolu anlar.",
    musicType: "Chill-Out & Lounge",
    badgeText: "İstanbul",
    category: ["Roof Top Bar"],
    slug: "sky-lounge-360",
  },
  {
    name: "Altitude Beats",
    url: "https://st3.depositphotos.com/32520976/35552/i/380/depositphotos_355525318-stock-photo-party-crowd-people-having-fun.jpg",
    description:
      "Yükseklerde elektronik ritimlerin hakim olduğu, yıldızların altında dans geceleri için ideal mekan.",
    musicType: "Deep House & Chillwave",
    badgeText: "İzmir",
    category: ["Roof Top Bar"],
    slug: "altitude-beats",
  },
  {
    name: "Cloud Nine Bar",
    url: "https://st2.depositphotos.com/1000998/12437/v/600/depositphotos_124377928-stock-video-sun-loungers-and-plants-next.jpg",
    description:
      "Bulutların üstünde, zarif caz ve soul tınılarıyla şık ve samimi bir atmosferde buluşun.",
    musicType: "Jazz & Soul",
    badgeText: "Antalya",
    category: ["Roof Top Bar"],
    slug: "cloud-nine-bar",
  },
  {
    name: "Sunset Horizon",
    url: "https://st5.depositphotos.com/23957582/65084/i/450/depositphotos_650845294-stock-photo-aerial-view-patong-city-center.jpg",
    description:
      "Gün batımını izlerken akustik performanslarla ruhunuzu besleyin, şehir ışıkları eşliğinde unutulmaz anlar yaşayın.",
    musicType: "Akustik & Indie",
    badgeText: "Muğla",
    category: ["Roof Top Bar"],
    slug: "sunset-horizon",
  },
];

export const banners = [
  {
    id: 1,
    name: "Neşe Karaböcek",
    genres: "Pop, Dance",
    hour: "19:00",
    venue: "Babylon",
    location: "İstanbul",
    image: "https://i.ibb.co/d0CvxFwP/venue1.jpg",
  },
  {
    id: 2,
    name: "Berkay Aydınlı",
    genres: "Rock, Dance",
    hour: "20:00",
    venue: "Vakkoroma Cafe",
    location: "İstanbul",
    image: "https://i.ibb.co/qMz0zPNP/venue2.jpg",
  },
  {
    id: 3,
    name: "Tan Yılmaz",
    genres: "Sanat Müziği",
    hour: "21:30",
    venue: "Black Box",
    location: "Ankara",
    image: "https://i.ibb.co/0yDrj0d7/venue3.jpg",
  },
  {
    id: 4,
    name: "DJ Yelken",
    genres: "House, Club",
    hour: "22:00",
    venue: "Cath Restaurant",
    location: "Antalya",
    image: "https://i.ibb.co/Ndv7Qnx9/venue4.jpg",
  },
];

export const singerCardsDataIstanbul = [
  {
    url: "https://st2.depositphotos.com/6571396/9693/i/380/depositphotos_96932416-stock-photo-beautiful-girl-singing-into-microphone.jpg",
    name: "Şermin Yüce",
    category: ["Pop"],
    venue: "Ritim Bar",
    hour: "19:30",
    slug: "sermin-yuce",
    description: "",
  },
  {
    url: "https://st3.depositphotos.com/9880800/17889/i/380/depositphotos_178892154-stock-photo-sensual-young-female-singer-performing.jpg",
    name: "Deniz Derman",
    category: ["Türkü"],
    venue: "Black Bar",
    hour: "20:00",
    slug: "deniz-derman",
    description: "",
  },
  {
    url: "https://st4.depositphotos.com/12985790/25168/i/380/depositphotos_251683390-stock-photo-close-good-looking-musician-singing.jpg",
    name: "Berkut",
    category: ["Rock"],
    hour: "21:00",
    venue: "Catch Bar",
    slug: "berkut",
    description: "",
  },
  {
    url: "https://st3.depositphotos.com/1001951/13987/i/380/depositphotos_139879404-stock-photo-two-professional-guitarists-performing-in.jpg",
    name: "Grup Tarçın",
    category: ["Pop"],
    hour: "22:00",
    venue: "Hard Rock Bar",
    slug: "grup-tarcin",
    description: "",
  },
];
export const singerCardsDataAnkara = [
  {
    url: "https://st3.depositphotos.com/10638998/15079/i/380/depositphotos_150799476-stock-photo-rock-band-on-stage.jpg",
    name: "Melisa Güven",
    category: ["Pop"],
    hour: "19:00",
    venue: "Lucky Bar",
    slug: "melisa-guven",
    description: "",
  },
  {
    url: "https://st.depositphotos.com/1010710/3384/i/380/depositphotos_33840331-stock-photo-pop-singer.jpg",
    name: "Antonio Morano",
    category: ["Akustik"],
    hour: "20:00",
    venue: "Sticky Bar",
    slug: "antonio-morano",
    description: "",
  },
  {
    url: "https://st2.depositphotos.com/3662505/5297/i/380/depositphotos_52979941-stock-photo-recording-studio.jpg",
    name: "Sinem Kaya",
    category: ["Blues"],
    hour: "21:00",
    venue: "Brunch Bar",
    slug: "sinem-kaya",
    description: "",
  },
  {
    url: "https://st2.depositphotos.com/1284069/6417/i/380/depositphotos_64170833-stock-photo-beautiful-african-woman-singing-with.jpg",
    name: "Angelina Jolie",
    category: ["Rock"],
    hour: "22:00",
    venue: "Termessos Bar",
    slug: "angelina-jolie",
    description: "",
  },
];

export const singerCardsDataIzmir = [
  {
    url: "https://st5.depositphotos.com/16122460/72457/i/380/depositphotos_724574592-stock-photo-beautiful-young-woman-stylish-dress.jpg",
    name: "Selin Sarıkaya",
    category: ["Rock"],
    hour: "19:00",
    venue: "Ghost Bar",
    slug: "selin-sarikaya",
    description: "",
  },
  {
    url: "https://st.depositphotos.com/1003293/1485/i/380/depositphotos_14854739-stock-photo-singer.jpg",
    name: "Can Sırdaş",
    category: ["Pop"],
    hour: "20:00",
    venue: "Dust Bar",
    slug: "can-sirdas",
    description: "",
  },
  {
    url: "https://st2.depositphotos.com/1004918/6227/i/380/depositphotos_62270347-stock-photo-woman-singer-recording-a-ballad.jpg",
    name: "Hazan Yıldız",
    category: ["Akustik"],
    hour: "21:00",
    venue: "Dance Bar",
    slug: "hazan-yildiz",
    description: "",
  },
  {
    url: "https://static3.depositphotos.com/1003368/160/i/380/depositphotos_1605170-stock-photo-singer-with-the-retro-microphone.jpg",
    name: "Gülçin Turan",
    category: ["Pop"],
    venue: "Grace Bar",
    hour: "19:00",
    slug: "gulcin-turan",
    description: "",
  },
];

export const commentsData = [
  {
    id: 1,
    name: "Mehmet",
    comment:
      "16.10.2016 tarihinde Piyalepaşa Hilton Otel'de yaptığımız düğün etkinliğimizde hem repertuvar hem de muhteşem performanslarından dolayı Neon Pulse çok teşekkür ederiz.",
    date: "16.05.2021",
    rating: 5,
  },
  {
    id: 2,
    name: "Selin",
    comment:
      "Umduğumuzdan fazla eğlendik. Siz de özel günlerinizde sıra dışı bir eğlence diyorsanız Neon Pulse'u seçebilirsiniz.",
    date: "16.05.2021",
    rating: 5,
  },
];

export const dataSources: Record<string, EventData[]> = {
  dugun: sahneData,
  "dogum-gunu": dogumGunuData,
  "baby-shower": babyshowerData,
  "happy-hour": happyhourData,
  "dj-performans": djData,
  "ozel-cekim": ozelcekimData,
  "canli-music": canliMuzikData,
  "beach-club": beachClubData,
  "kokteyl-bar": kokteylBarData,
  "dj-bar": djbarsData,
  "roof-top-bar": rooftopData,
  "dugun-orkestrasi": sahneData,
  "etnik-muzik": dogumGunuData,
  "rock-muzik": happyhourData,
  "jazz-muzik": babyshowerData,
  "elektronik-muzik": djData,
  istanbul: singerCardsDataIstanbul,
  ankara: singerCardsDataAnkara,
  izmir: singerCardsDataIzmir,
};
