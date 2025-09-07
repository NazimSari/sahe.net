"use client";
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
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { useState } from "react";
import DemoModal from "../Modals/DemoModal";

export default function DetailsPriceCardArtist({ sanatciDetayData }: any) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleShowResults = () => {
    setIsModalOpen(true); // Butona tıklanınca modal açılır
  };
  return (
    <div className="w-full lg:w-1/4 mt-2 p-3">
      <div className="flex flex-col gap-8">
        <div className="text-[#f5f5f5] flex justify-between border border-[#f5f5f5] p-3 rounded-md">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <p className="text-[#f5f5f5] text-lg font-semibold">
                {sanatciDetayData.price}
              </p>
              <p className="text-[#f5f5f5] text-sm  text-end">
                Etkinlik Başına
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#f5f5f5] flex flex-col items-center border border-[#f5f5f5] p-3 rounded-md">
          <div className="flex flex-col py-5 justify-center gap-5">
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
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleShowResults}
            className="bg-[#FF007A] font-semibold py-3 text-[#f5f5f5] rounded-md cursor-pointer hover:bg-[#f5f5f5] hover:text-[#FF007A]  transition duration-300 ease-in-out"
          >
            Ücretsiz Teklif Al
          </button>
          <button
            onClick={handleShowResults}
            className="flex items-center justify-center py-3 text-base text-[#160317] font-semibold border bg-[#f5f5f5] hover:bg-[#160317] hover:text-[#f5f5f5] border-[#f5f5f5] rounded-md transition duration-300 ease-in-out cursor-pointer"
          >
            <Phone className="mr-1" size={20} /> Sanatçıya Ulaşın
          </button>
          <button
            onClick={handleShowResults}
            className="bg-transparent font-semibold flex items-center justify-center py-3 text-[#FF007A] border border-[#FF007A] rounded-md hover:bg-[#FF007A] hover:text-[#f5f5f5] transition duration-300 ease-in-out cursor-pointer"
          >
            <span className="mr-2">
              <Heart />
            </span>{" "}
            Favorilere Ekle
          </button>
        </div>
        <div className="flex gap-2 lg:gap-4 items-center mt-2 justify-evenly">
          <FaFacebookSquare size={32} color="#f5f5f5" />
          <FaSquareInstagram size={32} color="#f5f5f5" />
          <FaLinkedin size={32} color="#f5f5f5" />
          <AiFillTikTok size={32} color="#f5f5f5" />
          <IoLogoYoutube size={32} color="#f5f5f5" />
        </div>
      </div>
      <DemoModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        closeButtonText="Tamam"
      />
    </div>
  );
}
