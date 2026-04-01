import React from 'react';
import { Shield, ShieldCheck, FileText, Eye, Globe, Lock, Users } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer id="contact" className="bg-primary pt-16 pb-8 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-2xl font-black text-white font-headline flex items-center gap-2">
            <img src="/dss-logo.png" alt="DSS Logo" className="w-8 h-8 object-contain" />
            DSS
          </div>
          <p className="text-white/70 text-sm leading-relaxed">Securing India's future through discipline and absolute integrity. Providing elite protection services across PAN India.</p>
          <div className="space-y-2 pt-2">
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Contact Us</p>
            <p className="text-white text-sm">9450783665</p>
            <p className="text-white text-sm">info@dhaalsecurity.com</p>
          </div>
        </div>
        <div>
          <h4 className="text-secondary-container font-headline uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
          <ul className="space-y-3">
            <li>
              <button 
                onClick={() => setCurrentPage('services')}
                className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm text-left"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('home')} // Placeholder for About Us
                className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('faq')}
                className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm text-left"
              >
                FAQ
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('gallery')} // Placeholder for Case Studies
                className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm text-left"
              >
                Case Studies
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-secondary-container font-headline uppercase tracking-widest text-xs font-bold mb-6">Legal & Ethics</h4>
          <ul className="space-y-3">
            <li><a className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Privacy Policy</a></li>
            <li><a className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Terms of Service</a></li>
            <li><a className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Ethical Standards</a></li>
            <li><a className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Compliance</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-secondary-container font-headline uppercase tracking-widest text-xs font-bold mb-6">Connect</h4>
          <ul className="space-y-3">
            <li><a className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Global Locations</a></li>
            <li>
              <button 
                onClick={() => setCurrentPage('careers')}
                className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm text-left"
              >
                Career Portal
              </button>
            </li>
            <li><a className="text-white/70 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Media Kit</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs">© 2024 DSS. All rights reserved.</p>
        <div className="flex gap-6">
          <ShieldCheck className="w-5 h-5 text-white/40 hover:text-secondary-container transition-colors cursor-pointer" />
          <FileText className="w-5 h-5 text-white/40 hover:text-secondary-container transition-colors cursor-pointer" />
          <Eye className="w-5 h-5 text-white/40 hover:text-secondary-container transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
