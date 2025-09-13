import React from 'react';
import { Sun, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-full shadow-lg">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight">RizqTek</span>
                <div className="text-emerald-400 text-sm font-medium">Sustaining Futures with Ethical Tech</div>
              </div>
            </button>
            
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed font-light">
              Empowering individuals, startups, and ethical businesses through data-driven solutions, 
              automation, and high-impact digital products — all rooted in Islamic values.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">hello@rizqtek.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">+91 84487 22686</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">Global Remote Team</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Automation Tools</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Website SEO</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">AI Career Tools</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">SaaS Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#industries" className="text-slate-300 hover:text-emerald-400 transition-colors">Industries</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0 font-light">
              © 2025 RizqTek. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-slate-400 font-light">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and Islamic values</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
