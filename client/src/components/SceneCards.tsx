import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { ChevronRight, Ghost } from "lucide-react";

const sahneData = [
  {
    name: "Kamil Aydınlı",
    url: "/kamil.jpg",
    description:
      "Pop ve funk’ın enerjik birleşimi! Düğün ve partiler için mükemmel.",
    categroy: "Rock",
  },
  {
    name: "Micheal Tartum",
    url: "/micheal.jpg",
    description:
      "Elektronik ritimlerle dans pistini ateşler. Özel etkinliklerin aranan ismi!",
    categroy: "Jazz",
  },
  {
    name: "Group Brooke",
    url: "/brooklin.jpg",
    description:
      "Sert ritimler, güçlü sahne! Festivaller ve partiler için hazır.",
    categroy: "Rock",
  },
  {
    name: "Group Nefes",
    url: "/nefes.jpg",
    description: "Zarif klasik müzikle nişan ve davetlere sınıf katar",
    categroy: "Enstrümantal",
  },
];

export default function SceneCards() {
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
        {sahneData.map((item, index) => (
          <div
            key={index}
            className="bg-black rounded-lg shadow-lg  overflow-hidden transform h-[600px]  transition-transform duration-300"
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-[350px] object-cover"
            />
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
              <span className="flex items-center ml-3 text-sm text-[#FF007A] font-semibold cursor-pointer">
                {" "}
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
