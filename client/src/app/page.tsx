import SceneStarsSection from "@/components/Home/SceneStarsSection";
import HeroSection from "../components/Home/HeroSection";
import CategorySection from "@/components/Home/CategorySection";
import RithmSection from "@/components/Home/RithmSection";
import StepsSection from "@/components/Home/StepsSection";
import FestivalSection from "@/components/Home/FestivalSection";
import PlaceSection from "@/components/Home/PlaceSection";
import Banner from "@/components/Home/Banner";
import InfoSection from "@/components/Home/InfoSection";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import TonightWhoSection from "@/components/Home/TonightWhoSection";

export default function Home() {
  return (
    <main className="relative w-full flex justify-center items-center flex-col overflow-hidden sm:px-0">
      <HeroSection />
      <CategorySection />
      <SceneStarsSection />
      <RithmSection />
      <StepsSection />
      <Banner />
      <FestivalSection />
      <TonightWhoSection />
      <PlaceSection />
      <InfoSection />
      <SubscriptionSection />
    </main>
  );
}
