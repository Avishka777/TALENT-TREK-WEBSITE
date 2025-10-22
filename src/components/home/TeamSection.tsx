import { Mail, Award, Users } from 'lucide-react';
import avishka from '../../assets/team/avishka.png';
import dhananjaya from '../../assets/team/dhananjaya.png';
import pasan from '../../assets/team/pasan.png';
import dimesha from '../../assets/team/dimesha2.jpg';
import user from '../../assets/team/user.png';
import Image from 'next/image';


// Team member data with photo URLs
const teamMembers = [
  {
    name: 'DR. PRASANNA SUMATHIPALA',
    role: 'Supervisor',
    photo: user,
    description: 'Research Supervisor guiding the project development and academic direction'
  },
  {
    name: 'MS. KAUSHALYA RAJAPAKSE',
    role: 'Co-Supervisor',
    photo: user,
    description: 'Co-Supervisor providing technical guidance and industry insights'
  },
  {
    name: 'WIJERATHNA G.D.K',
    role: 'AI Agent Developer',
    photo: dimesha,
    function: 'AI-Agent for Smart Job Search and Automation',
    email: 'gdkw@email.com'
  },
  {
    name: 'RATHNAKUMARA A.R.S.A',
    role: 'Platform Architect',
    photo: avishka,
    function: 'AI-Driven Platform for Recruitment and Job Alignment',
    email: 'it2183816@my.sliit.lk'
  },
  {
    name: 'ABEYSINGHA A.D.L',
    role: 'Assessment Specialist',
    photo: dhananjaya,
    function: 'AI-Driven, Skill-Based Assessment Framework for Technical Evaluation',
    email: 'adla@email.com'
  },
  {
    name: 'FERNANDO T.P.R',
    role: 'Interview System Engineer',
    photo: pasan,
    function: 'Automated System for Interviews',
    email: 'tprf@email.com'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6  max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Research Team</h2>
          <div className="h-1.5 w-32 bg-cyan-600 mx-auto rounded-lg mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team behind the TALENT TREK research project
          </p>
        </div>

        {/* Supervisors Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center">
            <Award className="mr-3 text-cyan-600" size={32} />
            Supervisors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.slice(0, 2).map((supervisor, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
              >
                <div className="p-8 text-center">
                  <div className="w-52 h-52 mx-auto mb-6 rounded-lg overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={supervisor.photo}
                      alt={supervisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{supervisor.name}</h4>
                  <p className="text-cyan-600 font-semibold mb-3">{supervisor.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{supervisor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center flex items-center justify-center">
            <Users className="mr-3 text-cyan-600" size={32} />
            Team Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(2).map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 group"
              >
                <div className="p-6 text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-white shadow-md group-hover:border-cyan-200 transition-colors">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{member.name}</h4>
                  <p className="text-cyan-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">{member.function}</p>
                  <div className="flex items-center justify-center text-cyan-600 hover:text-cyan-700 transition-colors">
                    <Mail size={16} className="mr-1" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combined System Info */}
        <div className="mt-16 bg-cyan-600 text-white p-8 rounded-lg shadow-xl">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Integrated Research Framework</h3>
            <p className="text-lg text-cyan-100 leading-relaxed">
              All individual functions combine to create a comprehensive AI-powered recruitment
              framework that revolutionizes the hiring process for both job seekers and employers.
              Our integrated system leverages cutting-edge technologies to provide seamless,
              efficient, and accurate talent matching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;