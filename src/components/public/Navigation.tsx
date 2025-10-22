'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import logo from '../../assets/public/logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-white shadow-sm border-b border-gray-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigation('/')}>
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt="Talent Trek Logo"
                  className="h-8 w-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-cyan-600">TALENT TREK</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${isActiveLink(item.href)
                  ? 'text-cyan-600 bg-cyan-50 font-semibold shadow-sm'
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
              className={`p-2 rounded-lg transition-all duration-300 ${isOpen
                ? 'text-cyan-600 bg-cyan-50'
                : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <div
              className="absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full text-left block px-4 py-4 rounded-lg text-base font-medium transition-all duration-300 ${isActiveLink(item.href)
                      ? 'text-cyan-600 bg-cyan-50 font-semibold shadow-sm'
                      : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* App-like bottom padding for mobile */}
              <div className="h-4 bg-gray-50"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}