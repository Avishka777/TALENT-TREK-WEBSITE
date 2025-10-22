import { Brain, Video, FileSearch, Target } from 'lucide-react';

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: FileSearch,
      title: "Resume Analyzer",
      description: "Design and implement an AI-powered system to extract, score, and match candidate profiles with job requirements"
    },
    {
      icon: Brain,
      title: "Skill-Based Assessments",
      description: "Develop gamified quizzes and leaderboards for comprehensive technical competency evaluation"
    },
    {
      icon: Video,
      title: "Video Analysis Technology",
      description: "Incorporate advanced video analysis to assess candidates' communication, confidence, and cultural fit"
    },
    {
      icon: Target,
      title: "Job Matching Algorithms",
      description: "Automate real-time, accurate job-candidate matching using sophisticated AI algorithms"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6  max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Research Objectives</h2>
          <div className="h-1.5 w-32 bg-cyan-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear goals driving our innovative recruitment framework development
          </p>
        </div>

        {/* Main Objective */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Main Objective</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Develop a Computational Framework for Optimized Recruitment via Algorithmic
              Skill Profiling to enhance the efficiency and accuracy of IT hiring processes.
            </p>
          </div>
        </div>

        {/* Specific Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 group"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cyan-100 text-cyan-600 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <objective.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">{objective.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;