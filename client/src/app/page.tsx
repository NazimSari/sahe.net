import HeroSection from "../components/Home/HeroSection";
import CategorySection from "@/components/Home/CategorySection";

export default function Home() {
  return (
    <main className="bg-[#040519] min-h-screen mx-auto  overflow-hidden">
      <HeroSection />
      <section className="w-full bg-[#f5f5f5]">
        <CategorySection />
      </section>
    </main>
  );
}
