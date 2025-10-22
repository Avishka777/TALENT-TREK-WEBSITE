import Navigation from '@/components/public/Navigation';
import Footer from '@/components/public/Footer';
import MilestonesSection from '@/components/milestones/MilestonesSection';

export default function Documents() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <MilestonesSection />
      <Footer />
    </main>
  );
}