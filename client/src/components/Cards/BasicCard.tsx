"use client";

import { FaLocationDot, FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import SuperArtistBadge from "../SuperArtistBadge";
import { LoaderLink } from "../Loader/LoaderLink";

interface CardProps {
  item: {
    url: string;
    name: string;
    badgeText?: string;
    category: string[];
    description: string;
    slug: string;
    musicType?: string;
    isSuperArtist?: boolean; // Yeni prop
  };
  index: number;
  type: "artist" | "venue";
}

const BasicCard = ({ item, index, type }: CardProps) => {
  const router = useRouter();
  const detailPath =
    type === "artist"
      ? `/sanatci-detay/${item.slug}`
      : `/mekan-detay/${item.slug}`;

  return (
    <div
      key={index}
      className="bg-black rounded-lg shadow-lg overflow-hidden transform h-[600px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative">
        <img
          src={item.url}
          alt={item.name}
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute top-4 left-3 right-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className=" py-1 text-xs">
              <FaLocationDot className="inline mr-1" />
              {item.badgeText || "Yeni"}
            </Badge>
            {item.isSuperArtist && <SuperArtistBadge />}
          </div>
        </div>
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
        <h3 className="text-lg font-semibold text-[#f5f5f5]">{item.name}</h3>
        <p className="text-[#9D9D9D] mt-2 line-clamp-2">{item.description}</p>
      </div>
      <div className="p-4 flex items-center justify-between">
        <LoaderLink
          href={detailPath}
          className="w-fit cursor-pointer px-4 py-2 rounded-md text-sm font-medium bg-gray-100"
        >
          {type === "artist" ? "Sanatçıyı İncele" : "Mekanı İncele"}
        </LoaderLink>
        <LoaderLink
          href={detailPath}
          className="flex items-center  text-sm text-[#FF007A] font-semibold cursor-pointer"
        >
          Rezervasyon Yap
          <ChevronRight size={16} className="text-[#FF007A] mt-0.5" />
        </LoaderLink>
      </div>
    </div>
  );
};

export default BasicCard;
