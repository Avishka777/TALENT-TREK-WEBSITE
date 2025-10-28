"use client";

import { useState } from "react";
import PageHeader from "../ui/PageHeader";
import SectionTitle from "../ui/SectionTitle";
import {
  FileText,
  Download,
  Filter,
  Search,
  Calendar,
  FileCheck,
  BookOpen,
  ClipboardList,
  Award,
} from "lucide-react";

interface Document {
  id: string;
  title: string;
  category: "proposal" | "checklist" | "report" | "presentation" | "other";
  date: string;
  fileSize: string;
  downloadUrl: string;
  filename?: string;
  status: "completed" | "draft" | "pending";
}

const DocumentsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const documents: Document[] = [
    {
      id: "doc1",
      title: "Project Charter",
      category: "proposal",
      date: "January 07, 2024",
      fileSize: "1.2 MB",
      downloadUrl: "https://drive.google.com/file/d/1g4GMweuX8eR5inIOKTuq5ewPwe7JuuYA/view?usp=sharing",
      filename: "Project-Charter.pdf",
      status: "completed",
    },
    {
      id: "doc2",
      title: "Research Proposal Document",
      category: "proposal",
      date: "January 24, 2024",
      fileSize: "2.5 MB",
      downloadUrl: "https://drive.google.com/file/d/1BoRDGRBpQQh8sLIZDMkkBAmS2Q856AhW/view?usp=sharing",
      status: "completed",
    },
    {
      id: "doc3",
      title: "Final Research Report 01",
      category: "report",
      date: "August 29, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://drive.google.com/file/d/1DMl2rNzvgtt1e9voQFv3DnZ9bOoY6Q3E/view?usp=sharing",
      status: "completed",
    },
    {
      id: "doc4",
      title: "Final Research Report 02",
      category: "report",
      date: "August 29, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://drive.google.com/file/d/1GEWR-wF___KKyuzyTiZTUYz3CZraIo1Q/view?usp=sharing",
      status: "completed",
    },
    {
      id: "doc5",
      title: "Final Research Report 03",
      category: "report",
      date: "August 29, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://drive.google.com/file/d/1iUoqa05OUvVfiSBvsEWJr17YRCORXTHi/view?usp=sharing",
      status: "completed",
    },
    {
      id: "doc6",
      title: "Final Research Report 04",
      category: "report",
      date: "August 29, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://drive.google.com/file/d/1rXMuTWXC2RkI0aW958CbBXHawGKbn2IC/view?usp=sharing",
      status: "completed",
    },
    {
      id: "doc7",
      title: "Final Research Report main",
      category: "report",
      date: "August 29, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://drive.google.com/file/d/1keTR07Am5rQ8qxnpOkSkmcRsVQZuXEIC/view?usp=sharing",
      status: "completed",
    },
    {
      id: "doc8",
      title: "Checklish Document 01 (Git Repository)",
      category: "checklist",
      date: "May 26, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "#",
      status: "pending",
    },
    {
      id: "doc9",
      title: "Checklish Document 02 (UI/UX Demo Video)",
      category: "checklist",
      date: "May 26, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://drive.google.com/file/d/1r7qqIeq927fwwu-eFPB8XHujnKvgFJTL/view?usp=sharing",
      status: "pending",
    },
    {
      id: "doc10",
      title: "Checklish Document 03 (Deployment Report)",
      category: "checklist",
      date: "May 26, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "#",
      status: "pending",
    },
    {
      id: "doc11",
      title: "Proposal Presantation",
      category: "presentation",
      date: "January 27, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://docs.google.com/presentation/d/1KdwxclhvNBfJGAfE_ZuNOWsss7yaHvu1/edit?usp=sharing&ouid=105366346477729486057&rtpof=true&sd=true",
      status: "completed",
    },
    {
      id: "doc12",
      title: "Progress Presentation 01",
      category: "presentation",
      date: "April 08, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://docs.google.com/presentation/d/1DFgvYVqdIb5WUzrT6e-7HFwI6o_cF8c9/edit?usp=sharing&ouid=105366346477729486057&rtpof=true&sd=true",
      status: "completed",
    },
    {
      id: "doc13",
      title: "Progress Presentation 02",
      category: "presentation",
      date: "September 15, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://docs.google.com/presentation/d/1LRluGfqSQZF-aHyjSyUsmju7b-CUd1VP/edit?usp=sharing&ouid=105366346477729486057&rtpof=true&sd=true",
      status: "completed",
    },
    {
      id: "doc14",
      title: "Final Presentation",
      category: "presentation",
      date: "Octomber 28, 2025",
      fileSize: "5.5 MB",
      downloadUrl: "https://docs.google.com/presentation/d/1LRluGfqSQZF-aHyjSyUsmju7b-CUd1VP/edit?usp=sharing&ouid=105366346477729486057&rtpof=true&sd=true",
      status: "completed",
    },
  ];

  const filteredDocuments = documents.filter((doc) => {
    const matchesFilter = filter === "all" || doc.category === filter;
    const matchesSearch = doc.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "proposal":
        return <FileCheck className="text-cyan-600" size={20} />;
      case "checklist":
        return <ClipboardList className="text-purple-600" size={20} />;
      case "report":
        return <BookOpen className="text-green-600" size={20} />;
      case "presentation":
        return <Award className="text-amber-600" size={20} />;
      case "other":
        return <FileText className="text-gray-600" size={20} />;
      default:
        return <FileText className="text-gray-600" size={20} />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "proposal":
        return "Proposal";
      case "checklist":
        return "Checklist";
      case "report":
        return "Report";
      case "presentation":
        return "Presentation";
      case "other":
        return "Other";
      default:
        return category;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-lg">
            Completed
          </span>
        );
      case "draft":
        return (
          <span className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-lg">
            Draft
          </span>
        );
      case "pending":
        return (
          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg">
            Pending
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <PageHeader
        title="Research Documents"
        subtitle="Access Project Documentation, Reports, and Presentations"
        backgroundImage="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
      />

      <div className="container mx-auto px-4 md:px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="mb-6 lg:mb-0">
              <SectionTitle title="Research Documentation" />
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="inline-flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <div className="px-3 py-2 bg-gray-50 border-r">
                  <Filter size={18} className="text-gray-500" />
                </div>
                <select
                  className="px-3 py-2 focus:outline-none text-gray-700 bg-white"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Documents</option>
                  <option value="proposal">Proposals</option>
                  <option value="checklist">Checklists</option>
                  <option value="report">Reports</option>
                  <option value="presentation">Presentations</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((document) => (
              <div
                key={document.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-cyan-300 group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-cyan-50 transition-colors">
                      {getCategoryIcon(document.category)}
                    </div>
                    {getStatusBadge(document.status)}
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-cyan-700 transition-colors">
                    {document.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-1" />
                    {document.date}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {document.fileSize}
                    </span>
                    <a
                      href={document.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={document.filename || true}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium text-sm transition-colors"
                    >
                      <Download size={16} className="mr-1" />
                      Download
                    </a>
                  </div>
                </div>

                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 rounded-b-sm">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {getCategoryLabel(document.category)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <FileText size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No documents found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Information Section */}
          <div className="mt-12 bg-cyan-50 p-8 rounded-lg border border-cyan-100">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <FileText className="text-cyan-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Document Access Information
                </h3>
                <p className="text-gray-700 mb-4">
                  All research documents are provided in PDF format and are
                  available for academic reference. These materials represent
                  the ongoing research progress of the TALENT TREK project.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold mb-2">Available Formats:</h4>
                    <ul className="space-y-1">
                      <li>• PDF Documents</li>
                      <li>• Presentation Slides</li>
                      <li>• Research Reports</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Usage Guidelines:</h4>
                    <ul className="space-y-1">
                      <li>• Academic reference only</li>
                      <li>• Proper citation required</li>
                      <li>• Contact for permissions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
