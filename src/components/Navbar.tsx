import React from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Careers', id: 'careers' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-[0_20px_40px_rgba(0,0,60,0.06)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div 
          className="text-xl font-bold tracking-tighter text-primary font-headline uppercase cursor-pointer flex items-center gap-2"
          onClick={() => setCurrentPage('home')}
        >
          <img src="dss-logo.png" alt="DSS Logo" className="w-10 h-10 object-contain" />
          DSS
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-sm font-medium transition-all duration-300 ${
                currentPage === link.id 
                  ? 'text-primary font-bold border-b-2 border-secondary-container pb-1' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentPage('contact')}
            className="hidden sm:block bg-secondary-container text-on-secondary-fixed px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-80 transition-all duration-300 active:scale-95"
          >
            Get a Quote
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-primary/10 p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg ${
                currentPage === link.id 
                  ? 'bg-primary-container text-on-primary' 
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => {
              setCurrentPage('contact');
              setIsOpen(false);
            }}
            className="w-full bg-secondary-container text-on-secondary-fixed px-6 py-3 rounded-lg font-bold text-sm"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
