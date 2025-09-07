import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MenifestModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="underline decoration-[#FF007A] decoration-2 cursor-pointer text-[#f5f5f5]">
          Sahne.net Manifestosu
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#FF007A]">
            Sahne.net Manifestosu
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4  text-gray-800">
          <p className="font-semibold">
            Sanatın yalnızca belli salonlarda, belli kişiler için var olduğuna
            inananlara sesleniyoruz: Artık sahne sizin.
          </p>
          <p>
            Sahne.net, sanatçı ile sanatsever arasındaki tüm duvarları yıkmak,
            sahneyi herkesin ulaşabileceği ortak bir meydan haline getirmek için
            doğdu. Bizim için sahne, yalnızca bir platform değil; sanatın
            özgürleştiği, sanatçının sesini bulduğu, seyircinin sanatla
            buluştuğu sınırsız bir evrendir.
          </p>
          <p>
            Türkiye’de ilk kez, sanatçıların emeğini görünür kılan ve
            sanatseverleri aracısız bir şekilde buluşturan dijital sahneyi
            kurmanın gururunu yaşıyoruz. Burada sanat, yalnızca “izlenen” bir
            şey değildir; aynı zamanda “paylaşılan”, “dokunulan” ve “birlikte
            yaşanılan” bir deneyimdir.
          </p>
          <p>
            Bizim işimiz ürün satmak değil, an yaratmak. İyi sanatçının emeğini
            korurken, sanatseverin hayallerine en kolay ve en hızlı yoldan
            erişmesini sağlıyoruz. Aracısız, engelsiz bir kültür-sanat dünyasını
            sahne.net çatısı altında mümkün kılıyoruz.
          </p>
          <p>
            Bugün yüzlerce müzisyeni ağırlıyoruz. Yarın tiyatro toplulukları,
            dansçılar, ressamlar, jonglörler, sihirbazlar, meddahlar,
            konuşmacılar, fotoğrafçılar, kuklacılar, karikatüristler ve daha
            niceleri bu sahnenin parçası olacak. Çünkü bizim sahnemiz bir
            kişiye, bir kuruma, bir şehre değil; herkese, hepimize ait.
          </p>
          <p>
            Zor bir yol seçtik. Ama biliyoruz ki sanat olmadan bir toplum
            eksiktir. Sanat karanlığı aydınlatır, biz de ışığımızı buradan
            yakıyoruz. Hedefimiz, sahne.net’in yalnızca bir platform değil; bir
            dönüşüm hareketi olarak anılması. Bugün Türkiye’de, yarın dünyada…
          </p>
          <p className="font-semibold">
            Sanatın geleceği için sahnedeyiz. Şimdi söz, ses ve ışık sizde.
          </p>
          <p className="font-bold text-center">
            Sahne.net – Herkes için sahne.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
