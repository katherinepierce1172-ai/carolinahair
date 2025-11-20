import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { AppView } from '../types';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onChangeView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    setMobileMenuOpen(false);
    if (label === 'Home') onChangeView(AppView.HOME);
    if (label === 'Services') onChangeView(AppView.SERVICES);
    if (label === 'AI Consultant') onChangeView(AppView.CONSULTANT);
    if (label === 'Book Now') onChangeView(AppView.BOOKING);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => handleNavClick('Home')}
        >
          <div className="bg-stone-900 text-gold-500 p-2 rounded-full transition-transform group-hover:scale-110">
            <Scissors size={20} />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl tracking-widest leading-none font-semibold ${isScrolled ? 'text-stone-900' : 'text-stone-800'}`}>
              CAROLINA
            </span>
            <span className={`text-[0.65rem] uppercase tracking-[0.2em] ${isScrolled ? 'text-stone-600' : 'text-stone-600'}`}>
              Hair Studios
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.label)}
              className={`text-sm font-medium uppercase tracking-wider hover:text-gold-600 transition-colors ${
                link.label === 'Book Now' 
                  ? 'px-5 py-2 bg-stone-900 text-white hover:bg-stone-800 hover:text-white rounded-none'
                  : (isScrolled ? 'text-stone-700' : 'text-stone-800')
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-stone-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 md:hidden flex flex-col p-6 gap-4">
           {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.label)}
              className="text-left text-lg font-serif text-stone-800 py-2 border-b border-stone-100 last:border-none"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;