import React from "react";
import { Star } from "lucide-react";

export default function SuperArtistBadge() {
  return (
    <div className="">
      <div className="flex items-center justify-center bg-yellow-400 text-black font-semibold text-xs rounded-md px-2 py-1 shadow-md">
        <Star className="w-3 h-3 mr-1 fill-current" />
        Sahnenin Yıldızı
      </div>
    </div>
  );
}
