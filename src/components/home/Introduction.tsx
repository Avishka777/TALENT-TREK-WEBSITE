import { Search, Zap, BarChart3, FileSearch, Target, Users } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Research Introduction</h2>
          <div className="h-1.5 w-32 bg-cyan-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming IT recruitment through innovative computational solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Introduction */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg mb-12 border border-gray-200">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              A Computational Framework for Optimized Recruitment via Algorithmic Skill Profiling 
              aims to develop a streamlined, user-friendly platform that enhances IT hiring by 
              efficiently matching skilled professionals with suitable opportunities through 
              innovative AI-powered tools and advanced algorithms.
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Job Seekers Challenges */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-xl mr-4">
                  <Users className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Job Seekers' Challenges</h3>
              </div>
              <ul className="text-gray-600 space-y-4 text-lg">
                <li className="flex items-start">
                  <Search size={20} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <span>Difficulty finding roles tailored to specific skills and experience</span>
                </li>
                <li className="flex items-start">
                  <Zap size={20} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <span>Lack of centralized platforms connecting to suitable opportunities</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 size={20} className="text-red-500 mt-1 mr-4 flex-shrink-0" />
                  <span>Delayed feedback causing frustration and missed career chances</span>
                </li>
              </ul>
            </div>
            
            {/* Recruiters Challenges */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-100 p-3 rounded-xl mr-4">
                  <Target className="text-cyan-600" size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Recruiters' Challenges</h3>
              </div>
              <ul className="text-gray-600 space-y-4 text-lg">
                <li className="flex items-start">
                  <FileSearch size={20} className="text-cyan-500 mt-1 mr-4 flex-shrink-0" />
                  <span>Time-consuming manual CV screening leading to inefficiencies and errors</span>
                </li>
                <li className="flex items-start">
                  <Target size={20} className="text-cyan-500 mt-1 mr-4 flex-shrink-0" />
                  <span>Inability to accurately assess technical proficiency and soft skills</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 size={20} className="text-cyan-500 mt-1 mr-4 flex-shrink-0" />
                  <span>Limited use of AI tools for streamlined candidate shortlisting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Significance Section */}
          <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Research Significance</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Innovative AI-powered tools like resume analyzers, skill-based assessments, and 
              automated job matching can significantly enhance recruitment efficiency and bridge 
              critical gaps between job seekers and recruiters, creating a more equitable and 
              effective hiring ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;