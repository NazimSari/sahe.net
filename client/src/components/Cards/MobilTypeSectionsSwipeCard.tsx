"use client";

import Image from "next/image";

interface CardProps {
  path: string;
  name: string;
}

const MobilTypeSectionsSwipeCard: React.FC<CardProps> = ({ path, name }) => {
  return (
    <div className="relative w-[60vw] max-w-[250px] aspect-square overflow-hidden bg-white flex justify-center items-center rounded-lg">
      <Image src={path} alt={name} fill style={{ objectFit: "cover" }} />
      <div className="absolute inset-0 bg-black opacity-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 bg-black/70 h-16 w-full">
        {" "}
        <span className="z-50 text-white flex items-center h-full justify-center font-semibold">
          {name}
        </span>
      </div>
    </div>
  );
};

export default MobilTypeSectionsSwipeCard;
