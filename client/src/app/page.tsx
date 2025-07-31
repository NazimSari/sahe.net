import SceneStarsSection from "@/components/Home/SceneStarsSection";
import HeroSection from "../components/Home/HeroSection";
import CategorySection from "@/components/Home/CategorySection";
import RithmSection from "@/components/Home/RithmSection";
import StepsSection from "@/components/Home/StepsSection";
import FestivalSection from "@/components/Home/FestivalSection";
import PlaceSection from "@/components/Home/PlaceSection";
import Navbar from "@/components/Header/Navbar";

export default function Home() {
  return (
    <main className="relative w-full flex justify-center items-center flex-col overflow-hidden sm:px-0">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <SceneStarsSection />
      <RithmSection />
      <StepsSection />
      <FestivalSection />
      <PlaceSection />
    </main>
  );
}
