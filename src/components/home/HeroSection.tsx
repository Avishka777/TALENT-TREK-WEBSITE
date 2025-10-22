import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://image-assets.eu-2.volcanic.cloud/api/v1/assets/images/3de3e449c0423b70cfdcba45ce657ed6?fallback=true&format=&size=900x400%23&version=latest&webp_fallback=png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white text-center max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
            TALENT TREK
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-gray-200 leading-relaxed">
            Computational Framework for Optimized Recruitment
          </p>
          <p className="text-xl md:text-2xl font-light mb-4 text-gray-300">
            via Algorithmic Skill Profiling
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed mt-8">
            Revolutionizing IT hiring through AI-powered resume analysis, skill-based assessments,
            and intelligent job matching to bridge the gap between talented professionals and dream opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mt-12">
            <a
              href="#research"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-lg transition-all duration-300 flex items-center font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Explore Research <ArrowRight size={22} className="ml-3" />
            </a>
            <a
              href="#team"
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-lg transition-all duration-300 font-semibold text-lg border-2 border-white shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-3 border-white rounded-lg flex justify-center">
          <div className="w-1.5 h-4 bg-white rounded-lg mt-3"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;