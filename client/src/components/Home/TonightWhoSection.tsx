"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

const banners = [
  {
    id: 1,
    name: "Neşe Karaböcek",
    genres: "Pop, Dance",
    hour: "19:00",
    venue: "Babylon",
    location: "İstanbul",
    image: "/dogum-gunu.jpg",
  },
  {
    id: 2,
    name: "Berkay Aydınlı",
    genres: "Rock, Dance",
    hour: "20:00",
    venue: "Vakkoroma Cafe",
    location: "İstanbul",
    image: "/dj-performans.jpg",
  },
  {
    id: 3,
    name: "Tan Yılmaz",
    genres: "Sanat Müziği",
    hour: "21:30",
    venue: "Black Box",
    location: "Ankara",
    image: "/canli-music.jpg",
  },
  {
    id: 4,
    name: "DJ Yelken",
    genres: "House, Club",
    hour: "22:00",
    venue: "Cath Restaurant",
    location: "Antalya",
    image: "/dugun-orkestra.jpg",
  },
];

export default function TonightWhoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider(); // Temizlik
  }, []);

  return (
    <section className="mx-auto my-16 w-full bg-[#1A1A2E]">
      <div className="container mx-auto  p-4 md:p-0">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col gap-8">
            <h3 className="md:text-6xl text-2xl max-w-2xl ml-2 font-bold text-[#f5f5f5] md:mt-16 mt-8">
              Bu Gece <span className="text-[#FF007A]">Sahnede</span> Kim Var?
            </h3>
            <p className="text-[#f5f5f5] text-sm md:text-lg leading-relaxed max-w-xl ml-2">
              Gecenin ritmini belirleyen sanatçılar burada! Bu gece kim
              performans sergiliyor, hemen göz at.
            </p>
            <Button className="border bg-transparent border-[#FF007A] px-8 py-2 rounded-md text-[#FF007A] text-sm md:text-base font-semibold cursor-pointer hover:bg-[#FF007A] hover:text-white transition-colors duration-300 w-fit">
              <span className="flex items-center">Tümünü İncele</span>
            </Button>
          </div>
          <div
            className="relative h-[400px] w-[700px] overflow-hidden rounded-2xl my-10"
            onMouseEnter={stopSlider}
            onMouseLeave={startSlider}
          >
            {banners.map((bannerItem, index) => (
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                key={bannerItem.id}
              >
                <div className="absolute inset-0">
                  <img
                    src={bannerItem.image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-5 left-5">
                    <div className="text-sm text-[#1A1A2E] flex items-center mt-1 bg-white px-2 py-2 gap-2 rounded-md">
                      <span>
                        <FaLocationDot />
                      </span>{" "}
                      <p>{bannerItem.location}</p>
                    </div>
                  </div>
                </div>
                {/* Card Tasarımı */}
                <div className="absolute bottom-5 left-5 bg-[#1A1A2E]/80 rounded-lg p-6 max-w-96 w-full shadow-lg">
                  <h2 className="text-2xl font-bold text-[#f5f5f5]">
                    {bannerItem.name}
                  </h2>
                  <p className="text-sm text-[#f5f5f5] mt-1">
                    {bannerItem.genres}
                  </p>
                  <p className="text-sm text-[#f5f5f5] mt-1">
                    Saat: {bannerItem.hour}
                  </p>
                  <p className="text-sm text-[#f5f5f5] mt-1">
                    Mekan: {bannerItem.venue}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center text-sm text-[#FF007A] font-bold cursor-pointer">
                      Rezervasyon Yap
                      <ChevronRight size={20} className="text-[#FF007A] mt-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-6 right-5 transform -translate-x-1/2 mx-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ml-1 ${
                    currentSlide === index
                      ? "bg-[#FF007A] w-6"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
