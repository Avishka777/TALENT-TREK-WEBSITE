import PageHeader from '../ui/PageHeader';
import SectionTitle from '../ui/SectionTitle';
import { Brain, Video, FileSearch, Target, Cpu, Database } from 'lucide-react';

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
              <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg mb-6 p-8 border border-gray-300">
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
              </p>
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
        </div>
      </div>
    </div>
  );
};

export default MethodologySection;