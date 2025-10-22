import Navigation from '@/components/public/Navigation';
import Footer from '@/components/public/Footer';
import DocumentsSection from '@/components/documents/DocumentsSection';

export default function Documents() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <DocumentsSection />
      <Footer />
    </main>
  );
}