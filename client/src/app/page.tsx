import CategorySection from "@/components/Home/CategorySection";
import HeroSection from "../components/Home/HeroSection";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#040519] min-h-screen mx-auto">
      <HeroSection />
      <div className="w-full bg-[#f5f5f5]">
        <section className="mx-auto container h-[30vh]">
          <div className="flex flex-col gap-4 h-full justify-center">
            <h3 className="text-4xl font-bold text-[#1A1A2E] leading-snug">
              Etkinliğini sahneye taşıyacak <br /> sanatçıları keşfet
            </h3>
            <p className="text-[#1A1A2E]">
              Hayalindeki etkinliği gerçeğe dönüştür! En yetenekli müzisyenlerle{" "}
              tanış ve <br />
              sahneye kendi hikayeni taşı.
            </p>
          </div>
        </section>
      </div>
      <div className="w-full bg-[#040519]">
        <CategorySection />
      </div>
      <div className="w-full bg-[#f5f5f5]">
        <section className="mx-auto container h-[15vh]">
          <div className="flex gap-4 h-full items-center w-fit">
            <Button className="cursor-pointer px-8 ">Üye Olun</Button>
            <span className="flex items-center ml-3 text-[#FF007A] font-semibold cursor-pointer">
              {" "}
              Daha Fazlası İçin{" "}
              <ChevronRight size={20} className="text-[#FF007A] mt-1" />
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
