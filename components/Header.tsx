'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Process', id: 'how-it-works' },
    { label: 'Products', id: 'products' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
  <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}
  >
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20"
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <Leaf className="h-7 w-7" />
            <span className="hidden sm:inline">The Plastic Project</span>
            <span className="sm:hidden">TPP</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('sustainability-form')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 hover:bg-emerald-50 rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('sustainability-form')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
