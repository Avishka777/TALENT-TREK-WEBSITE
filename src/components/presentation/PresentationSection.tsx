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
    Presentation,
    Play,
    ExternalLink,
    Video,
    Award,
    Clock,
    CheckCircle,
} from "lucide-react";

interface Presentation {
    id: string;
    title: string;
    type: "proposal" | "progress1" | "progress2" | "final" | "other";
    date: string;
    fileSize: string;
    downloadUrl: string;
    status: "completed" | "upcoming" | "draft";
    description?: string;
    duration?: string;
    slidesCount?: number;
    videoUrl?: string;
    presenters?: string[];
}

const PresentationSection = () => {
    const [filter, setFilter] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const presentations: Presentation[] = [
        {
            id: "pres1",
            title: "Project Proposal Presentation",
            type: "proposal",
            date: "January 27, 2025",
            fileSize: "8.2 MB",
            downloadUrl: "https://docs.google.com/presentation/d/1KdwxclhvNBfJGAfE_ZuNOWsss7yaHvu1/edit?usp=sharing&ouid=105366346477729486057&rtpof=true&sd=true",
            status: "completed",
            description: "Initial project proposal outlining research objectives, methodology, and expected outcomes",
            duration: "20 minutes",
            slidesCount: 15,
            presenters: ["Full Team"]
        },
        {
            id: "pres2",
            title: "Progress Presentation 01",
            type: "progress1",
            date: "April 08, 2025",
            fileSize: "12.5 MB",
            downloadUrl: "https://docs.google.com/presentation/d/1DFgvYVqdIb5WUzrT6e-7HFwI6o_cF8c9/edit?usp=sharing&ouid=105366346477729486057&rtpof=true&sd=true",
            status: "completed",
            description: "First progress review covering initial research findings and prototype development",
            duration: "25 minutes",
            slidesCount: 22,
            videoUrl: "#",
            presenters: ["Full Team"]
        },
        {
            id: "pres3",
            title: "Progress Presentation 02",
            type: "progress2",
            date: "September 15, 2025",
            fileSize: "15.8 MB",
            downloadUrl: "https://docs.google.com/presentation/d/1LRluGfqSQZF-aHyjSyUsmju7b-CUd1VP/edit?usp=sharing&ouid=105366346477729486057&rtpof=true&sd=true",
            status: "completed",
            description: "Second progress review demonstrating system implementation and testing results",
            duration: "30 minutes",
            slidesCount: 28,
            videoUrl: "#",
            presenters: ["Full Team"]
        },
        {
            id: "pres4",
            title: "Final Project Presentation",
            type: "final",
            date: "October 28, 2025",
            fileSize: "18.3 MB",
            downloadUrl: "https://docs.google.com/presentation/d/1LRluGfqSQZF-aHyjSyUsmju7b-CUd1VP/edit?usp=sharing&ouid=105366346477729486057&rtpof=true&sd=true",
            status: "completed",
            description: "Final project defense showcasing complete system implementation and research outcomes",
            duration: "10 minutes",
            slidesCount: 35,
            videoUrl: "#",
            presenters: ["Full Team"]
        },

    ];

    const filteredPresentations = presentations.filter((pres) => {
        const matchesFilter = filter === "all" || pres.type === filter;
        const matchesSearch = pres.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (pres.description && pres.description.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "proposal":
                return <FileText className="text-blue-600" size={20} />;
            case "progress1":
                return <Play className="text-green-600" size={20} />;
            case "progress2":
                return <Play className="text-amber-600" size={20} />;
            case "final":
                return <Award className="text-purple-600" size={20} />;
            case "other":
                return <Presentation className="text-gray-600" size={20} />;
            default:
                return <Presentation className="text-gray-600" size={20} />;
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case "proposal":
                return "Proposal";
            case "progress1":
                return "Progress 1";
            case "progress2":
                return "Progress 2";
            case "final":
                return "Final";
            case "other":
                return "Other";
            default:
                return type;
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "completed":
                return (
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full font-medium flex items-center">
                        <CheckCircle size={12} className="mr-1" />
                        Completed
                    </span>
                );
            case "upcoming":
                return (
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium flex items-center">
                        <Clock size={12} className="mr-1" />
                        Upcoming
                    </span>
                );
            case "draft":
                return (
                    <span className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded-full font-medium">
                        Draft
                    </span>
                );
            default:
                return null;
        }
    };

    const presentationStats = {
        total: presentations.length,
        completed: presentations.filter(pres => pres.status === 'completed').length,
        upcoming: presentations.filter(pres => pres.status === 'upcoming').length,
    };

    return (
        <div>
            <PageHeader
                title="Project Presentations"
                subtitle="Access all project presentations, slides, and demonstration materials"
                backgroundImage="https://images.pexels.com/photos/756744/pexels-photo-756744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            />

            <div className="container mx-auto px-4 md:px-6 py-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-center shadow-lg" style={{ background: 'linear-gradient(to right, #3b82f6, #8BC8E7FF)' }}>
                            <div className="text-3xl font-bold mb-2 text-white">{presentationStats.total}</div>
                            <div className="text-blue-100 font-medium text-white">Total Presentations</div>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-center shadow-lg" style={{ background: 'linear-gradient(to right, #3b82f6, #D4B8EBFF)' }}>
                            <div className="text-3xl font-bold mb-2 text-white">{presentationStats.completed}</div>
                            <div className="text-green-100 font-medium text-white">Completed</div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-center shadow-lg" style={{ background: 'linear-gradient(to right, #3b82f6, #1DD8A0FF)' }}>
                            <div className="text-3xl font-bold mb-2 text-white">{presentationStats.upcoming}</div>
                            <div className="text-purple-100 font-medium text-white">Upcoming</div>
                        </div>
                    </div>

                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                        <div className="mb-6 lg:mb-0">
                            <SectionTitle
                                title="Project Presentations"
                            />
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
                                    placeholder="Search presentations..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
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
                                    <option value="all">All Presentations</option>
                                    <option value="proposal">Proposal</option>
                                    <option value="progress1">Progress 1</option>
                                    <option value="progress2">Progress 2</option>
                                    <option value="final">Final</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Presentations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredPresentations.map((presentation) => (
                            <div
                                key={presentation.id}
                                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group"
                            >
                                <div className="p-6">
                                    {/* Header with Icon and Status */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                                            {getTypeIcon(presentation.type)}
                                        </div>
                                        {getStatusBadge(presentation.status)}
                                    </div>

                                    {/* Title and Description */}
                                    <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                                        {presentation.title}
                                    </h3>

                                    {presentation.description && (
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {presentation.description}
                                        </p>
                                    )}

                                    {/* Presentation Details */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Calendar size={16} className="mr-2 flex-shrink-0" />
                                            <span>{presentation.date}</span>
                                        </div>

                                        {presentation.duration && (
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Clock size={16} className="mr-2 flex-shrink-0" />
                                                <span>{presentation.duration}</span>
                                                {presentation.slidesCount && (
                                                    <span className="ml-4">• {presentation.slidesCount} slides</span>
                                                )}
                                            </div>
                                        )}

                                        {presentation.presenters && (
                                            <div className="text-gray-500 text-sm">
                                                <span className="font-medium">Presenters: </span>
                                                {presentation.presenters.join(", ")}
                                            </div>
                                        )}
                                    </div>

                                    {/* File Info and Actions */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="text-sm text-gray-500">
                                            {presentation.fileSize}
                                        </div>

                                        <div className="flex space-x-2">
                                            {presentation.videoUrl && presentation.videoUrl !== "#" && (
                                                <a
                                                    href={presentation.videoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors px-3 py-1 rounded-md bg-blue-50 hover:bg-blue-100"
                                                >
                                                    <Video size={16} className="mr-1" />
                                                    Video
                                                </a>
                                            )}

                                            <a
                                                href={presentation.downloadUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center font-medium text-sm transition-colors px-3 py-1 rounded-md ${presentation.status === 'completed'
                                                    ? 'text-green-600 hover:text-green-800 bg-green-50 hover:bg-green-100'
                                                    : 'text-gray-400 bg-gray-50 cursor-not-allowed'
                                                    }`}
                                            >
                                                {presentation.downloadUrl.startsWith('http') ? (
                                                    <>
                                                        <ExternalLink size={16} className="mr-1" />
                                                        View Slides
                                                    </>
                                                ) : (
                                                    <>
                                                        <Download size={16} className="mr-1" />
                                                        Download
                                                    </>
                                                )}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer with Type Label */}
                                <div className="px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 rounded-b-xl">
                                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        {getTypeLabel(presentation.type)} Presentation
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPresentations.length === 0 && (
                        <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                            <Presentation size={64} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                No presentations found
                            </h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                {searchTerm || filter !== "all"
                                    ? "Try adjusting your search or filter criteria"
                                    : "Presentations will be added as the project progresses"
                                }
                            </p>
                        </div>
                    )}

                    {/* Timeline Section - Horizontal */}
                    <div className="mt-16">
                        <SectionTitle title="Presentation Timeline" />

                        <div className="mt-12">
                            <div className="relative">
                                {/* Horizontal line */}
                                <div className="absolute left-0 right-0 top-1/2 h-1 transform -translate-y-1/2 background-black text-black" style={{ background: 'black' }}></div>

                                {/* Timeline items */}
                                <div className="relative flex justify-between">
                                    {presentations
                                        .filter(pres => pres.status === 'completed')
                                        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                                        .map((presentation, index, array) => (
                                            <div key={presentation.id} className="flex flex-col items-center relative">
                                                {/* Timeline dot */}
                                                <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center mb-4">
                                                    <CheckCircle size={14} className="text-#D4B8EBFF" />
                                                </div>

                                                {/* Content */}
                                                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs text-center">
                                                    <h4 className="font-bold text-gray-900 text-sm mb-2">{presentation.title}</h4>
                                                    <p className="text-xs text-gray-600 mb-2">{presentation.date}</p>
                                                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                                                        {getTypeLabel(presentation.type)}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                        <div className="flex items-start space-x-6">
                            <div className="p-4 bg-white rounded-xl shadow-sm border border-blue-200 flex-shrink-0">
                                <Presentation className="text-blue-600" size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Presentation Materials Access
                                </h3>
                                <p className="text-gray-700 mb-6 text-lg">
                                    All project presentations are available for academic reference and review.
                                    These materials showcase the evolution of the TALENT TREK research project
                                    from proposal to final implementation.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">Available Materials:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-center">
                                                <FileText size={18} className="mr-3 text-blue-600" />
                                                Presentation Slides (PDF/PPT)
                                            </li>
                                            <li className="flex items-center">
                                                <Video size={18} className="mr-3 text-green-600" />
                                                Recording Links (When Available)
                                            </li>
                                            <li className="flex items-center">
                                                <Award size={18} className="mr-3 text-purple-600" />
                                                Demonstration Materials
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">Future Presentations:</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li>• Research Symposium Presentations</li>
                                            <li>• Industry Demo Sessions</li>
                                            <li>• Conference Submissions</li>
                                            <li>• Workshop Materials</li>
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

export default PresentationSection;