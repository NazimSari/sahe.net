interface EventData {
  name: string;
  url: string;
  description: string;
  category: string;
  badgeText?: string; // Opsiyonel, çünkü badgeText her zaman zorunlu değil
}

interface PlaceData {
  name: string;
  url: string;
  description: string;
  category: string;
  badgeText?: string; // Opsiyonel, çünkü badgeText her zaman zorunlu değil
}

interface SingerData {
  name: string;
  url: string;
  category: string;
}

export const categoriesSlider = [
  { path: "/dugun.jpg", name: "Düğün" },
  { path: "/ozel-cekim.jpg", name: "Özel Çekim" },
  { path: "/baby-shower.jpg", name: "Bebek Partisi" },
  { path: "/happy-hour.jpg", name: "Mutlu Saatler" },
  { path: "/dj-performans.jpg", name: "DJ Performansı" },
  { path: "/dogum-gunu.jpg", name: "Doğum Günü" },
];

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

export const sanatciDetayData = {
  description:
    "2002 yılında İstanbul’da, sazının 4 usta müzisyeni tarafından kurulan ARSER ORKESTRASI dinleyicilerini Jazz, Latin ve Napoliten klasiklerinden, unutulmaz müzikallere; Rock’n Roll eserlerden Hicaz örneklemelere uzanan eşsiz bir yolculuğa davet ediyor. Medeniyetler şehri olan İstanbul’un tarihi zenginliğinden aldıkları ilham ile beslenen grup kendisini takip eden seçkin bir dinleyici topluluğu ile yoluna devam etmektedir. Ülke çapında birçok firmanın özel organizasyonu, lansman toplantıları olmak üzere referans listesinde sayısız seçkin düğün davet ve toplantı bulundurmaktadır. Türkiye’yi ziyaret eden misafirleri tarihi ve coğrafi güzelliği ile büyüleyen cennet vatanımızın müzikal zenginliğini göstermeyi kendimize görev bilmiş ve bu bilinçte hizmet vermeyi kendimize prensip edinmişizdir.",
  language: "Türkçe",
  createdAt: "2002",
  enstrumans:
    "Akordeon, Akustik Davul, Akustik Gitar, Cajon, Asma Davul, Bağlama, Banjo, Bas Gitar, Bendir, Bongo, Buzuki, Cümbüş, Çello/Viyolonsel, Darbuka, Davul, Def, Elektro Davul, Elektro Gitar, Flüt, Gitar, Kanun, Kaşık, Kaval, Keman, Kemençe, Klarnet, Klavye, Konga, Kontrbas, Ney, Perküsyon, Saksafon, Solist, Trompet, Ud, Viyola, Viyolonsel/Çello, Vokal, Zurna",
  memberDate: "9 Şubat 2017",
  address: "İstanbul/Türkiye",
  events: "Doğum Günü, Happy Hour, Baby Shower, Düğün",
  tur: "Latin, Pop, Jazz, Rock, Dans",
  repertuvar: "",
  category: "",
  price: "3.000 TL - 5.000 TL",
};

export const festivalData = [
  {
    title: "İstanbul Yaz Rüzgarı Festivali",
    description:
      "İstanbul’un kalbinde, yerli ve uluslararası pop-rock sanatçılarının sahne aldığı üç günlük bir müzik şöleni. Genç yetenekler ve büyük isimler bir arada!",
    img: "https://muzik.iksv.org/i/content/26479_1_52imf-KV-web-277x395.jpg",
    month: "NİS",
    day: "26",
    location: "İstanbul",
  },
  {
    title: "Cappadox Müzik ve Sanat Festivali",
    description:
      "Kapadokya’nın büyülü atmosferinde, balon turları ve sanat enstalasyonlarıyla zenginleşen bir festival. Elektronik ritimler ve indie melodilerle dolu bir deneyim.",
    img: "https://www.creative-flyers.com/wp-content/uploads/2022/07/Music-Festival-Poster-Design-1.jpg",
    month: "MAY",
    day: "15",
    location: "Kapadokya, Nevşehir",
  },
  {
    title: "İzmir Uluslararası Caz Festivali",
    description:
      "Dünyaca ünlü caz sanatçıları ve yerel yeteneklerin buluştuğu bu festival, İzmir’in tarihi dokusunda unutulmaz bir müzik ziyafeti sunuyor.",
    img: "https://st4.depositphotos.com/1536490/29098/v/600/depositphotos_290988594-stock-illustration-poster-for-a-jazz-music.jpg",
    month: "TEM",
    day: "15",
    location: "Sanat Merkezi, İzmir",
  },
  {
    title: "Antalya Gençlik Festivali",
    description:
      "Genç kitleye hitap eden bu festival, Türkiye’nin popüler rap ve pop sanatçılarını bir araya getiriyor. Enerji dolu bir yaz etkinliği!",
    img: "https://st4.depositphotos.com/2793243/24265/v/380/depositphotos_242658908-stock-illustration-hip-hop-music-ready-made.jpg",
    month: "TEM",
    day: "15",
    location: "Subaşı Tesisleri, Antalya",
  },
  {
    title: "Headbangers’ Weekend",
    description:
      "Metal müzik tutkunları için epik bir hafta sonu. Uluslararası ve yerel metal gruplarının sahne aldığı bu festival, adrenalini yüksek bir deneyim vadediyor.",
    img: "https://st.depositphotos.com/1807998/1420/v/380/depositphotos_14203892-stock-illustration-rock-festival-design-template.jpg",
    month: "AĞU",
    day: "3",
    location: "Life Park, İstanbul",
  },
  {
    title: "Sónar İstanbul 2025",
    description:
      "Elektronik müziğin öncü isimlerini ve yenilikçi sesleri buluşturan Sónar, sanat ve teknolojiyle harmanlanmış bir festival. Beşiktaş’ta müzik ve yaratıcılık bir arada!",
    img: "https://st.depositphotos.com/1301934/1554/v/380/depositphotos_15546575-stock-illustration-music-concept-retro-poster-template.jpg",
    month: "AĞU",
    day: "12",
    location: "PSM, İstanbul",
  },
  {
    title: "Nefis Orman Festivali",
    description:
      "Doğayla iç içe bir festival. Yerli pop ve folk sanatçılarının akustik performanslarıyla, şehirden uzak bir müzik kaçamağı.",
    img: "https://st4.depositphotos.com/5934840/41033/v/380/depositphotos_410334678-stock-illustration-music-festival-poster-with-speaker.jpg",
    month: "TEM",
    day: "22",
    location: "Nefes Orman Sahnesi, İstanbul",
  },
];
export const festivalDetayData = {
  description:
    "İstanbul Yaz Rüzgarı Festivali, müziğin birleştirici gücünü İstanbul’un eşsiz atmosferinde buluşturan 3 günlük bir müzik şölenidir. Pop, rock ve alternatif müzik tutkunlarını bir araya getiren bu festival, yerli ve uluslararası sanatçıların enerjik performanslarıyla unutulmaz anlar vadediyor. KüçükÇiftlik Park’ın açık hava sahnesinde, yazın en güzel günlerinde müzik, dans ve eğlence bir arada!",
  date: "20-22 Haziran 2025",
  location: "KüçükÇiftlik Park, İstanbul",
  tur: "Pop, Rock, Alternatif",
  price:
    "300 TL, Kombine (3 Gün), 800 TL (Erken bilet alımlarında %20 indirim!)",
  age: "16+ (16-18 yaş arası ebeveyn izniyle katılabilir)",
  program: "",
  singers: "",
  amenities: "",
};

export const canliMuzikData: PlaceData[] = [
  {
    name: "Distortion Bar",
    url: "https://st.depositphotos.com/1001099/4130/i/380/depositphotos_41309515-stock-photo-towns.jpg",
    description:
      "Gitarın kalbine inen riff’ler ve güçlü vokallerle dolu, enerjinin tavan yaptığı rock geceleri için Distortion Bar’a bekleniyorsunuz.",
    category: "Rock & Alternative",
    badgeText: "İstanbul",
  },
  {
    name: "Blue Note Terrace",
    url: "https://st5.depositphotos.com/15601592/80828/i/380/depositphotos_808289356-stock-photo-male-musician-mixed-ethnicity-attired.jpg",
    description:
      "Şehrin en zarif caz terasında, saksofon tınıları ve samimi atmosferle gecenizi unutulmaz kılın.",
    category: "Caz & Blues",
    badgeText: "Antalya",
  },
  {
    name: "Salsa Mar",
    url: "https://st.depositphotos.com/3917667/61486/i/600/depositphotos_614866790-stock-photo-aspiration-stylish-ballroom-dancers-couple.jpg",
    description:
      "Latin ritimlerinin deniz esintisiyle buluştuğu bu mekânda dans pistinde sınır tanımayın",
    category: "Latin & Salsa",
    badgeText: "İstanbul",
  },
  {
    name: "Luna Akustik",
    url: "https://st.depositphotos.com/19430740/55858/i/380/depositphotos_558583406-stock-photo-live-music-guitars-and-strings.jpg",
    description:
      "Ay ışığı altında, akustik ezgiler ve huzurlu bir bahçe atmosferiyle kendinizi müziğin kollarına bırakın.",
    category: " Akustik & Indie",
    badgeText: "Ankara",
  },
];
export const beachClubData: PlaceData[] = [
  {
    name: "Sunset Vibes",
    url: "https://st4.depositphotos.com/18086274/38810/i/380/depositphotos_388101346-stock-photo-descanso-beach-club-santa-catalina.jpg",
    description:
      "Gün batımının büyüsünü deniz kenarında hissedin. Yumuşak lounge müzikleri, özel kokteyller ve altın kumlar eşliğinde huzurlu bir akşam geçirin.",
    category: "Chill-Out & Lounge",
    badgeText: "Çeşme/İzmir",
  },
  {
    name: "WavePoints",
    url: "https://st5.depositphotos.com/23957582/65536/i/380/depositphotos_655369504-stock-photo-view-petitenget-beach-kuta-bali.jpg",
    description:
      "Gün batımının büyüsünü deniz kenarında hissedin. Yumuşak lounge müzikleri, özel kokteyller ve altın kumlar eşliğinde huzurlu bir akşam geçirin.",
    category: "Elektronik & Deep House",
    badgeText: "Bodrum/Muğla",
  },
  {
    name: "Coral Bay",
    url: "https://static7.depositphotos.com/1043073/762/i/380/depositphotos_7628013-stock-photo-tropical-cafe.jpg",
    description:
      "Hindistan cevizi kokteylleri, reggae ritimleri ve palmiyeler altında tropikal bir tatil havası yaşayın. Coral Bay, yazın vazgeçilmezi.",
    category: "Tropikal & Reggae",
    badgeText: "Bodrum/Muğla",
  },
  {
    name: "Moonlight Pier",
    url: "https://st.depositphotos.com/15199906/56425/i/380/depositphotos_564255340-stock-photo-night-beach-with-a-view.jpg",
    description:
      "Ay ışığının denize yansıdığı iskelede, akustik performanslar ve samimi bir atmosferle unutulmaz bir yaz gecesi sizi bekliyor.",
    category: "Akustik & Chill",
    badgeText: "Çeşme/İzmir",
  },
];

export const kokteylBarData: PlaceData[] = [
  {
    name: "Shaker & Soul",
    url: "https://static8.depositphotos.com/1007248/808/i/380/depositphotos_8087626-stock-photo-glasses-with-cocktail.jpg",
    description:
      " Usta miksolojistlerin elinden çıkan yaratıcı kokteyller, modern dekor ve enerjik bir bar atmosferiyle Shaker & Soul sizi bekliyor.",
    category: "Modern Kokteyl & Mixology",
    badgeText: "İstanbul",
  },
  {
    name: "Velvet Sip",
    url: "https://static5.depositphotos.com/1001025/521/i/380/depositphotos_5219977-stock-photo-chairs-in-row-in-bar.jpg",
    description:
      "Kadife dokulu lezzetler, premium içki seçenekleri ve şık bir ortamda keyifli bir gece deneyimi.",
    category: "Lüks & Premium Kokteyl",
    badgeText: "Ankara",
  },
  {
    name: "Citrus & Chill",
    url: "https://st2.depositphotos.com/4208693/42939/i/380/depositphotos_429393606-stock-photo-young-bartender-demonstrates-the-process.jpg",
    description:
      "Tropikal meyveler ve taze aromalarla hazırlanmış ferah kokteyller, sahil esintisiyle buluşuyor.",
    category: "Tropikal & Ferah Kokteyl",
    badgeText: "İzmir",
  },
  {
    name: "Midnight Mule",
    url: "https://static8.depositphotos.com/1018611/963/i/380/depositphotos_9630627-stock-photo-cocktail-glass-with-drink-in.jpg",
    description:
      "Geceyi efsaneleşmiş klasik kokteyllerle taçlandırmak isteyenler için sıcak ve samimi bir bar ortamı.",
    category: "Klasik & İkonik Kokteyl",
    badgeText: "Antalya",
  },
];
export const djbarsData: PlaceData[] = [
  {
    name: "Neon Pulse",
    url: "https://st.depositphotos.com/2022413/4741/i/380/depositphotos_47413235-stock-photo-needle-playing-red-vinyl.jpg",
    description:
      "Neon ışıkların altında, en iyi DJ’lerin canlı performanslarıyla yüksek enerjili dans geceleri sizi bekliyor. VIP alan ayrıcalığıyla farkı yaşayın.",
    category: "EDM & House",
    badgeText: "İstanbul",
  },
  {
    name: "Echo Lounge",
    url: "https://st3.depositphotos.com/2853475/13343/i/380/depositphotos_133430502-stock-photo-friends-dancing-in-lounge-bar.jpg",
    description:
      "Minimalist dekoru ve güçlü ses sistemiyle Echo Lounge, underground DJ setleriyle elektronik müzik tutkunlarının adresi.",
    category: "Techno & Deep House",
    badgeText: "İstanbul",
  },
  {
    name: "Skyline Beats",
    url: "https://st.depositphotos.com/19415244/53093/i/380/depositphotos_530935970-stock-photo-mixer-headphones-nightclub.jpg",
    description:
      "Şehrin en yüksek noktasında, VIP bölümlerde ünlü DJ’ler eşliğinde trap ve hip-hop ritimleriyle unutulmaz geceler.",
    category: "Trap & Hip-Hop",
    badgeText: "Bursa",
  },
  {
    name: "Bass Horizon",
    url: "https://static8.depositphotos.com/1055352/844/i/380/depositphotos_8444087-stock-photo-dj-playing-vinyl.jpg",
    description:
      "Güçlü baslar ve enerjik setlerle dolu, dans pistinin nabzını tutan Bass Horizon’da VIP ayrıcalığını yaşayın.",
    category: "Dubstep & Bass Music",
    badgeText: "Eskişehir",
  },
];

export const rooftopData: PlaceData[] = [
  {
    name: "Sky Lounge 360",
    url: "https://st4.depositphotos.com/2853475/24695/i/380/depositphotos_246954930-stock-photo-young-happy-people-having-barbecue.jpg",
    description:
      "Şehrin panoramik manzarası eşliğinde, rahatlatıcı lounge müzikleri ve şık kokteyllerle keyif dolu anlar.",
    category: "Chill-Out & Lounge",
    badgeText: "İstanbul",
  },
  {
    name: "Altitude Beats",
    url: "https://st3.depositphotos.com/32520976/35552/i/380/depositphotos_355525318-stock-photo-party-crowd-people-having-fun.jpg",
    description:
      "Yükseklerde elektronik ritimlerin hakim olduğu, yıldızların altında dans geceleri için ideal mekan.",
    category: "Deep House & Chillwave",
    badgeText: "İzmir",
  },
  {
    name: "Cloud Nine Bar",
    url: "https://st2.depositphotos.com/1000998/12437/v/600/depositphotos_124377928-stock-video-sun-loungers-and-plants-next.jpg",
    description:
      "Bulutların üstünde, zarif caz ve soul tınılarıyla şık ve samimi bir atmosferde buluşun.",
    category: "Jazz & Soul",
    badgeText: "Antalya",
  },
  {
    name: "Sunset Horizon",
    url: "https://st5.depositphotos.com/23957582/65084/i/450/depositphotos_650845294-stock-photo-aerial-view-patong-city-center.jpg",
    description:
      "Gün batımını izlerken akustik performanslarla ruhunuzu besleyin, şehir ışıkları eşliğinde unutulmaz anlar yaşayın.",
    category: "Akustik & Indie",
    badgeText: "Muğla",
  },
];

export const mekanDetayData = {
  description:
    "Ritim Bar, İstanbul’un gece hayatının nabzını tutan, canlı müzik ve DJ partilerinin vazgeçilmez adresi! Beyoğlu’nun kalbinde yer alan bu enerjik mekan, rock’tan elektroniğe, indie’den popa geniş bir müzik yelpazesi sunuyor. Sıcak bir pub atmosferi, samimi sahne performansları ve dans pistinde bitmeyen eğlenceyle, Ritim Bar müzikseverlerin buluşma noktası. Haftanın her günü farklı bir vibe, her gece yeni bir hikaye!",
  address: "İstanbul/Türkiye",
  tur: "Pop, Rock, Alternatif",
  category: "Canlı Müzik",
  price: "3.000 TL - 5.000 TL",
  age: "16+ (16-18 yas arası ebeveyn izniyle katılabilir)",
  program: "",
  foodDrink: "",
  phone: "0535 000 00 00",
  singers: "",
  amenities: "",
  worksHours: "14:00-02:00",
  reservation: "0535 000 00 00",
};

export const banners = [
  {
    id: 1,
    name: "Neşe Karaböcek",
    genres: "Pop, Dance",
    hour: "19:00",
    venue: "Babylon",
    location: "İstanbul",
    image: "/dogum-gunu.jpg",
  },
  {
    id: 2,
    name: "Berkay Aydınlı",
    genres: "Rock, Dance",
    hour: "20:00",
    venue: "Vakkoroma Cafe",
    location: "İstanbul",
    image: "/dj-performans.jpg",
  },
  {
    id: 3,
    name: "Tan Yılmaz",
    genres: "Sanat Müziği",
    hour: "21:30",
    venue: "Black Box",
    location: "Ankara",
    image: "/canli-music.jpg",
  },
  {
    id: 4,
    name: "DJ Yelken",
    genres: "House, Club",
    hour: "22:00",
    venue: "Cath Restaurant",
    location: "Antalya",
    image: "/dugun-orkestra.jpg",
  },
];

export const singerCardsDataIstanbul = [
  {
    url: "https://st2.depositphotos.com/6571396/9693/i/380/depositphotos_96932416-stock-photo-beautiful-girl-singing-into-microphone.jpg",
    name: " Şermin Yüce",
    category: "Pop",
  },
  {
    url: "https://st3.depositphotos.com/9880800/17889/i/380/depositphotos_178892154-stock-photo-sensual-young-female-singer-performing.jpg",
    name: "Deniz Derman",
    category: "Türkü",
  },
  {
    url: "https://st4.depositphotos.com/12985790/25168/i/380/depositphotos_251683390-stock-photo-close-good-looking-musician-singing.jpg",
    name: "Berkut",
    category: "Rock",
  },
  {
    url: "https://st3.depositphotos.com/1001951/13987/i/380/depositphotos_139879404-stock-photo-two-professional-guitarists-performing-in.jpg",
    name: "Grup Tarçın",
    category: "Pop",
  },
];
export const singerCardsDataAnkara = [
  {
    url: "https://st3.depositphotos.com/10638998/15079/i/380/depositphotos_150799476-stock-photo-rock-band-on-stage.jpg",
    name: "Melisa Güven",
    category: "Pop",
  },
  {
    url: "https://st.depositphotos.com/1010710/3384/i/380/depositphotos_33840331-stock-photo-pop-singer.jpg",
    name: "Antonio Morano",
    category: "Akustik",
  },
  {
    url: "https://st2.depositphotos.com/3662505/5297/i/380/depositphotos_52979941-stock-photo-recording-studio.jpg",
    name: "Sinem Kaya",
    category: "Blues",
  },
  {
    url: "https://st2.depositphotos.com/1284069/6417/i/380/depositphotos_64170833-stock-photo-beautiful-african-woman-singing-with.jpg",
    name: "Angelina Jolie",
    category: "Rock",
  },
];

export const singerCardsDataIzmir = [
  {
    url: "https://st5.depositphotos.com/16122460/72457/i/380/depositphotos_724574592-stock-photo-beautiful-young-woman-stylish-dress.jpg",
    name: "Selin Sarıkaya",
    category: "Rock",
  },
  {
    url: "https://st.depositphotos.com/1003293/1485/i/380/depositphotos_14854739-stock-photo-singer.jpg",
    name: "Can Sırdaş",
    category: "Pop",
  },
  {
    url: "https://st2.depositphotos.com/1004918/6227/i/380/depositphotos_62270347-stock-photo-woman-singer-recording-a-ballad.jpg",
    name: "Hazan Yıldız",
    category: "Akustik",
  },
  {
    url: "https://static3.depositphotos.com/1003368/160/i/380/depositphotos_1605170-stock-photo-singer-with-the-retro-microphone.jpg",
    name: "Gülçin Turan",
    category: "Pop",
  },
];
