"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface EventData {
  name: string;
  url: string;
  description: string;
  category: string;
  badgeText?: string;
}

interface SceneCardsProps {
  data: EventData[];
}

const SceneCards: React.FC<SceneCardsProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-black rounded-lg shadow-lg overflow-hidden transform h-[600px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative">
              {/* Görsel ve badge için relative bir kapsayıcı */}
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-[350px] object-cover"
              />
              <Badge variant="secondary" className="absolute top-5 left-4 py-1">
                <FaLocationDot />
                {item.badgeText || "Yeni"}{" "}
              </Badge>
            </div>
            <div className="p-4">
              <span className="inline-block text-[#9D9D9D] text-sm font-semibold">
                {item.category}
              </span>
              <div className="flex text-yellow-400 text-sm my-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <h3 className="text-lg font-semibold text-[#f5f5f5]">
                {item.name}
              </h3>
              <p className="text-[#9D9D9D] mt-2 line-clamp-2">
                {item.description}
              </p>
            </div>
            <div className="p-4 flex items-center justify-between">
              <Button
                variant="outline"
                className="w-fit cursor-pointer"
                onClick={() => router.push("/sanatci-detay")}
              >
                Hemen Dinle
              </Button>
              <Link
                href="/sanatci-detay"
                className="flex items-center md:ml-3 text-sm text-[#FF007A] font-semibold cursor-pointer"
              >
                Rezervasyon Yap
                <ChevronRight size={20} className="text-[#FF007A] mt-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SceneCards;
