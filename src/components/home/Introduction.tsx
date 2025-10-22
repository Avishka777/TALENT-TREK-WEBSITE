export default function Introduction() {
  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Introduction</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A Computational Framework for Optimized Recruitment via Algorithmic Skill Profiling 
            aims to develop a streamlined, user-friendly platform that enhances IT hiring by 
            efficiently matching skilled professionals with suitable opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges for Job Seekers</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Difficulty finding roles tailored to skills due to generic CVs</li>
                <li>• Lack of centralized platforms connecting to suitable opportunities</li>
                <li>• Delayed feedback causing frustration and missed chances</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges for Recruiters</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Time-consuming manual CV screening leading to inefficiencies</li>
                <li>• Inability to accurately assess technical proficiency</li>
                <li>• Limited use of AI tools for streamlined candidate shortlisting</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Significance</h3>
            <p className="text-gray-700">
              Innovative AI-powered tools like resume analyzers, skill-based assessments, and 
              automated job matching can enhance efficiency and bridge gaps between job seekers and recruiters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}