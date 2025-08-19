import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 via-white to-slate-50 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-5 w-5 text-emerald-600 animate-pulse" />
            <span className="text-emerald-700 font-semibold tracking-wide text-sm uppercase">Ethical Tech Solutions</span>
            <Sparkles className="h-5 w-5 text-emerald-600 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Sustaining Futures with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
              Ethical Tech
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            RizqTek empowers individuals, startups, and ethical businesses through data-driven solutions, 
            automation, and high-impact digital products — all rooted in <strong>halal rizq</strong>, 
            <strong> barakah</strong>, <strong>tawakkul</strong>, and <strong>ihsan</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 shadow-lg"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/80 hover:shadow-lg"
            >
              View Our Work
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5+</div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Halal & Ethical</div>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
