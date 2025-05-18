import MovieSection from "@/components/pages/MovieSection";
import Testomonial from "@/components/pages/Testomonial"
import HeroSection from '@/components/pages/Hero'

export default function HomePage() {

  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection/>
      <MovieSection/>
      <Testomonial/>
    </main>
  );
}
