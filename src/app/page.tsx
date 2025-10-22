import Navigation from '@/components/public/Navigation';
import HeroSection from '@/components/home/HeroSection';
import Introduction from '@/components/home/Introduction';
import TeamSection from '@/components/home/TeamSection';
import ObjectivesSection from '@/components/home/ObjectivesSection';
import Footer from '@/components/public/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Introduction />
      <ObjectivesSection />
      <TeamSection />
      <Footer />
    </main>
  );
}