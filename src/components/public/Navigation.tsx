'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import logo from '../../assets/public/logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Domain', href: '/domain' },
    { name: 'Methodology', href: '/methodology' },
    { name: 'Milestones', href: '/milestones' },
    { name: 'Documents', href: '/documents' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt="Talent Trek Logo"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-cyan-600"> TALENT TREK</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActiveLink(item.href)
                    ? 'text-cyan-600 bg-cyan-50 font-semibold'
                    : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 p-2 rounded-lg transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full text-left block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-300 border-b border-gray-100 last:border-b-0 ${isActiveLink(item.href)
                      ? 'text-cyan-600 bg-cyan-50 font-semibold'
                      : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}