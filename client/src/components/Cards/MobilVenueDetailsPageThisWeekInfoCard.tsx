// VenueDetailsPageThisWeekInfoCard.tsx
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

interface CardProps {
  name: string;
  day: string;
  time: string;
  img: string;
}

const MobilVenueDetailsPageThisWeekInfoCard: React.FC<CardProps> = ({
  name,
  day,
  time,
  img,
}) => {
  return (
    <div className="flex flex-col gap-2 relative w-full bg-white overflow-hidden rounded-2xl p-3">
      <div className="w-full h-[200px]relative">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold underline decoration-[#FF007A] decoration-2 md:text-xl text-base">
          {name}
        </h4>
        <p className="text-sm">{day}</p>
        <p className="text-sm">{time}</p>
        <div className="flex gap-2 items-center mt-2">
          <FaFacebookSquare size={20} color="#FF007A" />
          <FaSquareInstagram size={20} color="#FF007A" />
          <FaLinkedin size={20} color="#FF007A" />
          <AiFillTikTok size={20} color="#FF007A" />
          <IoLogoYoutube size={20} color="#FF007A" />
        </div>
      </div>
    </div>
  );
};

export default MobilVenueDetailsPageThisWeekInfoCard;
