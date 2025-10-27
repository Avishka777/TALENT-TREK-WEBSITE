'use client';

import { useState } from "react";
import PageHeader from "../ui/PageHeader";
import SectionTitle from "../ui/SectionTitle";
import { Mail, Phone, MapPin, Send, Clock, Users, MessageCircle } from "lucide-react";

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Message sent successfully! We will get back to you soon.');
        }, 2000);
    };

    return (
        <div>
            <PageHeader
                title="Contact Us"
                subtitle="Get in Touch with Our Research Team"
                backgroundImage="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            />

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="max-w-6xl mx-auto">
                    <SectionTitle
                        title="Let's Connect"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Team Contact */}
                            <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Users className="mr-2 text-cyan-600" size={24} />
                                    Research Team
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-700">
                                        <Mail size={18} className="mr-3 text-cyan-600" />
                                        <span>talenttrek@sliit.lk</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Phone size={18} className="mr-3 text-cyan-600" />
                                        <span>+94 11 754 4801</span>
                                    </div>
                                </div>
                            </div>

                            {/* Supervisors */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Supervisors</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Dr. Prasanna Sumathipala</h4>
                                        <p className="text-sm text-cyan-600">Research Supervisor</p>
                                        <p className="text-sm text-gray-600">prasanna@sliit.lk</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Ms. Kaushalya Rajapakse</h4>
                                        <p className="text-sm text-cyan-600">Co-Supervisor</p>
                                        <p className="text-sm text-gray-600">kaushalya@sliit.lk</p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                                <div className="flex items-center mb-3">
                                    <Clock className="mr-2 text-amber-600" size={20} />
                                    <h3 className="font-bold text-gray-900">Response Time</h3>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    We typically respond to all inquiries within 24-48 hours. For urgent matters,
                                    please contact us via phone.
                                </p>
                            </div>

                            {/* Location */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                                <div className="flex items-center mb-3">
                                    <MapPin className="mr-2 text-cyan-600" size={20} />
                                    <h3 className="font-bold text-gray-900">Location</h3>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Faculty of Computing<br />
                                    SLIIT Malabe Campus<br />
                                    New Kandy Road, Malabe 10115<br />
                                    Sri Lanka
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <MessageCircle className="mr-3 text-cyan-600" size={24} />
                                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                                </div>

                                <form
                                    action="https://api.web3forms.com/submit"
                                    method="POST"
                                    className="space-y-6">
                                    {/* Hidden access key */}
                                    <input
                                        type="hidden"
                                        name="access_key"
                                        value="dcb77939-ab82-43fe-832c-9a9effb83e94"
                                    />

                                    {/* Name and Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 bg-gray-50"
                                                placeholder="Enter your full name"
                                                type="text"
                                                name="name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 bg-gray-50"
                                                type="email"
                                                placeholder="Enter your email address"
                                                name="email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Organization and Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Organization
                                            </label>
                                            <input
                                                className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 bg-gray-50"
                                                placeholder="Your company or institution"
                                                type="text"
                                                name="organization"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 bg-gray-50"
                                                placeholder="Your contact number"
                                                type="tel"
                                                name="phone"
                                            />
                                        </div>
                                    </div>

                                    {/* Inquiry Type */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Inquiry Type *
                                        </label>
                                        <select
                                            className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 bg-gray-50"
                                            name="inquiry_type"
                                            required
                                        >
                                            <option value="">Select inquiry type</option>
                                            <option value="research_collaboration">Research Collaboration</option>
                                            <option value="technical_inquiry">Technical Inquiry</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="academic_interest">Academic Interest</option>
                                            <option value="general">General Information</option>
                                            <option value="feedback">Feedback & Suggestions</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200 bg-gray-50"
                                            placeholder="Please describe your inquiry in detail..."
                                            name="message"
                                            rows={6}
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transform'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} className="mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-12 bg-cyan-50 p-8 rounded-2xl border border-cyan-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="text-cyan-600" size={32} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                                <p className="text-gray-700 text-sm">
                                    We ensure prompt responses to all research inquiries and collaboration requests
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="text-cyan-600" size={32} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
                                <p className="text-gray-700 text-sm">
                                    Connect with our dedicated researchers and academic supervisors
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MessageCircle className="text-cyan-600" size={32} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Open Collaboration</h3>
                                <p className="text-gray-700 text-sm">
                                    We welcome research partnerships and academic collaborations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;