import HeroSection from "../components/Home/HeroSection";
import FestivalSection from "@/components/Home/FestivalSection";
import Banner from "@/components/Home/Banner";
import InfoSection from "@/components/Home/InfoSection";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import TonightWhoSection from "@/components/Home/TonightWhoSection";
import StageStarsSection from "@/components/Home/StageStarsSection";
import MusicTypeSection from "@/components/Home/MusicTypeSection";
import EventTypeSection from "@/components/Home/EventTypeSection";
import PaymentStepsSection from "@/components/Home/PaymentStepsSection";
import HangoutSection from "@/components/Home/HangoutSection";

export default function Home() {
  return (
    <main className="relative w-full flex justify-center items-center flex-col overflow-hidden sm:px-0">
      <HeroSection />
      <EventTypeSection />
      <StageStarsSection />
      <MusicTypeSection />
      <PaymentStepsSection />
      <Banner />
      <FestivalSection />
      <TonightWhoSection />
      <HangoutSection />
      <InfoSection />
      <SubscriptionSection />
    </main>
  );
}
