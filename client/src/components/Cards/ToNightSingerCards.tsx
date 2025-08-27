import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface SingerData {
  url: string;
  name: string;
  category: string[];
  slug: string;
  venue: string;
  hour: string;
  description: string;
}

interface SingerCardsProps {
  data: SingerData[];
}

const ToNightSingerCards = ({ data }: SingerCardsProps) => {
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    overlayRefs.current.forEach((overlay, index) => {
      if (overlay) {
        // Başlangıçta overlay opacity ayarı
        gsap.set(overlay, { opacity: 0.3 });

        // Mouse enter (hover) animasyonu
        const handleMouseEnter = () => {
          gsap.to(overlay, {
            opacity: 0.6,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        // Mouse leave animasyonu
        const handleMouseLeave = () => {
          gsap.to(overlay, {
            opacity: 0.3,
            duration: 0.3,
            ease: "power2.in",
          });
        };

        // Event listener'ları ekle
        const container = overlay.parentElement;
        if (container) {
          container.addEventListener("mouseenter", handleMouseEnter);
          container.addEventListener("mouseleave", handleMouseLeave);
        }

        // Cleanup: Event listener'ları kaldır
        return () => {
          if (container) {
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
          }
        };
      }
    });
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-4">
      {data.map((singer, index) => (
        <Link
          href={`/sanatci-detay/${singer.slug}`}
          key={index}
          className="flex flex-col"
        >
          <div className="2xl:w-90 2xl:h-110 xl:w-70 xl:h-90 md:w-61 md:h-80 w-full relative overflow-hidden">
            <img
              src={singer.url}
              alt={`resim-${index + 1}`}
              className="h-full w-full object-cover rounded-md"
            />
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 bg-black opacity-30 pointer-events-none"
            ></div>
            <span className="absolute top-3 left-3 text-[#160317] px-3 py-1 bg-[#f5f5f5] rounded-lg text-sm font-semibold z-10">
              {singer.category}
            </span>
            <div className="absolute bottom-3 left-2 text-[#f5f5f5] font-semibold text-center z-10 whitespace-nowrap">
              <div className="text-[#f5f5f5] text-sm font-semibold">
                <p className="flex items-center gap-2">
                  <MapPin size={16} color="#FF007A" strokeWidth={3} />
                  {singer.venue}
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} color="#FF007A" strokeWidth={3} />
                  <span>{singer.hour}</span>
                </p>
              </div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-[#f5f5f5] text-3xl font-semibold">
                {singer.name}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ToNightSingerCards;
