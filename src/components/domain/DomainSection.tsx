import PageHeader from "../ui/PageHeader";
import SectionTitle from "../ui/SectionTitle";
import {
  Brain,
  Video,
  FileSearch,
  Target,
  Cpu,
  Database,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  Code,
  Server,
  Layout,
} from "lucide-react";
import overview from "../../assets/public/overview.png";
import Image from "next/image";

// TechnologyStack Component
const TechnologyStack = () => {
  const technologies = [
    {
      title: "AI-Agent for Smart Job Search and Automation",
      description:
        "Predictive analytics for skill demand forecasting and personalized job recommendations",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      techGroups: [
        {
          category: "Data Collection & Processing",
          technologies: ["Selenium", "Beautiful Soup", "Pandas", "NumPy"],
        },
        {
          category: "Forecasting & Backend",
          technologies: ["Prophet", "FastAPI"],
        },
        {
          category: "Frontend & Styling",
          technologies: ["React", "Tailwind CSS"],
        },
      ],
    },
    {
      title: "AI-Driven Platform for Recruitment and Job Alignment",
      description: "Intelligent resume parsing and job matching system",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      techGroups: [
        {
          category: "Full Stack Development",
          technologies: ["MERN Stack (MongoDB, Express, React, Node.js)"],
        },
        {
          category: "API & Backend",
          technologies: ["FastAPI"],
        },
        {
          category: "Resume Processing",
          technologies: ["CVParser.ai", "MongoDB"],
        },
      ],
    },
    {
      title: "Skill-Based Assessment Framework",
      description:
        "Comprehensive technical evaluation and skill assessment platform",
      icon: Cpu,
      color: "from-green-500 to-emerald-500",
      techGroups: [
        {
          category: "Backend & Data Processing",
          technologies: ["Python", "Pandas", "FastAPI"],
        },
        {
          category: "Frontend Development",
          technologies: ["React", "Tailwind CSS"],
        },
        {
          category: "Server & Database",
          technologies: ["Node.js", "MongoDB"],
        },
      ],
    },
    {
      title: "Automated Interview System",
      description: "AI-powered video interview analysis and evaluation",
      icon: Video,
      color: "from-orange-500 to-red-500",
      techGroups: [
        {
          category: "Computer Vision",
          technologies: [
            "Haar Cascade Classifier",
            "Grayscale Conversion",
            "Resizing (48×48)",
            "Histogram Enhancement",
          ],
        },
        {
          category: "Natural Language Processing",
          technologies: [
            "NLTK (Tokenization, Stopword Removal, Lemmatization)",
            "Regex",
            "Dictionary-based Correction",
          ],
        },
        {
          category: "Video & Text Analysis",
          technologies: [
            "Frame Sampling (every 10th frame)",
            "Cosine Similarity",
            "Sentence Embeddings",
          ],
        },
      ],
    },
  ];

  const getIconComponent = (
    IconComponent: React.ComponentType<
      React.SVGProps<SVGSVGElement> & { size?: number; className?: string }
    >,
    color: string
  ) => (
    <div className={`p-3 rounded-xl ${color} text-white shadow-lg`}>
      <IconComponent size={24} />
    </div>
  );

  return (
    <section className="py-16 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-cyan-600 to-cyan-700 rounded-full mb-6">
            <Code className="text-white" size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <div className="h-1.5 w-32 bg-linear-to-r from-cyan-600 to-cyan-500 mx-auto rounded-lg mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology ecosystem powering our AI-driven
            recruitment platform
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-linear-to-r ${tech.color} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      {getIconComponent(tech.icon, "from-white/20 to-white/10")}
                      <h3 className="text-xl font-bold ml-4">{tech.title}</h3>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Groups */}
              <div className="p-6">
                <div className="space-y-6">
                  {tech.techGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div
                          className={`w-2 h-2 bg-linear-to-r ${tech.color} rounded-full mr-3`}
                        ></div>
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.technologies.map((technology, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 transition-colors"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Integrated Module</span>
                  <span className="flex items-center">
                    <Server size={14} className="mr-1" />
                    {tech.techGroups.flatMap((g) => g.technologies).length}{" "}
                    Technologies
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">4</div>
              <div className="text-gray-600 text-sm">AI Modules</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600 text-sm">AI Domains</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 text-sm">Integration</div>
            </div>
          </div>
        </div>

        {/* Technology Categories Overview */}
        <div className="mt-12 bg-linear-to-r from-cyan-600 to-cyan-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Technology Architecture
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Layout,
                title: "Frontend",
                tech: "React, Tailwind CSS",
                color: "from-blue-400 to-cyan-400",
              },
              {
                icon: Server,
                title: "Backend",
                tech: "Node.js, FastAPI, Python",
                color: "from-green-400 to-emerald-400",
              },
              {
                icon: Database,
                title: "Database",
                tech: "MongoDB",
                color: "from-purple-400 to-pink-400",
              },
              {
                icon: Cpu,
                title: "AI/ML",
                tech: "Prophet, NLTK, OpenCV",
                color: "from-orange-400 to-red-400",
              },
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div
                  className={`inline-flex p-4 rounded-xl bg-linear-to-r ${category.color} mb-4`}
                >
                  <category.icon size={24} />
                </div>
                <h4 className="font-semibold mb-2">{category.title}</h4>
                <p className="text-cyan-100 text-sm">{category.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DomainSection = () => {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Research Domain"
        subtitle="Computational Framework for Optimized Recruitment via Algorithmic Skill Profiling"
        backgroundImage="https://empitsolutions.com/wp-content/uploads/2023/12/rrr.webp"
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-cyan-600 to-cyan-700 rounded-full mb-6">
              <Lightbulb className="text-white" size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Research Domain & Methodology
            </h1>
            <div className="h-1.5 w-32 bg-linear-to-r from-cyan-600 to-cyan-500 mx-auto rounded-lg mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Exploring the intersection of Artificial Intelligence, Machine
              Learning, and Human Resources to revolutionize talent acquisition
              through computational optimization and algorithmic profiling.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Literature Survey */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <SectionTitle title="Literature Survey" />
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    The integration of Artificial Intelligence (AI), Machine
                    Learning (ML), and advanced algorithms has revolutionized
                    the recruitment industry, addressing critical challenges in
                    talent acquisition and management. Current research
                    demonstrates the transformative potential of computational
                    approaches in optimizing recruitment processes.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="mr-2 text-cyan-600" size={20} />
                        Industry Insights
                      </h4>
                      <p className="text-sm">
                        Studies by the World Economic Forum highlight the
                        growing skills gap in the IT sector, emphasizing the
                        need for innovative approaches to talent matching and
                        skill assessment.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Users className="mr-2 text-purple-600" size={20} />
                        Technology Impact
                      </h4>
                      <p className="text-sm">
                        Recent advancements in NLP and computer vision have
                        enabled more sophisticated candidate evaluation methods,
                        transforming traditional recruitment practices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Research Gap & Problem */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Research Gap */}
                  <div>
                    <SectionTitle title="Research Gap" />
                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                      <p className="text-gray-800 leading-relaxed text-sm">
                        Through comprehensive analysis, we identified
                        significant gaps in current recruitment technologies.
                        Most solutions address isolated aspects without
                        providing integrated, end-to-end frameworks that combine
                        resume analysis, skill assessment, video interview
                        analysis, and intelligent job matching.
                      </p>
                    </div>
                  </div>

                  {/* Research Problem */}
                  <div>
                    <SectionTitle title="Research Problem" />
                    <div className="space-y-4">
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2 text-sm">
                          Job Seeker Challenges
                        </h4>
                        <ul className="text-gray-700 text-xs space-y-1">
                          <li>• Difficulty finding role-matched positions</li>
                          <li>• Lack of personalized career guidance</li>
                          <li>• Inefficient job search processes</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2 text-sm">
                          Recruiter Challenges
                        </h4>
                        <ul className="text-gray-700 text-xs space-y-1">
                          <li>• Time-consuming resume screening</li>
                          <li>• Inaccurate skill assessment</li>
                          <li>• High cost per hire</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Research Objectives */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <SectionTitle title="Research Objectives" />

                <div className="bg-linear-to-r from-cyan-600 to-cyan-700 text-white p-6 rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-3 text-center">
                    Main Objective
                  </h4>
                  <p className="text-center text-cyan-100">
                    Develop a Computational Framework for Optimized Recruitment
                    via Algorithmic Skill Profiling to enhance the efficiency
                    and accuracy of IT hiring processes.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      number: "01",
                      title: "Intelligent Resume Analysis",
                      description:
                        "Design and implement an AI-powered resume analyzer to extract, score, and match candidate profiles with job requirements using advanced NLP techniques.",
                      icon: FileSearch,
                    },
                    {
                      number: "02",
                      title: "Skill-Based Assessment Framework",
                      description:
                        "Develop comprehensive skill evaluation modules featuring gamified quizzes, coding challenges, and technical assessments with real-time performance analytics.",
                      icon: Target,
                    },
                    {
                      number: "03",
                      title: "Video Interview Analysis",
                      description:
                        "Incorporate computer vision and speech analysis technologies to assess candidates' communication skills, confidence, and cultural fit.",
                      icon: Video,
                    },
                    {
                      number: "04",
                      title: "AI-Powered Job Matching",
                      description:
                        "Automate real-time job-candidate matching using sophisticated machine learning algorithms considering skills, experience, and cultural fit.",
                      icon: Brain,
                    },
                    {
                      number: "05",
                      title: "AI-Agent for Smart Job Search",
                      description:
                        "Design an AI Skill Forecaster that analyzes IT job postings to predict the top 5 most in-demand skills for the next 6 months.",
                      icon: Zap,
                    },
                  ].map((objective, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200 group hover:border-cyan-300 transition-colors"
                    >
                      <div className="bg-cyan-100 text-cyan-600 rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform">
                        <objective.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full mr-3">
                            {objective.number}
                          </span>
                          <h5 className="font-semibold text-gray-900">
                            {objective.title}
                          </h5>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <SectionTitle title="Methodolody" />

              {/* System Architecture */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <SectionTitle title="System Architecture Overview" />
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                  <Image
                    src={overview}
                    alt="System architecture diagram showing the integrated AI-powered recruitment framework"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
                <p className="text-gray-600 text-sm text-center mt-4">
                  Figure 1: Comprehensive system architecture integrating
                  multiple AI modules for end-to-end recruitment optimization
                </p>
              </section>
            </div>

            {/* Sidebar - Key Features */}
            <div className="space-y-8">
              {/* Methodology Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="mr-2 text-cyan-600" size={24} />
                  Methodology
                </h3>
                <div className="space-y-4">
                  <div className="bg-linear-to-r from-cyan-50 to-cyan-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-800 text-sm mb-2">
                      AI-Powered Analysis
                    </h4>
                    <p className="text-cyan-700 text-xs">
                      Advanced NLP and ML algorithms for comprehensive candidate
                      evaluation
                    </p>
                  </div>
                  <div className="bg-linear-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 text-sm mb-2">
                      Multi-Modal Assessment
                    </h4>
                    <p className="text-purple-700 text-xs">
                      Combining resume analysis, skill tests, and video
                      interviews
                    </p>
                  </div>
                  <div className="bg-linear-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 text-sm mb-2">
                      Real-time Matching
                    </h4>
                    <p className="text-green-700 text-xs">
                      Dynamic algorithm for optimal candidate-job alignment
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Components */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technical Components
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      name: "Natural Language Processing",
                      color: "bg-blue-100 text-blue-800",
                    },
                    {
                      name: "Computer Vision",
                      color: "bg-green-100 text-green-800",
                    },
                    {
                      name: "Machine Learning",
                      color: "bg-purple-100 text-purple-800",
                    },
                    {
                      name: "Time-Series Forecasting",
                      color: "bg-orange-100 text-orange-800",
                    },
                    {
                      name: "Real-time Analytics",
                      color: "bg-cyan-100 text-cyan-800",
                    },
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className={`inline-block ${tech.color} px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="bg-linear-to-br from-cyan-600 to-cyan-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Expected Outcomes</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-200">60%</div>
                    <div className="text-cyan-100 text-sm">
                      Reduction in hiring time
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-200">45%</div>
                    <div className="text-cyan-100 text-sm">
                      Improvement in candidate matching
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-200">70%</div>
                    <div className="text-cyan-100 text-sm">
                      Process automation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Methodology Sections */}
          <div className="mt-16 space-y-16">
            {/* AI-Powered Resume Analysis */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <SectionTitle title="AI-Powered Resume Analysis" />
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The resume analysis module employs advanced Natural Language
                    Processing (NLP) techniques to extract, parse, and analyze
                    candidate information from various document formats through
                    a multi-stage pipeline.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <FileSearch className="text-cyan-600 mr-3" size={20} />
                      <div>
                        <h5 className="font-semibold text-gray-900">
                          Document Processing
                        </h5>
                        <p className="text-gray-600 text-sm">
                          PDF, DOCX, OCR, and format normalization
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <Brain className="text-cyan-600 mr-3" size={20} />
                      <div>
                        <h5 className="font-semibold text-gray-900">
                          Skill Extraction
                        </h5>
                        <p className="text-gray-600 text-sm">
                          NER, skill taxonomy, and proficiency assessment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Matching Algorithm
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The system employs cosine similarity and semantic analysis
                    to match candidate profiles with job requirements,
                    considering skill relevance, experience level, and industry
                    context through weighted factors including technical
                    competencies and cultural alignment.
                  </p>
                </div>
              </div>
            </section>

            {/* Skill-Based Assessment */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <SectionTitle title="Skill-Based Assessment Framework" />
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Technical Quizzes",
                    description:
                      "Domain-specific multiple-choice questions with adaptive difficulty scaling",
                    color: "bg-green-100 text-green-600",
                  },
                  {
                    icon: Cpu,
                    title: "Coding Challenges",
                    description:
                      "Real-time coding environment with automated testing and code quality analysis",
                    color: "bg-purple-100 text-purple-600",
                  },
                  {
                    icon: Database,
                    title: "Project Simulations",
                    description:
                      "Real-world scenario-based assessments evaluating problem-solving capabilities",
                    color: "bg-orange-100 text-orange-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-cyan-300 transition-colors"
                  >
                    <div
                      className={`${item.color} rounded-lg p-3 inline-flex mb-4`}
                    >
                      <item.icon size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Video Interview Analysis */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <SectionTitle title="Video Interview Analysis" />
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <div className="bg-gray-200 rounded-lg p-8 mb-4 flex items-center justify-center">
                    <Video className="text-gray-400" size={48} />
                  </div>
                  <p className="text-sm text-gray-600">
                    Video Analysis Interface
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Facial Expression Analysis",
                      description:
                        "Emotion recognition and engagement level assessment through facial feature analysis",
                      border: "border-cyan-500",
                    },
                    {
                      title: "Speech Analytics",
                      description:
                        "Tone analysis, speech clarity, and content coherence evaluation",
                      border: "border-green-500",
                    },
                    {
                      title: "Body Language Assessment",
                      description:
                        "Posture, gestures, and eye contact analysis for communication effectiveness",
                      border: "border-purple-500",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`bg-white p-4 rounded-lg border-l-4 ${feature.border} shadow-sm`}
                    >
                      <h5 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h5>
                      <p className="text-gray-700 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AI Agent Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <SectionTitle title="AI-Agent for Smart Job Search and Automation" />
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p className="mb-6 leading-relaxed">
                  This AI-powered agent addresses challenges in identifying
                  in-demand skills in a rapidly evolving job market. It
                  facilitates smart job searching and targeted skill development
                  through data-driven, personalized recommendations based on
                  real-time market analysis.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Core Functionality
                  </h4>
                  <ul className="text-gray-700 space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                        1
                      </span>
                      <span>
                        <strong>Real-Time Data Acquisition:</strong> Automated
                        scraping from major job portals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                        2
                      </span>
                      <span>
                        <strong>Predictive Analytics:</strong> Prophet
                        time-series forecasting for skill demand
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                        3
                      </span>
                      <span>
                        <strong>Personalized Recommendations:</strong>{" "}
                        Role-specific skill development guidance
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-900 mb-4">
                    System Features
                  </h4>
                  <ul className="text-gray-700 space-y-3 text-sm">
                    <li className="flex items-start">
                      <Zap className="text-purple-600 mr-3 mt-0.5" size={16} />
                      <span>RESTful API service for easy integration</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="text-purple-600 mr-3 mt-0.5" size={16} />
                      <span>Interactive dashboard for skill visualization</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="text-purple-600 mr-3 mt-0.5" size={16} />
                      <span>Automated weekly updates and model retraining</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Technology Stack Section - Added at the bottom */}
      <TechnologyStack />
    </div>
  );
};

export default DomainSection;
