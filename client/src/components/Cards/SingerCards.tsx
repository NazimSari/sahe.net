import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SingerData {
  url: string;
  name: string;
  category: string;
}

interface SingerCardsProps {
  data: SingerData[];
}

const SingerCards = ({ data }: SingerCardsProps) => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    buttonRefs.current.forEach((button, index) => {
      const overlay = overlayRefs.current[index];
      if (button && overlay) {
        // Başlangıçta buton ve overlay ayarları
        gsap.set(button, { opacity: 0, y: 20, scale: 0.8 });
        gsap.set(overlay, { opacity: 0.3 });

        // Mouse enter (hover) animasyonu
        button.parentElement?.parentElement?.addEventListener(
          "mouseenter",
          () => {
            gsap.to(button, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(overlay, {
              opacity: 0.6,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        );

        // Mouse leave animasyonu
        button.parentElement?.parentElement?.addEventListener(
          "mouseleave",
          () => {
            gsap.to(button, {
              opacity: 0,
              y: 20,
              scale: 0.8,
              duration: 0.3,
              ease: "power2.in",
            });
            gsap.to(overlay, {
              opacity: 0.3,
              duration: 0.3,
              ease: "power2.in",
            });
          }
        );
      }
    });

    // Cleanup: Event listener'ları kaldır
    return () => {
      buttonRefs.current.forEach((button, index) => {
        const overlay = overlayRefs.current[index];
        if (button && overlay) {
          button.parentElement?.parentElement?.removeEventListener(
            "mouseenter",
            () => {}
          );
          button.parentElement?.parentElement?.removeEventListener(
            "mouseleave",
            () => {}
          );
        }
      });
    };
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-4">
      {data.map((singer, index) => (
        <div
          key={index}
          className="2xl:w-90 2xl:h-110 xl:w-70 xl:h-90 md:w-61 md:h-80 w-full relative overflow-hidden"
        >
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
          <h4 className="absolute bottom-5 lg:text-2xl text-lg left-1/2 -translate-x-1/2 text-[#f5f5f5] font-semibold text-center z-10 whitespace-nowrap">
            {singer.name}
          </h4>
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              className="bg-[#f5f5f5] text-[#160317] px-4 py-2 rounded-lg font-semibold text-sm opacity-0 z-20 cursor-pointer"
            >
              İncele{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingerCards;
