// Card.tsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

interface EventData {
  name: string;
  url: string;
  description: string;
  category: string;
  badgeText?: string;
}

interface CardProps {
  item: EventData;
}

const MobilSwipeCard: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="slider-card bg-black rounded-lg shadow-lg overflow-hidden transform h-[450px] w-[60vw] max-w-[250px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative rounded-t-lg">
        <img
          src={item.url}
          alt={item.name}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />
        <Badge variant="secondary" className="absolute top-8 left-3 py-1">
          <FaLocationDot />
          {item.badgeText || "Yeni"}
        </Badge>
      </div>
      <div className="p-3">
        <span className="inline-block text-[#9D9D9D] text-xs font-semibold">
          {item.category}
        </span>
        <div className="flex text-yellow-400 text-xs my-1">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
        <h3 className="text-base font-semibold text-[#f5f5f5]">{item.name}</h3>
        <p className="text-[#9D9D9D] mt-1 text-xs line-clamp-2">
          {item.description}
        </p>
      </div>
      <div className="p-3 flex items-center justify-between">
        <Link
          href="/sanatci-detay"
          className="flex items-center text-xs text-[#FF007A] font-semibold cursor-pointer"
        >
          Rezervasyon Yap
          <ChevronRight size={16} className="text-[#FF007A] mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default MobilSwipeCard;
