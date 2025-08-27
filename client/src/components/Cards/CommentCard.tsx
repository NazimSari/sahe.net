// components/CommentCard.tsx
"use client";

import { FaStar, FaUserCircle } from "react-icons/fa";

type CommentCardProps = {
  avatar?: string; // profil fotoğrafı
  name: string; // isim
  date: string; // yorum tarihi
  comment: string; // yorum metni
};

export default function CommentCard({
  avatar,
  name,
  date,
  comment,
}: CommentCardProps) {
  return (
    <div className="flex gap-3 p-3 border-b border-gray-700 last:border-none">
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-200 overflow-hidden">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <FaUserCircle className="h-16 w-16 md:h-20 md:w-20 text-gray-300" />
        )}
      </div>

      <div className="w-2/3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-100">{name}</span>
          <span className="flex text-[#FF007A] items-center text-xs md:text-sm">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <FaStar key={i} />
              ))}{" "}
          </span>
        </div>
        <p className="text-[#f5f5f5] mt-2 text-sm md:text-base">{comment}</p>
        <p className="text-xs text-gray-400 mt-2">{date}</p>
      </div>
    </div>
  );
}
