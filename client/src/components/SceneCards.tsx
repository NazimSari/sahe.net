import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { FaLocationDot } from "react-icons/fa6";

const sahneData = [
  {
    name: "Kamil Aydınlı",
    url: "/kamil.jpg",
    description:
      "Pop ve funk’ın enerjik birleşimi! Düğün ve partiler için mükemmel.",
    categroy: "Rock",
    badgeText: "İstanbul",
  },
  {
    name: "Micheal Tartum",
    url: "/micheal.jpg",
    description:
      "Elektronik ritimlerle dans pistini ateşler. Özel etkinliklerin aranan ismi!",
    categroy: "Jazz",
    badgeText: "Ankara",
  },
  {
    name: "Group Brooke",
    url: "/brooklin.jpg",
    description:
      "Sert ritimler, güçlü sahne! Festivaller ve partiler için hazır.",
    categroy: "Rock",
    badgeText: "Antalya",
  },
  {
    name: "Group Nefes",
    url: "/nefes.jpg",
    description: "Zarif klasik müzikle nişan ve davetlere sınıf katar.",
    categroy: "Enstrümantal",
    badgeText: "İzmir",
  },
];

export default function SceneCards() {
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {sahneData.map((item, index) => (
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
                {item.categroy}
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
              <p className="text-[#9D9D9D] mt-2">{item.description}</p>
            </div>
            <div className="p-4 flex items-center justify-between">
              <Button variant="outline" className="w-fit cursor-pointer">
                Hemen Dinle
              </Button>
              <span className="flex items-center md:ml-3 text-sm text-[#FF007A] font-semibold cursor-pointer">
                Rezervasyon Yap
                <ChevronRight size={20} className="text-[#FF007A] mt-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
