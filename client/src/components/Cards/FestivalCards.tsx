import Link from "next/link";
import React from "react";

interface FestivalData {
  img: string;
  title: string;
  description: string;
  day: string;
  month: string;
  slug: string;
}

interface FestivalCardsProps {
  festival: FestivalData;
}

const FestivalCards: React.FC<FestivalCardsProps> = ({ festival }) => {
  return (
    <Link
      href={`/festival-detay/${festival.slug}`}
      className="flex flex-col gap-2 bg-[#040519] overflow-hidden rounded-tl-2xl rounded-tr-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative w-full h-full">
        <img
          src={festival.img}
          alt={festival.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-5">
        <div className="flex gap-5 items-center">
          <div className="h-16 w-16 bg-[#FF007A] rounded-lg flex flex-col items-center justify-center font-semibold text-sm text-[#f5f5f5]">
            <p>{festival.day}</p>
            <p>{festival.month}</p>
          </div>
          <div>
            <h4 className="text-[#f5f5f5] text-lg font-semibold">
              {festival.title}
            </h4>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-[#f5f5f5] text-sm">{festival.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FestivalCards;
