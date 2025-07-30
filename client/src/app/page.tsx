import SceneStarsSection from "@/components/Home/SceneStarsSection";
import HeroSection from "../components/Home/HeroSection";
import CategorySection from "@/components/Home/CategorySection";
import RithmSection from "@/components/Home/RithmSection";

export default function Home() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen w-full overflow-hidden">
      <HeroSection />
      <CategorySection />
      <SceneStarsSection />
      <RithmSection />
    </main>
  );
}
