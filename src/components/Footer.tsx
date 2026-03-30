import React from 'react';
import { Shield, ShieldCheck, FileText, Eye, Globe, Lock, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary pt-16 pb-8 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-2xl font-black text-white font-headline flex items-center gap-2">
            <Shield className="w-6 h-6 text-secondary-container fill-secondary-container" />
            Dhaal Security
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">Securing India's future through discipline, technology, and absolute integrity.</p>
        </div>
        <div>
          <h4 className="text-secondary-container font-headline uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Services</a></li>
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">About Us</a></li>
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">FAQ</a></li>
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Case Studies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-secondary-container font-headline uppercase tracking-widest text-xs font-bold mb-6">Legal & Ethics</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Terms of Service</a></li>
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Ethical Standards</a></li>
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Compliance</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-secondary-container font-headline uppercase tracking-widest text-xs font-bold mb-6">Connect</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Global Locations</a></li>
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Career Portal</a></li>
            <li><a className="text-slate-300 hover:text-white transition-colors hover:underline decoration-secondary-container underline-offset-4 text-sm" href="#">Media Kit</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs">© 2024 Dhaal Security Services. All rights reserved. Professional License #99203.</p>
        <div className="flex gap-6">
          <ShieldCheck className="w-5 h-5 text-slate-400 hover:text-secondary-container transition-colors cursor-pointer" />
          <FileText className="w-5 h-5 text-slate-400 hover:text-secondary-container transition-colors cursor-pointer" />
          <Eye className="w-5 h-5 text-slate-400 hover:text-secondary-container transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
