import Navigation from '@/components/public/Navigation';
import Footer from '@/components/public/Footer';
import MethodologySection from '@/components/methodology/MethodologySection';

export default function Methodology() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MethodologySection />
      <Footer />
    </main>
  );
}