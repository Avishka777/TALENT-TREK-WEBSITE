import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo from '../../assets/public/logo.png';

const Footer = () => {

    const resources = [
        { name: 'Documents', href: '#documents' },
        { name: 'Milestones', href: '#milestones' },
        { name: 'Presentations', href: '#presentations' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex justify-between gap-8">
                    {/* Brand Section */}
                    <div className="max-w-lg">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img
                                    src={logo.src}
                                    alt="Talent Trek Logo"
                                    className="h-10 w-auto"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-600">TALENT TREK</h3>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Computational Framework for Optimized Recruitment via Algorithmic Skill Profiling.
                            Revolutionizing IT hiring through AI-powered solutions.
                        </p>
                        <div className="flex items-center text-gray-300 text-sm">
                            <MapPin size={16} className="mr-2 text-cyan-400" />
                            <span>Faculty of Computing, SLIIT</span>
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        {/* Resources */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
                            <ul className="space-y-2">
                                {resources.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center"
                                        >
                                            <ExternalLink size={14} className="mr-2" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-300 text-sm">
                                    <Mail size={16} className="mr-3 text-cyan-400" />
                                    <span>talenttrek@sliit.lk</span>
                                </div>
                                <div className="flex items-center text-gray-300 text-sm">
                                    <Phone size={16} className="mr-3 text-cyan-400" />
                                    <span>+94 11 754 4801</span>
                                </div>
                                <div className="flex items-start text-gray-300 text-sm">
                                    <MapPin size={16} className="mr-3 text-cyan-400 mt-0.5" />
                                    <span>SLIIT Malabe Campus</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2025 TALENT TREK Research Project. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 mt-2 md:mt-0">
                            <span className="text-gray-400 text-sm">Faculty of Computing</span>
                            <span className="text-cyan-400 font-semibold text-sm">SLIIT</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;