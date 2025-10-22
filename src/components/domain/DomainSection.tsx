import PageHeader from '../ui/PageHeader';
import SectionTitle from '../ui/SectionTitle';

const DomainSection = () => {
  return (
    <div>
      <PageHeader 
        title="Research Domain" 
        subtitle="Computational Framework for Optimized Recruitment via Algorithmic Skill Profiling"
        backgroundImage="https://empitsolutions.com/wp-content/uploads/2023/12/rrr.webp"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Literature Survey */}
          <SectionTitle title="Literature Survey" />
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              The integration of Artificial Intelligence (AI), Machine Learning (ML), and advanced algorithms 
              has revolutionized the recruitment industry, addressing critical challenges in talent acquisition 
              and management. Current research demonstrates the transformative potential of computational 
              approaches in optimizing recruitment processes, yet significant gaps remain in creating 
              comprehensive, integrated solutions.
            </p>
            
            <p className="mb-6">
              Studies by the World Economic Forum [1] highlight the growing skills gap in the IT sector, 
              emphasizing the need for innovative approaches to talent matching and skill assessment. 
              Research indicates that traditional recruitment methods often fail to accurately assess 
              technical competencies and cultural fit, leading to high turnover rates and suboptimal hiring decisions.
            </p>
            
            <p className="mb-6">
              Recent advancements in Natural Language Processing (NLP) and computer vision have enabled 
              more sophisticated candidate evaluation methods. Research in automated resume parsing [2] 
              demonstrates the effectiveness of AI in extracting and analyzing candidate information, 
              while studies on video interview analysis [3] show promising results in assessing 
              non-verbal communication and soft skills.
            </p>
            
            <p className="mb-6">
              The emergence of skill-based assessment platforms [4] has transformed technical evaluation, 
              moving beyond traditional credentials to focus on demonstrated competencies. However, 
              current solutions often operate in isolation, lacking integration with broader recruitment 
              ecosystems and personalized career development pathways.
            </p>
            
            <p className="mb-6">
              Our research builds upon these foundations while addressing the fragmentation in existing 
              recruitment technologies. By integrating multiple AI-driven components into a unified 
              framework, we aim to create a more holistic and effective approach to talent acquisition 
              and management.
            </p>
          </div>
          
          {/* Research Gap */}
          <SectionTitle title="Research Gap" className="mt-12" />
          
          <div className="bg-cyan-50 p-8 rounded-2xl border-l-4 border-cyan-500 mb-12 shadow-sm">
            <p className="text-gray-800 text-lg leading-relaxed">
              Through comprehensive analysis of existing literature and industry practices, we identified 
              significant gaps in current recruitment technologies. Most solutions address isolated aspects 
              of the hiring process without providing integrated, end-to-end frameworks. There is a notable 
              absence of platforms that combine resume analysis, skill assessment, video interview analysis, 
              and intelligent job matching within a single, cohesive system. Our research aims to bridge 
              this gap by developing a comprehensive computational framework that addresses the entire 
              recruitment lifecycle through algorithmic skill profiling and AI-powered optimization.
            </p>
          </div>
          
          {/* Research Problem */}
          <SectionTitle title="Research Problem" />
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-6">
              The IT recruitment landscape faces critical challenges that hinder efficient talent matching 
              and optimal hiring outcomes. Both job seekers and employers encounter significant obstacles 
              in the current ecosystem:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold text-gray-800 mb-3">Job Seeker Challenges</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Difficulty finding roles matching specific skill sets</li>
                  <li>• Lack of personalized career guidance</li>
                  <li>• Inefficient job search processes</li>
                  <li>• Limited feedback on applications</li>
                </ul>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-xl border-l-4 border-cyan-500">
                <h4 className="font-bold text-gray-800 mb-3">Recruiter Challenges</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Time-consuming resume screening</li>
                  <li>• Inaccurate skill assessment</li>
                  <li>• High cost per hire</li>
                  <li>• Poor candidate experience</li>
                </ul>
              </div>
            </div>
            
            <p>
              These challenges result in inefficient talent allocation, prolonged hiring cycles, and 
              suboptimal matches between candidates and opportunities. Our research addresses these 
              problems through an integrated computational framework that leverages advanced algorithms 
              and AI technologies.
            </p>
          </div>
          
          {/* Research Objectives */}
          <SectionTitle title="Research Objectives" className="mt-12" />
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Main Objective</h4>
              <p className="text-lg text-center text-gray-700">
                Develop a Computational Framework for Optimized Recruitment via Algorithmic 
                Skill Profiling to enhance the efficiency and accuracy of IT hiring processes.
              </p>
            </div>
            
            <h4 className="font-bold text-gray-900 mb-4">Specific Objectives:</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-cyan-100 text-cyan-600 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Intelligent Resume Analysis</h5>
                  <p className="text-gray-700">
                    Design and implement an AI-powered resume analyzer to extract, score, and match 
                    candidate profiles with job requirements using advanced NLP techniques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyan-100 text-cyan-600 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Skill-Based Assessment Framework</h5>
                  <p className="text-gray-700">
                    Develop comprehensive skill evaluation modules featuring gamified quizzes, 
                    coding challenges, and technical assessments with real-time performance analytics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyan-100 text-cyan-600 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="font-bold">03</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Video Interview Analysis</h5>
                  <p className="text-gray-700">
                    Incorporate computer vision and speech analysis technologies to assess candidates' 
                    communication skills, confidence, and cultural fit during video interviews.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyan-100 text-cyan-600 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="font-bold">04</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">AI-Powered Job Matching</h5>
                  <p className="text-gray-700">
                    Automate real-time job-candidate matching using sophisticated machine learning 
                    algorithms that consider skills, experience, cultural fit, and career aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSection;