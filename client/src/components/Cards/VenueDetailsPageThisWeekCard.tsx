import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { mekanDetaySayfasiHaftalikProgramData } from "@/lib/data";

const data = mekanDetaySayfasiHaftalikProgramData;

const SocialIcons = () => (
  <div className="flex gap-2 items-center mt-2">
    <FaFacebookSquare size={20} color="#FF007A" />
    <FaSquareInstagram size={20} color="#FF007A" />
    <FaLinkedin size={20} color="#FF007A" />
    <AiFillTikTok size={20} color="#FF007A" />
    <IoLogoYoutube size={20} color="#FF007A" />
  </div>
);

export default function VenueDetailsPageThisWeekCard() {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item, index) => (
        <div key={index} className="p-2 bg-gray-100 rounded-lg">
          <div className="flex gap-2">
            <div className="w-30 h-30 aspect-[1/1] overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold underline decoration-[#FF007A] decoration-2">
                {item.name}
              </h4>
              <p className="text-sm">{item.day}</p>
              <p className="text-sm">{item.time}</p>
              <SocialIcons />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
