import Navigation from '@/components/public/Navigation';
import Footer from '@/components/public/Footer';
import DomainSection from '@/components/domain/DomainSection';

export default function Domain() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <DomainSection />
      <Footer />
    </main>
  );
}