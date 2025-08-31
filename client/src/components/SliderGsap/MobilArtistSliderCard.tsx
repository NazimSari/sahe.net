"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  path: string;
  name: string;
  category: string;
}

export default function MobilArtistSliderCard({
  path,
  name,
  category,
}: CardProps) {
  return (
    <>
      <div className="w-[60vw] max-w-[250px] aspect-auto overflow-hidden">
        {/* Görsel alanı */}
        <div className="relative w-full h-[350px] group rounded-lg overflow-hidden">
          <Image
            src={path}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-300"
          />

          {/* Buton */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Link
              href={`/artist/${category}`}
              className="bg-white font-semibold text-sm px-3 py-2 rounded-lg flex items-center gap-1 opacity-0 translate-y-2  hover:opacity-75"
            >
              <span>İncele</span>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 bg-black/70 h-16 w-full">
            <div className="z-50 text-white flex flex-col items-center h-full justify-center font-semibold">
              <p className="text-[#f5f5f5] text-xs">{category}</p>
              <h3 className="text-sm font-semibold mt-2 text-[#f5f5f5]">
                {name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
