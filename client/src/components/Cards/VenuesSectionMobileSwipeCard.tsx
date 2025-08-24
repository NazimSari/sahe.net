import React from "react";

interface VenueData {
  img: string;
  title: string;
  isLarge?: boolean;
}

interface MobileVenueSliderCardProps {
  venue: VenueData;
  index: number;
}

const VenuesSectionMobileSwipeCard: React.FC<MobileVenueSliderCardProps> = ({
  venue,
  index,
}) => {
  return (
    <div key={index} className="slider-card flex-shrink-0 w-[min(85vw,320px)]">
      <div className="relative h-[300px] bg-[#040519] rounded-tl-2xl rounded-tr-2xl shadow-md">
        <img
          src={venue.img}
          alt={venue.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
        <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
          <h4 className="text-[#FF007A] text-lg font-semibold">
            {venue.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VenuesSectionMobileSwipeCard;
