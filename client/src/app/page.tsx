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
import VenuesSection from "@/components/Home/VenuesSection";
import CounterSection from "@/components/Home/CounterSection";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full justify-center items-center  overflow-hidden">
      <HeroSection />
      <CounterSection />
      <EventTypeSection />
      <StageStarsSection />
      <MusicTypeSection />
      <PaymentStepsSection />
      <Banner />
      <FestivalSection />
      <TonightWhoSection />
      <VenuesSection />
      <InfoSection />
      <SubscriptionSection />
    </main>
  );
}
