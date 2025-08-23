// Card.tsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { FaLocationDot } from "react-icons/fa6";
import { EventData } from "@/lib/data";
import Link from "next/link";

interface MobilStageCardProps {
  item: EventData;
  type: "artist" | "venue";
}

const MobilStageCard: React.FC<MobilStageCardProps> = ({ item, type }) => {
  return (
    <div className="slider-card bg-black rounded-lg shadow-lg overflow-hidden transform w-[min(80vw,280px)] min-h-[400px] max-h-[500px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
      <div className="relative">
        <img
          src={item.url}
          alt={item.name}
          className="w-full aspect-[4/3.3] object-cover rounded-t-lg"
        />
        <Badge
          variant="secondary"
          className="absolute top-4 left-3 py-1 text-xs"
        >
          <FaLocationDot className="inline mr-1" />
          {item.badgeText || "Yeni"}
        </Badge>
      </div>
      <div className="px-4 flex flex-col flex-grow gap-2">
        <span className="text-[#9D9D9D] text-xs font-semibold mt-2">
          {item.category}
        </span>
        <div className="flex text-yellow-400 text-xs my-1">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
        <h3 className="text-base font-semibold text-[#f5f5f5] line-clamp-1">
          {item.name}
        </h3>
        <p className="text-[#9D9D9D] mt-1 text-xs line-clamp-3 flex-grow">
          {item.description}
        </p>
      </div>
      <div className="p-4 flex items-center justify-between shrink-0">
        <Link
          href={`/sanatci-detay/${item.slug}`}
          className="flex items-center text-xs text-[#FF007A] font-semibold cursor-pointer"
        >
          Rezervasyon Yap
          <ChevronRight size={16} className="text-[#FF007A] ml-1 mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default MobilStageCard;
