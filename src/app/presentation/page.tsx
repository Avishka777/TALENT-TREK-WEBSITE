import Navigation from '@/components/public/Navigation';
import Footer from '@/components/public/Footer';
import PresentationSection from '@/components/presentation/PresentationSection';

export default function Documents() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <PresentationSection />
            <Footer />
        </main>
    );
}