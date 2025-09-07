"use client";

import { CircleDot, Heart } from "lucide-react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { useState } from "react";
import DemoModal from "../Modals/DemoModal";

export default function DetailsPriceCardFestival() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleShowResults = () => {
    setIsModalOpen(true); // Butona tıklanınca modal açılır
  };
  return (
    <div className="w-full lg:w-1/4 mt-2 p-3">
      <div className="flex flex-col gap-8">
        <div className="text-[#f5f5f5] flex justify-between border border-[#f5f5f5] p-3 rounded-md">
          <p>300 TL - 1500 TL </p>
          <p>1 Kişilik</p>
        </div>
        <div className="text-[#f5f5f5] flex flex-col items-center border border-[#f5f5f5] p-3 rounded-md">
          <div className="flex flex-col py-5 justify-center gap-5">
            <p className="flex items-center gap-2">
              <span>
                {" "}
                <CircleDot color="#FF007A" />
              </span>
              Günlük Bilet: 300 TL{" "}
            </p>
            <p className="flex items-center gap-2">
              <span>
                {" "}
                <CircleDot color="#FF007A" />
              </span>
              Kombine Bilet: 800 TL{" "}
            </p>
            <p className="flex items-center gap-2">
              <span>
                {" "}
                <CircleDot color="#FF007A" />
              </span>
              VIP Deneyimi: 1500 TL{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleShowResults}
            className="bg-[#FF007A] font-semibold py-3 text-[#f5f5f5] rounded-md cursor-pointer hover:bg-[#f5f5f5] hover:text-[#FF007A]  transition duration-300 ease-in-out"
          >
            Hemen Biletini Al
          </button>
          <button
            onClick={handleShowResults}
            className="py-3 text-[#160317] font-semibold border bg-[#f5f5f5] hover:bg-[#160317] hover:text-[#f5f5f5] border-[#f5f5f5] rounded-md transition duration-300 ease-in-out cursor-pointer"
          >
            Hemen Üye Ol
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
        title="Demo Uyarısı"
        closeButtonText="Tamam"
      />
    </div>
  );
}
