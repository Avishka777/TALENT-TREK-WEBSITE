import { Mail, Award, Users, Star, Target, Zap } from 'lucide-react';
import avishka from '../../assets/team/avishka.png';
import dhananjaya from '../../assets/team/dhananjaya.png';
import supervisor from '../../assets/team/supervisor.png';
import pasan from '../../assets/team/pasan.png';
import dimesha from '../../assets/team/dimesha.png';
import user from '../../assets/team/user.png';
import Image from 'next/image';
import icac from '../../assets/public/icac.webp';
import co from '../../assets/team/co.png';

// Team member data with photo URLs
const teamMembers = [
  {
    name: 'DR. PRASANNA SUMATHIPALA',
    role: 'Supervisor',
    photo: supervisor,
    description: 'Research Supervisor guiding the project development and academic direction',
    // expertise: ['Research Methodology', 'Academic Guidance', 'Project Supervision']
    expertise: [""]
  },
  {
    name: 'MS. KAUSHALYA RAJAPAKSE',
    role: 'Co-Supervisor',
    photo: co,
    description: 'Co-Supervisor providing technical guidance and industry insights',
    // expertise: ['Technical Guidance', 'Industry Insights', 'Implementation Strategy']
    expertise: [""]
  },
  {
    name: 'WIJERATHNA G.D.K',
    role: 'Team Leader',
    photo: dimesha,
    function: 'AI-Driven, Skill-Based Assessment Framework for Technical Evaluation',
    email: 'it21833366@my.sliit.lk',
    expertise: ['AI Assessment', 'Technical Evaluation', 'Team Leadership']
  },
  {
    name: 'RATHNAKUMARA A.R.S.A',
    role: 'Team Member',
    photo: avishka,
    function: 'AI-Driven Platform for Recruitment and Job Alignment',
    email: 'it2183816@my.sliit.lk',
    expertise: ['Recruitment Systems', 'Job Matching', 'Platform Development']
  },
  {
    name: 'ABEYSINGHA A.D.L',
    role: 'Team Member',
    photo: dhananjaya,
    function: 'AI-Agent for Smart Job Search and Automation',
    email: 'it21834806@my.sliit.lk',
    expertise: ['AI Agents', 'Automation', 'Job Search Algorithms']
  },
  {
    name: 'FERNANDO T.P.R',
    role: 'Team Member',
    photo: pasan,
    function: 'Automated System for Interviews',
    email: 'it21835278@my.sliit.lk',
    expertise: ['Interview Systems', 'Automation', 'User Experience']
  }
];

const AboutTeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full mb-6">
            <Target className="text-white" size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Research Team
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-600 to-cyan-500 mx-auto rounded-lg mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated team behind the <span className="font-semibold text-cyan-700">TALENT TREK</span> research project,
            working together to revolutionize recruitment through AI innovation.
          </p>
        </div>

        {/* Supervisors Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-cyan-100 px-6 py-3 rounded-full mb-4">
              <Award className="text-cyan-600 mr-2" size={24} />
              <h3 className="text-2xl font-bold text-cyan-700">Supervisors</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced academic guides providing strategic direction and mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.slice(0, 2).map((supervisor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-cyan-100 group"
              >
                <div className="p-8 text-center">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-2xl transform rotate-6 scale-105 group-hover:rotate-3 transition-transform duration-500"></div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={supervisor.photo}
                        alt={supervisor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {supervisor.name}
                  </h4>
                  <div className="inline-block bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {supervisor.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {supervisor.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {supervisor.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium border border-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-cyan-100 px-6 py-3 rounded-full mb-4">
              <Users className="text-cyan-600 mr-2" size={24} />
              <h3 className="text-2xl font-bold text-cyan-700">Team Members</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core development team implementing innovative AI solutions for recruitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(2).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-md group-hover:border-cyan-100 transition-colors duration-300">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {member.name}
                  </h4>
                  <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed min-h-[60px]">
                    {member.function}
                  </p>

                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-xs border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center text-cyan-600 hover:text-cyan-700 transition-colors text-sm font-medium group"
                  >
                    <Mail size={14} className="mr-2 group-hover:scale-110 transition-transform" />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated System Info */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Integrated Research Framework
              </h3>
              <p className="text-lg text-cyan-100 leading-relaxed mb-6">
                All individual functions combine to create a comprehensive AI-powered recruitment
                framework that revolutionizes the hiring process for both job seekers and employers.
                Our integrated system leverages cutting-edge technologies to provide seamless,
                efficient, and accurate talent matching.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-cyan-200 text-sm font-semibold mb-2">AI Assessment</div>
                  <div className="text-white text-xs">Skill-based technical evaluation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-cyan-200 text-sm font-semibold mb-2">Smart Matching</div>
                  <div className="text-white text-xs">Intelligent job alignment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-cyan-200 text-sm font-semibold mb-2">Automation</div>
                  <div className="text-white text-xs">Streamlined interview process</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-br from-cyan-700 to-cyan-800 rounded-2xl p-8 md:p-12 shadow-2xl text-white">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Star className="text-white" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Group Achievements
            </h2>
            <div className="h-1.5 w-24 bg-cyan-400 mx-auto rounded-lg mb-8"></div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex-1">
                <Image
                  src={icac}
                  alt="ICAC Conference"
                  className="w-48 h-48 mx-auto object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-4 text-cyan-200">
                  7th INTERNATIONAL CONFERENCE ON ADVANCEMENTS IN COMPUTING
                </h3>
                <p className="text-cyan-100 leading-relaxed mb-4">
                  Our research has been selected for presentation at the prestigious 7th International
                  Conference on Advancements in Computing, recognizing the innovation and impact of
                  our AI-powered recruitment framework.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-cyan-100">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                    <span className="text-sm">Peer-reviewed research publication</span>
                  </div>
                  <div className="flex items-center text-cyan-100">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                    <span className="text-sm">International recognition</span>
                  </div>
                  <div className="flex items-center text-cyan-100">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                    <span className="text-sm">Cutting-edge AI research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;