export default function TeamSection() {
  const supervisors = [
    { name: 'DR. PRASANNA SUMATHIPALA', role: 'Supervisor' },
    { name: 'MS. KAUSHALYA RAJAPAKSE', role: 'Co-Supervisor' }
  ];

  const teamMembers = [
    { 
      name: 'WIJERATHNA G.D.K', 
      function: 'AI-Agent for Smart Job Search and Automation'
    },
    { 
      name: 'RATHNAKUMARA A.R.S.A', 
      function: 'AI-Driven Platform for Recruitment and Job Alignment'
    },
    { 
      name: 'ABEYSINGHA A.D.L', 
      function: 'AI-Driven, Skill-Based Assessment Framework for Technical Evaluation'
    },
    { 
      name: 'FERNANDO T.P.R', 
      function: 'AUTOMATED SYSTEM FOR INTERVIEWS'
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Supervisors */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Supervisors</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-lg font-medium text-gray-900">{supervisor.name}</h4>
                <p className="text-blue-600 mt-2">{supervisor.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Team Members</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">{member.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.function}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combined System */}
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Integrated System</h3>
          <p className="text-lg opacity-90">
            All individual functions combine to create a comprehensive AI-powered recruitment 
            framework that revolutionizes the hiring process for both job seekers and employers.
          </p>
        </div>
      </div>
    </section>
  );
}