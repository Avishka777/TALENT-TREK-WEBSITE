import PageHeader from '../ui/PageHeader';
import SectionTitle from '../ui/SectionTitle';
import { Brain, Video, FileSearch, Target, Cpu, Database } from 'lucide-react';
import overview from '../../assets/public/overview.png'
import Image from 'next/image';

const MethodologySection = () => {
  return (
    <div>
      <PageHeader
        title="Research Methodology"
        subtitle="Integrated Framework Development for AI-Powered Recruitment"
        backgroundImage="https://empitsolutions.com/wp-content/uploads/2023/12/rrr.webp"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* System Architecture Overview */}
          <div className="mb-16">
            <SectionTitle title="System Architecture Overview" />
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              {/* <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg mb-6 p-8 border border-gray-300">
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <Cpu size={48} className="mx-auto mb-4 text-cyan-600" />
                    <p className="text-lg font-semibold">TALENT TREK System Architecture</p>
                    <p className="text-sm text-gray-400 mt-2">Integrated AI-Powered Recruitment Framework</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Figure 1: Comprehensive system architecture integrating four core AI modules for end-to-end recruitment optimization
              </p> */}

              <Image src={overview} alt="sytem overview diagram" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* AI-Powered Resume Analysis */}
          <div className="mb-16">
            <SectionTitle title="AI-Powered Resume Analysis" />

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">
                The resume analysis module employs advanced Natural Language Processing (NLP) techniques
                to extract, parse, and analyze candidate information from various document formats.
                The system processes resumes using a multi-stage pipeline:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <FileSearch className="text-cyan-600 mr-3" size={24} />
                  <h4 className="font-bold text-gray-900">Document Processing</h4>
                </div>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• PDF, DOCX, and text format support</li>
                  <li>• Optical Character Recognition (OCR)</li>
                  <li>• Structured data extraction</li>
                  <li>• Format normalization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Brain className="text-cyan-600 mr-3" size={24} />
                  <h4 className="font-bold text-gray-900">Skill Extraction</h4>
                </div>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Named Entity Recognition (NER)</li>
                  <li>• Skill taxonomy matching</li>
                  <li>• Experience quantification</li>
                  <li>• Proficiency level assessment</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
              <h4 className="font-bold text-gray-900 mb-3">Matching Algorithm</h4>
              <p className="text-gray-700 text-sm">
                The system employs cosine similarity and semantic analysis to match candidate profiles
                with job requirements, considering skill relevance, experience level, and industry context.
                The matching score is calculated using weighted factors including technical competencies,
                soft skills, and cultural alignment indicators.
              </p>
            </div>
          </div>

          {/* Skill-Based Assessment Framework */}
          <div className="mb-16">
            <SectionTitle title="Skill-Based Assessment Framework" />

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">
                Our assessment framework combines multiple evaluation methods to provide comprehensive
                skill profiling. The system adapts to different technical domains and experience levels,
                offering personalized assessment paths for each candidate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-green-100 text-green-600 rounded-lg p-3 inline-flex mb-4">
                  <Target size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Technical Quizzes</h4>
                <p className="text-gray-700 text-sm">
                  Domain-specific multiple-choice questions with adaptive difficulty scaling based on candidate performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-purple-100 text-purple-600 rounded-lg p-3 inline-flex mb-4">
                  <Cpu size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Coding Challenges</h4>
                <p className="text-gray-700 text-sm">
                  Real-time coding environment with automated testing and code quality analysis using static analysis tools.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-orange-100 text-orange-600 rounded-lg p-3 inline-flex mb-4">
                  <Database size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Project Simulations</h4>
                <p className="text-gray-700 text-sm">
                  Real-world scenario-based assessments evaluating problem-solving and project delivery capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Video Interview Analysis */}
          <div className="mb-16">
            <SectionTitle title="Video Interview Analysis" />

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">
                The video analysis module employs computer vision and speech processing technologies
                to evaluate candidate performance during virtual interviews. The system analyzes both
                verbal and non-verbal communication cues to assess soft skills and cultural fit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="text-gray-400" size={48} />
                </div>
                <p className="text-sm text-gray-600 text-center">Figure 2: Video Analysis Interface</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-cyan-500">
                  <h5 className="font-semibold text-gray-900 mb-2">Facial Expression Analysis</h5>
                  <p className="text-gray-700 text-sm">
                    Emotion recognition and engagement level assessment through facial feature analysis
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-gray-900 mb-2">Speech Analytics</h5>
                  <p className="text-gray-700 text-sm">
                    Tone analysis, speech clarity, and content coherence evaluation
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h5 className="font-semibold text-gray-900 mb-2">Body Language Assessment</h5>
                  <p className="text-gray-700 text-sm">
                    Posture, gestures, and eye contact analysis for communication effectiveness
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Intelligent Job Matching */}
          <div>
            <SectionTitle title="Intelligent Job Matching Algorithm" />

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">
                The job matching engine combines multiple machine learning models to provide accurate
                candidate-job recommendations. The algorithm considers both explicit qualifications
                and implicit compatibility factors to optimize matching outcomes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Matching Factors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Technical Compatibility</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Skill set alignment (85% weight)</li>
                    <li>• Experience level matching</li>
                    <li>• Technical proficiency assessment</li>
                    <li>• Domain expertise relevance</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Cultural & Soft Factors</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Communication style compatibility</li>
                    <li>• Work preference alignment</li>
                    <li>• Career growth potential</li>
                    <li>• Organizational culture fit</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-cyan-600 text-white p-6 rounded-lg mt-8">
              <h4 className="font-bold text-xl mb-3">Expected Outcomes</h4>
              <p className="text-cyan-100">
                The integrated methodology is designed to reduce hiring time by 60%, improve candidate
                quality matching by 45%, and enhance overall recruitment efficiency through data-driven
                decision making and automated processes.
              </p>
            </div>
          </div>


          <div className='mt-10'>
            <SectionTitle title="AI-Agent for Smart Job Search and Automation" />

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">
                This AI-powered agent is designed to address the challenges IT professionals and newcomers face in identifying
                in-demand skills in a rapidly evolving job market. The system facilitates smart job searching and targeted
                skill development by providing data-driven, personalized recommendations. It systematically collects real-time
                job market data, applies a time-series forecasting model to predict skill trends, and empowers users
                to align their learning paths with current industry expectations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Core Functionality & Methodology</h4>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Data Pipeline & Forecasting</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <span className='font-semibold'>Real-Time Data Acquisition:</span>  The system automatically scrapes job listings from online portals like Naukri.com using a custom-built scraper with Selenium and BeautifulSoup.</li>
                    <li>• <span className='font-semibold'>Predictive Analytics:</span> It utilizes the Prophet time-series forecasting model to analyze historical data and predict which technical skills will be in demand over the next six months. </li>
                    <li>• <span className='font-semibold'>Data Preprocessing:</span> Raw job data undergoes extensive preprocessing, including cleaning, normalization, and transformation into a time-series format suitable for the Prophet model. </li>
                    <li>• <span className='font-semibold'>Model Evaluation:</span> The forecast accuracy is validated using a backtesting strategy with Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) metrics. </li>

                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">System & User Features</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <span className='font-semibold'>Personalized Recommendations:</span>  The AI agent provides job seekers with personalized, role-specific skill recommendations based on the forecasted trends.</li>
                    <li>• <span className='font-semibold'>API Service:</span>  A backend RESTful API built with FastAPI serves the forecast data, allowing for easy integration with other applications.</li>
                    <li>• <span className='font-semibold'>Interactive Dashboard:</span>  A user-facing interface built with React allows users to search for job roles and visualize the top 5 forecasted skills and their demand trends.</li>
                    <li>• <span className='font-semibold'>Automated Updates:</span>  The system ensures forecast relevance through scheduled weekly data scraping and monthly model retraining.</li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySection;