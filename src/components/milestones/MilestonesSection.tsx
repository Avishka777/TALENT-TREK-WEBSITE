'use client';

import { useState } from "react";
import PageHeader from "../ui/PageHeader";
import SectionTitle from "../ui/SectionTitle";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  Calendar,
  Award,
  Target,
  FileText,
  Users
} from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  date: string;
  status: "completed" | "in-progress" | "upcoming";
  marks?: string;
  description: string;
  icon: any;
}

const MilestonesSection = () => {
  const [openMilestone, setOpenMilestone] = useState<string | null>("progress2");

  const toggleMilestone = (id: string) => {
    if (openMilestone === id) {
      setOpenMilestone(null);
    } else {
      setOpenMilestone(id);
    }
  };

  const milestones: Milestone[] = [
    {
      id: "proposal",
      title: "Project Proposal",
      date: "July 5-9, 2024",
      status: "completed",
      // marks: "85/100",
      description: "Initial project proposal outlining the research problem, objectives, and methodology. This milestone established the foundation for the TALENT TREK project and received approval from the academic board.",
      icon: FileText
    },
    {
      id: "progress1",
      title: "Progress Presentation 1",
      date: "December 4-6, 2024",
      status: "completed",
      // marks: "78/100",
      description: "First progress review covering literature survey, research gap identification, and preliminary system design. The team presented initial findings and received feedback on the proposed technical approach.",
      icon: Target
    },
    {
      id: "progress2",
      title: "Progress Presentation 2",
      date: "March 18-20, 2025",
      status: "completed",
      description: "Second progress review focusing on prototype development, data collection methodology, and initial testing results. This milestone will demonstrate the feasibility of the proposed AI-powered recruitment solutions.",
      icon: Users
    },
    {
      id: "final",
      title: "Final Assessment",
      date: "May 26-28, 2025",
      status: "upcoming",
      description: "Final project submission including complete implementation, testing results, and comprehensive documentation. This milestone represents the culmination of the research effort and system validation.",
      icon: Award
    },
    {
      id: "viva",
      title: "Viva Voce",
      date: "June 2025",
      status: "upcoming",
      description: "Final oral defense of the research project in front of an academic committee. The team will present findings, demonstrate the system, and answer questions about the research methodology and results.",
      icon: Users
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "upcoming":
        return "bg-gray-100 text-gray-600 border-gray-200";
      default:
        return "";
    }
  };

  const getTimelineClass = (index: number, status: string) => {
    if (status === "completed") return "bg-cyan-500";
    if (status === "in-progress") return "bg-amber-500";
    return "bg-gray-300";
  };

  return (
    <div>
      <PageHeader
        title="Project Milestones"
        subtitle="Academic Assessment Timeline & Progress Tracking"
        backgroundImage="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Research Progress Timeline"
          />

          {/* Timeline Visualization */}
          {/* <div className="mb-12 bg-cyan-50 p-8 rounded-lg border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Timeline</h3>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="flex flex-col items-center relative z-10">
                  <div className={`w-4 h-4 rounded-lg border-4 border-white ${getTimelineClass(index, milestone.status)}`}></div>
                  <div className="mt-2 text-xs text-gray-600 text-center max-w-24">
                    {milestone.date.split(' ')[0]}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Milestones Accordion */}
          <div className="space-y-4">
            {milestones.map((milestone) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={milestone.id}
                  className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${openMilestone === milestone.id
                    ? "border-cyan-300 shadow-lg"
                    : "border-gray-200 shadow-sm hover:shadow-md"
                    }`}
                >
                  <div
                    className={`p-6 cursor-pointer flex items-center justify-between transition-colors duration-300 ${openMilestone === milestone.id ? "bg-cyan-50" : "bg-white hover:bg-gray-50"
                      }`}
                    onClick={() => toggleMilestone(milestone.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${milestone.status === 'completed' ? 'bg-green-100 text-green-600' :
                        milestone.status === 'in-progress' ? 'bg-amber-100 text-amber-600' :
                          'bg-gray-100 text-gray-400'
                        }`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">
                          {milestone.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <p className="text-gray-600">{milestone.date}</p>
                          {milestone.marks && (
                            <span className="text-cyan-600 font-semibold">
                              {milestone.marks}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-4 py-2 rounded-lg text-sm font-medium border ${getStatusClass(
                          milestone.status
                        )}`}
                      >
                        {milestone.status.replace("-", " ")}
                      </span>
                      {openMilestone === milestone.id ? (
                        <ChevronUp size={24} className="text-cyan-600" />
                      ) : (
                        <ChevronDown size={24} className="text-gray-400" />
                      )}
                    </div>
                  </div>

                  {openMilestone === milestone.id && (
                    <div className="p-6 bg-white border-t border-gray-100">
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {milestone.marks && (
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <div>
                            <span className="text-sm font-medium text-gray-700">
                              Assessment Score:
                            </span>
                            <span className="ml-2 font-bold text-green-700 text-lg">
                              {milestone.marks}
                            </span>
                          </div>
                          <button className="text-cyan-600 hover:text-cyan-800 font-medium inline-flex items-center text-sm">
                            View detailed feedback
                            <ChevronDown size={16} className="ml-1" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Assessment Criteria */}
          <div className="mt-12 bg-cyan-50 p-8 rounded-lg border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Assessment Criteria</h3>
            <p className="text-gray-700 mb-6 text-center">
              Each milestone is evaluated based on comprehensive academic standards and research quality metrics
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="text-cyan-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Technical Innovation</h4>
                <p className="text-gray-600 text-sm">40% weight</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-green-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Research Methodology</h4>
                <p className="text-gray-600 text-sm">25% weight</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Documentation Quality</h4>
                <p className="text-gray-600 text-sm">20% weight</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-amber-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Presentation Skills</h4>
                <p className="text-gray-600 text-sm">15% weight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesSection;