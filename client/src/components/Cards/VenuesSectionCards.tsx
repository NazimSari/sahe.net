import React from "react";
import { VenueData } from "@/lib/data";

interface VenueDataProps {
  venue: VenueData;
}

const VenuesSectionCards: React.FC<VenueDataProps> = ({ venue }) => {
  return (
    <div
      className={`relative ${
        venue.isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <img
        src={venue.img}
        alt={venue.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
      <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
        <h4 className="text-[#FF007A] sm:text-2xl md:text-lg font-semibold">
          {venue.title}
        </h4>
      </div>
    </div>
  );
};

export default VenuesSectionCards;
