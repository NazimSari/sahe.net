import React from "react";

interface HangoutData {
  img: string;
  title: string;
  isLarge?: boolean;
}

interface HangoutCardsProps {
  hangout: HangoutData;
}

const HangoutCards: React.FC<HangoutCardsProps> = ({ hangout }) => {
  return (
    <div
      className={`relative ${
        hangout.isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <img
        src={hangout.img}
        alt={hangout.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/4 z-10 flex flex-col items-center bg-black/70" />
      <div className="absolute bottom-0 left-4 right-0 h-1/6 z-10 flex flex-col">
        <h4 className="text-[#FF007A] sm:text-2xl md:text-lg font-semibold">
          {hangout.title}
        </h4>
      </div>
    </div>
  );
};

export default HangoutCards;
