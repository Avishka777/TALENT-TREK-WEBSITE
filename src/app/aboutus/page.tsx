import Navigation from '@/components/public/Navigation';
import Footer from '@/components/public/Footer';
import AboutTeamSection from '@/components/aboutus/AboutTeamSection';

export default function Aboutus() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            <AboutTeamSection />
            <Footer />
        </main>
    );
}