import {
  ShieldCheck,
  CreditCard,
  FilePen,
  BanknoteX,
  Phone,
  Heart,
} from "lucide-react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

export default function DetailsPriceCardArtist({ sanatciDetayData }: any) {
  return (
    <div className="w-full lg:w-1/3 mt-4 p-3">
      <Card className="w-full mx-auto p-6">
        <Card className="bg-[#160317] flex justify-center">
          <CardContent className="w-full">
            <div className="flex justify-between items-center">
              <p className="text-[#f5f5f5] text-lg font-semibold">
                {sanatciDetayData.price}
              </p>
              <p className="text-[#f5f5f5] text-sm  text-end">
                Etkinlik Başına
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#160317] mb-4">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-6">
              <p className="text-[#f5f5f5] flex gap-5 items-center">
                <ShieldCheck size={40} />
                Güvenli Ödeme Döngüsü
              </p>
              <p className="text-[#f5f5f5] flex gap-5 items-center">
                <CreditCard size={40} />
                12 Ay Taksitlendirme
              </p>
              <p className="text-[#f5f5f5] flex gap-5 items-center">
                <FilePen size={40} />
                14 Gün Cayma Hakkı
              </p>
              <p className="text-[#f5f5f5] flex gap-5 items-center">
                <BanknoteX size={40} />
                Ek Hizmet Bedeli Yok
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4">
          <Button className="w-full text-[#f5f5f5] bg-[#FF007A] hover:bg-[#160317]">
            Ücretsiz Teklif Al
          </Button>
          <Button className="w-full text-[#f5f5f5] bg-[#160317]">
            <Phone className="mr-2" /> Sanatçıya Ulaşın
          </Button>
          <Button className="w-full text-[#FF007A] bg-transparent border border-[#FF007A] hover:bg-[#160317]">
            <Heart className="mr-2" /> Favorilere Ekle
          </Button>
        </div>
        <div className="flex gap-4 mt-6 justify-evenly">
          <FaFacebookSquare size={32} />
          <FaSquareInstagram size={32} />
          <FaSquareXTwitter size={32} />
          <FaLinkedin size={32} />
          <AiFillTikTok size={32} />
          <IoLogoYoutube size={32} />
        </div>
      </Card>
    </div>
  );
}
