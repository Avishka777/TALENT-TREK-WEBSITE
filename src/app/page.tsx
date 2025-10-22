import Navigation from '@/components/public/Navigation';
import HeroSection from '@/components/home/HeroSection';
import Introduction from '@/components/home/Introduction';
import TeamSection from '@/components/home/TeamSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Introduction />
      <TeamSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 TALENT TREK Research Project. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Faculty of Computing - SLIIT</p>
        </div>
      </footer>
    </main>
  );
}